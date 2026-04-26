<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center gap-2 font-semibold leading-normal whitespace-nowrap active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none outline-none cursor-pointer transition-all duration-300 group/btn',
      variantClasses,
      sizeClasses,
      fullWidth && 'w-full'
    ]"
    :disabled="tag === 'button' ? disabled : undefined"
    :href="tag !== 'button' ? href : undefined"
    :target="target"
    :rel="rel"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    v-bind="$attrs"
  >
    <div class="relative h-[2em] w-full overflow-hidden">
      <div v-if="hoverText" class="flex flex-col items-center w-full transition-transform duration-500 ease-in-out group-hover/btn:-translate-y-1/2">
         <div class="h-[2em] w-full flex items-center justify-center gap-2 px-1">
           <slot name="left"></slot>
           <slot />
           <slot name="right"></slot>
         </div>
         <div :class="[
           'h-[2em] w-full flex items-center justify-center gap-2 italic font-bold px-1 transition-colors duration-300', 
           (['primary', 'solid'].includes(variant)) ? 'text-accent-fg' : 'text-accent' 
         ]">
           <slot v-if="$slots.hoverLeft" name="hoverLeft"></slot>
           <slot v-else name="left"></slot>
           {{ hoverText }}
           <slot v-if="$slots.hoverRight" name="hoverRight"></slot>
           <slot v-else name="right"></slot>
         </div>
      </div>
      <div v-else class="h-[2em] w-full flex items-center justify-center gap-2 px-1">
         <slot name="left"></slot>
         <slot />
         <slot name="right"></slot>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const isHovered = ref(false)

type Variant = 'primary' | 'solid' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'liquid'
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
  hoverText?: string
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  tag: 'button',
  href: undefined,
  target: undefined,
  rel: undefined,
  fullWidth: false,
  hoverText: undefined
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
    case 'solid':   return 'btn-primary'
    case 'secondary':
    case 'outline': return 'btn-outline'
    case 'glass':   return 'btn-glass'
    case 'liquid':  return 'btn-liquid'
    case 'ghost':   return 'btn-ghost'
    default:        return 'btn-primary'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'xs': return 'h-8 px-4 text-[0.6rem] rounded-full'
    case 'sm': return 'h-9 px-5 text-xs rounded-full'
    case 'md': return 'h-10 px-6 text-[0.8rem] rounded-full'
    case 'lg': return 'h-12 px-8 text-[0.85rem] rounded-full'
    case 'xl': return 'h-16 px-12 text-sm rounded-full'
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
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-primary::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: all 0.6s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.3),
    0 12px 24px -5px rgba(var(--accent-rgb), 0.2);
  filter: brightness(var(--hover-brightness));
}

.btn-primary:hover::after {
  left: 100%;
}

.btn-outline, .btn-secondary {
  border: 1px solid var(--border-glass);
  color: var(--text-main);
  background: transparent;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-outline:hover, .btn-secondary:hover {
  border-color: rgba(var(--accent-rgb), 0.4);
  background: rgba(var(--accent-rgb), 0.05);
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
  border-color: rgba(var(--accent-rgb), 0.4);
  background: rgba(var(--accent-rgb), 0.05);
  transform: translateY(-2px);
}

.btn-ghost {
  color: var(--text-soft);
  background: transparent;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-ghost:hover {
  color: var(--text-main);
  background: rgba(var(--accent-rgb), 0.05);
}

/* ── Liquid Glass Variant (Clear Transparent) ── */
.btn-liquid {
  background: var(--bg-glass);
  backdrop-filter: blur(32px) saturate(140%);
  border: 1px solid var(--border-glass);
  color: var(--text-main);
  position: relative;
  overflow: hidden;
  box-shadow: 
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.05),
    0 10px 30px -10px rgba(0, 0, 0, 0.15);
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-liquid::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(var(--accent-rgb), 0.05),
    rgba(var(--accent-rgb), 0.15),
    rgba(var(--accent-rgb), 0.05),
    transparent
  );
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-liquid:hover {
  transform: translateY(-3px) scale(1.02);
  border-color: rgba(var(--accent-rgb), 0.3);
  background: rgba(var(--accent-rgb), 0.08);
  box-shadow: 
    inset 0 1px 2px 0 rgba(255, 255, 255, 0.2),
    0 20px 40px -10px rgba(0, 0, 0, 0.15);
}

.btn-liquid:hover::before {
  left: 100%;
}

.btn-liquid:active {
  transform: translateY(-1px) scale(0.98);
}

/* Update Glass variant to be more premium too */
.btn-glass {
  background: var(--bg-glass);
  backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid var(--border-glass);
  color: var(--text-main);
  box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.05);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
