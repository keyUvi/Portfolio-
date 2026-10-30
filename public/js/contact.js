
const contactInfo = {
    whatsappNumber: "50378088221",
    whatsappDisplay: "+503 7808 8221",
    email: "keyli.ramirez2706@gmail.com",
    linkedin: "https://www.linkedin.com/in/keyli-ramírez-617715430?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    linkedinDisplay: "linkedin.com/in/keyliRamírez",
    github: "https://github.com/keyUvi",
    githubDisplay: "github.com/your-keyUvi"
};

const contactContainer = document.getElementById("contact-container");

if (contactContainer) {
    contactContainer.innerHTML = `
        <section
            id="contact"
            class="relative overflow-hidden py-16 sm:py-24"
            aria-labelledby="contact-title"
        >
            <div class="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

               
                <div class="mb-10 sm:mb-12">
                    <p class="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                        LET'S CONNECT
                    </p>

                    <h2
                        id="contact-title"
                        class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Contact
                    </h2>

                    <p class="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        Have a project, an opportunity, or an idea to share?
                        Choose your preferred way to get in touch.
                    </p>
                </div>

                
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">

                 
                    <article
                        class="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 sm:p-6"
                    >
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 11.5a8.4 8.4 0 0 1-12.4 7.4L4 20l1.2-3.4A8.5 8.5 0 1 1 20 11.5Z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.5 8.5c.5 2.5 2.5 4.5 5 5l1.2-1.2 2 .8c-.1 1.2-.8 2-2 2-3.8-.3-7.3-3.8-7.6-7.6 0-1.2.8-1.9 2-2l.8 2-1.4 1Z"/>
                                </svg>
                            </div>

                            <span class="rounded-full border border-emerald-400/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                                Messaging
                            </span>
                        </div>

                        <h3 class="mt-5 text-lg font-semibold text-white">
                            WhatsApp
                        </h3>

                        <p class="mt-2 break-words text-sm text-slate-400">
                            ${contactInfo.whatsappDisplay}
                        </p>

                        <p class="mt-3 text-sm leading-6 text-slate-500">
                            Let's connect through a direct message.
                        </p>

                        <div class="mt-6 flex flex-wrap gap-3">
                            <a
                                href="https://wa.me/${contactInfo.whatsappNumber}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                            >
                                Open chat
                                <span aria-hidden="true">↗</span>
                            </a>

                            <button
                                type="button"
                                data-copy="${contactInfo.whatsappDisplay}"
                                class="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                            >
                                Copy number
                            </button>
                        </div>
                    </article>

                   
                    <article
                        class="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 sm:p-6"
                    >
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
                                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4 7 8 6 8-6"/>
                                </svg>
                            </div>

                            <span class="rounded-full border border-cyan-400/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                                Email
                            </span>
                        </div>

                        <h3 class="mt-5 text-lg font-semibold text-white">
                            Email
                        </h3>

                        <p class="mt-2 break-all text-sm text-slate-400">
                            ${contactInfo.email}
                        </p>

                        <p class="mt-3 text-sm leading-6 text-slate-500">
                            For inquiries, collaborations, and opportunities.
                        </p>

                        <div class="mt-6 flex flex-wrap gap-3">
                            <a
                                href="mailto:${contactInfo.email}"
                                class="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                            >
                                Send email
                                <span aria-hidden="true">↗</span>
                            </a>

                            <button
                                type="button"
                                data-copy="${contactInfo.email}"
                                class="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                            >
                                Copy email
                            </button>
                        </div>
                    </article>

               
                    <article
                        class="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 sm:p-6"
                    >
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 font-bold text-xl text-blue-400">
                                in
                            </div>

                            <span class="rounded-full border border-blue-400/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-blue-400">
                                Professional
                            </span>
                        </div>

                        <h3 class="mt-5 text-lg font-semibold text-white">
                            LinkedIn
                        </h3>

                        <p class="mt-2 break-all text-sm text-slate-400">
                            ${contactInfo.linkedinDisplay}
                        </p>

                        <p class="mt-3 text-sm leading-6 text-slate-500">
                            Explore my professional profile and experience.
                        </p>

                        <div class="mt-6 flex flex-wrap gap-3">
                            <a
                                href="${contactInfo.linkedin}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                            >
                                View profile
                                <span aria-hidden="true">↗</span>
                            </a>

                            <button
                                type="button"
                                data-copy="${contactInfo.linkedin}"
                                class="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                            >
                                Copy link
                            </button>
                        </div>
                    </article>

                
                    <article
                        class="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 sm:p-6"
                    >
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-600/50 bg-slate-800 text-white">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.55.1.76-.24.76-.53v-2.06c-3.1.68-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.99 2.15 3.39 1.63.1-.72.4-1.2.7-1.48-2.47-.28-5.06-1.24-5.06-5.5 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.4.11-2.92 0 0 .94-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.05-1.13 3.05-1.13.61 1.52.23 2.64.11 2.92.72.77 1.15 1.76 1.15 2.97 0 4.27-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.02c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"/>
                                </svg>
                            </div>

                            <span class="rounded-full border border-slate-700 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                                Projects
                            </span>
                        </div>

                        <h3 class="mt-5 text-lg font-semibold text-white">
                            GitHub
                        </h3>

                        <p class="mt-2 break-all text-sm text-slate-400">
                            ${contactInfo.githubDisplay}
                        </p>

                        <p class="mt-3 text-sm leading-6 text-slate-500">
                            Explore my projects, code, and technical work.
                        </p>

                        <div class="mt-6 flex flex-wrap gap-3">
                            <a
                                href="${contactInfo.github}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                            >
                                Explore projects
                                <span aria-hidden="true">↗</span>
                            </a>

                            <button
                                type="button"
                                data-copy="${contactInfo.github}"
                                class="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                            >
                                Copy link
                            </button>
                        </div>
                    </article>

                </div>

                <div class="mt-6 flex justify-start">
                    <a
                    href="/contact.vcf"
                    download="Keyli-Ramirez.vcf"
                    class="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/5 px-4 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-200"
                    >
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                            aria-hidden="true"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"
                            />
                        </svg>

                        Download Contact Card
                    </a>
                </div>

    
                <div class="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p class="text-xs leading-5 text-slate-500">
                        Open to learning, collaboration, and new opportunities.
                    </p>

                    <p class="font-mono text-[10px] tracking-widest text-slate-600">
                        LOGISTICS NODE_01 / CONTACT
                    </p>
                </div>

                <p
                    id="contact-copy-status"
                    class="mt-3 min-h-5 text-sm text-cyan-400"
                    role="status"
                    aria-live="polite"
                ></p>

            </div>
        </section>
    `;

    // Copy buttons
    contactContainer.addEventListener("click", async (event) => {
        const button = event.target.closest("[data-copy]");

        if (!button || !contactContainer.contains(button)) {
            return;
        }

        const value = button.dataset.copy;
        const status = document.getElementById("contact-copy-status");
        const originalText = button.textContent;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(value);
            } else {
                const temporaryInput = document.createElement("textarea");

                temporaryInput.value = value;
                temporaryInput.setAttribute("readonly", "");
                temporaryInput.style.position = "fixed";
                temporaryInput.style.opacity = "0";

                document.body.appendChild(temporaryInput);
                temporaryInput.select();

                const copied = document.execCommand("copy");
                temporaryInput.remove();

                if (!copied) {
                    throw new Error("Copy operation failed");
                }
            }

            button.textContent = "Copied!";
            status.textContent = "Copied to clipboard successfully.";

            window.setTimeout(() => {
                button.textContent = originalText;
                status.textContent = "";
            }, 1800);
        } catch (error) {
            status.textContent =
                "Unable to copy automatically. Please select and copy the text manually.";

            console.error("Contact copy error:", error);
        }
    });
} else {
    console.error(
        'Contact section not rendered: element "#contact-container" was not found.'
    );
}
