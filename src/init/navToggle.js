export default function navToggle() {
  const btn = document.querySelector("#nav-toggle");
  if (!btn) return;

  const nav = btn.nextElementSibling;
  if (!nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("is-opened");
    btn.classList.toggle("is-opened");
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-opened");
      btn.classList.remove("is-opened");
    });
  });
}
