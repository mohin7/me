<template>
  <section id="testimonials" class="relative py-16 md:py-24 bg-soft/30 overflow-hidden">
    <!-- Section Divider -->
    <div class="section-divider absolute inset-x-0 top-0"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Center Aligned Section Header -->
      <div class="flex flex-col items-center text-center mb-12 md:mb-16">
        <div class="reveal flex items-center gap-3 mb-6">
          <div class="h-px w-8" style="background: color-mix(in srgb, var(--accent), transparent 80%)"></div>
          <span class="section-label">Social Proof</span>
          <div class="h-px w-8" style="background: color-mix(in srgb, var(--accent), transparent 80%)"></div>
        </div>
        <h2 class="reveal mb-6">
          Founder <span style="color: var(--text-soft)">validation.</span>
        </h2>
        <p class="reveal text-soft text-lg font-medium opacity-80 max-w-2xl">
          Surgical product intervention. Documented success logs from partners and technology founders.
        </p>
      </div>

      <!-- Bento-style Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        <div 
          v-for="(testimonial, idx) in testimonials" 
          :key="idx"
          :class="[
            `reveal reveal-delay-${Math.min(idx + 1, 4)}`,
            'group relative p-8 rounded-[32px] border border-glass bg-panel/20 transition-all duration-700 hover:bg-panel/40 hover:shadow-xl flex flex-col justify-between overflow-hidden hover-lift',
            {
              'md:col-span-2 lg:col-span-2': idx === 0,
              'lg:row-span-2': idx === 2
            }
          ]"
          style="box-shadow: var(--inner-glow);"
        >
          <div class="relative z-10">
            <!-- Author Header -->
            <div class="flex items-center gap-4 mb-6">
              <div class="h-11 w-11 shrink-0 rounded-xl overflow-hidden border border-glass p-0.5" style="background: color-mix(in srgb, var(--accent), transparent 95%)">
                <img :src="testimonial.avatar" :alt="testimonial.author" class="h-full w-full object-cover rounded-[10px] grayscale group-hover:grayscale-0 transition-all duration-700">
              </div>
              <div class="flex flex-col">
                <span class="text-main font-black tracking-tight leading-none">{{ testimonial.author }}</span>
                <span class="text-muted text-[0.55rem] font-bold uppercase tracking-widest opacity-70 mt-1.5">{{ testimonial.role }}</span>
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

          <!-- Bottom Meta -->
          <div v-if="testimonial.stat" class="mt-6 pt-6 border-t border-glass flex items-baseline gap-3">
             <span class="text-accent text-2xl font-black leading-none">{{ testimonial.stat.value }}</span>
             <span class="text-muted text-[0.55rem] font-black uppercase tracking-widest opacity-60">{{ testimonial.stat.label }}</span>
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
