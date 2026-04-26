<template>
  <SharedSectionWrapper section-id="process" bg="page" pattern="dots">

    <!-- Compact Header -->
    <!-- Standardized Section Header -->
    <SharedSectionHeader 
      label="Execution Framework"
      description="A high-velocity engineering protocol designed for founders who value precision over process."
      :centered="true"
      class="max-w-4xl mx-auto"
    >
      <template #title>
        Systematic <span style="color: var(--text-soft)">delivery.</span>
      </template>
    </SharedSectionHeader>

    <!-- Pipeline Grid: 4 Columns -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div 
        v-for="(step, idx) in steps" 
        :key="idx"
        class="reveal group relative"
        :class="`reveal-delay-${idx + 1}`"
      >
        <!-- Connection Line (Desktop) -->
        <div v-if="idx < steps.length - 1" class="hidden lg:block absolute top-[40px] -right-3 w-6 h-px bg-glass z-0"></div>

        <!-- Compact Architectural Card -->
        <SharedGlassCard padding="p-6 md:p-10" rounded="rounded-[24px]" :bg-opacity="5" class="h-full flex flex-col">
          
          <!-- Phase Badge -->
          <div class="flex justify-between items-center mb-4">
             <span class="text-accent text-[0.7rem] font-bold tracking-[0.3em] font-mono opacity-80">PHASE_0{{ idx + 1 }}</span>
             <SharedIconBox size="md">
               <Icon v-if="step && step.icon" :name="step.icon" class="h-4 w-4" />
             </SharedIconBox>
          </div>

          <!-- Content -->
          <div class="mb-8">
            <h3 class="group-hover:text-accent transition-colors mb-4">
               {{ step.title }}
            </h3>
            <p class="text-muted text-sm font-medium leading-relaxed">
               {{ step.description }}
            </p>
          </div>

          <!-- Compact Outputs List -->
          <div class="mt-auto pt-6 border-t border-glass space-y-2">
            <div v-for="output in step.outputs" :key="output" class="flex items-center gap-2">
               <div class="h-1 w-1 rounded-full group-hover:bg-accent transition-colors bg-[color-mix(in_srgb,var(--accent),transparent_70%)]"></div>
               <span class="text-soft text-[0.7rem] font-bold">{{ output }}</span>
            </div>
          </div>
        </SharedGlassCard>
      </div>
    </div>

    <!-- Strategy Footer Note -->
    <div class="reveal mt-12 flex items-center justify-center gap-4 py-4 px-6 rounded-full bg-panel/20 border border-glass w-fit mx-auto">
       <Icon name="lucide:shield-check" class="h-4 w-4 text-accent" />
       <span class="text-muted text-[0.65rem] font-bold uppercase tracking-widest">Protocol-Driven Consistency Guaranteed</span>
    </div>

  </SharedSectionWrapper>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Behavioral Audit', 
    icon: 'lucide:brain',
    description: 'Deconstructing your audience\'s psychological drivers into a battle-hardened conversion roadmap.',
    outputs: ['Psychological Profiling', 'Friction Analysis', 'Trigger Strategy'],
  },
  {
    title: 'Cognitive Mapping', 
    icon: 'lucide:git-branch',
    description: 'Building structural logic that aligns perfectly with human intuition and decision-making.',
    outputs: ['Dopamine Loops', 'Hierarchy Maps', 'Decision Flows'],
  },
  {
    title: 'Emotional UI', 
    icon: 'lucide:palette',
    description: 'Designing high-performance visual systems mathematically proven to build trust and demand action.',
    outputs: ['Color Psychology', 'High-Fi Interfaces', 'Micro-Interactions'],
  },
  {
    title: 'Neurological Scale', 
    icon: 'lucide:rocket',
    description: 'Bridging behavior-driven design with flawless Vue/Nuxt code for an addictive product launch.',
    outputs: ['Production Engine', 'QA Physics Check', 'Scale Protocols'],
  }
]
</script>
