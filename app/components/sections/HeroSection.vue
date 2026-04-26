<template>
  <section id="top" ref="heroRef" class="relative min-h-[90dvh] flex items-center pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-page">
    
    <!-- ── Cinematic Background Layers ── -->
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <!-- Animated orbital ring -->
      <div class="absolute right-[5%] top-[10%] opacity-[0.06] hidden lg:block">
        <div class="relative h-80 w-80 border-[1px] border-glass border-dashed rounded-full animate-rotate-slow">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent/20"></div>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full border border-glass bg-panel"></div>
        </div>
      </div>

      <!-- Floating geometric fragments -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="fragment absolute h-24 w-24 border border-glass rounded-full top-[15%] left-[10%] animate-drift-slow"></div>
        <div class="fragment absolute h-1 w-32 bg-gradient-to-r from-glass to-transparent top-[45%] right-[5%] animate-drift-reverse"></div>
        <div class="fragment absolute h-16 w-16 border border-glass top-[70%] left-[20%] rotate-45 animate-drift-normal"></div>
        <div class="fragment absolute h-32 w-px bg-gradient-to-b from-glass to-transparent bottom-[10%] right-[30%] animate-drift-slow"></div>
      </div>

      <!-- Dot matrix with radial mask -->
      <div class="absolute inset-0 opacity-[0.035] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" 
           style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 32px 32px;"></div>
      
      <!-- Ambient glow orbs -->
      <div class="absolute -left-[10%] top-[0%] h-[700px] w-[700px] rounded-full blur-[160px] animate-glow-slow" style="background: color-mix(in srgb, var(--accent), transparent 95%)"></div>
      <div class="absolute -right-[5%] bottom-[5%] h-[600px] w-[600px] rounded-full blur-[140px] animate-glow-reverse" style="background: color-mix(in srgb, var(--accent), transparent 90%)"></div>

      <!-- Radial vignette -->
      <div class="absolute inset-0 bg-gradient-to-b from-page via-transparent to-page opacity-60"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center text-center">

        <!-- Content Stack -->
        <div class="hero-enter flex flex-col items-center w-full reveal">

          <!-- Availability badge -->
          <div class="mb-8 flex items-center gap-3 px-5 py-2.5 rounded-full border border-glass bg-panel/30 backdrop-blur-xl">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-main text-[0.65rem] font-bold uppercase tracking-[0.3em]">Available for new projects</span>
          </div>

          <!-- Title with Clipless Vector Reveal -->
          <h1 class="hero-title max-w-6xl mx-auto mb-8 text-center px-4 md:px-0">
            <span class="text-main block leading-[1.05]">Designing & coding</span>
            <span class="text-main block mt-1 leading-[1.05]">the next-generation of</span>
            <span class="text-soft relative inline-grid grid-cols-1 grid-rows-1 place-items-center mt-2 min-h-[1.1em]">
              <span class="invisible pointer-events-none select-none col-start-1 row-start-1 px-1">platforms.</span>
              <div class="col-start-1 row-start-1 relative flex items-center justify-center py-2 px-1">
                 <div class="overflow-hidden transition-all duration-[1200ms] ease-in-out" :style="{ width: revealWidth }">
                   <span class="whitespace-nowrap pr-2 block">{{ words[wordIndex] }}</span>
                 </div>
                  <span class="h-[0.8em] w-[3px] bg-accent rounded-full ml-[2px]" :class="isPaused ? 'animate-smooth-blink' : 'opacity-100'"></span>
              </div>
            </span>
          </h1>

          <p class="hero-sub font-medium leading-relaxed mx-auto max-w-3xl mb-14 px-2 md:px-4">
            Solving real user problems by bridging <span class="text-main font-bold">Psychological UX</span> with high-performance <span class="text-main font-bold">Engineering</span>. From idea to product, I craft experiences using Vue, Nuxt, and a deep understanding of human behavior.
          </p>

          <!-- CTA Row -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 mb-14 w-full sm:w-auto px-4">
            <SharedButton 
              tag="a" 
              href="https://cal.com/md-mohin-uddin-8gpn95/30min" 
              target="_blank"
              variant="primary" 
              size="lg" 
              class="h-14 px-10 rounded-full w-full sm:w-auto" hover-text="Discuss Roadmap"
            >
              Schedule Strategy Call
              <template #right>
                <Icon name="lucide:calendar" class="h-4 w-4" />
              </template>
            </SharedButton>
            <SharedButton tag="a" href="https://wa.me/8801634419564" target="_blank" variant="liquid" size="lg" class="h-14 px-10 rounded-full w-full sm:w-auto" hover-text="Say Hello"><template #left><Icon name="logos:whatsapp-icon" class="h-5 w-5" /></template>WhatsApp Me</SharedButton>
          </div>

          <!-- Integrated Precision Proof Bar -->
          <div class="w-full max-w-5xl animate-bar-up translate-y-4 px-1 sm:px-4">
            <div class="relative flex flex-col lg:flex-row items-stretch lg:items-center border border-glass rounded-[24px] lg:rounded-full overflow-hidden" style="background: var(--bg-glass); backdrop-filter: blur(32px) saturate(150%); box-shadow: var(--inner-glow), var(--specular);">
              
              <!-- Social Proof -->
              <div class="flex items-center justify-center lg:justify-start gap-4 px-6 py-4 border-b lg:border-b-0 lg:border-r border-glass whitespace-nowrap">
                <div class="flex -space-x-3">
                  <div v-for="i in 3" :key="i" class="h-8 w-8 rounded-full border-2 border-page bg-soft flex items-center justify-center overflow-hidden">
                     <Icon name="lucide:user" class="h-3.5 w-3.5 text-accent opacity-40" />
                  </div>
                </div>
                <div class="flex flex-col text-left">
                  <span class="text-main text-[0.7rem] font-bold tracking-tight leading-none">Elite Collaboration</span>
                  <span class="text-muted text-[0.5rem] font-black uppercase tracking-widest opacity-70 mt-1">Venture-scale Partners</span>
                </div>
              </div>

              <!-- Brand Stream -->
              <div class="flex-1 w-full overflow-hidden relative px-4 py-6 lg:py-4 min-h-[4rem] flex items-center">
                 <div class="flex gap-12 lg:gap-16 animate-ticker grayscale opacity-70 hover:opacity-100 transition-opacity duration-700">
                   <div v-for="i in 3" :key="i" class="flex gap-12 lg:gap-16">
                     <div v-for="l in logos" :key="l.name" class="flex items-center gap-3">
                       <Icon :name="l.icon" class="h-4 w-4 text-main" />
                       <span class="text-main font-bold tracking-widest text-[0.6rem] uppercase opacity-80">{{ l.name }}</span>
                     </div>
                   </div>
                 </div>
              </div>

              <!-- Metrics Block -->
              <div class="flex items-center justify-center lg:justify-end gap-10 px-10 py-5 lg:py-4 shrink-0 border-t lg:border-t-0 lg:border-l border-glass">
                 <div class="flex items-baseline gap-2">
                   <span class="text-2xl font-black leading-none">07</span>
                   <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-80">Year_Craft</span>
                 </div>
                 <div class="h-6 w-px bg-glass"></div>
                 <div class="flex items-baseline gap-2">
                   <span class="text-2xl font-black leading-none">24+</span>
                   <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-80">Ships</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const words = ['products.', 'MVPs.', 'SaaS.', 'platforms.', 'systems.']
