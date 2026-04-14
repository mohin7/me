<template>
  <NuxtLink :to="post.path" class="post-card group relative block p-8 rounded-[32px] bg-panel/10 border border-glass hover:bg-panel/20 transition-all duration-700 overflow-hidden">
    <!-- Liquid Glow Interaction -->
    <div class="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
    <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

    <div class="relative z-10">
      <!-- High-Density Meta -->
      <div class="flex items-center justify-between mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
        <div class="flex items-center gap-3">
          <span class="text-accent text-[0.65rem] font-bold uppercase tracking-[0.4em] font-mono">Archive_00{{ id || 1 }}</span>
          <div class="h-1 w-1 rounded-full bg-accent/30"></div>
          <span class="text-soft text-[0.6rem] font-black uppercase tracking-widest">{{ post.date }}</span>
        </div>
        <span class="text-soft text-[0.6rem] font-bold uppercase tracking-[0.2em]">{{ post.readingTime }}</span>
      </div>

      <!-- Title & Narrative Breakdown -->
      <div class="space-y-4">
        <h3 class="text-2xl md:text-3xl font-black tracking-tighter text-main group-hover:text-accent transition-colors duration-500 leading-[1.1]">
          {{ post.title }}
        </h3>
        <p class="text-soft text-base font-medium leading-relaxed opacity-60 line-clamp-3">
          {{ post.excerpt }}
        </p>
      </div>

      <!-- Contextual Tag System -->
      <div class="flex items-center justify-between mt-10 pt-8 border-t border-glass">
         <div class="flex gap-2">
            <span v-for="tag in post.tags?.slice(0, 2)" :key="tag" class="px-3 py-1 rounded-full bg-accent/5 text-soft text-[0.6rem] font-bold uppercase tracking-widest border border-glass">
              {{ tag }}
            </span>
         </div>
         <div class="h-10 w-10 rounded-xl bg-accent/5 border border-glass flex items-center justify-center group-hover:bg-accent group-hover:text-accent-fg transition-all duration-500">
           <Icon name="lucide:arrow-right" class="h-4 w-4" />
         </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  post: any,
  id?: number
}>()
</script>

<style scoped>
.post-card {
  box-shadow: inset 0 1px 1px 0 rgba(255,255,255,0.05);
}
</style>
