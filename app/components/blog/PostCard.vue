<template>
  <NuxtLink :to="post.path" class="group flex flex-col rounded-2xl border border-[var(--border-glass)] bg-panel overflow-hidden transition-all duration-500 hover:border-accent/25 hover:-translate-y-0.5" style="box-shadow: var(--card-shadow);">

    <!-- Top meta bar -->
    <div class="px-7 pt-7 pb-5 flex items-center justify-between border-b border-[var(--border-subtle)]">
      <span class="text-accent text-[0.55rem] font-black uppercase tracking-widest">{{ post.date }}</span>
      <span class="text-muted text-[0.55rem] font-bold uppercase tracking-widest opacity-50">{{ post.readingTime }}</span>
    </div>

    <!-- Content -->
    <div class="flex-1 p-7 flex flex-col">
      <h3 class="text-lg font-black tracking-tight text-main leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
        {{ post.title }}
      </h3>
      <p class="text-soft text-sm font-medium leading-relaxed opacity-65 line-clamp-3 flex-1">
        {{ post.excerpt }}
      </p>

      <!-- Footer -->
      <div class="mt-6 pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <div class="flex gap-1.5">
          <span v-for="tag in post.tags?.slice(0, 2)" :key="tag" class="px-2.5 py-1 rounded-full bg-[var(--bg-soft)] text-muted text-[0.5rem] font-black uppercase tracking-widest border border-[var(--border-glass)]">
            {{ tag }}
          </span>
        </div>
        <div class="h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:text-accent-fg" style="background: var(--bg-soft); border: 1px solid var(--border-glass);">
          <Icon name="lucide:arrow-right" class="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>

  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  post: any
  id?: number
}>()
</script>
