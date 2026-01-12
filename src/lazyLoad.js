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
      threshold: 0,
      rootMargin: "-100px 0px -200px 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}
