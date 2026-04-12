<template>
  <section id="testimonials" class="relative py-24 md:py-40 overflow-hidden bg-page">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Header with Status -->
      <div class="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-12">
        <div class="max-w-xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft border border-glass mb-6">
            <Icon name="lucide:shield-check" class="h-3.5 w-3.5 text-brand-a" />
            <span class="text-brand-a text-[0.6rem] font-black uppercase tracking-widest">Trust Protocol 1.0</span>
          </div>
          <h2 class="mb-8 text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-main">
            Founder <span class="text-brand-a italic">Validation.</span>
          </h2>
          <p class="text-soft text-xl font-medium opacity-70 leading-relaxed">
            Peer-reviewed results from technology leaders and venture partners.
          </p>
        </div>
        <div class="pb-2 hidden md:block">
           <div class="text-main font-black text-6xl opacity-[0.05] italic select-none tracking-tighter">SUCCESS STORIES</div>
        </div>
      </div>

      <!-- Testimonial Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-24">
        <div 
          v-for="(testimonial, idx) in testimonials" 
          :key="idx"
          class="group relative overflow-hidden rounded-[32px] bg-panel border border-glass p-12 md:p-16 transition-all duration-700 hover:border-brand-a/30 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]"
        >
          <!-- Strategic Badge -->
          <div class="absolute top-8 right-8 flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
            <span class="text-[0.6rem] font-black uppercase tracking-widest text-muted">Strategic Partner</span>
            <div class="h-1.5 w-1.5 rounded-full bg-brand-a"></div>
          </div>

          <div class="mb-12 flex items-center gap-6">
            <div class="h-20 w-20 shrink-0 overflow-hidden rounded-[24px] border border-glass group-hover:border-brand-a/40 transition-colors p-1 bg-soft shadow-inner">
              <img :src="testimonial.avatar" :alt="testimonial.author" class="h-full w-full object-cover rounded-[20px] grayscale group-hover:grayscale-0 transition-all duration-700">
            </div>
            <div>
              <p class="text-main text-2xl font-black tracking-tighter italic leading-none">{{ testimonial.author }}</p>
              <p class="text-muted mt-2 text-xs font-black uppercase tracking-[0.2em] opacity-60">{{ testimonial.role }}</p>
            </div>
          </div>
          
          <blockquote class="relative">
            <!-- Giant Quote Mark -->
            <Icon name="lucide:quote" class="absolute -top-6 -left-8 h-12 w-12 text-brand-a opacity-[0.05]" />
            <p class="text-soft text-xl md:text-2xl font-medium leading-[1.4] relative z-10 italic">
              "{{ testimonial.quote }}"
            </p>
          </blockquote>
          
          <!-- Partnership Metrics -->
          <div class="mt-12 flex items-center gap-8 pt-8 border-t border-glass">
             <div v-for="metric in testimonial.stats" :key="metric.label" class="flex flex-col">
                <span class="text-main text-lg font-black tracking-tighter leading-none">{{ metric.value }}</span>
                <span class="text-muted text-[0.6rem] font-bold uppercase tracking-widest mt-1 opacity-60">{{ metric.label }}</span>
             </div>
          </div>
        </div>
      </div>

      <!-- Trusted By Bar -->
      <div class="border-t border-glass pt-16 mt-16 text-center">
         <p class="text-muted text-[0.65rem] font-black uppercase tracking-[0.4em] mb-12 opacity-50">TRUSTED BY LEADERS AT</p>
         <div class="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <div v-for="brand in ['LUMOS HEALTH', 'DATAVAULT', 'COMMAND HUB', 'ORBITAL', 'NUXT LABS']" :key="brand" class="text-main text-sm font-black tracking-[0.3em] font-mono whitespace-nowrap">
             {{ brand }}
           </div>
         </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    author: 'Alex Rivera',
    role: 'CEO at Lumos Health',
    avatar: 'https://i.pravatar.cc/150?u=alex',
    quote: 'Mohin turned our vague product idea into a stunning, high-fidelity prototype in just one week. It helped us secure our pre-seed round with zero friction.',
    stats: [
      { label: 'Funding', value: '$2.5M+' },
      { label: 'Time-to-Market', value: '3 Weeks' }
    ]
  },
  {
    author: 'Sarah Chen',
    role: 'CTO at DataVault',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    quote: 'Rare to find a design partner who understands technical constraints. Mohin is that hybrid talent every venture-scale startup needs.',
    stats: [
      { label: 'Dev Efficiency', value: '+40%' },
      { label: 'Active Users', value: '1.2M+' }
    ]
  }
]
</script>


