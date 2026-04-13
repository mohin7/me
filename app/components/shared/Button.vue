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
  border: 1px solid var(--accent);
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.1),
    0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── Refracted Light Beam ── */
.btn-primary::after {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transform: skewX(-20deg);
}

.btn-primary:not(.sm-no-jump):hover {
  transform: translateY(-2px);
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 20px 40px rgba(0, 0, 0, 0.05);
}

.btn-primary:hover::after {
  left: 150%;
}

.theme-dark .btn-primary {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}
.theme-dark .btn-primary:hover {
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
}

.btn-outline {
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  background: transparent;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-outline:not(.sm-no-jump):hover {
  border-color: var(--accent);
  background: var(--bg-soft);
  transform: translateY(-2px);
}

.btn-glass {
  background: var(--bg-glass);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--border-glass);
  color: var(--text-main);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-glass:hover {
  border-color: var(--accent);
  background: var(--bg-soft);
  transform: translateY(-2px);
}

.btn-ghost {
  color: var(--text-soft);
  background: transparent;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-ghost:hover {
  color: var(--text-main);
  background: var(--bg-soft);
}
</style>

