<template>
  <section id="stack" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="Core Stack"
        description="The tools and methods I rely on most across design and front-end work."
      />
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(package_, idx) in packages" 
          :key="idx"
          :class="[
            'rounded-xl border p-8 transition',
            package_.featured 
              ? 'gradient-border border-[color:var(--brand-a)]/50 bg-[linear-gradient(130deg,rgba(249,115,22,0.12),rgba(236,72,153,0.08))] transform scale-105'
              : 'border-subtle bg-panel hover:border-[color:var(--brand-a)]/40'
          ]"
        >
          <div v-if="package_.featured" class="brand-gradient mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold text-white">
            STRONGEST FIT
          </div>
          <h3 class="text-main mb-2 text-2xl font-bold">{{ package_.name }}</h3>
          <p class="mb-6 text-lg font-bold text-[color:var(--brand-a)]">{{ package_.label }}</p>
          <p class="text-muted mb-8 text-sm">{{ package_.description }}</p>
          <ul class="space-y-3 mb-8">
            <li v-for="feature in package_.features" :key="feature" class="text-soft flex items-start gap-2 text-sm">
              <span class="mt-1 text-[color:var(--brand-a)]">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <SharedButton :variant="package_.featured ? 'primary' : 'outline'" class="w-full">
            {{ package_.cta }}
          </SharedButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Package {
  name: string
  label: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
}

const packages: Package[] = [
  {
    name: 'Design',
    label: 'UX and visual systems',
    description: 'The design side of my work blends product thinking with detailed interface craft.',
    features: [
      'UI/UX Design',
      'Wireframes & prototypes',
      'Design systems',
      'Interaction thinking',
      'Interface refinement'
    ],
    cta: 'Design Focus'
  },
  {
    name: 'Front-end',
    label: 'Code-aware product execution',
    description: 'My implementation background helps me move fluently between ideas, screens, and production-ready UI.',
    features: [
      'Vue.js',
      'Nuxt.js',
      'Tailwind CSS',
      'Bootstrap & Bulma',
      'JavaScript foundations',
      'Developer handoff awareness'
    ],
    cta: 'Build Focus',
    featured: true
  },
  {
    name: 'Open Source',
    label: 'Community and contribution',
    description: 'Beyond client-facing design, I contribute inside real repositories and cross-functional product teams.',
    features: [
      'AppsCode ecosystem',
      'Repository collaboration',
      'Pull requests & reviews',
      'Public portfolio repos',
      'Visible contribution history'
    ],
    cta: 'Community Focus'
  }
]
</script>
