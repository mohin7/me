<template>
  <section id="top" class="relative isolate overflow-hidden min-h-screen flex items-center py-16 md:py-20">
    <!-- Immersive Background Gradients -->
    <div class="pointer-events-none absolute inset-0" :class="theme === 'dark' ? 'hero-backdrop-dark' : 'hero-backdrop-light'"></div>
    <div class="hero-glow-left pointer-events-none absolute -left-48 top-10 h-[50rem] w-[50rem] rounded-full blur-[120px] opacity-30 md:opacity-50"></div>
    <div class="hero-glow-right pointer-events-none absolute -right-20 top-40 h-[40rem] w-[40rem] rounded-full blur-[100px] opacity-20 md:opacity-40"></div>

    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.15]">
      <!-- Floating Plus Signs -->
      <span class="absolute top-[20%] left-[10%] text-brand-a/2 text-4xl font-light">+</span>
      
      <!-- Abstract Circle Outlines -->
      <div class="absolute -left-20 top-[40%] h-96 w-96 rounded-full border border-brand-a/2"></div>
      
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
            
            <!-- Floating Figma Badge (Large, Left) -->
            <div class="absolute -left-6 top-16 md:-left-12 md:top-20 hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.4),inset_0_1px_rgba(255,255,255,0.15)] animate-[floatSlow_6s_ease-in-out_infinite] z-20 hover:scale-110 transition-transform cursor-pointer">
              <Icon name="logos:figma" class="w-6 h-6 drop-shadow-md" />
            </div>

            <!-- Floating Tailwind Badge (Medium, Left Bottom) -->
            <div class="absolute -left-2 bottom-24 md:-left-8 md:bottom-28 hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.4),inset_0_1px_rgba(255,255,255,0.15)] animate-[floatSlow_7s_ease-in-out_1s_infinite_reverse] z-20 hover:scale-110 transition-transform cursor-pointer">
              <Icon name="logos:tailwindcss-icon" class="w-6 h-6 drop-shadow-md" />
            </div>

            <!-- Floating TypeScript Badge (Small, Back Left) -->
            <div class="absolute -left-1 md:-left-4 top-40 md:top-48 hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-xl border border-white/5 shadow-lg animate-[floatSlow_5s_ease-in-out_2s_infinite] z-0 opacity-70 hover:opacity-100 hover:z-30 transition-all cursor-pointer">
              <Icon name="logos:typescript-icon" class="w-4 h-4 rounded-sm" />
            </div>

            <!-- Floating Nuxt Badge (Pill, Top Right) -->
            <div class="absolute -right-4 -top-6 md:-right-6 md:-top-4 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.4),inset_0_1px_rgba(255,255,255,0.15)] animate-[floatSlow_5s_ease-in-out_0.5s_infinite] z-20 hover:scale-105 transition-transform cursor-pointer">
              <Icon name="logos:nuxt-icon" class="w-4 h-4 drop-shadow-md" />
              <span class="text-[0.65rem] font-bold text-main uppercase tracking-widest drop-shadow-sm">Nuxt</span>
            </div>

            <!-- Floating Vue Badge (Medium, Right) -->
            <div class="absolute -right-2 top-24 md:-right-8 md:top-32 hidden sm:flex items-center justify-center w-11 h-11 rounded-[14px] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.4),inset_0_1px_rgba(255,255,255,0.15)] animate-[floatSlow_6.5s_ease-in-out_1.5s_infinite_reverse] z-20 hover:scale-110 transition-transform cursor-pointer">
              <Icon name="logos:vue" class="w-5 h-5 drop-shadow-md" />
            </div>

            <!-- Floating JavaScript Badge (Small, Right Bottom) -->
            <div class="absolute -right-1 md:-right-4 bottom-32 md:bottom-40 hidden sm:flex items-center justify-center w-10 h-10 rounded-[12px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.1)] animate-[floatSlow_5.5s_ease-in-out_0.8s_infinite] z-20 hover:scale-110 transition-transform cursor-pointer">
              <Icon name="logos:javascript" class="w-5 h-5 drop-shadow-sm rounded-[2px]" />
            </div>

            <!-- Floating Bulma Badge (Very Small, Top Center Back) -->
            <div class="absolute left-1/4 -top-8 hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 backdrop-blur-md border border-white/5 shadow-lg animate-[floatSlow_6s_ease-in-out_2.5s_infinite_reverse] z-0 opacity-60 hover:opacity-100 hover:z-30 transition-all cursor-pointer">
              <Icon name="logos:bulma" class="w-4 h-4" />
            </div>

            <!-- Floating Hugo Badge (Small, Bottom Left) -->
            <div class="absolute left-12 -bottom-6 hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl animate-[floatSlow_7.5s_ease-in-out_1.2s_infinite] z-20 opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer">
              <Icon name="logos:hugo" class="w-5 h-5" />
            </div>

            <!-- Main glass card -->
            <div class="group relative w-full rounded-[28px] bg-white/5 backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/10 shadow-[inset_0_2px_0_0_rgba(255,255,255,0.18),0_32px_80px_-16px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,0,0,0.08),0_8px_32px_rgba(var(--brand-rgb),0.08)] transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden hover:-translate-y-[6px] hover:scale-[1.012] hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.22),0_40px_100px_-16px_rgba(0,0,0,0.50),0_0_0_1px_rgba(0,0,0,0.10),0_12px_48px_rgba(var(--brand-rgb),0.15)]">
            <!-- Inner highlight rim -->
            <div class="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full z-10 pointer-events-none" aria-hidden="true"></div>

            <!-- Photo section -->
            <div class="relative px-7 pt-9 pb-7 flex flex-col items-center">
              <!-- Availability pill -->
              <div class="inline-flex items-center gap-[7px] px-[12px] py-[4px] pl-[6px] rounded-full bg-green-500/10 border border-green-500/25 backdrop-blur-[8px] mb-5">
                <span class="block w-1.5 h-1.5 rounded-full bg-green-500 drop-shadow-[0_0_0_2px_rgba(34,197,94,0.25)] animate-[pulseGreen_2s_ease-in-out_infinite]"></span>
                <span class="text-[10px] font-semibold tracking-wide text-main/80">Available for projects</span>
              </div>

              <!-- Photo frame -->
              <div class="relative w-[116px] h-[116px] flex items-center justify-center mb-5">
                <div class="absolute -inset-2 rounded-full border-2 border-transparent bg-[linear-gradient(var(--bg-page,#0e0e0e),var(--bg-page,#0e0e0e))_padding-box,conic-gradient(from_0deg,var(--brand-a)_0%,var(--brand-b)_50%,var(--brand-a)_100%)_border-box] animate-[ringRotate_4s_linear_infinite]"></div>
                <div class="absolute -inset-[14px] border-[1.5px] border-transparent rounded-full opacity-35 bg-[linear-gradient(var(--bg-page,#0e0e0e),var(--bg-page,#0e0e0e))_padding-box,conic-gradient(from_0deg,var(--brand-a)_0%,var(--brand-b)_50%,var(--brand-a)_100%)_border-box] animate-[ringRotate_8s_linear_infinite_reverse]"></div>
                <div class="w-[106px] h-[106px] rounded-full overflow-hidden border-[3px] border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_0_3px_rgba(var(--brand-rgb),0.15)] bg-panel z-[2] relative">
                  <img
                    src="/img/mohin_cutout.png"
                    alt="Md Mohin Uddin"
                    class="w-full h-full object-cover object-top brightness-105 contrast-100"
                  />
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

              <!-- Skill chips -->
              <div class="flex flex-wrap gap-2 justify-center mb-6">
                <span class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.65rem] font-semibold text-soft tracking-[0.02em] transition-colors duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a">UI/UX</span>
                <span class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.65rem] font-semibold text-soft tracking-[0.02em] transition-colors duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a">NuxtJS</span>
                <span class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.65rem] font-semibold text-soft tracking-[0.02em] transition-colors duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a">Vue</span>
                <span class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.65rem] font-semibold text-soft tracking-[0.02em] transition-colors duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a">Figma</span>
              </div>

              <!-- Social links row -->
              <div class="flex items-center gap-3 mb-6">
                <a href="https://github.com" target="_blank" class="flex items-center justify-center w-9 h-9 rounded-[10px] bg-white/5 border border-white/10 text-soft transition-all duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a hover:-translate-y-[2px]" aria-label="GitHub">
                  <Icon name="lucide:github" class="h-4 w-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" class="flex items-center justify-center w-9 h-9 rounded-[10px] bg-white/5 border border-white/10 text-soft transition-all duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a hover:-translate-y-[2px]" aria-label="LinkedIn">
                  <Icon name="lucide:linkedin" class="h-4 w-4" />
                </a>
                <a href="https://twitter.com" target="_blank" class="flex items-center justify-center w-9 h-9 rounded-[10px] bg-white/5 border border-white/10 text-soft transition-all duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a hover:-translate-y-[2px]" aria-label="Twitter/X">
                  <Icon name="lucide:twitter" class="h-4 w-4" />
                </a>
                <a href="mailto:me@mohin.dev" class="flex items-center justify-center w-9 h-9 rounded-[10px] bg-white/5 border border-white/10 text-soft transition-all duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a hover:-translate-y-[2px]" aria-label="Email">
                  <Icon name="lucide:mail" class="h-4 w-4" />
                </a>
              </div>

              <!-- CTA button -->
              <a href="#works" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[12px] bg-white/[0.03] border border-white/10 text-main font-semibold text-xs tracking-[0.02em] transition-all duration-200 no-underline hover:bg-white/[0.06] hover:border-white/20 hover:text-white hover:-translate-y-[2px] w-full">
                <Icon name="lucide:layout-grid" class="h-3.5 w-3.5 opacity-70" />
                Explore Projects
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
