<template>
  <section id="works" class="relative py-24 md:py-32 overflow-hidden bg-page">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 class="mb-4 text-4xl font-black tracking-tight md:text-5xl max-w-4xl text-main leading-tight">
            Selected <span class="text-brand-a">Works</span> <br> & Experiments
          </h2>
          <p class="text-soft max-w-2xl text-lg font-medium opacity-80 mt-6">Design and execution for startups moving at high velocity.</p>
        </div>

        <!-- Carousel Navigation -->
        <div class="flex items-center gap-4 shrink-0">
          <button @click="scrollPrev" class="h-12 w-12 flex items-center justify-center rounded-full border border-subtle bg-panel text-soft transition-all hover:bg-soft hover:text-main" aria-label="Previous work">
            <Icon name="lucide:arrow-left" class="h-5 w-5" />
          </button>
          <button @click="scrollNext" class="h-12 w-12 flex items-center justify-center rounded-full border border-subtle bg-panel text-soft transition-all hover:bg-soft hover:text-main" aria-label="Next work">
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Carousel Track -->
      <div ref="carouselRef" class="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <div 
          v-for="(project, idx) in projects" 
          :key="idx" 
          class="flex-none w-[85vw] sm:w-[420px] snap-center sm:snap-start group relative flex flex-col overflow-hidden rounded-[24px] bg-panel border border-subtle transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-brand-a/30"
        >
          <!-- Project Image Container -->
          <div class="relative aspect-[16/11] overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.name" 
              class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            
            <!-- Metadata Badge -->
            <div class="absolute top-6 left-6 flex items-center gap-2">
               <span class="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.6rem] font-bold px-2 py-1 rounded-full uppercase tracking-widest">{{ project.year }}</span>
            </div>

            <!-- Absolute Hover Button -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <a 
                 :href="project.href" 
                 target="_blank" 
                 class="px-6 py-2 rounded-full bg-white text-black text-[0.8rem] font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
               >
                 View Project ↗
               </a>
            </div>
          </div>

          <!-- Project Content -->
          <div class="flex-1 p-8 flex flex-col">
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="text-[0.6rem] font-bold uppercase tracking-wider text-muted bg-soft px-3 py-1 rounded-full border border-subtle">
                {{ tag }}
              </span>
            </div>

            <h3 class="text-main mb-4 text-2xl font-bold tracking-tight group-hover:text-brand-a transition-colors">
              {{ project.name }}
            </h3>
            
            <p class="text-soft mb-8 text-sm font-medium leading-relaxed opacity-80 line-clamp-2">
              {{ project.description }}
            </p>

            <div class="mt-auto pt-6 border-t border-subtle flex items-center justify-between">
               <a :href="project.href" target="_blank" class="text-main text-[0.7rem] font-bold uppercase tracking-widest flex items-center gap-2 group/link">
                 Live Preview
                 <Icon name="lucide:arrow-right" class="h-4 w-4 text-brand-a transition-transform group-hover/link:translate-x-1" />
               </a>
               <div class="h-2 w-2 rounded-full bg-emerald-500/40"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Private Work Showcase -->
      <div class="mt-24 relative">
        <div class="relative group overflow-hidden rounded-[24px] bg-panel border border-subtle p-10 md:p-14 transition-all duration-500 hover:border-brand-a/40">
          <div class="relative z-10 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            
            <!-- Left Side: Content -->
            <div class="md:col-span-7">
              <div class="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-soft border border-subtle">
                <Icon name="lucide:shield-check" class="h-4 w-4 text-brand-a" />
                <span class="text-[0.6rem] font-bold uppercase tracking-widest text-muted">Secured via Protocol</span>
              </div>
              
              <h3 class="text-main mb-4 text-4xl font-black tracking-tight md:text-5xl leading-tight">
                 Production-Grade <br> <span class="text-brand-a">Private Solutions</span>
              </h3>
              
              <p class="text-soft mb-10 max-w-xl text-lg font-medium leading-relaxed opacity-80">
                Deep-tech architectures and core product designs for startups moving at venture-scale. Secured under NDA to protect proprietary intellectual property.
              </p>
              
              <div class="flex flex-wrap items-center gap-4">
                <SharedButton 
                  tag="a" 
                  href="https://github.com/mohin7" 
                  target="_blank" 
                  variant="primary" 
                  size="md"
                >
                  Technical Lab
                  <template #right>
                    <Icon name="lucide:arrow-right" class="h-4 w-4" />
                  </template>
                </SharedButton>
                
                <SharedButton 
                  tag="a" 
                  href="mailto:hello.mohin4@gmail.com"
                  variant="outline" 
                  size="md"
                >
                  Request Full Deck
                </SharedButton>
              </div>
            </div>

            <!-- Right Side: Graphic Visualization -->
            <div class="md:col-span-5 relative">
              <div class="relative aspect-square max-w-[280px] mx-auto">
                <!-- Architectural Visual -->
                <div class="absolute inset-0 border border-subtle rounded-full opacity-20"></div>
                
                <!-- Central Core -->
                <div class="absolute inset-8 rounded-full bg-soft border border-subtle shadow-sm flex items-center justify-center">
                   <div class="text-center">
                     <Icon name="lucide:lock" class="h-10 w-10 text-brand-a opacity-80" />
                     <p class="mt-3 text-[0.5rem] font-bold uppercase tracking-widest text-muted">Locked IP</p>
                   </div>
                </div>

                <!-- Floating Accents -->
                <div class="absolute -top-4 -right-4 h-12 w-12 rounded-2xl bg-panel border border-subtle shadow-lg flex items-center justify-center">
                   <Icon name="lucide:database" class="h-5 w-5 text-brand-a opacity-40" />
                </div>
                <div class="absolute -bottom-2 -left-6 h-10 w-10 rounded-2xl bg-panel border border-subtle shadow-lg flex items-center justify-center">
                   <Icon name="lucide:layers" class="h-4 w-4 text-brand-a opacity-40" />
                </div>
              </div>
            </div>
          </div>
          
          <!-- Subtle Accent Pattern -->
          <div class="absolute -right-20 -bottom-20 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
            <Icon name="lucide:layout" class="h-96 w-96 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const carouselRef = ref<HTMLElement | null>(null)

