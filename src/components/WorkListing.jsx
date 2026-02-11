import React from "react";
import { ArrowRight } from "lucide-react";

//   console.log(workData);

// In work section, add a
// "github": '{gh repo link}'
// If it's a personal project

const WorkListing = ({ listing }) => {
  return (
    <article className="s-work bg-transparent overflow-hidden flex flex-col h-full">
      <a
        href={listing.link}
        target="_blank"
        rel="noopener noreferrer"
        className="s-work__image relative group overflow-hidden border-2 border-zinc-700 aspect-[2/2] block"
        onClick={() =>
          posthog?.capture("project_clicked", {
            project_name: listing.title,
            project_type: "image",
          })
        }
      >
        <img
          src={listing.image}
          alt="thumbnail"
          className="w-full h-full object-cover scale-[1.01] transition duration-400 group-hover:scale-[1.03] group-hover:grayscale-90"
          loading="lazy"
          width="456"
          height="456"
        />
      </a>

      <div className="s-work__desc flex flex-col grow py-5">
        {/* Tags */}
        <div className="flex items-center flex-wrap gap-2">
          {listing.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-full bg-black text-white text-xs font-medium px-3 py-1.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <a
          href={listing.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-lg font-semibold tracking-tight block transition-all duration-200 hover:pl-4"
          onClick={() =>
            posthog?.capture("project_clicked", {
              project_name: listing.title,
              project_type: "title",
            })
          }
        >
          <h3>{listing.title}</h3>
        </a>

        {/* Description */}
        <p className="mt-2 mb-4 text-sm text-zinc-600">{listing.description}</p>

        <div className="mt-auto flex items-center justify-between">
          {/* Visit Site */}
          <a
            href={listing.link}
            className="inline-flex items-center btn btn-tertiary ml-1 gap-1.5 text-sm font-medium text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>visit site</span>
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
              data-lucide="external-link"
              className="lucide lucide-external-link h-4 w-4"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>

          {/* GitHub Conditional */}
          {listing.github && (
            <div className="flex items-center gap-2">
              <a
                href={listing.github}
                className="inline-flex items-center btn btn-tertiary gap-1.5 text-sm font-medium text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>github repo</span>
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
                  className="lucide lucide-github h-4 w-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5..." />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default WorkListing;
