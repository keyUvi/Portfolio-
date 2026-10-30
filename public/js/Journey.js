
const journeyContainer = document.getElementById("journey-container");

if (journeyContainer) {
    journeyContainer.innerHTML = `
        <section
            id="my-projects"
            class="relative isolate overflow-hidden bg-[#050D18] px-5 py-24 text-white sm:px-8 lg:px-12"
        >
            
            <div class="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"></div>
            <div class="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]"></div>

            <div class="relative mx-auto max-w-7xl">

                
                <div class="mb-16">
                    <p class="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        <span class="h-px w-8 bg-cyan-400"></span>
                        Portfolio / Selected work
                    </p>

                    <h2 class="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                        MY <span class="text-cyan-400">PROJECTS</span>
                    </h2>

                    <p class="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                        Three years of learning, new challenges, and personal projects
                        building my path toward logistics and technology.
                    </p>
                </div>

                
                <div class="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">

                   
                    <article class="project-container group">
                        <div class="container-visual">
                            <div class="container-number">01</div>
                            <a href="year1.html">
                                <img
                                src="/imagenes/container..png"
                                alt="Container 01"
                                class="container-image"
                                >
                            </a>
                            <div class="container-light"></div>
                        </div>

                        <div class="mt-7 text-center">
                            <p class="project-index">ACADEMIC ARCHIVE / 001</p>
                            <h3 class="project-title">CONTAINER 01</h3>
                            <p class="project-description">The beginning of my journey</p>

                            <a href="year1.html" class="project-button">
                                <span>SÚPERATE · YEAR 01</span>
                                <span class="button-arrow">↗</span>
                            </a>
                        </div>
                    </article>

                    
                    <article class="project-container group">
                        <div class="container-visual">
                            <div class="container-number">02</div>
                            <a href="year2.html">
                                <img
                                src="/imagenes/container..png"
                                alt="Container 02"
                                class="container-image"
                                >
                            </a>
                            <div class="container-light"></div>
                        </div>

                        <div class="mt-7 text-center">
                            <p class="project-index">ACADEMIC ARCHIVE / 002</p>
                            <h3 class="project-title">CONTAINER 02</h3>
                            <p class="project-description">Learning and development</p>

                            <a href="/year2.html" class="project-button">
                                <span>SÚPERATE · YEAR 02</span>
                                <span class="button-arrow">↗</span>
                            </a>
                        </div>
                    </article>

                    
                    <article class="project-container group">
                        <div class="container-visual">
                            <div class="container-number">03</div>
                            <a href="/year3.html">
                                <img
                                src="/imagenes/container..png"
                                alt="Container 03"
                                class="container-image"
                                >
                            </a>
                            <div class="container-light"></div>
                        </div>

                        <div class="mt-7 text-center">
                            <p class="project-index">ACADEMIC ARCHIVE / 003</p>
                            <h3 class="project-title">CONTAINER 03</h3>
                            <p class="project-description">Growth and new goals</p>

                            <a href="/year3.html" class="project-button">
                                <span>SÚPERATE · YEAR 03</span>
                                <span class="button-arrow">↗</span>
                            </a>
                        </div>
                    </article>

                    
                    <article class="project-container group">
                        <div class="container-visual">
                            <div class="container-number">04</div>
                            <a href="/personalProjects.html">
                                <img
                                src="/imagenes/container..png"
                                alt="Container 04"
                                class="container-image"
                                >
                            </a>
                            <div class="container-light"></div>
                        </div>

                        <div class="mt-7 text-center">
                            <p class="project-index">INDEPENDENT ARCHIVE / 004</p>
                            <h3 class="project-title">CONTAINER 04</h3>
                            <p class="project-description">Ideas beyond the classroom</p>

                            <a href="/personalProjects.html" class="project-button">
                                <span>PERSONAL PROJECTS</span>
                                <span class="button-arrow">↗</span>
                            </a>
                        </div>
                    </article>

                </div>

            </div>
        </section>
    `;
}
