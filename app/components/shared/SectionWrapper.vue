<template>
  <section 
    :id="sectionId" 
    :ref="sectionRef"
    class="relative overflow-hidden transition-colors duration-500"
    :class="[
      bg === 'soft' ? 'bg-soft' : 'bg-page',
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
    <div v-else-if="pattern === 'noise'"
         class="absolute inset-0 pointer-events-none"
         :style="noiseStyle"></div>

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
  pattern?: 'none' | 'dots' | 'grid' | 'noise'
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

const noiseStyle = {
  opacity: '0.06',
  mixBlendMode: 'screen',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
  backgroundSize: '300px 300px',
}

const paddingClass = computed(() => {
  switch (props.padding) {
    case 'sm': return 'py-12 md:py-16'
    case 'md': return 'py-16 md:py-24' /* Reduced from py-40 */
    case 'lg': return 'py-24 md:py-32'
    default: return 'py-16 md:py-24'
  }
})
</script>
