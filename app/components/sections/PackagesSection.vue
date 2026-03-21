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
      
      <div class="grid gap-8 lg:grid-cols-2">
        <div 
          v-for="(pkg, idx) in packages" 
          :key="idx"
          class="flex flex-col rounded-[2rem] border border-subtle bg-panel/50 p-10 transition-all hover:border-[color:var(--brand-a)]/40 hover:bg-panel/80 relative"
          :class="{ 'ring-2 ring-[color:var(--brand-a)] scale-[1.02] shadow-2xl shadow-brand-a/10': pkg.featured }"
        >
          <!-- Handwriting Note -->
          <div v-if="idx === 0" class="absolute -top-6 left-1/4">
             <p class="handwriting text-brand-a text-2xl rotate-3 whitespace-nowrap">Rapid launch focus</p>
          </div>
          <div v-if="idx === 1" class="absolute -top-6 right-1/4">
             <p class="handwriting text-brand-b text-2xl -rotate-3 whitespace-nowrap">End-to-end craft</p>
          </div>

          <div v-if="pkg.featured" class="brand-gradient mb-6 self-start rounded-full px-4 py-1.5 text-[0.7rem] font-black tracking-widest text-white">
            Most Popular
          </div>
          
          <h3 class="text-main mb-2 text-2xl font-black tracking-tight">{{ pkg.name }}</h3>
          <p class="text-soft mb-8 text-sm font-medium leading-relaxed">{{ pkg.description }}</p>
          
          <div class="mb-10 flex-1">
          <p class="text-muted mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em]">What you get:</p>
            <ul class="space-y-4">
              <li v-for="item in pkg.features" :key="item" class="text-soft flex items-center gap-3 text-sm font-medium">
                <span class="brand-gradient h-1.5 w-1.5 rounded-full"></span>
                {{ item }}
              </li>
            </ul>
          </div>

          <SharedButton 
            tag="a" 
            href="#contact" 
            :variant="pkg.featured ? 'primary' : 'outline'" 
            class="!rounded-2xl py-4 text-sm font-bold tracking-tight"
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
