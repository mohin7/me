<template>
  <section id="case-studies" class="relative py-20 md:py-32 bg-page overflow-visible">
    <!-- Sophisticated Section Border -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glass to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12 mb-16 md:mb-24">
        <div class="max-w-3xl flex flex-col items-start text-left">
          <span class="section-label mb-6">Selected work</span>
          <h2 class="text-4xl md:text-6xl font-semibold tracking-tight leading-[1] text-main">
            Shipped outcomes, not <span class="serif-font italic text-accent">decks.</span>
          </h2>
          <p class="text-soft text-lg leading-relaxed max-w-2xl mt-6">
            Three product interventions that moved metrics worth measuring.
          </p>
        </div>

        <div class="flex items-center gap-3 bg-panel/40 backdrop-blur-xl border border-glass p-2 rounded-full">
          <button @click="prev" class="cs-nav-btn" aria-label="Previous">
            <Icon name="lucide:arrow-left" class="h-4 w-4" />
          </button>
          <span class="mono-font text-main text-sm font-medium tabular-nums px-2">
            {{ String(active + 1).padStart(2, '0') }}<span class="text-muted"> / {{ String(caseStudies.length).padStart(2, '0') }}</span>
          </span>
          <button @click="next" class="cs-nav-btn" aria-label="Next">
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </button>
        </div>
      </div>

      <!-- Main Case Study Display: The High-Resolution Card -->
      <div class="relative">
        <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
          <div :key="active" class="group relative rounded-[32px] md:rounded-[48px] bg-panel/20 border border-glass p-6 md:p-16 transition-all duration-700 hover:bg-panel/40 hover:shadow-2xl overflow-hidden reveal">
            
            <!-- Abstract Logic Grid Background -->
            <div class="absolute inset-0 pointer-events-none opacity-[0.02]" 
                 style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 48px 48px;"></div>

            <div class="relative z-10 grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-24">

              <!-- Narrative -->
              <div class="flex flex-col gap-10">
                <span class="mono-font text-accent text-xs font-medium tracking-wide">{{ caseStudies[active].industry }}</span>

                <h3 class="text-main text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                  {{ caseStudies[active].title }}
                </h3>

                <div class="grid md:grid-cols-2 gap-8 lg:gap-10 pt-2">
                  <div class="space-y-3">
                    <span class="text-muted text-xs font-medium uppercase tracking-widest">Problem</span>
                    <p class="text-soft text-base md:text-lg leading-relaxed">
                      {{ caseStudies[active].problem }}
                    </p>
                  </div>
                  <div class="space-y-3">
                    <span class="text-accent text-xs font-medium uppercase tracking-widest">Approach</span>
                    <p class="text-soft text-base md:text-lg leading-relaxed">
                      {{ caseStudies[active].solution }}
                    </p>
                  </div>
                </div>

                <div class="pt-8 border-t border-glass">
                  <div class="flex flex-wrap gap-x-8 gap-y-3">
                    <div v-for="(step, si) in caseStudies[active].process" :key="si" class="flex items-center gap-3">
                      <span class="mono-font text-accent/60 text-xs tabular-nums">0{{ si + 1 }}</span>
                      <span class="text-soft text-sm">{{ step }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Metrics -->
              <div class="flex flex-col gap-5">
                <div class="bg-accent/[0.04] border border-accent/10 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                  <span class="text-accent text-xs font-medium uppercase tracking-widest">{{ caseStudies[active].metrics[0].label }}</span>
                  <div class="text-6xl lg:text-7xl font-semibold text-main tracking-tight leading-none serif-font mt-3 mb-3">{{ caseStudies[active].metrics[0].value }}</div>
                  <p class="text-soft text-sm leading-snug">{{ caseStudies[active].metrics[0].sub }}</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div v-for="(metric, mi) in caseStudies[active].metrics.slice(1)" :key="mi" class="bg-panel/60 border border-glass rounded-2xl p-6 space-y-2">
                    <span class="text-muted text-xs font-medium">{{ metric.label }}</span>
                    <div class="text-2xl font-semibold text-main tracking-tight">{{ metric.value }}</div>
                    <p class="text-muted text-xs leading-snug">{{ metric.sub }}</p>
                  </div>
                </div>

                <div class="bg-accent text-accent-fg rounded-3xl p-8 relative overflow-hidden">
                  <Icon name="lucide:sparkles" class="h-5 w-5 mb-4 opacity-80" />
                  <p class="text-lg md:text-xl font-medium leading-snug mb-2 serif-font italic">"{{ caseStudies[active].impact.headline }}"</p>
                  <p class="text-accent-fg/80 text-sm leading-relaxed">{{ caseStudies[active].impact.detail }}</p>
                </div>
              </div>

            </div>
          </div>
        </Transition>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
const direction = ref<'next' | 'prev'>('next')

const caseStudies = [
  {
    title: "Rebuilding KubeDB's Enterprise Core",
    industry: "DevOps & Cloud Infrastructure",
    problem: "A high-concurrency interface that suffered from cognitive overload, causing a >45% user drop-off during critical database scaling operations.",
    solution: "Simplified the complexity through progressive disclosure and a unified role-based navigation system geared for elite operators.",
    process: ["IA Audit", "Design Protocol", "Component Build", "User Logic Lab"],
    metrics: [
      { label: "Completion Rate", value: "+52%", sub: "Reduction in task abandonment across primary operator journeys" },
      { label: "Action Velocity", value: "3.2×", sub: "Operators completed complex deployments 3.2× faster post-launch" },
      { label: "Design Units", value: "120+", sub: "Production-ready components shipped into the unified UI library" },
    ],
    impact: {
      headline: "Standardized across 6 enterprise products",
      detail: "The protocol became the single source of authority for AppsCode's entire multi-product cloud ecosystem."
    }
  },
  {
    title: "Zero-to-MVP: High-Frequency Reader",
    industry: "Linguistics & PWA",
    problem: "Existing religious applications were fragmented, ad-heavy, and lacked the typographical precision required for deep concentration.",
    solution: "Engineered a lightweight, offline-first PWA focused on distraction-free reading modes and modular typography systems.",
    process: ["Typography Audit", "Offline Protocol", "PWA Launch", "Global Beta"],
    metrics: [
      { label: "Load Velocity", value: "1.2s", sub: "Average First Contentful Paint delivered on legacy 3G connections" },
      { label: "Performance", value: "98/100", sub: "Lighthouse audit score for Accessibility and Technical Best Practices" },
      { label: "Beta Traction", value: "200+", sub: "Verified active users within the first 14 days of the PWA pilot" },
    ],
    impact: {
      headline: "Recognized as a Vue 3 reference system",
      detail: "100% open-source success. Attracted 8 international developers as core contributors within 30 days."
    }
  },
  {
    title: "Systemic Scaling for Cloud Teams",
    industry: "Workflow Productivity",
    problem: "Five independent product teams were rebuilding UI primitives in silos, wasting 30% of each sprint on visual debt and correction.",
    solution: "Developed and deployed a central Design Token System and living component library to unify the entire development cycle.",
    process: ["Silo Audit", "Token Strategy", "Component Sprint", "Team Adoption"],
    metrics: [
      { label: "Sprint Efficiency", value: "+30%", sub: "Elimination of UI re-work across all global product engineering teams" },
      { label: "Library Depth", value: "85+", sub: "Atomic components and tokens integrated into the shared ecosystem" },
      { label: "Consistency", value: "100%", sub: "Universal visual alignment achieved across the brand portfolio" },
    ],
    impact: {
      headline: "Reduced QA cycles by 40% globally",
      detail: "Predictable component behavior halved the onboarding time for new front-end engineering hires."
    }
  }
]

function next() {
  direction.value = 'next'
  active.value = (active.value + 1) % caseStudies.length
}
function prev() {
  direction.value = 'prev'
  active.value = (active.value - 1 + caseStudies.length) % caseStudies.length
}
</script>

<style scoped>

.cs-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  color: var(--text-main);
  transition: background 0.25s ease, color 0.25s ease;
}
.cs-nav-btn:hover {
  background: var(--accent);
  color: var(--accent-fg);
}

/* ─── Transitions ─── */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-left-enter-from  { opacity: 0; transform: translateX(80px) scale(0.96); }
.slide-left-leave-to    { opacity: 0; transform: translateX(-80px) scale(0.96); }
.slide-right-enter-from { opacity: 0; transform: translateX(-80px) scale(0.96); }
.slide-right-leave-to   { opacity: 0; transform: translateX(80px) scale(0.96); }
</style>
