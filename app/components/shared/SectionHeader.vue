<template>
  <div :class="['flex flex-col', centered ? 'items-center text-center' : '', wrapperClass]" class="mb-16 md:mb-24">
    <!-- Section Label -->
    <div v-if="label" class="reveal mb-8" :class="centered && 'flex justify-center'">
      <span class="section-label" :class="centered && 'flex justify-center'">{{ label }}</span>
    </div>

    <!-- Title -->
    <h2 v-if="$slots.title || title" class="reveal mb-8" :class="[titleClass, maxWidth && `max-w-${maxWidth} mx-auto`]">
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
