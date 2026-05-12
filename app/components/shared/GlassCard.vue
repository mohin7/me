<template>
  <div
    :class="[
      'relative border border-glass transition-all duration-700 overflow-hidden card-glow card-grain',
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

<style scoped>
.card-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.06;
  mix-blend-mode: screen;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  border-radius: inherit;
  z-index: 1;
}
</style>

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
  rounded: 'rounded-xl',
  padding: 'p-6 md:p-10',
  bgOpacity: 100,
  hoverOpacity: 100,
  hover: true,
  shadow: 'var(--card-shadow)',
  className: ''
})
</script>
