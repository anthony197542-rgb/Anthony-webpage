import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-md">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <a class="font-display text-2xl font-medium text-white" href="#top" aria-label="Anthony, home">
        Anthony<span class="text-amber-300">.</span>
      </a>
      <nav class="hidden items-center gap-10 text-sm text-zinc-300 sm:flex" aria-label="Primary navigation">
        <a class="transition hover:text-white" href="#work">Work</a>
        <a class="transition hover:text-white" href="#about">About</a>
        <a class="transition hover:text-white" href="mailto:hello@anthony.dev">Contact</a>
      </nav>
      <a class="hidden items-center gap-2 text-xs text-zinc-400 sm:flex" href="mailto:hello@anthony.dev">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
        </span>
        Available for select work
      </a>
    </div>
  </header>

  <main id="top" class="mx-auto max-w-7xl px-6 lg:px-8">
    <section class="grid items-center gap-16 pt-40 pb-24 lg:grid-cols-2 lg:pt-48" aria-labelledby="hero-title">
      <div class="animate-fade-up">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Independent engineer / 2026</p>
        <h1 id="hero-title" class="mt-6 font-display text-6xl font-medium leading-[0.92] text-white sm:text-7xl lg:text-8xl">
          Building systems<br />that hold up.
        </h1>
        <p class="mt-8 max-w-sm text-lg leading-relaxed text-zinc-400">
          I partner with ambitious teams to turn complicated ideas into clear, capable digital products.
        </p>
        <a class="group mt-10 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-amber-300 hover:text-amber-300" href="#work">
          View selected work
          <span aria-hidden="true" class="transition-transform group-hover:translate-y-1">↓</span>
        </a>
      </div>

      <div class="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 lg:aspect-square" aria-label="Abstract architectural structure">
        <p class="absolute left-6 top-6 z-10 text-xs font-semibold uppercase tracking-widest text-amber-300">01 / Field notes</p>
        <div class="animate-float absolute -left-6 bottom-0 h-[70%] w-[45%] skew-y-[-12deg] rounded-2xl bg-amber-300/90"></div>
        <div class="animate-float-delayed absolute left-[38%] bottom-0 h-[85%] w-[30%] skew-y-[10deg] rounded-2xl bg-zinc-200/90"></div>
        <div class="absolute right-0 bottom-0 h-[55%] w-[26%] skew-y-[-14deg] rounded-2xl bg-orange-500/90"></div>
        <p class="absolute bottom-6 left-6 z-10 max-w-[70%] text-lg leading-tight text-white">
          A practical approach<br />to complex constraints.
        </p>
      </div>
    </section>

    <section class="border-t border-white/10 py-28" id="about">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">How I work</p>
      <p class="mt-6 max-w-4xl font-display text-3xl font-light leading-tight text-white sm:text-5xl">
        The best engineering feels inevitable: precise in the details, calm under pressure, and straightforward for the people relying on it.
      </p>
      <div class="mt-16 grid gap-10 sm:grid-cols-3">
        <article class="border-t border-white/15 pt-6">
          <span class="text-xs font-semibold text-amber-300">01</span>
          <h2 class="mt-6 font-display text-xl font-medium text-white">Think in systems</h2>
          <p class="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">Every decision earns its place in the larger picture.</p>
        </article>
        <article class="border-t border-white/15 pt-6">
          <span class="text-xs font-semibold text-amber-300">02</span>
          <h2 class="mt-6 font-display text-xl font-medium text-white">Make it legible</h2>
          <p class="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">Good products explain themselves through use.</p>
        </article>
        <article class="border-t border-white/15 pt-6">
          <span class="text-xs font-semibold text-amber-300">03</span>
          <h2 class="mt-6 font-display text-xl font-medium text-white">Ship with care</h2>
          <p class="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">Quality is a practice, not a final polish.</p>
        </article>
      </div>
    </section>

    <section class="border-t border-white/10 py-28" id="work" aria-labelledby="work-title">
      <div class="flex items-baseline justify-between text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        <p>Selected work</p>
        <p>2023 &ndash; 2026</p>
      </div>
      <h2 id="work-title" class="mt-6 mb-14 font-display text-4xl font-medium text-white sm:text-5xl">Selected projects</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <a class="group block overflow-hidden rounded-2xl border border-white/10 transition hover:border-white/25" href="mailto:hello@anthony.dev?subject=Northstar%20project">
          <div class="relative h-80 overflow-hidden bg-amber-300">
            <span class="absolute -left-4 top-10 font-display text-[220px] leading-none text-emerald-950/90 transition-transform duration-500 group-hover:scale-105">N</span>
            <div class="absolute -right-20 top-16 h-40 w-[22.5rem] rotate-[-30deg] rounded-full border border-emerald-950/40"></div>
            <div class="absolute -right-28 top-32 h-48 w-[27rem] rotate-[-30deg] rounded-full border border-emerald-950/40"></div>
          </div>
          <div class="flex items-center justify-between gap-3 border-t border-white/10 px-6 py-5 text-sm">
            <span class="font-medium text-white">Northstar</span>
            <span class="text-zinc-500">Product platform / 2026</span>
            <b class="inline-flex items-center gap-1 font-medium text-amber-300">Explore <i aria-hidden="true" class="not-italic transition-transform group-hover:translate-x-1">↗</i></b>
          </div>
        </a>
        <a class="group block overflow-hidden rounded-2xl border border-white/10 transition hover:border-white/25" href="mailto:hello@anthony.dev?subject=Civic%20Signal%20project">
          <div class="relative h-80 overflow-hidden bg-zinc-200">
            <div class="absolute inset-0 [background-image:linear-gradient(rgba(9,9,11,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.12)_1px,transparent_1px)] [background-size:44px_44px]"></div>
            <span class="absolute bottom-7 left-6 font-display text-7xl leading-none text-zinc-900 transition-transform duration-500 group-hover:translate-x-1">SIGNAL</span>
          </div>
          <div class="flex items-center justify-between gap-3 border-t border-white/10 px-6 py-5 text-sm">
            <span class="font-medium text-white">Civic Signal</span>
            <span class="text-zinc-500">Data infrastructure / 2025</span>
            <b class="inline-flex items-center gap-1 font-medium text-amber-300">Explore <i aria-hidden="true" class="not-italic transition-transform group-hover:translate-x-1">↗</i></b>
          </div>
        </a>
      </div>
    </section>

    <section class="my-12 rounded-3xl bg-gradient-to-br from-amber-300 to-orange-400 px-8 py-16 sm:px-16 sm:py-24">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-950/70">Have a worthy problem?</p>
      <h2 class="mt-6 font-display text-5xl font-medium leading-[0.9] text-zinc-950 sm:text-7xl">
        Let&rsquo;s make<br />something useful.
      </h2>
      <a class="mt-10 inline-flex items-center gap-4 border-b border-zinc-950 pb-2 text-base font-semibold text-zinc-950 transition hover:gap-6" href="mailto:hello@anthony.dev">
        hello@anthony.dev <span aria-hidden="true">↗</span>
      </a>
    </section>
  </main>

  <footer class="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
    <span>© 2026 Anthony</span>
    <span>Designed with intent</span>
    <a class="text-zinc-300 transition hover:text-white" href="#top">Back to top ↑</a>
  </footer>
`
