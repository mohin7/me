<template>
  <header 
    class="fixed left-0 right-0 top-0 z-[60] px-3 sm:px-6 lg:px-8 pt-3 md:pt-6 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
    :style="{ transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-120%)' }"
  >
    <!-- System Progress Horizon -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-8 pointer-events-none">
       <div class="h-[2px] w-full bg-accent/5 overflow-hidden rounded-full">
          <div class="h-full bg-accent transition-all duration-300 ease-out shadow-[0_0_10px_var(--accent)]" :style="{ width: `${scrollProgress}%` }"></div>
       </div>
    </div>

    <nav class="navbar mx-auto flex w-full max-w-7xl items-center justify-between gap-2 md:gap-4 px-4 py-2 md:px-6 md:py-3 relative">

      <!-- Logo Signature -->
      <a href="#top" class="group flex items-center gap-2 md:gap-3 shrink-0">
        <div class="h-8 w-8 md:h-10 md:w-10 bg-gradient-to-br from-accent to-accent/80 text-accent-fg-fg flex items-center justify-center rounded-lg md:rounded-xl font-black italic serif-font text-lg md:text-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 border border-glass">M</div>
        <div class="flex flex-col">
          <span class="text-sm md:text-[0.9rem] font-black text-main leading-none tracking-tighter">mohin<span class="text-soft">.design</span></span>
          <span class="text-[0.5rem] md:text-[0.55rem] font-black text-muted mt-0.5 md:mt-1 uppercase tracking-[0.3em] opacity-60">Head of Design</span>
        </div>
      </a>

      <!-- Desktop Nav Matrix -->
      <div class="hidden lg:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          @click="scrollToSection($event, item.href)"
          class="nav-link flex items-center gap-2 group/nav"
        >
          <Icon v-if="item && item.icon" :name="item.icon" class="h-3 w-3 opacity-30 group-hover/nav:opacity-100 transition-opacity" /> {{ item.label }}
        </a>
      </div>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-4">

        <button type="button" class="theme-toggle" @click="toggleTheme" :aria-label="theme === 'dark' ? 'Light mode' : 'Dark mode'">
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-4 w-4" />
        </button>
        <div class="h-8 w-px bg-accent/10"></div>
        <a href="https://cal.com/md-mohin-uddin-8gpn95/30min" target="_blank" rel="noopener noreferrer" class="shimmer-btn group" @mouseenter="isProjectHovered = true" @mouseleave="isProjectHovered = false"><div class="relative z-10 h-[1.6em] overflow-hidden flex flex-col items-center"><div class="transition-transform duration-500 group-hover:-translate-y-1/2 flex flex-col items-center"><span class="h-[1.6em] flex items-center justify-center gap-2 whitespace-nowrap">Start Project <Icon name="lucide:arrow-right" class="h-3 w-3" /></span><span class="h-[1.6em] flex items-center justify-center gap-2 italic text-accent-fg">Go Live <Icon name="lucide:zap" class="h-3 w-3" /></span></div></div><div class="shimmer-bg"></div></a>
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

    <!-- Mobile Menu Matrix (Teleported for absolute isolation) -->
    <Teleport to="body">
      <Transition name="menu-fade">
        <div v-if="isMobileMenuOpen" 
             class="mobile-menu-overlay fixed inset-0 z-[200] bg-page flex flex-col p-6 sm:p-10 overflow-hidden"
             :class="themeClass"
        >
          
          <!-- Menu Top Bar -->
          <div class="flex items-center justify-between mb-16">
             <div class="flex items-center gap-3">
                <div class="h-10 w-10 bg-accent text-accent-fg-fg flex items-center justify-center rounded-xl font-black italic serif-font text-xl">M</div>
                <span class="text-[0.9rem] font-black text-main leading-none tracking-tighter">Mohin<span class="text-soft">.design</span></span>
             </div>
             <button @click="isMobileMenuOpen = false" class="h-12 w-12 rounded-full border border-glass flex items-center justify-center bg-accent/5 text-main">
                <Icon name="lucide:x" class="h-6 w-6" />
             </button>
          </div>

          <!-- Nav Links Grid -->
          <div class="flex flex-col gap-1 mt-4">
            <a
              v-for="(item, idx) in navItems"
              :key="`m-${item.label}`"
              :href="item.href"
              @click="scrollToSection($event, item.href)"
              class="group relative block"
            >
              <div class="flex items-center py-4 border-b border-glass/40">
                <span class="text-3xl sm:text-4xl font-extrabold tracking-tight text-main group-hover:text-accent transition-colors duration-300">
                  {{ item.label }}
                </span>
              </div>
            </a>
          </div>

          <!-- Mobile Menu Footer -->
          <div class="mt-auto pt-12 space-y-8">
            <SharedButton tag="a" href="#contact" variant="primary" size="lg" fullWidth @click="isMobileMenuOpen = false">
              Start a Conversation
            </SharedButton>
            
            <div class="flex items-center justify-between border-t border-glass pt-8">
               <div class="flex gap-4">
                  <span class="text-muted text-[0.6rem] font-bold uppercase tracking-widest">Twitter</span>
                  <span class="text-muted text-[0.6rem] font-bold uppercase tracking-widest">LinkedIn</span>
               </div>
               <p class="text-muted text-[0.6rem] font-bold uppercase tracking-widest opacity-40 text-right">© 2026 MD MOHIN UDDIN</p>
            </div>
          </div>

        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isMobileMenuOpen = ref(false)
