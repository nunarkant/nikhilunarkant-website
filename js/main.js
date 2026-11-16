/* nikhilunarkant.com — small enhancements (no dependencies) */

(function () {
  "use strict";

  /* Mobile navigation toggle */
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Scroll-reveal animations */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* Header: solid once the page scrolls, or always on pages without a hero */
  var siteHeader = document.querySelector(".site-header");
  function syncHeader() {
    if (!siteHeader) { return; }
    var solid = document.body.hasAttribute("data-solid-header") || window.scrollY > 60;
    siteHeader.classList.toggle("is-solid", solid);
  }
  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  /* Language: Danish pages live at the root and English pages under /en/,
     linked with hreflang. The DA/EN switch is a pair of ordinary links. */

  /* The contact form posts directly to FormSubmit.co (see contact.html).
     No JavaScript is needed to send it — the browser submits the form and
     FormSubmit redirects to thanks.html on success. */
})();
