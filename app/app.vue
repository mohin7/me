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
  ogDescription: 'Engineering executive-grade UI/UX for complex cloud ecosystems and high-concurrency platforms. specialized in developer-centric product strategy.',
  ogImage: 'https://mohin.design/og-banner.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Md Mohin Uddin — Leading the Design of Kubernetes-Native Platforms',
  twitterDescription: 'Surgical design execution for enterprise cloud infrastructure. From Figma to high-performance Nuxt 3 architecture.',
  keywords: 'Kubernetes UX, Cloud Infrastructure Design, Product Design Engineering, Head of Design AppsCode, Nuxt.js Expert, Vue.js Specialist, SaaS Architecture, KubeDB UX',
})

// ── Fixed Wrapper Smooth Scroll ──
const smoothWrapper = ref<HTMLElement | null>(null)
const virtualHeight = ref(0)
const currentOffset = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)
const scrollSpeed = 0.14
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
    // On touch, send native scroll position for UI components like Header
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
  // Simple touch detection
  isTouchDevice.value = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
  
  if (!isTouchDevice.value) {
    updateHeight()
    setTimeout(updateHeight, 500)
    setTimeout(updateHeight, 1500)
    window.addEventListener('resize', updateHeight)
  }
  
  // ── Scroll Reveal System ──
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        // Optional: unobserve after reveal for performance
        // revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
  
  rafId = requestAnimationFrame(smoothLoop)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('resize', updateHeight)
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap');

/* ── Core Scroll Architecture ── */
html, body {
  margin: 0; padding: 0;
  overflow-x: hidden;
  background: var(--bg-page);
}

/* ── Kinetic Reveal System ── */
.reveal {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
  transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

.reveal.is-revealed {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

/* Stagger Helpers */
.reveal-delay-1 { transition-delay: 0.06s; }
.reveal-delay-2 { transition-delay: 0.12s; }
.reveal-delay-3 { transition-delay: 0.18s; }

html::-webkit-scrollbar { display: none; }
html { scrollbar-width: none; -ms-overflow-style: none; }

/* ── Native Scrollbar Styling (Fallback) ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(128, 128, 128, 0.2); border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: rgba(128, 128, 128, 0.4); }

.smooth-wrapper {
  position: relative;
  width: 100%;
  will-change: transform;
  backface-visibility: hidden;
}

.smooth-wrapper.is-smooth {
  position: fixed;
  top: 0; left: 0;
}

.scroll-spacer { width: 100%; pointer-events: none; }

/* ── Original Theme System ── */
.site-shell {
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-main);
  transition: background-color 300ms ease, color 300ms ease;
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
  letter-spacing: -0.015em;
  -webkit-font-smoothing: antialiased;
  caret-color: var(--accent);
}

.light {
  --bg-page: oklch(0.985 0.005 75);
  --bg-panel: oklch(1 0 0);
  --bg-panel-strong: oklch(0.965 0.008 75);
  --bg-soft: oklch(0.955 0.008 75);
  --text-main: oklch(0.17 0.01 75);
  --text-soft: oklch(0.42 0.012 75);
  --text-muted: oklch(0.62 0.01 75);
  --border-subtle: oklch(0 0 0 / 0.06);
  --border-glass: oklch(0 0 0 / 0.07);
  --bg-glass: oklch(1 0 0 / 0.55);
  --accent-rgb: 204, 62, 32;
  --accent-spotlight: oklch(0.52 0.22 28 / 0.05);
  --accent: oklch(0.52 0.22 28);
  --accent-soft: oklch(0.52 0.22 28 / 0.08);
  --accent-fg: oklch(0.985 0.005 75);
  --hover-brightness: 1.05;
}

.dark {
  --bg-page: oklch(0.15 0.008 75);
  --bg-panel: oklch(0.19 0.01 75);
  --bg-panel-strong: oklch(0.22 0.012 75);
  --bg-soft: oklch(0.21 0.01 75);
  --text-main: oklch(0.97 0.005 75);
  --text-soft: oklch(0.72 0.012 75);
  --text-muted: oklch(0.52 0.012 75);
  --border-subtle: oklch(1 0 0 / 0.08);
  --border-glass: oklch(1 0 0 / 0.08);
  --bg-glass: oklch(0.19 0.01 75 / 0.55);
  --accent-rgb: 244, 120, 88;
  --accent-spotlight: oklch(0.72 0.18 32 / 0.08);
  --accent: oklch(0.72 0.18 32);
  --accent-soft: oklch(0.72 0.18 32 / 0.12);
  --accent-fg: oklch(0.15 0.008 75);
  --hover-brightness: 0.95;
  --specular: inset 0 1px 0 0 oklch(1 0 0 / 0.03);
}

/* ── Global Section Standards ── */
.dark .border-glass {
  border-color: var(--border-glass);
}
.dark .border-glass:hover {
  border-color: rgba(var(--accent-rgb), 0.12) !important;
}

.section-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}

.section-label::before {
  content: '';
  display: block;
  height: 6px;
  width: 6px;
  border-radius: 999px;
  background: currentColor;
  opacity: 0.9;
}

/* ── Utilities ── */
.text-main { color: var(--text-main); }
.text-soft { color: var(--text-soft); }
.text-muted { color: var(--text-muted); }
.bg-page { background: var(--bg-page); }
.serif-font {
  font-family: 'DM Serif Display', ui-serif, Georgia, serif;
  letter-spacing: -0.015em;
  font-weight: 400;
}
.mono-font { font-family: 'JetBrains Mono', ui-monospace, monospace; }

/* ── Selection ── */
::selection { background: var(--accent); color: var(--accent-fg); }

/* ── Transitions ── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: scale(0.8) translateY(20px); }
</style>