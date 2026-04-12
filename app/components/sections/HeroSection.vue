<template>
  <section id="top" class="relative isolate overflow-hidden min-h-screen flex items-center py-16 md:py-20">
    <!-- Immersive Background Gradients -->
    <div class="pointer-events-none absolute inset-0" :class="theme === 'dark' ? 'hero-backdrop-dark' : 'hero-backdrop-light'"></div>
    <div class="hero-glow-left pointer-events-none absolute -left-48 top-10 h-[50rem] w-[50rem] rounded-full blur-[120px] opacity-30 md:opacity-50"></div>
    <div class="hero-glow-right pointer-events-none absolute -right-20 top-40 h-[40rem] w-[40rem] rounded-full blur-[100px] opacity-20 md:opacity-40"></div>

    <!-- Clean Professional Space -->

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        
        <!-- Left Column: Content -->
        <div class="animate-[heroRise_800ms_cubic-bezier(0.16,1,0.3,1)_both] relative z-20">
          <p class="handwriting text-brand-a mb-3 flex items-center gap-3 text-2xl md:text-3xl md:mb-4">
            Hire Your Next 
            <span class="text-main/20 text-sm leading-none font-sans font-black tracking-widest">•</span>
          </p>

          <h1 class="mb-4 font-black leading-[1] tracking-tight relative" style="font-size: clamp(3rem, 7vw, 5.5rem);">
            <span class="block metallic-text py-0.5">Designer</span>
            <span class="block brand-text-gradient py-0.5">& Coder</span>
            
            <!-- Handwritten Note -->
            <div class="absolute -right-4 -top-8 md:-right-16 md:-top-10 opacity-0 animate-[floatSlow_5s_ease-in-out_infinite]" style="animation: heroRise 800ms both 1.2s, floatSlow 5s ease-in-out infinite 2s;">
               <p class="handwriting text-brand-a text-xl md:text-2xl -rotate-12 whitespace-nowrap">
                 Design-to-Production <br> <span class="text-[0.65rem] tracking-widest uppercase font-black opacity-30 font-sans block mt-1">Efficiency focus</span>
               </p>
            </div>
          </h1>

          <p class="text-soft mb-4 max-w-lg text-lg font-medium leading-[1.3] sm:text-xl">
            I help startups turn complex ideas into intuitive, scalable products—delivering faster launches, happier users, and standout results.
          </p>

          <!-- Sleek Horizontal Metrics -->
          <div class="flex flex-wrap items-center gap-6 sm:gap-8 mb-7 mt-2">
            <div class="flex flex-col gap-1">
              <span class="text-3xl font-black text-main tabular-nums leading-none tracking-tight">7+</span>
              <span class="text-[0.65rem] uppercase tracking-widest text-soft font-bold opacity-80">Years Exp</span>
            </div>
            <div class="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden sm:block"></div>
            <div class="flex flex-col gap-1">
              <span class="text-3xl font-black text-main tabular-nums leading-none tracking-tight">20+</span>
              <span class="text-[0.65rem] uppercase tracking-widest text-soft font-bold opacity-80">Products</span>
            </div>
            <div class="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden sm:block"></div>
            <div class="flex flex-col gap-1">
              <span class="flex items-center gap-0.5">
                <span class="text-3xl font-black text-main tabular-nums leading-none tracking-tight">100</span>
                <span class="text-2xl font-black text-brand-a leading-none">%</span>
              </span>
              <span class="text-[0.65rem] uppercase tracking-widest text-soft font-bold opacity-80">Delivery</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <SharedButton tag="a" href="#contact" variant="primary" size="lg" class="shadow-2xl shadow-brand-a/20">
              Book a 15-min call 
              <template #right>
                <span class="text-xl leading-none italic">↗</span>
              </template>
            </SharedButton>
          </div>
        </div>

        <!-- Right Column: Premium Glass Profile Card -->
        <div class="animate-[heroRise_800ms_cubic-bezier(0.16,1,0.3,1)_150ms_both] relative z-10 flex justify-center lg:justify-end">
          <!-- Ambient glow blobs behind card -->
          <div class="pointer-events-none absolute inset-0 z-0">
            <div class="absolute w-[360px] h-[360px] rounded-full blur-[90px] bg-[radial-gradient(circle,var(--brand-a),transparent_70%)] top-[5%] left-[50%] -translate-x-[30%] opacity-[0.45] animate-[blobDrift_18s_ease-in-out_infinite_alternate]"></div>
            <div class="absolute w-[260px] h-[260px] rounded-full blur-[70px] bg-[radial-gradient(circle,var(--brand-b),transparent_70%)] bottom-0 right-[10%] opacity-30 animate-[blobDrift_22s_ease-in-out_infinite_alternate-reverse]"></div>
          </div>

          <!-- Card Wrapper for Floating Elements -->
          <div class="relative w-full max-w-[380px] z-10 mt-12 md:mt-0">
            <!-- Geometric Background Layers -->
            <div class="absolute -inset-10 z-0 pointer-events-none hidden md:block">
              <!-- Animated dashed ring -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border-[0.5px] border-white/10 border-dashed animate-[spin_40s_linear_infinite] opacity-50"></div>
              
              <!-- Offset geometric glass panel -->
              <div class="absolute top-[8%] -left-[4%] w-full h-[90%] rounded-[32px] bg-gradient-to-tr from-brand-a/5 to-brand-b/5 border border-white/5 backdrop-blur-md rotate-[-5deg] opacity-60 shadow-2xl z-0 transition-transform duration-700 group-hover:rotate-[-8deg]"></div>
            </div>

            <!-- Organized Tech Dock (Vertical) -->
            <div class="absolute -left-5 top-16 md:-left-8 md:top-24 hidden sm:flex flex-col gap-4 p-3.5 rounded-[20px] bg-panel border-subtle backdrop-blur-2xl border shadow-2xl animate-[floatSlow_8s_ease-in-out_infinite] z-20">
              <Icon name="logos:figma" class="w-5 h-5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all cursor-pointer drop-shadow-md" />
              <div class="w-full h-px bg-black/5 dark:bg-white/10"></div>
              <Icon name="logos:vue" class="w-5 h-5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all cursor-pointer drop-shadow-md" />
              <div class="w-full h-px bg-black/5 dark:bg-white/10"></div>
              <Icon name="logos:nuxt-icon" class="w-5 h-5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all cursor-pointer drop-shadow-md" />
              <div class="w-full h-px bg-black/5 dark:bg-white/10"></div>
              <Icon name="logos:tailwindcss-icon" class="w-5 h-5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all cursor-pointer drop-shadow-md" />
              <div class="w-full h-px bg-black/5 dark:bg-white/10"></div>
              <Icon name="logos:typescript-icon" class="w-5 h-5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all cursor-pointer drop-shadow-md" />
            </div>

            <!-- Floating Premium Badge (Horizontal Pill) -->
            <div class="absolute -right-4 -top-4 md:-right-8 md:-top-4 hidden sm:flex items-center gap-3 px-5 py-3 rounded-2xl bg-panel border-subtle backdrop-blur-3xl border shadow-2xl animate-[floatSlow_6s_ease-in-out_1s_infinite_reverse] z-20 group/badge hover:border-brand-a/40 transition-colors cursor-default">
               <div class="relative flex items-center justify-center">
                 <Icon name="lucide:hexagon" class="w-6 h-6 text-brand-a/80 animate-[spin_10s_linear_infinite]" />
                 <div class="absolute w-1.5 h-1.5 bg-brand-a rounded-full animate-pulse shadow-[0_0_8px_rgba(var(--brand-rgb),0.8)]"></div>
               </div>
                <div class="flex flex-col">
                  <span class="text-[8px] font-bold text-soft uppercase tracking-[0.2em] leading-none mb-1 opacity-80">Architecture</span>
                  <span class="text-xs font-black leading-none tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#09090b] to-[#52525b] dark:from-white dark:to-white/70 group-hover/badge:from-brand-a group-hover/badge:to-brand-a transition-all duration-300">Scalable UI</span>
                </div>
            </div>

            <!-- Main glass card -->
            <div class="group relative w-full rounded-[28px] bg-panel border-subtle backdrop-blur-[32px] border shadow-2xl transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden hover:-translate-y-[6px] hover:scale-[1.012] hover:shadow-[0_40px_100px_-16px_rgba(0,0,0,0.3)]">
            <!-- Inner highlight rim -->
            <div class="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full z-10 pointer-events-none" aria-hidden="true"></div>

            <!-- Photo section -->
            <div class="relative px-7 pt-9 pb-7 flex flex-col items-center">
              <!-- Availability pill -->
              <div class="inline-flex items-center gap-[7px] px-[12px] py-[4px] pl-[6px] rounded-full bg-green-500/10 border border-green-500/25 backdrop-blur-[8px] mb-5">
                <span class="block w-1.5 h-1.5 rounded-full bg-green-500 drop-shadow-[0_0_0_2px_rgba(34,197,94,0.25)] animate-[pulseGreen_2s_ease-in-out_infinite]"></span>
                <span class="text-[10px] font-semibold tracking-wide text-main/80">Available for projects</span>
              </div>

              <!-- Sleek Architectural Photo Frame -->
              <div class="relative flex items-center justify-center mb-6">
                <div class="relative w-[116px] h-[116px] rounded-[1.75rem] overflow-hidden bg-panel border border-subtle shadow-xl backdrop-blur-md flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:scale-105">
                  <div class="w-full h-full rounded-[1.5rem] overflow-hidden bg-panel relative">
                    <img
                      src="/img/mohin_cutout.png"
                      alt="Md Mohin Uddin"
                      class="w-full h-full object-cover object-top brightness-105 contrast-100"
                    />
                  </div>
                </div>
              </div>

              <!-- Name & role -->
              <h2 class="text-main font-black text-2xl mb-1 text-center tracking-tight">Md Mohin Uddin</h2>
              <div class="flex items-center gap-2 mb-3">
                <span class="inline-block px-3 py-1 rounded-full bg-gradient-to-br from-brand-a/20 to-[rgba(var(--brand-rgb),0.15)] border border-brand-a/30 text-brand-a text-[0.65rem] font-bold tracking-[0.1em] uppercase">Head of Design</span>
              </div>

              <!-- Location -->
              <div class="flex items-center gap-1.5 mb-6 text-soft text-[0.8rem]">
                <Icon name="lucide:map-pin" class="h-3 w-3 text-brand-a" />
                <span>Dhaka, Bangladesh</span>
              </div>



              <div class="flex items-center gap-3 mb-6">
                <a href="https://github.com" target="_blank" class="flex items-center justify-center w-9 h-9 rounded-[10px] bg-panel-strong border border-subtle text-soft transition-all duration-200 hover:border-brand-a hover:text-brand-a hover:-translate-y-[2px] shadow-sm" aria-label="GitHub">
                  <Icon name="lucide:github" class="h-4 w-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" class="flex items-center justify-center w-9 h-9 rounded-[10px] bg-panel-strong border border-subtle text-soft transition-all duration-200 hover:border-brand-a hover:text-brand-a hover:-translate-y-[2px] shadow-sm" aria-label="LinkedIn">
                  <Icon name="lucide:linkedin" class="h-4 w-4" />
                </a>
                <a href="https://twitter.com" target="_blank" class="flex items-center justify-center w-9 h-9 rounded-[10px] bg-panel-strong border border-subtle text-soft transition-all duration-200 hover:border-brand-a hover:text-brand-a hover:-translate-y-[2px] shadow-sm" aria-label="Twitter/X">
                  <Icon name="lucide:twitter" class="h-4 w-4" />
                </a>
                <a href="mailto:me@mohin.dev" class="flex items-center justify-center w-9 h-9 rounded-[10px] bg-panel-strong border border-subtle text-soft transition-all duration-200 hover:border-brand-a hover:text-brand-a hover:-translate-y-[2px] shadow-sm" aria-label="Email">
                  <Icon name="lucide:mail" class="h-4 w-4" />
                </a>
              </div>

              <!-- CTA button -->
              <a href="#works" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[12px] bg-panel-strong border border-subtle text-main font-semibold text-xs tracking-[0.02em] transition-all duration-200 no-underline hover:border-brand-a hover:text-brand-a hover:-translate-y-[2px] w-full shadow-lg">
                <Icon name="lucide:layout-grid" class="h-3.5 w-3.5 opacity-70" />
                View Selected Works
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#imports'
const { theme } = useTheme()
const { scheme } = useBrandScheme()
</script>

<style scoped>
/* Hide scrollbar for code editor */
.hero-shell pre::-webkit-scrollbar {
  display: none;
}
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

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

@keyframes blobDrift {
  0%   { transform: translateX(-30%) scale(1); }
  50%  { transform: translateX(-20%) scale(1.12) translateY(-8%); }
  100% { transform: translateX(-35%) scale(0.95) translateY(5%); }
}

/* ─── Float animations for badges ─── */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-10px) rotate(1deg); }
}
@keyframes floatDelayed {
  0%, 100% { transform: translateY(0px) rotate(1deg); }
  50%       { transform: translateY(-8px) rotate(-1.5deg); }
}
.animate-float-slow {
  animation: floatSlow 5s ease-in-out infinite;
}
.animate-float-delayed {
  animation: floatDelayed 6s ease-in-out 1.5s infinite;
}
</style>
