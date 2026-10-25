
document.getElementById("navbar-container").innerHTML = `

  <header class="fixed top-0 left-0 w-full z-50 border-b border-sky-900/70 bg-[#030b16]/95 text-white backdrop-blur-md">

    <div class="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 md:px-8 xl:px-10">

      
      <a href="/index.html#inicio" class="shrink-0 leading-tight no-underline">
        <span class="block text-sm font-bold tracking-[0.18em]">
          LOGISTICS <span class="text-sky-400">NODE_01</span>
        </span>

        <span class="mt-1 block text-[10px] tracking-[0.3em] text-sky-300">
          KEYLI RAMÍREZ
        </span>
      </a>

  
      <nav
        id="desktop-menu"
        class="hidden items-center gap-7 text-sm text-slate-300 lg:flex"
      >
        <a href="/index.html#inicio" class="nav-link relative py-2 transition-colors duration-300 hover:text-sky-400">
          Home
        </a>

        <a href="/index.html#my-projects" class="nav-link relative py-2 transition-colors duration-300 hover:text-sky-400">
          Academic Journey
        </a>

        <a href="/index.html#sobre-mi" class="nav-link relative py-2 transition-colors duration-300 hover:text-sky-400">
          About me
        </a>

        <a href="/index.html#habilidades" class="nav-link relative py-2 transition-colors duration-300 hover:text-sky-400">
          skills
        </a>

        <a href="/index.html#certificaciones" class="nav-link relative py-2 transition-colors duration-300 hover:text-sky-400">
          Certifications
        </a>

        <a href="/index.html#certificados" class="nav-link relative py-2 transition-colors duration-300 hover:text-sky-400">
          Certificates
        </a>

        <a href="/index.html#contacto" class="nav-link relative py-2 transition-colors duration-300 hover:text-sky-400">
          Contact
        </a>
    </nav>

      <div class="flex shrink-0 items-center gap-3">

        <span class="hidden rounded-full border border-sky-900 px-3 py-2 text-xs text-sky-300 sm:block">
          US
        </span>

        <button
          id="menu-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-expanded="false"
          aria-controls="mobile-menu"
          class="rounded-lg border border-sky-800 px-3 py-2 text-xl text-sky-300 transition hover:border-sky-400 hover:bg-sky-950 lg:hidden"
        >
          ☰
        </button>

      </div>
    </div>


    <nav
      id="mobile-menu"
      class="hidden border-t border-sky-900/70 bg-[#030b16] px-5 py-3 lg:hidden"
    >
      <div class="flex flex-col gap-1 text-sm text-slate-300">

        <a href="/index.html#inicio" class="rounded-md px-3 py-3 transition hover:bg-sky-950 hover:text-sky-300">
          Home
        </a>

        <a href="/index.html#my-projects" class="rounded-md px-3 py-3 transition hover:bg-sky-950 hover:text-sky-300">
          Academic Journey
        </a>

        <a href="/index.html#sobre-mi" class="rounded-md px-3 py-3 transition hover:bg-sky-950 hover:text-sky-300">
          About me
        </a>

        <a href="/index.html#habilidades" class="rounded-md px-3 py-3 transition hover:bg-sky-950 hover:text-sky-300">
          Skills
        </a>

        <a href="/index.html#certificaciones" class="rounded-md px-3 py-3 transition hover:bg-sky-950 hover:text-sky-300">
          Certifications
        </a>

        <a href="/index.html#certificados" class="rounded-md px-3 py-3 transition hover:bg-sky-950 hover:text-sky-300">
          Certificates
        </a>

        <a href="/index.html#contacto" class="rounded-md px-3 py-3 transition hover:bg-sky-950 hover:text-sky-300">
          Contact
        </a>

      </div>
    </nav>

  </header>
`;

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  menuToggle.textContent = isOpen ? "☰" : "✕";

  mobileMenu.classList.toggle("hidden", isOpen);
});


mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});


const desktopLinks = document.querySelectorAll("#desktop-menu .nav-link");

function setActiveLink() {
  const currentHash = window.location.hash || "#inicio";

  desktopLinks.forEach((link) => {
    const linkHash = new URL(link.href).hash;
    const isActive = linkHash === currentHash;

    link.style.borderBottom = isActive
      ? "2px solid #38bdf8"
      : "2px solid transparent";

    link.style.color = isActive ? "#38bdf8" : "";
    link.setAttribute("aria-current", isActive ? "location" : "false");
  });
}

desktopLinks.forEach((link) => {
  link.style.display = "inline-block";
  link.style.textDecoration = "none";
  link.style.borderBottom = "2px solid transparent";
  link.style.paddingBottom = "8px";

  link.addEventListener("click", () => {
    const targetHash = new URL(link.href).hash;

    if (window.location.hash === targetHash) {
      setActiveLink();
    }
  });
});

setActiveLink();
window.addEventListener("hashchange", setActiveLink);
