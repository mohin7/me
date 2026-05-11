<template>
  <section id="services" class="relative py-24 md:py-32 overflow-hidden bg-page">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="mb-16 relative">
        <h2 class="mb-4 text-4xl font-black tracking-tight md:text-5xl text-main">UI/UX Design Services in Bangladesh</h2>
        <p class="text-soft max-w-2xl text-lg font-medium opacity-80">Freelance UI/UX design and frontend development for startups and SaaS products — based in Dhaka, Bangladesh, working globally.</p>
        
        <!-- Handwriting Accent -->
        <div class="absolute -right-4 top-0 md:right-1/4 pointer-events-none">
           <p class="handwriting text-accent text-3xl rotate-6 opacity-80">Built for scale</p>
        </div>
      </div>
      
      <!-- Grid -->
      <div class="grid gap-6 md:grid-cols-3">
        <div 
          v-for="(specialty, idx) in specialties" 
          :key="idx"
          class="group relative overflow-hidden rounded-2xl bg-panel border border-[var(--border-glass)] p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <!-- Hover Highlight Rim -->
          <div class="absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <!-- Icon Container: Rounded 16px (matches frame scale) -->
          <div class="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-soft border border-[var(--border-glass)] text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/5">
            <Icon :name="`lucide:${specialty.icon}`" class="h-6 w-6" />
          </div>
          
          <h3 class="text-main mb-4 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent" style="font-size: 1.25rem;">{{ specialty.title }}</h3>
          <p class="text-soft text-sm font-medium leading-[1.6] opacity-80 group-hover:opacity-100 transition-opacity duration-300">{{ specialty.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const specialties = [
  {
    icon: 'code',
    title: 'UI/UX Design & Frontend Development',
    description: 'Pixel-perfect, high-performance web interfaces built with Nuxt.js and Vue.js. From Figma design to production code — one person, zero handoff friction.'
  },
  {
    icon: 'palette',
    title: 'Product & SaaS Design',
    description: 'End-to-end product design for SaaS, web apps, and mobile apps. Scalable design systems used by teams across Bangladesh and globally.'
  },
  {
    icon: 'layers',
    title: 'Freelance Design Consulting',
    description: 'Available for freelance UI/UX projects, startup MVPs, and ongoing product partnerships. Based in Dhaka, Bangladesh — working with clients worldwide.'
  }
]
</script>

<style scoped>
.group:hover .lucide {
  animation: floatIcon 3s ease-in-out infinite;
}

@keyframes floatIcon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
</style>
