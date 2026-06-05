export function initFadein() {
  const fadeItems = document.querySelectorAll(".js-fadein");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  fadeItems.forEach((fadeItem) => {
    observer.observe(fadeItem);
  });
}
