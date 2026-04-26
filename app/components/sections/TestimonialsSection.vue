<template>
  <SharedSectionWrapper section-id="testimonials" bg="soft">

    <!-- Center Aligned Section Header -->
    <SharedSectionHeader 
      label="Social Proof"
      description="Surgical product intervention. Documented success logs from partners and technology founders."
      :centered="true"
    >
      <template #title>
        Founder <span style="color: var(--text-soft)">validation.</span>
      </template>
    </SharedSectionHeader>

    <!-- Bento-style Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <SharedGlassCard
        v-for="(testimonial, idx) in testimonials" 
        :key="idx"
        :class="[
          `reveal reveal-delay-${Math.min(idx + 1, 4)}`,
          {
            'md:col-span-2 lg:col-span-2': idx === 0,
            'lg:row-span-2': idx === 2
          }
        ]"
        class="flex flex-col justify-between group"
        shadow="var(--inner-glow)"
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
      </SharedGlassCard>
    </div>

  </SharedSectionWrapper>
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
