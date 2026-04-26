<template>
  <SharedSectionWrapper section-id="experience" pattern="grid">
    <div class="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">
        
        <!-- Sticky Sidebar -->
        <div 
          ref="sidebarRef"
          class="lg:sticky lg:top-0 will-change-transform"
          :style="sidebarStyle"
        >
          <div class="inline-flex flex-col mb-10">
            <div class="reveal mb-8">
               <span class="section-label">Technical Archive</span>
            </div>
            
            <div class="flex items-center gap-6">
              <span class="text-accent text-7xl font-black tracking-tighter leading-none">07</span>
              <div class="flex flex-col border-l border-glass pl-6">
                <span class="text-lg font-black leading-none" style="color: var(--text-soft)">Years of</span>
                <span class="text-soft text-[0.65rem] font-black uppercase tracking-[0.2em] mt-1.5">Executive Craft</span>
              </div>
            </div>
          </div>

          <h2 class="reveal mb-8">
            Career <br />
            <span style="color: var(--text-soft)">timeline.</span>
          </h2>
          <p class="reveal text-soft text-lg font-medium leading-relaxed max-w-[320px]">
            A documented history of building and leading high-impact digital products at scale.
          </p>
        </div>

        <!-- Scrollable Timeline Content -->
        <div class="relative">
          <div class="absolute left-0 md:left-[32px] top-4 bottom-0 w-px bg-gradient-to-b from-glass via-glass to-transparent hidden md:block"></div>

          <div class="space-y-10">
            <div 
              v-for="(job, idx) in experience" 
              :key="idx" 
              class="reveal group relative"
              :class="`reveal-delay-${Math.min(idx + 1, 4)}`"
            >
              <!-- Timeline Dot -->
              <div class="absolute left-[-5px] md:left-[26px] top-12 h-3.5 w-3.5 rounded-full border-2 border-accent bg-page z-20 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent hidden md:block"></div>

              <!-- Job Card -->
              <SharedGlassCard 
                padding="p-8 md:p-12 md:pl-24" 
                rounded="rounded-[32px]" 
                class="group"
              >
                <div>
                  <!-- Period -->
                  <div class="flex items-center gap-4 mb-5">
                    <span class="text-accent text-[0.7rem] font-bold uppercase tracking-[0.4em] font-mono">
                       {{ job.period }}
                    </span>
                    <div class="h-px w-8" style="background: color-mix(in srgb, var(--accent), transparent 80%)"></div>
                    <span class="text-soft text-[0.55rem] font-black uppercase tracking-widest opacity-60">Entry_{{ idx + 1 }}</span>
                  </div>

                  <!-- Role & Company -->
                  <div class="flex flex-wrap items-baseline gap-4 mb-6">
                    <h3 class="group-hover:text-accent transition-colors">
                       {{ job.role }}
                    </h3>
                    <div class="h-px w-4" style="background: color-mix(in srgb, var(--accent), transparent 80%)"></div>
                    <span class="text-soft font-bold text-sm tracking-tight italic">@ {{ job.company }}</span>
                  </div>
                  
                  <!-- Description -->
                  <p class="text-soft text-lg font-medium leading-relaxed mb-8 max-w-2xl">
                     {{ job.description }}
                  </p>

                  <!-- Impacts -->
                  <div class="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-10">
                     <div v-for="(impact, ii) in job.impacts" :key="ii" class="flex items-start gap-3">
                        <Icon name="lucide:check-circle" class="h-4 w-4 mt-1 shrink-0 text-accent group-hover:scale-110 transition-all duration-500" />
                        <span class="text-soft text-sm font-medium leading-relaxed">{{ impact }}</span>
                     </div>
                  </div>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2 pt-8 border-t border-glass">
                     <span v-for="tag in job.tags" :key="tag" class="px-4 py-1.5 rounded-full text-soft text-[0.6rem] font-bold uppercase tracking-widest border border-glass hover:border-accent/20 transition-all cursor-default" style="background: color-mix(in srgb, var(--accent), transparent 95%)">
                       {{ tag }}
                     </span>
                  </div>
                </div>
              </SharedGlassCard>
            </div>
          </div>
        </div>

    </div>
  </SharedSectionWrapper>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const sidebarRef = ref<HTMLElement | null>(null)
const sidebarOffset = ref(0)

// JS-powered sticky for the virtual smooth scroll system
const updateSidebarSticky = (virtualY: number) => {
  if (!sidebarRef.value || window.innerWidth < 1024) {
    sidebarOffset.value = 0
    return
  }

  const section = sidebarRef.value.closest('section')
  if (!section) return

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sidebarHeight = sidebarRef.value.offsetHeight
  const topPadding = 120

  let offset = virtualY - sectionTop + topPadding
  const maxOffset = sectionHeight - sidebarHeight - topPadding

  if (offset < 0) offset = 0
  else if (offset > maxOffset) offset = maxOffset

  sidebarOffset.value = offset
}

const sidebarStyle = computed(() => ({
  transform: `translate3d(0, ${sidebarOffset.value}px, 0)`
}))

const handleSmoothScroll = (e: any) => {
  updateSidebarSticky(e.detail)
}

onMounted(() => {
  window.addEventListener('smooth-scroll', handleSmoothScroll)
})

onUnmounted(() => {
  window.removeEventListener('smooth-scroll', handleSmoothScroll)
})

const experience = [
  {
    role: 'Head of Design',
    company: 'AppsCode Ltd',
    period: '2021 — Present',
    description: 'Directing product-wide UI/UX strategy and engineering execution. Leading multi-disciplinary teams to take complex cloud infrastructure ideas from concept to final product.',
    impacts: [
      'Scale design systems for KubeDB, KubeVault, and Stash.',
      'Manage cross-functional engineering & design teams.',
      'Engineered unified design-to-code Nuxt 3 & Vue workflows.',
      'Bridging human behavior with high-density technical UIs.'
    ],
    tags: ['Team Management', 'Idea to Product', 'NuxtJS', 'Psychological UX']
  },
  {
    role: 'Frontend Architect & UI Designer',
    company: 'Cloud Software Solutions',
    period: '2017 — 2021',
    description: 'Transitioning into a hybrid role, I specialized in both designing interfaces and building high-performance web applications using modern JavaScript frameworks.',
    impacts: [
      'Vue ecosystem lead & component architecture.',
      'Applied psychological UX principles to dashboards.',
      'Developed static sites using Hugo and SCSS.',
      'Executed occasional print design & branding.'
    ],
    tags: ['Vuejs', 'Hugo', 'SCSS', 'Print Design', 'UX Strategy']
  },
  {
    role: 'Software Engineer',
    company: 'Independent Partners',
    period: '2015 — 2017',
    description: 'My journey started as a pure Software Engineer. This foundational logic and problem-solving mindset now powers my ability to understand and serve user problems deeply.',
    impacts: [
      'Built core application logic with JavaScript.',
      'Developed responsive layouts using HTML5 & CSS3.',
      'Managed version control strictly via GitHub.',
      'Shifted focus toward solving user problems visually.'
    ],
    tags: ['Software Engineering', 'JavaScript', 'HTML5 & CSS3', 'GitHub']
  }
]
</script>
