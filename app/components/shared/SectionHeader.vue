<template>
  <div :class="['flex flex-col', centered ? 'items-center text-center' : 'items-start', wrapperClass]" class="mb-10 md:mb-12">
    <!-- Section Label + accent line -->
    <div v-if="label" class="reveal mb-5" :class="centered ? 'flex flex-col items-center gap-3' : 'flex flex-col items-start gap-3'">
      <span class="section-label">{{ label }}</span>
      <div class="accent-rule" :class="centered && 'mx-auto'"></div>
    </div>

    <!-- Title -->
    <h2 v-if="$slots.title || title" class="reveal mb-6" :class="[titleClass, maxWidth && `max-w-${maxWidth} mx-auto`]">
      <slot name="title">{{ title }}</slot>
    </h2>

    <!-- Description -->
    <p v-if="$slots.description || description" class="reveal text-soft text-lg font-medium leading-relaxed opacity-80" :class="[centered && 'max-w-2xl mx-auto', descriptionClass]">
      <slot name="description">{{ description }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  title?: string
  description?: string
  centered?: boolean
  wrapperClass?: string
  titleClass?: string
  descriptionClass?: string
  maxWidth?: string
}>(), {
  label: undefined,
  title: undefined,
  description: undefined,
  centered: false,
  wrapperClass: '',
  titleClass: '',
  descriptionClass: '',
  maxWidth: undefined
})
</script>

<style scoped>
.accent-rule {
  width: 32px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(to right, var(--accent), color-mix(in srgb, var(--accent), transparent 40%));
  opacity: 0.7;
}
</style>
