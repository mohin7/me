<template>
  <div 
    :class="[
      'relative border border-glass transition-all duration-700 overflow-hidden',
      'bg-[var(--card-bg)]',
      hover && 'hover-lift group',
      hover && 'hover:bg-[var(--card-bg-hover)]',
      rounded,
      padding,
      className
    ]"
    :style="{
      '--card-bg': `color-mix(in srgb, var(--bg-panel), transparent ${100 - bgOpacity}%)`,
      '--card-bg-hover': hover ? `color-mix(in srgb, var(--bg-panel), transparent ${100 - hoverOpacity}%)` : `color-mix(in srgb, var(--bg-panel), transparent ${100 - bgOpacity}%)`,
      boxShadow: shadow ? shadow : undefined
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  rounded?: string
  padding?: string
  bgOpacity?: number
  hoverOpacity?: number
  hover?: boolean
  shadow?: string
  className?: string
}>(), {
  rounded: 'rounded-[40px]',
  padding: 'p-6 md:p-10',
  bgOpacity: 10,
  hoverOpacity: 35,
  hover: true,
  shadow: 'var(--inner-glow), var(--card-shadow)',
  className: ''
})
</script>
