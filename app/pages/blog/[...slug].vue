<template>
  <div v-if="post" class="min-h-screen">
    <!-- Surgical Reading Progress -->
    <div class="fixed top-0 left-0 w-full h-1 z-[200] pointer-events-none">
       <div 
         class="h-full bg-accent transition-all duration-150 shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
         :style="{ width: scrollProgress + '%' }"
       ></div>
    </div>

    <!-- Post Hero Architecture -->
    <BlogPostHeader 
      :title="post.title"
      :date="post.date"
      :tags="post.tags"
      :excerpt="post.excerpt"
    />

    <!-- Article Execution Layer -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <!-- Right: Substantive Narrative (8 Cols) -->
      <div class="lg:col-span-8 lg:col-start-3">
        <BlogReader>
          <ContentRenderer :value="post" />
        </BlogReader>

        <!-- Dynamic Article Footer -->
        <div class="mt-32 pt-16 border-t border-glass flex flex-col md:flex-row items-center justify-between gap-12">
          <div class="flex items-center gap-6">
            <div class="h-16 w-16 bg-accent rounded-full flex items-center justify-center text-accent-fg text-xl font-black shadow-2xl">M</div>
            <div>
              <p class="text-main font-black">Md Mohin Uddin</p>
              <p class="text-soft text-[0.65rem] font-bold uppercase tracking-widest opacity-50">Head of Design & Product Architect</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <SharedButton tag="a" href="/#contact" variant="primary">
              Discuss this protocol
            </SharedButton>
          </div>
        </div>

        <!-- Related Strategic Content -->
        <div v-if="related && related.length > 0" class="mt-48 space-y-12">
           <div class="section-label">Related Protocols</div>
           <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <NuxtLink v-for="item in related" :key="item.id" :to="item.path" class="group block space-y-4 p-8 rounded-[32px] bg-panel/20 border border-glass hover:bg-panel/40 transition-all">
                <span class="text-soft text-[0.6rem] font-black uppercase tracking-widest opacity-40">{{ item.date }}</span>
                <h4 class="text-xl font-black tracking-tight text-main group-hover:text-accent transition-colors">{{ item.title }}</h4>
                <div class="flex items-center gap-4 pt-4 text-accent text-[0.6rem] font-black uppercase tracking-widest">
                   Read Next <Icon name="lucide:arrow-right" class="h-3 w-3" />
                </div>
              </NuxtLink>
           </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex items-center justify-center min-h-screen">
    <p class="text-soft text-xl italic font-medium">Synchronizing archive data...</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const scrollProgress = ref(0)

const { data: post } = await useAsyncData(`post-${route.path}`, () => 
  queryCollection('blog').path(route.path).first()
)

// Fetch related posts (simple logic: get 2 latest that are NOT the current one)
const { data: related } = await useAsyncData(`related-${route.path}`, () => 
  queryCollection('blog').where('path', '!=', route.path).limit(2).all()
)

const handleScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

if (post.value) {
  useSeoMeta({
    title: `${post.value.title} — Md Mohin Uddin`,
    description: post.value.excerpt
  })
}
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
</style>
