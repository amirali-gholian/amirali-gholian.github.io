// ==================== SHARED DOC-PAGE LOGIC ====================
// Used by linux.html, netsec.html, python.html, ai.html.
// Each of those pages loads its own "<page>-data.js" (defines `searchIndex`)
// BEFORE this file, then this file wires up the sidebar, search, and topbar behavior.
(function() {

    // ─── Keep sidebar/layout aligned with the real header height ───
    // (fixes the empty gap that appeared when the header wraps to two lines
    // on narrow screens, since the sidebar/menu position used to assume a fixed 76px header)
    function syncTopbarHeight() {
      const topbar = document.querySelector('.topbar');
      if (!topbar) return;
      const h = Math.ceil(topbar.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--topbar-h', h + 'px');
    }
    syncTopbarHeight();
    window.addEventListener('load', syncTopbarHeight);
    window.addEventListener('resize', syncTopbarHeight);
    window.addEventListener('orientationchange', syncTopbarHeight);
    if (window.ResizeObserver) {
      new ResizeObserver(syncTopbarHeight).observe(document.querySelector('.topbar'));
    }

    // ─── Sidebar Toggle ───
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      sidebar.classList.toggle('open');
      overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
    }
    function closeSidebar() {
      if (window.innerWidth <= 1024) {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebar-overlay').style.display = 'none';
      }
    }

    // ─── Section Toggle ───
    function toggleSection(header) {
      const links = header.nextElementSibling;
      header.classList.toggle('collapsed');
      links.classList.toggle('collapsed');
      if (!links.classList.contains('collapsed')) {
        links.style.maxHeight = links.scrollHeight + 'px';
      } else {
        links.style.maxHeight = '0';
      }
    }

    // ─── Initialize sections ───
    document.querySelectorAll('.sidebar-links').forEach(links => {
      links.style.maxHeight = links.scrollHeight + 'px';
    });

    // ─── Active Link ───
    function updateActiveLink() {
      const sections = document.querySelectorAll('.content-section');
      const links = document.querySelectorAll('.sidebar-links li a');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });

      // Progress
      const totalSections = sections.length;
      const currentIndex = Array.from(sections).findIndex(s => s.getAttribute('id') === current);
      const progress = Math.round(((currentIndex + 1) / totalSections) * 100);
      document.getElementById('progressFill').style.width = progress + '%';
      document.getElementById('progressText').textContent = progress + '%';
    }
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // ─── Copy Code ───
    function copyCode(button) {
      const code = button.closest('.code-container').querySelector('.code-block').textContent;
      navigator.clipboard.writeText(code).then(() => {
        const original = button.innerText;
        button.innerText = '✓ Copied!';
        button.classList.add('copied');
        setTimeout(() => {
          button.innerText = original;
          button.classList.remove('copied');
        }, 2000);
      });
    }

    
    // ─── Search ───
function searchDocs() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const resultsDiv = document.getElementById('searchResults');
      if (!query) {
        resultsDiv.classList.remove('active');
        return;
      }
      const filtered = searchIndex.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query)
      );
      if (filtered.length === 0) {
        resultsDiv.innerHTML = '<div class="search-result-item"><span class="result-title">No result found</span></div>';
      } else {
        resultsDiv.innerHTML = filtered.map(item =>
          `<div class="search-result-item" onclick="navigateTo('${item.id}')">
            <span class="result-title">${item.title}</span>
            <span class="result-desc">${item.desc}</span>
          </div>`
        ).join('');
      }
      resultsDiv.classList.add('active');
    }

    function showSearchResults() {
      if (document.getElementById('searchInput').value.trim()) {
        searchDocs();
      }
    }

    function navigateTo(id) {
      document.getElementById('searchResults').classList.remove('active');
      document.getElementById('searchInput').value = '';
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Close search on outside click
    document.addEventListener('click', function(e) {
      const searchContainer = document.querySelector('.search-container');
      if (!searchContainer.contains(e.target)) {
        document.getElementById('searchResults').classList.remove('active');
      }
    });

    // ─── Smooth scroll for anchor links ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // ─── Scroll to Top ───
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
  

})();
