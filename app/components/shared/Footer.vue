<template>
  <footer class="pt-16 md:pt-24 pb-10 bg-page border-t border-[var(--border-subtle)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Brand — full width on mobile -->
      <div class="mb-10 md:hidden">
        <SharedLogo :link="true" subtitle="" />
        <p class="text-soft text-sm font-medium leading-relaxed mt-4 opacity-80">
          UI/UX Designer &amp; Product Architect based in Dhaka, Bangladesh.
        </p>
        <!-- Availability pill -->
        <div class="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-soft">
          <div class="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></div>
          <span class="text-[0.55rem] font-black uppercase tracking-widest text-accent">Available for Q{{ currentQuarter }} {{ currentYear }}</span>
        </div>
      </div>

      <!-- Desktop grid: 4 cols — hidden on mobile, shown above -->
      <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <!-- Brand Signature -->
        <div class="space-y-6">
          <SharedLogo :link="true" subtitle="" />
          <p class="text-soft text-sm font-medium leading-relaxed max-w-[240px]">
            UI/UX Designer &amp; Product Architect based in Dhaka, Bangladesh. Specializing in SaaS, cloud infrastructure, and design systems.
          </p>
        </div>

        <!-- Links Groups -->
        <div v-for="(group, idx) in footerGroups" :key="idx">
          <h4 class="text-soft text-[0.6rem] font-black uppercase tracking-[0.4em] mb-8">{{ group.title }}</h4>
          <ul class="space-y-4">
            <li v-for="link in group.links" :key="link.name">
              <a :href="link.href" class="group/footer-link text-main text-sm font-bold hover:text-accent transition-colors flex items-center gap-3">
                <Icon v-if="link.icon" :name="link.icon" class="h-4 w-4 opacity-40 group-hover/footer-link:opacity-100 transition-opacity" />
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- System Intelligence -->
        <div class="flex flex-col md:items-end text-right">
          <h4 class="text-soft text-[0.6rem] font-black uppercase tracking-[0.4em] mb-8">Base Terminal</h4>
          <div class="space-y-2">
            <p class="text-main text-sm font-black">Dhaka, Bangladesh</p>
            <p class="text-soft text-[0.65rem] font-bold uppercase tracking-widest opacity-80">GMT+6 // Active Now</p>
          </div>
          <div class="mt-auto pt-8 flex items-center gap-2">
            <div class="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></div>
            <span class="text-[0.55rem] font-black uppercase tracking-widest text-accent">Available for Q{{ currentQuarter }} {{ currentYear }}</span>
          </div>
        </div>
      </div>

      <!-- Mobile: 2-col links grid -->
      <div class="grid grid-cols-2 gap-8 mb-10 md:hidden">
        <div v-for="(group, idx) in footerGroups" :key="idx">
          <h4 class="text-soft text-[0.6rem] font-black uppercase tracking-[0.4em] mb-5">{{ group.title }}</h4>
          <ul class="space-y-3.5">
            <li v-for="link in group.links" :key="link.name">
              <a :href="link.href" class="group/footer-link text-main text-sm font-bold hover:text-accent transition-colors flex items-center gap-2.5">
                <Icon v-if="link.icon" :name="link.icon" class="h-3.5 w-3.5 opacity-50 group-hover/footer-link:opacity-100 transition-opacity shrink-0" />
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Legal Footnote -->
      <div class="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-soft text-[0.6rem] font-bold uppercase tracking-[0.3em] opacity-70">
          © {{ currentYear }} Md Mohin Uddin. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-soft text-[0.6rem] font-black uppercase tracking-[0.3em] opacity-70">
          <a href="/img/uiux-specialist.pdf" class="hover:text-accent transition-colors">Resume</a>
          <NuxtLink to="/privacy" class="hover:text-main transition-colors">Privacy</NuxtLink>
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
      { name: 'Journal', href: '/blog' },
      { name: 'TIN Check', href: '/tin-check' }
    ]
  },
  {
    title: 'Ecosystem',
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohin7/', icon: 'lucide:linkedin' },
      { name: 'GitHub', href: 'https://github.com/mohin7', icon: 'lucide:github' },
      { name: 'Dribbble', href: 'https://dribbble.com/mohin7', icon: 'lucide:dribbble' },
      { name: 'Freelancer', href: 'https://www.freelancer.com/u/mohincse', icon: 'lucide:briefcase' }
    ]
  }
]
</script>

