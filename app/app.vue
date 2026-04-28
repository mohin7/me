<template>
  <div class="site-shell" :class="[themeClass, { 'is-touch': isTouchDevice }]">
    <SharedHeader />
    
    <!-- Smooth Scroll Wrapper -->
    <!-- ── Liquid Bubble Cursor (Zero-Lag Core) ── -->
    <div v-if="!isTouchDevice" class="custom-cursor-container pointer-events-none fixed inset-0 z-[9999] overflow-hidden" :style="{ opacity: isCursorVisible ? 1 : 0 }">

      <!-- Lagged Bubble Aura / Focus Lens -->
      <div
        class="cursor-aura absolute rounded-full border border-accent/20 will-change-transform"
        :class="isHovering ? 'is-hovering' : ''"
      ></div>

      <!-- Zero-Lag Precision Core -->
      <div
        class="cursor-dot absolute rounded-full will-change-transform"
        :class="isHovering ? 'is-hovering' : ''"
      ></div>

      <!-- Click Spark Canvas -->
      <canvas ref="sparkCanvas" class="absolute inset-0 w-full h-full pointer-events-none" />
    </div>

    <div 
      ref="smoothWrapper" 
      class="smooth-wrapper"
      :class="{ 'is-smooth': !isTouchDevice }"
    >
      <NuxtPage />
      <SharedFooter />
    </div>

    <!-- Virtual Scroll Spacer -->
    <div :style="{ height: virtualHeight + 'px' }" class="scroll-spacer"></div>

    <!-- Back to Top System -->
    <Transition name="fade">
      <div v-if="currentOffset > 800" class="fixed bottom-12 right-12 z-[100]">
        <button 
          @click="scrollToTop" 
          class="relative h-14 w-14 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group active:scale-90"
          style="background: var(--bg-glass); backdrop-filter: blur(24px) saturate(150%); border: 1px solid var(--border-glass); box-shadow: inset 0 1px 1px 0 rgba(255,255,255,0.05), 0 20px 40px -10px rgba(0,0,0,0.3);"
        >
          <!-- Surface Sheen -->
          <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <Icon name="lucide:arrow-up" class="h-6 w-6 text-main group-hover:-translate-y-1 transition-transform relative z-10" />
          
          <!-- Liquid Core Glow -->
          <div class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </Transition>
    <!-- ── Aesthetic Layering ── -->
    <div class="pointer-events-none fixed inset-0 z-[999] opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    <div class="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, onUnmounted } from 'vue'

const { theme, applyTheme } = useTheme()
const themeClass = computed(() => theme.value === 'dark' ? 'dark' : 'light')

// ── SEO & Metadata Implementation ──
useSeoMeta({
  title: 'Md Mohin Uddin — Head of Design & AI Architect | Kubernetes & Cloud UX Specialist',
  ogTitle: 'Md Mohin Uddin — Design Lead & Architect for High-Scale Cloud Systems',
  description: 'Head of Design at AppsCode. Specializing in high-performance UI/UX for Kubernetes, Cloud Infrastructure, and Scalable SaaS Platforms. Directed design systems for KubeDB, KubeVault, and Stash. Expert in Nuxt 3 & Vue.js engineering.',
  ogDescription: 'Engineering executive-grade UI/UX for complex cloud ecosystems and high-concurrency platforms. Specialized in developer-centric product strategy.',
  ogImage: 'https://mohin.design/og-banner.png',
  twitterCard: 'summary_large_image',
})

// ── Fixed Wrapper Smooth Scroll ──
const smoothWrapper = ref<HTMLElement | null>(null)
const sparkCanvas = ref<HTMLCanvasElement | null>(null)
const virtualHeight = ref(0)
const currentOffset = ref(0)
const isHovering = ref(false)
const isCursorVisible = ref(false)

const scrollSpeed = 0.08
const isTouchDevice = ref(false)
let targetOffset = 0
let rafId: number | null = null
let hoverCheckFrame: number | null = null

// ── Click Spark System ──
interface Spark {
  x: number; y: number
  vx: number; vy: number
  life: number; maxLife: number
  size: number; color: string
}

let sparks: Spark[] = []
let sparkRaf: number | null = null

const SPARK_COLORS_DARK = ['#ffffff', '#e2e8f0', '#cbd5e1', '#94a3b8']
const SPARK_COLORS_LIGHT = ['#18181b', '#3f3f46', '#52525b', '#71717a']

const getSparkColors = () =>
  document.documentElement.classList.contains('dark') ? SPARK_COLORS_DARK : SPARK_COLORS_LIGHT

const spawnSparks = (x: number, y: number) => {
  const colors = getSparkColors()
  const count = 12 + Math.floor(Math.random() * 6)
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8
    const speed = 1.5 + Math.random() * 3.5
    sparks.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      maxLife: 0.6 + Math.random() * 0.4,
      size: 1.5 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)] ?? '#ffffff'
    })
  }
  if (!sparkRaf) tickSparks()
}

