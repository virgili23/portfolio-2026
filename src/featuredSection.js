import featuredData from "./data/featuredData.json";

export default function featuredSection() {
  let featured = document.querySelector(".js-featured");

  console.log(featuredData);

  featured.innerHTML = featuredData
    .map(
      (data) =>
        `
    <article class="s-featured group">
      <div class="s-featured__container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <a
        href="${data.link}"
        class="s-featured__image relative overflow-hidden rounded-md border border-zinc-200 bg-white aspect-[4/3] block"
        onclick="posthog?.capture('case_study_clicked', {case_study_name: 'Flow Builder', click_type: 'image'});">
          <img
          src="${data.image}"
          alt="Flow Builder case study"
          class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"/>
        </a>       
          

        <div class="s-featured__description">
          <div class="flex items-center gap-2 mb-4">
            ${data.tags
              .map(
                (tag) =>
                  `<span class="inline-flex rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium px-2.5 py-1">${tag}</span>`
              )
              .join("")}
          </div>
          <h3 class="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            ${data.title}
          </h3>
          <p class="text-zinc-600 leading-relaxed mb-4">
            ${data.description}
          </p>
          <div class="flex flex-wrap items-center gap-4">
          <a
            href="${data.link}"
            class="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:opacity-80"
            onclick="posthog?.capture('case_study_clicked', {case_study_name: 'Flow Builder', click_type: 'button'});"
          >
            <span>View Project</span>
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
              data-lucide="arrow-right"
              class="lucide lucide-arrow-right h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <div class="flex items-center gap-4 text-sm text-zinc-500">
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
