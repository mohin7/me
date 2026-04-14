<template>
  <div class="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
    
    <!-- Blog Header: Strategic Context -->
    <div class="mb-20 md:mb-32">
      <div class="flex items-center gap-3 mb-8">
        <div class="h-px w-8 bg-accent/20"></div>
        <span class="text-accent text-[0.65rem] font-bold uppercase tracking-[0.5em]">The Journal</span>
      </div>
      <h1 class="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-main mb-8">
        Design <br />
        <span class="italic serif-font lowercase" style="color: var(--text-soft)">intelligence.</span>
      </h1>
      <p class="text-soft text-xl font-medium max-w-2xl opacity-80">
        Archived thoughts on scaling UX architecture, cloud infrastructure design, and the intersection of engineering and intent.
      </p>
    </div>

    <div class="max-w-[700px] mx-auto pb-32">
      <!-- Medium-Style Feed -->
      <div class="space-y-0">
         <NuxtLink v-for="post in posts" :key="post.id" :to="post.path" class="group block py-10 border-b border-glass hover:bg-black/[0.01] transition-all px-4 -mx-4 rounded-xl">
            <div class="flex gap-8 md:gap-16 justify-between items-start">
              
              <!-- Story Text -->
              <div class="flex-1 space-y-3">
                <!-- Author Info -->
                <div class="flex items-center gap-2 mb-2">
                  <div class="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-[0.45rem] text-accent-fg font-black">M</div>
                  <span class="text-main text-xs font-bold">Md Mohin Uddin</span>
                  <span class="text-soft opacity-30 text-xs px-1">in</span>
                  <span class="text-main text-xs font-bold">{{ post.tags?.[0] || 'Technical' }}</span>
                  <span class="text-soft opacity-20 text-xs px-1">·</span>
                  <span class="text-soft text-xs font-medium opacity-50">{{ post.date }}</span>
                </div>

                <!-- Title & Excerpt -->
                <h2 class="text-xl md:text-2xl font-black tracking-tight text-main group-hover:text-accent transition-colors duration-300 leading-tight">
                  {{ post.title }}
                </h2>
                <p class="text-soft text-sm md:text-base font-medium leading-[1.6] line-clamp-2 md:line-clamp-3 opacity-60">
                  {{ post.excerpt }}
                </p>

                <!-- Footer Meta -->
                <div class="pt-6 flex items-center justify-between">
                   <div class="flex items-center gap-4">
                     <span class="px-2.5 py-1 bg-glass rounded-full text-soft text-[0.65rem] font-medium">{{ post.tags?.[0] }}</span>
                     <span class="text-[0.65rem] font-medium text-soft opacity-40">{{ post.readingTime }}</span>
                   </div>
                   
                   <div class="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all">
                      <Icon name="lucide:bookmark" class="h-4 w-4 text-soft hover:text-accent cursor-pointer" />
                      <Icon name="lucide:minus-circle" class="h-4 w-4 text-soft hover:text-accent cursor-pointer" />
                      <Icon name="lucide:more-horizontal" class="h-4 w-4 text-soft hover:text-accent cursor-pointer" />
                   </div>
                </div>
              </div>

              <!-- Compact Visual Anchor (Medium-Style) -->
              <div class="w-24 md:w-32 lg:w-40 shrink-0 aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-panel/30 border border-glass relative">
                 <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
                 <div class="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Icon name="lucide:layout" class="h-10 w-10 text-accent" />
                 </div>
              </div>

            </div>
         </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Journal — Md Mohin Uddin',
  description: 'Technical insights on Design Engineering, Kubernetes UX, and Scalable Design Systems.'
})

const { data: posts } = await useAsyncData('blog-posts', () => 
  queryCollection('blog').all()
)
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
</style>
