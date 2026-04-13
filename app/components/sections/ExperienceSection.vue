<template>
  <section id="experience" class="py-24 md:py-44 bg-page relative overflow-visible">
    <!-- Sophisticated Technical Grid -->
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none" 
         style="background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px); background-size: 64px 64px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-[380px_1fr] gap-20 lg:gap-32 items-start">
        
        <!-- Sticky Sidebar: The Authority Anchor -->
        <div class="lg:sticky lg:top-40 h-fit">
          <div class="inline-flex flex-col mb-16">
            <div class="flex items-center gap-3 mb-6">
              <div class="h-px w-8 bg-accent/20"></div>
              <span class="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-soft">Technical Archive</span>
            </div>
            
            <div class="flex items-baseline gap-4 mb-4">
              <span class="text-accent text-8xl font-black tracking-tighter leading-none italic serif-font">07</span>
              <div class="flex flex-col">
                <span class="text-main text-xl font-black italic serif-font leading-none opacity-20 mt-2">Years</span>
                <span class="text-soft text-[0.65rem] font-black uppercase tracking-widest mt-2">Executive Craft</span>
              </div>
            </div>
            
            <div class="h-px w-24 bg-accent/20 mt-2"></div>
          </div>

          <h2 class="text-main mb-8 text-4xl font-black tracking-tighter md:text-6xl leading-[0.85]">
            Career <br />
            <span class="text-soft italic serif-font lowercase opacity-40">timeline.</span>
          </h2>
          <p class="text-soft text-lg font-medium leading-relaxed max-w-[320px]">
            A documented history of building and leading high-impact digital products at scale.
          </p>
        </div>

        <!-- The Timeline Content -->
        <div class="relative">
          <!-- Central Timeline Line (Matches Hero's subtle UI lines) -->
          <div class="absolute left-0 md:left-[32px] top-4 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/5 to-transparent hidden md:block"></div>

          <div class="space-y-12">
            <div 
              v-for="(job, idx) in experience" 
              :key="idx" 
              class="experience-card group relative reveal-item"
              :style="{ animationDelay: `${idx * 0.15}s` }"
            >
              <!-- Timeline Node -->
              <div class="absolute left-[-5px] md:left-[26px] top-12 h-3.5 w-3.5 rounded-full border-2 border-accent bg-page z-20 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent group-hover:shadow-[0_0_15px_var(--accent)] hidden md:block"></div>

              <div class="p-8 md:p-14 md:pl-28 rounded-[40px] border border-glass/5 bg-panel/10 hover:border-accent/10 hover:bg-panel/40 hover:backdrop-blur-3xl transition-all duration-700 hover:shadow-2xl">
                
                <!-- Main Content Column -->
                <div>
                  <!-- Period (Matches Hero Accent Colors) -->
                  <div class="flex items-center gap-4 mb-5">
                    <span class="text-accent text-[0.7rem] font-bold uppercase tracking-[0.4em] font-mono">
                       {{ job.period }}
                    </span>
                    <div class="h-px w-8 bg-accent/20"></div>
                    <span class="text-soft text-[0.55rem] font-black uppercase tracking-widest opacity-40">Entry_{{ idx + 1 }}</span>
                  </div>

                  <div class="flex flex-wrap items-baseline gap-4 mb-8">
                    <h3 class="text-main text-2xl md:text-4xl font-black tracking-tighter group-hover:text-accent transition-colors">
                       {{ job.role }}
                    </h3>
                    <div class="h-px w-4 bg-accent/20 mt-auto mb-4"></div>
                    <span class="text-soft font-bold text-sm tracking-tight italic">@ {{ job.company }}</span>
                  </div>
                  
                  <!-- Description (Matches Hero Subtitle Contrast) -->
                  <p class="text-soft text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl">
                     {{ job.description }}
                  </p>

                  <!-- Impact Points (Matches Hero Subtitle Contrast) -->
                  <div class="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                     <div v-for="(impact, ii) in job.impacts" :key="ii" class="flex items-start gap-4">
                        <div class="h-1.5 w-1.5 rounded-full bg-accent mt-2.5 shrink-0"></div>
                        <span class="text-soft text-sm font-medium leading-relaxed">{{ impact }}</span>
                     </div>
                  </div>

                  <!-- Technical Tags -->
                  <div class="flex flex-wrap gap-2 pt-10 border-t border-accent/5">
                     <span v-for="tag in job.tags" :key="tag" class="px-5 py-2 rounded-full bg-accent/5 text-soft text-[0.65rem] font-bold uppercase tracking-widest border border-glass hover:border-accent/30 transition-all cursor-default">
                       {{ tag }}
                     </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experience = [
  {
    role: 'Product Design Engineer',
    company: 'AppsCode Ltd',
    period: '2021 — Present',
    description: 'Leading the design and development of end-to-end cloud infrastructure platforms and complex database interfaces.',
    impacts: [
      'Scale design systems for 6+ products.',
      'Reduce dev cycles by 40%.',
      'Lead core KubeDB features.'
    ],
    tags: ['Design Systems', 'Nuxt.js', 'Vue.js', 'Product Strategy']
  },
  {
    role: 'Frontend Architect',
    company: 'Cloud Software Solutions',
    period: '2017 — 2021',
    description: 'Specialized in building high-performance web applications with a focus on UI/UX fidelity and component architecture.',
    impacts: [
      'Vue 2/3 ecosystem lead.',
      'Reusable UI global libraries.',
      'Data-heavy dashboard optimization.'
    ],
    tags: ['Frontend Architecture', 'Vue.js', 'Performance Opt']
  },
  {
    role: 'Startup Launch Specialist',
    company: 'Independent Partners',
    period: '2015 — 2017',
    description: 'Partnered with early-stage founders to launch their initial products and define their visual brand identities.',
    impacts: [
      'Launched 12+ MVPS in 24 months.',
      'Interactive prototype expert.',
      'Zero-to-One strategy lead.'
    ],
    tags: ['MVP Launch', 'UX Research', 'Visual Identity']
  }
]
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }

.reveal-item {
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.experience-card {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.experience-card:hover {
  transform: translateY(-8px);
}
</style>
