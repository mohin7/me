<template>
  <section id="top" class="hero-shell relative isolate overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
    <!-- Immersive Background Gradients -->
    <div class="pointer-events-none absolute inset-0" :class="theme === 'dark' ? 'hero-backdrop-dark' : 'hero-backdrop-light'"></div>
    <div class="hero-glow-left pointer-events-none absolute -left-48 top-10 h-[50rem] w-[50rem] rounded-full blur-[120px] opacity-30 md:opacity-50"></div>
    <div class="hero-glow-right pointer-events-none absolute -right-20 top-40 h-[40rem] w-[40rem] rounded-full blur-[100px] opacity-20 md:opacity-40"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        
        <!-- Left Column: Content -->
        <div class="hero-enter relative z-20">
          <p class="text-soft mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest md:mb-6">
            Hi, I'm Mohin 
            <span class="text-[color:var(--brand-a)] text-2xl leading-none">•</span>
          </p>

          <h1 class="text-main mb-6 text-balance font-extrabold leading-[0.9] tracking-tighter" style="font-size: clamp(4rem, 9vw, 8rem);">
            Design<br>
            Partner
          </h1>

          <p class="text-soft mb-10 max-w-lg text-lg font-medium leading-[1.3] sm:text-2xl">
            Scaling startups with design-driven execution. Currently leading design at <span class="text-main italic font-semibold border-b-2 border-[color:var(--brand-a)]/30">AppsCode</span>.
          </p>

          <div class="flex items-center gap-4">
            <SharedButton tag="a" href="#contact" size="lg" class="!rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-brand-a/20">
              Book a 15-min call 
              <span class="ml-2 font-normal text-xl leading-none">↗</span>
            </SharedButton>
            <a 
              href="https://linkedin.com/in/mohin7/" 
              target="_blank" 
              rel="noreferrer" 
              class="border-subtle bg-panel text-main hover:text-[color:var(--brand-a)] flex h-14 w-14 items-center justify-center rounded-full border shadow-sm transition-all hover:scale-105"
            >
            <Icon name="lucide:user" class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Right Column: Portrait -->
        <div class="hero-enter-delay relative z-10 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-subtle bg-panel/50 backdrop-blur-sm shadow-2xl shadow-black/30 aspect-[4/5] group">
            <img 
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=800" 
              alt="Mohin Uddin" 
              class="h-full w-full object-cover object-center mix-blend-luminosity opacity-80 transition duration-700 ease-out group-hover:mix-blend-normal group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-page)] via-[color:var(--bg-page)]/20 to-transparent opacity-90"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Marquee -->
    <div class="mt-24 w-full overflow-hidden border-y border-subtle bg-panel/30 py-4 backdrop-blur-md md:mt-32 md:py-8 lg:absolute lg:bottom-10 lg:mt-0 lg:border-none lg:bg-transparent lg:backdrop-blur-none" style="z-index: 5;">
      <div class="flex whitespace-nowrap">
        <div class="animate-marquee flex gap-12 items-center pr-12">
          <h2 class="text-transparent font-black uppercase italic tracking-tighter mix-blend-overlay" style="font-size: clamp(5rem, 12vw, 10rem); -webkit-text-stroke: 1.5px var(--text-muted); opacity: 0.3;">
            <span class="text-[color:var(--brand-a)]" style="-webkit-text-stroke: 0; opacity: 1;">Mohin</span> 
            — 8-year UX veteran
          </h2>
          <h2 class="text-transparent font-black uppercase italic tracking-tighter mix-blend-overlay" style="font-size: clamp(5rem, 12vw, 10rem); -webkit-text-stroke: 1.5px var(--text-muted); opacity: 0.3;">
            <span class="text-[color:var(--brand-a)]" style="-webkit-text-stroke: 0; opacity: 1;">Mohin</span> 
            — 8-year UX veteran
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#imports'

const { theme } = useTheme()
</script>

<style scoped>
.hero-backdrop-dark {
  background: radial-gradient(circle at 10% 20%, rgba(var(--brand-rgb), 0.15), transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(var(--brand-rgb), 0.1), transparent 40%),
    linear-gradient(180deg, var(--bg-page), #000 100%);
}

.hero-backdrop-light {
  background: radial-gradient(circle at 10% 20%, rgba(var(--brand-rgb), 0.1), transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(var(--brand-rgb), 0.05), transparent 40%),
    linear-gradient(180deg, #fdfefe 0%, #f2f5f9 100%);
}

.hero-glow-left {
  background: var(--brand-a);
}

.hero-glow-right {
  background: var(--brand-b);
}

.hero-enter {
  animation: heroRise 800ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-enter-delay {
  animation: heroRise 800ms cubic-bezier(0.16, 1, 0.3, 1) 150ms both;
}

@keyframes heroRise {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
