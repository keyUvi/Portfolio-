
const checklistContainer = document.getElementById("checklist-container");

if (checklistContainer) {
    checklistContainer.innerHTML = `
    <section id="superate-journey"
        class="relative overflow-hidden bg-[#050B14] px-5 pt-20 pb-4 sm:px-10 sm:pt-24 sm:pb-4 lg:px-16"

        <!-- Background details -->
        <div class="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-[100px]"></div>
        <div class="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-500/[0.04] blur-[100px]"></div>

        <div class="relative mx-auto max-w-6xl">

            <!-- Heading -->
            <div class="mb-12">
                <p class="mb-3 text-[11px] font-semibold tracking-[0.3em] text-cyan-400">
                    PROGRAMA EMPRESARIAL ¡SUPÉRATE!
                </p>

                <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h2 class="text-3xl font-bold tracking-wide text-white sm:text-4xl">
                            THREE YEARS <span class="text-cyan-400">OF GROWTH</span>
                        </h2>

                        <p class="mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
                            Three years of learning, growth, and new experiences.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-cyan-300">
                        <span class="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
                        JOURNEY IN PROGRESS
                    </div>
                </div>
            </div>

            <!-- Timeline -->
            <div class="relative mx-auto max-w-5xl">

                <!-- Desktop curved track -->
                <svg
                    class="pointer-events-none absolute left-0 top-0 hidden h-[125px] w-full overflow-visible md:block"
                    viewBox="0 0 1000 125"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                >
                    <!-- Base path -->
                    <path
                        d="M166 101 C285 101 340 21 500 21 C660 21 715 101 834 101"
                        stroke="#334155"
                        stroke-width="2"
                        stroke-linecap="round"
                    />

                    <!-- Completed path -->
                    <path
                        d="M166 101 C285 101 340 21 500 21"
                        stroke="url(#journey-gradient)"
                        stroke-width="2.5"
                        stroke-linecap="round"
                    />

                    <defs>
                        <linearGradient id="journey-gradient" x1="166" y1="101" x2="500" y2="21">
                            <stop stop-color="#2DD4BF"/>
                            <stop offset="1" stop-color="#22D3EE"/>
                        </linearGradient>
                    </defs>

                    <!-- Moving light -->
                    <circle r="4" fill="#A5F3FC" class="journey-light">
                        <animateMotion
                            dur="4s"
                            repeatCount="indefinite"
                            path="M166 101 C285 101 340 21 500 21 C660 21 715 101 834 101"
                        />
                    </circle>
                </svg>

                <!-- Mobile track -->
                <div class="pointer-events-none absolute bottom-24 left-[20px] top-8 w-[2px] bg-slate-700/70 md:hidden">
                    <div class="h-[58%] w-full bg-gradient-to-b from-teal-400 to-cyan-400"></div>

                    <div class="timeline-pulse-mobile absolute left-1/2 top-[55%] h-16 w-[3px] -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_12px_3px_rgba(34,211,238,0.6)]"></div>
                </div>

                <div class="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">

                    <!-- FRESHMAN -->
                    <article class="relative flex gap-6 md:mt-[80px] md:flex-col md:items-center md:gap-0 md:text-center">

                        <!-- Completed node -->
                        <div class="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-teal-400/70 bg-[#071923] text-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.15)] md:mb-8">

                            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="m5 12 4 4L19 6"/>
                            </svg>

                        </div>

                        <!-- Content -->
                        <div class="min-w-0 flex-1 border-l border-teal-400/20 pl-5 md:w-full md:border-l-0 md:pl-0">

                            <p class="text-[10px] font-semibold tracking-[0.25em] text-teal-400">
                                YEAR 01
                            </p>

                            <h3 class="mt-2 text-xl font-bold tracking-wide text-white sm:text-2xl">
                                FRESHMAN
                            </h3>

                            <p class="mt-1 text-lg font-medium text-slate-400">
                                2024
                            </p>

                            <div class="mt-4 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/[0.06] px-3 py-1.5">
                                <span class="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                                <span class="text-[9px] font-bold tracking-[0.18em] text-teal-300">
                                    COMPLETED
                                </span>
                            </div>

                        </div>
                    </article>

                    <!-- JUNIOR -->
                    <article class="relative flex gap-6 md:mt-0 md:flex-col md:items-center md:gap-0 md:text-center">

                        <!-- Completed node -->
                        <div class="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-teal-400/70 bg-[#071923] text-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.15)] md:mb-8">

                            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="m5 12 4 4L19 6"/>
                            </svg>

                        </div>

                        <!-- Content -->
                        <div class="min-w-0 flex-1 border-l border-teal-400/20 pl-5 md:w-full md:border-l-0 md:pl-0">

                            <p class="text-[10px] font-semibold tracking-[0.25em] text-teal-400">
                                YEAR 02
                            </p>

                            <h3 class="mt-2 text-xl font-bold tracking-wide text-white sm:text-2xl">
                                JUNIOR
                            </h3>

                            <p class="mt-1 text-lg font-medium text-slate-400">
                                2025
                            </p>

                            <div class="mt-4 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/[0.06] px-3 py-1.5">
                                <span class="h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                                <span class="text-[9px] font-bold tracking-[0.18em] text-teal-300">
                                    COMPLETED
                                </span>
                            </div>

                        </div>
                    </article>

                    <!-- SENIOR -->
                    <article class="relative flex gap-6 md:mt-[80px] md:flex-col md:items-center md:gap-0 md:text-center">

                        <!-- Active node -->
                        <div class="senior-orbit relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#071923] md:mb-8">

                            <div class="absolute -inset-[5px] rounded-full border border-dashed border-cyan-300/80"></div>

                            <div class="absolute inset-0 animate-pulse rounded-full bg-cyan-400/10"></div>

                            <div class="relative flex h-full w-full items-center justify-center rounded-full border border-cyan-400 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.3)]">

                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="9"/>
                                    <path d="M12 7v5l3 2"/>
                                </svg>

                            </div>
                        </div>

                        <!-- Content -->
                        <div class="min-w-0 flex-1 border-l border-cyan-400/30 pl-5 md:w-full md:border-l-0 md:pl-0">

                            <p class="text-[10px] font-semibold tracking-[0.25em] text-cyan-400">
                                YEAR 03
                            </p>

                            <h3 class="mt-2 text-xl font-bold tracking-wide text-white sm:text-2xl">
                                SENIOR
                            </h3>

                            <p class="mt-1 text-lg font-medium text-slate-300">
                                2026
                            </p>

                            <div class="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/[0.08] px-3 py-1.5">
                                <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300"></span>
                                <span class="text-[9px] font-bold tracking-[0.18em] text-cyan-300">
                                    IN PROGRESS
                                </span>
                            </div>

                        </div>
                    </article>

                </div>
            </div>

            <!-- Bottom status -->
            <div class="mt-5 flex items-center justify-center gap-3">
                <div class="h-px w-10 bg-slate-700"></div>

                <p class="text-[10px] font-medium tracking-[0.25em] text-slate-500">
                    STILL MOVING FORWARD
                </p>

                <div class="h-px w-10 bg-slate-700"></div>
            </div>

        </div>
    </section>
    `;
}
