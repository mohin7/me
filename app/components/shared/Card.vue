<template>
  <div 
    class="overflow-hidden relative transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-none border border-black/[0.04] dark:border-white/[0.06]"
    :class="[paddingClasses, radiusClass, hover ? 'hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] dark:hover:border-white/10' : '']"
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

/* 16px for normal, 24px for large to match highly rounded aesthetics */
const radiusClass = computed(() => {
  return props.radius === 'large' ? 'rounded-[24px]' : 'rounded-2xl'
})
</script>
