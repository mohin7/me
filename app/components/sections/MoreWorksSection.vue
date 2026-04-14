<template>
  <section id="experience" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="Career Highlights"
        description="A quick read on the roles, communities, and open-source work shaping my profile."
      />
      
      <div class="space-y-12">
        <!-- Featured project showcase -->
        <div v-for="(feature, idx) in features" :key="idx" class="group">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div :order="`${idx % 2 === 0 ? '1' : '2'}`" class="bg-panel border-glass hover:border-[color:var(--brand-a)]/60 flex aspect-video items-center justify-center overflow-hidden rounded-xl border transition">
              <div class="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)]">
                <SharedIcon :name="feature.icon" class="h-12 w-12" />
              </div>
            </div>
            <div :order="`${idx % 2 === 0 ? '2' : '1'}`">
              <h3 class="text-main mb-4 text-2xl font-bold md:text-3xl">{{ feature.title }}</h3>
              <p class="text-muted mb-6 leading-relaxed">{{ feature.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in feature.tags" 
                  :key="tag"
                  class="rounded-full border border-[color:var(--brand-a)]/35 bg-[color:var(--brand-a)]/10 px-3 py-1 text-sm text-[color:var(--brand-a)]"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
  tags: string[]
}

const features: Feature[] = [
  {
    icon: 'briefcase',
    title: 'Leading design at AppsCode',
    description: 'I currently work at AppsCode as Head of Design, shaping product experiences and visual direction while contributing inside a strong open-source ecosystem.',
    tags: ['Design Leadership', 'Product Thinking', 'Open Source']
  },
  {
    icon: 'code',
    title: 'Front-end foundation',
    description: 'Before moving fully into design leadership, I worked as a front-end developer. That engineering background still helps me design interfaces developers can actually build.',
    tags: ['Vue', 'Nuxt', 'JavaScript']
  },
  {
    icon: 'chart',
    title: 'Consistent GitHub activity',
    description: 'My public profile shows 714 contributions over the last year, activity across AppsCode repositories, and a steady rhythm of pull requests, reviews, and design-driven implementation work.',
    tags: ['714 Contributions', 'Code Reviews', 'Pull Requests']
  }
]
</script>
