
document.getElementById("hero-container").innerHTML = `
  <section
    id="inicio"
    class="relative isolate flex min-h-[calc(100svh-76px)] items-center
           overflow-hidden bg-[#050D18] px-5 py-16 text-white
           sm:px-8 sm:py-20 lg:px-16 xl:px-24"
  >

    
    <div
      class="absolute inset-0 -z-20 bg-[url('/imagenes/puerto1.jpg')]
             bg-cover bg-center"
      aria-hidden="true"
    ></div>

    
    <div
      class="absolute inset-0 -z-10
             bg-gradient-to-r from-[#050D18]
             via-[#050D18]/90 to-[#050D18]/55"
      aria-hidden="true"
    ></div>

    
    <div
      class="absolute -right-32 top-1/4 -z-10 h-64 w-64
             rounded-full bg-sky-500/10 blur-3xl
             sm:h-96 sm:w-96 lg:-right-20"
      aria-hidden="true"
    ></div>

    
    <div
      class="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]
             [background-image:linear-gradient(rgba(56,189,248,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.35)_1px,transparent_1px)]
             [background-size:45px_45px]"
      aria-hidden="true"
    ></div>

    
    <div class="mx-auto w-full max-w-[1400px]">
      <div
        class="grid items-center gap-12
               lg:grid-cols-[1.15fr_0.85fr] lg:gap-10
               xl:gap-16"
      >

        
        <div class="min-w-0">

          <p
            class="mb-6 flex items-center gap-3
                   text-[10px] font-semibold tracking-[0.2em]
                   text-sky-300 sm:text-xs sm:tracking-[0.28em]"
          >
            <span class="h-px w-8 shrink-0 bg-sky-400 sm:w-12"></span>
            LOGISTICS NETWORK / NODE_01
          </p>

          
          <h1
            class="intro-name text-4xl font-bold leading-[1.08]
                   tracking-tight min-[400px]:text-5xl
                   sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span class="intro-name-line block">KEYLI</span>
            <span
              class="intro-name-line intro-name-accent mt-1 block"
            >
              RAMÍREZ<span class="text-white">
          </h1>

          <h2
            class="mt-6 max-w-2xl text-lg font-medium
                   leading-snug text-slate-200
                   sm:mt-8 sm:text-2xl lg:text-3xl"
          >
            Future Logistics &amp; Operations Engineer
          </h2>

          <p
            class="mt-5 max-w-xl text-sm leading-7
                   text-slate-300 sm:text-base sm:leading-8
                   lg:text-lg"
          >
            Connecting learning, projects, and goals
            in one direction.
          </p>

          
          <div
            class="mt-8 flex w-full flex-col gap-3
                   sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap
                   sm:items-center sm:gap-4"
          >

            <a
              href="#trayectoria"
              class="inline-flex min-h-12 w-full items-center
                     justify-center gap-3 rounded-md
                     border border-sky-400 bg-sky-400
                     px-5 py-3 text-sm font-bold
                     text-[#050D18] transition duration-300
                     hover:-translate-y-1 hover:bg-sky-300
                     hover:shadow-[0_0_25px_#38bdf855]
                     focus-visible:outline-2
                     focus-visible:outline-offset-4
                     focus-visible:outline-sky-400 sm:w-auto sm:px-6"
            >
              Explore My Journey
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#sobre-mi"
              class="inline-flex min-h-12 w-full items-center
                     justify-center gap-3 rounded-md
                     border border-slate-600 bg-slate-950/30
                     px-5 py-3 text-sm font-semibold
                     text-white backdrop-blur-sm
                     transition duration-300
                     hover:-translate-y-1 hover:border-sky-400
                     hover:bg-sky-950/60
                     focus-visible:outline-2
                     focus-visible:outline-offset-4
                     focus-visible:outline-sky-400 sm:w-auto sm:px-6"
            >
              Discover More
              <span aria-hidden="true">↗</span>
            </a>

          </div>

          
          <div
            class="mt-10 flex flex-col gap-2 border-l-2
                   border-sky-400/60 pl-4
                   sm:mt-14 sm:flex-row sm:flex-wrap
                   sm:items-center sm:gap-3"
          >
            <p
              class="text-[10px] font-semibold tracking-[0.18em]
                     text-slate-300 sm:text-xs sm:tracking-[0.22em]"
            >
              LEARNING IN PROGRESS
            </p>

            <span
              class="hidden h-1 w-1 rounded-full bg-sky-400 sm:block"
              aria-hidden="true"
            ></span>

            <p
              class="text-[10px] font-semibold tracking-[0.18em]
                     text-sky-300 sm:text-xs sm:tracking-[0.22em]"
            >
              DESTINATION: FUTURE
            </p>
          </div>
        </div>

        
        <div
          class="relative mx-auto w-full max-w-[340px]
                 sm:max-w-[400px] lg:max-w-[440px]"
        >

          
          <div
            class="absolute -inset-3 rounded-2xl
                   border border-sky-400/20
                   shadow-[0_0_45px_rgba(56,189,248,0.10)]"
            aria-hidden="true"
          ></div>

          <div
            class="relative aspect-[4/5] overflow-hidden
                   rounded-xl border border-sky-400/40
                   bg-gradient-to-b from-sky-950/60
                   to-[#050D18]/90"
          >

          <div class="relative mx-auto w-full max-w-[280px]
            sm:max-w-[320px]
            lg:max-w-[360px]
            aspect-[3/4] shrink-0 overflow-hidden rounded-2xl">

            <img
              src="/imagenes/keyli.png"
              alt="Portrait of Keyli Ramírez"
              class="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"/>

          </div>
            
            <div
              class="pointer-events-none absolute inset-0
                     bg-gradient-to-t from-[#050D18]/80
                     via-transparent to-sky-400/10"
              aria-hidden="true"
            ></div>

            
            <div
              class="pointer-events-none absolute left-3 top-3
                     h-7 w-7 border-l-2 border-t-2 border-sky-400"
              aria-hidden="true"
            ></div>

            <div
              class="pointer-events-none absolute bottom-3 right-3
                     h-7 w-7 border-b-2 border-r-2 border-sky-400"
              aria-hidden="true"
            ></div>

            <!-- PHOTO LABEL -->
            <div class="absolute bottom-5 left-5 right-5">
              <p class="text-[10px] font-semibold tracking-[0.25em]
                        text-sky-300">
                PROFILE / 001
              </p>
              <p class="mt-2 text-sm font-semibold tracking-wider
                        text-white sm:text-base">
                FUTURE IN MOTION
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    
    <div
      class="absolute bottom-0 left-0 h-px w-full
             bg-gradient-to-r from-transparent
             via-sky-400/60 to-transparent"
      aria-hidden="true"
    ></div>

  </section>
`;
