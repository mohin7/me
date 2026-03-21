<template>
  <section id="focus" class="py-24 md:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <h2 class="text-main mb-4 text-4xl font-black tracking-tight md:text-5xl uppercase italic">I specialize in MVP design <br><span class="text-[color:var(--brand-a)]">for startups</span></h2>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(specialty, idx) in specialties" 
          :key="idx"
          class="bg-panel/40 border-subtle hover:border-[color:var(--brand-a)]/40 group rounded-[2rem] border p-10 transition-all hover:bg-panel/60"
        >
          <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)] transition group-hover:scale-110 group-hover:rotate-3">
            <SharedIcon :name="specialty.icon" class="h-7 w-7" />
          </div>
          <h3 class="text-main mb-4 text-2xl font-black tracking-tight uppercase italic">{{ specialty.title }}</h3>
          <p class="text-soft font-medium leading-relaxed">{{ specialty.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const specialties = [
  {
    icon: 'bolt',
    title: 'Pitch Ready UI',
    description: 'Transforming napkin ideas into investor-ready high-fidelity designs that secure funding and validate concepts.'
  },
  {
    icon: 'palette',
    title: 'Conversion UX',
    description: 'Going beyond "pretty" screens. I design user journeys that reduce friction and drive actual product growth.'
  },
  {
    icon: 'layers',
    title: 'Scalable Systems',
    description: 'Building lean design systems that grow with your product, ensuring consistency from the very first screen.'
  }
]
</script>
