// ==================== DOC PAGE ====================
if (document.documentElement.getAttribute("data-page") === "doc") {
(function() {

    // ─── Typewriter Effect ───
    const phrases = ["Python", "Linux", "AI & ML", "Networking", "Cybersecurity", "Cloud"];
    let phraseIndex = 0, charIndex = 0, isDeleting = false;
    const typeEl = document.getElementById('typewriter');

    function type() {
      const current = phrases[phraseIndex];
      if (isDeleting) {
        typeEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typeEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 60 : 100;
      if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
      }
      setTimeout(type, speed);
    }
    type();

    // ─── Copy Code ───
    document.querySelectorAll('.code-copy').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.closest('.code-container').querySelector('.code-block').textContent;
        navigator.clipboard.writeText(code).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = original;
            btn.classList.remove('copied');
          }, 2000);
        });
      });
    });

    // ─── Smooth scroll for anchor links ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  
})();
}
