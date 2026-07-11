// =====================================================================
// admin-panel.js
// منطق کامل پنل ادمین — فقط برای ادمین‌ها
// =====================================================================

// متغیرهای سراسری
let currentUserProfile = null;
let currentUserName = "کاربر";

// =====================================================================
// 🔧 تنظیم Supabase
// =====================================================================
const SUPABASE_URL = "https://cwwqmushilpxzpcpjute.supabase.co";
const SUPABASE_KEY = "sb_publishable__AzVitbAoaYfEyvJMnIkkQ_AOkXCfbK";

const { createClient } = window.supabase;
const SUPABASE = createClient(SUPABASE_URL, SUPABASE_KEY);

// =====================================================================
// 🎯 تهیه‌کننده اصلی
// =====================================================================
document.addEventListener("DOMContentLoaded", async () => {
    try {
        // بررسی نقش کاربر
        const profile = await AdminAuth.initRoleBasedUI();
        if (!profile || profile.role !== "admin") {
            window.location.href = "/";
            return;
        }

        currentUserProfile = profile;
        currentUserName = profile.full_name || profile.email || "ادمین";

        // نمایش اطلاعات کاربر
        document.getElementById("user-name").textContent = currentUserName;
        const avatar = document.getElementById("user-avatar");
        if (avatar) avatar.textContent = currentUserName[0]?.toUpperCase() || "👤";

        // تهیه‌کننده تب‌ها
        initTabs();

        // تهیه‌کننده داشبورد
        await loadDashboard();

        // تهیه‌کننده قسمت‌های مختلف
        initUsers();
        initFiles();
        initMessages();
        initSuggestions();
        initAnnouncements();
        initLogs();

        // دکمه خروج
        document.getElementById("logout-btn")?.addEventListener("click", async () => {
            await AdminAuth.logout();
            window.location.href = "/";
        });

    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در بارگذاری پنل ادمین", "danger");
    }
});

// =====================================================================
// 📊 DASHBOARD
// =====================================================================
async function loadDashboard() {
    try {
        // دریافت آمار
        const [
            { count: usersCount },
            { count: filesCount },
            { count: messagesCount },
            { count: suggestionsCount },
            { data: logs }
        ] = await Promise.all([
            SUPABASE.from("profiles").select("*", { count: "exact", head: true }),
            SUPABASE.from("public_files").select("*", { count: "exact", head: true }),
            SUPABASE.from("messages").select("*", { count: "exact", head: true }),
            SUPABASE.from("suggestions").select("*", { count: "exact", head: true }),
            SUPABASE.from("admin_logs")
                .select("*, admin_id(full_name, email)")
                .order("created_at", { ascending: false })
                .limit(10)
        ]);

        // نمایش آمار
        const statsGrid = document.getElementById("stats-grid");
        statsGrid.innerHTML = `
            <div class="stat-card">
                <span class="number">${usersCount || 0}</span>
                <span class="label">کل کاربران</span>
            </div>
            <div class="stat-card">
                <span class="number">${filesCount || 0}</span>
                <span class="label">کل فایل‌ها</span>
            </div>
            <div class="stat-card">
                <span class="number">${messagesCount || 0}</span>
                <span class="label">پیام‌های دریافتی</span>
            </div>
            <div class="stat-card">
                <span class="number">${suggestionsCount || 0}</span>
                <span class="label">پیشنهادها</span>
            </div>
        `;

        // نمایش لاگ‌های اخیر
        const tbody = document.getElementById("logs-tbody");
        if (logs && logs.length > 0) {
            tbody.innerHTML = logs.map(log => `
                <tr>
                    <td>${translateAction(log.action)}</td>
                    <td>${log.target_type || "-"}</td>
                    <td>${log.admin_id?.full_name || log.admin_id?.email || "-"}</td>
                    <td>${formatDate(log.created_at)}</td>
                    <td>
                        <details style="cursor: pointer;">
                            <summary>مشاهده</summary>
                            <pre style="background: rgba(0,0,0,.2); padding: 8px; border-radius: 4px; font-size: .8rem;">
${JSON.stringify(log.details, null, 2)}</pre>
                        </details>
                    </td>
                </tr>
            `).join("");
        }
    } catch (error) {
        console.error("خطا در بارگذاری داشبورد:", error);
        showAlert("خطا در بارگذاری آمار", "danger");
    }
}

