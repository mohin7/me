<template>
  <SharedSectionWrapper section-id="packages" bg="soft">

      
      <!-- Standardized Section Header -->
      <SharedSectionHeader
        label="Pricing"
        description="Straightforward pricing. Clear scope. No surprises."
        :centered="true"
        class="max-w-4xl mx-auto"
      >
        <template #title>
          Pick your <br />
          <span class="text-gradient">package.</span>
        </template>
      </SharedSectionHeader>

      <!-- Pricing Matrix -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[var(--border-glass)] rounded-2xl overflow-hidden bg-panel" style="box-shadow: var(--card-shadow);">
        <div v-for="(pkg, idx) in packages" :key="idx" 
             :class="[`reveal reveal-delay-${idx+1}`, 'group relative flex flex-col p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-glass last:border-0 hover:bg-accent/[0.02] transition-colors duration-500']">
          
          <!-- State Indicator -->
          <div v-if="pkg.popular" class="absolute top-0 right-0 p-6">
             <div class="px-4 py-1.5 border border-accent/20 bg-accent/5 text-accent text-[0.55rem] font-black uppercase tracking-[0.3em] rounded-full shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)]">
               Enterprise_Choice
             </div>
          </div>

          <div class="mb-12">
            <div class="flex items-center gap-3 mb-8">
               <span class="text-accent text-[0.6rem] font-black uppercase tracking-[0.3em] font-mono">pkg_0{{ idx + 1 }}</span>
               <div class="h-px w-8 bg-accent/20"></div>
               <span class="text-muted text-[0.55rem] font-bold uppercase tracking-widest opacity-40">{{ pkg.tag }}</span>
            </div>

            <div class="flex justify-between items-start mb-4"><h3>
              {{ pkg.name }}</h3><Icon v-if="pkg && pkg.icon" :name="pkg.icon" class="h-8 w-8 text-accent/20 group-hover:text-accent transition-colors duration-500" /></div>
            
            <div class="flex items-baseline gap-2 mb-8">
              <span class="text-main text-2xl md:text-3xl font-black tracking-tighter">{{ pkg.price }}</span>
              <span class="text-soft text-[0.6rem] font-bold uppercase tracking-widest opacity-60">{{ pkg.unit }}</span>
            </div>

            <p class="text-soft text-sm font-medium leading-relaxed opacity-60">
              {{ pkg.description }}
            </p>
          </div>

          <!-- Technical Specs -->
          <div class="space-y-4 mb-12 flex-1 pt-8 border-t border-glass">
             <div v-for="feature in pkg.features" :key="feature" class="flex items-start gap-4">
                <Icon name="lucide:check-circle" class="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span class="text-soft text-[0.85rem] font-medium leading-tight group-hover:text-main transition-colors">{{ feature }}</span>
             </div>
          </div>

          <!-- Execution spec -->
          <div class="mb-10 p-5 rounded-xl bg-soft border border-[var(--border-subtle)]">
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
            href="https://cal.com/md-mohin-uddin-8gpn95/30min" 
            :variant="pkg.popular ? 'primary' : 'secondary'"
            size="lg" 
            class="w-full h-14 rounded-full" :hover-text="pkg.hoverText"
          >

            Get Started
            <template #right>
              <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
            </template>
            <template #hoverRight>
              <Icon :name="pkg.hoverIcon" class="h-4 w-4" />
            </template>
          </SharedButton>
        </div>
      </div>

      <!-- Strategic Equity Section -->
      <div class="mt-8 overflow-hidden rounded-2xl border border-[var(--border-glass)] bg-panel" style="box-shadow: var(--card-shadow);">
         <div class="p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
           <div class="max-w-xl text-center lg:text-left">
              <div class="flex items-center justify-center lg:justify-start gap-3 mb-8">
                 <Icon name="lucide:zap" class="h-4 w-4 text-accent" />
                 <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.4em]">Equity Model</span>
              </div>
              <h2 class="mb-8">
                Open to <br />
                <span class="italic serif-font lowercase text-gradient">equity partnerships.</span>
              </h2>
              <p class="text-soft text-lg font-medium leading-relaxed opacity-80">
                For early-stage founders with a strong idea but limited runway. I'll trade full MVP design and development for a <span class="text-main font-bold">1% equity stake</span>.
              </p>
           </div>
           
           <div class="bg-soft border border-[var(--border-glass)] p-10 md:p-16 rounded-2xl w-full max-w-sm flex flex-col gap-6">
              <div class="space-y-4">
                 <div class="flex justify-between items-center border-b border-glass pb-4">
                    <span class="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Investment</span>
                    <span class="text-main font-bold text-sm">1% Equity</span>
                 </div>
                 <div class="flex justify-between items-center border-b border-glass pb-4">
                    <span class="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Scope</span>
                    <span class="text-main font-bold text-sm">Full MVP 1.0</span>
                 </div>
              </div>

              <SharedButton tag="a" href="mailto:hello.mohin4@gmail.com?subject=Equity Partnership Inquiry" variant="primary" class="h-14 w-full rounded-full" hover-text="Explore Options">
                Let's Talk Equity
                <template #right><Icon name="lucide:zap" class="h-4 w-4" /></template>
                <template #hoverRight><Icon name="lucide:sparkles" class="h-4 w-4" /></template>
              </SharedButton>
              <span class="text-center text-muted text-[0.55rem] font-black uppercase tracking-widest opacity-40">2 slots per year</span>
           </div>
         </div>
      </div>

  </SharedSectionWrapper>
</template>

<script setup lang="ts">
const packages = [
  {
    name: 'Pitch MVP', icon: 'lucide:cpu',
    tag: 'Early Stage',
    price: '$800 — $1.2k',
    unit: 'Investment',
    description: 'A high-fidelity prototype ready for investor decks and early user testing.',
    target: 'Figma / High-Fi Proto',
    velocity: 'Rapid_Sprint',
    popular: false,
    hoverText: 'Let\'s Talk',
    hoverIcon: 'lucide:map',
    features: [
      'Core Brand Identity',
      'Strategic Landing Page',
      'Upto 10 App Screens',
      '1-2 Weeks Delivery',
      'Investor-Ready Assets'
    ]
  },
  {
    name: 'Production MVP', icon: 'lucide:rocket',
    tag: 'Market Entry',
    price: '$1.5k — $2.5k',
    unit: 'Investment',
    description: 'A production-ready web presence — designed, built, and optimised for real users.',
    target: 'Nuxt 3 / Vue 3 / SCSS',
    velocity: 'Standard_Batch',
    popular: true,
    hoverText: 'Get Started',
    hoverIcon: 'lucide:zap',
    features: [
      'Full Design System',
      '4-Page High-Velocity Web',
      'Upto 20 Advanced UI Screens',
      '3-4 Weeks Engineering Sprint',
      'Conversion Optimization'
    ]
  },
  {
    name: 'Full Partnership', icon: 'lucide:crown',
    tag: 'Ongoing Partnership',
    price: 'Starting at $2.5k',
    unit: '/ Month',
    description: 'Your fractional Head of Design and Engineering. Long-term, embedded, accountable.',
    target: 'Full Ecosystem Control',
    velocity: 'Continuous_Ops',
    popular: false,
    hoverText: 'Let\'s Discuss',
    hoverIcon: 'lucide:crown',
    features: [
      'Unlimited High-End Design',
      'Full SaaS / Web Ecosystem',
      'Dedicated Engineering Lead',
      'Strategic Product Partner',
      'Direct WhatsApp Access'
    ]
  }
]
</script>

