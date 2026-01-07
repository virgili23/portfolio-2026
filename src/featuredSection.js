import featuredData from "./data/featuredData.json";

export default function featuredSection() {
  const featuredSection = document.querySelector(".js-featured");

  // console.log(featuredData);

  featuredSection.innerHTML = featuredData
    .map(
      (data) =>
        `
    <article class="s-featured">
      <div class="s-featured__container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <a
        href="${data.link}"
        class="s-featured__image group relative overflow-hidden border-2 border-zinc-700 bg-white aspect-[4/3] block"
        target="_blank"
        onclick="posthog?.capture('case_study_clicked', {case_study_name: 'Flow Builder', click_type: 'image'});">
          <img
          src="${data.image}"
          alt="Flow Builder case study"
          class="w-full h-full object-cover scale-[1.01] transition duration-400 group-hover:scale-[1.03]"/>
        </a>       
          

        <div class="s-featured__description">
          <div class="flex items-center gap-2 mb-6">
            ${data.tags
              .map(
                (tag) =>
                  `<span class="inline-flex rounded-full bg-black text-white text-xs font-medium px-3 py-1.5">${tag}</span>`
              )
              .join("")}
          </div>
          <h3 class="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            ${data.title}
          </h3>
          <p class="text-zinc-600 leading-relaxed mb-6">
            ${data.description}
          </p>
          <div class="flex flex-wrap items-center gap-4">
          <a
            href="${data.link}"
            class="btn btn-primary inline-flex items-center gap-2 text-sm font-medium"
            onclick="posthog?.capture('case_study_clicked', {case_study_name: 'Flow Builder', click_type: 'button'});"
            target="_blank"
          >
            <span>visit site</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="external-link"
                class="lucide lucide-external-link h-4 w-4"
            >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
            </svg>
          </a>
          <div class="flex items-center gap-4 text-sm text-black">
            ${data.stats
              .map(
                (tag) =>
                  `
                <span class="flex items-center gap-1.5">
                  ${tag.icon}
                  <span>${tag.stat}</span>
                </span>
                `
              )
              .join("")}
          </div>
          </div>
        </div>
                  
      </div>
    </article>
    `
    )
    .join("");
}
