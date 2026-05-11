<template>
  <div
    class="overflow-hidden relative transition-all duration-300"
    :class="[paddingClasses, radiusClass, hover ? 'hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]' : '']"
    style="background: var(--bg-panel); border: 1px solid var(--border-glass); box-shadow: var(--card-shadow);"
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

const radiusClass = computed(() => {
  return props.radius === 'large' ? 'rounded-xl' : 'rounded-lg'
})
</script>
