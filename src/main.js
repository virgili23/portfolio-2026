import "./styles/tailwind.css";
import "./styles/app.scss";
import featuredSection from "./featuredSection";
import workSection from "./workSection";
import scrollSpy from "./scrollSpy";
import lazyLoad from "./lazyLoad";

const btn = document.querySelector("#nav-toggle");

let navToggle = () => {
  const nav = btn.nextElementSibling;
  const navLink = nav.querySelectorAll(".nav-link");

  if (nav) {
    nav.classList.toggle("is-opened");
    btn.classList.toggle("is-opened");

    if (nav.classList.contains("is-opened")) {
      navLink.forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("is-opened");
          btn.classList.remove("is-opened");
        });
      });
    }
  }
};

btn.addEventListener("click", () => {
  navToggle();
});

let setYear = () => {
  const span = document.querySelector("#year");
  span.innerHTML = new Date().getFullYear();
};

document.addEventListener("DOMContentLoaded", () => {
  featuredSection();
  workSection();
  setYear();
  scrollSpy();
  lazyLoad();
});
