<template>
  <footer class="pt-24 pb-12 bg-page border-t border-glass">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- High-Resolution Minimal Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <!-- Brand Signature -->
        <div class="space-y-6">
          <SharedLogo :link="true" subtitle="" />
          <p class="text-soft text-sm font-medium leading-relaxed max-w-[240px] text-left">
            Head of Design specializing in high-performance cloud infrastructure and design systems.
          </p>
        </div>

        <!-- Links Groups -->
        <div v-for="(group, idx) in footerGroups" :key="idx">
          <h4 class="text-soft text-[0.6rem] font-black uppercase tracking-[0.4em] mb-8">{{ group.title }}</h4>
          <ul class="space-y-4">
            <li v-for="link in group.links" :key="link.name">
              <a :href="link.href" target="_blank" class="group/footer-link text-main text-sm font-bold hover:text-accent transition-colors flex items-center gap-3">
                <Icon v-if="link.icon" :name="link.icon" class="h-4 w-4 opacity-40 group-hover/footer-link:opacity-100 transition-opacity" />
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- System Intelligence -->
        <div class="flex flex-col md:items-end text-left md:text-right">
          <h4 class="text-soft text-[0.6rem] font-black uppercase tracking-[0.4em] mb-8">Base Terminal</h4>
          <div class="space-y-2">
            <p class="text-main text-sm font-black">Dhaka, Bangladesh</p>
            <p class="text-soft text-[0.65rem] font-bold uppercase tracking-widest opacity-60">GMT+6 // Active Now</p>
          </div>
          <div class="mt-auto pt-8 flex items-center gap-2 text-accent/40">
             <div class="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></div>
             <span class="text-[0.55rem] font-black uppercase tracking-widest">Available for Q{{ currentQuarter }} {{ currentYear }}</span>
          </div>
        </div>
      </div>

      <!-- Legal Footnote -->
      <div class="pt-12 border-t border-glass flex flex-col sm:flex-row justify-between items-center gap-6">
        <p class="text-soft text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-40">
          © {{ currentYear }} Md Mohin Uddin. All rights reserved.
        </p>
        <div class="flex items-center gap-8 text-soft text-[0.6rem] font-black uppercase tracking-[0.3em] opacity-40">
           <a href="/img/uiux-specialist.pdf" target="_blank" class="hover:text-accent transition-colors">Resume</a><NuxtLink to="/privacy" class="hover:text-main transition-colors">Privacy</NuxtLink>
           <NuxtLink to="/terms" class="hover:text-main transition-colors">Terms</NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const now = new Date()
const currentYear = now.getFullYear()
const currentQuarter = Math.floor((now.getMonth() + 3) / 3)

const footerGroups = [
  {
    title: 'Archive',
    links: [
      { name: 'Architecture', href: '/#strategic-advantage' },
      { name: 'Experience', href: '/#experience' },
      { name: 'Methodology', href: '/#process' },
      { name: 'Journal', href: '/blog' }
    ]
  },
  {
    title: 'Ecosystem',
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohin7/', icon: 'lucide:linkedin' },
      { name: 'GitHub', href: 'https://github.com/mohin7', icon: 'lucide:github' },
      { name: 'Dribbble', href: 'https://dribbble.com/mohin7', icon: 'lucide:dribbble' }
    ]
  }
]
</script>