const tickSparks = () => {
  const canvas = sparkCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  sparks = sparks.filter(s => s.life > 0)
  for (const s of sparks) {
    s.x += s.vx
    s.y += s.vy
    s.vy += 0.12  // gravity
    s.vx *= 0.96  // friction
    s.life -= 0.03 / s.maxLife

    const alpha = Math.max(0, s.life)
    ctx.globalAlpha = alpha * alpha
    ctx.fillStyle = s.color
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.size * alpha, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.globalAlpha = 1
  sparkRaf = sparks.length > 0 ? requestAnimationFrame(tickSparks) : null
}

const handleClick = (e: MouseEvent) => {
  spawnSparks(e.clientX, e.clientY)
}

const resizeSparkCanvas = () => {
  if (!sparkCanvas.value) return
  sparkCanvas.value.width = window.innerWidth
  sparkCanvas.value.height = window.innerHeight
}

const handleMouseMove = (e: MouseEvent) => {
  document.documentElement.style.setProperty('--m-x', `${e.clientX}px`)
  document.documentElement.style.setProperty('--m-y', `${e.clientY}px`)
  isCursorVisible.value = true

  if (hoverCheckFrame) return
  hoverCheckFrame = requestAnimationFrame(() => {
    const target = e.target as HTMLElement
    isHovering.value = !!target.closest('a, button, .hover-lift, .cs-nav-btn, [role="button"]')
    hoverCheckFrame = null
  })
}

const handleMouseLeave = () => { isCursorVisible.value = false }
const handleMouseEnter = () => { isCursorVisible.value = true }

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const updateHeight = () => {
  if (smoothWrapper.value && !isTouchDevice.value) {
    virtualHeight.value = smoothWrapper.value.scrollHeight
  } else {
    virtualHeight.value = 0
  }
}

const smoothLoop = () => {
  if (isTouchDevice.value) return;

  targetOffset = window.pageYOffset
  currentOffset.value += (targetOffset - currentOffset.value) * scrollSpeed
  
  if (smoothWrapper.value) {
    // @ts-ignore
    window.__SMOOTH_SCROLL_OFFSET__ = currentOffset.value
    window.dispatchEvent(new CustomEvent('smooth-scroll', { detail: currentOffset.value }))
    smoothWrapper.value.style.transform = `translate3d(0, -${currentOffset.value.toFixed(3)}px, 0)`
  }
  rafId = requestAnimationFrame(smoothLoop)
}

onMounted(() => {
  // Enhanced Touch Detection
  const checkTouch = () => {
    isTouchDevice.value = window.matchMedia('(pointer: coarse)').matches || 
                         'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0
  }
  checkTouch()

  if (!isTouchDevice.value) {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    window.addEventListener('resize', resizeSparkCanvas)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)
    resizeSparkCanvas()
    updateHeight()
    window.addEventListener('resize', updateHeight)
    // Mutation observer to handle dynamic content height changes
    const observer = new MutationObserver(updateHeight)
    observer.observe(document.body, { childList: true, subtree: true })
    smoothLoop()
  } else {
    // Native scroll tracking for mobile
    window.addEventListener('scroll', () => {
      currentOffset.value = window.pageYOffset
      window.dispatchEvent(new CustomEvent('smooth-scroll', { detail: currentOffset.value }))
    }, { passive: true })
  }

  // Scroll-triggered reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })

  // Observe all reveal elements (including dynamically added ones)
  const observeReveals = () => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
      revealObserver.observe(el)
    })
  }
  observeReveals()
  // Re-observe when DOM changes
  const revealMutationObserver = new MutationObserver(observeReveals)
  revealMutationObserver.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('click', handleClick)
  window.removeEventListener('resize', resizeSparkCanvas)
  document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
  document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
  window.removeEventListener('resize', updateHeight)
  if (sparkRaf) cancelAnimationFrame(sparkRaf)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800;900&display=swap');

/* ── Core Scroll Architecture ── */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: var(--bg-page);
  -webkit-font-smoothing: antialiased;
}

.smooth-wrapper {
  width: 100%;
  will-change: transform;
  z-index: 2;
}

.is-smooth {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: auto;
}

.scroll-spacer {
  width: 100%;
  pointer-events: none;
}

.site-shell {
  min-height: 100vh;
  cursor: auto; 
  background: var(--bg-page);
  color: var(--text-main);
  transition: background-color 300ms ease, color 300ms ease;
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
  caret-color: var(--accent);
}

.site-shell:not(.is-touch) {
  cursor: none;
}

@media (pointer: coarse) {
  .custom-cursor-container {
    display: none !important;
  }
  .site-shell {
    cursor: auto !important;
  }
}

