
const aboutMeContainer = document.getElementById("aboutme-container");

if (aboutMeContainer) {
    const values = [
        "Integrity",
        "Solidarity",
        "Resilience",
        "Commitment",
        "Responsibility",
        "Respect"
    ];

    aboutMeContainer.innerHTML = `
        <section
            id="about-me"
            class="relative overflow-hidden bg-[#070d18] px-4 pt-4 pb-14 sm:px-8 sm:pt-5 sm:pb-6 lg:px-12 lg:pt-6 lg:pb-8 lg:-translate-x-3"
        >
            <div class="mx-auto max-w-6xl">

                <header class="mb-9 sm:mb-11">
                    <p class="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-sky-400 sm:text-xs">
                        Get to know me / Profile_01
                    </p>

                    <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white">
                        About Me
                    </h2>

                    <p class="mt-3 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                        Discover the person behind the projects, the values I believe in,
                        and the mindset that drives my growth.
                    </p>
                </header>

                <div class="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-10 lg:gap-14">

                    
                    <div class="flex min-w-0 flex-col gap-5">

                       
                        <article
                            class="group relative border border-sky-900/80 bg-[#0a1524] p-3 transition-all duration-300 hover:border-sky-400/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)] sm:p-4"
                        >

                            <div class="mb-3 flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                                <div>
                                    <p class="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                                        Identity file
                                    </p>

                                    <p class="mt-1 font-mono text-xs tracking-wide text-sky-300">
                                        PROFILE_001
                                    </p>
                                </div>

                                <div class="flex items-center gap-2">
                                    <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]"></span>

                                    <span class="text-[9px] uppercase tracking-widest text-slate-400">
                                        Personal
                                    </span>
                                </div>
                            </div>

                            <div class="relative mx-auto w-full max-w-[300px] overflow-hidden bg-[#101e30]">

                                <span class="pointer-events-none absolute left-2 top-2 z-10 h-5 w-5 border-l border-t border-cyan-400"></span>

                                <span class="pointer-events-none absolute right-2 top-2 z-10 h-5 w-5 border-r border-t border-cyan-400"></span>

                                <span class="pointer-events-none absolute bottom-2 left-2 z-10 h-5 w-5 border-b border-l border-cyan-400"></span>

                                <span class="pointer-events-none absolute bottom-2 right-2 z-10 h-5 w-5 border-b border-r border-cyan-400"></span>

                                <div class="aspect-[3/3]">
                                    <img
                                        src="./imagenes/about-me.png"
                                        alt="Portrait of me"
                                        class="absolute inset-0 h-full w-full scale-[1.5] object-cover object-center transition-transform duration-500 group-hover:scale-[1.55]"
                                        loading="lazy"
                                    />
                                </div>

                                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07101d]/75 via-transparent to-transparent"></div>

                                <div class="absolute bottom-4 left-4 right-4 z-10">
                                    <p class="text-[9px] uppercase tracking-[0.25em] text-cyan-300">
                                        Personal profile
                                    </p>

                                    <p class="mt-1 text-sm font-medium text-white">
                                        Always learning.
                                    </p>
                                </div>
                            </div>

                            <div class="mt-3 flex items-center justify-between gap-2 border-t border-slate-800 pt-3">
                                <span class="text-[9px] uppercase tracking-widest text-slate-500">
                                    Learning in progress
                                </span>

                                <span class="font-mono text-[10px] tracking-wider text-cyan-400">
                                    01 / 01
                                </span>
                            </div>

                        </article>

                        <article class="relative overflow-hidden border border-cyan-900/70 bg-[#091725] p-4 sm:p-5">

                            <div class="absolute right-0 top-0 h-12 w-12 border-r border-t border-cyan-400/30"></div>

                            <div class="flex items-center gap-3">
                                <div class="flex h-9 w-9 shrink-0 items-center justify-center border border-cyan-400/30 bg-cyan-400/[0.06]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="text-cyan-300"
                                    >
                                        <path d="M9 18h6"/>
                                        <path d="M10 22h4"/>
                                        <path d="M15.09 14a6 6 0 1 0-6.18 0c.63.42 1.09 1.17 1.09 2h4c0-.83.46-1.58 1.09-2Z"/>
                                    </svg>
                                </div>

                                <div>
                                    <p class="text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                                        Personal philosophy
                                    </p>

                                    <h3 class="mt-1 text-lg font-semibold text-white">
                                        My Mindset<span class="text-cyan-400">.</span>
                                    </h3>
                                </div>
                            </div>

                            <p class="mt-4 text-sm leading-7 text-slate-300">
                                Learn with purpose. Build with intention.
                                Grow through experience.
                            </p>

                            <div class="mt-4 flex items-center gap-2">
                                <span class="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>

                                <span class="text-[9px] uppercase tracking-[0.2em] text-slate-500">
                                    Progress is continuous
                                </span>
                            </div>

                        </article>

                        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] uppercase tracking-[0.18em] text-slate-500">
                            <span>Curiosity</span>
                            <span class="text-cyan-500">/</span>
                            <span>Consistency</span>
                            <span class="text-cyan-500">/</span>
                            <span>Growth</span>
                        </div>

                    </div>

                    
                    <div class="flex min-w-0 flex-col gap-7 border-t border-slate-800 pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:pl-10">

                        <div class="w-full">

                            <p class="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-400 sm:text-xs">
                                <span class="h-px w-7 bg-sky-400"></span>
                                Who I am
                            </p>

                            <div class="mt-6 space-y-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">

                                <p>
                                    I am a high school student who is committed to learning, growing,
                                     and giving my best in everything I do. I consider myself responsible and 
                                     resilient, and I enjoy volunteering and taking on new challenges.
                                </p>

                                <p>
                                    Through the Programa Empresarial ¡Supérate!, I have improved my English,
                                    developed my ICT skills, and earned technology certifications, including
                                    Microsoft Excel.
                                </p>

                                <p>
                                    My goal is to study Logistics and Operations Engineering and build a career where I
                                    can continue learning and contribute positively to society. I am always open to new
                                    experiences and opportunities that allow me to grow both personally and
                                    professionally.
                                </p>

                            </div>
                        </div>

                       
                        <article class="w-full min-w-0 border border-slate-800 bg-[#0a1320] p-4 sm:p-5">

                            <div class="mb-4 flex items-end justify-between gap-3">
                                <div>
                                    <p class="text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                                        The principles behind my growth
                                    </p>

                                    <h3 class="mt-1 text-lg font-semibold text-white">
                                        Core Values
                                    </h3>
                                </div>
                            </div>

                            <div class="@container w-full min-w-0">

                                <div class="grid grid-cols-1 [@container(min-width:420px)]:grid-cols-2 gap-2 sm:gap-3">

                                    ${values.map((value, index) => `
                                        <div
                                            class="group/value relative flex w-full min-w-0 min-h-[48px] items-center gap-2 border border-slate-800/90 bg-[#080f1b] px-3 py-2 transition-all duration-300 hover:border-cyan-400/70 hover:bg-cyan-400/[0.06] hover:shadow-[0_0_18px_rgba(34,211,238,0.09)] sm:gap-3"
                                        >

                                            <span class="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-cyan-500/20 transition-colors group-hover/value:border-cyan-300/70"></span>

                                            <span class="shrink-0 font-mono text-[9px] tracking-wider text-cyan-500/80 transition-colors group-hover/value:text-cyan-300">
                                                ${String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span class="h-4 w-px shrink-0 bg-slate-800 transition-colors group-hover/value:bg-cyan-400/60"></span>

                                            <span class="min-w-0 flex-1 text-sm leading-4 text-slate-300 transition-colors group-hover/value:text-white sm:text-sm">
                                                ${value}
                                            </span>

                                            <span class="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700 transition-all group-hover/value:bg-cyan-300 group-hover/value:shadow-[0_0_8px_rgba(103,232,249,0.9)]"></span>

                                        </div>
                                    `).join("")}

                                </div>
                            </div>

                        </article>

                    </div>
                </div>
            </div>
        </section>
    `;
}
