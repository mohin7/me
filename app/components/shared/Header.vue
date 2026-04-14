<template>
  <header 
    class="fixed left-0 right-0 top-0 z-[60] px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
    :style="{ transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-120%)' }"
  >
    <nav class="navbar mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3">

      <!-- Logo Signature -->
      <a href="#top" class="group flex items-center gap-3 shrink-0">
        <div class="h-10 w-10 bg-accent text-accent-fg flex items-center justify-center rounded-xl font-black italic serif-font text-xl transition-transform group-hover:rotate-12">M</div>
        <div class="flex flex-col">
          <span class="text-[0.9rem] font-black text-main leading-none tracking-tighter">Mohin<span class="text-soft">.design</span></span>
          <span class="text-[0.55rem] font-black text-muted mt-1 uppercase tracking-[0.3em] opacity-60">Executive Lead</span>
        </div>
      </a>

      <!-- Desktop Nav Matrix -->
      <div class="hidden lg:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          @click="scrollToSection($event, item.href)"
          class="nav-link"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-4">
        <button type="button" class="theme-toggle" @click="toggleTheme" :aria-label="theme === 'dark' ? 'Light mode' : 'Dark mode'">
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-4 w-4" />
        </button>
        <div class="h-8 w-px bg-accent/10"></div>
        <SharedButton tag="a" href="#contact" variant="primary" size="sm" class="px-6 h-10 rounded-full font-bold">
          Start Project
        </SharedButton>
      </div>

      <!-- Mobile Actions -->
      <div class="flex lg:hidden items-center gap-2">
        <button type="button" class="theme-toggle" @click="toggleTheme" :aria-label="theme === 'dark' ? 'Light mode' : 'Dark mode'">
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-4 w-4" />
        </button>
        <button type="button" class="menu-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen" :aria-expanded="isMobileMenuOpen" aria-label="Menu">
          <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="h-5 w-5" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Matrix -->
    <Transition name="menu-fade">
      <div v-if="isMobileMenuOpen" class="mobile-menu-overlay fixed inset-0 z-40 bg-page/95 backdrop-blur-2xl lg:hidden flex flex-col p-8 pt-24">
        <div class="space-y-4">
          <a
            v-for="item in navItems"
            :key="`m-${item.label}`"
            :href="item.href"
            @click="scrollToSection($event, item.href)"
            class="block text-4xl font-black tracking-tighter text-main hover:text-accent transition-colors py-4 border-b border-accent/5"
          >
            {{ item.label }}
          </a>
        </div>
        <div class="mt-auto pb-12">
          <SharedButton tag="a" href="#contact" variant="primary" size="lg" fullWidth @click="isMobileMenuOpen = false">
            Start a Conversation
          </SharedButton>
          <div class="mt-12 text-center">
             <p class="text-muted text-[0.6rem] font-bold uppercase tracking-[0.4em]">© {{ new Date().getFullYear() }} MD MOHIN UDDIN</p>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isNavbarVisible = ref(true)
const { theme, toggleTheme } = useTheme()

let lastScrollY = 0
const scrollThreshold = 10

const navItems = [
  { label: 'Strategy', href: '#strategic-advantage' },
  { label: 'Methodology', href: '#process' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Experience', href: '#experience' },
  { label: 'Investment', href: '#packages' },
]

const handleScroll = (e: any) => {
  const currentY = e.detail || 0
  
  // Show at very top
  if (currentY < 50) {
    isNavbarVisible.value = true
    lastScrollY = currentY
    return
  }

  // Directional logic
  const diff = currentY - lastScrollY
  if (Math.abs(diff) < 15) return

  if (diff > 0) {
    // Scrolling Down
    isNavbarVisible.value = false
  } else {
    // Scrolling Up
    isNavbarVisible.value = true
  }
  
  lastScrollY = currentY
}

const scrollToSection = (e: Event, href: string) => {
  e.preventDefault()
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('smooth-scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('smooth-scroll', handleScroll)
})
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }

.navbar {
  background: var(--bg-glass);
  backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid var(--border-glass);
  border-radius: 9999px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
}

.nav-link {
  padding: 8px 18px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-soft);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}
.nav-link:hover {
  color: var(--text-main);
  background: white;
}
.theme-dark .nav-link:hover {
  background: rgba(255,255,255,0.05);
}

.theme-toggle, .menu-toggle {
  height: 40px; width: 40px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  border-radius: 50%;
  color: var(--text-soft);
  transition: all 0.2s;
  cursor: pointer;
}
.theme-toggle:hover { color: var(--text-main); background: var(--bg-soft); }

.menu-fade-enter-active, .menu-fade-leave-active { transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.menu-fade-enter-from, .menu-fade-leave-to { opacity: 0; transform: translateY(-20px); }
</style>