const wordIndex = ref(0)
const revealWidth = ref('0px')
const isPaused = ref(false)

const cycleReveal = () => {
  isPaused.value = false
  revealWidth.value = '100%'
  setTimeout(() => {
    isPaused.value = true
    setTimeout(() => {
      isPaused.value = false
      revealWidth.value = '0px'
      setTimeout(() => {
        wordIndex.value = (wordIndex.value + 1) % words.length
        cycleReveal()
      }, 1300)
    }, 2500)
  }, 1300)
}

onMounted(() => {
  setTimeout(cycleReveal, 1000)
})

const logos = [
  { name: 'AppsCode', icon: 'lucide:box' },
  { name: 'KubeDB', icon: 'lucide:database' },
  { name: 'Stash', icon: 'lucide:shield-check' },
  { name: 'ByteBuilders', icon: 'lucide:cpu' },
  { name: 'CloudSoft', icon: 'lucide:cloud' },
]
</script>

<style scoped>
.hero-enter { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
.animate-bar-up { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }

@keyframes slideUp { 
  from { opacity: 0; transform: translateY(32px); } 
  to { opacity: 1; transform: translateY(0); } 
}

@keyframes smooth-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}

.animate-smooth-blink { animation: smooth-blink 1s ease-in-out infinite; }

.hero-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 9vw, 6rem);
  line-height: 1.1;
}

.hero-sub {
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--text-soft);
  letter-spacing: -0.01em;
}

.animate-ticker { animation: ticker 45s linear infinite; }
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-ticker:hover { animation-play-state: paused; }

.animate-glow-slow { animation: glow 8s ease-in-out infinite alternate; }
.animate-glow-reverse { animation: glow 10s ease-in-out infinite alternate-reverse; }
@keyframes glow {
  from { transform: translate(0, 0) scale(1); opacity: 0.3; }
  to { transform: translate(20px, 20px) scale(1.1); opacity: 0.5; }
}
</style>
