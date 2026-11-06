
const footerContainer = document.getElementById("footer-container");

if (footerContainer) {
    footerContainer.innerHTML = `
        <footer class="relative w-full overflow-hidden border-t border-cyan-400/20 bg-[#0D1B2A]">

            <div class="absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-3xl pointer-events-none"></div>

            <div class="relative w-full px-5 py-9 sm:px-10 sm:py-10 lg:px-16">

                <div class="mx-auto max-w-[1500px]">

                    <!-- Brand -->
                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                        <a href="#home"
                           class="text-sm font-bold tracking-[0.18em] text-white transition hover:text-cyan-300">
                            LOGISTICS <span class="text-cyan-400">NODE_01</span>
                        </a>

                        <span class="text-[9px] font-semibold tracking-[0.22em] text-cyan-400">
                            PORTFOLIO · 2026
                        </span>

                    </div>

                    <div class="my-7 h-px bg-gradient-to-r from-cyan-400/30 via-slate-600/40 to-transparent"></div>

                    <!-- Main information -->
                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">

                        <!-- Journey -->
                        <div class="space-y-4">

                            <p class="text-[9px] font-semibold tracking-[0.22em] text-slate-500">
                                A FEW WORDS FROM MY JOURNEY
                            </p>

                            <div class="space-y-3">

                                <p class="text-[11px] text-slate-400">
                                    <span class="mr-3 font-semibold text-cyan-500">2024</span>
                                    Say a little, do a lot.
                                    <span class="text-slate-200">¡NO EXCUSES!</span>
                                </p>

                                <p class="text-[11px] text-slate-400">
                                    <span class="mr-3 font-semibold text-cyan-500">2025</span>
                                    <span class="text-slate-200">¡GOOD ATTITUDE!</span>
                                </p>

                                <p class="text-[11px] text-slate-400">
                                    <span class="mr-3 font-semibold text-cyan-500">2026</span>
                                    Do we quit?
                                    <span class="text-slate-200">NEVER!</span>
                                </p>

                            </div>

                        </div>

                        <!-- Creator -->
                        <div class="border-t border-cyan-400/15 pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">

                            <p class="text-[9px] font-semibold tracking-[0.22em] text-slate-500">
                                DESIGNED & DEVELOPED BY
                            </p>

                            <h2 class="mt-3 text-2xl font-bold tracking-[0.1em] text-white sm:text-3xl">
                                KEYLI <span class="text-cyan-400">RAMIREZ</span>
                            </h2>

                            <p class="mt-2 text-[10px] tracking-wide text-slate-400">
                                Aspiring Logistics Engineer
                            </p>

                        </div>

                    </div>

                    <!-- Bottom information inside the same footer -->
                    <div class="mt-8 border-t border-slate-700/60 pt-5">

                        <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">

                            <p class="text-center text-[9px] tracking-wider text-slate-500">
                                © ${new Date().getFullYear()} KEYLI RAMIREZ. ALL RIGHTS RESERVED.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    `;
}
