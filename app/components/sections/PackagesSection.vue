<template>
  <section id="packages" class="py-16 md:py-24 bg-page relative overflow-hidden transition-colors duration-500">
    <!-- Sophisticated Technical Backdrop -->
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
        <div class="mb-10">
          <span class="section-label flex justify-center">Investment Models</span>
        </div>
        <h2 class="text-main text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
          The Strategic <br />
          <span class="italic serif-font lowercase" style="color: var(--text-soft)">matrix.</span>
        </h2>
        <p class="text-soft text-lg font-medium leading-relaxed opacity-80 max-w-[480px]">
          Engineering-grade design solutions priced for velocity. No hourly drift, just performance.
        </p>
      </div>

      <!-- Pricing Matrix -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-glass rounded-[32px] shadow-[var(--specular)] md:rounded-[48px] overflow-hidden bg-panel/5 backdrop-blur-3xl">
        <div v-for="(pkg, idx) in packages" :key="idx" 
             :class="[`reveal reveal-delay-${idx+1}`, 'group relative flex flex-col p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-glass last:border-0 hover:bg-accent/[0.02] transition-colors duration-500']">
          
          <!-- State Indicator -->
          <div v-if="pkg.popular" class="absolute top-0 right-0 p-4">
             <div class="px-3 py-1 border border-glass text-soft text-[0.5rem] font-black uppercase tracking-[0.2em] rounded-full">
               System_Recommended
             </div>
          </div>

          <div class="mb-12">
            <div class="flex items-center gap-3 mb-8">
               <span class="text-accent text-[0.6rem] font-black uppercase tracking-[0.3em] font-mono">pkg_0{{ idx + 1 }}</span>
               <div class="h-px w-8 bg-accent/20"></div>
               <span class="text-muted text-[0.55rem] font-bold uppercase tracking-widest opacity-40">{{ pkg.tag }}</span>
            </div>

            <h3 class="text-main text-3xl md:text-4xl font-black tracking-tighter leading-none mb-4">
              {{ pkg.name }}
            </h3>
            
            <div class="flex items-baseline gap-2 mb-8">
              <span class="text-main text-4xl font-black tracking-tighter">{{ pkg.price }}</span>
              <span class="text-soft text-[0.65rem] font-bold uppercase tracking-widest opacity-60">{{ pkg.unit }}</span>
            </div>

            <p class="text-soft text-sm font-medium leading-relaxed opacity-60">
              {{ pkg.description }}
            </p>
          </div>

          <!-- Technical Specs -->
          <div class="space-y-4 mb-12 flex-1 pt-8 border-t border-accent/5">
             <div v-for="feature in pkg.features" :key="feature" class="flex items-start gap-4">
                <Icon name="lucide:check-circle-2" class="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span class="text-soft text-[0.85rem] font-medium leading-tight group-hover:text-main transition-colors">{{ feature }}</span>
             </div>
          </div>

          <!-- Execution spec -->
          <div class="mb-10 p-5 rounded-2xl bg-panel/20 border border-accent/5">
             <div class="flex flex-col gap-3">
                <div class="flex justify-between items-center">
                   <span class="text-[0.55rem] font-black uppercase tracking-widest opacity-40">Dev_Target</span>
                   <span class="text-main text-[0.65rem] font-bold">{{ pkg.target }}</span>
                </div>
                <div class="flex justify-between items-center">
                   <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-40">Velocity</span>
                   <span class="text-accent text-[0.6rem] font-bold uppercase tracking-widest">{{ pkg.velocity }}</span>
                </div>
             </div>
          </div>

          <SharedButton 
            tag="a" 
            href="https://cal.com/md-mohin-uddin-8gpn95/30min" target="_blank" 
            :variant="pkg.popular ? 'primary' : 'secondary'"
            size="lg" 
            class="w-full h-14 rounded-full" hover-text="Get Started"
          >

            Initiate Project
            <template #right>
              <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
            </template>
          </SharedButton>
        </div>
      </div>

      <!-- Strategic Equity Section -->
      <div class="mt-8 relative p-1 md:p-1 overflow-hidden rounded-[32px] md:rounded-[48px] border border-glass">
         <div class="bg-page/90 backdrop-blur-3xl rounded-[31px] md:rounded-[47px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
           <div class="max-w-xl text-center lg:text-left">
              <div class="flex items-center justify-center lg:justify-start gap-3 mb-8">
                 <Icon name="lucide:zap" class="h-4 w-4 text-accent" />
                 <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.4em]">Venture Partnership Protocol</span>
              </div>
              <h2 class="text-main text-3xl md:text-5xl font-black tracking-tighter leading-[0.95] mb-8">
                Building for <br />
                <span class="italic serif-font lowercase" style="color: var(--text-soft)">strategic equity.</span>
              </h2>
              <p class="text-soft text-lg font-medium leading-relaxed opacity-80">
                For visionaries with world-changing logic but early-stage capital. I trade top-tier engineering for <span class="text-main font-bold">1% Stake</span> — dedicated to your long-term momentum.
              </p>
           </div>
           
           <div class="bg-panel/20 border border-glass p-8 md:p-12 rounded-[32px] md:rounded-[40px] w-full max-w-sm flex flex-col gap-6">
              <div class="space-y-4">
                 <div class="flex justify-between items-center border-b border-accent/5 pb-4">
                    <span class="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Investment</span>
                    <span class="text-main font-bold text-sm">1.0% Equity</span>
                 </div>
                 <div class="flex justify-between items-center border-b border-accent/5 pb-4">
                    <span class="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Scope</span>
                    <span class="text-main font-bold text-sm">Full MVP 1.0</span>
                 </div>
              </div>

              <SharedButton variant="primary" class="h-14 w-full rounded-full" hover-text="See Value">Explore Deal</SharedButton>
              <span class="text-center text-muted text-[0.55rem] font-black uppercase tracking-widest opacity-40">Limited to 2 slots / Year</span>
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
    price: '$1,450',
    unit: 'One-time',
    description: 'Precision-engineered prototype for rapid investor validation and early brand scaling.',
    target: 'Figma / High-Fi Proto',
    velocity: 'Rapid_Sprint',
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
    price: '$3,200',
    unit: 'One-time',
    description: 'The foundation of your market presence. High-fidelity systems ready for production deployment.',
    target: 'Nuxt 3 / Vue 3 / GSAP',
    velocity: 'Standard_Batch',
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
    price: '$5,900',
    unit: '/ Month',
    description: 'Long-term architectural commitment. Embedding as your strategic design engineering lead.',
    target: 'Full Ecosystem Control',
    velocity: 'Continuous_Ops',
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
