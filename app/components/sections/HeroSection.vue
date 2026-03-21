<template>
  <section id="top" class="hero-shell relative isolate overflow-hidden min-h-screen flex items-center pt-24 pb-12 lg:pt-32 lg:pb-32">
    <!-- Immersive Background Gradients -->
    <div class="pointer-events-none absolute inset-0" :class="theme === 'dark' ? 'hero-backdrop-dark' : 'hero-backdrop-light'"></div>
    <div class="hero-glow-left pointer-events-none absolute -left-48 top-10 h-[50rem] w-[50rem] rounded-full blur-[120px] opacity-30 md:opacity-50"></div>
    <div class="hero-glow-right pointer-events-none absolute -right-20 top-40 h-[40rem] w-[40rem] rounded-full blur-[100px] opacity-20 md:opacity-40"></div>

    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.15]">
      <!-- Floating Plus Signs -->
      <span class="absolute top-[20%] left-[10%] text-brand-a/2 text-4xl font-light">+</span>
      <span class="absolute top-[60%] left-[5%] text-brand-b/2 text-6xl font-light rotate-12">+</span>
      <span class="absolute top-[30%] right-[15%] text-brand-a/2 text-5xl font-light -rotate-45">+</span>
      
      <!-- Abstract Circle Outlines -->
      <div class="absolute -left-20 top-[40%] h-96 w-96 rounded-full border border-brand-a/2"></div>
      <div class="absolute -right-20 top-[10%] h-[30rem] w-[30rem] rounded-full border border-brand-b/2"></div>
      
      <!-- Floating Dots Pattern -->
      <div class="absolute top-[15%] right-[25%] opacity-[0.02]">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="10" cy="10" r="2" fill="currentColor" class="text-brand-a" />
          <circle cx="30" cy="10" r="2" fill="currentColor" class="text-brand-a" />
          <circle cx="50" cy="10" r="2" fill="currentColor" class="text-brand-a" />
          <circle cx="10" cy="30" r="2" fill="currentColor" class="text-brand-a" />
          <circle cx="10" cy="50" r="4" fill="currentColor" class="text-brand-b" />
        </svg>
      </div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        
        <!-- Left Column: Content -->
        <div class="hero-enter relative z-20">
          <p class="text-soft mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest md:mb-6">
            Hire Your Next 
            <span class="text-[color:var(--brand-a)] text-2xl leading-none">•</span>
          </p>

          <h1 class="text-main mb-6 font-black leading-[0.85] tracking-tighter" style="font-size: clamp(3.5rem, 11vw, 10rem);">
            <span class="block whitespace-nowrap">Designer</span>
            <span class="block whitespace-nowrap text-[color:var(--brand-a)]">& Coder</span>
          </h1>

          <p class="text-soft mb-10 max-w-lg text-lg font-medium leading-[1.3] sm:text-2xl">
            Scaling startups with design-driven execution. Currently leading design at <span class="text-main font-semibold border-b-2 border-[color:var(--brand-a)]/30">AppsCode</span>.
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

        <!-- Right Column: Portrait (No Animation) -->
        <div class="hero-enter-delay relative z-10 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-lg">
            <img 
              src="/img/mohin_cutout.png" 
              alt="Mohin Uddin" 
              class="h-full w-full max-h-[55vh] object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(var(--brand-rgb),0.15)] transition duration-700 ease-out group-hover:scale-105"
              style="mask-image: linear-gradient(to bottom, black 45%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 45%, transparent 100%);"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Marquee -->
    <div class="absolute bottom-8 left-0 w-full overflow-hidden" style="z-index: 5;">
      <div class="flex whitespace-nowrap">
        <div class="animate-marquee flex gap-12 items-center pr-12">
          <h2 class="text-transparent font-black uppercase tracking-tighter mix-blend-overlay" style="font-size: clamp(5rem, 12vw, 10rem); -webkit-text-stroke: 1.5px var(--text-muted); opacity: 0.3;">
            <span class="text-[color:var(--brand-a)]" style="-webkit-text-stroke: 0; opacity: 1;">Mohin</span> 
            — 8-year UX veteran
          </h2>
          <h2 class="text-transparent font-black uppercase tracking-tighter mix-blend-overlay" style="font-size: clamp(5rem, 12vw, 10rem); -webkit-text-stroke: 1.5px var(--text-muted); opacity: 0.3;">
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
  animation: liquidFlow 20s infinite alternate-reverse ease-in-out;
}

.hero-glow-right {
  background: var(--brand-b);
  animation: liquidFlow 25s infinite alternate ease-in-out;
}

@keyframes liquidFlow {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    border-radius: 50%;
  }
  33% {
    transform: translate(15%, -10%) scale(1.1) rotate(45deg);
    border-radius: 40% 60% 50% 50%;
  }
  66% {
    transform: translate(-10%, 15%) scale(0.9) rotate(90deg);
    border-radius: 60% 40% 60% 40%;
  }
  100% {
    transform: translate(5%, 5%) scale(1.05) rotate(135deg);
    border-radius: 50%;
  }
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
