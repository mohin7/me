<template>
  <header
    class="fixed left-0 right-0 top-0 z-[60] px-3 sm:px-6 lg:px-8 pt-3 md:pt-6 transition-transform duration-500 ease-out"
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
      <a href="/" class="group flex items-center gap-2.5 shrink-0">
        <div class="h-9 w-9 bg-accent text-accent-fg flex items-center justify-center rounded-lg serif-font text-lg transition-transform duration-300 group-hover:-rotate-6">M</div>
        <span class="text-[0.95rem] font-bold text-main leading-none tracking-tight">mohin<span class="text-soft font-medium">.design</span></span>
      </a>

      <!-- Desktop Nav Matrix -->
      <div class="hidden lg:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          @click="scrollToSection($event, item.href)"
          class="nav-link"
          :class="{ 'is-active': activeSection === item.id }"
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
        <a href="/#contact" @click="scrollToSection($event, '/#contact')" class="shimmer-btn group"><span class="relative z-10 flex items-center gap-2 whitespace-nowrap">Start a project <Icon name="lucide:arrow-up-right" class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span><div class="shimmer-bg"></div></a>
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
                <div class="h-10 w-10 bg-accent text-accent-fg flex items-center justify-center rounded-lg serif-font text-xl">M</div>
                <span class="text-[0.95rem] font-bold text-main leading-none tracking-tight">mohin<span class="text-soft font-medium">.design</span></span>
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
               <div class="flex gap-6">
                  <a href="https://www.linkedin.com/in/mohin7/" class="text-soft text-sm hover:text-main transition-colors">LinkedIn</a>
                  <a href="https://github.com/mohin7" class="text-soft text-sm hover:text-main transition-colors">GitHub</a>
               </div>
               <p class="text-muted text-xs">© 2026</p>
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
const isNavbarVisible = ref(true)
const activeSection = ref<string>('')
const { theme, toggleTheme } = useTheme()

const themeClass = computed(() => theme.value === 'dark' ? 'dark' : 'light')

let lastScrollY = 0

const navItems = [
  { label: 'Work', href: '/#case-studies', id: 'case-studies' },
  { label: 'Process', href: '/#process', id: 'process' },
  { label: 'Pricing', href: '/#packages', id: 'packages' },
  { label: 'Blog', href: '/blog', id: 'blog' },
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
  if (Math.abs(diff) < 8) return

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

let sectionObserver: IntersectionObserver | null = null

const observeSections = () => {
  if (typeof window === 'undefined') return
  const ids = navItems.map(n => n.id).filter(id => id && id !== 'blog')
  const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
  if (!els.length) return
  sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
    if (visible) activeSection.value = (visible.target as HTMLElement).id
  }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] })
  els.forEach(el => sectionObserver!.observe(el))
}

onMounted(() => {
  window.addEventListener('smooth-scroll', handleScroll)
  setTimeout(observeSections, 400)
})

onUnmounted(() => {
  window.removeEventListener('smooth-scroll', handleScroll)
  sectionObserver?.disconnect()
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
  position: relative;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: var(--text-soft);
  transition: color 0.25s ease;
  text-decoration: none;
}
.nav-link:hover { color: var(--text-main); }
.nav-link.is-active { color: var(--text-main); }
.nav-link.is-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 3px;
  transform: translateX(-50%);
  width: 14px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
}

.menu-toggle:hover { color: var(--text-main); background: var(--bg-soft); }

.shimmer-btn {
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 38px;
  border-radius: 9999px;
  background: var(--accent);
  color: var(--accent-fg);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
}

.shimmer-btn:hover {
  transform: translateY(-1px);
  filter: brightness(var(--hover-brightness));
  box-shadow: 0 10px 24px -8px oklch(from var(--accent) l c h / 0.4);
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
