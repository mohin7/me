<template>
  <div class="relative min-h-screen">

    <!-- Page Header -->
    <div class="pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></div>
          <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.5em]">Writing</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-main mb-6">
          Design<br><span class="text-gradient">intelligence.</span>
        </h1>
        <p class="text-soft text-lg font-medium max-w-xl leading-relaxed opacity-80">
          Thoughts on UX architecture, design systems, and building products that work.
        </p>
      </div>
    </div>

    <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">

      <!-- Featured Post -->
      <div v-if="featuredPost" class="mb-16">
        <p class="text-[0.55rem] font-black uppercase tracking-[0.4em] text-soft opacity-80 mb-6">Featured</p>
        <NuxtLink :to="featuredPost.path" class="group grid lg:grid-cols-[1fr_400px] gap-0 rounded-2xl border border-[var(--border-glass)] bg-panel overflow-hidden transition-all duration-500 hover:border-accent/25 hover:-translate-y-0.5" style="box-shadow: var(--card-shadow-lg);">

          <!-- Content -->
          <div class="p-10 md:p-14 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-8">
                <span class="text-accent text-[0.6rem] font-black uppercase tracking-widest">{{ featuredPost.date }}</span>
                <span class="h-1 w-1 rounded-full bg-[var(--border-glass)]"></span>
                <span class="text-soft text-[0.6rem] font-bold uppercase tracking-widest opacity-80">{{ featuredPost.readingTime }}</span>
              </div>
              <h2 class="text-3xl md:text-5xl font-black tracking-tighter text-main leading-[1.05] mb-5 group-hover:text-accent transition-colors duration-400">
                {{ featuredPost.title }}
              </h2>
              <p class="text-soft text-base font-medium leading-relaxed opacity-70 max-w-lg">
                {{ featuredPost.excerpt }}
              </p>
            </div>

            <div class="mt-10 flex items-center justify-between pt-8 border-t border-[var(--border-subtle)]">
              <div class="flex gap-2">
                <span v-for="tag in featuredPost.tags?.slice(0, 2)" :key="tag" class="px-3 py-1 rounded-full bg-[var(--bg-soft)] text-soft text-[0.55rem] font-black uppercase tracking-widest border border-[var(--border-glass)]">
                  {{ tag }}
                </span>
              </div>
              <div class="flex items-center gap-2 text-accent text-[0.65rem] font-black uppercase tracking-widest">
                Read
                <Icon name="lucide:arrow-right" class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          <!-- Visual panel -->
          <div class="relative hidden lg:flex items-center justify-center bg-[var(--bg-soft)] border-l border-[var(--border-glass)] overflow-hidden min-h-[320px]">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle, var(--border-glass) 1px, transparent 1px); background-size: 24px 24px; mask-image: radial-gradient(ellipse at center, black, transparent 75%); opacity: 0.8;"></div>
            <div class="relative z-10 flex flex-col items-center gap-4">
              <div class="h-16 w-16 rounded-2xl flex items-center justify-center" style="background: color-mix(in srgb, var(--accent), transparent 88%); border: 1px solid color-mix(in srgb, var(--accent), transparent 75%);">
                <Icon name="lucide:pen-line" class="h-7 w-7 text-accent" />
              </div>
              <span class="text-[0.55rem] font-black uppercase tracking-[0.3em] text-soft opacity-70">Featured Article</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Divider -->
      <div class="flex items-center gap-4 mb-10" v-if="otherPosts.length">
        <div class="h-px flex-1 bg-[var(--border-subtle)]"></div>
        <span class="text-[0.55rem] font-black uppercase tracking-[0.4em] text-soft opacity-70">All Articles</span>
        <div class="h-px flex-1 bg-[var(--border-subtle)]"></div>
      </div>

      <!-- Post Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <BlogPostCard
          v-for="(post, idx) in otherPosts"
          :key="post.id"
          :post="post"
          :id="idx + 1"
          class="reveal"
          :class="`reveal-delay-${Math.min(idx + 1, 4)}`"
        />
      </div>

      <!-- Empty State -->
      <div v-if="!posts || posts.length === 0" class="py-40 text-center">
        <Icon name="lucide:file-text" class="h-12 w-12 text-muted opacity-20 mx-auto mb-4" />
        <p class="text-soft text-lg font-medium opacity-40">No articles yet.</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

useSeoMeta({
  title: 'Writing — Md Mohin Uddin',
  description: 'Thoughts on UX architecture, design systems, and building products that work.'
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const featuredPost = computed(() => posts.value?.[0])
const otherPosts = computed(() => posts.value?.slice(1) || [])
</script>
