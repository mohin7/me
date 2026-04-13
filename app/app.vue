<template>
  <div class="site-shell" :class="themeClass">
    <SharedHeader />
    
    <!-- Smooth Scroll Wrapper -->
    <div ref="smoothWrapper" class="smooth-wrapper">
      <main>
        <SectionsHeroSection />
        <SectionsStrategicAdvantage />
        <SectionsProcessSection />
        <SectionsCaseStudiesSection />
        <SectionsExperienceSection />
        <SectionsTestimonialsSection />
        <SectionsPackagesSection />
        <SectionsCTASection />
      </main>
      <SharedFooter />
    </div>

    <!-- Virtual Scroll Spacer -->
    <div :style="{ height: virtualHeight + 'px' }" class="scroll-spacer"></div>

    <!-- Back to Top System -->
    <Transition name="fade">
      <div v-if="currentOffset > 800" class="fixed bottom-12 right-12 z-[100]">
        <button @click="scrollToTop" class="h-14 w-14 rounded-full bg-accent text-accent-fg flex items-center justify-center border-2 border-accent/20 hover:scale-110 active:scale-95 transition-all duration-300 group">
          <Icon name="lucide:arrow-up" class="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, onUnmounted } from 'vue'

const { theme } = useTheme()
const themeClass = computed(() => theme.value === 'dark' ? 'theme-dark' : 'theme-light')

// ── Fixed Wrapper Smooth Scroll ──
const smoothWrapper = ref<HTMLElement | null>(null)
const virtualHeight = ref(0)
const currentOffset = ref(0)
const scrollSpeed = 0.08
let targetOffset = 0
let rafId: number | null = null

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const updateHeight = () => {
  if (smoothWrapper.value) virtualHeight.value = smoothWrapper.value.scrollHeight
}

const smoothLoop = () => {
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
  updateHeight()
  setTimeout(updateHeight, 500)
  setTimeout(updateHeight, 1500)
  rafId = requestAnimationFrame(smoothLoop)
  window.addEventListener('resize', updateHeight)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('resize', updateHeight)
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

html::-webkit-scrollbar { display: none; }
html { scrollbar-width: none; -ms-overflow-style: none; }

/* ── Native Scrollbar Styling (Fallback) ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(128, 128, 128, 0.2); border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: rgba(128, 128, 128, 0.4); }

.smooth-wrapper {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  will-change: transform;
  backface-visibility: hidden;
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

.theme-light {
  --bg-page: #F9FAFB;
  --bg-panel: #FFFFFF;
  --bg-panel-strong: #F3F4F6;
  --bg-soft: #F3F4F6;
  --text-main: #0A0A0A;
  --text-soft: #52525B;
  --text-muted: #A1A1AA;
  --border-subtle: rgba(0,0,0,0.06);
  --border-glass: rgba(0,0,0,0.05);
  --bg-glass: rgba(255,255,255,0.7);
  --accent: #111111;
  --accent-fg: #FFFFFF;
}

.theme-dark {
  --bg-page: #0A0A0A;
  --bg-panel: #121212;
  --bg-panel-strong: #1A1A1A;
  --bg-soft: #1A1A1A;
  --text-main: #FAFAFA;
  --text-soft: #A1A1AA;
  --text-muted: #71717A;
  --border-subtle: rgba(255,255,255,0.08);
  --border-glass: rgba(255,255,255,0.12);
  --bg-glass: rgba(10,10,10,0.8);
  --accent: #FFFFFF;
  --accent-fg: #111111;
}

/* ── Global Section Standards ── */
.section-label {
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: var(--text-soft);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-label::before {
  content: '';
  display: block;
  height: 1px;
  width: 2rem;
  background: currentColor;
  opacity: 0.2;
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