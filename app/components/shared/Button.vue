<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center gap-2 font-semibold leading-none whitespace-nowrap active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none outline-none cursor-pointer transition-all duration-300 group/btn',
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
    <div class="relative h-[1.6em] overflow-hidden">
      <div v-if="hoverText" class="flex flex-col items-center transition-transform duration-500 ease-in-out group-hover/btn:-translate-y-1/2">
         <div class="h-[1.6em] flex items-center justify-center gap-2">
           <slot name="left"></slot>
           <slot />
           <slot name="right"></slot>
         </div>
         <div class="h-[1.6em] flex items-center justify-center text-accent italic font-bold">
           {{ hoverText }}
         </div>
      </div>
      <div v-else class="flex items-center justify-center gap-2">
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
    case 'outline': return 'btn-outline'
    case 'glass':   return 'btn-glass'
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
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  filter: brightness(var(--hover-brightness));
}

.btn-outline {
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  background: transparent;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-outline:hover {
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
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-ghost:hover {
  color: var(--text-main);
  background: var(--bg-soft);
}
</style>
