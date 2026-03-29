<template>
  <header class="fixed left-0 right-0 top-4 z-50 flex justify-center px-4 sm:px-6 lg:px-8 md:top-6 mt-2">
    <div class="flex w-full max-w-7xl items-center justify-between gap-2 rounded-full border border-subtle bg-panel/80 p-2 pl-3 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 dark:shadow-black/20 md:gap-6 lg:pr-2">
      
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
      <nav class="hidden flex-1 items-center justify-center gap-2 md:flex">
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
      <!-- Desktop Actions -->
      <div class="hidden items-center gap-2 border-subtle pl-2 md:flex md:border-l min-w-[180px] justify-end">
        <SharedButton
          type="button"
          variant="ghost"
          size="sm"
          class="aspect-square !px-0"
          @click="toggleTheme"
          aria-label="Toggle theme"
        >
          <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-5 w-5" />
        </SharedButton>
        <SharedButton
          tag="a"
          href="mailto:hello.mohin4@gmail.com"
          variant="ghost"
          size="sm"
          class="aspect-square !px-0"
          aria-label="Email me"
        >
          <Icon name="lucide:mail" class="h-5 w-5" />
        </SharedButton>
        <SharedButton
          tag="a"
          href="#contact"
          variant="primary"
          size="sm"
          class="ml-2"
        >
          <template #left>
            <Icon name="lucide:message-circle" class="h-4 w-4" />
          </template>
          Let's talk
        </SharedButton>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="flex md:hidden ml-auto items-center gap-2">
        <SharedButton
          tag="a"
          href="#contact"
          variant="primary"
          size="xs"
        >
          <template #left>
            <Icon name="lucide:message-circle" class="h-3 w-3" />
          </template>
          Talk
        </SharedButton>
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
        <SharedButton
          v-for="item in navItems"
          :key="`mobile-${item.label}`"
          tag="a"
          :href="item.href"
          variant="glass"
          size="md"
          class="justify-between !px-4"
          @click="isMobileMenuOpen = false"
        >
          <div class="flex items-center gap-3">
            <Icon :name="`lucide:${item.icon}`" class="h-5 w-5" />
            {{ item.label }}
          </div>
          <template #right>
            <Icon name="lucide:chevron-right" class="h-4 w-4 opacity-50" />
          </template>
        </SharedButton>
        
        <div class="mt-2 flex gap-2 border-t border-subtle pt-4">
          <SharedButton
            type="button"
            variant="ghost"
            size="md"
            class="flex-1"
            @click="toggleTheme"
          >
            <template #left>
              <Icon :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="h-5 w-5" />
            </template>
            {{ theme === 'dark' ? 'Light' : 'Dark' }}
          </SharedButton>
          
          <SharedButton
            tag="a"
            href="mailto:hello.mohin4@gmail.com"
            variant="ghost"
            size="md"
            class="flex-1"
            @click="isMobileMenuOpen = false"
          >
            <template #left>
              <Icon name="lucide:mail" class="h-5 w-5" />
            </template>
            Email
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
  { label: 'Focus', href: '#focus', icon: 'target' },
  { label: 'Projects', href: '#work', icon: 'folder' },
  { label: 'Experience', href: '#experience', icon: 'briefcase' },
  { label: 'FAQ', href: '#faq', icon: 'help-circle' }
]
</script>
