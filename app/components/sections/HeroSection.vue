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
        <div class="hero-enter relative z-20">
          <p class="handwriting text-brand-a mb-4 flex items-center gap-3 text-2xl md:text-3xl md:mb-6">
            Hire Your Next 
            <span class="text-main/20 text-sm leading-none font-sans font-black tracking-widest">•</span>
          </p>

          <h1 class="text-main mb-6 font-black leading-[0.9] tracking-tight relative" style="font-size: clamp(3.5rem, 11vw, 10rem);">
            <span class="block whitespace-nowrap">Designer</span>
            <span class="block whitespace-nowrap text-[color:var(--brand-a)]">& Coder</span>
            
            <!-- Handwritten Note -->
            <div class="absolute -right-8 -top-12 md:-right-24 md:-top-16 opacity-0 animate-fade-in-up" style="animation-delay: 1.2s;">
               <p class="handwriting text-brand-a text-2xl md:text-3xl -rotate-12 whitespace-nowrap">
                 Design-to-Production <br> <span class="text-xs tracking-widest uppercase font-black opacity-30 font-sans block mt-1">Efficiency focus</span>
               </p>
            </div>
          </h1>

          <p class="text-soft mb-4 max-w-lg text-lg font-medium leading-[1.3] sm:text-2xl">
            I help startups turn complex ideas into intuitive, scalable products—delivering faster launches, happier users, and standout results.
          </p>
          <!-- <p class="text-main/80 mb-4 max-w-lg text-base font-normal leading-[1.5]">
            I design cloud-based, user-centric solutions at AppsCode, shaping products like <a href='https://appscode.com' class='underline text-brand-a' target='_blank'>appscode.com</a> and <a href='https://kubedb.com' class='underline text-brand-a' target='_blank'>kubedb.com</a>.<br>
            7+ years in UI/UX design & development. Focused on micro-interactions, scalable UI, and user behavior insights. Design is about making technology feel human.
          </p> -->
          <ul class="text-main/70 text-base mb-6 space-y-1 pl-2">
            <li class="flex items-center gap-2"><Icon name="lucide:star" class="h-4 w-4 text-brand-a" /> 7+ years in UI/UX design & dev</li>
            <li class="flex items-center gap-2"><Icon name="lucide:users" class="h-4 w-4 text-brand-a" /> Led design for cloud products</li>
            <li class="flex items-center gap-2"><Icon name="lucide:activity" class="h-4 w-4 text-brand-a" /> Focus on micro-interactions</li>
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

        <!-- Right Column: Profile Card (Key Hiring Points) -->
        <div class="hero-enter-delay relative z-10 flex justify-center lg:justify-end">
              <div class="relative w-full max-w-sm bg-panel border border-subtle rounded-2xl shadow-xl p-6 md:p-8 flex flex-col gap-6 justify-center text-left">
                <div class="flex flex-col gap-1 mb-2">
                  <span class="text-xs text-soft">Dhaka, Bangladesh</span>
                  <span class="inline-block rounded-full bg-brand-a/10 text-brand-a px-3 py-1 text-xs font-bold uppercase tracking-widest border border-brand-a">Head of Design</span>
                </div>
                <h2 class="text-main font-black text-xl md:text-2xl mb-1">Md Mohin Uddin</h2>
                <div class="flex items-center gap-2 mb-2">
                  <Icon name="lucide:building" class="h-4 w-4 text-brand-a" />
                  <span class="text-soft text-sm">AppsCode Inc.</span>
                </div>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-panel px-3 py-1 rounded-full text-xs font-medium border border-subtle text-main/80">UI/UX</span>
                  <span class="bg-panel px-3 py-1 rounded-full text-xs font-medium border border-subtle text-main/80">Product Design</span>
                  <span class="bg-panel px-3 py-1 rounded-full text-xs font-medium border border-subtle text-main/80">Cloud Apps</span>
                  <span class="bg-panel px-3 py-1 rounded-full text-xs font-medium border border-subtle text-main/80">Micro-interactions</span>
                  <span class="bg-panel px-3 py-1 rounded-full text-xs font-medium border border-subtle text-main/80">User Research</span>
                  <span class="bg-panel px-3 py-1 rounded-full text-xs font-medium border border-subtle text-main/80">Tailwind CSS</span>
                  <span class="bg-panel px-3 py-1 rounded-full text-xs font-medium border border-subtle text-main/80">Bulma</span>
                </div>
                <div class="flex flex-col items-center w-full mt-2 gap-1">
                  <span class="text-xs text-soft">Open to collaboration & new opportunities</span>
                  <a href="#contact" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-a text-white font-bold shadow hover:bg-brand-a/90 transition text-xs">
                    <Icon name="lucide:mail" class="h-4 w-4" /> Contact
                  </a>
                </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Marquee -->
    <div class="absolute bottom-8 left-0 w-full overflow-hidden" style="z-index: 5;">
      <div class="flex whitespace-nowrap">
        <div class="animate-marquee flex gap-48 items-center pr-48">
          <h2
            class="font-extralight uppercase tracking-normal whitespace-nowrap hero-marquee-text-solid"
            :class="theme === 'dark' ? 'text-white/70' : 'text-gray-500'"
            :style="'font-size: clamp(3.5rem, 8vw, 6rem);'"
          >
            <span class="text-[color:var(--brand-a)] font-semibold" style="opacity: 0.7;">Mohin</span>
            <span class="mx-12 opacity-10 font-light">/</span> <span class="hero-marquee-veteran-solid opacity-70">Your Partner in Product Growth</span>
          </h2>
          <h2
            class="font-extralight uppercase tracking-normal whitespace-nowrap hero-marquee-text-solid"
            :class="theme === 'dark' ? 'text-white/70' : 'text-gray-500'"
            :style="'font-size: clamp(3.5rem, 8vw, 6rem);'"
          >
            <span class="text-[color:var(--brand-a)] font-semibold" style="opacity: 0.7;">Mohin</span>
            <span class="mx-12 opacity-10 font-light">/</span> <span class="hero-marquee-veteran-solid opacity-70">Your Partner in Product Growth</span>
          </h2>
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
/* Solid color and light font for 8-Year UX Veteran text in marquee */
.hero-marquee-text-solid {
  background: none;
  mix-blend-mode: normal;
  opacity: 1;
}
.hero-marquee-veteran-solid {
  color: inherit;
  font-weight: 300;
  letter-spacing: 0.04em;
}
</style>
