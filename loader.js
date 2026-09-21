/* ============================================================
   loader.js — Global preloader logic, shared across every page.
   Must run synchronously as the FIRST thing inside <body>,
   i.e. no "defer" / "async":
     <body>
       <script src="loader.js"></script>
       ... rest of the page ...
   Running inline like this means it paints before anything
   else, so there is no flash of unstyled content.
   ============================================================ */
(function () {
  "use strict";

  if (document.getElementById("site-loader")) return;

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var messages = [
    "initializing_environment",
    "loading_modules",
    "mounting_assets",
    "establishing_secure_session",
    "optimizing_render",
    "ready"
  ];

  var html = document.documentElement;
  html.classList.add("loader-lock");

  var el = document.createElement("div");
  el.id = "site-loader";
  el.setAttribute("role", "status");
  el.setAttribute("aria-live", "polite");
  el.innerHTML =
    '<span class="visually-hidden" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);">Loading page, please wait.</span>' +
    '<div class="loader-inner" aria-hidden="true">' +
      '<div class="loader-mark">' +
        '<div class="loader-ring"></div>' +
        '<div class="loader-logo">' +
          '<img src="logo.webp" alt="" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
          '<span class="loader-fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;">AG</span>' +
        '</div>' +
      '</div>' +
      '<div class="loader-brand">Amirali Gholian</div>' +
      '<div class="loader-terminal">' +
        '<span class="loader-prompt">$</span>' +
        '<span class="loader-msg" id="loaderMsg">' + messages[0] + '</span>' +
        '<span class="loader-cursor"></span>' +
      '</div>' +
      '<div class="loader-bar-track"><div class="loader-bar-fill" id="loaderBarFill"></div></div>' +
      '<div class="loader-percent" id="loaderPercent">0%</div>' +
    '</div>';

  // Insert as the very first element of <body>.
  document.body.insertBefore(el, document.body.firstChild);

  var fill = el.querySelector("#loaderBarFill");
  var percentEl = el.querySelector("#loaderPercent");
  var msgEl = el.querySelector("#loaderMsg");

  var progress = 0;
  var done = false;
  var msgIndex = 0;
  var msgTimer = null;
  var rafId = null;

  function setProgress(p) {
    progress = Math.min(p, 100);
    fill.style.width = progress + "%";
    percentEl.textContent = Math.round(progress) + "%";
  }

  // Eases toward ~90% while real resources are still loading,
  // then jumps to 100% once the window "load" event fires.
  function tick() {
    if (done) return;
    var remaining = 90 - progress;
    progress += remaining * 0.035 + 0.15;
    setProgress(Math.min(progress, 90));
    rafId = requestAnimationFrame(tick);
  }

  function cycleMessages() {
    msgTimer = setInterval(function () {
      msgIndex = (msgIndex + 1) % (messages.length - 1);
      msgEl.textContent = messages[msgIndex];
    }, 650);
  }

  function hide() {
    if (done) return;
    done = true;
    if (rafId) cancelAnimationFrame(rafId);
    if (msgTimer) clearInterval(msgTimer);
    setProgress(100);
    msgEl.textContent = messages[messages.length - 1];

    setTimeout(function () {
      el.classList.add("loader-hide");
      html.classList.remove("loader-lock");
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 550);
    }, 250);
  }

  if (!reduceMotion) {
    rafId = requestAnimationFrame(tick);
    cycleMessages();
  } else {
    setProgress(70);
  }

  var minDelay = new Promise(function (resolve) {
    setTimeout(resolve, reduceMotion ? 200 : 700);
  });
  var pageLoaded = new Promise(function (resolve) {
    if (document.readyState === "complete") {
      resolve();
    } else {
      window.addEventListener("load", resolve, { once: true });
    }
  });

  Promise.all([minDelay, pageLoaded]).then(hide);

  // Safety net: never let the loader block the page for more
  // than 8s even if some resource stalls.
  setTimeout(hide, 8000);
})();
