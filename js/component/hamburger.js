export function initHamburger() {
  const hamburger = document.querySelector(".js-hamburger");
  const nav = document.querySelector(".js-nav");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}
