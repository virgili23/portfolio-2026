import React from "react";
import listings from "../data/featuredData.json";
import FeaturedListing from "./FeaturedListing";

const FeaturedListings = () => {
  return (
    <section
      id="featured"
      className="c-featured w-full py-16 pt-20 sm:py-24 sm:pt-20 bg-white"
      data-section="featured"
    >
      <div className="c-featured__container mx-auto max-w-7xl px-6">
        <div className="c-featured__head flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <a
            href="#work"
            className="hidden sm:inline-flex btn btn-primary items-center gap-2"
          >
            <span>all work</span>
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
              className="lucide lucide-arrow-right h-5 w-5 rotate-45"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        {/* Featured Work Goes Here */}
        <div className="c-featured__content js-featured mt-10 space-y-16">
          {listings.map((listing) => (
            <FeaturedListing key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
