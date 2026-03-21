<template>
  <section id="experience" class="py-24 md:py-32">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <h2 class="text-main mb-4 text-4xl font-black tracking-tight md:text-5xl border-l-[6px] border-[color:var(--brand-a)] pl-6">Career Journey</h2>
        <p class="text-soft text-lg font-medium opacity-80 pl-8">A track record of leading design at scale.</p>
      </div>

      <div class="mt-12 divide-y divide-subtle/40 border-t border-subtle/40">
        <div 
          v-for="(job, idx) in experience" 
          :key="idx" 
          class="group relative py-12 transition-all hover:bg-soft/20 px-4 md:px-8 rounded-2xl md:mx-[-2rem]"
        >
          <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12">
            <!-- Period & Role Cluster -->
            <div class="md:w-1/3">
               <span class="text-brand-a text-sm font-black uppercase tracking-widest mb-2 block">{{ job.period }}</span>
               <h3 class="text-main text-2xl font-black tracking-tight group-hover:text-[color:var(--brand-a)] transition-colors">
                  {{ job.role }}
               </h3>
               <p class="text-muted font-bold mt-1 flex items-center gap-2">
                 {{ job.company }}
               </p>
            </div>

            <!-- Description Cluster -->
            <div class="md:w-2/3">
               <p class="text-soft text-lg font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {{ job.description }}
               </p>
               <div class="flex flex-wrap gap-x-4 mt-6 opacity-40 group-hover:opacity-100 transition-opacity">
                  <span v-for="tag in job.tags" :key="tag" class="text-muted text-[0.7rem] font-bold uppercase tracking-[0.2em] relative before:content-['•'] before:absolute before:-left-3 before:text-brand-a first:before:hidden">
                    {{ tag }}
                  </span>
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
    description: 'Leading the design direction for complex cloud-native platforms. Scaling design systems from Figma to high-fidelity implementation across a suite of open-source and enterprise storage products.',
    tags: ['Leadership', 'System Scaling', 'Figma Flow', 'Product Strategy']
  },
  {
    role: 'Front-end Developer',
    company: 'Cloud Software Solutions',
    period: '2017 — 2021',
    description: 'Developed and maintained enterprise-level web applications. Focused on building responsive, performant user interfaces and bridging the gap between designers and production code.',
    tags: ['Vue.js ecosystem', 'Nuxt 3', 'Tailwind CSS', 'Interface Craft']
  },
  {
    role: 'UI/UX Specialist',
    company: 'Freelance & Contract',
    period: '2015 — 2017',
    description: 'Collaborated with international startups to build and launch MVPs from scratch. Specializing in rapid prototyping and high-fidelity mockups for investment pitches.',
    tags: ['MVP Launch', 'UX Research', 'Rapid Prototyping']
  }
]
</script>
