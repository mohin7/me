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
        
        <!-- Sidebar: Methodology -->
        <div class="lg:sticky lg:top-40 h-fit space-y-12">
          <div>
            <div class="flex items-center gap-4 mb-8">
              <div class="h-px w-10 bg-accent animate-pulse"></div>
              <span class="text-accent text-[0.6rem] font-bold uppercase tracking-[0.5em]">The Methodology</span>
            </div>
            <h2 class="text-main mb-8 text-5xl font-black tracking-tighter md:text-7xl leading-[0.85]">
              Systematic <br> <span class="text-accent">Delivery.</span>
            </h2>
            <p class="text-soft text-xl font-medium opacity-70 leading-relaxed max-w-[340px]">
              We treat design as a core engineering discipline: results-driven, scalable, and built for speed.
            </p>
          </div>

          <!-- Process Navigation -->
          <div class="hidden lg:block space-y-6">
            <div v-for="(step, idx) in steps" :key="idx" class="flex items-center gap-4 group cursor-pointer">
              <div class="h-1.5 w-1.5 rounded-full border border-accent group-hover:bg-accent group-hover:scale-150 transition-all duration-300"></div>
              <span class="text-muted text-[0.6rem] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Step 0{{ idx + 1 }} // {{ step.category }}</span>
            </div>
          </div>
        </div>

        <!-- Right Side: The Stages -->
        <div class="space-y-12 lg:space-y-24">
          <div 
            v-for="(step, idx) in steps" 
            :key="idx"
            class="process-block group relative"
          >
            <!-- Stage Card -->
            <div class="relative overflow-hidden rounded-[32px] border border-glass bg-panel p-10 md:p-16 transition-all duration-700 hover:border-accent/30 hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.1)]">
              
              <!-- Content Header -->
              <div class="grid md:grid-cols-[1fr_auto] gap-8 mb-16 items-start">
                <div>
                   <div class="flex items-center gap-3 mb-6">
                      <span class="text-accent text-xs font-bold uppercase tracking-widest">Phase 0{{ idx + 1 }}</span>
                      <div class="h-px w-8 bg-subtle"></div>
                      <span class="text-muted text-xs font-bold uppercase tracking-widest opacity-40">{{ step.category }}</span>
                   </div>
                   <h3 class="text-main text-3xl md:text-5xl font-black tracking-tighter leading-none mb-6 group-hover:text-accent transition-colors">
                      {{ step.title }}
                   </h3>
                   <p class="text-soft text-lg md:text-xl font-medium leading-relaxed opacity-70 max-w-2xl">
                      {{ step.description }}
                   </p>
                </div>
                <!-- Icon Window -->
                <div class="h-20 w-20 md:h-28 md:w-28 rounded-3xl bg-soft border border-subtle flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 shadow-sm">
                   <Icon :name="`lucide:${step.icon}`" class="h-10 w-10 md:h-12 md:w-12 text-accent opacity-40 group-hover:opacity-100" />
                </div>
              </div>

              <!-- Deliverables & Strategy -->
              <div class="grid md:grid-cols-2 gap-12 lg:gap-20 border-t border-subtle/50 pt-16">
                <!-- Deliverables -->
                <div class="space-y-8">
                  <div class="flex items-center gap-3">
                    <Icon name="lucide:package" class="h-4 w-4 text-accent" />
                    <span class="text-main text-xs font-bold uppercase tracking-widest">Deliverables</span>
                  </div>
                  <div class="grid grid-cols-1 gap-4">
                    <div v-for="output in step.outputs" :key="output" class="flex items-center gap-4 group/item">
                       <div class="h-10 w-10 shrink-0 rounded-xl bg-soft flex items-center justify-center group-hover/item:bg-accent/10 transition-colors">
                          <Icon name="lucide:check-circle-2" class="h-3.5 w-3.5 text-muted group-hover/item:text-accent" />
                       </div>
                       <span class="text-soft text-sm font-bold tracking-tight">{{ output }}</span>
                    </div>
                  </div>
                </div>

                <!-- Strategic Context -->
                <div class="space-y-8 bg-soft/30 p-8 rounded-3xl border border-subtle/30">
                  <div class="flex items-center gap-3">
                    <Icon name="lucide:target" class="h-4 w-4 text-accent" />
                    <span class="text-main text-xs font-bold uppercase tracking-widest">Core Focus</span>
                  </div>
                  <p class="text-muted text-sm font-medium leading-relaxed italic">
                    {{ step.strategy }}
                  </p>
                  <div class="pt-4 flex flex-wrap gap-2">
                    <span v-for="tag in step.tags" :key="tag" class="text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 bg-panel border border-subtle rounded-full opacity-40">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Decorative Number -->
              <div class="absolute -bottom-10 -right-4 text-[12rem] font-black text-main/[0.015] leading-none pointer-events-none group-hover:text-accent/[0.03] transition-colors select-none italic">
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
    title: 'Strategy & Research',
    category: 'Analysis',
    icon: 'search-code',
    description: 'Deconstructing technical requirements into clear product goals through deep research and planning.',
    strategy: 'Mapping product logic to business goals and identifying key opportunities for market differentiation.',
    outputs: ['Competitive Audit', 'Conversion Roadmap', 'Project Strategy'],
    tags: ['STRATEGY', 'INSIGHT', 'GOALS']
  },
  {
    title: 'Information Architecture',
    category: 'Structure',
    icon: 'layout-grid',
    description: 'Building the structural backbone of your product. Defining clear user paths before a single pixel is moved.',
    strategy: 'Ensuring seamless usability and high performance through structural psychology and logic.',
    outputs: ['User Experience Flows', 'Site Hierarchy', 'Logic Maps'],
    tags: ['UX', 'LOGIC', 'STRUCTURE']
  },
  {
    title: 'Visual Engineering',
    category: 'Design',
    icon: 'orbit',
    description: 'Scaling high-performance design systems from core components to complex enterprise interfaces.',
    strategy: 'Crafting a visual brand that balances professional authority with production-ready scalability.',
    outputs: ['Design System 1.0', 'High-Fidelity UI', 'Prototyping'],
    tags: ['SYSTEM', 'UI', 'PRECISION']
  },
  {
    title: 'Delivery & Deployment',
    category: 'Scale',
    icon: 'braces',
    description: 'Bridging the gap between code and design to ensure your product launches perfectly into production.',
    strategy: 'Protecting design integrity during deployment through rigorous testing and technical leadership.',
    outputs: ['Production Code', 'Quality Assurance', 'Launch Report'],
    tags: ['LAUNCH', 'SCALE', 'QA']
  }
]
</script>


