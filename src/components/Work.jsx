import React from "react";

const Work = () => {
  return (
    <section
      id="work"
      className="c-work w-full py-16 pt-20 sm:py-24 sm:pt-20 bg-white"
      data-section="work"
    >
      <div className="c-work__container mx-auto max-w-7xl px-6">
        <div className="c-work__head flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Work
          </h2>
          <a
            href="#featured"
            className="hidden sm:inline-flex btn btn-primary items-center gap-2"
          >
            <span>featured projects</span>
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
              data-lucide="arrow-right"
              className="lucide lucide-arrow-right h-5 w-5 -rotate-45"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        {/* Work Content goes here */}
        <div className="c-work__content js-work mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"></div>
      </div>
    </section>
  );
};

export default Work;
