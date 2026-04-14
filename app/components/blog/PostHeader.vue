<template>
  <div class="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 border-b border-glass overflow-hidden shadow-[var(--specular)]">
    <!-- Dynamic Background Accent -->
    <div class="absolute top-0 right-[-10%] w-[60%] h-full bg-accent/[0.04] blur-[140px] -z-10 animate-pulse"></div>
    <div class="absolute bottom-[-20%] left-[-10%] w-[40%] h-full bg-accent/[0.02] blur-[100px] -z-10"></div>
    
    <div class="max-w-4xl mx-auto relative z-10">
      <div class="flex flex-col gap-12">
        <!-- Technical Breadcrumbs -->
        <div class="flex items-center justify-between">
          <NuxtLink to="/blog" class="group inline-flex items-center gap-2 text-soft text-[0.6rem] font-black uppercase tracking-[0.4em] hover:text-accent transition-all duration-300">
            <Icon name="lucide:arrow-left" class="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
            Archive Feed
          </NuxtLink>
          <div class="flex items-center gap-4">
            <span class="h-1 w-1 rounded-full bg-accent/20"></span>
            <span class="text-soft text-[0.6rem] font-bold uppercase tracking-widest opacity-40">{{ date }}</span>
          </div>
        </div>

        <div class="space-y-10">
          <h1 class="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-main">
            {{ title }}
          </h1>

          <div class="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <p class="text-soft text-xl md:text-2xl font-medium leading-[1.6] max-w-2xl opacity-70 border-l-2 border-accent/20 pl-8">
              {{ excerpt }}
            </p>
            <div class="flex flex-wrap gap-2 md:justify-end">
               <BlogTag v-for="tag in tags" :key="tag">
                 {{ tag }}
               </BlogTag>
            </div>
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

<style scoped>
</style>
