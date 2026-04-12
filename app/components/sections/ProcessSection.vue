<template>
  <section id="process" class="py-24 md:py-32 bg-page">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-20 text-center">
        <h2 class="text-main mb-6 text-4xl font-black tracking-tighter md:text-6xl">
          The <span class="text-brand-a italic">Craft</span> Behind the Pixel
        </h2>
        <p class="text-soft max-w-2xl mx-auto text-lg font-medium opacity-80">
          A disciplined, battle-tested methodology for solving complex product challenges at speed.
        </p>
      </div>

      <!-- Process Steps (Architectural Timeline) -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          v-for="(step, idx) in steps" 
          :key="idx"
          class="group relative overflow-hidden rounded-[24px] border border-subtle bg-panel p-8 transition-all hover:border-brand-a/40"
        >
          <!-- Step Number -->
          <div class="mb-10 flex items-center justify-between">
            <span class="text-brand-a text-xs font-black uppercase tracking-[0.3em] font-mono">Stage 0{{ idx + 1 }}</span>
            <div class="h-1 w-12 bg-subtle group-hover:bg-brand-a/40 transition-colors"></div>
          </div>

          <Icon :name="`lucide:${step.icon}`" class="h-8 w-8 text-brand-a mb-6 transition-transform group-hover:scale-110" />
          
          <h3 class="text-main mb-4 text-xl font-bold tracking-tight">{{ step.title }}</h3>
          <p class="text-soft text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
            {{ step.description }}
          </p>

          <!-- Architectural Detail -->
          <div class="absolute bottom-4 right-4 text-[4rem] font-black text-main/[0.02] leading-none pointer-events-none group-hover:text-brand-a/[0.05] transition-colors">
            0{{ idx + 1 }}
          </div>
        </div>
      </div>

      <!-- Process Summary Footer -->
      <div class="mt-20 p-8 rounded-[24px] border border-brand-a/10 bg-brand-a/[0.02] text-center border-dashed">
         <p class="text-soft text-sm font-bold uppercase tracking-[0.2em]">
            <span class="text-brand-a mr-3">●</span>
            Optimized for Speed, Built for Longevity
            <span class="text-brand-a ml-3">●</span>
          </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Discovery & Vision',
    icon: 'search',
    description: 'Unpacking business goals and identifying core user friction points through intensive stakeholder research.'
  },
  {
    title: 'Strategy & Flows',
    icon: 'git-branch',
    description: 'Defining the product backbone. Creating low-fidelity logic that ensures scalable user journeys.'
  },
  {
    title: 'Visual Core',
    icon: 'monitor-check',
    description: 'Engineering the design system. High-fidelity craft that balances brand identity with technical constraints.'
  },
  {
    title: 'Hand-off & Scale',
    icon: 'rocket',
    description: 'Direct collaboration with engineers to ensure production match-to-design and long-term system health.'
  }
]
</script>
