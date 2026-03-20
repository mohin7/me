<template>
  <section class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="More Works"
        description="Explore more recent projects"
      />
      
      <div class="space-y-12">
        <!-- Featured project showcase -->
        <div v-for="(feature, idx) in features" :key="idx" class="group">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div :order="`${idx % 2 === 0 ? '1' : '2'}`" class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl aspect-video flex items-center justify-center overflow-hidden hover:border-orange-500/50 transition">
              <div class="text-8xl">{{ feature.icon }}</div>
            </div>
            <div :order="`${idx % 2 === 0 ? '2' : '1'}`">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ feature.title }}</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">{{ feature.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in feature.tags" 
                  :key="tag"
                  class="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-300 text-sm"
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
    icon: '🏢',
    title: 'Enterprise SaaS Platform',
    description: 'Redesigned the entire user interface for a B2B SaaS platform serving 50,000+ users. Improved user engagement by 45% and reduced support tickets by 30%.',
    tags: ['UI Design', 'UX Research', 'Prototyping']
  },
  {
    icon: '🎓',
    title: 'EdTech Mobile App',
    description: 'Created a comprehensive design system and mobile app design for an online learning platform. Achieves 4.8 rating on app stores.',
    tags: ['Mobile Design', 'Design System', 'Accessibility']
  },
  {
    icon: '🏦',
    title: 'FinTech Web Application',
    description: 'Designed an intuitive financial dashboard for a fintech startup. Helped them launch and acquire 100k users in the first 6 months.',
    tags: ['Dashboard Design', 'Data Visualization', 'UX']
  }
]
</script>
