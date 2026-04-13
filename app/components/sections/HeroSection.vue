<template>
  <section id="top" ref="heroRef" class="relative min-h-[100dvh] flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-page">
    
    <!-- ── Dynamic Life Background Layers ── ... (Background content remains same) -->
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
        <div class="hero-enter flex flex-col items-center">
          <!-- Designation -->
          <div class="mb-6 flex items-center gap-3">
             <div class="h-px w-8 bg-accent/20"></div>
             <span class="text-[0.65rem] font-black uppercase tracking-[0.4em] text-soft">Product Design Engineer • Nuxt & Vue Expert</span>
             <div class="h-px w-8 bg-accent/20"></div>
          </div>

          <!-- Title with Clipless Vector Reveal -->
          <h1 class="hero-title max-w-5xl mx-auto mb-8 text-center">
            <span class="text-main block">Designing & coding the</span>
            <span class="text-main flex flex-wrap justify-center items-center gap-[0em] mt-2">
              <span>next-generation of</span>
              <span class="text-soft italic serif-font lowercase relative inline-grid grid-cols-1 grid-rows-1 place-items-center">
                
                <!-- Phantom (Preserves space centered) -->
                <span class="invisible pointer-events-none select-none col-start-1 row-start-1 px-2">platforms.</span>
                
                <!-- Vector Reveal Container with extra headroom for descenders and slants -->
                <div class="col-start-1 row-start-1 relative flex items-center justify-center py-2 px-1">
                   <!-- The Text (Clipped Container) -->
                   <div 
                     class="overflow-hidden transition-all duration-[1200ms] ease-in-out py-1 px-1"
                     :style="{ width: revealWidth }"
                   >
                     <span class="whitespace-nowrap pr-2 block">{{ words[wordIndex] }}</span>
                   </div>
                   
                   <!-- The Cursor -->
                   <span class="h-[0.8em] w-[3px] bg-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] ml-[1px]" :class="isPaused ? 'animate-smooth-blink' : 'opacity-100'"></span>
                </div>
              </span>
            </span>
          </h1>

          <!-- Subtitle ... rest unchanged -->
          <p class="hero-sub font-medium leading-relaxed mx-auto max-w-3xl opacity-80 mb-12">
            I bridge the gap between high-end <span class="text-main font-bold">UI/UX Design</span> and high-performance <span class="text-main font-bold">Nuxt & Vue</span> development to deliver seamless, shippable experiences.
          </p>

          <div class="flex items-center justify-center gap-8 mt-2 mb-20">
            <SharedButton tag="a" href="#contact" variant="primary" size="lg" class="h-14 px-10">
              Book a Strategy Call
              <template #right>
                <Icon name="lucide:arrow-right" class="h-4 w-4" />
              </template>
            </SharedButton>
            <a href="#works" class="group flex items-center gap-2 text-sm font-bold tracking-tight text-main border border-accent/10 hover:border-accent/20 px-8 h-14 rounded-full transition-all">
              Explore Portfolio
              <Icon name="lucide:chevron-down" class="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          <!-- Integrated Precision Proof Bar -->
          <div class="w-full max-w-5xl animate-bar-up translate-y-4">
            <div class="relative flex flex-col md:flex-row items-stretch md:items-center bg-panel/40 backdrop-blur-3xl border border-glass rounded-[32px] md:rounded-full overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)]">
              
              <!-- Social Proof -->
              <div class="flex items-center gap-4 px-8 py-4 border-b md:border-b-0 md:border-r border-accent/10 whitespace-nowrap">
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
              <div class="flex-1 w-full overflow-hidden relative px-4 py-4">
                 <div class="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-panel to-transparent z-10"></div>
                 <div class="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-panel to-transparent z-10"></div>
                 
                 <div class="flex gap-12 md:gap-16 animate-ticker grayscale opacity-20 hover:opacity-100 transition-opacity duration-700">
                   <div v-for="i in 3" :key="i" class="flex gap-12 md:gap-16">
                     <div v-for="l in logos" :key="l.name" class="flex items-center gap-3">
                       <Icon :name="l.icon" class="h-4 w-4 text-main" />
                       <span class="text-main font-bold tracking-widest text-[0.65rem] uppercase opacity-60">{{ l.name }}</span>
                     </div>
                   </div>
                 </div>
              </div>

              <!-- Metrics Block -->
              <div class="flex items-center gap-8 px-10 py-4 bg-accent text-accent-fg shrink-0">
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
            
            <div class="mt-4 flex justify-center">
               <span class="text-[0.55rem] font-black uppercase tracking-[0.3em] text-muted opacity-30">Verified Technical Expertise & Structural Logic</span>
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
/* ── Animations ── */
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

.animate-smooth-blink {
  animation: smooth-blink 1s ease-in-out infinite;
}

/* ── Typography and others ... ── */
.serif-font { font-family: 'Playfair Display', serif; }

.hero-title {
  font-size: clamp(2.8rem, 9vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.hero-sub {
  font-size: 1.35rem;
  color: var(--text-soft);
  max-width: 720px;
  letter-spacing: -0.01em;
}

.animate-ticker {
  animation: ticker 45s linear infinite;
}

@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-ticker:hover {
  animation-play-state: paused;
}
</style>
