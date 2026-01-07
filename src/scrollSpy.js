export default function scrollSpy({
  headerOffset = 75,
  sectionSelector = "[data-section]",
  navSelector = "[data-nav]",
  activeClass = "is-active",
} = {}) {
  const sections = Array.from(document.querySelectorAll(sectionSelector));
  const navLinks = Array.from(document.querySelectorAll(navSelector));

  if (!sections.length || !navLinks.length) return;

  const linkById = new Map(navLinks.map((a) => [a.dataset.nav, a]));
  let activeId = null;

  const setActive = (id) => {
    if (!id || id === activeId) return;
    activeId = id;

    navLinks.forEach((a) => a.classList.remove(activeClass));
    linkById.get(id)?.classList.add(activeClass);
  };

  // Track which sections are currently intersecting
  const visible = new Map(); // id -> { top, ratio }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = entry.target.dataset.section;

        if (!entry.isIntersecting) {
          visible.delete(id);
          continue;
        }

        visible.set(id, {
          top: entry.boundingClientRect.top,
          ratio: entry.intersectionRatio,
        });
      }

      // Choose the section closest to the "activation line" (just under the header)
      // Prefer sections whose top is at/above the line; otherwise pick the nearest below.
      const activationLine = headerOffset + 1;

      let bestId = null;
      let bestScore = -Infinity;

      for (const section of sections) {
        const id = section.dataset.section;
        const v = visible.get(id);
        if (!v) continue;

        const dist = v.top - activationLine; // 0 means top is on the line
        const isAbove = dist <= 0;

        // Score rules:
        // - Prefer sections whose top has passed the activation line (isAbove)
        // - Among them, pick the one closest to the line (dist closest to 0)
        // - Use ratio as a mild tie-breaker to prevent jitter
        const score = (isAbove ? 100000 : 0) - Math.abs(dist) + v.ratio * 100;

        if (score > bestScore) {
          bestScore = score;
          bestId = id;
        }
      }

      if (bestId) setActive(bestId);
    },
    {
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      // This creates a detection window that starts just under the header
      // and ends well before the bottom so "next" doesn't activate too early.
      rootMargin: `-${headerOffset}px 0px -80% 0px`,
    }
  );

  sections.forEach((s) => observer.observe(s));

  // Optional: set initial active state on load (in case you're mid-page refresh)
  // Pick the last section whose top is above the activation line.
  const activationLine = headerOffset + 1;
  const initial = sections
    .map((s) => ({ id: s.dataset.section, top: s.getBoundingClientRect().top }))
    .filter((x) => x.top <= activationLine)
    .sort((a, b) => b.top - a.top)[0]?.id;

  if (initial) setActive(initial);

  return () => observer.disconnect();
}
