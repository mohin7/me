<template>
  <div v-if="post" class="min-h-screen">
    <!-- Post Hero Architecture -->
    <BlogPostHeader 
      :title="post.title"
      :date="post.date"
      :tags="post.tags"
      :excerpt="post.excerpt"
    />

    <!-- Article Content -->
    <div class="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <BlogReader>
        <ContentRenderer :value="post" />
      </BlogReader>

      <!-- Article Footer -->
      <div class="mt-24 pt-12 border-t border-glass flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex items-center gap-4">
          <div class="h-12 w-12 bg-accent rounded-full flex items-center justify-center text-accent-fg font-black">M</div>
          <div>
            <p class="text-main text-sm font-black">Md Mohin Uddin</p>
            <p class="text-soft text-xs font-bold uppercase tracking-widest opacity-60">Head of Design</p>
          </div>
        </div>
        <SharedButton tag="a" href="/#contact" variant="primary" size="md">
          Discuss this topic
        </SharedButton>
      </div>
    </div>
  </div>
  <div v-else class="flex items-center justify-center min-h-screen">
    <p class="text-soft text-xl italic serif-font">Locating archive entry...</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`post-${route.path}`, () => 
  queryCollection('blog').path(route.path).first()
)

if (post.value) {
  useSeoMeta({
    title: `${post.value.title} — Md Mohin Uddin`,
    description: post.value.excerpt
  })
}
</script>

<style scoped>
</style>