/* ── Explicit Typographic Separation ── */
.site-shell:not(.is-touch) h1, 
.site-shell:not(.is-touch) h2, 
.site-shell:not(.is-touch) h3, 
.site-shell:not(.is-touch) h4, 
.site-shell:not(.is-touch) h5, 
.site-shell:not(.is-touch) h6, 
.site-shell:not(.is-touch) .display-font, 
.site-shell:not(.is-touch) .hero-title, 
.site-shell:not(.is-touch) a, 
.site-shell:not(.is-touch) button, 
.site-shell:not(.is-touch) [role="button"] {
  cursor: none !important;
}
h1, h2, h3, h4, h5, h6, .display-font, .hero-title, a, button, [role="button"] {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-weight: 800 !important;
  letter-spacing: -0.04em !important;
  line-height: 1.05;
  color: var(--text-main);
}

h1 { font-size: clamp(3.5rem, 12vw, 6.8rem); } /* φ^4 */
h2 {
  font-size: clamp(1.85rem, 6vw, 4.2rem);
}

h3 {
  font-size: clamp(1.4rem, 4vw, 1.6rem);
}   /* φ^1 - Ideal for Card Titles */
h4 { font-size: clamp(1.1rem, 3vw, 1.25rem); }  /* Base+ */

p, .prose {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  letter-spacing: -0.01em;
  line-height: 1.7;
  font-weight: 400;
}

.light {
  /* Obsidian & Ether: High-Authority Monochromatic */
  --bg-page: hsl(0, 0%, 99%);           /* Crisp White */
  --bg-panel: hsl(0, 0%, 100%);
  --bg-glass: hsla(0, 0%, 100%, 0.618);
  --bg-soft: hsl(240, 5%, 94%);         /* φ step */
  --text-main: hsl(240, 10%, 8%);       /* φ step (Deep Obsidian) */
  --text-soft: hsl(240, 8%, 38%);       /* φ step */
  --text-muted: hsl(240, 5%, 62%);      /* φ step */
  
  --accent: hsl(240, 10%, 8%);          /* Obsidian Accent */
  --accent-fg: hsl(0, 0%, 100%);
  --accent-spotlight: hsla(240, 10%, 8%, 0.06);
  --border-glass: hsla(240, 10%, 8%, 0.09);
  
  --card-shadow: 0 10px 40px -10px hsla(0, 0%, 0%, 0.03);
  --section-shadow: 0 20px 60px -15px hsla(0, 0%, 0%, 0.05);
}

.dark {
  /* Obsidian & Ether: High-Authority Monochromatic */
  --bg-page: hsl(240, 10%, 3.5%);      /* Deep Space Obsidian */
  --bg-panel: hsl(240, 8%, 7%);        /* φ step */
  --bg-glass: hsla(240, 8%, 12%, 0.618);
  --bg-soft: hsl(240, 6%, 15%);        /* φ step */
  --text-main: hsl(0, 0%, 98%);        /* Ether White */
  --text-soft: hsl(240, 5%, 72%);       /* φ step */
  --text-muted: hsl(240, 5%, 62%);      /* φ step */
  
  --accent: hsl(0, 0%, 100%);          /* Pure Light Accent */
  --accent-fg: hsl(240, 10%, 3.5%);
  --accent-spotlight: hsla(0, 0%, 100%, 0.07);
  --border-glass: hsla(0, 0%, 100%, 0.09);
  
  --card-shadow: 0 10px 50px -10px hsla(0, 0%, 0%, 0.382);
  --section-shadow: 0 30px 100px -20px hsla(0, 0%, 0%, 0.618);
}

:root {
  --accent: #18181B;
  --inner-glow: inset 0 1px 1px 0 rgba(255,255,255,0.05);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.section-label {
  @apply text-[0.65rem] font-black uppercase tracking-[0.4em];
  color: color-mix(in srgb, var(--accent), transparent 30%);
}

/* ── Global Scroll Reveal Animations ── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* ── Micro-interaction Utilities ── */
.hover-lift {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 20px 40px -12px hsla(0, 0%, 0%, 0.12), var(--inner-glow) !important;
  border-color: hsla(0, 0%, 100%, 0.1) !important;
}

/* ── Section Divider ── */
.section-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border-glass), transparent);
}

/* ── Custom Cursor ── */
.cursor-aura {
  width: 2rem;
  height: 2rem;
  background: color-mix(in srgb, var(--accent) 5%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
  transform: translate3d(var(--m-x), var(--m-y), 0) translate(-50%, -50%);
  transition:
    transform 0.18s cubic-bezier(0.23, 1, 0.32, 1),
    width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.4s,
    border-color 0.4s;
}
.cursor-aura.is-hovering {
  width: 6rem;
  height: 6rem;
  background: color-mix(in srgb, var(--accent) 2%, transparent);
  border-color: color-mix(in srgb, var(--accent) 40%, transparent);
  box-shadow: 0 8px 32px -8px color-mix(in srgb, var(--accent) 20%, transparent);
}

.cursor-dot {
  width: 0.375rem;
  height: 0.375rem;
  background: var(--accent);
  opacity: 0.8;
  transform: translate3d(var(--m-x), var(--m-y), 0) translate(-50%, -50%);
  transition: opacity 0.2s, transform 0s;
}
.cursor-dot.is-hovering {
  opacity: 0;
}
</style>