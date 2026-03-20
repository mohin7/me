<template>
  <section id="work" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="Featured Repositories"
        description="Pinned projects and experiments that reflect my product, UI, and front-end work."
      />
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(project, idx) in projects" 
          :key="idx"
          :href="project.href"
          target="_blank"
          rel="noreferrer"
          class="group cursor-pointer rounded-2xl border border-transparent p-1 transition hover:border-[color:var(--brand-a)]/40"
        >
          <div class="bg-panel border-subtle hover:border-[color:var(--brand-a)]/60 mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl border transition">
            <div class="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)]">
              <SharedIcon :name="project.icon" class="h-9 w-9" />
            </div>
          </div>
          <h3 class="text-main group-hover:text-[color:var(--brand-a)] text-lg font-bold transition">{{ project.name }}</h3>
          <p class="text-muted text-sm">{{ project.category }}</p>
        </a>
      </div>
      
      <div class="mt-12 text-center">
        <SharedButton tag="a" href="https://github.com/mohin7?tab=repositories" target="_blank" rel="noreferrer" variant="outline">View All Repositories</SharedButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  icon: string
  name: string
  category: string
  href: string
}

const projects: Project[] = [
  {
    icon: 'cart',
    name: 'e-commerce-vuejs-nuxt3-tailwind',
    category: 'Nuxt 3, Tailwind CSS, e-commerce UI',
    href: 'https://github.com/mohin7/e-commerce-vuejs-nuxt3-tailwind'
  },
  {
    icon: 'book',
    name: 'quran-vue3-tailwind',
    category: 'Vue 3 with Tailwind CSS interface',
    href: 'https://github.com/mohin7/quran-vue3-tailwind'
  },
  {
    icon: 'pen',
    name: 'blog',
    category: 'Vue-based publishing experience',
    href: 'https://github.com/mohin7/blog'
  },
  {
    icon: 'rocket',
    name: 'blog-24',
    category: 'Astro project and content exploration',
    href: 'https://github.com/mohin7/blog-24'
  },
  {
    icon: 'blocks',
    name: 'clean-html-template-with-bootstrap',
    category: 'HTML template system with Bootstrap',
    href: 'https://github.com/mohin7/clean-html-template-with-bootstrap'
  },
  {
    icon: 'storefront',
    name: 'store-html-template',
    category: 'Reusable storefront template work',
    href: 'https://github.com/mohin7/store-html-template'
  }
]
</script>
