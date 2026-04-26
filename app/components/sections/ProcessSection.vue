<template>
  <section id="process" class="py-16 md:py-24 bg-soft/30 relative overflow-hidden transition-colors duration-500">
    <!-- Section Divider -->
    <div class="section-divider absolute inset-x-0 top-0"></div>
    <!-- Fine Grid Blueprint -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.015]" 
         style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Compact Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
        <div class="max-w-2xl">
          <div class="reveal mb-6">
             <span class="section-label">Execution Framework</span>
          </div>
          <h2 class="reveal italic serif-font lowercase">
            Systematic <span style="color: var(--text-soft)">delivery.</span>
          </h2>
        </div>
        <p class="reveal text-soft text-base font-medium max-w-[320px] md:text-right">
          A high-velocity engineering protocol designed for founders who value precision over process.
        </p>
      </div>

      <!-- Pipeline Grid: 4 Columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          v-for="(step, idx) in steps" 
          :key="idx"
          class="reveal group relative"
          :class="`reveal-delay-${idx + 1}`"
        >
          <!-- Connection Line (Desktop) -->
          <div v-if="idx < steps.length - 1" class="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-glass z-0"></div>

          <!-- Compact Architectural Card -->
          <div class="relative h-full flex flex-col p-6 md:p-8 rounded-[24px] bg-panel/5 border border-glass transition-all duration-500 hover:bg-panel/10 hover:border-accent/30 group-hover:shadow-2xl group-hover:shadow-accent/5" style="box-shadow: var(--inner-glow), var(--specular);">
            
            <!-- Phase Badge -->
            <div class="flex justify-between items-center mb-10">
               <span class="text-accent text-[0.6rem] font-bold tracking-[0.2em] font-mono opacity-80">PHASE_0{{ idx + 1 }}</span>
               <div class="h-8 w-8 rounded-lg bg-accent/5 flex items-center justify-center text-main group-hover:bg-accent group-hover:text-accent-fg transition-all duration-500">
                 <Icon v-if="step && step.icon" :name="step.icon" class="h-4 w-4" />
               </div>
            </div>

            <!-- Content -->
            <div class="mb-8">
              <h3 class="group-hover:text-accent transition-colors">
                 {{ step.title }}
              </h3>
              <p class="text-muted text-sm font-medium leading-relaxed">
                 {{ step.description }}
              </p>
            </div>

            <!-- Compact Outputs List -->
            <div class="mt-auto pt-6 border-t border-glass space-y-2">
              <div v-for="output in step.outputs" :key="output" class="flex items-center gap-2">
                 <div class="h-1 w-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></div>
                 <span class="text-soft text-[0.7rem] font-bold">{{ output }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Strategy Footer Note -->
      <div class="reveal mt-12 flex items-center justify-center gap-4 py-4 px-6 rounded-full bg-panel/20 border border-glass w-fit mx-auto">
         <Icon name="lucide:shield-check" class="h-4 w-4 text-accent" />
         <span class="text-muted text-[0.65rem] font-bold uppercase tracking-widest">Protocol-Driven Consistency Guaranteed</span>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Strategy', 
    icon: 'lucide:search',
    description: 'Deconstructing technical requirements into a battle-hardened roadmap.',
    outputs: ['Competitive Audit', 'Conversion Roadmap', 'Project Strategy'],
  },
  {
    title: 'Structure', 
    icon: 'lucide:layout',
    description: 'Building structural logic and clear user paths before design begins.',
    outputs: ['Experience Flows', 'Hierarchy Maps', 'Logic Audits'],
  },
  {
    title: 'Visuals', 
    icon: 'lucide:palette',
    description: 'Scaling high-performance design systems for enterprise interfaces.',
    outputs: ['Design System 1.0', 'High-Fi UI', 'Interactive Proto'],
  },
  {
    title: 'Scale', 
    icon: 'lucide:rocket',
    description: 'Bridging the gap between code and design for a perfect launch.',
    outputs: ['Production Code', 'QA Report', 'Scale Roadmap'],
  }
]
</script>

<style scoped>
#process { z-index: 10; }
</style>
