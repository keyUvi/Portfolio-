
const skillsContainer = document.getElementById("skills-container");

if (skillsContainer) {
    const skills = [
        {
            name: "Teamwork",
            description:
                "I collaborate with others, share ideas, and work toward common goals",
            example:
                "During my time in the Robotics Club, I worked with a team of four to build a robot. I applied teamwork by actively sharing ideas, listening to my teammates, distributing tasks fairly, and coordinating our time to ensure everyone contributed. When challenges arose, such as limited materials or technical difficulties, we communicated and worked together to find solutions. Through mutual support and collaboration, we successfully completed and presented our robot.",
            image: "/imagenes/skills/teamwork.jpeg",
            imageAlt: "Teamwork project evidence"
        },
        {
            name: "Leadership",
            description:
                "I take initiative, support my teammates, and help organize tasks.",
            example:
                "I demonstrated leadership by guiding a team of five in developing a website for our Computer Science class. I selected the tools, organized tasks, delegated responsibilities, and shared my knowledge to help everyone understand their work. I also guided the website's design and structure, ensuring that each member could contribute and explain the project. As a result, we successfully presented our website and achieved a score of 10/10.",
            image: "/imagenes/skills/leadership.PNG",
            imageAlt: "Leadership project evidence"
        },
        {
            name: "Adaptability",
            description:
                "I am willing adjust to different situations.",
            example:
                "I demonstrated adaptability during my first year in the Supérate Program while balancing high school and an additional academic workload. I adjusted to new learning methods, English activities, and working with new classmates. For an English presentation, I quickly adapted to the team, helped organize and decorate, and contributed ideas to engage the audience. Through good communication and collaboration, we delivered a successful presentation.",
            image: "/imagenes/skills/adaptability.jpeg",
            imageAlt: "Adaptability project evidence"
        },
        {
            name: "Responsibility",
            description:
                "I take my commitments seriously and aim to complete tasks carefully.",
            example:
                "I demonstrated responsibility during my first year in the Supérate Program by participating in a team volunteer project at El Cubo. Despite my busy academic schedule, I consistently organized my time to attend and support the community with cleaning, organization, and other activities. I showed commitment by making time for this responsibility and completing my tasks without making excuses.",
            image: "/imagenes/skills/responsibility.jpeg",
            imageAlt: "Responsibility project evidence"
        },
        {
            name: "Organization",
            description:
                "I organize information and tasks to keep my work clear and efficient.",
            example:
                "I demonstrated organizational skills during a second-year Supérate project called HavenUp, a real estate website developed by a team of eight. I managed my time, balanced design and coding tasks, and used Planner and Jira to track responsibilities and progress. I also helped organize our Expo presentation, including the stand setup, team roles, and pitch. As a result, we successfully presented our website both on stage and at our stand.",
            image: "/imagenes/skills/organization.jpeg",
            imageAlt: "Organization project evidence"
        },
        {
            name: "English",
            description:
                "I continue improving my English communication through regular practice.",
            example:
                "I applied my English skills during the Supérate project HavenUp, where I was selected, along with a teammate, to present our website on stage in English. Out of our eight team members, we were chosen for our English communication skills. I confidently explained our project to a large audience, representing our team and successfully completing the presentation.",
            image: "/imagenes/skills/english.jpeg",
            imageAlt: "English learning evidence"
        },
        {
            name: "Communication",
            description:
                "Applied effective communication by interacting with children clearly, patiently, and respectfully",
            example:
                "I developed my communication skills during my third year in the Supérate Program through volunteering with Glasswing's English Kids Club, where I worked with young children. I learned to communicate clearly, listen to their needs, and solve problems through respectful conversations. During the Spelling Bee Festival, I worked alongside three fellow volunteers to support the organization and guide the three selected children, helping maintain order and making sure they felt supported.",
            image: "/imagenes/skills/communication.jpeg",
            imageAlt: "Communication learning evidence"
        }
    ];

    skillsContainer.innerHTML = `
        <section id="skills"
            class="overflow-hidden bg-[#070d18] px-5 pb-14 pt-3 sm:px-8 lg:px-12 lg:-translate-x-3">

            <div class="mx-auto max-w-6xl border-t border-slate-800 pt-7 sm:pt-8">

                <header class="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <p class="mb-2 text-[10px] font-semibold uppercase
                            tracking-[0.3em] text-sky-400 sm:text-xs">
                            Capabilities / Skills_01
                        </p>

                        <h2 class="text-2xl font-semibold tracking-tight
                            text-white sm:text-3xl">
                            Skills
                        </h2>
                    </div>

                    <div class="flex items-center gap-1.5">
                        <button
                            id="skills-prev"
                            type="button"
                            aria-label="Previous skills"
                            class="flex h-8 w-8 items-center justify-center
                                rounded-full border border-slate-800
                                text-sm text-slate-400 transition
                                hover:border-cyan-400/60 hover:text-cyan-300
                                focus-visible:outline-none
                                focus-visible:ring-2 focus-visible:ring-cyan-400
                                disabled:cursor-not-allowed disabled:opacity-25">
                            <span aria-hidden="true">←</span>
                        </button>

                        <button
                            id="skills-next"
                            type="button"
                            aria-label="Next skills"
                            class="flex h-8 w-8 items-center justify-center
                                rounded-full border border-slate-800
                                text-sm text-slate-400 transition
                                hover:border-cyan-400/60 hover:text-cyan-300
                                focus-visible:outline-none
                                focus-visible:ring-2 focus-visible:ring-cyan-400
                                disabled:cursor-not-allowed disabled:opacity-25">
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </header>

                <div id="skills-track"
                    class="skills-track flex snap-x snap-mandatory gap-3
                        overflow-x-auto scroll-smooth pb-1"
                    aria-label="Skills carousel">

                    ${skills.map((skill, index) => `
                        <button
                            type="button"
                            data-skill-index="${index}"
                            class="group relative flex min-h-[58px]
                                w-[190px] shrink-0 snap-start items-center
                                gap-3 border border-slate-800/90
                                bg-[#080f1b] px-3.5 py-3 text-left
                                transition duration-200
                                hover:border-cyan-400/50
                                hover:bg-cyan-400/[0.04]
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-cyan-400
                                sm:w-[210px]">

                            <span class="shrink-0 font-mono text-[10px]
                                tracking-wider text-cyan-500/80">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <span class="h-5 w-px shrink-0 bg-slate-800
                                transition group-hover:bg-cyan-400/50"></span>

                            <span class="min-w-0 flex-1 text-sm
                                text-slate-300 transition
                                group-hover:text-white">
                                ${skill.name}
                            </span>

                            <span class="shrink-0 text-xs text-slate-500
                                transition group-hover:translate-x-0.5
                                group-hover:text-cyan-300"
                                aria-hidden="true">↗</span>
                        </button>
                    `).join("")}
                </div>
            </div>


            <div id="skill-modal"
                class="fixed inset-0 z-50 hidden items-center
                    justify-center overflow-y-auto bg-[#020711]/85
                    p-4 backdrop-blur-sm"
                role="dialog"
                aria-modal="true"
                aria-labelledby="skill-modal-title">

                <div class="my-auto max-h-[90vh] w-full max-w-xl
                    overflow-y-auto border border-slate-800
                    bg-[#0a1320]
                    shadow-[0_0_50px_rgba(34,211,238,0.07)]">

                    <div class="flex items-center justify-between
                        gap-4 border-b border-slate-800 px-5 py-3.5">

                        <p class="text-[9px] font-semibold uppercase
                            tracking-[0.25em] text-cyan-400">
                            Skill details / Profile
                        </p>

                        <button id="skill-modal-close"
                            type="button"
                            aria-label="Close skill details"
                            class="flex h-8 w-8 shrink-0 items-center
                                justify-center rounded-full
                                text-xl text-slate-400 transition
                                hover:bg-slate-800 hover:text-white
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-cyan-400">
                            ×
                        </button>
                    </div>

                    <div class="p-5 sm:p-7">

                       
                        <div class="mb-6 overflow-hidden border
                            border-slate-800 bg-[#070d18]">

                            <img id="skill-modal-image"
                                src=""
                                alt=""
                                class="hidden h-[260px] w-full object-cover"
                            />

                            <div id="skill-image-placeholder"
                                class="flex min-h-[180px] flex-col
                                    items-center justify-center gap-3
                                    p-6 text-center">

                                <span class="text-2xl text-cyan-500/70"
                                    aria-hidden="true">▧</span>

                                <p class="max-w-xs text-xs leading-5
                                    text-slate-500">
                                    Add an image to showcase your
                                    experience with this skill.
                                </p>
                            </div>
                        </div>

                        <p class="mb-2 text-[9px] uppercase
                            tracking-[0.25em] text-sky-400">
                            Skill overview
                        </p>

                        <h3 id="skill-modal-title"
                            class="text-2xl font-semibold text-white
                                sm:text-3xl">
                        </h3>

                        <p id="skill-modal-description"
                            class="mt-4 text-sm leading-7 text-slate-300">
                        </p>

                        <div class="mt-6 border-l-2 border-cyan-400
                            bg-cyan-400/[0.04] p-4">

                            <p class="text-[9px] font-semibold uppercase
                                tracking-[0.2em] text-cyan-400">
                                Practical experience
                            </p>

                            <p id="skill-modal-example"
                                class="mt-2 text-sm leading-7
                                    text-slate-300">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    const track = skillsContainer.querySelector("#skills-track");
    const previousButton = skillsContainer.querySelector("#skills-prev");
    const nextButton = skillsContainer.querySelector("#skills-next");

    const modal = skillsContainer.querySelector("#skill-modal");
    const closeButton = skillsContainer.querySelector("#skill-modal-close");
    const modalTitle = skillsContainer.querySelector("#skill-modal-title");
    const modalDescription =
        skillsContainer.querySelector("#skill-modal-description");
    const modalExample =
        skillsContainer.querySelector("#skill-modal-example");
    const modalImage =
        skillsContainer.querySelector("#skill-modal-image");
    const imagePlaceholder =
        skillsContainer.querySelector("#skill-image-placeholder");

    let lastFocusedElement = null;

    function updateCarouselButtons() {
        const maxScroll = track.scrollWidth - track.clientWidth;

        previousButton.disabled = track.scrollLeft <= 2;
        nextButton.disabled = track.scrollLeft >= maxScroll - 2;
    }

    function moveCarousel(direction) {
        const firstCard = track.querySelector("[data-skill-index]");
        if (!firstCard) return;

        const cardWidth = firstCard.getBoundingClientRect().width;
        const styles = window.getComputedStyle(track);
        const gap = parseFloat(styles.columnGap) || 0;

        track.scrollBy({
            left: direction * (cardWidth + gap),
            behavior: "smooth"
        });
    }

    previousButton.addEventListener("click", () => {
        moveCarousel(-1);
    });

    nextButton.addEventListener("click", () => {
        moveCarousel(1);
    });

    track.addEventListener("scroll", updateCarouselButtons, {
        passive: true
    });

    window.addEventListener("resize", updateCarouselButtons);

    function openModal(index, trigger) {
        const skill = skills[index];
        if (!skill) return;

        lastFocusedElement = trigger;

        modalTitle.textContent = skill.name;
        modalDescription.textContent = skill.description;
        modalExample.textContent = skill.example;

        
        modalImage.classList.add("hidden");
        imagePlaceholder.classList.remove("hidden");

        modalImage.onload = () => {
            modalImage.classList.remove("hidden");
            imagePlaceholder.classList.add("hidden");
        };

        modalImage.onerror = () => {
            modalImage.classList.add("hidden");
            imagePlaceholder.classList.remove("hidden");
        };

        modalImage.alt = skill.imageAlt || `Evidence of ${skill.name}`;

        if (skill.image) {
            modalImage.src = skill.image;
        } else {
            modalImage.removeAttribute("src");
        }

        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.classList.add("overflow-hidden");

        closeButton.focus();
    }

    function closeModal() {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.classList.remove("overflow-hidden");

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    skillsContainer
        .querySelectorAll("[data-skill-index]")
        .forEach((button) => {
            button.addEventListener("click", () => {
                openModal(Number(button.dataset.skillIndex), button);
            });
        });

    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            !modal.classList.contains("hidden")
        ) {
            closeModal();
        }
    });

    requestAnimationFrame(updateCarouselButtons);
}
