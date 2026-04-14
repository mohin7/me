<template>
  <section :id="id" class="py-24" :class="{ 'border-t border-glass': hasTopBorder }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  id?: string
  hasTopBorder?: boolean
}>(), {
  id: undefined,
  hasTopBorder: true
})
</script>
