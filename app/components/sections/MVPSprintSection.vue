<template>
  <section id="sprint" class="py-32 md:py-72 bg-page relative overflow-hidden">
    <!-- Immersive Background Accents -->
    <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[40rem] bg-[radial-gradient(circle_at_50%_50%,rgba(var(--brand-rgb),0.02),transparent_70%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mb-64 text-center px-4">
        <h2 class="text-main mb-6 text-4xl font-black tracking-tight md:text-7xl leading-[1.05]">The 7-Day <span class="brand-text-gradient">Hyper-Sprint</span></h2>
        <p class="text-soft mx-auto max-w-2xl text-xl font-medium leading-relaxed opacity-60">
          Scaling from concept to investor-ready prototype in 168 hours. No fluff, just execution.
        </p>
      </div>
      
      <!-- Responsive Adaptive Timeline -->
      <div class="relative max-w-7xl mx-auto px-4 md:px-12">
        
        <!-- Desktop Central axis line (md+) -->
        <div class="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-px bg-subtle/20 hidden md:block rounded-full">
           <div class="absolute inset-0 bg-brand-a/30 animate-[cometRun_12s_linear_infinite]"></div>
        </div>

        <!-- Vertical axis line (Mobile only) -->
        <div class="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-subtle/40 to-transparent md:hidden"></div>

        <div class="grid grid-cols-1 md:grid-cols-7 gap-y-32 md:gap-y-48 items-center relative overflow-visible">
          <div 
            v-for="(phase, idx) in sprintPhases" 
            :key="idx" 
            class="group relative flex flex-col md:flex-row items-start md:items-center justify-center min-h-[140px] z-10 pl-20 md:pl-0"
          >
            <!-- Vertical Directional Tether (Desktop md+) -->
            <div 
              class="absolute left-1/2 -translate-x-1/2 w-0.5 h-16 md:h-32 bg-brand-a/60 z-20 hidden md:block"
              :class="idx % 2 === 0 ? '-top-[128px]' : '-bottom-[128px] rotate-180'"
            >
               <!-- Physical Label ON the Line -->
               <div 
                 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-brand-a text-white text-[0.6rem] font-black tracking-widest shadow-[0_0_15px_rgba(var(--brand-rgb),0.5)] z-50 whitespace-nowrap"
                 :class="idx % 2 === 0 ? 'rotate-0' : 'rotate-180'"
               >
                 D{{ phase.day }}
               </div>

               <!-- Arrowhead (Solid) -->
               <div class="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-brand-a shadow-[0_0_12px_var(--brand-a)] rotate-180"></div>
               <!-- Moving Light Pulse -->
               <div class="absolute inset-0 bg-white/40 animate-[tetherFlow_2s_ease-in-out_infinite]" :style="{ animationDelay: `${idx * 0.4}s` }"></div>
            </div>

            <!-- Central Node (Day + Count) -->
            <div class="absolute left-4 md:relative md:left-auto z-30 flex items-center justify-center">
               <div class="absolute inset-x-[-15%] inset-y-[-15%] rounded-full border border-subtle group-hover:border-brand-a/40 transition-all duration-700 scale-125"></div>
               <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-page border-2 border-subtle flex flex-col items-center justify-center shadow-2xl transition-all duration-700 group-hover:border-brand-a group-hover:shadow-[0_0_25px_rgba(var(--brand-rgb),0.4)] group-hover:scale-110">
                 <span class="text-brand-a text-[0.45rem] md:text-[0.55rem] font-black uppercase tracking-[0.2em] leading-none mb-1">Day</span>
                 <span class="text-main text-base md:text-xl font-black tracking-tight leading-none group-hover:text-brand-a transition-colors duration-700">{{ phase.day }}</span>
               </div>
            </div>

            <!-- Alternating Content Card (Responsive Positioning) -->
            <div 
              class="w-full md:absolute md:left-1/2 md:-translate-x-1/2 max-w-[400px] md:w-[260px] p-8 md:p-8 rounded-[2rem] border border-subtle bg-panel/50 backdrop-blur-3xl transition-all duration-700 group-hover:border-brand-a/40 group-hover:bg-panel/70 group-hover:scale-[1.02] z-40 text-left md:text-center shadow-2xl relative"
              :class="idx % 2 === 0 
                ? 'md:-top-[220px]' 
                : 'md:-bottom-[220px]'"
            >
              <div class="mb-4 flex flex-col items-start md:items-center gap-2">
                <span class="text-brand-a text-[0.7rem] font-black uppercase tracking-[0.3em]">Phase 0{{ idx + 1 }}</span>
                <div class="h-px w-12 bg-brand-a/50"></div>
              </div>
              
              <h4 class="text-main mb-3 text-lg font-black tracking-tight leading-tight group-hover:text-brand-a transition-colors">{{ phase.title }}</h4>
              <p class="text-soft text-sm md:text-xs font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                {{ phase.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-64 flex justify-center">
          <SharedButton tag="a" href="#contact" variant="primary" size="xl">
             Start Your Sprint
             <template #right>
               <Icon name="lucide:zap" class="h-6 w-6" />
             </template>
          </SharedButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sprintPhases = [
  { day: '01', title: 'Strategic Map', description: 'Defining business logic & core high-impact high-velocity user journeys.' },
  { day: '02', title: 'UX Blueprint', description: 'Architecting clickable wireframes for rapid visual and logic validation.' },
  { day: '03', title: 'Visual DNA', description: 'Establishing style, mood, and essential premium brand-centric design tokens.' },
  { day: '04', title: 'High-Fi Design', description: 'Crafting pixel-perfect, production-ready screens in record-breaking time.' },
  { day: '05', title: 'Prototyping', description: 'Injecting life into designs with complex, high-fidelity interactive logic.' },
  { day: '06', title: 'Detailed Flow', description: 'Connecting every touchpoint into a seamless, pitch-ready user experience.' },
  { day: '07', title: 'Tactical Handoff', description: 'Exporting dev-ready assets and design documentation for production.' }
]
</script>

<style scoped>
@keyframes cometRun {
  0% { transform: translateX(-150%); }
  100% { transform: translateX(450%); }
}

@keyframes tetherFlow {
  0% { transform: scaleY(0); transform-origin: center bottom; opacity: 0; }
  50% { transform: scaleY(1); transform-origin: center bottom; opacity: 1; }
  100% { transform: scaleY(0); transform-origin: center top; opacity: 0; }
}

/* Custom hide scrollbar for cross-browser support */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
