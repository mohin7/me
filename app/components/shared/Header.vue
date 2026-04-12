<template>
  <header class="fixed left-0 right-0 top-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 md:pt-4">
    <nav class="navbar mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-3 py-2 md:px-4">

      <!-- Logo -->
      <a href="#top" class="group flex items-center gap-2.5 shrink-0">
        <div class="logo-mark">M</div>
        <span class="hidden md:block text-[0.85rem] font-semibold text-main">Mohin Uddin</span>
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-0.5">
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
      <div class="hidden md:flex items-center gap-2">
        <button type="button" class="icon-btn" @click="toggleTheme" :aria-label="theme === 'dark' ? 'Light mode' : 'Dark mode'">
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-4 w-4" />
        </button>
        <SharedButton tag="a" href="#contact" variant="primary" size="sm">
          Let's talk
          <template #right>
            <Icon name="lucide:arrow-up-right" class="h-3.5 w-3.5" />
          </template>
        </SharedButton>
      </div>

      <!-- Mobile Actions -->
      <div class="flex md:hidden items-center gap-1.5">
        <button type="button" class="icon-btn" @click="toggleTheme" :aria-label="theme === 'dark' ? 'Light mode' : 'Dark mode'">
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-4 w-4" />
        </button>
        <button type="button" class="icon-btn" @click="isMobileMenuOpen = !isMobileMenuOpen" :aria-expanded="isMobileMenuOpen" aria-label="Menu">
          <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="h-4 w-4" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="mobile-menu mx-auto mt-1.5 max-w-7xl md:hidden">
        <a
          v-for="item in navItems"
          :key="`m-${item.label}`"
          :href="item.href"
          class="mobile-link"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
          <Icon name="lucide:arrow-right" class="h-3.5 w-3.5 opacity-25" />
        </a>
        <div class="mt-1 pt-2 border-t border-subtle">
          <SharedButton tag="a" href="#contact" variant="primary" size="md" fullWidth @click="isMobileMenuOpen = false">
            Let's talk
            <template #right><Icon name="lucide:arrow-up-right" class="h-4 w-4" /></template>
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
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#works' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Services', href: '#packages' },
  { label: 'FAQ', href: '#faq' },
]
</script>

<style scoped>
/* ── Navbar: 14px radius ── */
.navbar {
  background: var(--bg-panel);
  border: 1px solid var(--border-subtle);
  border-radius: 9999px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  backdrop-filter: blur(12px);
}

.logo-mark {
  width: 32px; height: 32px;
  display: grid;
  place-items: center;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-fg);
  background: var(--accent);
}

.nav-link {
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-soft);
  transition: color 0.15s, background 0.15s;
  text-decoration: none;
}
.nav-link:hover {
  color: var(--text-main);
  background: var(--bg-soft);
}

.icon-btn {
  width: 32px; height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid var(--border-subtle);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.15s, background 0.15s;
}
.icon-btn:hover {
  background: var(--bg-soft);
  color: var(--text-main);
}

/* ── Mobile menu: 12px radius ── */
.mobile-menu {
  background: var(--bg-panel);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  padding: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
}

.mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-soft);
  text-decoration: none;
  transition: color 0.12s, background 0.12s;
}
.mobile-link:hover {
  color: var(--text-main);
  background: var(--bg-soft);
}
</style>
