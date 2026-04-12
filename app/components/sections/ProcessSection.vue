<template>
  <section id="process" class="py-24 md:py-40 bg-soft/50 relative overflow-visible border-y border-subtle/50">
    <!-- Schematic Background Grid -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.03]" 
         style="background-image: linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <!-- Atmospheric Glow -->
    <div class="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-page to-transparent pointer-events-none"></div>
    <div class="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-page to-transparent pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-[400px_1fr] gap-20 items-start">
        
        <!-- Sticky Left: Philosophy & Control -->
        <div class="lg:sticky lg:top-40 h-fit space-y-12">
          <div>
            <div class="flex items-center gap-4 mb-8">
              <div class="h-px w-10 bg-brand-a animate-pulse"></div>
              <span class="text-brand-a text-[0.6rem] font-black uppercase tracking-[0.5em]">Command Center</span>
            </div>
            <h2 class="text-main mb-8 text-5xl font-black tracking-tighter md:text-7xl leading-[0.85]">
              The Craft <br> <span class="text-brand-a">Protocol</span>
            </h2>
            <p class="text-soft text-xl font-medium opacity-70 leading-relaxed max-w-[340px]">
              Treating design as an engineering discipline. Disciplined, scalable, and built for venture-speed.
            </p>
          </div>

          <!-- Process Navigation / Progress -->
          <div class="hidden lg:block space-y-6">
            <div v-for="(step, idx) in steps" :key="idx" class="flex items-center gap-4 group cursor-help">
              <div class="h-1.5 w-1.5 rounded-full border border-brand-a group-hover:bg-brand-a group-hover:scale-150 transition-all duration-300"></div>
              <span class="text-muted text-[0.6rem] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">0{{ idx + 1 }} // {{ step.category }}</span>
            </div>
          </div>
        </div>

        <!-- Right Side: The Blueprint Stages -->
        <div class="space-y-12 lg:space-y-24">
          <div 
            v-for="(step, idx) in steps" 
            :key="idx"
            class="process-block group relative"
          >
            <!-- Stage Card -->
            <div class="relative overflow-hidden rounded-[32px] border border-glass bg-panel p-10 md:p-16 transition-all duration-700 hover:border-brand-a/30 hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.1)]">
              
              <!-- Content Header -->
              <div class="grid md:grid-cols-[1fr_auto] gap-8 mb-16 items-start">
                <div>
                   <div class="flex items-center gap-3 mb-6">
                      <span class="text-brand-a text-xs font-black font-mono">STEP_0{{ idx + 1 }}</span>
                      <div class="h-px w-8 bg-subtle"></div>
                      <span class="text-muted text-xs font-bold uppercase tracking-widest opacity-40">{{ step.category }}</span>
                   </div>
                   <h3 class="text-main text-3xl md:text-5xl font-black tracking-tighter leading-none mb-6 group-hover:text-brand-a transition-colors">
                      {{ step.title }}
                   </h3>
                   <p class="text-soft text-lg md:text-xl font-medium leading-relaxed opacity-70 max-w-2xl">
                      {{ step.description }}
                   </p>
                </div>
                <!-- Icon Window -->
                <div class="h-20 w-20 md:h-28 md:w-28 rounded-3xl bg-soft border border-subtle flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                   <Icon :name="`lucide:${step.icon}`" class="h-10 w-10 md:h-12 md:w-12 text-brand-a opacity-40 group-hover:opacity-100" />
                </div>
              </div>

              <!-- Technical Schematic Grid (The "Better" Part) -->
              <div class="grid md:grid-cols-2 gap-12 lg:gap-20 border-t border-subtle/50 pt-16">
                <!-- Outputs -->
                <div class="space-y-8">
                  <div class="flex items-center gap-3">
                    <Icon name="lucide:terminal" class="h-4 w-4 text-brand-a" />
                    <span class="text-main text-xs font-black uppercase tracking-widest">Key Deliverables</span>
                  </div>
                  <div class="grid grid-cols-1 gap-4">
                    <div v-for="output in step.outputs" :key="output" class="flex items-center gap-4 group/item">
                       <div class="h-10 w-10 shrink-0 rounded-xl bg-soft flex items-center justify-center group-hover/item:bg-brand-a/10 transition-colors">
                          <Icon name="lucide:file-check" class="h-3.5 w-3.5 text-muted group-hover/item:text-brand-a" />
                       </div>
                       <span class="text-soft text-sm font-bold tracking-tight">{{ output }}</span>
                    </div>
                  </div>
                </div>

                <!-- Strategic Context -->
                <div class="space-y-8 bg-soft/30 p-8 rounded-3xl border border-subtle/30">
                  <div class="flex items-center gap-3">
                    <Icon name="lucide:shield-check" class="h-4 w-4 text-brand-a" />
                    <span class="text-main text-xs font-black uppercase tracking-widest text-brand-a">Strategic Focus</span>
                  </div>
                  <p class="text-muted text-sm font-medium leading-relaxed italic">
                    {{ step.strategy }}
                  </p>
                  <div class="pt-4 flex flex-wrap gap-2">
                    <span v-for="tag in step.tags" :key="tag" class="text-[0.6rem] font-black uppercase tracking-widest px-3 py-1 bg-panel border border-subtle rounded-full opacity-40">
                      #{{ tag }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Architectural Decorative Background Number -->
              <div class="absolute -bottom-10 -right-4 text-[12rem] font-black text-main/[0.015] leading-none pointer-events-none group-hover:text-brand-a/[0.03] transition-colors select-none italic">
                0{{ idx + 1 }}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Discovery & Strategic Alignment',
    category: 'Analysis',
    icon: 'search-code',
    description: 'Deconstructing business requirements into verifiable design challenges via deep stakeholder immersion.',
    strategy: 'Mapping the product logic to investor-ready business goals and identifying high-leverage opportunity gaps.',
    outputs: ['Competitive Logic Audit', 'User Friction Maps', 'Strategic Roadmap'],
    tags: ['ROI', 'STAKEHOLDERS', 'DATA']
  },
  {
    title: 'Information Architecture',
    category: 'Architecture',
    icon: 'layout-grid',
    description: 'Engineering the structural integrity of the product. Defining the invisible paths before the pixels.',
    strategy: 'Ensuring cognitive load is minimized while maximizing conversion through structural psychology.',
    outputs: ['Non-Linear User Flows', 'System Hierarchy', 'Logic Blueprints'],
    tags: ['SCHEMA', 'IA', 'UX']
  },
  {
    title: 'Visual Engineering',
    category: 'Craft',
    icon: 'orbit',
    description: 'Scaling highly emotional, technical design systems from atomic components to complex enterprise views.',
    strategy: 'Crafting a visual language that balances brand authority with production-ready scalability.',
    outputs: ['Component Library 1.0', 'High-Fidelity Mockups', 'Interaction Specs'],
    tags: ['AESTHETIC', 'ATOMIC', 'SYSTEM']
  },
  {
    title: 'Technical Implementation',
    category: 'Scale',
    icon: 'braces',
    description: 'Close-loop collaboration with engineering to bridge the gap between Figma and the DOM.',
    strategy: 'Protecting design integrity during deployment through rigorous QA and bilateral documentation.',
    outputs: ['QA Audit Logs', 'Deployment Checklist', 'System Health Report'],
    tags: ['QA', 'DOM', 'DEV_OPS']
  }
]
</script>


