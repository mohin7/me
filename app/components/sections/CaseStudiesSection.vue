<template>
  <section id="case-studies" class="relative py-24 md:py-36 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-brand-a/[0.04] blur-[120px]"></div>
      <div class="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-brand-b/[0.04] blur-[100px]"></div>
      <div class="absolute inset-0 opacity-[0.015] [background-image:radial-gradient(rgba(var(--brand-rgb),1)_1px,transparent_1px)] [background-size:32px_32px]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header + nav controls -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
        <div class="max-w-2xl">
          <div class="cs-label mb-5">
            <Icon name="lucide:search" class="h-3.5 w-3.5 text-brand-a" />
            <span>Real Outcomes · Real Clients</span>
          </div>
          <h2 class="text-main text-4xl md:text-5xl font-black tracking-tight leading-[0.9] mb-4">
            Problems I Solved,<br>
            <span class="brand-text-gradient">Results That Speak</span>
          </h2>
          <p class="text-soft text-lg font-medium leading-relaxed opacity-80">
            How I diagnose, design, and deliver solutions that move the needle — with measurable outcomes.
          </p>
        </div>

        <!-- Carousel nav -->
        <div class="flex items-center gap-4 shrink-0">
          <!-- Slide counter -->
          <span class="cs-counter">
            <span class="text-brand-a font-black">{{ String(active + 1).padStart(2, '0') }}</span>
            <span class="text-muted">&nbsp;/&nbsp;{{ String(caseStudies.length).padStart(2, '0') }}</span>
          </span>
          <!-- Arrows -->
          <button @click="prev" class="cs-nav-btn" aria-label="Previous">
            <Icon name="lucide:arrow-left" class="h-5 w-5" />
          </button>
          <button @click="next" class="cs-nav-btn" aria-label="Next">
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Carousel track -->
      <div class="cs-carousel-wrap">
        <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
          <div :key="active" class="cs-card group">
            <!-- Top specular -->
            <div class="cs-light-leak"></div>

            <div class="relative z-10 grid md:grid-cols-12 gap-10 md:gap-14 items-start p-8 md:p-12">

              <!-- LEFT: narrative -->
              <div class="md:col-span-7 flex flex-col gap-7">
                <!-- Tags -->
                <div class="flex flex-wrap items-center gap-2">
                  <span class="cs-tag" v-for="tag in caseStudies[active].tags" :key="tag">{{ tag }}</span>
                </div>

                <!-- Title + context -->
                <div>
                  <h3 class="text-main text-2xl md:text-[1.75rem] font-black tracking-tight leading-tight mb-3">
                    {{ caseStudies[active].title }}
                  </h3>
                  <p class="text-soft text-base font-medium leading-relaxed opacity-75">
                    {{ caseStudies[active].context }}
                  </p>
                </div>

                <!-- Problem / Solution -->
                <div class="grid sm:grid-cols-2 gap-4">
                  <div class="cs-block cs-block--problem">
                    <div class="cs-block-label">
                      <Icon name="lucide:alert-triangle" class="h-3.5 w-3.5" />
                      The Problem
                    </div>
                    <p class="text-main/80 text-sm leading-relaxed">{{ caseStudies[active].problem }}</p>
                  </div>
                  <div class="cs-block cs-block--solution">
                    <div class="cs-block-label">
                      <Icon name="lucide:lightbulb" class="h-3.5 w-3.5" />
                      My Approach
                    </div>
                    <p class="text-main/80 text-sm leading-relaxed">{{ caseStudies[active].solution }}</p>
                  </div>
                </div>

                <!-- Process steps -->
                <div>
                  <p class="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-3">Design Process</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(step, si) in caseStudies[active].process" :key="si" class="cs-process-step">
                      <span class="cs-process-num">{{ si + 1 }}</span>
                      {{ step }}
                    </span>
                  </div>
                </div>

                <!-- CTA -->
                <div class="flex items-center gap-4 pt-1">
                  <a :href="caseStudies[active].href" target="_blank" class="cs-cta-link group/cta">
                    View Case Details
                    <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>
              </div>

              <!-- RIGHT: metrics + tools + impact -->
              <div class="md:col-span-5 flex flex-col gap-4">
                <!-- Metrics -->
                <div class="grid grid-cols-2 gap-3">
                  <div
                    v-for="(metric, mi) in caseStudies[active].metrics"
                    :key="mi"
                    class="cs-metric"
                    :class="mi === 0 ? 'col-span-2' : ''"
                  >
                    <div class="flex items-center gap-2 mb-1">
                      <Icon :name="metric.icon" class="h-4 w-4 text-brand-a shrink-0" />
                      <span class="text-[10px] font-black uppercase tracking-[0.15em] text-muted">{{ metric.label }}</span>
                    </div>
                    <p class="cs-metric-value">{{ metric.value }}</p>
                    <p class="text-soft text-xs leading-snug opacity-60 mt-1">{{ metric.sub }}</p>
                  </div>
                </div>

                <!-- Tools -->
                <div class="cs-tools-box">
                  <p class="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-3">Tools & Stack</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tool in caseStudies[active].tools" :key="tool" class="cs-tool-chip">{{ tool }}</span>
                  </div>
                </div>

                <!-- Impact -->
                <div class="cs-impact-badge">
                  <Icon name="lucide:trending-up" class="h-5 w-5 text-brand-a shrink-0 mt-0.5" />
                  <div>
                    <p class="text-main text-sm font-black leading-tight mb-0.5">{{ caseStudies[active].impact.headline }}</p>
                    <p class="text-soft text-xs leading-snug opacity-70">{{ caseStudies[active].impact.detail }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <!-- Dot indicators -->
        <div class="flex items-center justify-center gap-2.5 mt-8">
          <button
            v-for="(_, i) in caseStudies"
            :key="i"
            @click="goTo(i)"
            class="cs-dot"
            :class="i === active ? 'cs-dot--active' : ''"
            :aria-label="`Go to case study ${i + 1}`"
          ></button>
        </div>
      </div>

      <!-- Bottom CTA strip -->
      <div class="mt-16 cs-bottom-strip">
        <div class="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
          <div class="absolute inset-0 bg-gradient-to-br from-brand-a/10 via-transparent to-brand-b/5"></div>
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-a/40 to-transparent"></div>
        </div>
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12">
          <div>
            <h3 class="text-main text-2xl md:text-3xl font-black tracking-tight mb-2">Have a problem worth solving?</h3>
            <p class="text-soft text-base leading-relaxed opacity-70 max-w-lg">I work with founders and product teams to turn messy challenges into clean, scalable solutions. Let's build something people love.</p>
          </div>
          <div class="flex shrink-0 items-center gap-3">
            <a href="#contact" class="cs-main-cta">
              <Icon name="lucide:calendar" class="h-4 w-4" />
              Start a Conversation
            </a>
          </div>
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
/* ─── Label ─── */
.cs-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px;
  border-radius: 100px;
  background: rgba(var(--brand-rgb), 0.08);
  border: 1px solid rgba(var(--brand-rgb), 0.20);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-a);
}

