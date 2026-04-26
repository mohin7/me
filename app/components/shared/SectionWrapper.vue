<template>
  <section 
    :id="sectionId" 
    :ref="sectionRef"
    class="relative overflow-hidden transition-colors duration-500"
    :class="[
      bg === 'soft' ? 'bg-soft/30' : 'bg-page',
      paddingClass
    ]"
  >
    <!-- Section Divider -->
    <div v-if="divider" class="section-divider absolute inset-x-0 top-0"></div>

    <!-- Optional Background Pattern -->
    <div v-if="pattern === 'dots'" class="absolute inset-0 pointer-events-none opacity-[0.015]" 
         style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 32px 32px;"></div>
    <div v-else-if="pattern === 'grid'" class="absolute inset-0 pointer-events-none opacity-[0.02]" 
         style="background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px); background-size: 64px 64px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" :class="centered && 'text-center'">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  sectionId?: string
  sectionRef?: string
  bg?: 'page' | 'soft'
  divider?: boolean
  pattern?: 'none' | 'dots' | 'grid'
  centered?: boolean
  padding?: 'sm' | 'md' | 'lg'
}>(), {
  sectionId: undefined,
  sectionRef: undefined,
  bg: 'page',
  divider: true,
  pattern: 'none',
  centered: false,
  padding: 'md'
})

const paddingClass = computed(() => {
  switch (props.padding) {
    case 'sm': return 'py-16 md:py-20'
    case 'md': return 'py-24 md:py-36'
    case 'lg': return 'py-32 md:py-48'
    default: return 'py-24 md:py-36'
  }
})
</script>
