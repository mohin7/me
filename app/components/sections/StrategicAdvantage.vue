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
    <div class="reveal grid grid-cols-3 gap-0 mb-12 md:mb-20 max-w-2xl mx-auto border border-[var(--border-glass)] rounded-2xl overflow-hidden bg-panel" style="box-shadow: var(--card-shadow);">
      <div v-for="(spec, idx) in specs" :key="spec.label" class="flex flex-col items-center py-6 md:py-8 px-2 md:px-4 group relative" :class="idx < specs.length - 1 ? 'border-r border-[var(--border-glass)]' : ''">
        <Icon :name="spec.icon" class="h-4 w-4 text-accent mb-3 opacity-70" />
        <span class="text-main text-xl font-black tracking-tight leading-none mb-1.5">{{ spec.title }}</span>
        <span class="text-[0.5rem] font-black uppercase tracking-[0.2em] text-soft opacity-80">{{ spec.label }}</span>
      </div>
    </div>

    <!-- Pillars — asymmetric, editorial layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left mb-12 md:mb-16">
      <SharedGlassCard
        v-for="(pillar, idx) in pillars" :key="idx"
        :class="`reveal reveal-delay-${idx+1}`"
        class="flex flex-col h-full group relative overflow-hidden"
        padding="p-8 md:p-10"
      >
        <!-- Dot pattern texture -->
        <div class="absolute inset-0 rounded-[inherit] opacity-[0.4]" style="background-image: radial-gradient(circle, var(--border-glass) 1px, transparent 1px); background-size: 18px 18px; mask-image: radial-gradient(ellipse at bottom right, black 0%, transparent 70%); -webkit-mask-image: radial-gradient(ellipse at bottom right, black 0%, transparent 70%);"></div>

        <!-- Icon -->
        <div class="mb-8 relative z-10 h-12 w-12">
          <svg v-if="idx === 0" viewBox="0 0 48 48" fill="none" class="h-full w-full">
            <!-- Interfaces that work: cursor + clean grid -->
            <rect x="4" y="8" width="28" height="22" rx="3" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
            <line x1="4" y1="14" x2="32" y2="14" stroke="var(--accent)" stroke-width="1" stroke-opacity="0.4"/>
            <rect x="7" y="17" width="8" height="6" rx="1.5" fill="var(--accent)" fill-opacity="0.3"/>
            <rect x="17" y="17" width="12" height="6" rx="1.5" fill="var(--accent)" fill-opacity="0.15"/>
            <rect x="7" y="25" width="22" height="3" rx="1.5" fill="var(--accent)" fill-opacity="0.1"/>
            <!-- Cursor -->
            <path d="M30 32 L30 44 L33.5 40.5 L37 46 L39 44.5 L35.5 39 L40 39 Z" fill="var(--accent)" fill-opacity="0.8" stroke="var(--accent)" stroke-width="0.8" stroke-linejoin="round"/>
          </svg>
          <svg v-else-if="idx === 1" viewBox="0 0 48 48" fill="none" class="h-full w-full">
            <!-- Design that earns trust: shield + checkmark -->
            <path d="M24 4 L40 10 L40 26 C40 35 24 44 24 44 C24 44 8 35 8 26 L8 10 Z" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M24 4 L40 10 L40 22 C40 31 24 40 24 40" fill="var(--accent)" fill-opacity="0.05"/>
            <!-- Checkmark -->
            <path d="M16 24 L21 30 L32 18" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else viewBox="0 0 48 48" fill="none" class="h-full w-full">
            <!-- Products people return to: heart with return arrow -->
            <path d="M24 38 C24 38 8 28 8 18 C8 13 12 10 16 10 C19 10 22 12 24 15 C26 12 29 10 32 10 C36 10 40 13 40 18 C40 28 24 38 24 38 Z" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M24 38 C24 38 14 30 10 22" stroke="var(--accent)" stroke-width="0" />
            <!-- Return arrow loop -->
            <path d="M32 42 C37 42 42 38 42 32 C42 26 37 22 32 22" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.7"/>
            <path d="M29 20 L32 22 L29 24.5" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.7"/>
          </svg>
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
