<template>
  <div v-if="post" class="min-h-screen">

    <!-- Reading progress bar -->
    <div class="fixed top-0 left-0 w-full h-[2px] z-[200] pointer-events-none bg-[var(--border-subtle)]">
      <div class="h-full bg-accent transition-all duration-100" :style="{ width: scrollProgress + '%' }"></div>
    </div>

    <!-- Header -->
    <BlogPostHeader
      :title="post.title"
      :date="post.date"
      :tags="post.tags"
      :excerpt="post.excerpt"
    >
      <template #readingTime>{{ post.readingTime }}</template>
    </BlogPostHeader>

    <!-- Body: sidebar + content -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:grid lg:grid-cols-[1fr_260px] lg:gap-16 items-start">

      <!-- Article content -->
      <div>
        <BlogReader>
          <ContentRenderer :value="post" />
        </BlogReader>

        <!-- Author card -->
        <div class="mt-20 p-8 rounded-2xl border border-[var(--border-glass)] bg-panel" style="box-shadow: var(--card-shadow);">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div class="flex items-center gap-5">
              <div class="h-14 w-14 bg-accent rounded-2xl flex items-center justify-center text-accent-fg font-black text-xl shrink-0">M</div>
              <div>
                <p class="text-main font-black text-base leading-none mb-1.5">Md Mohin Uddin</p>
                <p class="text-soft text-[0.55rem] font-bold uppercase tracking-widest opacity-80 mb-2">Design Engineer · Dhaka, Bangladesh</p>
                <p class="text-soft text-xs leading-relaxed opacity-70 max-w-xs">Building products at the intersection of design and engineering for 7+ years.</p>
              </div>
            </div>
            <div class="flex flex-col gap-2 shrink-0">
              <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" target="_blank" variant="primary" class="rounded-full px-7 h-10 text-xs">
                Book a Call
                <template #right><Icon name="lucide:calendar" class="h-3.5 w-3.5" /></template>
              </SharedButton>
              <SharedButton tag="a" href="mailto:hello.mohin4@gmail.com" variant="outline" class="rounded-full px-7 h-10 text-xs">
                Send Email
              </SharedButton>
            </div>
          </div>
        </div>

        <!-- Related posts -->
        <div v-if="related && related.length > 0" class="mt-16">
          <div class="flex items-center gap-4 mb-8">
            <div class="h-px flex-1 bg-[var(--border-subtle)]"></div>
            <span class="text-[0.55rem] font-black uppercase tracking-[0.4em] text-soft opacity-70">More Articles</span>
            <div class="h-px flex-1 bg-[var(--border-subtle)]"></div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NuxtLink
              v-for="item in related"
              :key="item.id"
              :to="item.path"
              class="group flex flex-col gap-3 p-6 rounded-2xl border border-[var(--border-glass)] bg-panel transition-all duration-300 hover:border-accent/25 hover:-translate-y-0.5"
              style="box-shadow: var(--card-shadow);"
            >
              <span class="text-soft text-[0.55rem] font-black uppercase tracking-widest opacity-80">{{ item.date }}</span>
              <h4 class="text-sm font-black tracking-tight text-main group-hover:text-accent transition-colors leading-snug">{{ item.title }}</h4>
              <div class="flex items-center gap-1.5 text-accent text-[0.55rem] font-black uppercase tracking-widest">
                Read <Icon name="lucide:arrow-right" class="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Sticky sidebar -->
      <aside class="hidden lg:block">
        <div class="sticky top-28 space-y-6">

          <!-- Share -->
          <div class="p-5 rounded-2xl border border-[var(--border-glass)] bg-panel" style="box-shadow: var(--card-shadow);">
            <p class="text-[0.55rem] font-black uppercase tracking-[0.3em] text-soft opacity-80 mb-4">Share</p>
            <div class="flex flex-col gap-2">
              <a :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://mohin-design.vercel.app' + route.path)}`" target="_blank" rel="noopener"
                class="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-soft)] hover:border-accent/30 hover:text-accent transition-all text-soft text-xs font-bold">
                <Icon name="lucide:twitter" class="h-3.5 w-3.5 shrink-0" /> Share on X
              </a>
              <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://mohin-design.vercel.app' + route.path)}&title=${encodeURIComponent(post.title)}`" target="_blank" rel="noopener"
                class="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-soft)] hover:border-accent/30 hover:text-accent transition-all text-soft text-xs font-bold">
                <Icon name="lucide:linkedin" class="h-3.5 w-3.5 shrink-0" /> Share on LinkedIn
              </a>
              <button @click="copyLink"
                class="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-soft)] hover:border-accent/30 hover:text-accent transition-all text-soft text-xs font-bold text-left w-full">
                <Icon :name="copied ? 'lucide:check' : 'lucide:link'" class="h-3.5 w-3.5 shrink-0" />
                {{ copied ? 'Copied!' : 'Copy Link' }}
              </button>
            </div>
          </div>

          <!-- Tags -->
          <div class="p-5 rounded-2xl border border-[var(--border-glass)] bg-panel" style="box-shadow: var(--card-shadow);">
            <p class="text-[0.55rem] font-black uppercase tracking-[0.3em] text-soft opacity-80 mb-4">Tags</p>
            <div class="flex flex-wrap gap-2">
              <BlogTag v-for="tag in post.tags" :key="tag">{{ tag }}</BlogTag>
            </div>
          </div>

          <!-- CTA -->
          <div class="p-5 rounded-2xl border border-[var(--border-glass)] bg-panel" style="box-shadow: var(--card-shadow);">
            <p class="text-[0.55rem] font-black uppercase tracking-[0.3em] text-soft opacity-80 mb-3">Working on something?</p>
            <p class="text-soft text-xs leading-relaxed opacity-70 mb-4">I help founders and teams ship better products faster.</p>
            <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" target="_blank" variant="primary" class="rounded-full w-full h-9 text-xs">
              Book a Call
            </SharedButton>
          </div>

        </div>
      </aside>
    </div>
  </div>

  <div v-else class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center gap-4 opacity-40">
      <Icon name="lucide:file-text" class="h-10 w-10 text-muted" />
      <p class="text-soft text-base font-medium">Article not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const scrollProgress = ref(0)
