<template>
  <SharedSectionWrapper section-id="strategic-advantage" bg="soft" :centered="true">
    
    <!-- Section Header -->
    <SharedSectionHeader
      label="Why It Works"
      :centered="true"
      description="Most designers hand off files. Most developers receive them. I do both — which means nothing gets lost between the two."
    >
      <template #title>
        Built different. <span class="text-soft">Intentionally.</span>
      </template>
    </SharedSectionHeader>

    <!-- Compact Technical Specification Row -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
       <SharedGlassCard
         v-for="(spec, idx) in specs" :key="spec.label" 
         :class="`reveal reveal-delay-${idx+1}`"
         padding="p-6" rounded="rounded-3xl" :bg-opacity="30"
         class="flex flex-col items-center backdrop-blur-3xl"
       >
         <SharedIconBox size="md" class="mb-4">
            <Icon v-if="spec && spec.icon" :name="spec.icon" class="h-4 w-4" />
         </SharedIconBox>
          <span class="text-main font-black tracking-tight text-base mb-1">{{ spec.title }}</span>
          <span class="text-[0.55rem] font-black uppercase tracking-widest text-muted opacity-80">{{ spec.label }}</span>
       </SharedGlassCard>
    </div>

    <!-- The Balanced Grid Pillars -->
    <div class="grid md:grid-cols-3 gap-10 text-left">
      <SharedGlassCard 
        v-for="(pillar, idx) in pillars" :key="idx"
        :class="`reveal reveal-delay-${idx+1}`"
        class="flex flex-col h-full group"
      >
         <!-- Icon -->
         <SharedIconBox size="lg" class="mb-6">
            <Icon v-if="pillar && pillar.icon" :name="pillar.icon" class="h-6 w-6" />
         </SharedIconBox>

         <div class="mb-4">
            <h3 class="mb-3">{{ pillar.title }}</h3>
            <p class="text-soft text-sm font-medium leading-relaxed opacity-80">{{ pillar.description }}</p>
         </div>

         <!-- Status Signal -->
         <div class="mt-auto pt-6 flex items-center gap-2">
            <div class="h-1 w-1 rounded-full bg-accent"></div>
            <span class="text-muted text-[0.6rem] font-black uppercase tracking-[0.2em] opacity-60">{{ pillar.stat }}</span>
         </div>
      </SharedGlassCard>
    </div>

    <!-- Bottom CTA -->
    <div class="reveal mt-12 flex flex-col items-center">
       <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" variant="primary" size="lg" class="px-16 h-14 rounded-full group" hover-text="Let's Build">
        Start a Project
        <template #right>
          <Icon name="lucide:arrow-right" class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </template>
      </SharedButton>
    </div>

  </SharedSectionWrapper>
</template>

<script setup lang="ts">
const specs = [
  { title: '2-4 Wk Sprint', label: 'Fast to market', icon: 'lucide:zap' },
  { title: 'Fixed Budget', label: 'Fixed price', icon: 'lucide:shield-check' },
  { title: '1-on-1 Lead', label: 'One point of contact', icon: 'lucide:fingerprint' }
]

const pillars = [
  {
    title: 'Interfaces that just work',
    description: 'Good design removes the thinking. Users move faster, convert better, and come back.',
    icon: 'lucide:brain-circuit',
    stat: 'Conversion-focused'
  },
  {
    title: 'Design that earns trust',
    description: 'First impressions happen in milliseconds. The right visual language builds credibility before a word is read.',
    icon: 'lucide:shield-check',
    stat: 'Credibility by design'
  },
  {
    title: 'Products people return to',
    description: 'Beyond the launch. I design for the long session — the second visit, the third, the habit.',
    icon: 'lucide:infinity',
    stat: 'Habit-forming UX'
  }
]
</script>