const isProjectHovered = ref(false)

const isNavbarVisible = ref(true)
const { theme, toggleTheme } = useTheme()

const themeClass = computed(() => theme.value === 'dark' ? 'dark' : 'light')

let lastScrollY = 0
const scrollThreshold = 10

const navItems = [
  { label: 'Strategy', href: '/#strategic-advantage', icon: 'lucide:binary' },
  { label: 'Methodology', href: '/#process', icon: 'lucide:workflow' },
  { label: 'Work', href: '/#case-studies', icon: 'lucide:projector' },
  { label: 'Experience', href: '/#experience', icon: 'lucide:badge-check' },
  { label: 'Investment', href: '/#packages', icon: 'lucide:bar-chart-3' },
]

const scrollProgress = ref(0)

const handleScroll = (e: any) => {
  const currentY = e.detail || 0
  
  // Update Progress
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  if (scrollable > 0) {
    scrollProgress.value = (currentY / scrollable) * 100
  }
  
  // Prevent hiding when mobile menu is open
  if (isMobileMenuOpen.value) {
    isNavbarVisible.value = true
    return
  }
  
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

const route = useRoute()
const router = useRouter()

const scrollToSection = (e: Event, href: string) => {
  if (route.path !== '/') {
    // If we are on a different page, just let the link handle it (which will navigate to /#id)
    // or manually push if preferred. Let's redirect to home with hash
    isMobileMenuOpen.value = false
    return 
  }

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
  background: rgba(var(--accent-rgb), 0.05);
}

.menu-toggle:hover { color: var(--text-main); background: var(--bg-soft); }

.shimmer-btn {
  white-space: nowrap;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  height: 40px;
  border-radius: 9999px;
  background: var(--text-main);
  color: var(--accent-fg);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: capitalize;
  letter-spacing: 0.05em;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid var(--border-glass);
}

.shimmer-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.shimmer-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgba(255, 255, 255, 0.2), 
    transparent
  );
  transform: translateX(-100%);
  transition: none;
}

.shimmer-btn:hover .shimmer-bg {
  transform: translateX(100%);
  transition: transform 0.8s ease-in-out;
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

.whatsapp-btn-header, .whatsapp-btn-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #25D366;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.whatsapp-btn-header:hover, .whatsapp-btn-mobile:hover {
  transform: scale(1.1) rotate(6deg);
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.menu-fade-enter-active, .menu-fade-leave-active { transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.menu-fade-enter-from, .menu-fade-leave-to { opacity: 0; transform: translateY(-20px); }
</style>
