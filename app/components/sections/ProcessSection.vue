<template>
  <SharedSectionWrapper section-id="process" bg="page" pattern="dots">

    <SharedSectionHeader
      label="How I Work"
      description="A clear, repeatable process. No surprises"
      :centered="true"
      class="max-w-4xl mx-auto"
    >
      <template #title>
        From brief <span class="text-gradient">to launch</span>
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


        <div class="relative z-10 p-5 md:p-8 flex flex-col h-full">

          <!-- Phase + Icon -->
          <div class="flex items-center justify-between mb-5 md:mb-8">
            <span class="text-accent text-[0.6rem] font-black tracking-[0.35em] font-mono">PHASE_0{{ idx + 1 }}</span>
            <div class="h-10 w-10 shrink-0">
              <!-- Discovery -->
              <svg v-if="idx === 0" viewBox="0 0 40 40" fill="none" class="h-full w-full">
                <circle cx="17" cy="17" r="9" fill="var(--accent)" fill-opacity="0.12" stroke="var(--accent)" stroke-width="1.5"/>
                <circle cx="17" cy="17" r="5" fill="var(--accent)" fill-opacity="0.2"/>
                <line x1="23.5" y1="23.5" x2="31" y2="31" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="17" cy="17" r="2" fill="var(--accent)"/>
              </svg>
              <!-- Structure -->
              <svg v-else-if="idx === 1" viewBox="0 0 40 40" fill="none" class="h-full w-full">
                <rect x="6" y="6" width="10" height="10" rx="2.5" fill="var(--accent)" fill-opacity="0.3" stroke="var(--accent)" stroke-width="1.5"/>
                <rect x="22" y="6" width="12" height="8" rx="2.5" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1.2"/>
                <rect x="22" y="20" width="12" height="8" rx="2.5" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1.2"/>
                <line x1="16" y1="11" x2="22" y2="10" stroke="var(--accent)" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.6"/>
                <line x1="16" y1="11" x2="22" y2="24" stroke="var(--accent)" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.6"/>
                <line x1="6" y1="24" x2="30" y2="32" stroke="var(--accent)" stroke-width="0"/>
              </svg>
              <!-- Design -->
              <svg v-else-if="idx === 2" viewBox="0 0 40 40" fill="none" class="h-full w-full">
                <rect x="5" y="8" width="24" height="18" rx="3" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
                <rect x="8" y="11" width="8" height="8" rx="1.5" fill="var(--accent)" fill-opacity="0.35"/>
                <line x1="18" y1="13" x2="26" y2="13" stroke="var(--accent)" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.6"/>
                <line x1="18" y1="17" x2="24" y2="17" stroke="var(--accent)" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.4"/>
                <!-- Pen tool nib -->
                <path d="M26 22 L34 14 L32 28 Z" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)" stroke-width="1.2" stroke-linejoin="round"/>
                <circle cx="26" cy="22" r="1.5" fill="var(--accent)"/>
              </svg>
              <!-- Build & Ship -->
              <svg v-else viewBox="0 0 40 40" fill="none" class="h-full w-full">
                <!-- Rocket body -->
                <path d="M20 6 C20 6 28 12 28 22 L20 30 L12 22 C12 12 20 6 20 6 Z" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)" stroke-width="1.5" stroke-linejoin="round"/>
                <!-- Window -->
                <circle cx="20" cy="19" r="3" fill="var(--accent)" fill-opacity="0.5" stroke="var(--accent)" stroke-width="1"/>
                <!-- Fins -->
                <path d="M12 22 L8 28 L14 26 Z" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1" stroke-linejoin="round"/>
                <path d="M28 22 L32 28 L26 26 Z" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1" stroke-linejoin="round"/>
                <!-- Flame -->
                <path d="M17 30 C17 34 20 36 20 36 C20 36 23 34 23 30" fill="var(--accent)" fill-opacity="0.35" stroke="var(--accent)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <!-- Title + Description -->
          <div class="flex-1 mb-5 md:mb-8">
            <h3 class="text-lg font-black tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">{{ step.title }}</h3>
            <p class="text-soft text-sm font-medium leading-relaxed opacity-75">{{ step.description }}</p>
          </div>

          <!-- Deliverables -->
          <div class="space-y-2 pt-5 border-t border-[var(--border-subtle)]">
            <p class="text-[0.5rem] font-black uppercase tracking-[0.25em] text-soft opacity-80 mb-3">Deliverables</p>
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
        <span class="text-soft text-[0.6rem] font-black uppercase tracking-widest">Consistent, every time.</span>
      </div>
    </div>

  </SharedSectionWrapper>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Discovery',
    icon: 'lucide:brain',
    description: 'Understanding who uses it, what they need, and where current experiences fall short',
    outputs: ['User Research', 'Friction Mapping', 'Strategy Brief'],
  },
  {
    title: 'Structure',
    icon: 'lucide:git-branch',
    description: 'Building the information architecture and flows that feel natural to navigate',
    outputs: ['IA Maps', 'User Flows', 'Navigation Logic'],
  },
  {
    title: 'Design',
    icon: 'lucide:palette',
    description: 'High-fidelity interfaces. Consistent, detailed, and ready for development',
    outputs: ['Visual System', 'High-Fidelity UI', 'Motion Details'],
  },
  {
    title: 'Build & Ship',
    icon: 'lucide:rocket',
    description: 'Clean Vue/Nuxt implementation. QA\'d, optimised, and deployed',
    outputs: ['Production Code', 'QA Review', 'Launch'],
  },
]
</script>
