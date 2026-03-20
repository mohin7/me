<template>
  <div class="mb-12 md:mb-16">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
      {{ title }}
    </h2>
    <p v-if="description" class="text-gray-300 text-lg max-w-2xl">
      {{ description }}
    </p>
    <div v-if="highlight" class="mt-4 inline-block bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/50 rounded-lg px-4 py-2">
      <span class="text-orange-400 text-sm font-medium">{{ highlight }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
  highlight?: string
}

defineProps<Props>()
</script>
