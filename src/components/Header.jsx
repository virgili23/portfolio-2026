import React from "react";

const Header = () => {
  return (
    <header className="l-header w-full fixed z-50 bg-white">
      <div className="l-header__container relative mx-auto max-w-7xl px-6">
        {/* Mobile */}
        <div className="l-header__navigation l-header__navigation--mobile flex items-center justify-between py-2 md:hidden">
          <a href="#" className="l-header__logo">
            <img
              src="./assets/img/logo-black.png"
              alt="logo"
              width="50px"
              height="50px"
            />
          </a>
          <button
            id="nav-toggle"
            aria-expanded="false"
            aria-label="Toggle Navigation"
            className="md:hidden"
          >
            <span className="top"></span>
            <span className="mid"></span>
            <span className="mid2"></span>
            <span className="bottom"></span>
          </button>

          <nav className="l-header__nav">
            <ul className="flex flex-col gap-y-4 px-6 py-6">
              <li>
                <a href="#about" className="nav-link">
                  about
                </a>
              </li>

              <li>
                <a href="#work" className="nav-link">
                  work
                </a>
              </li>
              <li>
                <a href="#featured" className="nav-link">
                  featured
                </a>
              </li>
              <li>
                <a href="mailto:virgilioabaez25@gmail.com" className="nav-link">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop */}
        <div className="l-header__navigation l-header__navigation--desktop hidden md:flex items-center justify-between py-2">
          <a href="#" className="l-header__logo">
            <img
              src="./assets/img/logo-black.png"
              alt="logo"
              width="60px"
              height="60px"
            />
          </a>
          <nav className="l-header__nav">
            <ul className="flex flex-row gap-x-10">
              <li>
                <a href="#about" className="nav-link" data-nav="about">
                  about
                </a>
              </li>

              <li>
                <a href="#work" className="nav-link" data-nav="work">
                  work
                </a>
              </li>

              <li>
                <a href="#featured" className="nav-link" data-nav="featured">
                  featured
                </a>
              </li>
              <li>
                <a href="mailto:virgilioabaez25@gmail.com" className="nav-link">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
