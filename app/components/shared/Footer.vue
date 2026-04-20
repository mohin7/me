<template>
  <footer class="pt-24 pb-12 bg-page border-t border-glass">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        <div class="space-y-5">
          <div class="flex items-center gap-2.5">
             <div class="h-9 w-9 bg-accent text-accent-fg flex items-center justify-center rounded-lg serif-font text-lg">M</div>
             <span class="text-main font-semibold tracking-tight">Mohin Uddin</span>
          </div>
          <p class="text-soft text-sm leading-relaxed max-w-[260px]">
            Product design &amp; engineering for high-performance teams.
          </p>
        </div>

        <div v-for="(group, idx) in footerGroups" :key="idx">
          <h4 class="text-muted text-xs font-medium mb-5">{{ group.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in group.links" :key="link.name">
              <a :href="link.href" target="_blank" class="text-main text-sm hover:text-accent transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col md:items-end text-left md:text-right">
          <h4 class="text-muted text-xs font-medium mb-5">Based in</h4>
          <p class="text-main text-sm font-medium">Dhaka, Bangladesh</p>
          <p class="text-muted text-sm mt-1">GMT+6 · active now</p>
          <div class="mt-6 inline-flex items-center gap-2 text-soft text-sm">
             <span class="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
             Open for Q{{ currentQuarter }} {{ currentYear }}
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-glass flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-muted text-xs">
          © {{ currentYear }} Md Mohin Uddin
        </p>
        <div class="flex items-center gap-6 text-soft text-xs">
           <a href="/img/uiux-specialist.pdf" target="_blank" class="hover:text-accent transition-colors">Resume</a>
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
      { name: 'Journal', href: '/blog' }
    ]
  },
  {
    title: 'Ecosystem',
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohin7/' },
      { name: 'GitHub', href: 'https://github.com/mohin7' },
      { name: 'Dribbble', href: 'https://dribbble.com/mohin7' }
    ]
  }
]
</script>

