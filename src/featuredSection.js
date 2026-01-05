import featuredData from "./data/featuredData.json";

export default function featuredSection() {
  let featured = document.querySelector(".js-featured");

  console.log(featuredData);

  featured.innerHTML = featuredData
    .map(
      (data) =>
        `
    <article class="s-featured group">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <a
        href="case-study/email-campaign/email.html"
        class="relative overflow-hidden rounded-md border border-zinc-200 bg-white aspect-[4/3] block"
        onclick="posthog?.capture('case_study_clicked', {case_study_name: 'Flow Builder', click_type: 'image'});">
          <img
          src="${data.image}"
          alt="Flow Builder case study"
          class="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"/>
        </a>       
          

                    <div>
                  <div class="flex items-center gap-2 mb-4">
                    <span
                      class="inline-flex rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium px-2.5 py-1"
                      >Marketing Automation</span
                    >
                    <span
                      class="inline-flex rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium px-2.5 py-1"
                      >Email Campaigns</span
                    >
                  </div>
                  <h3
                    class="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
                  >
                    Flow Builder: 300% Email Engagement Increase
                  </h3>
                  <p class="text-zinc-600 leading-relaxed mb-4">
                    Designed and implemented a comprehensive marketing
                    automation platform using HubSpot, creating triggered email
                    sequences that resulted in a 300% increase in email
                    engagement and 45% improvement in lead conversion rates.
                  </p>
                  <p class="text-zinc-600 leading-relaxed mb-6">
                    The solution included responsive email templates, A/B
                    testing workflows, and advanced segmentation strategies.
                    Integration with Salesforce CRM ensured seamless lead
                    handoff and tracking throughout the customer journey.
                  </p>
                  <div class="flex flex-wrap items-center gap-4">
                    <a
                      href="case-study/email-campaign/email.html"
                      class="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:opacity-80"
                      onclick="posthog?.capture('case_study_clicked', {case_study_name: 'Flow Builder', click_type: 'button'});"
                    >
                      <span>Read Full Case Study</span>
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
                      <span class="flex items-center gap-1.5">
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
                          data-lucide="trending-up"
                          class="lucide lucide-trending-up h-4 w-4"
                        >
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        <span>300% Engagement</span>
                      </span>
                      <span class="flex items-center gap-1.5">
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
                          data-lucide="users"
                          class="lucide lucide-users h-4 w-4"
                        >
                          <path
                            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                          ></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span>45% Conversion</span>
                      </span>
                    </div>
                  </div>
                  </div>
                  
      </div>
    </article>
    `
    )
    .join("");
}
