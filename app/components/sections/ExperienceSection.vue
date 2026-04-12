<template>
  <section id="experience" class="py-24 md:py-32 bg-page">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-[300px_1fr] gap-12 md:gap-20">
        
        <!-- Sidebar Title -->
        <div class="lg:sticky lg:top-32 h-fit">
          <div class="mb-10">
            <span class="text-brand-a text-6xl font-black tracking-tighter">7+</span>
            <p class="text-main text-xl font-bold tracking-tight">Years Expertise</p>
            <p class="text-muted text-[0.65rem] font-bold uppercase tracking-widest opacity-60">Industry Veteran</p>
          </div>

          <h2 class="text-main mb-6 text-4xl font-black tracking-tighter md:text-5xl border-l-4 border-brand-a pl-6">
            Career <br> <span class="text-brand-a">Journey</span>
          </h2>
          <p class="text-soft text-lg font-medium opacity-80 pl-7">A proven track record of steering design at venture scale.</p>
        </div>

        <!-- Experience Timeline -->
        <div class="divide-y divide-subtle border-t border-subtle">
          <div 
            v-for="(job, idx) in experience" 
            :key="idx" 
            class="group py-12 transition-all reveal-item"
            :style="{ animationDelay: `${idx * 0.15}s` }"
          >
            <div class="grid md:grid-cols-[160px_1fr] gap-8">
              <!-- Period -->
              <div class="pt-1">
                 <span class="inline-flex items-center px-3 py-1 rounded-full bg-soft text-muted text-[0.65rem] font-bold uppercase tracking-widest border border-subtle">
                   {{ job.period }}
                 </span>
              </div>

              <!-- Content -->
              <div>
                 <div class="flex flex-wrap items-baseline gap-3 mb-4">
                    <h3 class="text-main text-2xl font-bold tracking-tight group-hover:text-brand-a transition-colors">
                       {{ job.role }}
                    </h3>
                    <span class="text-muted font-bold text-sm">@ {{ job.company }}</span>
                 </div>
                 
                 <p class="text-soft text-lg font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity mb-8 max-w-2xl">
                    {{ job.description }}
                 </p>

                 <!-- Skill Badges -->
                 <div class="flex flex-wrap gap-2">
                    <span v-for="tag in job.tags" :key="tag" class="px-4 py-1 rounded-full bg-soft/50 border border-subtle text-muted text-[0.6rem] font-bold uppercase tracking-widest hover:border-brand-a transition-colors">
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
    description: 'Leading the design direction for complex cloud-native platforms. Scaling design systems from conceptual wireframes to high-fidelity implementation across enterprise products.',
    tags: ['Leadership', 'Design Systems', 'Product Strategy', 'Figma']
  },
  {
    role: 'Front-end Developer',
    company: 'Cloud Software Solutions',
    period: '2017 — 2021',
    description: 'Developed and maintained architectural web applications. Focused on bridging the gap between high-end design and production-ready Vue/Nuxt environments.',
    tags: ['Vue.js', 'Nuxt 3', 'Tailwind CSS', 'UI Architecture']
  },
  {
    role: 'UI/UX Specialist',
    company: 'Freelance & Contract',
    period: '2015 — 2017',
    description: 'Collaborating with international startups to launch MVPs. Specializing in rapid prototyping and high-fidelity mockups for venture capital investment pitches.',
    tags: ['MVP Launch', 'UX Research', 'Rapid Prototyping']
  }
]
</script>

<style scoped>
.reveal-item {
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>


