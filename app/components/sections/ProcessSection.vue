<template>
  <div ref="containerRef" class="relative">
    <!-- Scroll Spacer (Only active on Desktop) -->
    <div 
      :style="{ height: isLargeScreen ? `${(steps.length * 75) + 100}vh` : 'auto' }" 
      class="relative"
    >
      
      <!-- Sticky Section Logic -->
      <section 
        id="process" 
        :class="[
          isLargeScreen ? 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center overflow-hidden' : 'relative py-20 px-4 flex flex-col',
          'bg-page transition-colors duration-500'
        ]"
        :style="isLargeScreen ? { transform: `translate3d(0, ${sectionOffset}px, 0)` } : {}"
      >
        <!-- Subtle Grid Background -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.02]" 
             style="background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px); background-size: 80px 80px;"></div>

        <div class="max-w-7xl mx-auto md:px-6 lg:px-8 relative z-10 w-full">
          
          <!-- Section Header -->
          <div class="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <div class="mb-10">
               <span class="section-label flex justify-center">The Methodology</span>
            </div>
            <h2 class="text-main text-4xl font-black tracking-tighter md:text-7xl leading-[0.85]">
              Systematic <br />
              <span class="italic serif-font lowercase" style="color: #52525B">delivery.</span>
            </h2>
            <p class="text-soft text-lg font-medium leading-relaxed max-w-[480px] mt-8">
              Design treated as a core engineering discipline: results-driven, scalable, and built for speed.
            </p>
          </div>

          <!-- Slide/List Wrapper -->
          <div class="relative w-full">
            <!-- Progress Line (Desktop only) -->
            <div v-if="isLargeScreen" class="absolute -top-12 left-0 right-0 h-px bg-accent/10">
              <div 
                class="h-full bg-accent transition-all duration-150" 
                :style="{ width: `${scrollPercent}%` }"
              ></div>
            </div>

            <!-- Cards Matrix -->
            <div 
              :class="[
                isLargeScreen ? 'flex gap-12 will-change-transform' : 'flex flex-col gap-8'
              ]"
              :style="isLargeScreen ? { transform: `translate3d(-${translateX}px, 0, 0)` } : {}"
            >
              <div 
                v-for="(step, idx) in steps" 
                :key="idx"
                class="shrink-0 w-full lg:w-[560px]"
              >
                <!-- Minimalist Card -->
                <div class="relative group rounded-[32px] border border-accent/10 bg-panel/10 p-8 md:p-12 h-full flex flex-col min-h-[380px] hover:border-accent/30 transition-all duration-500">
                  <div class="flex items-center gap-3 mb-10">
                     <span class="text-accent text-[0.7rem] font-bold uppercase tracking-[0.3em] font-mono">Phase_0{{ idx + 1 }}</span>
                     <div class="h-1 w-1 rounded-full bg-accent/20"></div>
                     <span class="text-muted text-[0.6rem] font-bold uppercase tracking-widest opacity-40">{{ step.category }}</span>
                  </div>

                  <div class="flex justify-between items-start gap-6 mb-8">
                    <h3 class="text-main text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
                       {{ step.title }}
                    </h3>
                  </div>

                  <p class="text-soft text-base md:text-lg font-medium leading-relaxed mb-10 opacity-80">
                     {{ step.description }}
                  </p>

                  <div class="mt-auto space-y-8 pt-8 border-t border-accent/5">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div v-for="output in step.outputs" :key="output" class="flex items-center gap-3">
                         <div class="h-1 w-1 rounded-full bg-accent/40"></div>
                         <span class="text-soft text-[0.75rem] font-bold tracking-tight">{{ output }}</span>
                      </div>
                    </div>
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
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const translateX = ref(0)
const scrollPercent = ref(0)
const sectionOffset = ref(0)
const isLargeScreen = ref(false)

let cachedSectionTop = 0
let cachedSectionHeight = 0

const updateCache = () => {
  isLargeScreen.value = window.innerWidth >= 1024
  if (containerRef.value) {
    cachedSectionTop = containerRef.value.offsetTop
    cachedSectionHeight = containerRef.value.offsetHeight
  }
}

const updateScrollLogic = (virtualY: number) => {
  if (!containerRef.value || !isLargeScreen.value) return
  
  const viewportHeight = window.innerHeight
  
  const start = cachedSectionTop
  const end = cachedSectionTop + cachedSectionHeight - viewportHeight
  
  let distance = virtualY - start
  if (distance < 0) {
    distance = 0
    sectionOffset.value = 0
  } else if (distance > (cachedSectionHeight - viewportHeight)) {
    distance = cachedSectionHeight - viewportHeight
    sectionOffset.value = cachedSectionHeight - viewportHeight
  } else {
    sectionOffset.value = distance
  }
  
  const stepCount = steps.length
  const cardWidth = 560 + 48
  const maxTranslate = (cardWidth * (stepCount - 1))
  
  const progress = distance / (cachedSectionHeight - viewportHeight)
  translateX.value = progress * maxTranslate
  scrollPercent.value = progress * 100
}

const handleSmoothScroll = (e: any) => {
  updateScrollLogic(e.detail)
}

onMounted(() => {
  updateCache()
  setTimeout(updateCache, 1000)
  window.addEventListener('smooth-scroll', handleSmoothScroll)
  window.addEventListener('resize', updateCache)
})
onUnmounted(() => {
  window.removeEventListener('smooth-scroll', handleSmoothScroll)
  window.removeEventListener('resize', updateCache)
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
#process { z-index: 50; }
</style>
