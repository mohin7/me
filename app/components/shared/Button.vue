<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center gap-2 font-semibold leading-none transition-all duration-200 whitespace-nowrap active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none outline-none cursor-pointer',
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
    <slot name="left"></slot>
    <slot />
    <slot name="right"></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'solid' | 'outline' | 'ghost' | 'glass'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  disabled?: boolean
  tag?: 'button' | 'a' | string
  href?: string
  target?: string
  rel?: string
  fullWidth?: boolean
}>(), {
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
    case 'solid':   return 'btn-primary'
    case 'outline': return 'btn-outline'
    case 'glass':   return 'btn-glass'
    case 'ghost':   return 'btn-ghost'
    default:        return 'btn-primary'
  }
})

/* ── Unified 8px radius on all sizes ── */
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'xs': return 'h-7 px-3 text-[0.65rem] rounded-full'
    case 'sm': return 'h-8 px-3.5 text-xs rounded-full'
    case 'md': return 'h-9 px-4 text-[0.8rem] rounded-full'
    case 'lg': return 'h-10 px-5 text-[0.85rem] rounded-full'
    case 'xl': return 'h-12 px-6 text-sm rounded-full'
    default:   return 'h-9 px-4 text-[0.8rem] rounded-full'
  }
})
</script>

<style>
.btn-primary {
  background: var(--accent);
  color: var(--accent-fg);
}
.btn-primary:hover {
  opacity: 0.9;
  box-shadow: 0 2px 8px rgba(var(--accent-rgb), 0.25);
}

.btn-outline {
  border: 1.5px solid var(--border-subtle);
  color: var(--text-main);
  background: transparent;
}
.btn-outline:hover {
  border-color: var(--text-muted);
  background: var(--bg-soft);
}

.btn-glass {
  background: var(--bg-panel);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
}
.btn-glass:hover {
  border-color: var(--text-muted);
}

.btn-ghost {
  color: var(--text-soft);
  background: transparent;
}
.btn-ghost:hover {
  color: var(--text-main);
  background: var(--bg-soft);
}
</style>
