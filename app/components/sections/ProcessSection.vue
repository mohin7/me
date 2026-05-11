<template>
  <SharedSectionWrapper section-id="process" bg="page" pattern="dots">

    <!-- Compact Header -->
    <!-- Standardized Section Header -->
    <SharedSectionHeader
      label="How I Work"
      description="A clear, repeatable process. No surprises."
      :centered="true"
      class="max-w-4xl mx-auto"
    >
      <template #title>
        From brief <span style="color: var(--text-soft)">to launch.</span>
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
        <div v-if="idx < steps.length - 1" class="hidden lg:block absolute top-[40px] -right-3 w-6 h-px z-0" style="background: var(--border-glass);"></div>

        <!-- Compact Architectural Card -->
        <SharedGlassCard padding="p-6 md:p-10" rounded="rounded-2xl" :bg-opacity="100" class="h-full flex flex-col">
          
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
          <div class="mt-auto pt-6 border-t border-[var(--border-subtle)] space-y-2">
            <div v-for="output in step.outputs" :key="output" class="flex items-center gap-2">
               <div class="h-1 w-1 rounded-full group-hover:bg-accent transition-colors bg-[color-mix(in_srgb,var(--accent),transparent_70%)]"></div>
               <span class="text-soft text-[0.7rem] font-bold">{{ output }}</span>
            </div>
          </div>
        </SharedGlassCard>
      </div>
    </div>

    <!-- Strategy Footer Note -->
    <div class="reveal mt-12 flex items-center justify-center gap-4 py-4 px-6 rounded-full bg-panel border border-[var(--border-glass)] w-fit mx-auto" style="box-shadow: var(--card-shadow);">
       <Icon name="lucide:shield-check" class="h-4 w-4 text-accent" />
       <span class="text-muted text-[0.65rem] font-bold uppercase tracking-widest">Consistent, every time.</span>
    </div>

  </SharedSectionWrapper>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Discovery',
    icon: 'lucide:brain',
    description: 'Understanding who uses it, what they need, and where current experiences fall short.',
    outputs: ['User Research', 'Friction Mapping', 'Strategy Brief'],
  },
  {
    title: 'Structure',
    icon: 'lucide:git-branch',
    description: 'Building the information architecture and flows that feel natural to navigate.',
    outputs: ['IA Maps', 'User Flows', 'Navigation Logic'],
  },
  {
    title: 'Design',
    icon: 'lucide:palette',
    description: 'High-fidelity interfaces. Consistent, detailed, and ready for development.',
    outputs: ['Visual System', 'High-Fidelity UI', 'Motion Details'],
  },
  {
    title: 'Build & Ship',
    icon: 'lucide:rocket',
    description: 'Clean Vue/Nuxt implementation. QA\'d, optimised, and deployed.',
    outputs: ['Production Code', 'QA Review', 'Launch'],
  }
]
</script>
