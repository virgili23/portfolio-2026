import React from "react";
import { Users } from "lucide-react";

const FeaturedListing = ({ listing }) => {
  const ICONS = {
    users: Users,
  };

  const Icon = ICONS[listing.role?.[0]?.icon] ?? null;

  return (
    <article className="s-featured">
      <div className="s-featured__container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="s-featured__image">
          <div className="flex items-center flex-wrap gap-2 mb-6">
            {listing.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full bg-black text-white text-xs font-medium px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={listing.link}
            className="group relative overflow-hidden border-2 border-zinc-700 bg-white aspect-[4/3] block"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              // Only runs if posthog exists
              posthog?.capture("case_study_clicked", {
                case_study_name: listing.title,
                click_type: "image",
              });
            }}
          >
            <img
              src={listing.image}
              alt="thumbnail"
              className="w-full h-full object-cover scale-[1.01] transition duration-400 group-hover:scale-[1.03] group-hover:grayscale-90"
              loading="lazy"
              width="956"
              height="716"
            />
          </a>

          <p className="text-zinc-600 leading-relaxed mt-6 mb-6">
            <b className="text-black">Tech Used:</b>{" "}
            {Array.isArray(listing.tech) ? listing.tech.join(", ") : ""}
          </p>
        </div>

        <div className="s-featured__description">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            {listing.title}
          </h3>

          <p className="text-zinc-600 leading-relaxed mb-6">
            {listing.description}
          </p>

          <h4>Contributions:</h4>
          <ul className="list-disc pl-6 my-2 mb-6">
            {listing.contributions?.map((item, idx) => (
              <li key={`${item}-${idx}`} className="text-zinc-600 text-md">
                {item}
              </li>
            ))}
          </ul>

          <h4>Outcome:</h4>
          <ul className="list-disc pl-6 my-2 mb-6">
            {listing.outcome?.map((item, idx) => (
              <li key={`${item}-${idx}`} className="text-zinc-600 text-md">
                {item}
              </li>
            ))}
          </ul>

          <div className="flex justify-between flex-wrap items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-black">
              <span className="flex items-center gap-1.5">
                <span className="flex items-center gap-1.5">
                  {Icon && <Icon className="h-4 w-4" />} Role:{" "}
                </span>
                {listing.role?.[0]?.position}
              </span>
            </div>

            <a
              href={listing.link}
              className="btn btn-primary inline-flex items-center gap-2 text-sm font-medium"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                posthog?.capture("case_study_clicked", {
                  case_study_name: listing.title,
                  click_type: "button",
                });
              }}
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
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedListing;
