<template>
  <div v-if="post" class="min-h-screen">
    <!-- Post Hero Architecture -->
    <div class="pt-32 pb-16 md:pt-48 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-glass bg-panel/[0.02]">
      <div class="max-w-4xl mx-auto">
        <NuxtLink to="/blog" class="group inline-flex items-center gap-2 text-accent text-[0.65rem] font-black uppercase tracking-[0.4em] mb-12 hover:opacity-70 transition-opacity">
          <Icon name="lucide:arrow-left" class="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </NuxtLink>

        <div class="flex flex-col gap-8">
          <div class="flex items-center gap-4">
             <span v-for="tag in post.tags" :key="tag" class="px-3 py-1 rounded-full border border-accent/20 text-accent text-[0.55rem] font-black uppercase tracking-widest">
               {{ tag }}
             </span>
             <span class="h-px flex-1 bg-accent/10"></span>
             <span class="text-soft text-[0.6rem] font-serif italic">{{ post.date }}</span>
          </div>

          <h1 class="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-main">
            {{ post.title }}
          </h1>

          <p class="text-soft text-xl md:text-2xl font-medium leading-relaxed max-w-3xl opacity-80">
            {{ post.excerpt }}
          </p>
        </div>
      </div>
    </div>

    <!-- Article Content -->
    <div class="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div class="prose prose-xl prose-invert max-w-none article-content">
        <p class="text-lg leading-relaxed mb-8">
          This is a placeholder for the full article content. In a production environment, this would be fueled by a Headless CMS or Nuxt Content. 
          The typography is tuned for maximum readability, ensuring the technical depth is accessible to executive stakeholders and engineers alike.
        </p>

        <h2 class="text-main text-3xl font-black tracking-tight mt-16 mb-8">Strategic Implementation</h2>
        <p class="mb-8">
          When building high-concurrency interfaces for Kubernetes platforms like KubeDB or KubeVault, the protocol for design must be deterministic. 
          We move away from subjective aesthetics into a realm of functional logic where every pixel accounts for a state transition.
        </p>

        <div class="my-16 p-8 rounded-3xl bg-accent text-accent-fg border border-glass shadow-2xl">
          <p class="text-xl font-bold italic serif-font">
            "Design is not just what it looks like and feels like. Design is how it works under high-stress infrastructure scenarios."
          </p>
        </div>

        <h3 class="text-main text-2xl font-black tracking-tight mt-12 mb-6">Conclusion</h3>
        <p>
          As we continue to evolve the "God-Tier" design system, the intersection of design and engineering will only tighten. 
          Expect more detailed technical breakdowns of these protocols in future journal entries.
        </p>
      </div>

      <!-- Article Footer -->
      <div class="mt-24 pt-12 border-t border-glass flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex items-center gap-4">
          <div class="h-12 w-12 bg-accent rounded-full flex items-center justify-center text-accent-fg font-black">M</div>
          <div>
            <p class="text-main text-sm font-black">Md Mohin Uddin</p>
            <p class="text-soft text-xs font-bold uppercase tracking-widest opacity-60">Head of Design</p>
          </div>
        </div>
        <SharedButton tag="a" href="#contact" variant="primary" size="md">
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
const slug = route.params.slug

// Mock data fetching - In reality, use useContent() or external API
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

const post = posts.find(p => p.slug === slug)

if (post) {
  useSeoMeta({
    title: `${post.title} — Md Mohin Uddin`,
    description: post.excerpt
  })
}
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
.article-content p { @apply text-soft font-medium leading-[1.8] opacity-90; }
</style>
