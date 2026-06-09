/* Kavya Sri Makkapati — portfolio interactions */
(function () {
  "use strict";

  // ---- Mobile nav toggle ----
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // ---- Nav shadow on scroll ----
  if (nav) {
    window.addEventListener("scroll", function () {
      nav.style.boxShadow = window.scrollY > 8
        ? "0 8px 24px -18px rgba(16,31,62,0.4)"
        : "none";
    }, { passive: true });
  }
})();
