<template>
  <section id="packages" class="relative py-24 md:py-32 overflow-hidden bg-page">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="mb-4 text-4xl font-black tracking-tight md:text-5xl text-main">Select Your <span class="text-brand-a">Sprint</span></h2>
        <p class="text-soft max-w-2xl text-lg font-medium opacity-80">Simple, fixed pricing for high-impact results.</p>
      </div>
      
      <!-- Pricing Grid -->
      <div class="grid gap-8 lg:grid-cols-3">
        <div 
          v-for="(pkg, idx) in packages" 
          :key="idx"
          class="flex flex-col rounded-[24px] bg-panel border border-subtle p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-brand-a/40 relative group overflow-hidden"
          :class="{ 'ring-2 ring-brand-a/40 border-brand-a/30 z-10 shadow-lg': pkg.featured }"
        >
          <!-- Featured Badge: Rounded Full -->
          <div v-if="pkg.featured" class="bg-brand-a mb-8 self-start rounded-full px-4 py-1 text-[0.65rem] font-bold tracking-widest text-white">
            RECOMMENDED
          </div>
          
          <h3 class="text-main mb-3 text-2xl font-bold tracking-tight">{{ pkg.name }}</h3>
          <p class="text-soft mb-10 text-sm font-medium leading-relaxed opacity-80">{{ pkg.description }}</p>
          
          <div class="mb-10 flex-1">
            <p class="text-muted mb-6 text-[0.6rem] font-black uppercase tracking-[0.2em]">Service Inclusions</p>
            <ul class="space-y-4">
              <li v-for="item in pkg.features" :key="item" class="text-soft flex items-start gap-4 text-[0.8rem] font-medium transition-transform group-hover:translate-x-1">
                <Icon name="lucide:check-circle-2" class="h-4 w-4 text-brand-a shrink-0 mt-0.5 opacity-60" />
                {{ item }}
              </li>
            </ul>
          </div>

          <SharedButton 
            tag="a" 
            href="#contact" 
            :variant="pkg.featured ? 'primary' : 'outline'" 
            size="md"
            class="shadow-sm"
          >
            {{ pkg.cta }}
          </SharedButton>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <p class="text-muted text-sm font-medium">Have something custom in mind? <a href="#contact" class="text-brand-a font-bold hover:underline underline-offset-4 decoration-brand-a/30">Let's talk</a></p>
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
    name: '🚀 Production Ready',
    description: 'A complete end-to-end design system and set of screens ready for developer handoff.',
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
    name: '🧠 Full Partner',
    description: 'Long-term collaboration for startups that need a dedicated design lead to scale.',
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

