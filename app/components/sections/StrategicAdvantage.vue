<template>
  <SharedSectionWrapper section-id="strategic-advantage" :centered="true">
    
    <!-- Section Header -->
    <SharedSectionHeader 
      label="Strategic Advantage Matrix" 
      :centered="true"
      description="My journey began as a Software Engineer before evolving into a hybrid UI/UX architect. By fusing Psychological UX, deep human behavior insights, and technical mastery (Vue, Nuxt, SCSS), I don't just design interfaces—I solve critical user problems to ensure your product connects and scales."
    >
      <template #title>
        I engineer products that <span class="text-soft">serve users.</span>
      </template>
    </SharedSectionHeader>

    <!-- Compact Technical Specification Row -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
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
    <div class="grid md:grid-cols-3 gap-6 text-left">
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
       <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" target="_blank" variant="primary" size="lg" class="px-16 h-14 rounded-full group" hover-text="Let's Grow">
        Initiate Partnership
        <template #right>
          <Icon name="lucide:arrow-right" class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </template>
      </SharedButton>
    </div>

  </SharedSectionWrapper>
</template>

<script setup lang="ts">
const specs = [
  { title: '2-4 Wk Sprint', label: 'Rapid Launch', icon: 'lucide:zap' },
  { title: 'Fixed Budget', label: 'Zero Creep', icon: 'lucide:shield-check' },
  { title: '1-on-1 Lead', label: 'Direct Flow', icon: 'lucide:fingerprint' }
]

const pillars = [
  {
    title: 'Cognitive Friction Removal',
    description: 'I eliminate the mental load for your users. By mapping out behavioral patterns, I design interfaces that feel effortlessly intuitive, drastically increasing your conversion and retention rates.',
    icon: 'lucide:brain-circuit',
    stat: 'High-Conversion Architecture'
  },
  {
    title: 'Trust-Binding UI',
    description: 'Users buy with emotion and justify with logic. I engineer micro-interactions and color psychology to subconsciously build profound trust the exact moment a user lands on your platform.',
    icon: 'lucide:shield-check',
    stat: 'Authority-Driven Design'
  },
  {
    title: 'Addictive Product Loops',
    description: 'Beyond aesthetics, I focus on the dopamine mechanics of your product. I map the psychological journey from discovery to loyalty, turning casual visitors into deeply invested advocates.',
    icon: 'lucide:infinity',
    stat: 'Behavioral Hook Implementation'
  }
]
</script>
