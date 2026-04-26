<template>
  <div 
    :class="[
      'flex items-center justify-center transition-all duration-500',
      sizeClass,
      roundedClass,
      'text-accent',
      interactive ? 'bg-[var(--icon-bg)] group-hover:bg-accent group-hover:text-accent-fg' : 'bg-[var(--icon-bg)]'
    ]"
    :style="{ '--icon-bg': `color-mix(in srgb, var(--accent), transparent ${100 - bgOpacity}%)`, border: '1px solid var(--border-glass)' }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  interactive?: boolean
  bgOpacity?: number
}>(), {
  size: 'md',
  interactive: true,
  bgOpacity: 5
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'h-8 w-8'
    case 'md': return 'h-10 w-10'
    case 'lg': return 'h-12 w-12'
    default: return 'h-10 w-10'
  }
})

const roundedClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'rounded-lg'
    case 'md': return 'rounded-xl'
    case 'lg': return 'rounded-2xl'
    default: return 'rounded-xl'
  }
})
</script>
