<template>
  <section id="experience" ref="containerRef" class="py-16 md:py-24 bg-page relative overflow-visible">
    <!-- Sophisticated Technical Grid -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.02]" 
         style="background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px); background-size: 64px 64px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
      <div class="grid lg:grid-cols-[380px_1fr] gap-20 lg:gap-32 items-start">
        
        <!-- Manually Sticky Sidebar (Synchronized with virtual scroll) -->
        <div 
          ref="sidebarRef"
          class="lg:relative h-fit will-change-transform"
          :style="{ transform: `translate3d(0, ${sidebarOffset}px, 0)` }"
        >
          <div class="inline-flex flex-col mb-12">
            <span class="section-label mb-8">Experience</span>

            <div class="flex items-baseline gap-3 mb-2">
              <span class="text-accent text-7xl font-semibold tracking-tight leading-none serif-font">07</span>
              <div class="flex flex-col">
                <span class="text-lg serif-font italic leading-none mt-1" style="color: var(--text-soft)">years</span>
              </div>
            </div>
            <div class="h-px w-16 bg-accent/40 mt-4"></div>
          </div>

          <h2 class="text-main mb-6 text-4xl font-semibold tracking-tight md:text-5xl leading-[1]">
            Building products <span class="serif-font italic text-accent">at scale.</span>
          </h2>
          <p class="text-soft text-base leading-relaxed max-w-[320px]">
            Selected roles leading design and engineering on high-impact products.
          </p>
        </div>

        <!-- The Timeline Content -->
        <div class="relative">
          <div class="absolute left-0 md:left-[32px] top-4 bottom-0 w-px bg-gradient-to-b from-glass via-glass to-transparent hidden md:block"></div>

          <div class="space-y-12">
            <div 
              v-for="(job, idx) in experience" 
              :key="idx" 
              class="experience-card group relative reveal-item"
            >
              <div class="absolute left-[-5px] md:left-[26px] top-12 h-3.5 w-3.5 rounded-full border-2 border-accent bg-page z-20 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent hidden md:block"></div>

              <div class="p-8 md:p-14 md:pl-28 rounded-[40px] border border-glass bg-panel/10 hover:border-accent/20 hover:bg-panel/40 hover:backdrop-blur-3xl transition-all duration-700">
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <span class="mono-font text-accent text-sm tracking-tight">{{ job.period }}</span>
                  </div>

                  <div class="flex flex-wrap items-baseline gap-3 mb-6">
                    <h3 class="text-main text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                       {{ job.role }}
                    </h3>
                    <span class="text-soft text-sm tracking-tight serif-font italic">@ {{ job.company }}</span>
                  </div>

                  <p class="text-soft text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                     {{ job.description }}
                  </p>

                  <div class="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-8">
                     <div v-for="(impact, ii) in job.impacts" :key="ii" class="flex items-start gap-3">
                        <Icon name="lucide:check" class="h-4 w-4 text-accent mt-1 shrink-0" />
                        <span class="text-soft text-sm leading-relaxed">{{ impact }}</span>
                     </div>
                  </div>

                  <div class="flex flex-wrap gap-2 pt-6 border-t border-glass">
                     <span v-for="tag in job.tags" :key="tag" class="px-3 py-1 rounded-full bg-accent/[0.06] text-soft text-xs font-medium">
                       {{ tag }}
                     </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const sidebarRef = ref<HTMLElement | null>(null)
const sidebarOffset = ref(0)
const stickyTopPadding = 160 

let cachedContainerTop = 0
let cachedContainerHeight = 0
let cachedSidebarHeight = 0

const updateCache = () => {
  if (containerRef.value && sidebarRef.value) {
    cachedContainerTop = containerRef.value.offsetTop
    cachedContainerHeight = containerRef.value.offsetHeight
    cachedSidebarHeight = sidebarRef.value.offsetHeight
  }
}

const updateSidebarSticky = (virtualY: number) => {
  if (!containerRef.value || !sidebarRef.value) return
  
  // Disable sticky on mobile
  if (window.innerWidth < 1024) {
    sidebarOffset.value = 0
    return
  }
  
  const containerTop = cachedContainerTop
  const containerHeight = cachedContainerHeight
  const sidebarHeight = sidebarRef.value.offsetHeight
  
  // Sticky Top Padding (Distance from top of screen when sticky)
  const topPadding = 120 
  
  // How much we've scrolled past the section start
  let localOffset = virtualY - containerTop + topPadding
  
  // Clamp localOffset
  const maxLocalOffset = containerHeight - sidebarHeight
  
  if (localOffset < 0) {
    localOffset = 0
  } else if (localOffset > maxLocalOffset) {
    localOffset = maxLocalOffset
  }
  
  sidebarOffset.value = localOffset
}

const handleSmoothScroll = (e: any) => {
  updateSidebarSticky(e.detail)
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

const experience = [
  {
    role: 'Head of Design',
    company: 'AppsCode Ltd',
    period: '2021 — Present',
    description: 'Directing product-wide UI/UX strategy and engineering execution for massive Kubernetes infrastructure and database platforms.',
    impacts: [
      'Scale design systems for KubeDB, KubeVault, and Stash.',
      'Architected 8+ high-scale cloud management products.',
      'Engineered unified design-to-code Nuxt 3 workflows.',
      'Leading a multi-disciplinary technical design team.'
    ],
    tags: ['Design Leadership', 'Product Architecture', 'Nuxt 3', 'Kubernetes UI']
  },
  {
    role: 'Frontend Architect',
    company: 'Cloud Software Solutions',
    period: '2017 — 2021',
    description: 'Specialized in building high-performance web applications with a focus on UI/UX fidelity and component architecture.',
    impacts: [
      'Vue 2/3 ecosystem lead.',
      'Reusable UI global libraries.',
      'Data-heavy dashboard optimization.'
    ],
    tags: ['Frontend Architecture', 'Vue.js', 'Performance Opt']
  },
  {
    role: 'Startup Launch Specialist',
    company: 'Independent Partners',
    period: '2015 — 2017',
    description: 'Partnered with early-stage founders to launch their initial products and define their visual brand identities.',
    impacts: [
      'Launched 12+ MVPS in 24 months.',
      'Interactive prototype expert.',
      'Zero-to-One strategy lead.'
    ],
    tags: ['MVP Launch', 'UX Research', 'Visual Identity']
  }
]
</script>