const copied = ref(false)

const { data: post } = await useAsyncData(`post-${route.path}`, () =>
  queryCollection('blog').path(route.path).first()
)

const { data: related } = await useAsyncData(`related-${route.path}`, () =>
  queryCollection('blog').where('path', '!=', route.path).limit(2).all()
)

const copyLink = async () => {
  await navigator.clipboard.writeText(`https://mohin-design.vercel.app${route.path}`)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

const handleScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

if (post.value) {
  useSeoMeta({
    title: `${post.value.title} — Md Mohin Uddin`,
    description: post.value.excerpt,
    ogType: 'article',
    ogUrl: `https://mohin-design.vercel.app${route.path}`,
    ogTitle: `${post.value.title} — Md Mohin Uddin`,
    ogDescription: post.value.excerpt,
    ogImage: 'https://mohin-design.vercel.app/og-banner.png',
    twitterCard: 'summary_large_image',
    twitterTitle: `${post.value.title} — Md Mohin Uddin`,
    twitterDescription: post.value.excerpt,
  })

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.value.title,
          description: post.value.excerpt,
          image: 'https://mohin-design.vercel.app/og-banner.png',
          author: {
            '@type': 'Person',
            name: 'Md Mohin Uddin',
            url: 'https://mohin-design.vercel.app'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Md Mohin Uddin',
            logo: {
              '@type': 'ImageObject',
              url: 'https://mohin-design.vercel.app/favicon.svg'
            }
          },
          datePublished: new Date(post.value.date).toISOString()
        })
      }
    ]
  })
}
</script>
