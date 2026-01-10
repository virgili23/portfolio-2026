import workData from "./data/workData.json";

export default function featuredSection() {
  const workSection = document.querySelector(".js-work");

  //   console.log(workData);

  // In work section, add a
  // "github": '{gh repo link}'
  // If it's a personal project

  workSection.innerHTML = workData
    .map(
      (data) => `
            <article class="s-work bg-white overflow-hidden flex flex-col h-full">
            <a
            href="${data.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="s-work__image relative group overflow-hidden border-2 border-zinc-700 aspect-[2/2] block"
            onclick="posthog?.capture('project_clicked', {project_name: '${
              data.title
            }', project_type: 'image'});"
            >
                <img
                    src="${data.image}"
                    alt="thumbnail"
                    class="w-full h-full object-cover scale-[1.01] transition duration-400 group-hover:scale-[1.03] group-hover:grayscale-90"
                    loading="lazy"
                    width="456"
                    height="456"
                />
            </a>
            <div class="s-work__desc flex flex-col grow py-5">
                <div class="flex items-center flex-wrap gap-2">
                ${data.tags
                  .map(
                    (tag) =>
                      `<span class="inline-flex rounded-full bg-black text-white text-xs font-medium px-3 py-1.5">${tag}</span>`
                  )
                  .join("")}
                </div>
                <a
                    href="${data.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-3 text-lg font-semibold tracking-tight block transition-all duration-200 hover:pl-4"
                    onclick="posthog?.capture('project_clicked', {project_name: '${
                      data.title
                    }', project_type: 'title'});"
                >
                    <h3>${data.title}</h3>
                </a>
                <p class="mt-2 mb-4 text-sm text-zinc-600">
                    ${data.description}
                </p>
                <div class="mt-auto flex items-center justify-between">
                    <a
                    href="${data.link}"
                    class="inline-flex items-center btn btn-tertiary ml-1 gap-1.5 text-sm font-medium text-black"
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

                    ${
                      data.github
                        ? `
                        <div class="flex items-center gap-2">
                            <a
                            href="${data.github}"
                            class="inline-flex items-center btn btn-tertiary gap-1.5 text-sm font-medium text-black"
                            target="_blank"
                            >
                            <span>github repo</span>
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
                                data-lucide="github"
                                class="lucide lucide-github h-4 w-4"
                            >
                                <path
                                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                ></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                            </a>
                        </div>
                        `
                        : ""
                    }

                </div>
            </div>
        </article>
    `
    )
    .join("");
}
