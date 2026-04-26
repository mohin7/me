<template>
  <div class="site-shell" :class="themeClass">
    <SharedHeader />
    
    <!-- Smooth Scroll Wrapper -->
    <!-- ── Dynamic Spotlight Node ── -->
    <div 
      v-if="!isTouchDevice"
      class="pointer-events-none fixed inset-0 z-[1] will-change-transform"
      :style="{ background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--accent-spotlight), transparent 80%)` }"
    ></div>

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
const virtualHeight = ref(0)
const currentOffset = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)
const scrollSpeed = 0.08
const isTouchDevice = ref(false)
let targetOffset = 0
let rafId: number | null = null

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

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
  if (isTouchDevice.value) {
    currentOffset.value = window.pageYOffset
    window.dispatchEvent(new CustomEvent('smooth-scroll', { detail: currentOffset.value }))
    rafId = requestAnimationFrame(smoothLoop)
    return
  }

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
  window.addEventListener('mousemove', handleMouseMove)
  isTouchDevice.value = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
  
  if (!isTouchDevice.value) {
    updateHeight()
    window.addEventListener('resize', updateHeight)
    // Mutation observer to handle dynamic content height changes
    const observer = new MutationObserver(updateHeight)
    observer.observe(document.body, { childList: true, subtree: true })
    smoothLoop()
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
  window.removeEventListener('resize', updateHeight)
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
  z-index: 2;
}

.is-smooth {
  pointer-events: auto;
}

.scroll-spacer {
  width: 100%;
  pointer-events: none;
}

.site-shell {
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-main);
  transition: background-color 300ms ease, color 300ms ease;
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
  caret-color: var(--accent);
}

/* ── Explicit Typographic Separation ── */
h1, h2, h3, h4, h5, h6, .display-font, .hero-title {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  font-weight: 800 !important;
  letter-spacing: -0.04em !important;
  line-height: 1.05;
  color: var(--text-main);
}

h1 { font-size: clamp(3.5rem, 12vw, 6.8rem); } /* φ^4 */
h2 { font-size: clamp(2.5rem, 8vw, 4.2rem); }  /* φ^3 */
h3 { font-size: clamp(1.5rem, 4vw, 1.6rem); }   /* φ^1 - Ideal for Card Titles */
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
  --accent-spotlight: hsla(240, 10%, 8%, 0.03);
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
  --accent-spotlight: hsla(0, 0%, 100%, 0.03);
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
</style>