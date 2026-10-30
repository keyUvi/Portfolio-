
const techStackContainer = document.getElementById("tech-stack-container");

const technologies = [
    { name: "JavaScript", image: "javascript.png" },
    { name: "Python", image: "python.webp" },
    { name: "HTML", image: "html.png" },
    { name: "Tailwind CSS", image: "tailwind-css.png" },
    { name: "Canva", image: "canva.png" },
    { name: "Figma", image: "figma.webp" },
    { name: "Jira", image: "jira.jpg" },
    { name: "Planner", image: "planner.webp" },
    { name: "GitHub", image: "github.png" },
    { name: "Microsoft 365", image: "microsoft-365.webp" }
];


function createTechCard(technology) {
    return `
        <article
            class="group flex w-32 shrink-0 flex-col items-center gap-3 text-center"
        >
            <div
                class="flex h-20 w-20 items-center justify-center rounded-2xl
                border border-sky-400/20 bg-slate-900/80 p-4
                shadow-[0_0_18px_rgba(56,189,248,0.10)]
                transition duration-300
                group-hover:border-sky-400/70
                group-hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
            >
                <img
                    src="/imagenes/logos/${technology.image}"
                    alt="Logo de ${technology.name}"
                    class="h-full w-full object-contain
                    drop-shadow-[0_0_7px_rgba(56,189,248,0.25)]
                    transition duration-300
                    group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.75)]"
                    loading="lazy"
                >
            </div>

            <h3
                class="text-sm font-medium tracking-wide text-slate-300
                transition-colors duration-300
                group-hover:text-sky-300"
            >
                ${technology.name}
            </h3>
        </article>
    `;
}


function renderTechStack() {
    if (!techStackContainer) {
        console.warn("No se encontró #tech-stack-container.");
        return;
    }

    const cards = technologies.map(createTechCard).join("");

    techStackContainer.innerHTML = `
        <section
            id="tech-stack"
            class="relative overflow-hidden bg-transparent py-16 text-white"
        >
            <div class="mx-auto mb-10 max-w-6xl px-6 text-center">
                <span
                    class="text-xs font-semibold uppercase tracking-[0.35em]
                    text-sky-400"
                >
                    MY TECH STACK
                </span>

                <h2
                    class="mt-3 text-2xl font-bold tracking-wide sm:text-3xl"
                >
                    Tools & technologies
                </h2>
            </div>

            <div class="tech-marquee relative w-full">
                <div class="tech-track flex w-max">
                    <div class="tech-group flex shrink-0 items-start gap-8 px-4">
                        ${cards}
                    </div>

                    <div
                        class="tech-group flex shrink-0 items-start gap-8 px-4"
                        aria-hidden="true"
                    >
                        ${cards}
                    </div>
                </div>
            </div>
        </section>
    `;
}

renderTechStack();
