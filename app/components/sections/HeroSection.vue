<template>
  <section id="top" ref="heroRef" class="relative min-h-screen flex items-center pt-28 pb-8 md:pt-32 md:pb-12 overflow-hidden bg-page">
    
    <!-- ── Stripe-style gradient mesh background ── -->
    <div class="hero-bg pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <!-- Mesh blobs -->
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="blob blob-4"></div>
      <!-- Noise overlay -->
      <div class="hero-noise"></div>
      <!-- Bottom fade into next section -->
      <div class="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-page to-transparent"></div>
      <!-- Accent edge glow at section floor -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] rounded-full blur-[60px] pointer-events-none"
           style="background: radial-gradient(ellipse at bottom, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%);"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center text-center">

        <!-- Content Stack -->
        <div class="hero-enter flex flex-col items-center w-full reveal">

          <!-- Availability badge -->
          <div class="mb-4 mt-0 md:mt-4 flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--border-glass)] bg-panel">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-main text-[0.65rem] font-bold uppercase tracking-[0.4em]">Available · 1 Opening</span>
          </div>

          <!-- Title with Clipless Vector Reveal -->
          <h1 class="hero-title max-w-6xl mx-auto mb-2 text-center px-4 md:px-0">
            <span class="text-main block leading-[1.05]">Designing & coding</span>
            <span class="text-main block mt-1 leading-[1.05]">the next-generation of</span>
            <span class="relative inline-grid grid-cols-1 grid-rows-1 place-items-center mt-2">
              <span class="invisible pointer-events-none select-none col-start-1 row-start-1 px-1">platforms</span>
              <div class="col-start-1 row-start-1 relative flex items-center justify-center px-1">
                 <div class="overflow-hidden transition-all duration-[1200ms] ease-in-out py-1" :style="{ width: revealWidth }">
                   <span class="whitespace-nowrap pr-2 block text-gradient">{{ words[wordIndex] }}</span>
                 </div>
                  <span class="h-[0.8em] w-[3px] bg-accent rounded-full ml-[2px]" :class="isPaused ? 'animate-smooth-blink' : 'opacity-100'"></span>
              </div>
            </span>
          </h1>

          <p class="hero-sub font-medium leading-relaxed mx-auto max-w-4xl pt-2 mb-12 px-2 md:px-4 opacity-90">
            UI/UX designer &amp; engineer based in Dhaka, Bangladesh. I design and build products people actually want to use.
          </p>

          <!-- CTA Row -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 mb-12 w-full sm:w-auto px-4">
            <SharedButton 
              tag="a" 
              href="https://cal.com/md-mohin-uddin-8gpn95/30min" 
              target="_blank"
              variant="primary" 
              size="lg" 
              class="h-14 px-10 rounded-full w-full sm:w-auto" hover-text="Let's Talk"
            >
              Book a 30-Min Call
              <template #right>
                <Icon name="lucide:calendar" class="h-4 w-4" />
              </template>
              <template #hoverRight>
                <Icon name="lucide:map" class="h-4 w-4" />
              </template>
            </SharedButton>
            <SharedButton tag="a" href="https://wa.me/8801634419564" variant="liquid" size="lg" class="h-14 px-10 rounded-full w-full sm:w-auto" hover-text="Quick Reply">
              <template #left><Icon name="logos:whatsapp-icon" class="h-5 w-5" /></template>
              WhatsApp
            </SharedButton>
          </div>

          <!-- Integrated Precision Proof Bar -->
          <div class="w-full max-w-5xl animate-bar-up translate-y-4 px-1 sm:px-4">
            <div class="relative flex flex-col lg:flex-row items-stretch lg:items-center border border-[var(--border-glass)] rounded-2xl lg:rounded-full overflow-hidden bg-panel" style="box-shadow: var(--card-shadow);">
              
              <!-- Social Proof -->
              <div class="flex items-center justify-center lg:justify-start gap-4 px-6 py-4 border-b lg:border-b-0 lg:border-r border-glass whitespace-nowrap">
                <div class="flex -space-x-3">
                  <div v-for="i in 3" :key="i" class="h-8 w-8 rounded-full border border-[var(--border-glass)] bg-soft flex items-center justify-center overflow-hidden">
                     <Icon name="lucide:user" class="h-3.5 w-3.5 text-accent opacity-40" />
                  </div>
                </div>
                <div class="flex flex-col text-left">
                  <span class="text-main text-[0.7rem] font-bold tracking-tight leading-none">Trusted by</span>
                  <span class="text-soft text-[0.5rem] font-black uppercase tracking-widest opacity-90 mt-1">Product Teams</span>
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
                   <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-80">Years</span>
                 </div>
                 <div class="h-6 w-px bg-glass"></div>
                 <div class="flex items-baseline gap-2">
                   <span class="text-2xl font-black leading-none">24+</span>
                   <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-80">Products Shipped</span>
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
const words = ['products', 'MVPs', 'SaaS', 'platforms', 'systems']
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
      }, 1600)
    }, 2560)
  }, 1600)
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

/* ── Stripe-style gradient mesh ── */
.hero-bg {
  background: var(--bg-page);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  will-change: transform;
}

.blob-1 {
  width: 800px; height: 600px;
  top: -20%; left: -15%;
  background: radial-gradient(ellipse, rgba(16,185,129,0.2) 0%, rgba(5,150,105,0.07) 50%, transparent 70%);
  animation: blob-drift 14s ease-in-out infinite alternate;
}
.blob-2 {
  width: 650px; height: 600px;
  top: -15%; right: -10%;
  background: radial-gradient(ellipse, rgba(34,197,94,0.13) 0%, rgba(16,185,129,0.05) 50%, transparent 70%);
  animation: blob-drift 18s ease-in-out infinite alternate-reverse;
}
.blob-3 {
  width: 500px; height: 420px;
  bottom: 8%; left: 18%;
  background: radial-gradient(ellipse, rgba(52,211,153,0.09) 0%, transparent 65%);
  animation: blob-drift 22s ease-in-out infinite alternate;
}
.blob-4 {
  width: 320px; height: 320px;
  top: 35%; right: 18%;
  background: radial-gradient(ellipse, rgba(6,78,59,0.28) 0%, transparent 65%);
  animation: blob-drift 16s ease-in-out infinite alternate-reverse;
}

@keyframes blob-drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, 30px) scale(1.06); }
}

/* Noise grain on top of mesh */
.hero-noise {
  position: absolute;
  inset: 0;
  opacity: 0.055;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 180px 180px;
  mix-blend-mode: overlay;
}

.hero-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.7rem, 7.5vw, 6rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
}

@media (min-width: 640px) {
  .hero-title { font-size: clamp(2.8rem, 8vw, 6.5rem); }
}

.hero-sub {
  font-size: clamp(0.8rem, 2.5vw, 1.1rem);
  color: var(--text-soft);
  letter-spacing: -0.005em;
}

.animate-ticker { animation: ticker 45s linear infinite; }
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-ticker:hover { animation-play-state: paused; }

</style>
