<template>
  <SharedSectionWrapper section-id="strategic-advantage" bg="soft" :centered="true">

    <!-- Section Header -->
    <SharedSectionHeader
      label="Why It Works"
      :centered="true"
      description="Most designers hand off files. Most developers receive them. I do both — which means nothing gets lost between the two."
    >
      <template #title>
        Built different. <span class="text-gradient">Intentionally</span>
      </template>
    </SharedSectionHeader>

    <!-- Stats row — bold numbers, not cards -->
    <div class="reveal grid grid-cols-3 gap-0 mb-20 max-w-2xl mx-auto border border-[var(--border-glass)] rounded-2xl overflow-hidden bg-panel" style="box-shadow: var(--card-shadow);">
      <div v-for="(spec, idx) in specs" :key="spec.label" class="flex flex-col items-center py-8 px-4 group relative" :class="idx < specs.length - 1 ? 'border-r border-[var(--border-glass)]' : ''">
        <Icon :name="spec.icon" class="h-4 w-4 text-accent mb-3 opacity-70" />
        <span class="text-main text-xl font-black tracking-tight leading-none mb-1.5">{{ spec.title }}</span>
        <span class="text-[0.5rem] font-black uppercase tracking-[0.2em] text-soft opacity-80">{{ spec.label }}</span>
      </div>
    </div>

    <!-- Pillars — asymmetric, editorial layout -->
    <div class="grid md:grid-cols-3 gap-6 text-left mb-16">
      <SharedGlassCard
        v-for="(pillar, idx) in pillars" :key="idx"
        :class="`reveal reveal-delay-${idx+1}`"
        class="flex flex-col h-full group relative overflow-hidden"
        padding="p-8 md:p-10"
      >
        <!-- Dot pattern texture -->
        <div class="absolute inset-0 rounded-[inherit] opacity-[0.4]" style="background-image: radial-gradient(circle, var(--border-glass) 1px, transparent 1px); background-size: 18px 18px; mask-image: radial-gradient(ellipse at bottom right, black 0%, transparent 70%); -webkit-mask-image: radial-gradient(ellipse at bottom right, black 0%, transparent 70%);"></div>

        <!-- Icon -->
        <div class="mb-8 relative z-10">
          <div class="h-10 w-10 rounded-xl flex items-center justify-center" style="background: color-mix(in srgb, var(--accent), transparent 88%); border: 1px solid color-mix(in srgb, var(--accent), transparent 75%);">
            <Icon :name="pillar.icon" class="h-5 w-5 text-accent" />
          </div>
        </div>

        <div class="relative z-10 flex-1">
          <h3 class="text-lg font-black tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">{{ pillar.title }}</h3>
          <p class="text-soft text-sm font-medium leading-relaxed opacity-75">{{ pillar.description }}</p>
        </div>

        <!-- Bottom tag -->
        <div class="relative z-10 mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-2">
          <div class="h-1.5 w-1.5 rounded-full bg-accent"></div>
          <span class="text-accent text-[0.55rem] font-black uppercase tracking-[0.25em]">{{ pillar.stat }}</span>
        </div>
      </SharedGlassCard>
    </div>

    <!-- Bottom CTA -->
    <div class="reveal flex flex-col items-center gap-4">
      <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" variant="primary" size="lg" class="px-16 h-14 rounded-full group" hover-text="Let's Build">
        Start a Project
        <template #right>
          <Icon name="lucide:arrow-right" class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </template>
      </SharedButton>
      <p class="text-soft text-[0.6rem] font-bold uppercase tracking-widest opacity-80">No retainers. No surprises. Fixed scope.</p>
    </div>

  </SharedSectionWrapper>
</template>

<script setup lang="ts">
const specs = [
  { title: '2–4 Weeks', label: 'Sprint to launch', icon: 'lucide:zap' },
  { title: 'Fixed Price', label: 'No surprise costs', icon: 'lucide:shield-check' },
  { title: '1-on-1', label: 'Direct access to me', icon: 'lucide:fingerprint' }
]

const pillars = [
  {
    title: 'Interfaces that just work',
    description: 'Good design removes the thinking. Users move faster, convert better, and come back',
    icon: 'lucide:brain-circuit',
    stat: 'Conversion-focused'
  },
  {
    title: 'Design that earns trust',
    description: 'First impressions happen in milliseconds. The right visual language builds credibility before a word is read',
    icon: 'lucide:shield-check',
    stat: 'Credibility by design'
  },
  {
    title: 'Products people return to',
    description: 'Beyond the launch. I design for the long session — the second visit, the third, the habit',
    icon: 'lucide:infinity',
    stat: 'Habit-forming UX'
  }
]
</script>
