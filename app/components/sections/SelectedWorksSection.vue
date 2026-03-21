<template>
  <section id="works" class="relative py-24 md:py-32 overflow-hidden bg-[radial-gradient(rgba(var(--brand-rgb),0.005)_1px,transparent_1px)] [background-size:40px_40px]">
    <!-- Background Abstract Shapes -->
    <div class="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-brand-a/[0.03] blur-[120px] pointer-events-none"></div>
    <div class="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-brand-b/[0.03] blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="mb-20">
        <h2 class="text-main mb-4 text-4xl font-black tracking-tight md:text-6xl max-w-4xl leading-[0.9]">
          Selected Works <br> <span class="text-soft opacity-40">& Experiments</span>
        </h2>
        <p class="text-soft max-w-2xl text-xl font-medium opacity-80 mt-6">Design and execution for startups moving at high velocity.</p>
      </div>

      <div class="space-y-32">
        <div 
          v-for="(project, idx) in projects" 
          :key="idx" 
          class="group relative grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          <!-- Text Side -->
          <div :class="idx % 2 === 0 ? 'md:order-1' : 'md:order-2'">
            <div class="mb-8 flex items-center gap-4">
               <span class="text-brand-a text-xs font-black uppercase tracking-[0.2em] underline decoration-2 underline-offset-8">0{{ idx + 1 }}</span>
               <span class="text-muted text-xs font-bold uppercase tracking-widest">{{ project.year }}</span>
            </div>
            
            <h3 class="text-main mb-6 text-4xl font-black tracking-tighter leading-none md:text-6xl group-hover:text-[color:var(--brand-a)] transition-colors duration-500">
              {{ project.name }}
            </h3>
            
            <p class="text-soft mb-10 text-xl font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-12">
              <span v-for="tag in project.tags" :key="tag" class="text-muted text-[0.65rem] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-subtle bg-soft/30 transition group-hover:border-[color:var(--brand-a)]/30 group-hover:text-main">
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
              class="!rounded-full px-10 py-5 text-sm font-bold shadow-sm hover:shadow-brand-a/10"
            >
              Explore Project
              <Icon name="lucide:arrow-up-right" class="ml-2 h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </SharedButton>
          </div>

          <!-- Image Side with Graphics -->
          <div :class="idx % 2 === 0 ? 'md:order-2' : 'md:order-1'" class="relative">
            <!-- Decorative Frames -->
            <div class="absolute -inset-4 border border-brand-a/2 rounded-[3.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700 pointer-events-none"></div>
            <div class="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <path d="M0 120L120 0" stroke="currentColor" stroke-width="0.5" class="text-brand-a" />
                <path d="M20 120L120 20" stroke="currentColor" stroke-width="0.5" class="text-brand-a" />
                <path d="M40 120L120 40" stroke="currentColor" stroke-width="0.5" class="text-brand-a" />
              </svg>
            </div>

            <div class="relative overflow-hidden rounded-[2.5rem] border border-subtle bg-panel shadow-2xl transition duration-700 group-hover:scale-[1.02] group-hover:shadow-brand-a/10 group-hover:border-[color:var(--brand-a)]/30">
              <img 
                :src="project.image" 
                :alt="project.name" 
                class="aspect-[16/10] w-full object-cover grayscale opacity-80 transition duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-32 p-12 rounded-[3rem] bg-panel/30 border border-subtle backdrop-blur-md text-center">
         <p class="text-soft mb-8 text-2xl font-black tracking-tighter opacity-80">My best work is often private — specially crafted for startup founders.</p>
         <SharedButton tag="a" href="https://github.com/mohin7" target="_blank" rel="noreferrer" variant="outline" size="lg" class="!rounded-full px-12 py-5 text-lg font-black tracking-tight">Open Lab Profile</SharedButton>
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
