<template>
  <section id="top" ref="heroRef" class="relative min-h-[100dvh] flex items-center pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-page">

    <!-- Soft ambient background -->
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <div class="absolute inset-0 opacity-[0.035] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
           style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 28px 28px;"></div>
      <div class="absolute -left-[10%] top-[5%] h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-[140px] animate-glow-slow"></div>
      <div class="absolute -right-[8%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[120px] animate-glow-reverse"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-start text-left">

        <div class="hero-enter flex flex-col items-start w-full">
          <span class="section-label mb-10">Head of Design · Nuxt & Vue</span>

          <h1 class="hero-title max-w-5xl mb-10 text-left">
            <span class="text-main block leading-[1.02]">Designing &amp; coding</span>
            <span class="text-main block leading-[1.02]">the next wave of</span>
            <span class="relative inline-flex items-baseline mt-1">
              <span class="serif-font italic text-accent relative">
                <span class="invisible pointer-events-none select-none">platforms.</span>
                <span class="absolute inset-0 flex items-center">
                  <span class="overflow-hidden transition-[width] duration-[650ms] ease-out" :style="{ width: revealWidth }">
                    <span class="whitespace-nowrap pr-1 block">{{ words[wordIndex] }}</span>
                  </span>
                  <span class="h-[0.7em] w-[3px] bg-accent rounded-full ml-[2px] self-center" :class="isPaused ? 'animate-smooth-blink' : 'opacity-100'"></span>
                </span>
              </span>
            </span>
          </h1>

          <p class="hero-sub font-medium leading-relaxed max-w-2xl mb-12">
            I bridge <span class="text-main font-semibold">product UI/UX</span> and <span class="text-main font-semibold">Nuxt &amp; Vue engineering</span> — shipping shippable, performant experiences that move as fast as the teams that use them.
          </p>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16 w-full sm:w-auto">
            <SharedButton
              tag="a"
              href="https://cal.com/md-mohin-uddin-8gpn95/30min"
              target="_blank"
              variant="primary"
              size="lg"
              class="h-12 px-8 rounded-full w-full sm:w-auto"
              hover-text="Talk for 30 min"
            >
              Book a call
              <template #right>
                <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
              </template>
            </SharedButton>
            <a href="#case-studies" class="hero-ghost-btn" @click="smoothJump($event, 'case-studies')">
              <span>See selected work</span>
              <Icon name="lucide:arrow-down" class="h-4 w-4 opacity-60" />
            </a>
          </div>

          <!-- Proof row -->
          <div class="w-full mt-4 pt-10 border-t border-glass">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
              <div class="flex flex-col">
                <span class="text-main text-3xl font-semibold tracking-tight serif-font">7 yrs</span>
                <span class="text-soft text-sm mt-1">leading product design</span>
              </div>
              <div class="flex flex-col">
                <span class="text-main text-3xl font-semibold tracking-tight serif-font">24+</span>
                <span class="text-soft text-sm mt-1">products shipped</span>
              </div>
              <div class="col-span-2 md:col-span-2 flex items-center gap-5 overflow-hidden">
                <span class="text-muted text-sm shrink-0">Trusted by</span>
                <div class="flex-1 overflow-hidden relative">
                  <div class="flex gap-10 animate-ticker">
                    <div v-for="i in 2" :key="i" class="flex gap-10 shrink-0">
                      <span v-for="l in logos" :key="l.name + i" class="text-soft text-sm font-medium whitespace-nowrap">{{ l.name }}</span>
                    </div>
                  </div>
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

// 2.6s cycle: 650ms reveal + 1300ms hold + 650ms retract
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
      }, 650)
    }, 1300)
  }, 650)
}

onMounted(() => {
  setTimeout(cycleReveal, 400)
})

const smoothJump = (e: Event, id: string) => {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
}

const logos = [
  { name: 'AppsCode' },
  { name: 'KubeDB' },
  { name: 'Stash' },
  { name: 'ByteBuilders' },
  { name: 'CloudSoft' },
]
</script>

<style scoped>
.hero-enter { animation: slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes smooth-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
}
.animate-smooth-blink { animation: smooth-blink 0.9s ease-in-out infinite; }

.hero-title {
  font-size: clamp(2.25rem, 8.5vw, 5.25rem);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.035em;
}

.hero-sub {
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  color: var(--text-soft);
  letter-spacing: -0.005em;
}

.hero-ghost-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  height: 48px;
  padding: 0 1.75rem;
  border-radius: 9999px;
  border: 1px solid var(--border-glass);
  color: var(--text-soft);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}
.hero-ghost-btn:hover {
  color: var(--text-main);
  border-color: var(--text-soft);
  background: var(--bg-panel);
}

.animate-ticker { animation: ticker 30s linear infinite; width: max-content; }
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-glow-slow { animation: glow 8s ease-in-out infinite alternate; }
.animate-glow-reverse { animation: glow 10s ease-in-out infinite alternate-reverse; }
@keyframes glow {
  from { transform: translate(0, 0) scale(1); opacity: 0.4; }
  to { transform: translate(20px, 20px) scale(1.08); opacity: 0.6; }
}
</style>
