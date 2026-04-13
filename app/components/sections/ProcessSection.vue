<template>
  <div ref="containerRef" class="relative">
    <!-- Scroll Spacer -->
    <div :style="{ height: `${(steps.length * 60) + 100}vh` }" class="relative">
      
      <section id="process" class="sticky top-0 h-screen flex flex-col justify-center bg-page overflow-hidden">
        <!-- Subtle Grid Background -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.02]" 
             style="background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px); background-size: 80px 80px;"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <!-- Section Header -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div class="max-w-2xl">
              <div class="flex items-center gap-3 mb-6">
                <div class="h-px w-8 bg-accent/20"></div>
                <span class="text-[0.65rem] font-bold uppercase tracking-[0.5em] text-soft">The Methodology</span>
              </div>
              <h2 class="text-main text-4xl font-black tracking-tighter md:text-7xl leading-[0.85]">
                Systematic <br />
                <span class="text-soft italic serif-font lowercase opacity-40">delivery.</span>
              </h2>
            </div>
            <p class="text-soft text-lg font-medium leading-relaxed max-w-[360px] pb-2">
              Design treated as a core engineering discipline: results-driven, scalable, and built for speed.
            </p>
          </div>

          <!-- Horizontal Slide Wrapper -->
          <div class="relative">
            <!-- Simple Progress Line -->
            <div class="absolute -top-12 left-0 right-0 h-px bg-accent/10">
              <div 
                class="h-full bg-accent transition-all duration-150" 
                :style="{ width: `${scrollPercent}%` }"
              ></div>
            </div>

            <!-- Light & Minimalist Cards -->
            <div 
              class="flex gap-8 md:gap-12 will-change-transform"
              :style="{ transform: `translateX(-${translateX}px)` }"
            >
              <div 
                v-for="(step, idx) in steps" 
                :key="idx"
                class="shrink-0 w-[85vw] md:w-[500px] lg:w-[560px]"
              >
                <!-- Minimalist Card -->
                <div class="relative group rounded-[32px] border border-accent/10 bg-panel/10 p-8 md:p-12 h-full flex flex-col min-h-[480px] hover:border-accent/30 transition-all duration-500">
                  
                  <!-- Phase & Category -->
                  <div class="flex items-center gap-3 mb-10">
                     <span class="text-accent text-[0.7rem] font-bold uppercase tracking-[0.3em] font-mono">Phase_0{{ idx + 1 }}</span>
                     <div class="h-1 w-1 rounded-full bg-accent/20"></div>
                     <span class="text-muted text-[0.6rem] font-bold uppercase tracking-widest opacity-40">{{ step.category }}</span>
                  </div>

                  <!-- Title & Icon -->
                  <div class="flex justify-between items-start gap-6 mb-8">
                    <h3 class="text-main text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
                       {{ step.title }}
                    </h3>
                  </div>

                  <p class="text-soft text-lg font-medium leading-relaxed mb-10 opacity-80">
                     {{ step.description }}
                  </p>

                  <!-- Delivery Details -->
                  <div class="mt-auto space-y-8 pt-8 border-t border-accent/5">
                    <!-- Outputs -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div v-for="output in step.outputs" :key="output" class="flex items-center gap-3">
                         <div class="h-1 w-1 rounded-full bg-accent/40"></div>
                         <span class="text-soft text-[0.75rem] font-bold tracking-tight">{{ output }}</span>
                      </div>
                    </div>

                    <!-- Strategic Note -->
                    <p class="text-muted text-xs font-medium leading-relaxed italic opacity-60">
                      {{ step.strategy }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const containerRef = ref<HTMLElement | null>(null)
const translateX = ref(0)
const scrollPercent = ref(0)

const handleScroll = () => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const sectionTop = window.scrollY + rect.top
  const sectionHeight = containerRef.value.offsetHeight
  const viewportHeight = window.innerHeight
  
  let distance = window.scrollY - sectionTop
  let maxDistance = sectionHeight - viewportHeight
  if (distance < 0) distance = 0
  if (distance > maxDistance) distance = maxDistance
  
  const stepCount = steps.length
  const cardWidth = window.innerWidth >= 1024 ? 560 + 48 : window.innerWidth >= 768 ? 500 + 32 : window.innerWidth * 0.85 + 32
  const maxTranslate = (cardWidth * (stepCount - 1))
  
  const progress = distance / maxDistance
  translateX.value = progress * maxTranslate
  scrollPercent.value = progress * 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const steps = [
  {
    title: 'Strategy & Analysis',
    category: 'Protocol 01',
    description: 'Deconstructing technical requirements and business variables into a battle-hardened product roadmap.',
    strategy: 'Mapping product logic to venture-scale goals to identify market advantages.',
    outputs: ['Competitive Audit', 'Conversion Roadmap', 'Project Strategy'],
  },
  {
    title: 'Architectural UX',
    category: 'Protocol 02',
    description: 'Building the structural logic of your product. Defining clear user paths before a single pixel is moved.',
    strategy: 'Ensuring high-momentum performance through logic-first IA.',
    outputs: ['Experience Flows', 'Site Hierarchy', 'Logic Maps'],
  },
  {
    title: 'Visual Engineering',
    category: 'Protocol 03',
    description: 'Scaling high-performance design systems from core primitives to complex enterprise interfaces.',
    strategy: 'Crafting a visual identity that balances authority with modular scalability.',
    outputs: ['Design System 1.0', 'High-Fidelity UI', 'Prototyping'],
  },
  {
    title: 'Delivery & Scale',
    category: 'Protocol 04',
    description: 'Bridging the gap between code and design to ensure your product launches perfectly into production.',
    strategy: 'Protecting design integrity during deployment through rigorous QA.',
    outputs: ['Production Code', 'Quality Assurance', 'Launch Report'],
  }
]
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }

#process {
  z-index: 50;
}
</style>
