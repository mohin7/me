<template>
  <div class="mb-12 md:mb-16">
    <h2 class="text-main text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
      {{ title }}
    </h2>
    <p v-if="description" class="text-soft max-w-2xl text-lg">
      {{ description }}
    </p>
    <div v-if="highlight" class="mt-4 inline-block rounded-lg border border-[color:var(--brand-a)]/40 bg-[color:var(--brand-a)]/10 px-4 py-2">
      <span class="text-[color:var(--brand-a)] text-sm font-medium">{{ highlight }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
  highlight?: string
}

defineProps<Props>()
</script>
