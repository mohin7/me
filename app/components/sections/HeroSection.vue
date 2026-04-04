<template>
  <section id="top" class="hero-shell relative isolate overflow-hidden min-h-screen flex items-center py-24 md:py-32">
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
          <p class="handwriting text-brand-a mb-4 flex items-center gap-3 text-2xl md:text-3xl md:mb-6">
            Hire Your Next 
            <span class="text-main/20 text-sm leading-none font-sans font-black tracking-widest">•</span>
          </p>

          <h1 class="mb-6 font-black leading-[1] tracking-tight relative" style="font-size: clamp(3.5rem, 10vw, 8rem);">
            <span class="block metallic-text py-1">Designer</span>
            <span class="block brand-text-gradient py-1">& Coder</span>
            
            <!-- Handwritten Note -->
            <div class="absolute -right-8 -top-12 md:-right-24 md:-top-16 opacity-0 animate-[floatSlow_5s_ease-in-out_infinite]" style="animation: heroRise 800ms both 1.2s, floatSlow 5s ease-in-out infinite 2s;">
               <p class="handwriting text-brand-a text-2xl md:text-3xl -rotate-12 whitespace-nowrap">
                 Design-to-Production <br> <span class="text-xs tracking-widest uppercase font-black opacity-30 font-sans block mt-1">Efficiency focus</span>
               </p>
            </div>
          </h1>

          <p class="text-soft mb-4 max-w-lg text-lg font-medium leading-[1.3] sm:text-2xl">
            I help startups turn complex ideas into intuitive, scalable products—delivering faster launches, happier users, and standout results.
          </p>

          <!-- Current Work Badges -->
          <div class="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-soft font-medium animate-fade-in-up" style="animation-delay: 0.5s;">
            <span>Shaping cloud platforms at:</span>
            <div class="flex items-center gap-2">
              <a href="https://appscode.com" target="_blank" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle bg-white/5 hover:bg-brand-a/10 hover:text-brand-a hover:border-brand-a/30 transition-colors group/link cursor-pointer">
                <Icon name="lucide:server" class="h-3.5 w-3.5" />
                <span>AppsCode</span>
              </a>
              <a href="https://kubedb.com" target="_blank" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle bg-white/5 hover:bg-brand-a/10 hover:text-brand-a hover:border-brand-a/30 transition-colors group/link cursor-pointer">
                <Icon name="lucide:database" class="h-3.5 w-3.5" />
                <span>KubeDB</span>
              </a>
            </div>
          </div>
          <ul class="text-main/70 text-base mb-6 space-y-1 pl-2">
            <li class="flex items-center gap-2"><Icon name="lucide:star" class="h-4 w-4 text-brand-a" /> 7+ years building delightful user experiences</li>
            <li class="flex items-center gap-2"><Icon name="lucide:cloud" class="h-4 w-4 text-brand-a" /> Shipped 20+ SaaS & cloud platforms</li>
            <li class="flex items-center gap-2"><Icon name="lucide:rocket" class="h-4 w-4 text-brand-a" /> Expert in rapid MVP launches & scaling</li>
            <li class="flex items-center gap-2"><Icon name="lucide:mouse-pointer-click" class="h-4 w-4 text-brand-a" /> Obsessed with usability and conversion</li>
            <li class="flex items-center gap-2"><Icon name="lucide:smile" class="h-4 w-4 text-brand-a" /> Proven results: faster launches, happier users</li>
          </ul>
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


          <!-- Main glass card -->
          <div class="group relative z-10 w-full max-w-[400px] rounded-[28px] bg-white/5 backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/10 shadow-[inset_0_2px_0_0_rgba(255,255,255,0.18),0_32px_80px_-16px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,0,0,0.08),0_8px_32px_rgba(var(--brand-rgb),0.08)] transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden hover:-translate-y-[6px] hover:scale-[1.012] hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.22),0_40px_100px_-16px_rgba(0,0,0,0.50),0_0_0_1px_rgba(0,0,0,0.10),0_12px_48px_rgba(var(--brand-rgb),0.15)]">
            <!-- Inner highlight rim -->
            <div class="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full z-10 pointer-events-none" aria-hidden="true"></div>

            <!-- Photo section -->
            <div class="relative px-8 pt-10 pb-6 flex flex-col items-center">
              <!-- Availability pill -->
              <div class="inline-flex items-center gap-[7px] px-[14px] py-[5px] pl-[8px] rounded-full bg-green-500/10 border border-green-500/25 backdrop-blur-[8px] mb-6">
                <span class="block w-2 h-2 rounded-full bg-green-500 drop-shadow-[0_0_0_3px_rgba(34,197,94,0.25)] animate-[pulseGreen_2s_ease-in-out_infinite]"></span>
                <span class="text-[11px] font-semibold tracking-wide text-main/80">Available for projects</span>
              </div>

              <!-- Photo frame -->
              <div class="relative w-[132px] h-[132px] flex items-center justify-center mb-6">
                <div class="absolute -inset-2 rounded-full border-2 border-transparent bg-[linear-gradient(var(--bg-page,#0e0e0e),var(--bg-page,#0e0e0e))_padding-box,conic-gradient(from_0deg,var(--brand-a)_0%,var(--brand-b)_50%,var(--brand-a)_100%)_border-box] animate-[ringRotate_4s_linear_infinite]"></div>
                <div class="absolute -inset-[14px] border-[1.5px] border-transparent rounded-full opacity-35 bg-[linear-gradient(var(--bg-page,#0e0e0e),var(--bg-page,#0e0e0e))_padding-box,conic-gradient(from_0deg,var(--brand-a)_0%,var(--brand-b)_50%,var(--brand-a)_100%)_border-box] animate-[ringRotate_8s_linear_infinite_reverse]"></div>
                <div class="w-[120px] h-[120px] rounded-full overflow-hidden border-[3px] border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.35),0_0_0_3px_rgba(var(--brand-rgb),0.15)] bg-panel z-[2] relative">
                  <img
                    src="/img/mohin_cutout.png"
                    alt="Md Mohin Uddin"
                    class="w-full h-full object-cover object-top brightness-105 contrast-100"
                  />
                </div>
              </div>

              <!-- Name & role -->
              <h2 class="text-main font-black text-2xl md:text-[1.6rem] mb-1 text-center tracking-tight">Md Mohin Uddin</h2>
              <div class="flex items-center gap-2 mb-4">
                <span class="inline-block px-[14px] py-[4px] rounded-full bg-gradient-to-br from-brand-a/20 to-[rgba(var(--brand-rgb),0.15)] border border-brand-a/30 text-brand-a text-[0.7rem] font-bold tracking-[0.12em] uppercase">Head of Design</span>
              </div>

              <!-- Location -->
              <div class="flex items-center gap-1.5 mb-5 text-soft text-sm">
                <Icon name="lucide:map-pin" class="h-3.5 w-3.5 text-brand-a" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <!-- Divider -->
              <div class="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5"></div>

              <!-- Skill chips -->
              <div class="flex flex-wrap gap-2 justify-center mb-5">
                <span class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.72rem] font-semibold text-soft tracking-[0.02em] transition-colors duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a">UI/UX</span>
                <span class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.72rem] font-semibold text-soft tracking-[0.02em] transition-colors duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a">NuxtJS</span>
                <span class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.72rem] font-semibold text-soft tracking-[0.02em] transition-colors duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a">Vue</span>
                <span class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.72rem] font-semibold text-soft tracking-[0.02em] transition-colors duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a">Figma</span>
                <span class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.72rem] font-semibold text-soft tracking-[0.02em] transition-colors duration-200 hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a">Design Systems</span>
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
              <a href="#works" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-main font-semibold text-sm tracking-[0.02em] transition-all duration-200 no-underline hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a hover:-translate-y-[2px] w-full mt-2">
                <Icon name="lucide:layout-grid" class="h-4 w-4" />
                Explore Projects
              </a>
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
