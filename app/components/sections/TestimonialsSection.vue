<template>
  <section id="testimonials" class="relative py-24 md:py-40 bg-page overflow-hidden">
    <!-- Schematic Grid -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.02]" 
         style="background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px); background-size: 60px 60px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Left-aligned header -->
      <div class="max-w-3xl mb-16 md:mb-24">
        <span class="section-label mb-6">Words</span>
        <h2 class="text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95] mt-6 text-main">
          From the <span class="serif-font italic text-accent">founders</span> who shipped with me.
        </h2>
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
          <div class="relative z-10">
            <!-- Quote -->
            <p
              class="text-main font-normal leading-[1.55] mb-8"
              :class="idx === 0 ? 'text-xl md:text-2xl serif-font' : 'text-base md:text-lg'"
            >
              "{{ testimonial.quote }}"
            </p>

            <!-- Author -->
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 shrink-0 rounded-full overflow-hidden border border-glass bg-accent/5">
                <img :src="testimonial.avatar" :alt="testimonial.author" class="h-full w-full object-cover">
              </div>
              <div class="flex flex-col">
                <span class="text-main font-medium text-sm tracking-tight">{{ testimonial.author }}</span>
                <span class="text-muted text-xs mt-0.5">{{ testimonial.role }}</span>
              </div>
            </div>
          </div>

          <div v-if="testimonial.stat" class="mt-8 pt-6 border-t border-glass flex items-baseline gap-2">
             <span class="text-accent text-2xl font-semibold serif-font leading-none">{{ testimonial.stat.value }}</span>
             <span class="text-muted text-xs">{{ testimonial.stat.label }}</span>
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
    stat: { label: 'round secured', value: '$2.5M+' }
  },
  {
    author: 'Sarah Chen',
    role: 'CTO at DataVault',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    quote: 'Rare to find a design partner who deeply understands technical infrastructure.',
    stat: { label: 'dev efficiency', value: '+40%' }
  },
  {
    author: 'Marcus Thorne',
    role: 'Founder of Orbital',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    quote: 'The surgical precision in the UI execution is unlike anything we have seen from a traditional design agency. Truly a product engineer at heart.',
    stat: { label: 'shipped in', value: '14 days' }
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

