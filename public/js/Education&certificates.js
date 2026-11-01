const certificates = [
    {
        title: "Excel Associate",
        category: "certifications",
        organization: "Microsoft 365",
        year: "2025",
        file: "/certificates/Excel Associate.pdf"
    },
    {
        title: "Excel Expert",
        category: "certifications",
        organization: "Microsoft 365",
        year: "2026",
        file: "/certificates/Excel Expert.pdf"
    },
    {
        title: "Bronze TOEIC",
        category: "certifications",
        organization: "Supérate",
        year: "2025",
        file: "/certificates/TOEIC.pdf"
    },
    {
        title: "Power BI",
        category: "certifications",
        organization: "Supérate",
        year: "2026",
        file: "/certificates/powerBI.pdf"
    },
    {
        title: "Outstanding reader",
        category: "extracurricular",
        organization: "Fiction Express",
        year: "2023",
        file: "/certificates/Lecture.pdf"
    },
    {
        title: "Robotic Club",
        category: "extracurricular",
        organization: "Supérate",
        year: "2025",
        file: "/certificates/Robotic.pdf"
    },
    {
        title: "Telus Conversation",
        category: "extracurricular",
        organization: "Supérate",
        year: "2026",
        file: "/certificates/telus.pdf"
    },
    {
        title: "Supply Chain",
        category: "online",
        organization: "Platzi",
        year: "2026",
        file: "/certificates/diploma-supply-chain.pdf"
    },
    {
        title: "Lenguaje y notación matemática",
        category: "online",
        organization: "Platzi",
        year: "2026",
        file: "/certificates/online-course.pdf"
    },
    {
        title: "Curso de logística para startups",
        category: "online",
        organization: "Platzi",
        year: "2026",
        file: "/certificates/logística.pdf"
    }
];

const categoryLabels = {
    all: "All",
    certifications: "Certifications",
    extracurricular: "Extracurricular",
    online: "Online Courses"
};

const container = document.getElementById(
    "education-certificate-container"
);

if (!container) {
    console.error(
        "Education & Certificates: container not found. Check index.html."
    );
} else {
    container.innerHTML = `
        <section
            id="education-certificates"
            class="relative overflow-hidden bg-[#070d18] px-8 pt-4 pb-10 sm:px-10 sm:pt-5 sm:pb-8 lg:px-16 lg:pt-6 lg:pb-8 xl:px-20">

            <header class="mb-7 sm:mb-9">
                <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    My Learning Journey
                </p>

                <h2 class="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                    Education &amp; Certificates
                </h2>

                <p class="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                    Professional development, achievements, and continuous learning.
                </p>
            </header>

            <nav
                class="mb-6 flex flex-wrap gap-x-5 gap-y-2 border-b border-slate-700/70 sm:mb-8 sm:gap-x-7"
                aria-label="Certificate categories">

                ${Object.entries(categoryLabels).map(([key, label]) => `
                    <button
                        type="button"
                        data-category="${key}"
                        aria-pressed="${key === "certifications"}"
                        class="credential-filter relative -mb-px border-b-2 border-transparent px-0.5 pb-3 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${key === "certifications" ? "active border-cyan-400 text-cyan-300" : ""}">
                        ${label}
                    </button>
                `).join("")}
            </nav>

            <div
                class="credentials-grid grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            </div>

            <p
                class="credentials-empty py-6 text-sm text-slate-400"
                hidden>
                No certificates available in this category yet.
            </p>
        </section>
    `;

    const grid = container.querySelector(".credentials-grid");
    const emptyMessage = container.querySelector(".credentials-empty");
    const filterButtons = container.querySelectorAll(".credential-filter");

    function renderCertificates(category = "certifications") {
        const filtered = (category === "all"
            ? [...certificates]
            : certificates.filter(cert => cert.category === category)
            ).sort((a, b) => Number(b.year) - Number(a.year));

        grid.replaceChildren();

        filtered.forEach(cert => {
            const card = document.createElement("article");

            card.className = `
                flex min-w-0 flex-col rounded-lg border
                border-slate-700/70 bg-slate-900/40
                p-4 transition-colors duration-200
                hover:border-cyan-500/60 sm:p-4
            `;

            const topRow = document.createElement("div");
            topRow.className = "mb-3 flex items-start justify-between gap-3";

            const pdfLabel = document.createElement("span");
            pdfLabel.className = "inline-flex items-center rounded border border-cyan-900/80 bg-cyan-950/50 px-2 py-1 text-[10px] font-semibold tracking-wider text-cyan-300";
            pdfLabel.textContent = "PDF";

            const year = document.createElement("span");
            year.className = "shrink-0 pt-1 text-xs text-slate-500";
            year.textContent = cert.year;

            topRow.append(pdfLabel, year);

            const title = document.createElement("h3");
            title.className = "break-words text-sm font-semibold leading-5 text-slate-100 sm:text-base";
            title.textContent = cert.title;

            const organization = document.createElement("p");
            organization.className = "mt-1.5 break-words text-xs leading-5 text-slate-400 sm:text-sm";
            organization.textContent = cert.organization;

            const categoryLabel = document.createElement("p");
            categoryLabel.className = "mt-2 text-[11px] text-slate-500";
            categoryLabel.textContent = categoryLabels[cert.category];

            const link = document.createElement("a");
            link.className = `
                mt-3 inline-flex min-h-8 w-fit items-center gap-1.5
                text-xs font-semibold text-cyan-300
                transition-colors hover:text-cyan-100
                focus-visible:rounded focus-visible:outline-2
                focus-visible:outline-offset-4 focus-visible:outline-cyan-400
                sm:text-sm
            `;
            link.href = cert.file;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View Certificate ↗";
            link.setAttribute("aria-label", `Open PDF certificate: ${cert.title}`);

            card.append(topRow, title, organization, categoryLabel, link);
            grid.appendChild(card);
        });

        emptyMessage.hidden = filtered.length > 0;
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
        const selectedCategory = button.dataset.category;

        filterButtons.forEach(filter => {
            const active = filter === button;

            filter.classList.toggle("active", active);
            filter.classList.toggle("border-cyan-400", active);
            filter.classList.toggle("text-cyan-300", active);
            filter.classList.toggle("border-transparent", !active);
            filter.classList.toggle("text-slate-400", !active);

            filter.setAttribute("aria-pressed", String(active));
        });

        renderCertificates(selectedCategory);
    });

});

renderCertificates("certifications");
}