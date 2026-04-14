<template>
  <div :class="['mb-16', alignmentClasses]">
    <h2 class="text-4xl font-black md:text-6xl mb-6 tracking-tight" style="color: var(--text-main);">
      {{ title }}
    </h2>
    <p v-if="description" class="text-xl max-w-2xl font-medium" style="color: var(--text-soft);">
      {{ description }}
    </p>
    <div v-if="highlight" class="mt-4 inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-glass" style="background: var(--bg-soft); color: var(--text-muted);">
      {{ highlight }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  description?: string
  highlight?: string
  align?: 'left' | 'center'
}>(), {
  align: 'left'
})

const alignmentClasses = computed(() => {
  return props.align === 'center' ? 'text-center flex flex-col items-center' : 'text-left'
})
</script>
