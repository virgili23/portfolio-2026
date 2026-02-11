import React from "react";

const Footer = () => {
  return (
    <footer className="l-footer w-full border-t dark dark:border-white dark:bg-black">
      <div className="l-footer__container mx-auto max-w-7xl px-6 py-12">
        <div className="l-footer__top grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="l-footer__socials">
            <a href="#" className="l-footer__socials__logo">
              <picture>
                <source
                  srcSet="./assets/img/logo-white.png"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="./assets/img/logo-black.png"
                  alt="logo"
                  width="70"
                  height="70"
                />
              </picture>
            </a>

            <p className="l-footer__socials__desc mt-4 text-sm text-zinc-600 max-w-xs dark:text-zinc-100">
              Portfolio of Virgilio Baez. Building elegant products with
              precision and care.
            </p>

            {/* Footer Socials */}
            <div className="l-footer__socials__links mt-4 flex items-center gap-3">
              {/* Github */}
              <a
                href="https://github.com/virgili23"
                className="footer-social-link"
                target="_blank"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="github"
                  className="lucide lucide-github h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/virgilio-baez/"
                className="footer-social-link"
                target="_blank"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="linkedin"
                  className="lucide lucide-linkedin h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:virgilioabaez25@gmail.com"
                className="footer-social-link"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="mail"
                  className="lucide lucide-mail h-5 w-5"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </a>
            </div>
          </div>

          <div className="l-footer__nav">
            <h4 className="text-base font-semibold tracking-tight dark:text-zinc-100">
              Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>
                <a
                  href="#about"
                  className="dark:text-white hover:dark:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="dark:text-white hover:dark:underline"
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="dark:text-white hover:dark:underline"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="mailto:virgilioabaez25@gmail.com"
                  className="dark:text-white hover:dark:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="l-footer__email">
            <h4 className="text-base font-semibold tracking-tight dark:text-zinc-100">
              Get in touch
            </h4>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-100">
              Open to collaborations, speaking, and freelance engagements.
            </p>
            <a
              href="mailto:virgilioabaez25@gmail.com"
              className="mt-4 inline-flex items-center gap-2 bg-zinc-900 px-4 py-2.5 text-white text-sm font-medium tracking-tight hover:bg-black transition-all duration-200 dark:bg-bg dark:text-white dark:hover:text-black dark:hover:bg-white"
            >
              <span>Contact Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="send"
                className="lucide lucide-send h-4 w-4"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="l-footer__bottom mt-12 pt-6 text-xs flex items-center justify-between border-t dark:border-white">
          <span className="dark:text-zinc-100">
            &copy; {new Date().getFullYear()} Virgilio Baez
          </span>
          <span className="dark:text-zinc-100">Crafted with intention.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
