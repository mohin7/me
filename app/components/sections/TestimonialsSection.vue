<template>
  <section id="testimonials" class="relative py-24 md:py-40 bg-page overflow-hidden">
    <!-- Schematic Grid -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.02]" 
         style="background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Center Aligned Section Header -->
      <div class="flex flex-col items-center text-center mb-20 md:mb-32">
        <div class="flex items-center gap-3 mb-6">
          <div class="h-px w-8 bg-accent/20"></div>
          <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.5em]">Social Proof</span>
          <div class="h-px w-8 bg-accent/20"></div>
        </div>
        <h2 class="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8">
          Founder <span class="italic serif-font lowercase" style="color: var(--text-soft)">validation.</span>
        </h2>
        <p class="text-soft text-lg font-medium opacity-60 max-w-2xl">
          Surgical product intervention. Documented success logs from partners and technology founders.
        </p>
      </div>

      <!-- Bento-style Grid (Executive Density) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div 
          v-for="(testimonial, idx) in testimonials" 
          :key="idx"
          class="group relative p-8 rounded-[40px] border border-glass bg-panel/20 transition-all duration-700 hover:bg-panel/40 hover:border-glass hover:shadow-2xl flex flex-col justify-between overflow-hidden"
          :class="{
            'md:col-span-2 lg:col-span-2': idx === 0,
            'lg:row-span-2': idx === 2
          }"
        >
          <!-- Internal Data Identifier -->
          <div class="absolute top-8 right-8 text-[0.55rem] font-black uppercase tracking-widest text-muted opacity-20">ID_0{{ idx + 1 }}</div>

          <div class="relative z-10">
            <!-- Author Header -->
            <div class="flex items-center gap-4 mb-8">
              <div class="h-12 w-12 shrink-0 rounded-2xl overflow-hidden border border-glass p-0.5 bg-accent/5">
                <img :src="testimonial.avatar" :alt="testimonial.author" class="h-full w-full object-cover rounded-[14px] grayscale group-hover:grayscale-0 transition-all duration-700">
              </div>
              <div class="flex flex-col">
                <span class="text-main font-black tracking-tighter italic serif-font leading-none">{{ testimonial.author }}</span>
                <span class="text-soft text-[0.55rem] font-bold uppercase tracking-widest opacity-40 mt-1.5">{{ testimonial.role }}</span>
              </div>
            </div>

            <!-- Quote -->
            <p 
              class="text-soft font-medium leading-[1.6] opacity-80 group-hover:opacity-100 transition-opacity"
              :class="idx === 0 ? 'text-xl md:text-2xl' : 'text-base md:text-lg'"
            >
              "{{ testimonial.quote }}"
            </p>
          </div>

          <!-- Bottom Meta (Only for some cards) -->
          <div v-if="testimonial.stat" class="mt-8 pt-8 border-t border-glass flex items-baseline gap-3">
             <span class="text-accent text-2xl font-black italic serif-font leading-none">{{ testimonial.stat.value }}</span>
             <span class="text-soft text-[0.55rem] font-black uppercase tracking-widest opacity-30">{{ testimonial.stat.label }}</span>
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
    quote: 'Mohin transitioned our vision from a napkin sketch to a stunning, high-fidelity MVP in just one week. Helped us close our pre-seed round with zero friction.',
    stat: { label: 'ROUND_SECURED', value: '$2.5M+' }
  },
  {
    author: 'Sarah Chen',
    role: 'CTO at DataVault',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    quote: 'Rare to find a design partner who deeply understands technical infrastructure.',
    stat: { label: 'DEV_EFFICIENCY', value: '+40%' }
  },
  {
    author: 'Marcus Thorne',
    role: 'Founder of Orbital',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    quote: 'The surgical precision in the UI execution is unlike anything we have seen from a traditional design agency. Truly a product engineer at heart.',
    stat: { label: 'SHIPPED_TIME', value: '14 Days' }
  },
  {
    author: 'Elena Glass',
    role: 'Product Lead at Nuxt Labs',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    quote: 'Clean, modular, and built for scale. Exactly what high-momentum teams need.',
  },
  {
    author: 'David Kim',
    role: 'CEO at Command Hub',
    avatar: 'https://i.pravatar.cc/150?u=david',
    quote: 'He did not just design a UI; he built a logical system that works.',
  },
  {
    author: 'Jordon Smith',
    role: 'Founder of ByteBuilders',
    avatar: 'https://i.pravatar.cc/150?u=jordon',
    quote: 'High-speed delivery without compromising on architectural integrity.',
  }
]
</script>

