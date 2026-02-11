import React from "react";

const About = () => {
  return (
    <section
      className="c-about section-loaded w-full mx-auto py-16 pt-24 md:py-36 md:pt-48 overflow-x-hidden bg-white"
      id="about"
      data-section="about"
    >
      <div className="c-about__container relative mx-auto max-w-6xl bg-white px-6 flex flex-col items-center md:gap-12 md:flex-row">
        {/* Image */}
        <div className="c-about__image flex flex-col gap-y-4 items-center md:min-w-4/12 lg:min-w-5/12">
          <h5 className="relative text-center">Hello, I'm Virgilio Baez!</h5>

          <img
            className="relative rounded-4xl bg-center w-full max-w-xs md:max-w-full lg:max-w-sm h-auto"
            src="/assets/img/hero-768.png"
            srcSet="
          /assets/img/hero-320.png   320w,
          /assets/img/hero-480.png   480w,
          /assets/img/hero-768.png   768w,
          /assets/img/hero-1024.png 1024w
        "
            sizes="(min-width: 1024px) 384px, (min-width: 768px) 450px, 320px"
            alt="background"
            width="1024"
            height="1119"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Description */}
        <div className="c-about__desc relative flex flex-col items-center gap-4 md:items-start">
          <h1 className="leading-none my-1 text-center md:text-left md:leading-snug">
            Technical Marketing Engineer
          </h1>

          <h4 className="leading-none my-1 text-center md:text-left md:leading-snug">
            Email, Automation &amp; CMS Systems
          </h4>

          <p className="mb-10 text-zinc-700 leading-loose text-center md:text-left">
            I build marketing systems that convert, automate, and scale. With 6
            years in CMS and front-end engineering, I connect websites, email
            development, and automation workflows into measurable growth
            engines. <br />
            <br />
            Specializing in WordPress, Shopify, HTML email (MJML), performance
            optimization, and tools like Zapier and n8n.
          </p>

          <div className="e-buttons flex flex-col gap-x-4 gap-y-6 md:flex-row">
            <a href="#featured" className="btn btn-large btn-primary">
              portfolio
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
                className="lucide lucide-arrow-right h-7 w-7 rotate-45"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>

            <a
              href="mailto:virgilioabaez25@gmail.com"
              className="btn btn-large btn-secondary"
            >
              contact me
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
      </div>
    </section>
  );
};

export default About;
