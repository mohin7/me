<template>
  <section id="testimonials" class="py-24 md:py-32 bg-panel/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <h2 class="mb-4 text-4xl font-black tracking-tight md:text-5xl"><span class="metallic-text">Founder</span> <span class="brand-text-gradient">Feedback</span></h2>
        <p class="text-soft max-w-2xl text-lg font-medium">What it's like to build an MVP with me as your design partner.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="(testimonial, idx) in testimonials" 
          :key="idx"
          class="bg-panel border-subtle relative rounded-[2.5rem] border p-10 shadow-lg shadow-black/5"
        >
          <div class="mb-8 flex items-center gap-4">
            <div class="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[color:var(--brand-a)]/30">
              <img :src="testimonial.avatar" :alt="testimonial.author" class="h-full w-full object-cover">
            </div>
            <div>
              <p class="text-main text-lg font-black tracking-tight leading-none">{{ testimonial.author }}</p>
              <p class="text-muted mt-1 text-sm font-medium">{{ testimonial.role }}</p>
            </div>
          </div>
          
          <blockquote class="text-soft text-xl font-medium leading-relaxed">
            "{{ testimonial.quote }}"
          </blockquote>
          
          <div class="absolute right-10 top-10 text-9xl font-black text-[color:var(--brand-a)]/5 pointer-events-none">
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
    quote: 'Rare to find a design partner who understands the technical constraints of building at scale. Mohin is that hybrid talent every startup needs.'
  }
]
</script>
