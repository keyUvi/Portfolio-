const pages = {
  year1: {
    year: "YEAR 01",
    program: "SUPÉRATE PROGRAM",
    projects: [
      {
        id: 1,
        title: "APPLICATION PROJECT",
        year: "YEAR 01",
        category: "APP DEVELOPMENT",

        description: [
          "Add your application project description here."
        ],

        video: "",

        technologies: ["Figma", "Microsoft Power Apps"],
        roles: ["UI/UX DESIGN", "APP DEVELOPMENT"],

        contributions: [
          {
            title: "Interface Design",
            description: "Describe your contributions to the interface and prototype in Figma."
          },
          {
            title: "Application Development",
            description: "Describe your contributions to the application in Microsoft Power Apps."
          }
        ],

        evidence: [
          { name: "Figma Prototype", type: "DESIGN EVIDENCE", url: "" },
          { name: "Power Apps Application", type: "APPLICATION EVIDENCE", url: "" }
        ],

        learning: [
          "Add the knowledge and skills you gained from this project."
        ]
      }
    ]
  },

  year2: {
    year: "YEAR 02",
    program: "SUPÉRATE PROGRAM",
    projects: [
      {
        id: 1,
        title: "WEBSITE PROJECT",
        year: "YEAR 02",
        category: "WEB DEVELOPMENT",

        description: [
          "Add the description of your Year 02 website project here."
        ],

        video: "",

        technologies: [],
        roles: [],

        contributions: [
          {
            title: "UI/UX Design",
            description: "Describe your design responsibilities and contributions."
          },
          {
            title: "Development",
            description: "Describe your development responsibilities and contributions."
          }
        ],

        evidence: [
          { name: "Figma Prototype", type: "DESIGN EVIDENCE", url: "" },
          { name: "Wireframes", type: "DESIGN EVIDENCE", url: "" },
          { name: "Style Guide", type: "DESIGN EVIDENCE", url: "" },
          { name: "GitHub Repository", type: "DEVELOPMENT EVIDENCE", url: "" },
          { name: "Live Demo", type: "DEVELOPMENT EVIDENCE", url: "" }
        ],

        learning: [
          "Add the knowledge and skills you gained from this project."
        ]
      }
    ]
  },

  year3: {
    year: "YEAR 03",
    program: "SUPÉRATE PROGRAM",
    projects: [
      {
        id: 1,
        title: "WEBSITE PROJECT",
        year: "YEAR 03",
        category: "WEB DEVELOPMENT",

        description: [
          "Add the description of your Year 03 website project here."
        ],

        video: "",

        technologies: [],
        roles: [],

        contributions: [
          {
            title: "UI/UX Design",
            description: "Describe your design responsibilities and contributions."
          },
          {
            title: "Development",
            description: "Describe your development responsibilities and contributions."
          }
        ],

        evidence: [
          { name: "Figma Prototype", type: "DESIGN EVIDENCE", url: "" },
          { name: "Wireframes", type: "DESIGN EVIDENCE", url: "" },
          { name: "Style Guide", type: "DESIGN EVIDENCE", url: "" },
          { name: "GitHub Repository", type: "DEVELOPMENT EVIDENCE", url: "" },
          { name: "Live Demo", type: "DEVELOPMENT EVIDENCE", url: "" }
        ],

        learning: [
          "Add the knowledge and skills you gained from this project."
        ]
      }
    ]
  },

  personalProjects: {
    year: "PERSONAL PROJECTS",
    program: "INDEPENDENT WORK",
    projects: [
      {
        id: 1,
        title: "HTML & CSS PROJECT",
        year: "PERSONAL PROJECT",
        category: "WEB DEVELOPMENT",

        description: [
          "Add a description of your personal HTML and CSS project here."
        ],

        video: "",

        technologies: ["HTML", "CSS"],
        roles: ["DESIGN", "DEVELOPMENT"],

        contributions: [
          {
            title: "My Work",
            description: "Describe what you designed and developed for this project."
          }
        ],

        evidence: [
          { name: "GitHub Repository", type: "SOURCE CODE", url: "" }
        ],

        learning: [
          "Add what you learned while creating this project."
        ]
      }
    ]
  }
};

const escapeHTML = value =>
  String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));

const asArray = value =>
  Array.isArray(value) ? value : [];

const container = document.getElementById("academy-journey");

