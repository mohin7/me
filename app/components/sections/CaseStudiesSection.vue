<template>
  <section id="case-studies" class="relative py-24 md:py-44 bg-page overflow-visible">
    <!-- Sophisticated Section Border -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header: Strategic Direction -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-20 md:mb-32">
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-8">
            <div class="h-px w-8 bg-accent/20"></div>
            <span class="text-accent text-[0.65rem] font-bold uppercase tracking-[0.5em]">Evidence Gallery</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-8 text-main">
            Problems solved, <br />
            <span class="italic serif-font lowercase" style="color: #52525B">outcomes delivered.</span>
          </h2>
          <p class="text-soft text-xl font-medium leading-relaxed max-w-2xl">
            A selective collection of complex product challenges resolved through disciplined design and engineering protocols.
          </p>
        </div>

        <!-- High-Precision Carousel Navigation -->
        <div class="flex items-center gap-6 bg-panel/40 backdrop-blur-xl border border-glass p-2.5 rounded-full shadow-sm">
          <button @click="prev" class="cs-nav-btn" aria-label="Previous">
            <Icon name="lucide:arrow-left" class="h-5 w-5" />
          </button>
          <div class="flex flex-col items-center min-w-[64px]">
            <span class="text-main text-lg font-black tracking-tighter tabular-nums leading-none">{{ String(active + 1).padStart(2, '0') }}</span>
            <span class="text-muted text-[0.55rem] font-black uppercase tracking-widest opacity-30 mt-1">OF {{ String(caseStudies.length).padStart(2, '0') }}</span>
          </div>
          <button @click="next" class="cs-nav-btn" aria-label="Next">
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Main Case Study Display: The High-Resolution Card -->
      <div class="relative">
        <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
          <div :key="active" class="group relative rounded-[48px] bg-panel/20 border border-glass p-8 md:p-16 transition-all duration-700 hover:bg-panel/40 hover:shadow-2xl overflow-hidden">
            
            <!-- Abstract Logic Grid Background -->
            <div class="absolute inset-0 pointer-events-none opacity-[0.02]" 
                 style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 48px 48px;"></div>

            <div class="relative z-10 grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-32">

              <!-- NARRATIVE ARCHITECTURE -->
              <div class="flex flex-col gap-12">
                <!-- Meta Info -->
                <div class="flex items-center gap-4">
                  <span class="text-accent text-[0.65rem] font-bold uppercase tracking-[0.3em] font-mono whitespace-nowrap">Industry: {{ caseStudies[active].industry }}</span>
                  <div class="h-px w-full bg-accent/5"></div>
                </div>

                <!-- Strategic Title -->
                <h3 class="text-main text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] group-hover:text-accent transition-colors duration-500">
                  {{ caseStudies[active].title }}
                </h3>

                <!-- Problem vs Solution: The Logical Split -->
                <div class="grid md:grid-cols-2 gap-12 pt-4">
                  <div class="space-y-6">
                    <div class="flex items-center gap-3">
                       <span class="text-main text-[0.6rem] font-black uppercase tracking-[0.4em] text-soft">The Crisis</span>
                    </div>
                    <p class="text-soft text-lg font-medium leading-relaxed">
                      {{ caseStudies[active].problem }}
                    </p>
                  </div>
                  <div class="space-y-6">
                    <div class="flex items-center gap-3">
                       <span class="text-accent text-[0.6rem] font-black uppercase tracking-[0.4em]">The Intervention</span>
                    </div>
                    <p class="text-soft text-lg font-medium leading-relaxed">
                      {{ caseStudies[active].solution }}
                    </p>
                  </div>
                </div>

                <!-- Execution Protocol: Steps -->
                <div class="pt-12 border-t border-accent/5">
                  <span class="text-[0.6rem] font-black uppercase tracking-[0.5em] text-soft opacity-30 mb-8 block">Execution_Protocol</span>
                  <div class="flex flex-wrap gap-x-12 gap-y-6">
                    <div v-for="(step, si) in caseStudies[active].process" :key="si" class="flex items-center gap-4 group/step">
                      <span class="text-accent text-sm font-black italic serif-font opacity-20 group-hover/step:opacity-100 transition-all tabular-nums">0{{ si + 1 }}</span>
                      <span class="text-soft text-sm font-bold tracking-tight">{{ step }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- DATA & OUTCOME ARCHIVE -->
              <div class="flex flex-col gap-8">
                <!-- Primary Metric Widget -->
                <div class="bg-accent/5 border border-glass rounded-[40px] p-10 space-y-4 relative overflow-hidden">
                  <div class="flex items-center gap-3">
                    <span class="text-accent text-[0.65rem] font-black uppercase tracking-widest">{{ caseStudies[active].metrics[0].label }}</span>
                  </div>
                  <div class="text-7xl font-black text-main tracking-tighter leading-none italic serif-font">{{ caseStudies[active].metrics[0].value }}</div>
                  <p class="text-soft text-sm font-medium opacity-60 leading-snug">{{ caseStudies[active].metrics[0].sub }}</p>
                </div>

                <!-- Supporting Metrics Grid -->
                <div class="grid grid-cols-2 gap-8">
                  <div v-for="(metric, mi) in caseStudies[active].metrics.slice(1)" :key="mi" class="bg-panel/40 border border-glass rounded-[32px] p-8 space-y-4">
                    <span class="text-muted text-[0.55rem] font-black uppercase tracking-widest block opacity-40">{{ metric.label }}</span>
                    <div class="text-3xl font-black text-main tracking-tight">{{ metric.value }}</div>
                    <p class="text-muted text-[0.65rem] font-medium leading-tight opacity-60">{{ metric.sub }}</p>
                  </div>
                </div>

                <!-- Impact Statement: Final Validation -->
                <div class="bg-accent text-accent-fg rounded-[32px] p-10 shadow-2xl shadow-accent/20 relative overflow-hidden group/impact">
                  <div class="absolute top-0 right-0 h-24 w-24 bg-white/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover/impact:scale-110 transition-transform"></div>
                  <div class="flex items-center gap-3 mb-6">
                    <Icon name="lucide:award" class="h-5 w-5" />
                    <span class="text-[0.65rem] font-black uppercase tracking-widest opacity-80">Strategic Outcome</span>
                  </div>
                  <p class="text-xl font-black leading-tight mb-3 italic serif-font">"{{ caseStudies[active].impact.headline }}"</p>
                  <p class="text-accent-fg/70 text-sm font-medium leading-relaxed">{{ caseStudies[active].impact.detail }}</p>
                </div>
              </div>

            </div>
          </div>
        </Transition>
      </div>

      <!-- Conversion Bridge: Architectural CTA -->
      <div class="mt-20 md:mt-32 flex flex-col md:flex-row items-center gap-12 bg-panel/20 border border-glass p-8 md:p-16 rounded-[56px]">
        <div class="max-w-xl text-center md:text-left">
          <h4 class="text-main text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-none">Facing a complex <br /> product barrier?</h4>
          <p class="text-soft text-lg font-medium opacity-70">I transition enterprise products from "functional" to "authoritative" through surgical design execution.</p>
        </div>
        <div class="h-px w-full md:flex-1 bg-accent/5 hidden md:block"></div>
        <div class="shrink-0">
          <SharedButton tag="a" href="#contact" variant="primary" size="lg" class="h-16 px-12">
            Discuss Case Strategy
            <template #right><Icon name="lucide:arrow-right" class="h-4 w-4" /></template>
          </SharedButton>
        </div>
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
.serif-font { font-family: 'Playfair Display', serif; }

.cs-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 99px;
  background: var(--bg-soft);
  border: 1px solid var(--border-glass);
  color: var(--text-main);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.cs-nav-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-fg);
  transform: scale(1.1);
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
