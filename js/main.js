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

  /* Contact form:
     The form works out of the box by opening the visitor's e-mail client
     (mailto fallback). For a hosted form backend, create a free form at
     e.g. https://formspree.io, put the endpoint in the form's `action`
     attribute and remove the `data-mailto` attribute — nothing else needed. */
  var form = document.querySelector("form[data-mailto]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (name) {
        var el = form.querySelector('[name="' + name + '"]');
        return el ? el.value.trim() : "";
      };
      var subject = get("subject") || "Message from nikhilunarkant.com";
      var body =
        "Name: " + get("first_name") + " " + get("last_name") + "\n" +
        "Email: " + get("email") + "\n\n" +
        get("message");
      window.location.href =
        "mailto:" + form.getAttribute("data-mailto") +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }
})();
