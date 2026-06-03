export function initHamburger() {
  const hamburger = document.querySelector(".js-hamburger");
  const nav = document.querySelector(".js-nav");

  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });
}
