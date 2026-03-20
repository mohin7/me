<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all',
      variantClasses,
      sizeClasses,
      disabled && 'opacity-50 cursor-not-allowed'
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  variant?: Variant
  size?: Size
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg'
    case 'secondary':
      return 'bg-gray-800 text-white hover:bg-gray-700'
    case 'outline':
      return 'border border-white/20 text-white hover:border-white/40'
    default:
      return ''
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'md':
      return 'px-6 py-3 text-base'
    case 'lg':
      return 'px-8 py-4 text-lg'
    default:
      return ''
  }
})
</script>
