<template>
  <section id="top" class="hero-shell relative isolate min-h-screen overflow-hidden">
    <div class="pointer-events-none absolute inset-0" :class="theme === 'dark' ? 'hero-backdrop-dark' : 'hero-backdrop-light'"></div>
    <div class="hero-glow-left pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full blur-3xl"></div>
    <div class="hero-glow-right pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full blur-3xl"></div>

    <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-24 sm:px-6 md:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
      <div class="hero-enter">
        <div class="mb-7 inline-flex items-center gap-3 rounded-full border border-[color:var(--brand-a)]/30 bg-[color:var(--brand-a)]/10 px-4 py-2">
          <span class="relative flex h-2.5 w-2.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300"></span>
          </span>
          <span class="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-a)]">Available for selective consulting in 2026</span>
        </div>

        <h1 class="text-main max-w-4xl text-balance text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
          Building product clarity through
          <span class="brand-text-gradient">
            design systems + front-end craft
          </span>
        </h1>

        <p class="text-soft mt-7 max-w-2xl text-base leading-relaxed sm:text-lg">
          I am Md Mohin Uddin, Head of Design at AppsCode. I partner with product teams to ship thoughtful UX, scalable design systems, and performant interfaces from concept to production.
        </p>

        <div class="mt-9 flex flex-wrap items-center gap-4">
          <SharedButton tag="a" href="mailto:hello.mohin4@gmail.com" size="lg">Book a call</SharedButton>
          <SharedButton tag="a" href="https://www.linkedin.com/in/mohin7/" target="_blank" rel="noreferrer" variant="outline" size="lg">View LinkedIn</SharedButton>
          <a
            href="#work"
            class="text-soft hover:text-main inline-flex items-center gap-2 text-sm font-medium transition"
          >
            See selected work
            <span class="text-base">-></span>
          </a>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-3">
          <div v-for="stat in stats" :key="stat.label" class="border-subtle bg-panel rounded-2xl border p-5 backdrop-blur-sm">
            <p class="text-main text-3xl font-semibold">{{ stat.value }}</p>
            <p class="text-muted mt-1 text-sm">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <div class="hero-enter-delay lg:pl-4">
        <div class="border-subtle bg-panel rounded-[1.75rem] border p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
          <div class="border-subtle bg-panel-strong rounded-2xl border p-6 sm:p-7">
            <div class="mb-7 flex items-start justify-between gap-4">
              <div>
                <p class="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--brand-a)]">Profile Snapshot</p>
                <h2 class="text-main mt-2 text-xl font-semibold">Design Leadership + Execution</h2>
              </div>
              <div class="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">Open Source Native</div>
            </div>

            <div class="space-y-4">
              <div class="border-subtle bg-soft rounded-xl border p-4">
                <p class="text-muted text-xs uppercase tracking-[0.16em]">Current Role</p>
                <p class="text-main mt-2 text-lg font-medium">Head of Design, AppsCode</p>
              </div>

              <div class="grid gap-3 sm:grid-cols-2">
                <div class="border-subtle bg-soft rounded-xl border p-4">
                  <p class="text-muted text-xs uppercase tracking-[0.16em]">Location</p>
                  <p class="text-soft mt-1 text-sm font-medium">Dhaka, Bangladesh</p>
                </div>
                <div class="border-subtle bg-soft rounded-xl border p-4">
                  <p class="text-muted text-xs uppercase tracking-[0.16em]">Primary Stack</p>
                  <p class="text-soft mt-1 text-sm font-medium">Nuxt, Vue, Tailwind, Figma</p>
                </div>
              </div>

              <div class="border-subtle bg-soft rounded-xl border p-4">
                <p class="text-muted text-xs uppercase tracking-[0.16em]">Core Tools</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <span v-for="tool in tools" :key="tool" class="border-subtle text-soft rounded-full border bg-panel px-3 py-1 text-xs">{{ tool }}</span>
                </div>
              </div>

              <a href="mailto:hello.mohin4@gmail.com" class="group flex items-center justify-between rounded-xl border border-[color:var(--brand-a)]/40 bg-[color:var(--brand-a)]/10 p-4 text-sm text-[color:var(--brand-a)] transition hover:bg-[color:var(--brand-a)]/15">
                <span>hello.mohin4@gmail.com</span>
                <span class="transition group-hover:translate-x-1">-></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { theme } = useTheme()

const stats = [
  { value: '79+', label: 'Public repositories' },
  { value: '714', label: 'Contributions last year' },
  { value: '85+', label: 'GitHub followers' }
]

const tools = ['Figma', 'Nuxt', 'Vue', 'Tailwind CSS', 'Design Systems']
</script>

<style scoped>
.hero-backdrop-dark {
  background: radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.16), transparent 35%),
    radial-gradient(circle at 80% 0%, rgba(99, 102, 241, 0.18), transparent 38%),
    linear-gradient(180deg, #0b0d12 0%, #07080b 80%);
}

.hero-backdrop-light {
  background: radial-gradient(circle at 20% 20%, rgba(2, 132, 199, 0.14), transparent 35%),
    radial-gradient(circle at 80% 0%, rgba(79, 70, 229, 0.1), transparent 38%),
    linear-gradient(180deg, #fdfefe 0%, #f2f5f9 90%);
}

.hero-glow-left {
  background: var(--brand-a);
  opacity: 0.12;
}

.hero-glow-right {
  background: var(--brand-b);
  opacity: 0.12;
}

.hero-enter {
  animation: heroRise 700ms ease-out both;
}

.hero-enter-delay {
  animation: heroRise 900ms 120ms ease-out both;
}

@keyframes heroRise {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
