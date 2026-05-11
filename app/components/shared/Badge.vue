<template>
  <span class="inline-flex items-center px-3 py-1 border border-[var(--border-glass)] rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-accent/40 hover:text-accent"
    style="background: var(--bg-soft); color: var(--text-muted);">
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>
