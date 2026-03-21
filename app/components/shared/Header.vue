<template>
  <header class="fixed left-0 right-0 top-4 z-50 flex justify-center px-4 md:top-6">
    <div class="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-subtle bg-panel/80 p-2 pl-3 pr-4 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 dark:shadow-black/20 md:gap-8 lg:pr-3">
      
      <!-- Brand -->
      <a href="#top" class="group flex items-center gap-3 border-subtle pr-2 md:border-r">
        <div class="brand-gradient relative grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white shadow-md shadow-brand-a/20 transition-transform duration-300 group-hover:scale-105">
          M
          <span class="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border border-black/40 bg-emerald-400"></span>
        </div>
        <div class="hidden md:block">
          <p class="text-[0.65rem] uppercase tracking-widest text-[var(--brand-a)]">Portfolio</p>
          <p class="text-main text-sm font-semibold transition group-hover:text-[var(--brand-a)] text-nowrap">Md Mohin Uddin</p>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden flex-1 items-center justify-center gap-1 md:flex">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="text-soft hover:text-main group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-soft"
        >
          <Icon :name="`lucide:${item.icon}`" class="text-soft/70 h-4 w-4 transition group-hover:text-main" />
          {{ item.label }}
        </a>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden items-center gap-2 border-subtle pl-2 md:flex md:border-l">
        <button
          type="button"
          class="text-soft hover:text-main group rounded-full p-2 transition-all hover:bg-soft"
          @click="toggleTheme"
          aria-label="Toggle theme"
        >
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-5 w-5 transition group-hover:scale-110" />
        </button>
        <a
          href="mailto:hello.mohin4@gmail.com"
          class="text-soft hover:text-main group rounded-full p-2 transition-all hover:bg-soft"
          aria-label="Email me"
        >
          <Icon name="lucide:mail" class="h-5 w-5 transition group-hover:scale-110" />
        </a>
        <a
          href="#contact"
          class="brand-gradient ml-2 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-a/20 transition-all hover:scale-105"
        >
          <Icon name="lucide:message-circle" class="h-4 w-4" />
          Let's talk
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="flex md:hidden ml-auto items-center gap-2">
        <a
          href="#contact"
          class="brand-gradient flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:scale-105"
        >
          <Icon name="lucide:message-circle" class="h-3 w-3" />
          Talk
        </a>
        <button
          type="button"
          class="border-subtle text-main inline-flex h-10 w-10 items-center justify-center rounded-full border bg-soft transition hover:bg-panel"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        id="mobile-navigation"
        class="absolute left-4 right-4 top-20 flex flex-col gap-2 rounded-2xl border border-subtle bg-panel/95 p-4 shadow-xl shadow-black/10 backdrop-blur-xl md:hidden dark:bg-panel/98"
      >
        <a
          v-for="item in navItems"
          :key="`mobile-${item.label}`"
          :href="item.href"
          class="border-subtle hover:text-main flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium text-soft transition hover:bg-soft"
          @click="isMobileMenuOpen = false"
        >
          <div class="flex items-center gap-3">
            <Icon :name="`lucide:${item.icon}`" class="h-5 w-5" />
            {{ item.label }}
          </div>
          <Icon name="lucide:chevron-right" class="h-4 w-4 opacity-50" />
        </a>
        
        <div class="mt-2 flex gap-2 border-t border-subtle pt-4">
          <button
            type="button"
            class="border-subtle text-main flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition hover:bg-soft"
            @click="toggleTheme"
          >
            <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-5 w-5" />
            {{ theme === 'dark' ? 'Light' : 'Dark' }}
          </button>
          
          <a
            href="mailto:hello.mohin4@gmail.com"
            class="border-subtle text-main flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition hover:bg-soft"
            @click="isMobileMenuOpen = false"
          >
            <Icon name="lucide:mail" class="h-5 w-5" />
            Email
          </a>
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
  { label: 'Focus', href: '#focus', icon: 'target' },
  { label: 'Projects', href: '#work', icon: 'folder' },
  { label: 'Experience', href: '#experience', icon: 'briefcase' },
  { label: 'FAQ', href: '#faq', icon: 'help-circle' }
]
</script>
