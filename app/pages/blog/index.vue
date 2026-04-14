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

    <!-- Article Index: The Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
      <div 
        v-for="(post, idx) in posts" 
        :key="post.slug"
        class="group relative flex flex-col"
      >
        <!-- Meta Row -->
        <div class="flex items-center gap-4 mb-8">
          <span class="text-[0.6rem] font-black font-mono text-accent uppercase tracking-widest">{{ post.date }}</span>
          <div class="h-px flex-1 bg-accent/5"></div>
          <span class="text-[0.55rem] font-black uppercase tracking-[0.3em] text-soft opacity-40">{{ post.readingTime }}</span>
        </div>

        <!-- Content -->
        <NuxtLink :to="`/blog/${post.slug}`" class="block space-y-6">
          <h2 class="text-main text-3xl md:text-5xl font-black tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">
            {{ post.title }}
          </h2>
          <p class="text-soft text-lg font-medium leading-relaxed line-clamp-3 opacity-70">
            {{ post.excerpt }}
          </p>
        </NuxtLink>

        <!-- Footer Meta -->
        <div class="mt-8 flex items-center gap-3">
          <div 
            v-for="tag in post.tags" 
            :key="tag"
            class="px-3 py-1 rounded-full border border-glass bg-accent/[0.03] text-accent text-[0.55rem] font-black uppercase tracking-widest"
          >
            {{ tag }}
          </div>
          
          <NuxtLink 
            :to="`/blog/${post.slug}`"
            class="ml-auto h-10 w-10 rounded-full border border-glass bg-accent/5 flex items-center justify-center text-main group-hover:bg-accent group-hover:text-accent-fg transition-all duration-500"
          >
            <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Empty State / Future Proofing -->
    <div v-if="posts.length === 0" class="py-32 text-center border border-dashed border-glass rounded-[40px]">
      <p class="text-muted font-bold italic serif-font">Synthesizing new architectural patterns...</p>
    </div>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Journal — Md Mohin Uddin',
  description: 'Technical insights on Design Engineering, Kubernetes UX, and Scalable Design Systems.'
})

const posts = [
  {
    title: "Engineering the Developer Experience for Cloud-Native Tools",
    slug: "engineering-developer-experience",
    date: "April 12, 2026",
    readingTime: "8 MIN READ",
    excerpt: "How to apply surgical design intent to complex CLI and UI tools for the Kubernetes ecosystem. Analyzing the friction points between infrastructure and engineering.",
    tags: ["DevOps", "UX Architecture"]
  },
  {
    title: "The Case for Deterministic Design Systems",
    slug: "deterministic-design-systems",
    date: "March 28, 2026",
    readingTime: "6 MIN READ",
    excerpt: "Moving beyond component libraries into unified logical systems that predict user intent and scale across high-concurrency enterprise interfaces.",
    tags: ["Systems", "Architecture"]
  },
  {
    title: "Bridging the Gap: Figma to Production-Ready Code",
    slug: "figma-to-production",
    date: "March 15, 2026",
    readingTime: "10 MIN READ",
    excerpt: "A deep dive into protocols for high-fidelity handoffs and why design engineering is the most critical vertical in modern software development.",
    tags: ["Engineering", "Protocol"]
  }
]
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
</style>