const scrollNext = () => {
  if (!carouselRef.value || !carouselRef.value.children[0]) return
  const cardWidth = (carouselRef.value.children[0] as HTMLElement).clientWidth
  carouselRef.value.scrollBy({ left: cardWidth + 32, behavior: 'smooth' })
}

const scrollPrev = () => {
  if (!carouselRef.value || !carouselRef.value.children[0]) return
  const cardWidth = (carouselRef.value.children[0] as HTMLElement).clientWidth
  carouselRef.value.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' })
}

const projects = [
  {
    name: "AppsCode.com Platform",
    year: "2024",
    description: "Designed and engineered the central cloud platform for AppsCode, streamlining Kubernetes-native deployments and toolchains for enterprise clients.",
    tags: ["UI/UX Design", "Vue.js", "Cloud Platform"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    href: "https://appscode.com"
  },
  {
    name: "KubeDB — Database Ops",
    year: "2023",
    description: "Built the comprehensive product website and user dashboard for KubeDB, simplifying production-grade database management on Kubernetes.",
    tags: ["Product Design", "Nuxt", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    href: "https://kubedb.com"
  },
  {
    name: "E-commerce Storefront",
    year: "2024",
    description: "A high-performance e-commerce storefront built with Nuxt 3, featuring a modern shopping experience and responsive UI.",
    tags: ["Nuxt 3", "Tailwind CSS", "Storefront"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
    href: "https://github.com/mohin7/e-commerce-vuejs-nuxt3-tailwind"
  },
  {
    name: "Holy Quran App",
    year: "2024",
    description: "An elegant, distraction-free reading experience for the Holy Quran, optimized for mobile and web with Vue 3.",
    tags: ["Vue 3", "Tailwind CSS", "Web App"],
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=1200",
    href: "https://github.com/mohin7/quran-vue3-tailwind"
  },
  {
    name: "Clean HTML System",
    year: "2023",
    description: "A reusable, professional-grade HTML template system built with Bootstrap for rapid product prototyping.",
    tags: ["Bootstrap", "HTML/CSS", "Design System"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
    href: "https://github.com/mohin7/clean-html-template-with-bootstrap"
  }
]
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
