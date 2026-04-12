<template>
  <section id="experience" class="py-24 md:py-32 bg-page relative overflow-visible">
    <!-- Geometric Background Decorative -->
    <div class="absolute top-0 right-0 h-full w-1/3 opacity-[0.02] pointer-events-none border-l border-brand-a border-dashed hidden lg:block"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-[340px_1fr] gap-16 md:gap-24 items-start">
        
        <!-- Sticky Sidebar: The Metric & Title -->
        <div class="lg:sticky lg:top-36 h-fit z-30">
          <div class="inline-flex flex-col mb-12">
            <div class="flex items-baseline gap-2">
              <span class="text-brand-a text-7xl font-black tracking-tighter leading-none">7+</span>
              <span class="text-main text-xl font-black uppercase tracking-widest italic opacity-20">Years</span>
            </div>
            <p class="text-main text-2xl font-black tracking-tight mt-2 italic">Crafting Products</p>
            <div class="h-1 w-12 bg-brand-a mt-4"></div>
          </div>

          <h2 class="text-main mb-8 text-4xl font-black tracking-tighter md:text-5xl leading-[0.9]">
            Professional <br> <span class="text-brand-a italic">Trajectory</span>
          </h2>
          <p class="text-soft text-lg font-medium opacity-70 leading-relaxed max-w-[280px]">
            A documented history of leading design and engineering at venture scale.
          </p>
        </div>

        <!-- The Timeline Content -->
        <div class="relative space-y-4">
          <!-- Central Timeline Line -->
          <div class="absolute left-0 md:left-24 top-0 bottom-0 w-px bg-gradient-to-down from-brand-a via-subtle to-transparent opacity-20 hidden md:block"></div>

          <div 
            v-for="(job, idx) in experience" 
            :key="idx" 
            class="experience-card group relative reveal-item"
            :style="{ animationDelay: `${idx * 0.15}s` }"
          >
            <!-- Timeline Node (Desktop) -->
            <div class="absolute left-[-5px] md:left-[91px] top-12 h-3 w-3 rounded-full border-2 border-brand-a bg-page z-20 transition-transform group-hover:scale-150 group-hover:bg-brand-a hidden md:block"></div>

            <div class="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 p-8 md:p-12 rounded-[24px] border border-transparent hover:border-subtle hover:bg-panel/40 hover:backdrop-blur-sm transition-all duration-500">
              
              <!-- Period Column -->
              <div class="md:text-right pt-1.5 shrink-0">
                 <span class="text-muted text-[0.7rem] font-black uppercase tracking-[0.25em] opacity-60 group-hover:opacity-100 transition-opacity">
                   {{ job.period }}
                 </span>
              </div>

              <!-- Main Content Column -->
              <div>
                 <div class="flex flex-wrap items-baseline gap-4 mb-6">
                    <h3 class="text-main text-2xl md:text-3xl font-black tracking-tighter group-hover:text-brand-a transition-colors">
                       {{ job.role }}
                    </h3>
                    <div class="h-1.5 w-1.5 rounded-full bg-brand-a opacity-30 mt-auto mb-3"></div>
                    <span class="text-soft font-bold text-sm tracking-tight opacity-60">@ {{ job.company }}</span>
                 </div>
                 
                 <p class="text-soft text-lg font-medium leading-relaxed opacity-80 mb-8 max-w-2xl group-hover:opacity-100 transition-opacity">
                    {{ job.description }}
                 </p>

                 <!-- Impact Points (Professional Touch) -->
                 <ul class="space-y-3 mb-10">
                    <li v-for="(impact, ii) in job.impacts" :key="ii" class="flex items-start gap-3">
                       <Icon name="lucide:check-circle" class="h-4 w-4 text-brand-a mt-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                       <span class="text-muted text-sm font-medium leading-relaxed group-hover:text-soft transition-colors">{{ impact }}</span>
                    </li>
                 </ul>

                 <!-- Tech Skills -->
                 <div class="flex flex-wrap gap-2">
                    <span v-for="tag in job.tags" :key="tag" class="px-4 py-1.5 rounded-full bg-soft text-muted text-[0.6rem] font-black uppercase tracking-widest border border-subtle group-hover:border-brand-a/30 transition-colors">
                      {{ tag }}
                    </span>
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
    role: 'Head of Design',
    company: 'AppsCode Ltd',
    period: '2021 — Now',
    description: 'Directing the end-to-end product design lifecycle for high-concurrency cloud storage and database platforms.',
    impacts: [
      'Architected a unified design system supporting 6+ enterprise products.',
      'Reduced developer implementation time by 40% through rigorous documentation.',
      'Led the design for KubeDB, securing wide-scale open-source adoption.'
    ],
    tags: ['Leadership', 'Design Systems', 'Cloud Ops', 'Product Strategy']
  },
  {
    role: 'Front-end Architect',
    company: 'Cloud Software Solutions',
    period: '2017 — 2021',
    description: 'Engineered high-performance web applications with a focus on high-fidelity animations and UI architecture.',
    impacts: [
      'Bridged the 0-to-1 gap between high-end Figma prototypes and production Vue apps.',
      'Developed core UI component libraries used by 4 independent product teams.',
      'Optimized runtime performance for data-heavy dashboard interfaces.'
    ],
    tags: ['Vue.js', 'Nuxt 3', 'Tailwind CSS', 'Performance']
  },
  {
    role: 'Lead UI/UX Designer',
    company: 'Freelance & Contract',
    period: '2015 — 2017',
    description: 'Partnering with international venture-scale startups to build and scale their initial product offerings.',
    impacts: [
      'Designed and launched 12+ MVPs from concept to high-fidelity prototyping.',
      'Helped 3 startups secure their initial rounds of seed funding via high-end product demos.',
      'Conducted 50+ user research sessions to define core product market fit.'
    ],
    tags: ['MVP Launch', 'UX Research', 'Venture Strategy']
  }
]
</script>

<style scoped>
.bg-gradient-to-down {
  background: linear-gradient(to bottom, var(--brand-a), var(--border-subtle), transparent);
}

.reveal-item {
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.experience-card:hover .absolute.bg-page {
  background: var(--brand-a);
}
</style>



