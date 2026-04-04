<template>
  <section id="testimonials" class="relative py-24 md:py-32 overflow-hidden">
    <!-- Geometric Background Architecture -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.3]">
       <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border-[0.5px] border-white/5 border-dashed rounded-full animate-[spin_120s_linear_infinite_reverse]"></div>
       <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <h2 class="mb-4 text-4xl font-black tracking-tight md:text-5xl"><span class="metallic-text">Founder</span> <span class="brand-text-gradient">Feedback</span></h2>
        <p class="text-soft max-w-2xl text-lg font-medium">What it's like to build an MVP with me as your design partner.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="(testimonial, idx) in testimonials" 
          :key="idx"
          class="group relative overflow-hidden rounded-[2.5rem] bg-white/5 backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/10 shadow-[inset_0_2px_0_0_rgba(255,255,255,0.1),0_24px_64px_-16px_rgba(0,0,0,0.3)] p-10 transition-all duration-700 hover:-translate-y-2 hover:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.2),0_40px_100px_-16px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,0,0,0.1),0_12px_48px_rgba(var(--brand-rgb),0.15)] hover:border-brand-a/30"
        >
          <!-- Hover Highlight Rim -->
          <div class="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 w-[80%] mx-auto"></div>
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
