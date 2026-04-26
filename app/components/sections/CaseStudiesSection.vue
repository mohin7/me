<template>
  <section id="case-studies" class="relative py-24 md:py-44 bg-page overflow-visible">
    <!-- Sophisticated Section Border -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-glass to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header: Strategic Direction -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12 mb-20 md:mb-32">
        <div class="max-w-3xl">
          <div class="mb-10 lg:mb-12">
            <span class="section-label">Evidence Gallery</span>
          </div>
          <h2 class="italic serif-font lowercase">
            Impact <br />
            <span style="color: var(--text-soft)">architected.</span>
          </h2>
          <p class="text-soft text-xl font-medium leading-relaxed max-w-2xl opacity-80">
            Moving beyond metrics to highlight the complex structural problems resolved and the long-term value delivered to users and stakeholders.
          </p>
        </div>

        <!-- High-Precision Carousel Navigation -->
        <div class="flex items-center w-fit mx-auto md:mx-0 gap-6 bg-panel/40 backdrop-blur-xl border border-glass p-2.5 rounded-full shadow-sm">
          <button @click="prev" class="cs-nav-btn" aria-label="Previous">
            <Icon name="lucide:arrow-left" class="h-5 w-5" />
          </button>
          <div class="flex flex-col items-center min-w-[64px]">
            <span class="text-main text-lg font-black tracking-tighter tabular-nums leading-none">{{ String(active + 1).padStart(2, '0') }}</span>
            <span class="text-muted text-[0.55rem] font-black uppercase tracking-widest opacity-40 mt-1">OF {{ String(caseStudies.length).padStart(2, '0') }}</span>
          </div>
          <button @click="next" class="cs-nav-btn" aria-label="Next">
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Main Case Study Display -->
      <div class="relative">
        <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
          <div :key="active" class="group relative rounded-[40px] md:rounded-[64px] bg-panel/10 border border-glass p-8 md:p-20 transition-all duration-700 hover:bg-panel/20 hover:shadow-2xl overflow-hidden">
            
            <!-- Abstract Logic Grid Background -->
            <div class="absolute inset-0 pointer-events-none opacity-[0.015]" 
                 style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 48px 48px;"></div>

            <div class="relative z-10 flex flex-col gap-16 lg:gap-24">

              <!-- Top Tier: Title & Industry -->
              <div class="flex flex-col gap-8 max-w-4xl">
                 <div class="flex items-center gap-4">
                   <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.4em] font-mono">Case_Archive_0{{ active + 1 }}</span>
                   <div class="h-px w-24 bg-accent/20"></div>
                   <span class="text-muted text-[0.55rem] font-bold uppercase tracking-widest opacity-60">{{ caseStudies[active].industry }}</span>
                 </div>
                 <h3 class="group-hover:text-accent transition-colors duration-500">
                   {{ caseStudies[active].title }}
                 </h3>
              </div>

              <!-- Content Pillars: Problem, Impact, Value -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                
                <!-- Pillar 1: The Problem -->
                <div class="space-y-8">
                   <div class="flex items-center gap-3">
                     <div class="h-10 w-10 rounded-xl flex items-center justify-center text-accent" style="background-color: color-mix(in srgb, var(--accent), transparent 95%)">
                       <Icon name="lucide:alert-circle" class="h-5 w-5" />
                     </div>
                     <span class="text-main text-[0.65rem] font-black uppercase tracking-widest">Problem_Solved</span>
                   </div>
                   <p class="text-soft text-lg font-medium leading-relaxed opacity-90">
                     {{ caseStudies[active].problem }}
                   </p>
                </div>

                <!-- Pillar 2: User Impact -->
                <div class="space-y-8">
                   <div class="flex items-center gap-3">
                     <div class="h-10 w-10 rounded-xl flex items-center justify-center text-accent" style="background-color: color-mix(in srgb, var(--accent), transparent 95%)">
                       <Icon name="lucide:users" class="h-5 w-5" />
                     </div>
                     <span class="text-main text-[0.65rem] font-black uppercase tracking-widest">User_Experience_Impact</span>
                   </div>
                   <p class="text-soft text-lg font-medium leading-relaxed opacity-90">
                     {{ caseStudies[active].userImpact }}
                   </p>
                </div>

                <!-- Pillar 3: Business Value -->
                <div class="space-y-8">
                   <div class="flex items-center gap-3">
                     <div class="h-10 w-10 rounded-xl flex items-center justify-center text-accent" style="background-color: color-mix(in srgb, var(--accent), transparent 95%)">
                       <Icon name="lucide:trending-up" class="h-5 w-5" />
                     </div>
                     <span class="text-main text-[0.65rem] font-black uppercase tracking-widest">Business_Outcome</span>
                   </div>
                   <p class="text-soft text-lg font-medium leading-relaxed opacity-90">
                     {{ caseStudies[active].businessValue }}
                   </p>
                </div>

              </div>

              <!-- Bottom Tier: Strategy Quote -->
              <div class="pt-16 border-t border-glass">
                 <div class="flex flex-col md:flex-row md:items-center gap-8 justify-between">
                    <div class="flex items-center gap-6">
                      <div class="h-16 w-16 rounded-full border-2 border-glass bg-soft overflow-hidden p-2 flex items-center justify-center">
                         <Icon name="lucide:shield-check" class="h-8 w-8 text-accent opacity-40" />
                      </div>
                      <div>
                        <p class="text-main text-xl font-bold italic serif-font">"{{ caseStudies[active].impactHeadline }}"</p>
                        <p class="text-muted text-[0.65rem] font-black uppercase tracking-widest opacity-60 mt-1">Strategic Architecture validation</p>
                      </div>
                    </div>
                    <SharedButton 
                      tag="a" 
                      href="#" 
                      variant="liquid" 
                      class="h-12 px-8 rounded-full"
                    >
                      View Logic Archive
                    </SharedButton>
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
    title: "Enterprise Database Core",
    industry: "Cloud Infrastructure",
    problem: "Operators were struggling with cognitive overload in high-concurrency environments, leading to costly deployment errors.",
    userImpact: "Reduced operational friction by 60%, allowing engineers to execute complex scaling tasks with zero task-abandonment.",
    businessValue: "Standardized the UI across 6 global products, cutting multi-product design debt and accelerating time-to-market by 3.2x.",
    impactHeadline: "Consolidated AppsCode's entire multi-cloud ecosystem under one unified design protocol.",
  },
  {
    title: "High-Frequency Reader",
    industry: "Linguistics & PWA",
    problem: "Religious applications were historically fragmented and ad-heavy, failing to provide the typographic focus required for study.",
    userImpact: "Created a distraction-free environment that increased average session duration by 150% and daily active users during the pilot.",
    businessValue: "Established a reference system for Vue 3 PWAs that attracted international contributors and validated offline-first scaling.",
    impactHeadline: "Redefined digital concentration through surgical typography and distraction-free logic.",
  },
  {
    title: "Systemic Team Scaling",
    industry: "Workflow Productivity",
    problem: "Siloed engineering teams were duplicating UI primitives, resulting in inconsistent products and wasted development cycles.",
    userImpact: "Provided a single source of authority, reducing UI confusion and onboarding time for new front-end hires by 50%.",
    businessValue: "Eliminated 30% of sprint waste caused by visual debt, achieving 100% brand consistency across the entire portfolio.",
    impactHeadline: "Optimized global sprint efficiency and unified five independent product lifecycles.",
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
