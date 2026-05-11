<template>
  <SharedSectionWrapper section-id="case-studies" bg="soft">


      <!-- Standardized Section Header -->
      <SharedSectionHeader
        label="Case Studies"
        description="Three projects. Three different problems. One approach that works."
        :centered="true"
        class="max-w-4xl mx-auto"
      >
        <template #title>
          Real work. <span class="text-gradient">Real results.</span>
        </template>
      </SharedSectionHeader>



      <!-- Main Case Study Display -->
      <div class="relative">
        <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
          <div :key="active" class="group relative rounded-2xl bg-panel border border-[var(--border-glass)] p-6 md:p-12 transition-all duration-500 overflow-hidden" style="box-shadow: var(--card-shadow);">
            
            <!-- Abstract Logic Grid Background -->
            <div class="absolute inset-0 pointer-events-none opacity-[0.015]" 
                 style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 48px 48px;"></div>

            <div class="relative z-10 flex flex-col gap-10 lg:gap-14">

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
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                
                <!-- Pillar 1: The Problem -->
                <div class="space-y-8">
                   <div class="flex items-center gap-3">
                     <SharedIconBox :interactive="false">
                       <Icon name="lucide:alert-circle" class="h-5 w-5" />
                     </SharedIconBox>
                     <span class="text-main text-[0.65rem] font-black uppercase tracking-widest">Problem_Solved</span>
                   </div>
                   <p class="text-soft text-lg font-medium leading-relaxed opacity-90">
                     {{ caseStudies[active].problem }}
                   </p>
                </div>

                <!-- Pillar 2: User Impact -->
                <div class="space-y-8">
                   <div class="flex items-center gap-3">
                     <SharedIconBox :interactive="false">
                       <Icon name="lucide:users" class="h-5 w-5" />
                     </SharedIconBox>
                     <span class="text-main text-[0.65rem] font-black uppercase tracking-widest">User_Experience_Impact</span>
                   </div>
                   <p class="text-soft text-lg font-medium leading-relaxed opacity-90">
                     {{ caseStudies[active].userImpact }}
                   </p>
                </div>

                <!-- Pillar 3: Business Value -->
                <div class="space-y-8">
                   <div class="flex items-center gap-3">
                     <SharedIconBox :interactive="false">
                       <Icon name="lucide:trending-up" class="h-5 w-5" />
                     </SharedIconBox>
                     <span class="text-main text-[0.65rem] font-black uppercase tracking-widest">Business_Outcome</span>
                   </div>
                   <p class="text-soft text-lg font-medium leading-relaxed opacity-90">
                     {{ caseStudies[active].businessValue }}
                   </p>
                </div>

              </div>

              <!-- Bottom Tier: Strategy Quote -->
              <div class="pt-10 border-t border-glass">
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

      <!-- High-Precision Carousel Navigation (Moved to Bottom) -->
      <div class="flex items-center w-fit mx-auto gap-6 bg-panel border border-[var(--border-glass)] p-2.5 rounded-full mt-16" style="box-shadow: var(--card-shadow);">
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
  </SharedSectionWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
const direction = ref<'next' | 'prev'>('next')

const caseStudies = [
  {
    title: "Enterprise Database Core",
    industry: "Cloud Infrastructure",
    problem: "Operators were making costly errors in high-concurrency environments — the interface wasn't built for that level of complexity.",
    userImpact: "Reduced operational friction by 60%. Engineers now complete complex scaling tasks without stopping.",
    businessValue: "One unified UI across 6 global products. Design debt eliminated. Time-to-market improved 3.2×.",
    impactHeadline: "Unified AppsCode's entire multi-cloud ecosystem under a single design system.",
  },
  {
    title: "High-Frequency Reader",
    industry: "Linguistics & PWA",
    problem: "Religious apps were fragmented and ad-heavy — the opposite of what deep reading requires.",
    userImpact: "Session duration up 150%. Daily active users grew during the pilot.",
    businessValue: "Became a reference implementation for offline-first Vue 3 PWAs.",
    impactHeadline: "Set a new standard for distraction-free reading apps.",
  },
  {
    title: "Systemic Team Scaling",
    industry: "Workflow Productivity",
    problem: "Engineering teams were building the same UI components independently — creating inconsistency and wasted sprints.",
    userImpact: "One source of truth. Onboarding time for new frontend hires cut by 50%.",
    businessValue: "30% of sprint waste eliminated. 100% brand consistency across the portfolio.",
    impactHeadline: "Unified five product teams under one shared design system.",
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
