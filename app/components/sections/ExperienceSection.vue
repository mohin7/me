<template>
  <section id="experience" class="py-24 md:py-32 bg-page relative overflow-visible">
    <!-- Geometric Background Decorative -->
    <div class="absolute top-0 right-0 h-full w-1/3 opacity-[0.02] pointer-events-none border-l border-accent border-dashed hidden lg:block"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-[340px_1fr] gap-16 md:gap-24 items-start">
        
        <!-- Sticky Sidebar: The Metric & Title -->
        <div class="lg:sticky lg:top-36 h-fit z-30">
          <div class="inline-flex flex-col mb-12">
            <div class="flex items-baseline gap-2">
              <span class="text-accent text-7xl font-black tracking-tighter leading-none">07+</span>
              <span class="text-main text-xl font-black uppercase tracking-widest italic opacity-20">Years</span>
            </div>
            <p class="text-main text-2xl font-black tracking-tight mt-2 italic">Professional Craft</p>
            <div class="h-1 w-12 bg-accent mt-4"></div>
          </div>

          <h2 class="text-main mb-8 text-4xl font-black tracking-tighter md:text-5xl leading-[0.9]">
            Career <br> <span class="text-accent italic">Timeline</span>
          </h2>
          <p class="text-soft text-lg font-medium opacity-70 leading-relaxed max-w-[280px]">
            A documented history of building and leading digital products at scale.
          </p>
        </div>

        <!-- The Timeline Content -->
        <div class="relative space-y-4">
          <!-- Central Timeline Line -->
          <div class="absolute left-0 md:left-24 top-0 bottom-0 w-px bg-gradient-to-down from-accent via-subtle to-transparent opacity-20 hidden md:block"></div>

          <div 
            v-for="(job, idx) in experience" 
            :key="idx" 
            class="experience-card group relative reveal-item"
            :style="{ animationDelay: `${idx * 0.15}s` }"
          >
            <!-- Timeline Node (Desktop) -->
            <div class="absolute left-[-5px] md:left-[91px] top-12 h-3 w-3 rounded-full border-2 border-accent bg-page z-20 transition-transform group-hover:scale-150 group-hover:bg-accent hidden md:block"></div>

            <div class="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 p-8 md:p-12 rounded-[24px] border border-transparent hover:border-glass hover:bg-panel/40 hover:backdrop-blur-sm transition-all duration-500">
              
              <!-- Period Column -->
              <div class="md:text-right pt-1.5 shrink-0">
                 <span class="text-muted text-[0.7rem] font-bold uppercase tracking-[0.25em] opacity-60 group-hover:opacity-100 transition-opacity">
                   {{ job.period }}
                 </span>
              </div>

              <!-- Main Content Column -->
              <div>
                 <div class="flex flex-wrap items-baseline gap-4 mb-6">
                    <h3 class="text-main text-2xl md:text-3xl font-black tracking-tighter group-hover:text-accent transition-colors">
                       {{ job.role }}
                    </h3>
                    <div class="h-1.5 w-1.5 rounded-full bg-accent opacity-30 mt-auto mb-3"></div>
                    <span class="text-soft font-bold text-sm tracking-tight opacity-60">@ {{ job.company }}</span>
                 </div>
                 
                 <p class="text-soft text-lg font-medium leading-relaxed opacity-80 mb-8 max-w-2xl group-hover:opacity-100 transition-opacity">
                    {{ job.description }}
                 </p>

                 <!-- Impact Points -->
                 <ul class="space-y-3 mb-10">
                    <li v-for="(impact, ii) in job.impacts" :key="ii" class="flex items-start gap-4">
                       <Icon name="lucide:arrow-right" class="h-4 w-4 text-accent mt-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                       <span class="text-muted text-sm font-medium leading-relaxed group-hover:text-soft transition-colors">{{ impact }}</span>
                    </li>
                 </ul>

                 <!-- Technical Focus -->
                 <div class="flex flex-wrap gap-2">
                    <span v-for="tag in job.tags" :key="tag" class="px-4 py-1.5 rounded-full bg-soft text-muted text-[0.6rem] font-bold uppercase tracking-widest border border-glass group-hover:border-accent/30 transition-colors">
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
    role: 'Product Design Engineer',
    company: 'AppsCode Ltd',
    period: '2021 — Present',
    description: 'Leading the design and development of end-to-end cloud infrastructure platforms and complex database interfaces.',
    impacts: [
      'Built a unified design system that scaled across 6+ enterprise-grade products.',
      'Bridged the gap between UI design and implementation, reducing dev cycles by 40%.',
      'Developed core product features for KubeDB, driving open-source project growth.'
    ],
    tags: ['Design Systems', 'Nuxt.js', 'Vue.js', 'Product Strategy']
  },
  {
    role: 'Frontend Architect',
    company: 'Cloud Software Solutions',
    period: '2017 — 2021',
    description: 'Specialized in building high-performance web applications with a focus on UI/UX fidelity and component architecture.',
    impacts: [
      'Translated complex Figma designs into production-ready Vue applications.',
      'Developed reusable UI libraries shared across multiple global product teams.',
      'Optimized site performance and accessibility for data-heavy dashboard products.'
    ],
    tags: ['Frontend Architecture', 'Vue.js', 'Performance Opt', 'UI Design']
  },
  {
    role: 'UI/UX Designer & Developer',
    company: 'Freelance & Contract',
    period: '2015 — 2017',
    description: 'Partnered with early-stage startups to launch their initial products and define their visual brand identities.',
    impacts: [
      'Designed and launched 12+ MVPs from initial strategy to high-fidelity code.',
      'Assisted startups in securing funding through high-end interactive product prototypes.',
      'Conducted user testing to validate product market fit and user flow efficiency.'
    ],
    tags: ['MVP Launch', 'UX Research', 'Visual Identity']
  }
]
</script>

<style scoped>
.bg-gradient-to-down {
  background: linear-gradient(to bottom, var(--accent), var(--border-glass), transparent);
}

.reveal-item {
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.experience-card:hover .absolute.bg-page {
  background: var(--accent);
}
</style>



