<template>
  <div class="relative pt-36 pb-0 overflow-hidden">

    <!-- Glow -->
    <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px]" style="background: radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 65%);"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Back link -->
      <NuxtLink to="/blog" class="group inline-flex items-center gap-2 text-muted text-[0.6rem] font-black uppercase tracking-[0.4em] hover:text-accent transition-colors duration-300 mb-14">
        <Icon name="lucide:arrow-left" class="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
        All Articles
      </NuxtLink>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <BlogTag v-for="tag in tags" :key="tag">{{ tag }}</BlogTag>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-main mb-8 max-w-4xl">
        {{ title }}
      </h1>

      <!-- Excerpt -->
      <p class="text-soft text-xl font-medium leading-relaxed opacity-70 max-w-2xl mb-12">
        {{ excerpt }}
      </p>

      <!-- Author + meta bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-t border-b border-[var(--border-subtle)]">
        <div class="flex items-center gap-4">
          <div class="h-10 w-10 bg-accent rounded-full flex items-center justify-center text-accent-fg font-black shrink-0">M</div>
          <div>
            <p class="text-main text-sm font-black leading-none">Md Mohin Uddin</p>
            <p class="text-muted text-[0.55rem] font-bold uppercase tracking-widest opacity-60 mt-1">Design Engineer</p>
          </div>
        </div>
        <div class="flex items-center gap-6 text-muted text-[0.6rem] font-bold uppercase tracking-widest">
          <div class="flex items-center gap-2">
            <Icon name="lucide:calendar" class="h-3.5 w-3.5 opacity-50" />
            <span>{{ date }}</span>
          </div>
          <div class="h-3 w-px bg-[var(--border-glass)]"></div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:clock" class="h-3.5 w-3.5 opacity-50" />
            <slot name="readingTime" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  date: string
  tags: string[]
  excerpt: string
}>()
</script>
