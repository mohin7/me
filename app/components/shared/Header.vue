<template>
  <header class="fixed left-0 right-0 top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
    <nav class="navbar mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-2.5">

      <!-- Logo -->
      <a href="#top" class="group flex items-center gap-3 shrink-0">
        <div class="logo-mark overflow-hidden group-hover:scale-110 transition-transform duration-500 ring-1 ring-black/[0.05] dark:ring-white/[0.1]">
          <img src="https://ui-avatars.com/api/?name=Mohin+Uddin&background=111111&color=fff" alt="Mohin" class="h-full w-full object-cover" />
        </div>
        <div class="flex flex-col">
          <span class="text-[0.9rem] font-extrabold text-main leading-none tracking-tight">Mohin Uddin</span>
          <span class="text-[0.6rem] font-bold text-soft mt-1.5 uppercase tracking-widest">Design Engineer</span>
        </div>
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="nav-link"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-3">
        <button type="button" class="icon-btn-v2" @click="toggleTheme" :aria-label="theme === 'dark' ? 'Light mode' : 'Dark mode'">
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-4 w-4" />
        </button>
        <SharedButton tag="a" href="#contact" variant="primary" size="sm" class="px-5">
          Let's Talk
          <template #right>
            <Icon name="lucide:arrow-up-right" class="h-3.5 w-3.5" />
          </template>
        </SharedButton>
      </div>

      <!-- Mobile Actions -->
      <div class="flex md:hidden items-center gap-2">
        <button type="button" class="icon-btn-v2" @click="toggleTheme" :aria-label="theme === 'dark' ? 'Light mode' : 'Dark mode'">
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-4 w-4" />
        </button>
        <button type="button" class="icon-btn-v2" @click="isMobileMenuOpen = !isMobileMenuOpen" :aria-expanded="isMobileMenuOpen" aria-label="Menu">
          <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="h-4 w-4" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-4 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100 scale-100"
      leave-to-class="-translate-y-4 opacity-0 scale-95"
    >
      <div v-if="isMobileMenuOpen" class="mobile-menu-v2 mx-auto mt-3 max-w-7xl md:hidden">
        <a
          v-for="item in navItems"
          :key="`m-${item.label}`"
          :href="item.href"
          class="mobile-link-v2"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
          <Icon name="lucide:chevron-right" class="h-4 w-4 opacity-30" />
        </a>
        <div class="mt-2 pt-4 border-t border-subtle/50">
          <SharedButton tag="a" href="#contact" variant="primary" size="md" fullWidth @click="isMobileMenuOpen = false">
            Start a Conversation
            <template #right><Icon name="lucide:zap" class="h-4 w-4" /></template>
          </SharedButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const { theme, toggleTheme } = useTheme()

const navItems = [
  { label: 'Work', href: '#works' },
  { label: 'Experience', href: '#experience' },
  { label: 'Methodology', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
]
</script>

<style scoped>
/* ── Navbar: Premium Glass ── */
.navbar {
  background: var(--bg-glass);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--border-glass);
  border-radius: 9999px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.04);
}

.logo-mark {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--accent);
}

.nav-link {
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-soft);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}
.nav-link:hover {
  color: var(--text-main);
  background: var(--bg-soft);
}

.icon-btn-v2 {
  width: 32px; height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  background: var(--bg-soft);
  color: var(--text-soft);
  cursor: pointer;
  transition: all 0.2s;
}
.icon-btn-v2:hover {
  background: var(--bg-panel);
  color: var(--accent);
  border-color: var(--accent);
}

/* ── Mobile menu V2 ── */
.mobile-menu-v2 {
  background: var(--bg-panel);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  padding: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.mobile-link-v2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-soft);
  text-decoration: none;
  transition: all 0.2s;
}
.mobile-link-v2:hover {
  color: var(--text-main);
  background: var(--bg-soft);
  padding-left: 24px;
}
</style>
