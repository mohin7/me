<template>
  <section id="top" ref="heroRef" class="relative min-h-[100dvh] flex items-center pt-32 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-page">
    
    <!-- ── Dynamic Life Background Layers ── -->
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <div class="absolute inset-0 overflow-hidden opacity-40">
        <div class="fragment absolute h-24 w-24 border border-accent/10 rounded-full top-[15%] left-[10%] animate-drift-slow"></div>
        <div class="fragment absolute h-1 w-32 bg-gradient-to-r from-accent/20 to-transparent top-[45%] right-[5%] animate-drift-reverse"></div>
        <div class="fragment absolute h-16 w-16 border border-accent/10 top-[70%] left-[20%] rotate-45 animate-drift-normal"></div>
        <div class="fragment absolute h-32 w-px bg-gradient-to-b from-accent/20 to-transparent bottom-[10%] right-[30%] animate-drift-slow"></div>
      </div>
      <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" 
           style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 32px 32px;"></div>
      <div class="absolute -left-[10%] top-[0%] h-[700px] w-[700px] rounded-full bg-accent/5 dark:bg-accent/3 blur-[160px] animate-glow-slow"></div>
      <div class="absolute -right-[5%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-accent/10 dark:bg-accent/5 blur-[140px] animate-glow-reverse"></div>
      <div class="absolute right-[5%] top-[10%] opacity-[0.08] dark:opacity-[0.04] hidden lg:block">
        <div class="relative h-80 w-80 border-[1px] border-accent/20 border-dashed rounded-full animate-rotate-slow">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent/20"></div>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full border border-accent/20 bg-panel"></div>
        </div>
      </div>
      <div class="absolute inset-0 opacity-[0.025] dark:opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center text-center">

        <!-- Content Stack -->
        <div class="hero-enter flex flex-col items-center w-full">
          <!-- Designation -->
          <div class="mb-10 flex flex-col items-center px-4">
             <span class="section-label">Head of Design • Nuxt & Vue Expert</span>
          </div>

          <!-- Title with Clipless Vector Reveal -->
          <h1 class="hero-title max-w-5xl mx-auto mb-10 text-center px-4 md:px-0">
            <span class="text-main block whitespace-nowrap leading-[1.05]">Designing & coding</span>
            <span class="text-main block mt-1 whitespace-nowrap leading-[1.05]">the next-generation of</span>
            <span class="text-soft italic serif-font lowercase relative inline-grid grid-cols-1 grid-rows-1 place-items-center mt-2 min-h-[1.2em]">
              <span class="invisible pointer-events-none select-none col-start-1 row-start-1 px-1">platforms.</span>
              <div class="col-start-1 row-start-1 relative flex items-center justify-center py-2 px-1">
                 <div class="overflow-hidden transition-all duration-[1200ms] ease-in-out py-1 px-1" :style="{ width: revealWidth }">
                   <span class="whitespace-nowrap pr-2 block">{{ words[wordIndex] }}</span>
                 </div>
                 <span class="h-[0.8em] w-[3px] bg-black dark:bg-white rounded-full ml-[1px]" :class="isPaused ? 'animate-smooth-blink' : 'opacity-100'"></span>
              </div>
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="hero-sub font-medium leading-relaxed mx-auto max-w-3xl opacity-80 mb-16 px-2 md:px-4">
            I bridge the gap between high-end <span class="text-main font-bold">UI/UX Design</span> and high-performance <span class="text-main font-bold">Nuxt & Vue</span> development to deliver seamless, shippable experiences.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2 mb-16 md:mb-20 w-full sm:w-auto px-4">
            <SharedButton 
              tag="a" 
              href="https://cal.com/md-mohin-uddin-8gpn95/30min" 
              target="_blank"
              variant="primary" 
              size="lg" 
              class="h-14 px-10 rounded-full w-full sm:w-auto"
            >
              Schedule Strategy Call
              <template #right>
                <Icon name="lucide:calendar" class="h-4 w-4" />
              </template>
            </SharedButton>
            <a 
              href="https://wa.me/8801634419564" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group flex items-center justify-center gap-3 text-sm font-bold tracking-tight text-main border border-accent/10 hover:border-accent/30 px-8 h-14 rounded-full transition-all w-full sm:w-auto bg-accent/[0.02]"
            >
              <Icon name="logos:whatsapp-icon" class="h-5 w-5" />
              WhatsApp Me
            </a>
          </div>

          <!-- Integrated Precision Proof Bar -->
          <div class="w-full max-w-5xl animate-bar-up translate-y-4 px-1 sm:px-4">
            <div class="relative flex flex-col lg:flex-row items-stretch lg:items-center bg-panel/60 backdrop-blur-3xl border border-accent/10 rounded-[24px] lg:rounded-full overflow-hidden">
              
              <!-- Social Proof -->
              <div class="flex items-center justify-center lg:justify-start gap-4 px-6 py-4 border-b lg:border-b-0 lg:border-r border-accent/10 whitespace-nowrap">
                <div class="flex -space-x-3">
                  <div v-for="i in 3" :key="i" class="h-8 w-8 rounded-full border-2 border-page bg-soft flex items-center justify-center overflow-hidden">
                     <Icon name="lucide:user" class="h-3.5 w-3.5 text-accent/40" />
                  </div>
                </div>
                <div class="flex flex-col text-left">
                  <span class="text-main text-[0.7rem] font-bold tracking-tight leading-none italic serif-font">Elite Collaboration</span>
                  <span class="text-muted text-[0.5rem] font-black uppercase tracking-widest opacity-40 mt-1">Venture-scale Partners</span>
                </div>
              </div>

              <!-- Brand Stream -->
              <div class="flex-1 w-full overflow-hidden relative px-4 py-6 lg:py-4 min-h-[4rem] flex items-center">
                 <div class="flex gap-12 lg:gap-16 animate-ticker grayscale opacity-40 hover:opacity-100 transition-opacity duration-700">
                   <div v-for="i in 3" :key="i" class="flex gap-12 lg:gap-16">
                     <div v-for="l in logos" :key="l.name" class="flex items-center gap-3">
                       <Icon :name="l.icon" class="h-4 w-4 text-main" />
                       <span class="text-main font-bold tracking-widest text-[0.6rem] uppercase opacity-60">{{ l.name }}</span>
                     </div>
                   </div>
                 </div>
              </div>

              <!-- Metrics Block -->
              <div class="flex items-center justify-center lg:justify-end gap-10 px-10 py-5 lg:py-4 bg-accent text-accent-fg shrink-0">
                 <div class="flex items-baseline gap-2">
                   <span class="text-2xl font-black italic serif-font leading-none">07</span>
                   <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-60">Year_Craft</span>
                 </div>
                 <div class="h-6 w-px bg-accent-fg/20"></div>
                 <div class="flex items-baseline gap-2">
                   <span class="text-2xl font-black italic serif-font leading-none">24+</span>
                   <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-60">Ships</span>
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

.serif-font { font-family: 'Playfair Display', serif; }

.hero-title {
  font-size: clamp(1.6rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.04em;
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
