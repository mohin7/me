<template>
  <div 
    class="border border-subtle overflow-hidden relative transition-all duration-200"
    :class="[paddingClasses, radiusClass, hover ? 'hover:shadow-md hover:-translate-y-0.5' : '']"
    style="background: var(--bg-panel);"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  padding?: 'none' | 'normal' | 'large'
  radius?: 'normal' | 'large'
  hover?: boolean
}>(), {
  padding: 'normal',
  radius: 'large',
  hover: false
})

const paddingClasses = computed(() => {
  switch (props.padding) {
    case 'none': return 'p-0'
    case 'large': return 'p-8 md:p-10'
    case 'normal':
    default: return 'p-6 md:p-8'
  }
})

/* 12px for normal, 14px for large — matches the design scale */
const radiusClass = computed(() => {
  return props.radius === 'large' ? 'rounded-[14px]' : 'rounded-xl'
})
</script>
