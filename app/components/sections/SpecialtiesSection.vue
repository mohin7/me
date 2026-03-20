<template>
  <section id="focus" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="What I Bring"
        description="A hybrid profile across design leadership, UI craft, and front-end implementation."
      />
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(specialty, idx) in specialties" 
          :key="idx"
          class="bg-panel border-subtle hover:border-[color:var(--brand-a)]/60 group rounded-xl border p-8 transition"
        >
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)] transition group-hover:scale-105">
            <SharedIcon :name="specialty.icon" class="h-6 w-6" />
          </div>
          <h3 class="text-main mb-3 text-xl font-bold">{{ specialty.title }}</h3>
          <p class="text-muted">{{ specialty.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Specialty {
  icon: string
  title: string
  description: string
}

const specialties: Specialty[] = [
  {
    icon: 'palette',
    title: 'Product UI & UX',
    description: 'I design interfaces, flows, wireframes, and prototypes that make complex products easier to use.'
  },
  {
    icon: 'layers',
    title: 'Design Systems',
    description: 'I build scalable visual systems so teams can ship faster with consistency across products.'
  },
  {
    icon: 'bolt',
    title: 'Front-end Fluency',
    description: 'My background in Vue, Nuxt, Tailwind, Bootstrap, and JavaScript helps bridge design and implementation.'
  }
]
</script>
