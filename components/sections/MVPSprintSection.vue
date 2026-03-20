<template>
  <section class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="MVP Sprint"
        description="Fast & Focused design for your MVP"
      />
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="space-y-6">
            <div 
              v-for="(step, idx) in steps" 
              :key="idx"
              class="flex gap-4"
            >
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold">
                  {{ idx + 1 }}
                </div>
              </div>
              <div>
                <h4 class="text-lg font-bold text-white mb-2">{{ step.title }}</h4>
                <p class="text-gray-400">{{ step.description }}</p>
              </div>
            </div>
          </div>
          <SharedButton size="lg" class="mt-8">Learn More</SharedButton>
        </div>
        
        <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-8 aspect-square flex items-center justify-center">
          <div class="text-center">
            <div class="text-8xl mb-4">⚡</div>
            <p class="text-gray-300">Quick Design Sprint</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Step {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Discovery Call',
    description: 'We discuss your vision, target users, and key features.'
  },
  {
    title: 'Rapid Design',
    description: 'I design 5-8 core screens with interactive prototypes.'
  },
  {
    title: 'Feedback Loop',
    description: 'We iterate based on your feedback in real-time sessions.'
  },
  {
    title: 'Handoff',
    description: 'You get design files, specifications, and developer handoff.'
  }
]
</script>
