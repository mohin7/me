<template>
  <section id="services" class="relative py-24 md:py-32 overflow-hidden bg-page">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="mb-16 relative">
        <h2 class="mb-4 text-4xl font-black tracking-tight md:text-5xl text-main">Specialties</h2>
        <p class="text-soft max-w-2xl text-lg font-medium opacity-80">High-performance design and development for modern products.</p>
        
        <!-- Handwriting Accent -->
        <div class="absolute -right-4 top-0 md:right-1/4 pointer-events-none">
           <p class="handwriting text-brand-a text-3xl rotate-6 opacity-80">Built for scale</p>
        </div>
      </div>
      
      <!-- Grid -->
      <div class="grid gap-6 md:grid-cols-3">
        <div 
          v-for="(specialty, idx) in specialties" 
          :key="idx"
          class="group relative overflow-hidden rounded-[24px] bg-panel border border-subtle p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
        >
          <!-- Hover Highlight Rim -->
          <div class="absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-brand-a/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <!-- Icon Container: Rounded 16px (matches frame scale) -->
          <div class="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-[16px] bg-soft border border-subtle text-brand-a transition-all duration-500 group-hover:scale-110 group-hover:border-brand-a/30">
            <Icon :name="`lucide:${specialty.icon}`" class="h-6 w-6" />
          </div>
          
          <h3 class="text-main mb-4 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-brand-a">{{ specialty.title }}</h3>
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
    title: 'Interface Engineering',
    description: 'Bridging the design gap by building high-performance, pixel-perfect interfaces with NuxtJS and VueJS.'
  },
  {
    icon: 'palette',
    title: 'Visual Systems',
    description: 'Crafting scalable design systems that maintain consistency across large-scale enterprise applications.'
  },
  {
    icon: 'layers',
    title: 'Architecture & UX',
    description: 'Focusing on product logic and user journeys to create tools that are as functional as they are beautiful.'
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
