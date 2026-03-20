<template>
  <section class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="I am Specialized in UI/Ux Design"
        description="for Fast-Moving Startups"
      />
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(specialty, idx) in specialties" 
          :key="idx"
          class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-8 hover:border-orange-500/50 transition group"
        >
          <div class="text-4xl mb-4 group-hover:scale-110 transition">{{ specialty.icon }}</div>
          <h3 class="text-xl font-bold text-white mb-3">{{ specialty.title }}</h3>
          <p class="text-gray-400">{{ specialty.description }}</p>
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
    icon: '🎨',
    title: 'UI Design',
    description: 'Creating beautiful and intuitive user interfaces that delight users.'
  },
  {
    icon: '✨',
    title: 'UX Design',
    description: 'Designing experiences that solve real problems for your users.'
  },
  {
    icon: '⚡',
    title: 'Rapid Prototyping',
    description: 'Quick iterations and prototypes to validate ideas fast.'
  }
]
</script>
