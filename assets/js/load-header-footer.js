/*  load-header-footer.js  */
/* ------------------------------------------------------------
   Loads header.html and footer.html and attaches a
   hamburger‑toggle for the left‑hand menu.
   ------------------------------------------------------------ */

(function () {
  // Helper for loading a component
  const injectComponent = async (url, selector) => {
    try {
      const response = await fetch(url, { cache: "no-cache" }); // fresh each load
      if (!response.ok) throw new Error(`Could not load ${url}`);
      const html = await response.text();
      const target = document.querySelector(selector);
      if (target) target.innerHTML = html;
    } catch (e) {
      console.error(e);
    }
  };

  // Toggle event for hamburger → sideNav
  const hookToggle = () => {
    const toggleBtn = document.querySelector("#menuToggle");
    const sideNav   = document.querySelector("#sideNav");

    if (!toggleBtn || !sideNav) return;

    toggleBtn.addEventListener("click", () => {
      sideNav.classList.toggle("active");
    });
  };

  // Once DOM is ready, load components and hook the toggle
  document.addEventListener("DOMContentLoaded", () => {
    injectComponent("/header.html", "#header");
    injectComponent("/footer.html", "#footer");
    hookToggle();
  });
})();
