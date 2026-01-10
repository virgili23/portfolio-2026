export default function lazyLoad() {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("section-loaded");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
    }
  );

  sections.forEach((section) => observer.observe(section));
}
