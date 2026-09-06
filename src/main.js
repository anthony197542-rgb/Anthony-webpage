import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-md">
    <div class="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
      <a class="font-display text-2xl font-medium text-white" href="#top" aria-label="Anthony, home">
        Anthony<span class="text-amber-300">.</span>
      </a>
      <nav class="flex items-center gap-8 text-sm text-zinc-300" aria-label="Primary navigation">
        <a class="transition hover:text-white" href="#work">Work</a>
        <a class="transition hover:text-white" href="#about">About</a>
        <a class="transition hover:text-white" href="https://mail.google.com/mail/?view=cm&fs=1&to=anthony197542@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
      </nav>
    </div>
  </header>

  <main id="top" class="mx-auto max-w-5xl px-6">
    <section class="pt-44 pb-24" aria-labelledby="hero-title">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Independent engineer / 2026</p>
      <h1 id="hero-title" class="mt-6 max-w-2xl font-display text-6xl font-medium leading-[0.95] text-white sm:text-7xl">
        Building systems that hold up.
      </h1>
      <p class="mt-8 max-w-md text-lg leading-relaxed text-zinc-400">
        I partner with ambitious teams to turn complicated ideas into clear, capable digital products.
      </p>
      <a class="group mt-10 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-amber-300 hover:text-amber-300" href="#work">
        View selected work
        <span aria-hidden="true" class="transition-transform group-hover:translate-y-1">↓</span>
      </a>
    </section>

    <section class="border-t border-white/10 py-24" id="work" aria-labelledby="work-title">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Selected work</p>
      <h2 id="work-title" class="mt-6 mb-12 font-display text-4xl font-medium text-white">Selected projects</h2>
      <div class="divide-y divide-white/10 border-t border-b border-white/10">
        <a class="group flex items-center justify-between gap-6 py-6 transition hover:bg-white/5" href="https://hiddenpathwaytherapy.vercel.app" target="_blank" rel="noopener noreferrer">
          <div>
            <p class="text-lg font-medium text-white">Hidden Pathway Therapy</p>
            <p class="mt-1 text-sm text-zinc-500">Therapy website / 2026</p>
          </div>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-amber-300">
            Explore <i aria-hidden="true" class="not-italic transition-transform group-hover:translate-x-1">↗</i>
          </span>
        </a>
        <a class="group flex items-center justify-between gap-6 py-6 transition hover:bg-white/5" href="https://lead-dashboard-brown-seven.vercel.app" target="_blank" rel="noopener noreferrer">
          <div>
            <p class="text-lg font-medium text-white">Knight Electric</p>
            <p class="mt-1 text-sm text-zinc-500">Electrician website / 2025</p>
          </div>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-amber-300">
            Explore <i aria-hidden="true" class="not-italic transition-transform group-hover:translate-x-1">↗</i>
          </span>
        </a>
      </div>
    </section>

    <section class="border-t border-white/10 py-24" id="about">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">About</p>
      <p class="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">
        After a decade as a professional plumber, I traded copper and wrenches for clean code and modern web design. The tools changed, but the core principle stayed the exact same: build solid infrastructure that doesn&rsquo;t leak, breaks down, or let the customer down.
      </p>
      <div class="mt-14 grid gap-10 sm:grid-cols-3">
        <article class="border-t border-white/15 pt-6">
          <span class="text-xs font-semibold text-amber-300">01</span>
          <h2 class="mt-4 font-display text-xl font-medium text-white">Built on experience</h2>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">A decade in the trades taught me what customers actually value: reliability.</p>
        </article>
        <article class="border-t border-white/15 pt-6">
          <span class="text-xs font-semibold text-amber-300">02</span>
          <h2 class="mt-4 font-display text-xl font-medium text-white">No shortcuts</h2>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">Every site is built solid, tested, and made to last.</p>
        </article>
        <article class="border-t border-white/15 pt-6">
          <span class="text-xs font-semibold text-amber-300">03</span>
          <h2 class="mt-4 font-display text-xl font-medium text-white">Straight talk</h2>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">Clear communication and honest pricing, no jargon.</p>
        </article>
      </div>
    </section>

    <section class="border-t border-white/10 py-28">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Have a worthy problem?</p>
      <h2 class="mt-6 font-display text-5xl font-medium leading-[0.95] text-white sm:text-6xl">
        Let&rsquo;s make something useful.
      </h2>
      <a class="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-300 px-8 py-3 text-base font-semibold text-zinc-950 shadow-lg shadow-amber-300/20 transition duration-150 hover:bg-amber-200 hover:shadow-amber-300/30 active:scale-95 active:bg-amber-400 active:shadow-none" href="https://mail.google.com/mail/?view=cm&fs=1&to=anthony197542@gmail.com&su=Website%20inquiry" target="_blank" rel="noopener noreferrer">
        Get your webpage built <span aria-hidden="true">↗</span>
      </a>
    </section>
  </main>

  <footer class="mx-auto flex max-w-5xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
    <span>© 2026 Anthony</span>
    <span>Designed with intent</span>
    <a class="text-zinc-300 transition hover:text-white" href="#top">Back to top ↑</a>
  </footer>
`
