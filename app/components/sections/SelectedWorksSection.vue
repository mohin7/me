<template>
  <section id="works" class="relative py-24 md:py-32 overflow-hidden bg-[radial-gradient(rgba(var(--brand-rgb),0.005)_1px,transparent_1px)] [background-size:40px_40px]">
    <!-- Background Abstract Shapes -->
    <div class="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-brand-a/[0.03] blur-[120px] pointer-events-none"></div>
    <div class="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-brand-b/[0.03] blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 class="mb-4 text-4xl font-black tracking-tight md:text-6xl max-w-4xl leading-[0.9]">
            <span class="metallic-text">Selected</span> <span class="brand-text-gradient">Works</span> <br> <span class="metallic-text-soft">&amp; Experiments</span>
          </h2>
          <p class="text-soft max-w-2xl text-xl font-medium opacity-80 mt-6">Design and execution for startups moving at high velocity.</p>
        </div>

        <!-- Carousel Navigation -->
        <div class="flex items-center gap-4 shrink-0">
          <button @click="scrollPrev" class="h-12 w-12 flex items-center justify-center rounded-full border border-subtle bg-panel/50 text-main transition-colors hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a backdrop-blur-md" aria-label="Previous work">
            <Icon name="lucide:arrow-left" class="h-5 w-5" />
          </button>
          <button @click="scrollNext" class="h-12 w-12 flex items-center justify-center rounded-full border border-subtle bg-panel/50 text-main transition-colors hover:bg-brand-a/10 hover:border-brand-a/30 hover:text-brand-a backdrop-blur-md" aria-label="Next work">
            <Icon name="lucide:arrow-right" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Carousel Track -->
      <div ref="carouselRef" class="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <div 
          v-for="(project, idx) in projects" 
          :key="idx" 
          class="flex-none w-[85vw] sm:w-[420px] snap-center sm:snap-start group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-subtle bg-gradient-to-br from-panel/70 via-panel/50 to-panel/10 transition-all duration-700 shadow-2xl shadow-black/5 hover:shadow-2xl hover:shadow-brand-a/20 hover:border-brand-a/50"
        >
          <!-- Premium Grain Noise Overlay (Intensified) -->
          <div class="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
          
          <!-- High-Intensity Brand Glow Layer -->
          <div class="absolute -inset-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(var(--brand-rgb),0.2)_0%,transparent_50%)] mix-blend-soft-light z-0"></div>
          <!-- Project Image Container -->
          <div class="relative aspect-[16/11] overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.name" 
              class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            
            <!-- Floating Index / Year -->
            <div class="absolute top-6 left-6 flex items-baseline gap-2">
               <span class="text-white text-xs font-black uppercase tracking-[0.2em] opacity-40">0{{ idx + 1 }}</span>
               <div class="h-px w-4 bg-white/20"></div>
               <span class="text-white text-[0.6rem] font-bold uppercase tracking-widest opacity-80">{{ project.year }}</span>
            </div>

            <!-- Absolute Hover Button -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <a 
                 :href="project.href" 
                 target="_blank" 
                 class="px-6 py-3 rounded-full bg-white text-black text-sm font-black tracking-tight shadow-xl hover:scale-105 active:scale-95 transition-all"
               >
                 View Project ↗
               </a>
            </div>
          </div>

          <!-- Project Content -->
          <div class="flex-1 p-8 flex flex-col">
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="text-[0.6rem] font-black uppercase tracking-[0.1em] text-brand-a bg-brand-a/5 px-3 py-1 rounded-full border border-brand-a/40">
                {{ tag }}
              </span>
            </div>

            <h3 class="text-main mb-4 text-2xl font-black tracking-tighter leading-tight group-hover:text-brand-a transition-colors">
              {{ project.name }}
            </h3>
            
            <p class="text-soft mb-8 text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity line-clamp-2">
              {{ project.description }}
            </p>

            <div class="mt-auto pt-6 border-t border-subtle flex items-center justify-between">
               <a :href="project.href" target="_blank" class="text-main text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all group/link">
                 Live Preview
                 <Icon name="lucide:arrow-right" class="h-4 w-4 text-brand-a transition-transform group-hover/link:translate-x-1" />
               </a>
               <div class="h-2 w-2 rounded-full bg-emerald-500/40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Private Work Section -->
      <!-- Compact Private Work Showcase -->
      <div class="mt-24 relative">
        <div class="relative group overflow-hidden rounded-[2.5rem] border border-subtle bg-panel/40 backdrop-blur-3xl transition-all duration-700 hover:border-brand-a/30 shadow-2xl">
          
          <!-- Background Abstract Shapes & Gradients -->
          <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-a/[0.08] blur-[80px] group-hover:bg-brand-a/15 transition-all duration-700 pointer-events-none"></div>
          <div class="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-b/[0.05] blur-[80px] pointer-events-none"></div>
          
          <!-- Architectural Grid Pattern -->
          <div class="absolute inset-0 opacity-[0.02] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none">
            <svg width="100%" height="100%" class="stroke-brand-a">
              <defs>
                <pattern id="secure-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke-width="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#secure-grid)" />
            </svg>
          </div>

          <div class="relative z-10 grid md:grid-cols-12 gap-10 md:gap-16 items-center p-10 md:p-14">
            <!-- Left Side: Content -->
            <div class="md:col-span-7">
              <div class="mb-6 inline-flex items-center gap-3 px-3 py-1 rounded-full bg-brand-a/10 border border-brand-a/20">
                <Icon name="lucide:shield-check" class="h-4 w-4 text-brand-a" />
                <span class="text-[0.6rem] font-black uppercase tracking-[0.2em] text-brand-a">Enterprise Security Protocol</span>
              </div>
              
              <h3 class="text-main mb-4 text-4xl font-black tracking-tighter md:text-5xl leading-[0.9]">
                 Production-Grade <br> <span class="brand-text-gradient">Private Solutions</span>
              </h3>
              
              <p class="text-soft mb-10 max-w-xl text-lg font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
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
                <!-- Outer Pulsating Rings -->
                <div class="absolute inset-0 border border-brand-a/5 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
              
                
                <!-- Rotating Tech Lines -->
                <svg class="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] opacity-20" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-dasharray="1 10" stroke-width="0.5" class="text-brand-a" />
                </svg>
                <svg class="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite_reverse] opacity-20" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" stroke-dasharray="4 8" stroke-width="0.5" class="text-brand-b" />
                </svg>

                <!-- Central Core -->
                <div class="absolute inset-8 rounded-[2rem] bg-panel-strong border border-subtle shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                   <div class="text-center relative">
                     <div class="absolute -inset-4 bg-brand-a/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                     <Icon name="lucide:lock" class="h-12 w-12 text-brand-a relative" />
                     <p class="mt-4 text-[0.5rem] font-black uppercase tracking-[0.3em] text-muted block">Locked IP</p>
                   </div>
                </div>

                <!-- Floating Data Nodes -->
                <div class="absolute -top-4 -right-4 h-12 w-12 rounded-xl bg-panel border border-brand-a/20 shadow-lg flex items-center justify-center animate-bounce duration-[3000ms] delay-150">
                   <Icon name="lucide:database" class="h-5 w-5 text-brand-a/60" />
                </div>
                <div class="absolute -bottom-2 -left-6 h-10 w-10 rounded-xl bg-panel border border-brand-b/20 shadow-lg flex items-center justify-center animate-bounce duration-[4000ms] delay-700">
                   <Icon name="lucide:layers" class="h-4 w-4 text-brand-b/60" />
                </div>
                <div class="absolute top-1/2 -right-8 h-8 w-8 rounded-lg bg-panel border border-subtle shadow-lg flex items-center justify-center animate-pulse">
                   <Icon name="lucide:zap" class="h-4 w-4 text-brand-c opacity-40" />
                </div>
              </div>
            </div>
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
    image: "/img/quran_app.png",
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

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
