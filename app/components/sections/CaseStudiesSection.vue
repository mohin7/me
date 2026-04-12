<template>
  <section id="case-studies" class="relative py-24 md:py-40 bg-page overflow-visible">
    <!-- Section Decorative Elements -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-subtle to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-soft border border-subtle mb-8">
            <div class="h-2 w-2 rounded-full bg-brand-a animate-pulse"></div>
            <span class="text-brand-a text-[0.65rem] font-black uppercase tracking-[0.2em]">Evidence Gallery</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-8 text-main">
            Problems Solved, <br> <span class="text-brand-a italic">Outcomes Delivered.</span>
          </h2>
          <p class="text-soft text-xl font-medium leading-relaxed opacity-70 max-w-2xl">
            A selective collection of complex product challenges resolved through disciplined design and engineering.
          </p>
        </div>

        <!-- Carousel Navigation -->
        <div class="flex items-center gap-6 shrink-0 bg-panel border border-subtle p-2 rounded-full shadow-sm">
          <button @click="prev" class="cs-nav-btn-v2" aria-label="Previous">
            <Icon name="lucide:chevron-left" class="h-5 w-5" />
          </button>
          <div class="flex flex-col items-center min-w-[60px]">
            <span class="text-main text-sm font-black tracking-tighter tabular-nums">{{ String(active + 1).padStart(2, '0') }}</span>
            <span class="text-muted text-[0.6rem] font-bold uppercase opacity-40">OF {{ String(caseStudies.length).padStart(2, '0') }}</span>
          </div>
          <button @click="next" class="cs-nav-btn-v2" aria-label="Next">
            <Icon name="lucide:chevron-right" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Main Case Study Display -->
      <div class="relative">
        <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
          <div :key="active" class="group relative overflow-hidden rounded-[32px] bg-panel border border-subtle p-8 md:p-16 transition-all duration-700">
            
            <!-- Abstract Blueprint Background -->
            <div class="absolute inset-0 pointer-events-none opacity-[0.03] grayscale invert dark:invert-0" 
                 style="background-image: radial-gradient(var(--brand-a) 1px, transparent 1px); background-size: 40px 40px;"></div>

            <div class="relative z-10 grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24">

              <!-- NARRATIVE SIDE -->
              <div class="flex flex-col gap-10">
                <!-- Industry & Tags -->
                <div class="flex flex-wrap items-center gap-3">
                  <span class="bg-brand-a/10 text-brand-a text-[0.6rem] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-brand-a/20">
                    {{ caseStudies[active].tags[0] }}
                  </span>
                  <div class="h-px w-8 bg-subtle"></div>
                  <div class="flex gap-2">
                    <span v-for="tag in caseStudies[active].tags.slice(1)" :key="tag" class="text-muted text-[0.6rem] font-bold uppercase tracking-widest opacity-60">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- Strategic Title -->
                <h3 class="text-main text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] group-hover:text-brand-a transition-colors">
                  {{ caseStudies[active].title }}
                </h3>

                <!-- Problem vs Solution Split -->
                <div class="grid md:grid-cols-2 gap-8">
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                       <div class="h-8 w-8 rounded-lg bg-soft flex items-center justify-center border border-subtle">
                         <Icon name="lucide:target" class="h-4 w-4 text-muted" />
                       </div>
                       <span class="text-main text-[0.65rem] font-black uppercase tracking-widest italic outline-text">The Challenge</span>
                    </div>
                    <p class="text-soft text-base font-medium leading-relaxed opacity-80">
                      {{ caseStudies[active].problem }}
                    </p>
                  </div>
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                       <div class="h-8 w-8 rounded-lg bg-brand-a/10 flex items-center justify-center border border-brand-a/20">
                         <Icon name="lucide:zap" class="h-4 w-4 text-brand-a" />
                       </div>
                       <span class="text-brand-a text-[0.65rem] font-black uppercase tracking-widest italic">The Intervention</span>
                    </div>
                    <p class="text-soft text-base font-medium leading-relaxed opacity-80">
                      {{ caseStudies[active].solution }}
                    </p>
                  </div>
                </div>

                <!-- Process Sequence -->
                <div class="pt-8 border-t border-subtle/50">
                  <p class="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted mb-6">Execution Protocol</p>
                  <div class="flex flex-wrap gap-4">
                    <div v-for="(step, si) in caseStudies[active].process" :key="si" class="flex items-center gap-3 group/step">
                      <span class="text-main text-sm font-black opacity-30 group-hover/step:opacity-100 group-hover/step:text-brand-a transition-all tabular-nums">0{{ si + 1 }}</span>
                      <span class="text-soft text-xs font-bold tracking-tight opacity-60">{{ step }}</span>
                      <span v-if="si < caseStudies[active].process.length - 1" class="text-subtle opacity-30 mt-0.5 md:mx-1 font-mono">→</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- DATA & OUTCOME SIDE -->
              <div class="flex flex-col gap-6">
                <!-- Primary Outcome Metric -->
                <div class="bg-panel-strong border border-subtle rounded-[24px] p-8 space-y-4 relative overflow-hidden group/metric">
                  <div class="absolute -right-4 -bottom-4 opacity-[0.03] group-hover/metric:opacity-[0.06] transition-opacity">
                    <Icon :name="caseStudies[active].metrics[0].icon" class="h-40 w-40 text-main" />
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon :name="caseStudies[active].metrics[0].icon" class="h-5 w-5 text-brand-a" />
                    <span class="text-main text-[0.65rem] font-black uppercase tracking-widest">{{ caseStudies[active].metrics[0].label }}</span>
                  </div>
                  <div class="text-6xl font-black text-main tracking-tighter leading-none">{{ caseStudies[active].metrics[0].value }}</div>
                  <p class="text-soft text-sm font-medium opacity-60 leading-snug">{{ caseStudies[active].metrics[0].sub }}</p>
                </div>

                <!-- Supporting Metrics Grid -->
                <div class="grid grid-cols-2 gap-6">
                  <div v-for="(metric, mi) in caseStudies[active].metrics.slice(1)" :key="mi" class="bg-panel border border-subtle rounded-[20px] p-6 space-y-3">
                    <span class="text-muted text-[0.55rem] font-black uppercase tracking-widest block">{{ metric.label }}</span>
                    <div class="text-2xl font-black text-main tracking-tight">{{ metric.value }}</div>
                    <p class="text-muted text-[0.65rem] font-medium leading-tight opacity-60">{{ metric.sub }}</p>
                  </div>
                </div>

                <!-- Tools Stack -->
                <div class="bg-soft/30 border border-subtle/50 rounded-[20px] p-6">
                  <p class="text-[0.6rem] font-black uppercase tracking-widest text-muted mb-4">Crafting Stack</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tool in caseStudies[active].tools" :key="tool" class="px-3 py-1 bg-panel border border-subtle rounded-md text-[0.65rem] font-bold text-soft">
                      {{ tool }}
                    </span>
                  </div>
                </div>

                <!-- Final Impact Statement -->
                <div class="bg-brand-a text-white rounded-[24px] p-8 shadow-xl shadow-brand-a/20">
                  <div class="flex items-center gap-3 mb-4">
                    <Icon name="lucide:check-circle-2" class="h-5 w-5" />
                    <span class="text-[0.65rem] font-black uppercase tracking-widest opacity-80">Strategic Impact</span>
                  </div>
                  <p class="text-lg font-black leading-tight mb-2 italic">"{{ caseStudies[active].impact.headline }}"</p>
                  <p class="text-white/70 text-sm font-medium leading-relaxed">{{ caseStudies[active].impact.detail }}</p>
                </div>
              </div>

            </div>
          </div>
        </Transition>
      </div>

      <!-- Quick Conversation CTA -->
      <div class="mt-16 flex flex-col md:flex-row items-center gap-8 bg-panel border border-subtle p-8 md:px-12 md:py-14 rounded-[40px] shadow-sm">
        <div class="max-w-xl text-center md:text-left">
          <h4 class="text-main text-3xl font-black tracking-tighter mb-4">Facing a complex product barrier?</h4>
          <p class="text-soft text-lg font-medium opacity-70">I help transition products from "working" to "winning" through high-impact design and architectural clarity.</p>
        </div>
        <div class="h-px w-full md:w-16 bg-subtle hidden md:block"></div>
        <div class="shrink-0">
          <SharedButton tag="a" href="#contact" variant="primary" size="lg">
            Discuss Case Studies
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
    title: "Rebuilding KubeDB's Operator UI from the Ground Up",
    context: "AppsCode's flagship Kubernetes database management platform (kubedb.com) had grown into a complex, hard-to-navigate product. Enterprise users were churning because of poor discoverability and cognitive overload.",
    tags: ["Enterprise SaaS", "UI/UX Redesign", "Design System"],
    problem: "The existing interface mixed advanced configuration screens with beginner workflows, causing a >45% task abandonment rate. Engineers couldn't find critical monitoring dashboards without 4–6 steps.",
    solution: "Led a full information architecture audit, introduced progressive disclosure patterns, built a role-based navigation system, and delivered a unified component library used across 6 product surfaces.",
    process: ["User Research", "IA Audit", "Wireframing", "Component Library", "Usability Testing", "Handoff"],
    metrics: [
      { icon: "lucide:trending-down", label: "Task Abandonment", value: "↓ 52%", sub: "Average drop reduction across primary user journeys" },
      { icon: "lucide:clock", label: "Time-to-Action", value: "3.2× faster", sub: "Operators completed key tasks 3× quicker post-launch" },
      { icon: "lucide:layers", label: "Components Built", value: "120+", sub: "Reusable, documented UI components shipped" },
    ],
    tools: ["Figma", "Vue 3", "NuxtJS", "Storybook", "Tailwind CSS"],
    impact: {
      headline: "Adopted company-wide across 4 SaaS products",
      detail: "The design system became the single source of truth for AppsCode's entire product portfolio."
    },
    href: "https://kubedb.com"
  },
  {
    title: "Zero-to-MVP: Quran App in Under 3 Weeks",
    context: "A personal mission to create a distraction-free, lightning-fast Quran reading experience on mobile and web — using modern Vue 3 with a focus on accessibility and typography.",
    tags: ["Personal Project", "Mobile-First", "Accessibility"],
    problem: "Existing Quran apps were bloated with ads, had poor typography, or lacked offline support. Users with older devices were left behind by heavy frameworks.",
    solution: "Built a lightweight Vue 3 SPA with zero third-party UI dependencies. Designed a custom reading mode with dyslexia-friendly font options, dark mode, and offline-first caching via service worker.",
    process: ["Discovery", "Prototype", "Typography Design", "PWA Setup", "Beta Testing", "Launch"],
    metrics: [
      { icon: "lucide:zap", label: "Load Time", value: "< 1.2s", sub: "First Contentful Paint on 3G connections" },
      { icon: "lucide:smartphone", label: "Lighthouse Score", value: "98 / 100", sub: "Performance, Accessibility & Best Practices" },
      { icon: "lucide:users", label: "Beta Users", value: "200+", sub: "Testers in first 2 weeks via GitHub" },
    ],
    tools: ["Vue 3", "Vite", "PWA", "Custom CSS", "Quran.com API"],
    impact: {
      headline: "Featured in developer communities as a Vue 3 reference app",
      detail: "100% open-source. Received contributions from 8 international developers within the first month."
    },
    href: "https://github.com/mohin7/quran-vue3-tailwind"
  },
  {
    title: "Design System Rollout at Cloud Software Solutions",
    context: "As Frontend Developer, I found each project team independently rebuilding the same UI patterns — buttons, forms, tables — with inconsistent results. Engineers were spending 30% of sprint time on UI inconsistencies.",
    tags: ["Design System", "Frontend Architecture", "Team Tooling"],
    problem: "Five product teams shared no common language for UI. Every new project started from scratch — causing brand inconsistency, wasted dev hours, and a fragile user experience across products.",
    solution: "Proposed, designed, and led implementation of a Bootstrap-based design token system with documented components. Created a living Storybook guide and ran onboarding workshops for all engineers.",
    process: ["Audit", "Token Design", "Component Build", "Documentation", "Team Training", "Adoption"],
    metrics: [
      { icon: "lucide:timer", label: "Dev Time Saved", value: "~30%", sub: "Per-sprint UI rebuild time eliminated across teams" },
      { icon: "lucide:package", label: "Components", value: "85+", sub: "Documented, tested components in the shared library" },
      { icon: "lucide:check-circle", label: "Brand Consistency", value: "100%", sub: "Unified visual language across all product teams" },
    ],
    tools: ["Figma", "Bootstrap 5", "Storybook", "SASS", "HTML/CSS", "GitHub Actions"],
    impact: {
      headline: "Reduced QA cycles by 40% due to predictable component behavior",
      detail: "The system became the standard reference for all future projects, cutting onboarding time for new devs in half."
    },
    href: "https://github.com/mohin7/clean-html-template-with-bootstrap"
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
function goTo(i: number) {
  direction.value = i > active.value ? 'next' : 'prev'
  active.value = i
}
</script>

<style scoped>
/* ─── Nav Buttons V2 ─── */
.cs-nav-btn-v2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 99px;
  background: var(--bg-soft);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.cs-nav-btn-v2:hover {
  background: var(--brand-a);
  border-color: var(--brand-a);
  color: white;
  transform: scale(1.05);
}

/* ─── Transitions ─── */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-left-enter-from  { opacity: 0; transform: translateX(60px) scale(0.98); }
.slide-left-leave-to    { opacity: 0; transform: translateX(-60px) scale(0.98); }
.slide-right-enter-from { opacity: 0; transform: translateX(-60px) scale(0.98); }
.slide-right-leave-to   { opacity: 0; transform: translateX(60px) scale(0.98); }

/* ─── Typography Accents ─── */
.outline-text {
  -webkit-text-stroke: 1px var(--border-subtle);
  color: transparent;
}
</style>

