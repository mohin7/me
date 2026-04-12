<template>
  <section id="process" class="py-24 md:py-40 bg-page relative overflow-hidden">
    <!-- Atmospheric Atmospheric Schematic -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
      <div class="absolute top-1/4 left-10 w-64 h-64 border border-brand-a rounded-full animate-[spin_60s_linear_infinite]"></div>
      <div class="absolute bottom-1/4 right-10 w-96 h-96 border border-brand-a border-dashed rounded-full animate-[spin_90s_linear_infinite_reverse]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="mb-24">
        <div class="flex items-center gap-4 mb-6">
          <div class="h-px w-12 bg-brand-a"></div>
          <span class="text-brand-a text-xs font-black uppercase tracking-[0.4em]">Methodology</span>
        </div>
        <h2 class="text-main mb-8 text-5xl font-black tracking-tighter md:text-7xl leading-[0.9]">
          The <span class="text-brand-a italic">Craft</span> Behind <br> the Pixel
        </h2>
        <p class="text-soft max-w-2xl text-xl font-medium opacity-70 leading-relaxed">
          A disciplined, battle-tested methodology for solving complex product challenges at venture-scale speed.
        </p>
      </div>

      <!-- Process Steps -->
      <div class="grid lg:grid-cols-4 gap-6 relative">
        <!-- Connecting Line (Desktop) -->
        <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-subtle to-transparent hidden lg:block -translate-y-12"></div>

        <div 
          v-for="(step, idx) in steps" 
          :key="idx"
          class="group relative"
        >
          <!-- The Card -->
          <div class="relative overflow-hidden rounded-[32px] border border-subtle bg-panel p-10 transition-all duration-500 hover:border-brand-a/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
            
            <!-- Stage Indicator -->
            <div class="mb-12 flex items-center justify-between">
              <div class="flex flex-col">
                <span class="text-brand-a text-[0.65rem] font-black uppercase tracking-[0.3em] font-mono mb-1">P-0{{ idx + 1 }}</span>
                <span class="text-main text-xs font-bold uppercase tracking-widest opacity-30">{{ step.category }}</span>
              </div>
              <div class="h-10 w-10 flex items-center justify-center rounded-full bg-soft border border-subtle group-hover:bg-brand-a group-hover:border-brand-a transition-all duration-500">
                <Icon :name="`lucide:${step.icon}`" class="h-4 w-4 text-muted group-hover:text-white transition-colors" />
              </div>
            </div>

            <h3 class="text-main mb-6 text-2xl font-black tracking-tighter leading-tight">{{ step.title }}</h3>
            <p class="text-soft text-sm font-medium leading-relaxed opacity-70 mb-8 group-hover:opacity-100 transition-opacity">
              {{ step.description }}
            </p>

            <!-- Core Outputs (Premium Detail) -->
            <div class="space-y-2 mt-auto">
              <p class="text-brand-a text-[0.6rem] font-black uppercase tracking-widest mb-3">Core Outputs:</p>
              <div v-for="output in step.outputs" :key="output" class="flex items-center gap-2">
                <div class="h-1 w-1 rounded-full bg-brand-a/40"></div>
                <span class="text-muted text-[0.7rem] font-bold tracking-tight">{{ output }}</span>
              </div>
            </div>

            <!-- Architectural Background Number -->
            <div class="absolute -bottom-4 -right-2 text-[6rem] font-black text-main/[0.02] leading-none pointer-events-none group-hover:text-brand-a/[0.04] transition-colors select-none">
              0{{ idx + 1 }}
            </div>
          </div>
        </div>
      </div>

      <!-- Process Quality Control -->
      <div class="mt-24 grid md:grid-cols-3 gap-8">
        <div v-for="check in qualityChecks" :key="check.label" class="flex items-center gap-4 p-6 rounded-2xl bg-panel/40 border border-subtle/50">
          <div class="h-8 w-8 rounded-lg bg-brand-a/10 flex items-center justify-center">
            <Icon :name="`lucide:${check.icon}`" class="h-4 w-4 text-brand-a" />
          </div>
          <div>
            <p class="text-main text-sm font-bold tracking-tight">{{ check.label }}</p>
            <p class="text-muted text-[0.65rem] font-medium uppercase tracking-widest">{{ check.sub }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Discovery & Product Logic',
    category: 'Strategy',
    icon: 'compass',
    description: 'Unpacking business objectives and user friction through stakeholder workshops and data analysis.',
    outputs: ['User Archetypes', 'Stakeholder Maps', 'Opportunity Gap']
  },
  {
    title: 'Structural Architecture',
    category: 'Information',
    icon: 'layers',
    description: 'Defining the product backbone through logic-driven wireframing and complex user journey mapping.',
    outputs: ['Core User Flows', 'Information Hierarchy', 'Logic Audits']
  },
  {
    title: 'High-Fidelity Visual Core',
    category: 'Design',
    icon: 'framer',
    description: 'Engineering scalable design systems. Crafting interfaces that balance brand with deep usability.',
    outputs: ['Design System 1.0', 'Interactive Prototypes', 'Iconography']
  },
  {
    title: 'Technical Implementation',
    category: 'Scale',
    icon: 'code-xml',
    description: 'Bilateral collaboration with engineering teams to ensure pixel-perfect production and system health.',
    outputs: ['Production Hand-off', 'QA Reviews', 'Component Documentation']
  }
]

const qualityChecks = [
  { label: 'Data Driven', sub: 'Evidence Based Logic', icon: 'database' },
  { label: 'Scalable Craft', sub: 'System Thinking', icon: 'shrink' },
  { label: 'Rapid Sprint', sub: 'Zero Lag Execution', icon: 'zap' }
]
</script>

