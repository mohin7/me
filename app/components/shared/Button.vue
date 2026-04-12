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

/* ── Unified Pill radius on all sizes ── */
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'xs': return 'h-8 px-4 text-[0.6rem] rounded-full sm-no-jump'
    case 'sm': return 'h-9 px-5 text-xs rounded-full sm-no-jump'
    case 'md': return 'h-10 px-6 text-[0.8rem] rounded-full sm-no-jump'
    case 'lg': return 'h-12 px-8 text-[0.85rem] rounded-full'
    case 'xl': return 'h-14 px-10 text-sm rounded-full'
    default:   return 'h-10 px-6 text-[0.8rem] rounded-full'
  }
})
</script>

<style>
.btn-primary {
  background: var(--accent);
  color: var(--accent-fg);
  position: relative;
  overflow: hidden;
}
.btn-primary::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: 0.5s;
}
.btn-primary:hover::after {
  left: 100%;
}
.btn-primary:not(.sm-no-jump):hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(var(--accent-rgb), 0.3);
}
.btn-primary.sm-no-jump:hover {
  opacity: 0.9;
}

.btn-outline {
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  background: transparent;
  font-weight: 700;
}
.btn-outline:not(.sm-no-jump):hover {
  border-color: var(--brand-a);
  color: var(--brand-a);
  background: var(--bg-soft);
  transform: translateY(-2px);
}
.btn-outline.sm-no-jump:hover {
  border-color: var(--brand-a);
  color: var(--brand-a);
  background: var(--bg-soft);
}

.btn-glass {
  background: var(--bg-panel);
  background-opacity: 0.6;
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
}
.btn-glass:hover {
  border-color: var(--brand-a);
  transform: translateY(-2px);
}

.btn-ghost {
  color: var(--text-soft);
  background: transparent;
  font-weight: 700;
}
.btn-ghost:hover {
  color: var(--brand-a);
  background: var(--bg-soft);
}
</style>

