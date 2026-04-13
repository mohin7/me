<template>
  <section id="packages" class="py-20 md:py-32 bg-page relative overflow-hidden">
    <!-- Atmospheric Depth Glow -->
    <div class="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-accent/[0.02] blur-[140px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 md:mb-32">
        <div class="mb-10">
          <span class="section-label flex justify-center">Investment Models</span>
        </div>
        <h2 class="text-main text-4xl md:text-8xl font-black tracking-[calc(-0.04em)] leading-[0.85] mb-8">
          Transparent <br />
          <span class="italic serif-font lowercase" style="color: #52525B">engineering.</span>
        </h2>
        <p class="text-soft text-lg md:text-xl font-medium leading-relaxed opacity-80 max-w-2xl">
          No fluff. No hidden fees. Just fast, clean, startup-ready design systems built for scale.
        </p>
      </div>

      <!-- Pricing Matrix -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        <div v-for="(pkg, idx) in packages" :key="idx" 
             class="group relative flex flex-col p-10 md:p-14 rounded-[48px] border border-accent/10 bg-panel/20 backdrop-blur-3xl transition-all duration-700 hover:border-accent/40">
          
          <!-- Badge for Most Popular -->
          <div v-if="pkg.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-accent text-accent-fg text-[0.6rem] font-black uppercase tracking-[0.3em] shadow-xl">
            High Velocity
          </div>

          <div class="mb-12">
            <div class="flex items-center gap-3 mb-6">
               <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.4em] font-mono">Model_0{{ idx + 1 }}</span>
               <div class="h-1 w-1 rounded-full bg-accent/20"></div>
               <span class="text-muted text-[0.6rem] font-bold uppercase tracking-widest opacity-40">{{ pkg.tag }}</span>
            </div>
            <h3 class="text-main text-3xl md:text-4xl font-black tracking-tighter leading-none mb-6">
              {{ pkg.name }}
            </h3>
            <div class="flex items-baseline gap-2">
              <span class="text-main text-5xl font-black tracking-tighter">{{ pkg.price }}</span>
              <span class="text-soft text-sm font-medium opacity-60">{{ pkg.unit }}</span>
            </div>
          </div>

          <div class="space-y-6 mb-16 flex-1">
             <div v-for="feature in pkg.features" :key="feature" class="flex items-start gap-4">
                <Icon name="lucide:check-circle-2" class="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span class="text-soft text-base font-medium leading-tight">{{ feature }}</span>
             </div>
          </div>

          <SharedButton 
            tag="a" 
            href="#contact" 
            :variant="pkg.popular ? 'primary' : 'secondary'"
            size="lg" 
            class="w-full h-16 rounded-full group"
          >
            Initiate Project
            <template #right>
              <Icon name="lucide:arrow-right" class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </template>
          </SharedButton>
        </div>
      </div>

      <!-- Strategic Equity / Custom Section -->
      <div class="relative p-10 md:p-20 rounded-[64px] border border-accent/10 bg-accent/[0.01] overflow-hidden">
        <div class="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style="background-image: radial-gradient(var(--accent) 0.5px, transparent 0.5px); background-size: 40px 40px;">
        </div>

        <div class="relative z-10 grid lg:grid-cols-[1fr_420px] gap-20 items-center">
          <div>
            <div class="mb-8 flex items-center gap-3">
               <Icon name="lucide:sparkles" class="h-5 w-5 text-accent" />
               <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.4em]">Alternative Protocol</span>
            </div>
            <h2 class="text-main text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-8">
              Strategic <br />
              <span class="italic serif-font lowercase" style="color: #52525B">equity partnership.</span>
            </h2>
            <p class="text-soft text-lg md:text-xl font-medium leading-relaxed max-w-2xl opacity-80 mb-10">
              For high-conviction founders with a world-changing vision but limited initial capital. I design your full MVP in exchange for <span class="text-main font-bold">1% Equity</span> — same velocity, same premium engineering.
            </p>
            <div class="flex flex-wrap gap-8">
               <div class="flex items-center gap-3">
                  <div class="h-1.5 w-1.5 rounded-full bg-accent"></div>
                  <span class="text-soft text-[0.7rem] font-bold uppercase tracking-widest">7-Day Sprint Delivery</span>
               </div>
               <div class="flex items-center gap-3">
                  <div class="h-1.5 w-1.5 rounded-full bg-accent"></div>
                  <span class="text-soft text-[0.7rem] font-bold uppercase tracking-widest">Global Executive Standards</span>
               </div>
            </div>
          </div>

          <div class="flex flex-col gap-6 p-10 md:p-12 rounded-[48px] border border-accent/10 bg-page/50 backdrop-blur-3xl shadow-sm">
             <p class="text-soft text-sm font-medium leading-relaxed text-center mb-4">
                Not every startup fits in a box. Let's discuss a custom redesign or 1% partnership.
             </p>
             <SharedButton variant="primary" size="lg" class="h-16 w-full rounded-full">
                Discuss Your Idea
             </SharedButton>
             <div class="flex items-center justify-center gap-6 mt-2 opacity-40">
                <span class="text-[0.6rem] font-black uppercase tracking-widest">Fixed Pricing</span>
                <div class="h-1 w-1 rounded-full bg-accent"></div>
                <span class="text-[0.6rem] font-black uppercase tracking-widest">No Hidden Costs</span>
             </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const packages = [
  {
    name: 'Pitch MVP',
    tag: 'Early_Stage',
    price: '$2,500',
    unit: 'One-time',
    popular: false,
    features: [
      'Core Brand Identity',
      'High-Conversion Landing Page',
      'Upto 10 Strategic App Screens',
      '3-Day Accelerated Delivery',
      'Investor-Ready Prototype'
    ]
  },
  {
    name: 'Production MVP',
    tag: 'Market_Entry',
    price: '$5,500',
    unit: 'One-time',
    popular: true,
    features: [
      'Full Brand System',
      '4-Page High-Momentum Web',
      'Upto 20 Advanced UI Screens',
      '7-Day Engineering Sprint',
      'Full Pitch Deck Design'
    ]
  },
  {
    name: 'Full Partnership',
    tag: 'Embedded_Lead',
    price: '$9,999',
    unit: '/ Month',
    popular: false,
    features: [
      'Unlimited Functional Design',
      'Full SaaS / Web App Ecosystem',
      '4 Weeks Dedicated Support',
      'Strategic Decision Partner',
      'Mid-Level Support included'
    ]
  }
]
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
</style>