/* ─── Slide counter ─── */
.cs-counter {
  font-size: 0.8rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.05em;
}

/* ─── Nav buttons ─── */
.cs-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: var(--bg-soft);
  border: 1px solid var(--border-subtle);
  color: var(--text-soft);
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
}
.cs-nav-btn:hover {
  background: rgba(var(--brand-rgb), 0.10);
  border-color: rgba(var(--brand-rgb), 0.25);
  color: var(--brand-a);
  transform: scale(1.07);
}

/* ─── Carousel wrapper ─── */
.cs-carousel-wrap {
  position: relative;
}

/* ─── Card ─── */
.cs-card {
  position: relative;
  border-radius: 2.5rem;
  border: 1px solid var(--border-subtle);
  background: linear-gradient(135deg, var(--bg-panel) 0%, rgba(255,255,255,0.02) 100%);
  overflow: hidden;
  box-shadow: 0 24px 64px -16px rgba(0,0,0,0.18);
  transition: border-color 0.4s, box-shadow 0.4s;
}
.cs-card:hover {
  border-color: rgba(var(--brand-rgb), 0.22);
  box-shadow: 0 32px 80px -16px rgba(0,0,0,0.25), 0 0 0 1px rgba(var(--brand-rgb), 0.05);
}
.cs-light-leak {
  position: absolute;
  top: 0; left: 20px; right: 20px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14) 50%, transparent);
  z-index: 5;
  pointer-events: none;
}

