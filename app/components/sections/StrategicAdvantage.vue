<template>
  <section id="strategic-advantage" class="py-24 md:py-32 bg-page relative overflow-hidden">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glass to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Left-aligned intro + right column small specs -->
      <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end mb-16 md:mb-24">
        <div class="max-w-3xl">
          <span class="section-label mb-6">Why me</span>
          <h2 class="text-main mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
            Built for founders who want <span class="serif-font italic text-accent">velocity.</span>
          </h2>
          <p class="text-soft text-lg leading-relaxed max-w-2xl mt-8">
            I fuse UI/UX judgment with production engineering so your product launches faster, cleaner, and investor-ready.
          </p>
        </div>

        <ul class="grid grid-cols-3 gap-8 shrink-0">
          <li v-for="spec in specs" :key="spec.label" class="flex flex-col gap-1.5">
            <Icon :name="spec.icon" class="h-4 w-4 text-accent mb-2" />
            <span class="text-main font-semibold text-sm tracking-tight">{{ spec.title }}</span>
            <span class="text-muted text-xs">{{ spec.label }}</span>
          </li>
        </ul>
      </div>

      <!-- Pillars -->
      <div class="grid md:grid-cols-3 gap-5">
        <div v-for="(pillar, idx) in pillars" :key="idx"
             :class="[`reveal reveal-delay-${Math.min(idx, 3)}`, 'relative p-8 md:p-10 rounded-3xl bg-panel/40 border border-glass hover:border-accent/30 transition-all duration-300 flex flex-col']">

           <div class="h-10 w-10 rounded-xl bg-accent/8 text-accent flex items-center justify-center mb-8">
              <Icon :name="pillar.icon" class="h-5 w-5" />
           </div>

           <h3 class="text-main text-xl font-semibold tracking-tight mb-3">
              {{ pillar.title }}
           </h3>
           <p class="text-soft text-[0.95rem] leading-relaxed">
              {{ pillar.description }}
           </p>

           <div class="mt-auto pt-8 flex items-center gap-2 text-muted text-sm">
              <span class="h-1 w-1 rounded-full bg-accent"></span>
              {{ pillar.stat }}
           </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const specs = [
  { title: '7-day sprint', label: 'Fast launch', icon: 'lucide:zap' },
  { title: 'Fixed budget', label: 'No scope creep', icon: 'lucide:shield-check' },
  { title: '1-on-1 lead', label: 'Direct work', icon: 'lucide:fingerprint' },
]

const pillars = [
  {
    title: 'Design to code',
    description: 'No handoff friction — I deliver production-ready Nuxt & Vue straight from Figma.',
    icon: 'lucide:terminal',
    stat: '99% design parity',
  },
  {
    title: 'Built to scale',
    description: 'Design systems architected for millions of users and multi-product ecosystems.',
    icon: 'lucide:component',
    stat: 'High-scale tested',
  },
  {
    title: 'Founder focus',
    description: 'A relentless partnership until it ships right — unlimited revisions, zero fluff.',
    icon: 'lucide:rocket',
    stat: 'Priority access',
  },
]
</script>