if (container) {
  const pageAliases = {
    "year-1": "year1",
    "year-2": "year2",
    "year-3": "year3",
    "personal-projects": "personalProjects"
  };

  const pageKey =
    pageAliases[container.dataset.page] || container.dataset.page;

  const pageData = pages[pageKey];

  if (pageData) {
    renderPage(pageData);
  } else {
    container.textContent =
      "Page not found. Check the data-page value in this HTML file.";
  }
}


function renderPage(data) {
  const projects = asArray(data.projects);

  container.innerHTML = `
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    
      <div class="absolute inset-0 bg-[#030914]"></div>

      <div class="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]"></div>

      <div class="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]"></div>

      <div class="absolute inset-0 opacity-[0.06]"
        style="background-image:linear-gradient(rgba(34,211,238,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.5) 1px,transparent 1px);background-size:55px 55px">
      </div>
    </div>

    <header class="relative z-10 border-b border-cyan-400/20 bg-[#030914]/85 px-5 py-5 backdrop-blur-xl sm:px-8">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4">

        <p class="text-xs font-semibold tracking-widest">
          LOGISTICS NODE_01
        </p>

      </div>
    </header>

    <section class="relative z-10 mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">

      <p class="text-[9px] tracking-[0.3em] text-cyan-400">
        ${escapeHTML(data.program)} // ${escapeHTML(data.year)}
      </p>

      <div class="mt-3 flex flex-wrap items-end justify-between gap-4">

        <div>
          <h1 class="text-2xl font-semibold sm:text-3xl">
            ACADEMIC JOURNEY
          </h1>

          <p class="mt-2 text-sm text-slate-400">
            Explore my projects and learning experiences.
          </p>
        </div>

        <div class="border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
          <p class="text-[8px] tracking-widest text-slate-500">
            TOTAL PROJECTS
          </p>

          <p class="mt-1 text-xl text-cyan-300">
            ${String(projects.length).padStart(2, "0")}
          </p>
        </div>
      </div>
        <a href="/index.html"
          class="text-[9px] tracking-widest text-cyan-300 hover:text-white">
          ← BACK TO PORTFOLIO
        </a>

      <div class="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">

        <aside class="h-fit border border-cyan-400/15 bg-[#071522]/80 p-4">

          <p class="mb-5 text-[9px] tracking-widest text-slate-300">
            PROJECTS
          </p>

          <div id="project-navigation"
            class="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">

            ${projects.map((project, index) => `
              <button
                type="button"
                data-id="${escapeHTML(project.id)}"
                aria-pressed="${index === 0}"
                class="project-button min-w-[180px] flex-1 border p-4 text-left transition lg:min-w-0 ${
                  index === 0
                    ? "border-cyan-400/50 bg-cyan-400/10"
                    : "border-white/10 bg-[#0B1B2B]/70"
                }">

                <div class="flex flex-col items-start gap-2">

                  <span class="text-[8px] tracking-widest text-cyan-400">
                    PROJECT ${String(index + 1).padStart(2, "0")}
                  </span>

                  <span class="w-full break-words text-sm leading-5 text-slate-200">
                    ${escapeHTML(project.title || "PROJECT TITLE")}
                  </span>

                  <span class="max-w-full break-words text-[9px] leading-4 text-slate-500">
                    ${escapeHTML(project.category || "PROJECT CATEGORY")}
                  </span>

                </div>
              </button>
            `).join("")}

          </div>
        </aside>

        <div id="project-detail" class="min-w-0">

          ${projects.length ? "" : `
            <div class="border border-white/10 bg-[#071522]/80 p-8 text-center">
              <p class="text-sm text-slate-400">
                Projects will be added soon.
              </p>
            </div>
          `}

        </div>
      </div>
    </section>
    

    <div id="hologram"
        class="fixed bottom-5 left-4 z-40 flex items-end gap-2 sm:bottom-7 sm:left-7">

        <!-- Hologram content -->
        <div id="hologram-content" class="flex flex-col items-start">

            <div id="hologram-panel"
                class="mb-3 hidden w-[min(280px,calc(100vw-70px))] border border-cyan-400/30 bg-[#071522]/95 p-5 shadow-[0_0_35px_rgba(34,211,238,0.12)] backdrop-blur-xl">

                <div class="flex items-center justify-between">
                    <p class="text-[9px] tracking-[0.2em] text-cyan-300">NODE ASSISTANT</p>
                    <span class="text-[8px] text-green-400">● ONLINE</span>
                </div>

                <p class="mt-4 text-sm leading-6 text-slate-300">
                    Welcome to my academic journey. Explore my projects and learning experiences.
                </p>

                <p class="mt-4 text-[8px] tracking-widest text-slate-500">
                    LOGISTICS NODE_01
                </p>
            </div>

            <button id="hologram-toggle"
                aria-label="Open Node Assistant"
                aria-expanded="false"
                class="hologram-frame relative h-24 w-20 overflow-hidden border border-cyan-300/40 bg-[#071522]/70 shadow-[0_0_25px_rgba(34,211,238,0.18)] transition hover:scale-105 sm:h-32 sm:w-28">

                <img src="/imagenes/hologram.png"
                alt="Holographic assistant"
                class="h-full w-full object-contain">

                <div class="hologram-lines pointer-events-none absolute inset-0"></div>

                <span class="absolute bottom-1 left-0 w-full text-center text-[7px] tracking-widest text-cyan-200">
                    NODE AI
                </span>
            </button>

        </div>

        <button id="hologram-collapse"
            aria-label="Hide hologram"
            aria-expanded="true"
            class="mb-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/50 bg-[#071522] text-xl text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition hover:bg-cyan-400/10">
            ‹
        </button>

    </div>
 `;

  const detail = container.querySelector("#project-detail");
  const navigation = container.querySelector("#project-navigation");

  if (projects.length) {
    renderProject(projects[0], detail, 1);

    navigation.addEventListener("click", event => {
      const button = event.target.closest("[data-id]");

      if (!button) return;

      const project = projects.find(
        item => String(item.id) === button.dataset.id
      );

      if (!project) return;

      const index = projects.indexOf(project) + 1;

      renderProject(project, detail, index);

      navigation.querySelectorAll(".project-button").forEach(navButton => {
        const active = navButton === button;

        navButton.setAttribute("aria-pressed", String(active));
        navButton.classList.toggle("border-cyan-400/50", active);
        navButton.classList.toggle("bg-cyan-400/10", active);
        navButton.classList.toggle("border-white/10", !active);
        navButton.classList.toggle("bg-[#0B1B2B]/70", !active);
      });
    });
  }

  
    const toggle = container.querySelector("#hologram-toggle");
    const panel = container.querySelector("#hologram-panel");
    const content = container.querySelector("#hologram-content");
     collapse = container.querySelector("#hologram-collapse");


    if (window.matchMedia("(max-width: 639px)").matches) {
        content.classList.add("hidden");
        collapse.textContent = "›";
        collapse.setAttribute("aria-label", "Show hologram");
        collapse.setAttribute("aria-expanded", "false");
        }

    toggle.addEventListener("click", () => {
        const open = panel.classList.toggle("hidden") === false;
        toggle.setAttribute("aria-expanded", String(open));
    });

   
    collapse.addEventListener("click", () => {
        const hidden = content.classList.toggle("hidden");

        collapse.textContent = hidden ? "›" : "‹";
        collapse.setAttribute("aria-label", hidden ? "Show hologram" : "Hide hologram");
        collapse.setAttribute("aria-expanded", String(!hidden));
    })};


