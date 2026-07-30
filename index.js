// ==================== INDEX PAGE ====================
if (document.documentElement.getAttribute("data-page") === "index") {
(function() {

    // Toast notification system - replaces alert()
    const Toast = {
      container: document.getElementById('toastContainer'),
      show(message, type = 'info', duration = 4000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'alert');
        this.container.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('show'));
        setTimeout(() => {
          toast.classList.remove('show');
          setTimeout(() => toast.remove(), 400);
        }, duration);
      }
    };

    // Image error handling - replaces inline onerror
    function setupImageFallback(img, fallbackText) {
      img.addEventListener('error', function() {
        this.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.className = 'avatar';
        fallback.style.cssText = 'width:44px;height:44px;font-size:1rem;';
        fallback.innerHTML = `<span>${fallbackText}</span>`;
        this.parentNode.insertBefore(fallback, this);
      });
    }

    document.getElementById('brandAvatar') && setupImageFallback(document.getElementById('brandAvatar'), 'AG');
    document.getElementById('profilePhoto') && setupImageFallback(document.getElementById('profilePhoto'), 'AG');

    // Supabase configuration
    const SUPABASE_URL = 'https://cwwqmushilpxzpcpjute.supabase.co';
    const SUPABASE_KEY = 'sb_publishable__AzVitbAoaYfEyvJMnIkkQ_AOkXCfbK';
    const SUPABASE = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    // Check session and update UI
    async function checkUserSession() {
      try {
        const { data: { session } } = await SUPABASE.auth.getSession();
        if (session) {
          await loadUserProfile(session.user.id, session.user.email);
        }
      } catch (err) {
        // Silently handle session check errors
      }
    }

    async function loadUserProfile(userId, email) {
      try {
        const { data } = await SUPABASE
          .from('profiles')
          .select('username, avatar_url, first_name')
          .eq('id', userId)
          .single();
        updateAuthUI(data, email);
      } catch (err) {
        updateAuthUI(null, email);
      }
    }

    function updateAuthUI(profile, email) {
      const authUserMenu = document.getElementById('authUserMenu');

      if (!profile && !email) {
        authUserMenu.innerHTML = '<a href="./login/login.html">Sign in</a>';
      } else {
        const username = profile?.first_name || profile?.username || email.split('@')[0];
        const avatar = profile?.avatar_url;
        const initial = username[0].toUpperCase();

        authUserMenu.classList.add('authenticated');
        authUserMenu.innerHTML = `
          <div class="user-profile-icon" title="${escapeHtml(username)}">
            <button type="button" class="avatar-btn" id="profileMenuBtn" aria-label="User menu" aria-haspopup="true" aria-expanded="false">
              ${avatar ? `<img src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}" style="width:100%;height:100%;object-fit:cover;">` : `<span>${escapeHtml(initial)}</span>`}
            </button>
            <div class="profile-dropdown" id="profileDropdown" role="menu">
              <div class="dropdown-header">
                <div class="dropdown-avatar">
                  ${avatar ? `<img src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}">` : `<span>${escapeHtml(initial)}</span>`}
                </div>
                <div class="dropdown-user-info">
                  <p class="dropdown-username">${escapeHtml(username)}</p>
                  <p class="dropdown-email">${escapeHtml(email)}</p>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <a href="./profile.html" class="dropdown-item" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Profile
              </a>
              <div class="dropdown-divider"></div>
              <button type="button" id="signOutDropdownBtn" class="dropdown-item dropdown-logout" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                Sign Out
              </button>
            </div>
          </div>
        `;

        const profileMenuBtn = document.getElementById('profileMenuBtn');
        const profileDropdown = document.getElementById('profileDropdown');

        profileMenuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = profileDropdown.classList.toggle('open');
          profileMenuBtn.setAttribute('aria-expanded', isOpen);
        });

        document.addEventListener('click', (e) => {
          if (!authUserMenu.contains(e.target)) {
            profileDropdown.classList.remove('open');
            profileMenuBtn.setAttribute('aria-expanded', 'false');
          }
        });

        document.getElementById('signOutDropdownBtn').addEventListener('click', async (e) => {
          e.preventDefault();
          await SUPABASE.auth.signOut();
          location.reload();
        });
      }
    }

    function escapeHtml(text) {
      if (!text) return '';
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    checkUserSession();

    // Clear any stale OAuth flags on page load
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('fromLogin') === 'true') {
      sessionStorage.removeItem('oauthLoginPending');
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  


    document.getElementById('year').textContent = new Date().getFullYear();

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.14 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Smooth anchor handling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Hero tilt interaction
    const hero = document.getElementById('heroCard');
    if (hero) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        hero.style.transform = `perspective(1200px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-1px)`;
      });
      hero.addEventListener('mouseleave', () => {
        hero.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    }

    // Typewriter-like rotating role
    const roles = ["Python Developer", "Linux Enthusiast", "Networking & Cybersecurity", "AI & Machine Learning"];
    const typeText = document.getElementById('typeText');
    let roleIndex = 0;
    function rotateRole() {
      if (!typeText) return;
      typeText.style.opacity = 0;
      setTimeout(() => {
        typeText.textContent = roles[roleIndex];
        typeText.style.opacity = 1;
        roleIndex = (roleIndex + 1) % roles.length;
      }, 240);
    }
    if (typeText) {
      typeText.style.transition = 'opacity .24s ease';
      rotateRole();
      setInterval(rotateRole, 2200);
    }

    // Certificate lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    function openLightbox(img, title, caption) {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || title || 'Certificate preview';
      lightboxTitle.textContent = title || 'Certificate preview';
      lightboxCaption.textContent = caption || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightboxClose?.focus();
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lightboxImg) lightboxImg.src = '';
    }

    document.querySelectorAll('.certificate-card').forEach((card) => {
      const img = card.querySelector('img');
      const h4 = card.querySelector('h4');
      const p = card.querySelector('p');
      const title = h4 ? h4.textContent.trim() : 'Certificate';
      const caption = p ? p.textContent.trim() : '';
      card.addEventListener('click', () => img && openLightbox(img, title, caption));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          img && openLightbox(img, title, caption);
        }
      });
    });

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  


    if ("serviceWorker" in navigator) {
      window.addEventListener("load", async () => {
        try {
          await navigator.serviceWorker.register("/service-worker.js");
        } catch (err) {
          // Silently handle service worker errors
        }
      });
    }
  
})();
}
