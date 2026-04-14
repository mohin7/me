<template>
  <div class="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
    
    <!-- Sophisticated Technical Aura -->
    <div class="absolute top-[10%] right-[-10%] w-[50%] h-[40%] bg-accent/[0.03] blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-[20%] left-[-10%] w-[40%] h-[30%] bg-accent/[0.02] blur-[100px] rounded-full pointer-events-none"></div>

    <!-- Blog Header: Strategic Context -->
    <div class="relative z-10 mb-20 md:mb-32">
      <div class="flex items-center gap-4 mb-8">
        <div class="h-px w-10 bg-accent/20"></div>
        <span class="text-accent text-[0.65rem] font-bold uppercase tracking-[0.5em] font-mono">The_Archive_Feed</span>
      </div>
      <h1 class="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-main mb-10">
        Design <br />
        <span class="serif-font font-black" style="color: var(--text-soft)">intelligence.</span>
      </h1>
      <p class="text-soft text-xl md:text-2xl font-medium max-w-2xl opacity-80 leading-relaxed pl-8 border-l-2 border-accent/10">
        Archived thoughts on scaling UX architecture, cloud infrastructure design, and the intersection of engineering and intent.
      </p>
    </div>

    <!-- Featured Post Architecture -->
    <div v-if="featuredPost" class="relative z-10 mb-20 md:mb-32">
       <span class="section-label mb-10">Featured Protocol</span>
       <NuxtLink :to="featuredPost.path" class="group relative block p-8 md:p-16 rounded-[48px] border border-glass bg-panel/20 hover:bg-panel/40 transition-all duration-700 overflow-hidden shadow-2xl">
          <!-- Abstract Grid Overlay -->
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 48px 48px;"></div>
          
          <div class="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
             <div class="space-y-10">
                <div class="flex items-center gap-6">
                   <span class="text-accent text-[0.7rem] font-black uppercase tracking-[0.4em] font-mono">{{ featuredPost.date }}</span>
                   <div class="h-1 w-1 rounded-full bg-accent/30"></div>
                   <span class="text-soft text-[0.6rem] font-bold uppercase tracking-widest opacity-40">{{ featuredPost.readingTime }}</span>
                </div>
                <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-main leading-[1.05] group-hover:text-accent transition-colors">
                  {{ featuredPost.title }}
                </h2>
                <p class="text-soft text-lg md:text-xl font-medium leading-relaxed opacity-60">
                   {{ featuredPost.excerpt }}
                </p>
                <div class="flex items-center gap-4 pt-4">
                   <div class="h-12 px-8 rounded-full bg-accent text-accent-fg flex items-center justify-center font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                      Read Protocol
                   </div>
                </div>
             </div>
             <!-- Visual Anchor -->
             <div class="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-accent/5 border border-glass flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-1000">
                <Icon name="lucide:layout" class="h-32 w-32 text-accent opacity-10 group-hover:opacity-30 transition-opacity" />
                <div class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/20 to-transparent">
                   <div class="flex gap-3">
                      <span v-for="tag in featuredPost.tags" :key="tag" class="px-4 py-2 rounded-full bg-glass backdrop-blur-md text-main text-[0.65rem] font-black uppercase tracking-widest border border-white/5">
                        {{ tag }}
                      </span>
                   </div>
                </div>
             </div>
          </div>
       </NuxtLink>
    </div>

    <!-- Search / Filter Protocols -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       <BlogPostCard 
         v-for="(post, idx) in otherPosts" 
         :key="post.id" 
         :post="post" 
         :id="idx + 1"
         class="reveal"
       />
    </div>

    <!-- Empty State Optimization -->
    <div v-if="!posts || posts.length === 0" class="py-40 text-center relative z-10">
       <p class="text-soft text-xl font-medium italic opacity-40">Searching the visual archive...</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

useSeoMeta({
  title: 'Journal — Md Mohin Uddin',
  description: 'Technical insights on Design Engineering, Kubernetes UX, and Scalable Design Systems.'
})

const { data: posts } = await useAsyncData('blog-posts', () => 
  queryCollection('blog').order('date', 'DESC').all()
)

const featuredPost = computed(() => posts.value?.[0])
const otherPosts = computed(() => posts.value?.slice(1) || [])
</script>

<style scoped>
</style>
