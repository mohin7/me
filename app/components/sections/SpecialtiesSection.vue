<template>
  <section id="services" class="relative py-24 md:py-32 overflow-hidden bg-[radial-gradient(rgba(var(--brand-rgb),0.005)_1px,transparent_1px)] [background-size:32px_32px]">
    <!-- Abstract Watermarks -->
    <div class="absolute -right-20 top-0 opacity-[0.003] pointer-events-none">
       <Icon name="lucide:layout" class="h-96 w-96 rotate-12" />
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mb-16 relative">
        <h2 class="mb-4 text-4xl font-black tracking-tight md:text-5xl"><span class="metallic-text">Specialties</span></h2>
        <p class="text-soft max-w-2xl text-lg font-medium opacity-80">High-performance design and development for modern products.</p>
        
        <!-- Handwriting Accent -->
        <div class="absolute -right-4 top-0 md:right-1/4">
           <p class="handwriting text-brand-a text-3xl rotate-6 opacity-80">Built for scale</p>
        </div>
      </div>
      
      <div class="grid gap-6 md:grid-cols-3">
        <div 
          v-for="(specialty, idx) in specialties" 
          :key="idx"
          class="bg-panel/40 border-subtle hover:border-[color:var(--brand-a)]/40 group rounded-[2rem] border p-10 transition-all hover:bg-panel/60"
        >
          <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)] transition group-hover:scale-110 group-hover:rotate-3">
            <Icon :name="`lucide:${specialty.icon}`" class="h-7 w-7" />
          </div>
          <h3 class="text-main mb-4 text-2xl font-black tracking-tight">{{ specialty.title }}</h3>
          <p class="text-soft font-medium leading-relaxed">{{ specialty.description }}</p>
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
    description: 'Bridging the design gap by building high-performance, pixel-perfect interfaces with NuxtJS and Vuejs.'
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
  animation: jelly 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}

@keyframes jelly {
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
}
</style>
