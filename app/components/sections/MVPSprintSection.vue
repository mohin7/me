<template>
  <section id="sprint" class="py-24 md:py-32 bg-page relative overflow-hidden">
    <!-- Subtle Background Accent -->
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-subtle/20 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="mb-24 px-4">
        <h2 class="text-main mb-6 text-4xl font-black tracking-tight md:text-6xl leading-[1.1]">The 7-Day <span class="text-brand-a">Hyper-Sprint</span></h2>
        <p class="text-soft mx-auto max-w-2xl text-lg font-medium opacity-80 leading-relaxed">
          Scaling from concept to investor-ready prototype in 168 hours. No fluff, just execution.
        </p>
      </div>
      
      <!-- Adaptive Timeline Container -->
      <div class="relative max-w-5xl mx-auto px-4 md:px-0">
        
        <!-- Axis line (Desktop) -->
        <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-subtle/30 hidden md:block"></div>
        
        <!-- Timeline Grid -->
        <div class="grid grid-cols-1 md:grid-cols-7 gap-y-16 md:gap-y-0 relative">
          <div 
            v-for="(phase, idx) in sprintPhases" 
            :key="idx" 
            class="group relative z-10"
          >
            <!-- Central Node: Pill-shaped marker -->
            <div class="flex items-center justify-center mb-8 md:mb-0 relative">
               <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-panel border-2 border-subtle flex flex-col items-center justify-center shadow-sm transition-all duration-500 group-hover:border-brand-a group-hover:scale-110 z-20">
                 <span class="text-brand-a text-[0.45rem] font-black uppercase tracking-[0.2em] leading-none mb-1">D</span>
                 <span class="text-main text-sm md:text-lg font-black tracking-tight leading-none">{{ phase.day }}</span>
               </div>
               
               <!-- Mobile Line Connector -->
               <div v-if="idx < sprintPhases.length - 1" class="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-subtle/20 md:hidden"></div>
            </div>

            <!-- Content Card (Alternating Position) -->
            <div 
              class="w-full md:absolute md:left-1/2 md:-translate-x-1/2 md:w-[220px] p-6 rounded-[24px] bg-panel border border-subtle shadow-sm transition-all duration-500 group-hover:border-brand-a/40 z-10 text-center"
              :class="idx % 2 === 0 
                ? 'md:-top-[160px]' 
                : 'md:-bottom-[160px]'"
            >
              <h4 class="text-main mb-2 text-base font-bold tracking-tight">{{ phase.title }}</h4>
              <p class="text-soft text-[0.75rem] font-medium leading-relaxed opacity-80">
                {{ phase.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Final CTA -->
      <div class="mt-32 md:mt-48 flex justify-center">
          <SharedButton tag="a" href="#contact" variant="primary" size="lg">
             Launch Your Project
             <template #right>
                <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
             </template>
          </SharedButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sprintPhases = [
  { day: '01', title: 'Strategy', description: 'Defining business logic & core high-impact user journeys.' },
  { day: '02', title: 'Blueprint', description: 'Architecting clickable wireframes for logic validation.' },
  { day: '03', title: 'Visuals', description: 'Establishing style, mood, and essential brand tokens.' },
  { day: '04', title: 'High-Fi', description: 'Crafting pixel-perfect, production-ready screens.' },
  { day: '05', title: 'Logic', description: 'Injecting life into designs with interactive logic.' },
  { day: '06', title: 'Polishing', description: 'Connecting touchpoints into a seamless experience.' },
  { day: '07', title: 'Handoff', description: 'Exporting dev-ready assets and documentation.' }
]
</script>
