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
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@1,900&display=swap');

/* ── Core Scroll Architecture ── */
html, body {
  margin: 0; padding: 0;
  overflow-x: hidden;
  background: var(--bg-page);
}

/* ── Kinetic Reveal System ── */
.reveal {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

.reveal.is-revealed {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

/* Stagger Helpers */
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

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
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
}

.light {
  --bg-page: #F9FAFB;
  --bg-panel: #FFFFFF;
  --bg-panel-strong: #F3F4F6;
  --bg-soft: #F3F4F6;
  --text-main: #0A0A0A;
  --text-soft: #52525B;
  --text-muted: #A1A1AA;
  --border-subtle: rgba(0,0,0,0.06);
  --border-glass: rgba(0,0,0,0.06);
  --bg-glass: rgba(255,255,255,0.1);
  --accent-rgb: 17, 17, 17;
  --accent-spotlight: rgba(var(--accent-rgb), 0.03);
  --accent: #111111;
  --accent-fg: #FFFFFF; --hover-brightness: 1.1;
}

.dark {
  --bg-page: #080808;
  --bg-panel: #0B0B0B;
  --bg-panel-strong: #1A1A1A;
  --bg-soft: #181818;
  --text-main: #FAFAFA;
  --text-soft: #A1A1AA;
  --text-muted: #71717A;
  --border-subtle: #1C1C22;
  --border-glass: rgba(255,255,255,0.08);
  --bg-glass: rgba(10,10,12,0.15);
  --accent-rgb: 200, 210, 255;
  --accent-spotlight: rgba(var(--accent-rgb), 0.05);
  --accent: #FFFFFF;
  --accent-fg: #111111; --hover-brightness: 0.9; --specular: inset 0 1px 0 0 rgba(255,255,255,0.02);
}

/* ── Global Section Standards ── */
.dark .border-glass {
  border-color: var(--border-glass);
}
.dark .border-glass:hover {
  border-color: rgba(var(--accent-rgb), 0.12) !important;
}

.section-label {
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-soft);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 768px) {
.dark .border-glass {
  border-color: var(--border-glass);
}
.dark .border-glass:hover {
  border-color: rgba(var(--accent-rgb), 0.12) !important;
}

  .section-label {
    letter-spacing: 0.4em;
    gap: 0.75rem;
  }
}

.section-label::before {
  content: '';
  display: block;
  height: 1px;
  width: 2rem;
  background: currentColor;
  opacity: 0.2;
  @apply md:block hidden;
}

/* ── Utilities ── */
.text-main { color: var(--text-main); }
.text-soft { color: var(--text-soft); }
.text-muted { color: var(--text-muted); }
.bg-page { background: var(--bg-page); }
.serif-font { font-family: 'Playfair Display', serif; }

/* ── Transitions ── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: scale(0.8) translateY(20px); }
</style>