// =====================================================================
// 👥 USERS MANAGEMENT
// =====================================================================
async function initUsers() {
    const searchInput = document.getElementById("users-search");
    searchInput?.addEventListener("input", debounce(loadUsers, 300));
    await loadUsers();
}

async function loadUsers() {
    try {
        const search = document.getElementById("users-search")?.value?.trim() || "";

        let query = SUPABASE
            .from("profiles")
            .select("*")
            .order("created_at", { ascending: false });

        if (search) {
            query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%`);
        }

        const { data, error } = await query;
        if (error) throw error;

        const tbody = document.getElementById("users-tbody");
        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="empty-state">کاربری یافت نشد</td></tr>';
            return;
        }

        tbody.innerHTML = data.map(user => `
            <tr>
                <td>${escapeHtml(user.full_name || "-")}</td>
                <td>${escapeHtml(user.email)}</td>
                <td><span class="badge ${user.role === 'admin' ? 'badge-admin' : 'badge-user'}">
                    ${user.role === 'admin' ? '⭐ ادمین' : 'کاربر'}
                </span></td>
                <td>${formatDate(user.created_at)}</td>
                <td>
                    <button class="btn" onclick="toggleUserRole('${user.id}', '${user.role}')">
                        ${user.role === 'admin' ? '🔽 حذف ادمین' : '⬆️ ارتقا'}
                    </button>
                </td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در بارگذاری کاربران", "danger");
    }
}

async function toggleUserRole(userId, currentRole) {
    // جلوگیری از حذف نقش خود
    if (userId === currentUserProfile.id && currentRole === "admin") {
        if (!confirm("این حساب خودِ شماست. نقش ادمین را از خودتان حذف می‌کنید؟")) {
            return;
        }
    }

    try {
        const newRole = currentRole === "admin" ? "user" : "admin";
        await AdminAuth.makeAdmin(userId);
        showAlert("نقش کاربر با موفقیت تغییر یافت", "success");
        await loadUsers();
    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در تغییر نقش کاربر", "danger");
    }
}

// =====================================================================
// 📁 FILES MANAGEMENT
// =====================================================================
async function initFiles() {
    const form = document.getElementById("file-upload-form");
    const searchInput = document.getElementById("files-search");

    form?.addEventListener("submit", uploadFile);
    searchInput?.addEventListener("input", debounce(loadFiles, 300));

    await loadFiles();
}

async function uploadFile(e) {
    e.preventDefault();

    const title = document.getElementById("file-title").value.trim();
    const description = document.getElementById("file-desc").value.trim();
    const category = document.getElementById("file-category").value;
    const isFeatured = document.getElementById("file-featured").checked;
    const file = document.getElementById("file-input").files[0];

    if (!file) {
        showAlert("فایلی انتخاب نشده", "danger");
        return;
    }

    try {
        const uploadBtn = e.target.querySelector("button[type='submit']");
        uploadBtn.disabled = true;
        uploadBtn.textContent = "در حال آپلود...";

        // آپلود فایل
        const path = `public/${Date.now()}_${sanitizeFileName(file.name)}`;
        const { error: uploadError } = await SUPABASE.storage
            .from("public-files")
            .upload(path, file);

        if (uploadError) throw uploadError;

        // دریافت URL
        const { data: urlData } = SUPABASE.storage
            .from("public-files")
            .getPublicUrl(path);

        // ذخیره در دیتابیس
        const { error: insertError } = await SUPABASE
            .from("public_files")
            .insert({
                title,
                description,
                category,
                file_name: file.name,
                file_url: urlData.publicUrl,
                file_size: file.size,
                is_featured: isFeatured,
                uploaded_by: currentUserProfile.id
            });

        if (insertError) throw insertError;

        showAlert("فایل با موفقیت آپلود شد", "success");
        e.target.reset();
        await loadFiles();

    } catch (error) {
        console.error("خطا:", error);
        showAlert(`خطا: ${error.message}`, "danger");
    } finally {
        const uploadBtn = e.target.querySelector("button[type='submit']");
        uploadBtn.disabled = false;
        uploadBtn.textContent = "📤 آپلود";
    }
}

async function loadFiles() {
    try {
        const search = document.getElementById("files-search")?.value?.trim() || "";

        let query = SUPABASE
            .from("public_files")
            .select("*")
            .order("created_at", { ascending: false });

        if (search) query = query.ilike("title", `%${search}%`);

        const { data, error } = await query;
        if (error) throw error;

        const tbody = document.getElementById("files-tbody");
        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="empty-state">فایلی یافت نشد</td></tr>';
            return;
        }

        tbody.innerHTML = data.map(file => `
            <tr>
                <td>${escapeHtml(file.title)}</td>
                <td>${file.category || "-"}</td>
                <td>${formatBytes(file.file_size)}</td>
                <td>${file.download_count || 0}</td>
                <td>
                    <span class="badge ${file.is_hidden ? 'badge-danger' : 'badge-success'}">
                        ${file.is_hidden ? '🔒 مخفی' : '👁️ نمایان'}
                    </span>
                </td>
                <td>
                    <button class="btn" onclick="toggleFileHidden('${file.id}', ${file.is_hidden})">
                        ${file.is_hidden ? '👁️ نمایش' : '🔒 مخفی'}
                    </button>
                    <button class="btn btn-danger" onclick="deleteFile('${file.id}')">حذف</button>
                </td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در بارگذاری فایل‌ها", "danger");
    }
}

async function toggleFileHidden(fileId, currentlyHidden) {
    try {
        const { error } = await SUPABASE
            .from("public_files")
            .update({ is_hidden: !currentlyHidden })
            .eq("id", fileId);

        if (error) throw error;

        await AdminAuth.logAdminAction("file_visibility_changed", fileId, "file", {
            is_hidden: !currentlyHidden
        });

        showAlert("وضعیت فایل تغییر یافت", "success");
        await loadFiles();
    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در تغییر وضعیت فایل", "danger");
    }
}

async function deleteFile(fileId) {
    if (!confirm("این فایل حذف شود؟")) return;

    try {
        const { error } = await SUPABASE
            .from("public_files")
            .delete()
            .eq("id", fileId);

        if (error) throw error;

        await AdminAuth.logAdminAction("file_deleted", fileId, "file");

        showAlert("فایل با موفقیت حذف شد", "success");
        await loadFiles();
    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در حذف فایل", "danger");
    }
}

// =====================================================================
// 💬 MESSAGES MANAGEMENT
// =====================================================================
async function initMessages() {
    const searchInput = document.getElementById("messages-search");
    const filterSelect = document.getElementById("messages-filter");

    searchInput?.addEventListener("input", debounce(loadMessages, 300));
    filterSelect?.addEventListener("change", loadMessages);

    await loadMessages();
}

async function loadMessages() {
    try {
        const search = document.getElementById("messages-search")?.value?.trim() || "";
        const filter = document.getElementById("messages-filter")?.value || "";

        let query = SUPABASE
            .from("messages")
            .select("*")
            .order("created_at", { ascending: false });

        if (search) query = query.or(`subject.ilike.%${search}%,email.ilike.%${search}%`);
        if (filter) query = query.eq("status", filter);

        const { data, error } = await query;
        if (error) throw error;

        const tbody = document.getElementById("messages-tbody");
        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="empty-state">پیامی یافت نشد</td></tr>';
            return;
        }

        tbody.innerHTML = data.map(msg => `
            <tr>
                <td>${escapeHtml(msg.subject)}</td>
                <td>${escapeHtml(msg.email)}</td>
                <td><span class="badge ${getBadgeClass(msg.status)}">${msg.status}</span></td>
                <td>${formatDate(msg.created_at)}</td>
                <td>
                    <button class="btn" onclick="viewMessage('${msg.id}')">مشاهده</button>
                </td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در بارگذاری پیام‌ها", "danger");
    }
}

async function viewMessage(messageId) {
    try {
        const { data: message, error } = await SUPABASE
            .from("messages")
            .select("*")
            .eq("id", messageId)
            .single();

        if (error) throw error;

        // علامت‌گذاری به عنوان خوانده شده
        if (message.status === "unread") {
            await SUPABASE
                .from("messages")
                .update({ status: "read" })
                .eq("id", messageId);
        }

        // نمایش پیام
        alert(`
موضوع: ${message.subject}
فرستنده: ${message.email}
تاریخ: ${formatDate(message.created_at)}

پیام:
${message.message}
        `);

        await loadMessages();
    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در بارگذاری پیام", "danger");
    }
}

// =====================================================================
// 💡 SUGGESTIONS MANAGEMENT
// =====================================================================
async function initSuggestions() {
    const searchInput = document.getElementById("suggestions-search");
    const filterSelect = document.getElementById("suggestions-filter");

    searchInput?.addEventListener("input", debounce(loadSuggestions, 300));
    filterSelect?.addEventListener("change", loadSuggestions);

    await loadSuggestions();
}

async function loadSuggestions() {
    try {
        const search = document.getElementById("suggestions-search")?.value?.trim() || "";
        const filter = document.getElementById("suggestions-filter")?.value || "";

        let query = SUPABASE
            .from("suggestions")
            .select("*")
            .order("votes", { ascending: false });

        if (search) query = query.ilike("title", `%${search}%`);
        if (filter) query = query.eq("status", filter);

        const { data, error } = await query;
        if (error) throw error;

        const tbody = document.getElementById("suggestions-tbody");
        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="empty-state">پیشنهادی یافت نشد</td></tr>';
            return;
        }

        tbody.innerHTML = data.map(sugg => `
            <tr>
                <td>${escapeHtml(sugg.title)}</td>
                <td>${sugg.category || "-"}</td>
                <td>${sugg.user_id}</td>
                <td><span class="badge ${getBadgeClass(sugg.status)}">${sugg.status}</span></td>
                <td>👍 ${sugg.votes}</td>
                <td>
                    <button class="btn" onclick="updateSuggestionStatus('${sugg.id}', 'under_review')">
                        بررسی
                    </button>
                    <button class="btn" onclick="updateSuggestionStatus('${sugg.id}', 'implemented')">
                        اجرا
                    </button>
                </td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در بارگذاری پیشنهادها", "danger");
    }
}

async function updateSuggestionStatus(suggestionId, newStatus) {
    try {
        const { error } = await SUPABASE
            .from("suggestions")
            .update({ status: newStatus })
            .eq("id", suggestionId);

        if (error) throw error;

        showAlert("وضعیت پیشنهاد تغییر یافت", "success");
        await loadSuggestions();
    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در تغییر وضعیت", "danger");
    }
}

// =====================================================================
// 📢 ANNOUNCEMENTS MANAGEMENT
// =====================================================================
async function initAnnouncements() {
    const form = document.getElementById("announcement-form");
    form?.addEventListener("submit", createAnnouncement);
    await loadAnnouncements();
}

async function createAnnouncement(e) {
    e.preventDefault();

    const title = document.getElementById("announcement-title").value.trim();
    const content = document.getElementById("announcement-content").value.trim();
    const category = document.getElementById("announcement-type").value;
    const expiresAt = document.getElementById("announcement-expires").value;

    try {
        const { error } = await SUPABASE
            .from("announcements")
            .insert({
                title,
                content,
                category,
                expires_at: expiresAt || null,
                created_by: currentUserProfile.id
            });

        if (error) throw error;

        await AdminAuth.logAdminAction("announcement_created", null, "announcement", { title });

        showAlert("اطلاعیه با موفقیت ایجاد شد", "success");
        e.target.reset();
        await loadAnnouncements();

    } catch (error) {
        console.error("خطا:", error);
        showAlert(`خطا: ${error.message}`, "danger");
    }
}

async function loadAnnouncements() {
    try {
        const { data, error } = await SUPABASE
            .from("announcements")
            .select("*")
            .eq("is_active", true)
            .order("created_at", { ascending: false });

        if (error) throw error;

        const tbody = document.getElementById("announcements-tbody");
        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="empty-state">اطلاعیه‌ای یافت نشد</td></tr>';
            return;
        }

        tbody.innerHTML = data.map(ann => `
            <tr>
                <td>${escapeHtml(ann.title)}</td>
                <td><span class="badge">${ann.category}</span></td>
                <td>✅ فعال</td>
                <td>${ann.expires_at ? formatDate(ann.expires_at) : "بدون انقضا"}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteAnnouncement('${ann.id}')">حذف</button>
                </td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در بارگذاری اطلاعیه‌ها", "danger");
    }
}

async function deleteAnnouncement(annId) {
    if (!confirm("این اطلاعیه حذف شود؟")) return;

    try {
        const { error } = await SUPABASE
            .from("announcements")
            .update({ is_active: false })
            .eq("id", annId);

        if (error) throw error;

        await AdminAuth.logAdminAction("announcement_deleted", annId, "announcement");

        showAlert("اطلاعیه با موفقیت حذف شد", "success");
        await loadAnnouncements();
    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در حذف اطلاعیه", "danger");
    }
}

// =====================================================================
// 📋 LOGS MANAGEMENT
// =====================================================================
async function initLogs() {
    const searchInput = document.getElementById("logs-search");
    searchInput?.addEventListener("input", debounce(loadFullLogs, 300));
    await loadFullLogs();
}

async function loadFullLogs() {
    try {
        const search = document.getElementById("logs-search")?.value?.trim() || "";

        let query = SUPABASE
            .from("admin_logs")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(100);

        const { data, error } = await query;
        if (error) throw error;

        const tbody = document.getElementById("full-logs-tbody");
        if (!data || data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="empty-state">لاگی یافت نشد</td></tr>';
            return;
        }

        tbody.innerHTML = data.map(log => `
            <tr>
                <td>${translateAction(log.action)}</td>
                <td>${log.target_type || "-"}</td>
                <td>${log.admin_id || "-"}</td>
                <td>${formatDate(log.created_at)}</td>
                <td>
                    <details>
                        <summary>جزئیات</summary>
                        <pre>${JSON.stringify(log.details, null, 2)}</pre>
                    </details>
                </td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("خطا:", error);
        showAlert("خطا در بارگذاری لاگ‌ها", "danger");
    }
}

// =====================================================================
// 🎯 TABS MANAGEMENT
// =====================================================================
function initTabs() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // حذف active از همه تب‌ها و پنل‌ها
            tabs.forEach(t => t.classList.remove("active"));
            document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));

            // اضافه کردن active به تب و پنل انتخاب شده
            tab.classList.add("active");
            const tabName = tab.dataset.tab;
            document.getElementById(`panel-${tabName}`).classList.add("active");
        });
    });
}

// =====================================================================
// 🛠️ UTILITY FUNCTIONS
// =====================================================================
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function escapeHtml(str) {
    if (!str) return "";
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return String(str).replace(/[&<>"']/g, m => map[m]);
}

function formatBytes(bytes) {
    if (!bytes) return "-";
    const units = ["B", "KB", "MB", "GB"];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }
    return `${size.toFixed(1)} ${units[unitIndex]}`;
}

function formatDate(isoString) {
    if (!isoString) return "-";
    const date = new Date(isoString);
    return date.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function sanitizeFileName(name) {
    return name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
}

function getBadgeClass(status) {
    const classes = {
        "unread": "badge-warning",
        "read": "badge-success",
        "replied": "badge-success",
        "open": "badge-warning",
        "under_review": "badge-warning",
        "implemented": "badge-success",
        "rejected": "badge-danger"
    };
    return classes[status] || "badge";
}

function translateAction(action) {
    const translations = {
        "user_deleted": "کاربر حذف شد",
        "user_role_changed": "نقش کاربر تغییر یافت",
        "file_deleted": "فایل حذف شد",
        "file_visibility_changed": "نمایش‌پذیری فایل تغییر یافت",
        "file_hidden": "فایل مخفی شد",
        "announcement_created": "اطلاعیه ایجاد شد",
        "announcement_deleted": "اطلاعیه حذف شد"
    };
    return translations[action] || action;
}

function showAlert(message, type = "info") {
    const container = document.getElementById("alerts-container");
    const className = `alert alert-${type}`;
    const icon = {
        "success": "✅",
        "danger": "❌",
        "info": "ℹ️",
        "warning": "⚠️"
    }[type] || "ℹ️";

    const alertEl = document.createElement("div");
    alertEl.className = className;
    alertEl.innerHTML = `
        <span>${icon}</span>
        <span>${message}</span>
    `;

    container.appendChild(alertEl);

    setTimeout(() => {
        alertEl.remove();
    }, 4000);
}

// ✅ تمام کد آماده است!
