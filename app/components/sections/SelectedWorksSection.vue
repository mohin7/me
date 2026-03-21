<template>
  <section id="work" class="py-24 md:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <h2 class="text-main mb-4 text-4xl font-black tracking-tight uppercase md:text-5xl">Selected Works</h2>
        <p class="text-soft max-w-2xl text-lg font-medium">Case studies on how I turn complex product ideas into high-converting MVPs.</p>
      </div>
      
      <div class="grid gap-16">
        <div
          v-for="(project, idx) in projects" 
          :key="idx"
          class="group grid md:grid-cols-2 gap-12 items-center"
        >
          <!-- Text Side -->
          <div :class="idx % 2 === 0 ? 'order-1' : 'order-2'">
            <div class="mb-6 flex items-center gap-3">
               <span class="text-xs font-black uppercase tracking-widest text-[color:var(--brand-a)]">Product Design</span>
               <span class="h-px w-8 bg-subtle"></span>
               <span class="text-xs font-bold uppercase tracking-widest text-muted">{{ project.year }}</span>
            </div>
            
            <h3 class="text-main mb-6 text-4xl font-black tracking-tighter uppercase leading-[0.9] md:text-6xl group-hover:text-[color:var(--brand-a)] transition-colors">
              {{ project.name }}
            </h3>
            
            <p class="text-soft mb-8 text-xl font-medium leading-relaxed">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-10">
              <span v-for="tag in project.tags" :key="tag" class="text-muted text-xs font-bold uppercase tracking-[0.1em] px-4 py-2 rounded-full border border-subtle bg-soft transition group-hover:border-[color:var(--brand-a)]/30 group-hover:text-main">
                {{ tag }}
              </span>
            </div>

            <SharedButton 
              tag="a" 
              :href="project.href" 
              target="_blank" 
              rel="noreferrer" 
              variant="outline" 
              size="lg" 
              class="!rounded-full px-8 py-5 text-sm font-bold shadow-md hover:shadow-brand-a/10"
            >
              View live experiment 
              <span class="ml-2 font-normal text-xl leading-none opacity-50">↗</span>
            </SharedButton>
          </div>

          <!-- Image Side -->
          <div :class="idx % 2 === 0 ? 'order-2' : 'order-1'">
            <div class="relative w-full overflow-hidden rounded-[2.5rem] border border-subtle bg-panel/50 backdrop-blur-sm shadow-2xl transition duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-brand-a/10 aspect-[16/10]">
              <img 
                :src="project.image" 
                :alt="project.name" 
                class="h-full w-full object-cover grayscale opacity-70 transition duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-page)]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-24 text-center">
         <p class="text-soft mb-8 text-xl font-bold uppercase tracking-tighter">My best work is often private — specially crafted for startup founders.</p>
         <SharedButton tag="a" href="https://github.com/mohin7" target="_blank" rel="noreferrer" variant="outline" size="lg" class="!rounded-full px-12 py-5 text-lg font-black uppercase tracking-tight">Open Lab Profile</SharedButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    name: "E-commerce — Nuxt 3 & Tailwind",
    year: "2024",
    description: "A high-performance e-commerce storefront built with Nuxt 3, featuring a modern shopping experience and responsive UI.",
    tags: ["Nuxt 3", "Tailwind CSS", "Storefront"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
    href: "https://github.com/mohin7/e-commerce-vuejs-nuxt3-tailwind"
  },
  {
    name: "Holy Quran — Vue 3 App",
    year: "2024",
    description: "An elegant, distraction-free reading experience for the Holy Quran, optimized for mobile and web with Vue 3.",
    tags: ["Vue 3", "Tailwind CSS", "Web App"],
    image: "https://images.unsplash.com/photo-1591154665851-5120668eb40a?auto=format&fit=crop&q=80&w=1200",
    href: "https://github.com/mohin7/quran-vue3-tailwind"
  },
  {
    name: "Clean HTML — Bootstrap System",
    year: "2023",
    description: "A reusable, professional-grade HTML template system built with Bootstrap for rapid product prototyping.",
    tags: ["Bootstrap", "HTML/CSS", "Design System"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
    href: "https://github.com/mohin7/clean-html-template-with-bootstrap"
  }
]
</script>
