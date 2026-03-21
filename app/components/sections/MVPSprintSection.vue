<template>
  <section id="sprint" class="py-24 md:py-64 bg-page relative overflow-hidden">
    <!-- Immersive Background Accents -->
    <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[40rem] bg-[radial-gradient(circle_at_50%_50%,rgba(var(--brand-rgb),0.02),transparent_70%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mb-48 text-center px-4">
        <h2 class="text-main mb-6 text-4xl font-black tracking-tight md:text-7xl leading-[1.05]">The 7-Day <span class="brand-text-gradient italic font-serif">Hyper-Sprint</span></h2>
        <p class="text-soft mx-auto max-w-2xl text-xl font-medium leading-relaxed opacity-60">
          Scaling from concept to investor-ready prototype in 168 hours. No fluff, just execution.
        </p>
      </div>
      
      <!-- Single-Row Overlapping 7-Day Timeline -->
      <div class="relative max-w-7xl mx-auto px-4 md:px-12">
        
        <!-- Central axis line (Always Visible) -->
        <div class="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-px bg-subtle/20 hidden md:block rounded-full">
           <div class="absolute inset-0 bg-brand-a/30 animate-[cometRun_12s_linear_infinite]"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-7 gap-y-48 items-center relative overflow-visible">
          <div 
            v-for="(phase, idx) in sprintPhases" 
            :key="idx" 
            class="group relative flex flex-col items-center justify-center min-h-[140px]"
          >
            <!-- Vertical Directional Tether (HIGH VISIBILITY) -->
            <div 
              class="absolute left-1/2 -translate-x-1/2 w-0.5 h-16 md:h-32 bg-gradient-to-t from-brand-a/60 via-brand-a/30 to-transparent hidden md:block"
              :class="idx % 2 === 0 ? '-top-[128px]' : '-bottom-[128px] rotate-180'"
            >
               <!-- Physical Label ON the Line -->
               <div 
                 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-brand-a text-white text-[0.6rem] font-black tracking-widest shadow-[0_0_15px_rgba(var(--brand-rgb),0.3)] z-50"
                 :class="idx % 2 === 0 ? 'rotate-0' : 'rotate-180'"
               >
                 D{{ phase.day }}
               </div>

               <!-- Arrowhead -->
               <div class="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-brand-a shadow-[0_0_10px_var(--brand-a)] rotate-180"></div>
               <!-- Moving Light Pulse -->
               <div class="absolute inset-0 bg-brand-a/40 animate-[tetherFlow_2s_ease-in-out_infinite]" :style="{ animationDelay: `${idx * 0.4}s` }"></div>
            </div>

            <!-- Central Node (Day Count) -->
            <div class="relative z-30 flex items-center justify-center">
               <div class="absolute inset-x-[-15%] inset-y-[-15%] rounded-full border border-subtle group-hover:border-brand-a/40 transition-all duration-700 scale-125"></div>
               <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-page border-2 border-subtle flex items-center justify-center shadow-2xl transition-all duration-700 group-hover:border-brand-a group-hover:shadow-[0_0_20px_rgba(var(--brand-rgb),0.3)] group-hover:scale-110">
                 <span class="text-main md:text-lg font-black tracking-tight group-hover:text-brand-a transition-colors duration-700">{{ phase.day }}</span>
               </div>
            </div>

            <!-- Alternating Content Card (WIDE + Internal Count Line) -->
            <div 
              class="absolute left-1/2 -translate-x-1/2 w-[240px] md:w-[260px] p-6 md:p-8 rounded-[2rem] border border-subtle bg-panel/40 backdrop-blur-3xl transition-all duration-700 group-hover:border-brand-a/30 group-hover:bg-panel/60 group-hover:scale-[1.02] z-40 text-center"
              :class="idx % 2 === 0 ? '-top-[180px] md:-top-[220px]' : '-bottom-[180px] md:-bottom-[220px]'"
            >
              <div class="mb-4 flex flex-col items-center gap-2">
                <span class="text-brand-a text-[0.6rem] font-black uppercase tracking-[0.3em]">Phase 0{{ idx + 1 }}</span>
                <div class="h-px w-10 bg-brand-a/40"></div>
              </div>
              
              <h4 class="text-main mb-3 text-base md:text-lg font-black tracking-tight leading-tight group-hover:text-brand-a transition-colors line-clamp-1 truncate">{{ phase.title }}</h4>
              <p class="text-soft text-[0.7rem] md:text-xs font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                {{ phase.description }}
              </p>
            </div>

            <!-- Mobile Visual Separator -->
            <div class="md:hidden mt-24 h-px w-24 bg-gradient-to-r from-transparent via-subtle to-transparent last:hidden"></div>
          </div>
        </div>
      </div>

      <div class="mt-64 flex justify-center">
          <SharedButton tag="a" href="#contact" variant="primary" size="lg" class="!rounded-full px-12 py-6 text-xl font-black uppercase tracking-widest shadow-2xl shadow-brand-a/20 hover:scale-105 active:scale-95 transition-all">
             Start Your Sprint
             <Icon name="lucide:zap" class="ml-3 h-5 w-5" />
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
</style>
