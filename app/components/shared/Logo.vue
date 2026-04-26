<template>
  <component :is="link ? 'a' : 'div'" :href="link ? '/' : undefined" class="group flex items-center gap-2 md:gap-3 shrink-0 cursor-pointer">
    <div class="h-8 w-8 md:h-10 md:w-10 bg-accent text-accent-fg flex items-center justify-center rounded-lg md:rounded-xl font-black serif-font text-lg md:text-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 border border-glass">M</div>
    <div class="flex flex-col text-left justify-center">
      <span class="text-sm md:text-[0.9rem] font-black text-main leading-none tracking-tighter">mohin<span class="text-soft">.design</span></span>
      <span v-if="subtitle" class="text-[0.5rem] md:text-[0.55rem] font-black text-muted mt-0.5 md:mt-1 uppercase tracking-[0.3em] opacity-60">{{ subtitle }}</span>
    </div>
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  link?: boolean
  subtitle?: string
}>(), {
  link: true,
  subtitle: 'Head of Design'
})
</script>
