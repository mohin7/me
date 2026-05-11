<template>
  <SharedSectionWrapper section-id="process" bg="page" pattern="dots">

    <SharedSectionHeader
      label="How I Work"
      description="A clear, repeatable process. No surprises."
      :centered="true"
      class="max-w-4xl mx-auto"
    >
      <template #title>
        From brief <span class="text-gradient">to launch.</span>
      </template>
    </SharedSectionHeader>

    <!-- Steps grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
      <div
        v-for="(step, idx) in steps"
        :key="idx"
        class="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border-glass)] bg-panel transition-all duration-500 hover:border-accent/30 hover:-translate-y-1"
        :class="`reveal-delay-${idx + 1}`"
        style="box-shadow: var(--card-shadow);"
      >
        <!-- Watermark number -->
        <span class="absolute -bottom-4 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none transition-colors duration-500" style="color: var(--border-glass);">{{ idx + 1 }}</span>


        <div class="relative z-10 p-7 md:p-8 flex flex-col h-full">

          <!-- Phase + Icon -->
          <div class="flex items-center justify-between mb-8">
            <span class="text-accent text-[0.6rem] font-black tracking-[0.35em] font-mono">PHASE_0{{ idx + 1 }}</span>
            <div class="h-9 w-9 rounded-xl flex items-center justify-center transition-colors duration-300" style="background: color-mix(in srgb, var(--accent), transparent 90%); border: 1px solid color-mix(in srgb, var(--accent), transparent 75%);">
              <Icon :name="step.icon" class="h-4 w-4 text-accent" />
            </div>
          </div>

          <!-- Title + Description -->
          <div class="flex-1 mb-8">
            <h3 class="text-lg font-black tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">{{ step.title }}</h3>
            <p class="text-soft text-sm font-medium leading-relaxed opacity-75">{{ step.description }}</p>
          </div>

          <!-- Deliverables -->
          <div class="space-y-2 pt-5 border-t border-[var(--border-subtle)]">
            <p class="text-[0.5rem] font-black uppercase tracking-[0.25em] text-muted opacity-50 mb-3">Deliverables</p>
            <div v-for="output in step.outputs" :key="output" class="flex items-center gap-2.5">
              <div class="h-1 w-1 rounded-full bg-accent opacity-60 shrink-0"></div>
              <span class="text-soft text-[0.7rem] font-bold">{{ output }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="reveal mt-10 flex items-center justify-center">
      <div class="flex items-center gap-3 py-3 px-6 rounded-full border border-[var(--border-glass)] bg-panel" style="box-shadow: var(--card-shadow);">
        <div class="relative flex h-1.5 w-1.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
          <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
        </div>
        <span class="text-muted text-[0.6rem] font-black uppercase tracking-widest">Consistent, every time.</span>
      </div>
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
  },
]
</script>