function renderProject(project, target, projectNumber) {

  const section = (number, title, content) => `
    <section class="border border-white/10 bg-[#071522]/80 p-5 sm:p-7">

      <p class="text-[9px] tracking-[0.2em] text-cyan-300">
        ${number}
      </p>

      <h3 class="mt-2 text-lg font-semibold text-white sm:text-xl">
        ${title}
      </h3>

      <div class="mt-5">
        ${content}
      </div>

    </section>
  `;

  const description = asArray(project.description);
  const technologies = asArray(project.technologies);
  const roles = asArray(project.roles);
  const contributions = asArray(project.contributions);
  const evidence = asArray(project.evidence);
  const learning = asArray(project.learning);


  const videoSection = project.video
    ? section("02 // DEMONSTRATION", "Project Video", `
        <video
          class="aspect-video w-full border border-cyan-400/20 bg-[#030914]"
          controls
          preload="metadata"
          playsinline>

          <source src="${escapeHTML(project.video)}" type="video/mp4">

          Your browser does not support video playback.
        </video>
      `)
    : "";

  const evidenceSection = evidence.length
    ? section("06 // DOCUMENTATION", "Project Evidence", `
        <div class="grid gap-3 sm:grid-cols-2">

          ${evidence.map(item => `
            <a
              ${item.url
                ? `href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer"`
                : 'aria-disabled="true"'
              }
              class="flex min-h-20 items-center justify-between gap-3 border border-white/10 bg-[#0B1B2B]/70 p-4 ${
                item.url
                  ? "transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  : "cursor-default opacity-60"
              }">

              <div class="min-w-0">

                <p class="break-words text-xs text-slate-200">
                  ${escapeHTML(item.name || "Evidence title")}
                </p>

                <p class="mt-2 break-words text-[8px] tracking-widest text-slate-500">
                  ${escapeHTML(item.type || "PROJECT RESOURCE")}
                </p>

              </div>

              <span class="shrink-0 text-cyan-400">
                ${item.url ? "↗" : "—"}
              </span>

            </a>
          `).join("")}

        </div>
      `)
    : "";

  const technologiesSection = technologies.length
    ? section("03 // TOOLKIT", "Technologies & Tools", `
        <div class="flex flex-wrap gap-3">

          ${technologies.map(tool => `
            <span class="border border-cyan-400/25 bg-cyan-400/5 px-4 py-3 text-xs text-slate-200">
              ${escapeHTML(tool)}
            </span>
          `).join("")}

        </div>
      `)
    : "";


  const rolesSection = roles.length
    ? section("04 // RESPONSIBILITY", "My Role", `
        <div class="flex flex-wrap gap-3">

          ${roles.map(role => `
            <span class="border border-blue-400/25 bg-blue-400/5 px-4 py-3 text-xs text-blue-200">
              ${escapeHTML(role)}
            </span>
          `).join("")}

        </div>
      `)
    : "";


  const contributionsSection = contributions.length
    ? section("05 // CONTRIBUTION", "My Contributions", `
        <div class="space-y-7">

          ${contributions.map((item, index) => `
            <div class="border-l-2 border-cyan-400/50 pl-5">

              <p class="text-[9px] tracking-widest text-cyan-400">
                CONTRIBUTION ${String(index + 1).padStart(2, "0")}
              </p>

              <h4 class="mt-2 font-semibold text-slate-100">
                ${escapeHTML(item.title || "Contribution title")}
              </h4>

              <p class="mt-3 text-sm leading-8 text-slate-300">
                ${escapeHTML(item.description || "Add a description of your contribution.")}
              </p>

            </div>
          `).join("")}

        </div>
      `)
    : "";


  const learningSection = learning.length
    ? section("07 // DEVELOPMENT", "Learning Outcomes", `
        <div class="space-y-4">

          ${learning.map(item => `
            <p class="text-sm leading-8 text-slate-300">
              ${escapeHTML(item)}
            </p>
          `).join("")}

        </div>
      `)
    : "";


  target.innerHTML = `
    <article class="space-y-6">

      <header class="border border-cyan-400/20 bg-[#071522]/85 p-5 sm:p-7">

        <div class="flex flex-col items-start gap-2">

          <p class="text-[9px] tracking-[0.2em] text-cyan-400">
            PROJECT ${String(projectNumber).padStart(2, "0")}
          </p>

          <h2 class="break-words text-2xl font-semibold sm:text-3xl">
            ${escapeHTML(project.title || "PROJECT TITLE")}
          </h2>

          <p class="break-words text-[9px] tracking-widest text-slate-400">
            ${escapeHTML(project.category || "PROJECT CATEGORY")}
          </p>

          <p class="mt-1 text-[9px] tracking-widest text-slate-500">
            PROJECT YEAR: ${escapeHTML(project.year || "YEAR")}
          </p>

        </div>
      </header>


      ${section("01 // OVERVIEW", "Project Description", `
        <div class="space-y-4">

          ${description.map(item => `
            <p class="text-sm leading-8 text-slate-300">
              ${escapeHTML(item)}
            </p>
          `).join("")}

        </div>
      `)}


      ${videoSection}


      ${(technologiesSection || rolesSection)
        ? `<div class="grid gap-6 xl:grid-cols-2">
            ${technologiesSection}
            ${rolesSection}
          </div>`
        : ""
      }


      ${contributionsSection}
      ${evidenceSection}
      ${learningSection}

    </article>
  `;
}