/* ─── Slide transitions ─── */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.38s ease, transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-left-enter-from  { opacity: 0; transform: translateX(60px); }
.slide-left-leave-to    { opacity: 0; transform: translateX(-60px); }
.slide-right-enter-from { opacity: 0; transform: translateX(-60px); }
.slide-right-leave-to   { opacity: 0; transform: translateX(60px); }

/* ─── Dot indicators ─── */
.cs-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-subtle);
  border: 1px solid var(--border-subtle);
  cursor: pointer;
  transition: background 0.25s, width 0.3s cubic-bezier(0.4,0,0.2,1), border-radius 0.3s;
}
.cs-dot--active {
  width: 28px;
  border-radius: 100px;
  background: var(--brand-a);
  border-color: var(--brand-a);
}

/* ─── Tags ─── */
.cs-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 100px;
  background: rgba(var(--brand-rgb), 0.08);
  border: 1px solid rgba(var(--brand-rgb), 0.18);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--brand-a);
}

/* ─── Problem/Solution blocks ─── */
.cs-block {
  padding: 16px;
  border-radius: 16px;
  border: 1px solid;
}
.cs-block--problem {
  background: rgba(239,68,68,0.04);
  border-color: rgba(239,68,68,0.12);
}
.cs-block--solution {
  background: rgba(var(--brand-rgb), 0.04);
  border-color: rgba(var(--brand-rgb), 0.14);
}
.cs-block-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 8px;
}
.cs-block--problem .cs-block-label { color: rgba(239,68,68,0.70); }
.cs-block--solution .cs-block-label { color: var(--brand-a); opacity: 0.85; }

/* ─── Process steps ─── */
.cs-process-step {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px 4px 5px;
  border-radius: 100px;
  background: var(--bg-soft);
  border: 1px solid var(--border-subtle);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--text-soft);
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.cs-process-step:hover {
  background: rgba(var(--brand-rgb), 0.08);
  border-color: rgba(var(--brand-rgb), 0.20);
  color: var(--brand-a);
}
.cs-process-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: rgba(var(--brand-rgb), 0.12);
  color: var(--brand-a);
  font-size: 0.6rem;
  font-weight: 900;
}

/* ─── CTA link ─── */
.cs-cta-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--brand-a);
  text-decoration: none;
  transition: gap 0.2s;
}
.cs-cta-link:hover { gap: 10px; }

/* ─── Metric cards ─── */
.cs-metric {
  padding: 16px;
  border-radius: 16px;
  background: var(--bg-soft);
  border: 1px solid var(--border-subtle);
  transition: border-color 0.25s, background 0.25s;
}
.cs-metric:hover {
  background: rgba(var(--brand-rgb), 0.04);
  border-color: rgba(var(--brand-rgb), 0.16);
}
.cs-metric-value {
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--text-main);
  line-height: 1;
}

/* ─── Tools box ─── */
.cs-tools-box {
  padding: 16px;
  border-radius: 16px;
  background: var(--bg-soft);
  border: 1px solid var(--border-subtle);
}
.cs-tool-chip {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(var(--brand-rgb), 0.06);
  border: 1px solid rgba(var(--brand-rgb), 0.12);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--text-soft);
  transition: background 0.2s, color 0.2s;
}
.cs-tool-chip:hover {
  background: rgba(var(--brand-rgb), 0.12);
  color: var(--brand-a);
}

/* ─── Impact badge ─── */
.cs-impact-badge {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(var(--brand-rgb), 0.08) 0%, rgba(var(--brand-rgb), 0.03) 100%);
  border: 1px solid rgba(var(--brand-rgb), 0.20);
}

/* ─── Bottom strip ─── */
.cs-bottom-strip {
  position: relative;
  border-radius: 2rem;
  border: 1px solid var(--border-subtle);
  background: var(--bg-panel);
  overflow: hidden;
  transition: border-color 0.4s;
}
.cs-bottom-strip:hover { border-color: rgba(var(--brand-rgb), 0.22); }

/* ─── Main CTA ─── */
.cs-main-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 100px;
  background: linear-gradient(135deg, var(--brand-a) 0%, var(--brand-b) 100%);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 8px 24px rgba(var(--brand-rgb), 0.30);
  transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease;
}
.cs-main-cta:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 12px 32px rgba(var(--brand-rgb), 0.42);
}
</style>
