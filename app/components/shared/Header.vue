<template>
  <header class="sticky top-0 z-50 border-b border-subtle bg-panel backdrop-blur-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <a href="#top" class="group flex items-center gap-3">
          <div class="brand-gradient relative grid h-9 w-9 place-items-center rounded-xl text-sm font-bold text-white shadow-lg shadow-orange-500/25">
            M
            <span class="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border border-black/40 bg-emerald-400"></span>
          </div>
          <div>
            <p class="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--brand-a)]">Portfolio</p>
            <p class="text-main text-sm font-semibold transition group-hover:text-[var(--brand-a)]">Md Mohin Uddin</p>
          </div>
        </a>

        <nav class="hidden items-center gap-2 rounded-full border border-subtle bg-soft px-3 py-2 md:flex">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="text-soft hover:text-main rounded-full px-4 py-2 text-sm transition hover:bg-panel"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="hidden items-center gap-3 md:flex">
          <button
            type="button"
            class="border-subtle text-main rounded-full border px-3 py-2 text-sm transition hover:bg-soft"
            @click="toggleTheme"
          >
            {{ theme === 'dark' ? 'Light' : 'Dark' }}
          </button>
          <a
            href="mailto:hello.mohin4@gmail.com"
            class="border-subtle text-soft hover:text-main rounded-full border px-4 py-2 text-sm transition hover:bg-soft"
          >
            Email
          </a>
          <a
            href="#contact"
            class="brand-gradient rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:scale-[1.02]"
          >
            Let us talk
          </a>
        </div>

        <button
          type="button"
          class="border-subtle text-main inline-flex h-10 w-10 items-center justify-center rounded-lg border bg-soft transition hover:bg-panel md:hidden"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span v-if="!isMobileMenuOpen" class="text-lg leading-none">+</span>
          <span v-else class="text-lg leading-none">x</span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        class="border-subtle overflow-hidden border-t md:hidden"
        :class="isMobileMenuOpen ? 'max-h-80 py-4' : 'max-h-0 py-0'
        "
      >
        <nav class="flex flex-col gap-2">
          <button
            type="button"
            class="border-subtle text-main rounded-xl border px-4 py-3 text-left text-sm transition hover:bg-soft"
            @click="toggleTheme"
          >
            Switch to {{ theme === 'dark' ? 'light' : 'dark' }} mode
          </button>
          <a
            v-for="item in navItems"
            :key="`mobile-${item.label}`"
            :href="item.href"
            class="border-subtle text-soft hover:text-main rounded-xl border px-4 py-3 text-sm transition hover:bg-soft"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
          <a
            href="#contact"
            class="brand-gradient mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
            @click="isMobileMenuOpen = false"
          >
            Let us talk
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const { theme, toggleTheme } = useTheme()

const navItems = [
  { label: 'Focus', href: '#focus' },
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'FAQ', href: '#faq' }
]
</script>
