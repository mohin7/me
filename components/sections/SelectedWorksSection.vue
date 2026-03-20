<template>
  <section id="work" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="Selected Works"
        description="A selection of recent projects I've worked on"
      />
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(project, idx) in projects" 
          :key="idx"
          class="group cursor-pointer"
        >
          <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl aspect-video overflow-hidden mb-4 hover:border-orange-500/50 transition flex items-center justify-center">
            <div class="text-6xl">{{ project.icon }}</div>
          </div>
          <h3 class="text-lg font-bold text-white group-hover:text-orange-400 transition">{{ project.name }}</h3>
          <p class="text-sm text-gray-400">{{ project.category }}</p>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <SharedButton variant="outline">View All Projects</SharedButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  icon: string
  name: string
  category: string
}

const projects: Project[] = [
  { icon: '📱', name: 'Mobile Banking App', category: 'UI/UX Design' },
  { icon: '🛍️', name: 'E-commerce Platform', category: 'UI/UX Design' },
  { icon: '📊', name: 'Analytics Dashboard', category: 'Dashboard Design' },
  { icon: '🎮', name: 'Gaming Interface', category: 'UI Design' },
  { icon: '💬', name: 'Chat Application', category: 'UI/UX Design' },
  { icon: '🏥', name: 'Healthcare Portal', category: 'Web Design' }
]
</script>
