// =====================================================================
// auth.js
// سیستم احراز هویت و مدیریت نقش‌های کاربری
// =====================================================================

// 🔧 تنظیم Supabase
const SUPABASE_URL = "https://cwwqmushilpxzpcpjute.supabase.co";
const SUPABASE_KEY = "sb_publishable__AzVitbAoaYfEyvJMnIkkQ_AOkXCfbK";

const { createClient } = window.supabase;
const SUPABASE = createClient(SUPABASE_URL, SUPABASE_KEY);

class AdminAuth {
    /**
     * بررسی اینکه آیا کاربر وارد شده است یا خیر
     */
    static async checkAuth() {
        const { data: { user } } = await SUPABASE.auth.getUser();
        return user;
    }

    /**
     * بدست آوردن پروفایل کاربر فعلی
     */
    static async getUserProfile() {
        const user = await this.checkAuth();
        if (!user) return null;

        const { data, error } = await SUPABASE
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

        if (error) {
            console.error("خطا در بدست آوردن پروفایل:", error);
            return null;
        }

        return data;
    }

    /**
     * بررسی اینکه آیا کاربر ادمین است یا خیر
     */
    static async isAdmin() {
        const profile = await this.getUserProfile();
        return profile?.role === "admin";
    }

    /**
     * تبدیل یک کاربر به ادمین
     */
    static async makeAdmin(userId) {
        const { error } = await SUPABASE
            .from("profiles")
            .update({ role: "admin" })
            .eq("id", userId);

        if (error) throw error;

        // ثبت در لاگ‌های ادمین
        await this.logAdminAction("user_role_changed", userId, "user", {
            old_role: "user",
            new_role: "admin"
        });

        return true;
    }

    /**
     * حذف نقش ادمین از یک کاربر
     */
    static async removeAdmin(userId) {
        const { error } = await SUPABASE
            .from("profiles")
            .update({ role: "user" })
            .eq("id", userId);

        if (error) throw error;

        // ثبت در لاگ‌های ادمین
        await this.logAdminAction("user_role_changed", userId, "user", {
            old_role: "admin",
            new_role: "user"
        });

        return true;
    }

    /**
     * ثبت عملیات ادمین در لاگ‌ها
     */
    static async logAdminAction(action, targetId, targetType, details = {}) {
        const user = await this.checkAuth();
        if (!user) return;

        await SUPABASE
            .from("admin_logs")
            .insert({
                admin_id: user.id,
                action,
                target_id: targetId,
                target_type: targetType,
                details: details || {}
            });
    }

    /**
     * تهیه‌کننده: بررسی نقش کاربر و نمایش پنل ادمین
     * (این تابع در شروع صفحه فراخوانی می‌شود)
     */
    static async initRoleBasedUI() {
        const profile = await this.getUserProfile();

        // اگر کاربر ادمین نیست، پنل را پنهان کن
        if (!profile || profile.role !== "admin") {
            const adminPanel = document.getElementById("admin-panel");
            if (adminPanel) {
                adminPanel.style.display = "none";
            }
            return null;
        }

        // اگر کاربر ادمین است، پنل را نمایش بده
        const adminPanel = document.getElementById("admin-panel");
        if (adminPanel) {
            adminPanel.style.display = "block";
            // یا className اگر CSS هست:
            adminPanel.classList.remove("hidden");
        }

        // نمایش نقش ادمین در UI
        const roleDisplay = document.getElementById("user-role");
        if (roleDisplay) {
            roleDisplay.textContent = "ادمین";
            roleDisplay.classList.add("admin");
        }

        return profile;
    }

    /**
     * تکثیرشده: ورود کاربر
     */
    static async login(email, password) {
        const { data, error } = await SUPABASE.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;
        return data;
    }

    /**
     * خروج کاربر
     */
    static async logout() {
        const { error } = await SUPABASE.auth.signOut();
        if (error) throw error;
    }

    /**
     * ثبت‌نام کاربر جدید
     */
    static async signup(email, password, fullName) {
        const { data, error } = await SUPABASE.auth.signUp({
            email,
            password
        });

        if (error) throw error;

        // ایجاد پروفایل
        if (data.user) {
            await SUPABASE
                .from("profiles")
                .insert({
                    id: data.user.id,
                    email,
                    full_name: fullName,
                    role: "user"
                });
        }

        return data;
    }
}

// صادرات برای استفاده در فایل‌های دیگر
window.AdminAuth = AdminAuth;
