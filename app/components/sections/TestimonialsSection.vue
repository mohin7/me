<template>
  <section id="testimonials" class="relative py-24 md:py-32 overflow-hidden bg-page">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mb-20 text-center">
        <h2 class="mb-6 text-4xl font-black tracking-tighter md:text-6xl text-main">
          Founder <span class="text-brand-a italic">Validation</span>
        </h2>
        <p class="text-soft max-w-2xl mx-auto text-lg font-medium opacity-80">
          Peer-reviewed results from engineering and venture leadership.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="(testimonial, idx) in testimonials" 
          :key="idx"
          class="group relative overflow-hidden rounded-[24px] bg-panel border border-subtle p-10 transition-all duration-500 hover:border-brand-a/40"
        >
          <!-- Hover Highlight Rim -->
          <div class="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-brand-a/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div class="mb-8 flex items-center gap-4">
            <div class="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brand-a/30">
              <img :src="testimonial.avatar" :alt="testimonial.author" class="h-full w-full object-cover">
            </div>
            <div>
              <p class="text-main text-lg font-bold tracking-tight leading-none">{{ testimonial.author }}</p>
              <p class="text-muted mt-1.5 text-xs font-black uppercase tracking-widest">{{ testimonial.role }}</p>
            </div>
          </div>
          
          <blockquote class="text-soft text-xl font-medium leading-relaxed italic">
            "{{ testimonial.quote }}"
          </blockquote>
          
          <div class="absolute right-6 bottom-6 text-7xl font-black text-brand-a/10 pointer-events-none select-none">
            "
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
    quote: 'Mohin turned our vague product idea into a stunning, high-fidelity prototype in just one week. It helped us secure our pre-seed round with zero friction.'
  },
  {
    author: 'Sarah Chen',
    role: 'CTO at DataVault',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    quote: 'Rare to find a design partner who understands technical constraints. Mohin is that hybrid talent every venture-scale startup needs.'
  }
]
</script>

