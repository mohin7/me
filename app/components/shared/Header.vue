<template>
  <header 
    class="fixed left-0 right-0 top-0 z-[60] px-3 sm:px-6 lg:px-8 pt-3 md:pt-6 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
    :style="{ transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-120%)' }"
  >

    <nav class="navbar mx-auto flex w-full max-w-7xl items-center justify-between gap-4 md:gap-6 px-6 py-3 md:px-10 md:py-4 relative">

      <!-- Logo Signature -->
      <SharedLogo />

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
      <div class="hidden md:flex items-center gap-3">
        <!-- Social Ecosystem (Pill) -->
        <div class="flex items-center h-10 px-1.5 rounded-full border border-accent/10 bg-accent/[0.02] backdrop-blur-sm">
          <a href="https://www.linkedin.com/in/mohin7/" target="_blank" rel="noopener" 
             class="group/icon relative flex items-center justify-center h-8 w-8 rounded-full text-soft hover:text-accent hover:bg-accent/15 transition-all duration-300 active:scale-90">
            <Icon name="lucide:linkedin" class="h-3.5 w-3.5 group-hover/icon:scale-125 transition-transform duration-300" />
            <!-- Tooltip -->
            <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-accent text-accent-fg text-[0.6rem] font-black uppercase tracking-widest opacity-0 group-hover/icon:opacity-100 group-hover/icon:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap z-[100] shadow-xl">LinkedIn</span>
          </a>
          <a href="https://github.com/mohin7" target="_blank" rel="noopener" 
             class="group/icon relative flex items-center justify-center h-8 w-8 rounded-full text-soft hover:text-accent hover:bg-accent/15 transition-all duration-300 active:scale-90">
            <Icon name="lucide:github" class="h-3.5 w-3.5 group-hover/icon:scale-125 transition-transform duration-300" />
            <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-accent text-accent-fg text-[0.6rem] font-black uppercase tracking-widest opacity-0 group-hover/icon:opacity-100 group-hover/icon:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap z-[100] shadow-xl">GitHub</span>
          </a>
          <a href="https://dribbble.com/mohin7" target="_blank" rel="noopener" 
             class="group/icon relative flex items-center justify-center h-8 w-8 rounded-full text-soft hover:text-accent hover:bg-accent/15 transition-all duration-300 active:scale-90">
            <Icon name="lucide:dribbble" class="h-3.5 w-3.5 group-hover/icon:scale-125 transition-transform duration-300" />
            <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-accent text-accent-fg text-[0.6rem] font-black uppercase tracking-widest opacity-0 group-hover/icon:opacity-100 group-hover/icon:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap z-[100] shadow-xl">Dribbble</span>
          </a>
        </div>

        <div class="h-4 w-px bg-accent/10"></div>
        
        <!-- Theme Utility -->
        <button type="button" 
                class="group/theme relative flex items-center justify-center h-10 w-10 rounded-full border border-accent/10 bg-accent/[0.02] text-soft hover:text-accent hover:bg-accent/15 hover:border-accent/20 transition-all duration-300 active:scale-90" 
                @click="toggleTheme" 
                :aria-label="theme === 'dark' ? 'Light mode' : 'Dark mode'">
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-4 w-4 group-hover/theme:scale-125 transition-transform duration-300" />
          <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-accent text-accent-fg text-[0.6rem] font-black uppercase tracking-widest opacity-0 group-hover/theme:opacity-100 group-hover/theme:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap z-[100] shadow-xl">{{ theme === 'dark' ? 'Light' : 'Dark' }}</span>
        </button>

        <div class="h-4 w-px bg-accent/10"></div>

        <!-- Primary Action -->
        <SharedButton 
          tag="a" 
          href="/img/uiux-specialist.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          variant="primary"
          size="lg"
          class="h-10 px-8 rounded-full"
          hover-text="Download"
        >
          Resume
          <template #right>
            <Icon name="lucide:file-text" class="h-3.5 w-3.5" />
          </template>
          <template #hoverRight>
            <Icon name="lucide:download" class="h-3.5 w-3.5" />
          </template>
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

    <!-- Mobile Menu Matrix (Teleported for absolute isolation) -->
    <Teleport to="body">
      <Transition name="menu-fade">
        <div v-if="isMobileMenuOpen" 
             class="mobile-menu-overlay fixed inset-0 z-[200] bg-page flex flex-col p-6 sm:p-10 overflow-hidden"
             :class="themeClass"
        >
          
          <!-- Menu Top Bar -->
          <div class="flex items-center justify-between mb-16">
             <SharedLogo :link="false" subtitle="" />
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
            <SharedButton 
              tag="a" 
              href="/img/uiux-specialist.pdf" 
              target="_blank" 
              variant="primary" 
              size="lg" 
              fullWidth 
              hover-text="Download"
              @click="isMobileMenuOpen = false"
            >
              Resume
              <template #right>
                <Icon name="lucide:file-text" class="h-4 w-4" />
              </template>
              <template #hoverRight>
                <Icon name="lucide:download" class="h-4 w-4" />
              </template>
            </SharedButton>
            
            <div class="flex flex-col gap-6 border-t border-glass pt-8">
               <div class="flex items-center justify-between">
                 <span class="text-accent text-[0.6rem] font-black uppercase tracking-[0.4em]">Ecosystem</span>
                 <div class="flex items-center gap-3">
                   <a href="https://www.linkedin.com/in/mohin7/" target="_blank" rel="noopener" 
                      class="flex items-center justify-center h-10 w-10 rounded-full border border-accent/10 bg-accent/[0.02] text-soft hover:text-accent hover:bg-accent/10 transition-all duration-300">
                     <Icon name="lucide:linkedin" class="h-4 w-4" />
                   </a>
                   <a href="https://github.com/mohin7" target="_blank" rel="noopener" 
                      class="flex items-center justify-center h-10 w-10 rounded-full border border-accent/10 bg-accent/[0.02] text-soft hover:text-accent hover:bg-accent/10 transition-all duration-300">
                     <Icon name="lucide:github" class="h-4 w-4" />
                   </a>
                   <a href="https://dribbble.com/mohin7" target="_blank" rel="noopener" 
                      class="flex items-center justify-center h-10 w-10 rounded-full border border-accent/10 bg-accent/[0.02] text-soft hover:text-accent hover:bg-accent/10 transition-all duration-300">
                     <Icon name="lucide:dribbble" class="h-4 w-4" />
                   </a>
                 </div>
               </div>
               <p class="text-muted text-[0.55rem] font-bold uppercase tracking-widest opacity-40">© 2026 MD MOHIN UDDIN // ALL RIGHTS RESERVED</p>
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
  { label: 'Work', href: '/#case-studies', icon: 'lucide:projector' },
  { label: 'Investment', href: '/#packages', icon: 'lucide:bar-chart-3' },
  { label: 'Blog', href: '/blog', icon: 'lucide:book-open' },
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
  isMobileMenuOpen.value = false

  // If it's a full page link (no hash), let standard navigation occur
  if (!href.includes('#')) {
    return
  }

  // If we are not on home, let standard navigation to home + hash occur
  if (route.path !== '/') {
    return 
  }

  // Smooth scroll for home page fragments
  e.preventDefault()
  const targetId = href.split('#')[1]
  const element = document.getElementById(targetId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('smooth-scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('smooth-scroll', handleScroll)
})
</script>

<style scoped>

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
  height: 48px;  /* φ derived */
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
