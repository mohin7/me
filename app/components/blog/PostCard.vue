<template>
  <NuxtLink :to="post.path" class="group relative block p-6 rounded-[24px] bg-panel/10 border border-glass hover:bg-panel/30 hover:shadow-[var(--specular)] transition-all duration-500 overflow-hidden">
    <!-- Compact Meta -->
    <div class="flex items-center justify-between mb-4">
      <span class="text-accent text-[0.55rem] font-black uppercase tracking-widest">{{ post.date?.includes(',') ? post.date.split(',')[1]?.trim() : post.date || 'Archived' }}</span>
      <span class="text-soft text-[0.5rem] font-bold uppercase tracking-[0.2em] opacity-30">{{ post.readingTime }}</span>
    </div>

    <!-- Title Anchor -->
    <h3 class="text-xl font-black tracking-tight text-main group-hover:text-accent transition-colors leading-[1.1] mb-4">
      {{ post.title }}
    </h3>

    <!-- Micro Excerpt -->
    <p class="text-soft text-xs font-medium leading-relaxed opacity-40 line-clamp-2 mb-6">
      {{ post.excerpt }}
    </p>

    <!-- Contextual Footer -->
    <div class="flex items-center justify-between pt-4 border-t border-glass/5">
       <span class="text-soft text-[0.55rem] font-black uppercase tracking-widest opacity-30">{{ post.tags?.[0] }}</span>
       <Icon name="lucide:arrow-right" class="h-3 w-3 text-accent transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  post: any
}>()
</script>
