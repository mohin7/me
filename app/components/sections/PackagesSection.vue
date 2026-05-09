<template>
  <SharedSectionWrapper section-id="packages" bg="soft">

      
      <!-- Standardized Section Header -->
      <SharedSectionHeader 
        label="Services & Pricing"
        description="Every week without a great interface costs you users."
        :centered="true"
        class="max-w-4xl mx-auto"
      >
        <template #title>
          Stop losing users. <br />
          <span style="color: var(--text-soft)">Start shipping.</span>
        </template>
      </SharedSectionHeader>

      <!-- Pricing Matrix -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-glass rounded-[32px] shadow-[var(--specular)] md:rounded-[48px] overflow-hidden bg-panel/5 backdrop-blur-3xl">
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
          <div class="mb-10 p-5 rounded-2xl bg-panel/20 border border-glass">
             <div class="flex flex-col gap-3">
                <div class="flex justify-between items-center">
                   <span class="text-[0.55rem] font-black uppercase tracking-widest opacity-40">Deliverables</span>
                   <span class="text-main text-[0.65rem] font-bold">{{ pkg.target }}</span>
                </div>
                <div class="flex justify-between items-center">
                   <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-40">Timeline</span>
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
      <div class="mt-8 relative p-1 md:p-1 overflow-hidden rounded-[32px] md:rounded-[48px] border border-glass">
         <div class="bg-page/90 backdrop-blur-3xl rounded-[31px] md:rounded-[47px] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
           <div class="max-w-xl text-center lg:text-left">
              <div class="flex items-center justify-center lg:justify-start gap-3 mb-8">
                 <Icon name="lucide:zap" class="h-4 w-4 text-accent" />
                 <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.4em]">Equity Partnership</span>
              </div>
              <h2 class="mb-8">
                Your idea deserves <br />
                <span class="italic serif-font lowercase" style="color: var(--text-soft)">better than a template.</span>
              </h2>
              <p class="text-soft text-lg font-medium leading-relaxed opacity-80">
                Pre-revenue but building something people need? I'll invest my time for <span class="text-main font-bold">equity</span>. I only pick projects I believe in.
              </p>
           </div>
           
           <div class="bg-panel/20 border border-glass p-10 md:p-16 rounded-[32px] md:rounded-[40px] w-full max-w-sm flex flex-col gap-6">
              <div class="space-y-4">
                 <div class="flex justify-between items-center border-b border-glass pb-4">
                    <span class="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Investment</span>
                    <span class="text-main font-bold text-sm">1.0% Equity</span>
                 </div>
                 <div class="flex justify-between items-center border-b border-glass pb-4">
                    <span class="text-[0.6rem] font-black uppercase tracking-widest opacity-40">Scope</span>
                    <span class="text-main font-bold text-sm">Full MVP 1.0</span>
                 </div>
              </div>

              <SharedButton variant="primary" class="h-14 w-full rounded-full" hover-text="Let's Talk">
                Let's Discuss
                <template #right><Icon name="lucide:zap" class="h-4 w-4" /></template>
                <template #hoverRight><Icon name="lucide:sparkles" class="h-4 w-4" /></template>
              </SharedButton>
              <span class="text-center text-muted text-[0.55rem] font-black uppercase tracking-widest opacity-40">Limited availability</span>
           </div>
         </div>
      </div>

  </SharedSectionWrapper>
</template>

<script setup lang="ts">
const packages = [
  {
    name: 'Starter', icon: 'lucide:cpu',
    tag: 'Quick Start',
    price: '$800 — $1.5k',
    unit: 'fixed price',
    description: 'Perfect for landing pages, prototypes, or getting your brand identity off the ground.',
    target: 'Figma + assets',
    velocity: '1–2 weeks',
    popular: false,
    hoverText: 'Get Started',
    hoverIcon: 'lucide:map',
    features: [
      'Brand identity and logo',
      'Landing page design',
      'Up to 10 app screens',
      '1–2 weeks delivery',
      'Source files included'
    ]
  },
  {
    name: 'Full Build', icon: 'lucide:rocket',
    tag: 'Most Popular',
    price: '$1.8k — $3k',
    unit: 'fixed price',
    description: 'A complete website or web app — designed and built, ready to launch.',
    target: 'Nuxt / Vue / Hugo',
    velocity: '3–4 weeks',
    popular: true,
    hoverText: 'Let\'s Build',
    hoverIcon: 'lucide:zap',
    features: [
      'Full design system',
      'Up to 4-page responsive website',
      'Up to 20 app screens',
      '3–4 weeks delivery',
      'Production-ready code'
    ]
  },
  {
    name: 'Monthly Retainer', icon: 'lucide:crown',
    tag: 'Ongoing',
    price: 'From $3k',
    unit: '/ month',
    description: 'I become your dedicated designer and frontend developer — available whenever you need me.',
    target: 'Ongoing design + dev',
    velocity: 'Continuous',
    popular: false,
    hoverText: 'Let\'s Talk',
    hoverIcon: 'lucide:crown',
    features: [
      'Unlimited design requests',
      'Full website or SaaS development',
      'Dedicated point of contact',
      'Priority turnaround',
      'Direct WhatsApp access'
    ]
  }
]
</script>

