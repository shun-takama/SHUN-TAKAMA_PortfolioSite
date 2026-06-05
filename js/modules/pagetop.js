export function initPagetop() {
  const pagetopButton = document.querySelector(".js-pagetop");

  if (!pagetopButton) return;

  const scrollThreshold = 300;

  const toggleVisibility = () => {
    if (window.scrollY > scrollThreshold) {
      pagetopButton.classList.add("is-show");
    } else {
      pagetopButton.classList.remove("is-show");
    }
  };

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });
}
