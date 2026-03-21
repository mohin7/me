<template>
  <section id="packages" class="relative py-24 md:py-32 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(var(--brand-rgb),0.03),transparent_70%)]">
    <!-- Background Decor -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.05]">
       <Icon name="lucide:dollar-sign" class="absolute -left-10 top-[20%] h-64 w-64 -rotate-12" />
       <Icon name="lucide:zap" class="absolute -right-10 bottom-[10%] h-80 w-80 rotate-12" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mb-16">
        <h2 class="text-main mb-4 text-4xl font-black tracking-tight md:text-5xl">Select Your Sprint</h2>
        <p class="text-soft max-w-2xl text-lg font-medium opacity-80">Simple, fixed pricing for high-impact results.</p>
      </div>
      
      <div class="grid gap-8 lg:grid-cols-3">
        <div 
          v-for="(pkg, idx) in packages" 
          :key="idx"
          class="flex flex-col rounded-[2.5rem] border border-subtle bg-panel/30 p-8 transition-all duration-500 hover:border-brand-a/40 hover:bg-panel/40 relative group"
          :class="{ 'ring-2 ring-brand-a/30 scale-[1.02] shadow-2xl shadow-brand-a/5 bg-panel/50': pkg.featured }"
        >
          <!-- Handwriting Notes for specific cards -->
          <div v-if="idx === 0" class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
             <p class="handwriting text-brand-a text-xl rotate-3">Rapid launch focus</p>
          </div>
          <div v-if="idx === 1" class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-100">
             <p class="handwriting text-brand-b text-xl -rotate-2">Founders' favorite</p>
          </div>
          <div v-if="idx === 2" class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
             <p class="handwriting text-brand-c text-xl -rotate-3">Strategic scale</p>
          </div>

          <div v-if="pkg.featured" class="brand-gradient mb-8 self-start rounded-full px-4 py-1 text-[0.65rem] font-black tracking-[0.2em] text-white">
            RECOMMENDED
          </div>
          
          <h3 class="text-main mb-3 text-2xl font-black tracking-tight">{{ pkg.name }}</h3>
          <p class="text-soft mb-10 text-sm font-medium leading-relaxed opacity-70">{{ pkg.description }}</p>
          
          <div class="mb-10 flex-1">
            <p class="text-muted mb-6 text-[0.6rem] font-black uppercase tracking-[0.2em]">Service Inclusions</p>
            <ul class="space-y-4">
              <li v-for="item in pkg.features" :key="item" class="text-soft flex items-start gap-4 text-xs font-medium group-hover:translate-x-1 transition-transform">
                <Icon name="lucide:check-circle-2" class="h-4 w-4 text-brand-a shrink-0 mt-0.5 opacity-60" />
                {{ item }}
              </li>
            </ul>
          </div>

          <SharedButton 
            tag="a" 
            href="#contact" 
            :variant="pkg.featured ? 'primary' : 'outline'" 
            class="!rounded-2xl py-4 text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-a/10"
          >
            {{ pkg.cta }}
          </SharedButton>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <p class="text-muted text-sm font-medium">Have something custom in mind? <a href="#contact" class="text-[color:var(--brand-a)] underline decoration-[color:var(--brand-a)]/30 underline-offset-4 hover:decoration-[color:var(--brand-a)]">Let's talk</a></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const packages = [
  {
    name: '⚡ Pitch Ready MVP',
    description: 'Perfect for founders looking to secure funding or validate a core concept with a high-fidelity prototype.',
    features: [
      'Strategic Discovery',
      'Core Flow Wireframing',
      'High-Fidelity UI Design',
      'Interactive Prototype',
      'Investor-Ready Assets'
    ],
    cta: 'Get Started'
  },
  {
    name: '🚀 Production Ready MVP',
    description: 'A complete end-to-end design system and set of screens ready to be handed off to developers for build.',
    features: [
      'Full Responsive UI Design',
      'End-to-End User Journeys',
      'Scalable Design System',
      'Developer Documentation',
      'UX Copywriting Focus'
    ],
    cta: 'Let\'s Launch',
    featured: true
  },
  {
    name: '🧠 Full Product Partner',
    description: 'Long-term collaboration for startups that need a dedicated design lead to scale their product vision.',
    features: [
      'Monthly Retainer Basis',
      'Ongoing Feature Design',
      'User Testing & Iteration',
      'Strategic Product Roadmap',
      'Direct Slack Access'
    ],
    cta: 'Partner Up'
  }
]
</script>
