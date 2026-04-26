<template>
  <section id="strategic-advantage" class="py-16 md:py-24 bg-page relative overflow-hidden">
    <!-- Section Divider -->
    <div class="section-divider absolute inset-x-0 top-0"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      
      <!-- Section Label & Title -->
      <div class="flex flex-col items-center mb-12 md:mb-16">
        <div class="reveal mb-6">
          <span class="section-label flex justify-center">Strategic Advantage Matrix</span>
        </div>
        <h2 class="reveal mb-6 max-w-4xl mx-auto">
          I bridge the gap for founders demanding <span class="text-soft">velocity.</span>
        </h2>
        <p class="reveal text-soft text-lg font-medium leading-relaxed max-w-2xl opacity-80 mx-auto">
          Engineering high-performance MVPs with surgical precision. By fusing expert UI/UX design with technical engineering, I ensure your product launches faster, cleaner, and investor-ready.
        </p>
      </div>

      <!-- Compact Technical Specification Row -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
         <div v-for="(spec, idx) in specs" :key="spec.label" 
              :class="`reveal reveal-delay-${idx+1}`"
              class="flex flex-col items-center p-6 rounded-3xl bg-panel/30 border border-glass backdrop-blur-3xl hover-lift" style="box-shadow: var(--inner-glow), var(--specular);">
            <div class="h-10 w-10 rounded-xl bg-accent text-accent-fg flex items-center justify-center mb-4">
               <Icon v-if="spec && spec.icon" :name="spec.icon" class="h-4 w-4" />
            </div>
            <span class="text-main font-black tracking-tight text-base mb-1">{{ spec.title }}</span>
            <span class="text-[0.55rem] font-black uppercase tracking-widest text-muted opacity-80">{{ spec.label }}</span>
         </div>
      </div>

      <!-- The Balanced Grid Pillars -->
      <div class="grid md:grid-cols-3 gap-6 text-left">
        <div v-for="(pillar, idx) in pillars" :key="idx" 
             :class="`reveal reveal-delay-${idx+1}`"
             class="relative p-8 md:p-10 rounded-[32px] bg-panel/20 border border-glass hover:border-accent/15 transition-all duration-700 flex flex-col h-full overflow-hidden group hover-lift" style="box-shadow: var(--inner-glow), var(--specular);">
           
           <!-- Minimalist Icon -->
           <div class="h-12 w-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-fg transition-all duration-500" style="background: color-mix(in srgb, var(--accent), transparent 95%); border: 1px solid var(--border-glass);">
              <Icon v-if="pillar && pillar.icon" :name="pillar.icon" class="h-6 w-6" />
           </div>

           <div class="mb-4">
              <h3 class="mb-3">
                 {{ pillar.title }}
              </h3>
              <p class="text-soft text-sm font-medium leading-relaxed opacity-80">
                 {{ pillar.description }}
              </p>
           </div>

           <!-- Status Signal -->
           <div class="mt-auto pt-6 flex items-center gap-2">
              <div class="h-1 w-1 rounded-full bg-accent"></div>
              <span class="text-muted text-[0.6rem] font-black uppercase tracking-[0.2em] opacity-60">{{ pillar.stat }}</span>
           </div>
        </div>
      </div>

      <!-- Bottom Interactive Action -->
      <div class="reveal mt-12 flex flex-col items-center">
         <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" target="_blank" variant="primary" size="lg" class="px-16 h-14 rounded-full group" hover-text="Let's Grow">
          Initiate Partnership
          <template #right>
            <Icon name="lucide:arrow-right" class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </template>
        </SharedButton>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const specs = [
  { title: '7-Day Sprint', label: 'Rapid Launch', icon: 'lucide:zap' },
  { title: 'Fixed Budget', label: 'Zero Creep', icon: 'lucide:shield-check' },
  { title: '1-on-1 Lead', label: 'Direct Flow', icon: 'lucide:fingerprint' }
]

const pillars = [
  {
    title: 'Design-to-Code',
    description: 'Eliminate the friction between design and development. I deliver production-ready Nuxt & Vue environments directly from Figma.',
    icon: 'lucide:terminal',
    stat: '99% Logic Integrity'
  },
  {
    title: 'Venture Scale',
    description: 'Architecting design systems for massive concurrency. My experience ensures your UI builds for the next million users.',
    icon: 'lucide:component',
    stat: 'High-Scale Protocols'
  },
  {
    title: 'Founder Focus',
    description: 'A relentless partnership until market-perfect. Unlimited revisions and zero fluff, designed for absolute startup velocity.',
    icon: 'lucide:rocket',
    stat: 'Priority_Model_Active'
  }
]
</script>
