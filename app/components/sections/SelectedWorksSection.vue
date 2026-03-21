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
            <div class="mb-8 flex items-center gap-4 relative">
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
                  class="!rounded-full px-8 py-4 text-sm font-bold tracking-tight shadow-brand-a/20"
                >
                  Technical Lab
                  <Icon name="lucide:arrow-right" class="ml-2 h-4 w-4" />
                </SharedButton>
                
                <SharedButton 
                  tag="a" 
                  href="mailto:hello.mohin4@gmail.com"
                  variant="outline" 
                  size="md" 
                  class="!rounded-full px-8 py-4 text-sm font-bold tracking-tight border-subtle hover:border-brand-a/40"
                >
                  Request Full Deck
                </SharedButton>
              </div>
            </div>

            <!-- Right Side: Graphic Visualization -->
            <div class="md:col-span-5 relative">
              <div class="relative aspect-square max-w-[280px] mx-auto">
                <!-- Outer Pulsating Rings -->
                <div class="absolute inset-0 border border-brand-a/10 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></div>
                <div class="absolute inset-4 border border-brand-b/10 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
                
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
