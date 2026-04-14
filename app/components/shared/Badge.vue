<template>
  <span class="inline-flex items-center px-3 py-1 border border-glass rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-[color:var(--brand-a)] hover:text-[color:var(--brand-a)]"
    style="background: var(--bg-soft); color: var(--text-muted);">
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>
