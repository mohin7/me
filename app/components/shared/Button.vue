<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]',
      variantClasses,
      sizeClasses,
      disabled && 'opacity-50 cursor-not-allowed'
    ]"
    :disabled="tag === 'button' ? disabled : undefined"
    :href="tag !== 'button' ? href : undefined"
    :target="target"
    :rel="rel"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  variant?: Variant
  size?: Size
  disabled?: boolean
  tag?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  tag: 'button',
  href: undefined,
  target: undefined,
  rel: undefined
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'brand-gradient text-white hover:brightness-110 hover:shadow-lg'
    case 'secondary':
      return 'bg-panel text-main border border-subtle hover:brightness-95'
    case 'outline':
      return 'border border-subtle text-main hover:bg-soft'
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
