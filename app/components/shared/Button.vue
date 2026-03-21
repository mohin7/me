<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-full font-black tracking-tight leading-none transition-all duration-500 whitespace-nowrap active:scale-95 disabled:opacity-40 disabled:pointer-events-none group outline-none',
      variantClasses,
      sizeClasses,
      fullWidth && 'w-full'
    ]"
    :disabled="tag === 'button' ? disabled : undefined"
    :href="tag !== 'button' ? href : undefined"
    :target="target"
    :rel="rel"
    v-bind="$attrs"
  >
    <!-- Optional Left Icon Slot -->
    <slot name="left"></slot>
    <slot />
    <!-- Optional Right Icon Slot -->
    <slot name="right"></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'solid' | 'outline' | 'ghost' | 'glass'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Props {
  variant?: Variant
  size?: Size
  disabled?: boolean
  tag?: 'button' | 'a' | string
  href?: string
  target?: string
  rel?: string
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  tag: 'button',
  href: undefined,
  target: undefined,
  rel: undefined,
  fullWidth: false
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'brand-gradient text-white shadow-[0_10px_30px_-10px_rgba(var(--brand-rgb),0.3)] hover:shadow-[0_15px_35px_-5px_rgba(var(--brand-rgb),0.4)] hover:brightness-110 hover:scale-[1.02]'
    case 'solid':
      return 'bg-brand-a text-white shadow-lg hover:bg-brand-a/90 hover:scale-[1.02]'
    case 'outline':
      return 'border-2 border-subtle text-main hover:border-brand-a hover:text-brand-a bg-transparent hover:bg-brand-a/5'
    case 'glass':
      return 'bg-panel/40 backdrop-blur-xl border border-subtle text-main hover:bg-panel/60 hover:border-brand-a/30 shadow-xl'
    case 'ghost':
      return 'text-soft hover:bg-brand-a/5 hover:text-brand-a'
    default:
      return 'brand-gradient text-white'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]'
    case 'sm':
      return 'px-6 py-3 text-xs uppercase tracking-[0.15em]'
    case 'md':
      return 'px-8 py-4 text-sm uppercase tracking-[0.1em]'
    case 'lg':
      return 'px-12 py-5 text-base uppercase tracking-widest'
    case 'xl':
      return 'px-16 py-7 text-lg uppercase tracking-[0.2em]'
    default:
      return 'px-8 py-4 text-sm uppercase tracking-widest'
  }
})
</script>
