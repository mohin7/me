<template>
  <section id="about" class="py-24 md:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <h2 class="text-main mb-4 text-4xl font-black tracking-tight md:text-6xl max-w-4xl">Design & <span class="brand-text-gradient">Execution</span></h2>
        <p class="text-soft max-w-2xl text-lg font-medium">A hybrid approach to leading design and building robust interfaces.</p>
      </div>

      <div class="grid gap-6 md:grid-cols-12">
        <!-- Big Bento Card: Main Hybrid Mission -->
        <div class="bg-panel/40 border-subtle relative overflow-hidden md:col-span-8 md:row-span-2 rounded-[2.5rem] border p-10 md:p-14 transition-all hover:bg-panel group bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)]">
          <!-- Floating Brand Blob -->
          <div class="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[color:var(--brand-a)]/[0.03] blur-[100px] pointer-events-none group-hover:bg-[color:var(--brand-a)]/10 transition-all duration-700"></div>
          
          <div class="relative z-10">
            <div class="mb-12 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)] group-hover:scale-110 group-hover:rotate-6 transition-all">
              <Icon name="lucide:palette" class="h-8 w-8" />
            </div>
            
            <h3 class="text-main mb-6 text-4xl font-extrabold tracking-tighter md:text-6xl leading-[0.9]">
              Design Leadership <br> <span class="text-[color:var(--brand-a)]">& Technical Craft</span>
            </h3>
            
            <p class="text-soft max-w-xl text-xl font-medium leading-[1.5] mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
               As Head of Design at <span class="text-main">AppsCode</span>, I scale product systems from Figma to Production. Formerly built foundations as a Frontend Developer at <span class="text-main opacity-60">Cloud Software Solutions</span>.
            </p>
            
            <div class="flex flex-wrap gap-2">
               <span v-for="skill in ['NuxtJS', 'Vuejs', 'Tailwind', 'Bulma', 'Bootstrap', 'Design Systems']" :key="skill" class="bg-soft border-subtle px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest text-muted transition hover:border-[color:var(--brand-a)]/30 hover:text-main">{{ skill }}</span>
            </div>
          </div>
        </div>

        <!-- Small Bento Card: Location -->
        <div class="bg-panel/40 border-subtle relative overflow-hidden flex flex-col justify-center items-center md:col-span-4 rounded-[2.5rem] border p-10 text-center transition-all hover:bg-panel group bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)]">
           <!-- Abstract Lines -->
           <svg class="absolute right-0 bottom-0 opacity-[0.015] group-hover:opacity-[0.05] transition-opacity" width="120" height="120" viewBox="0 0 120 120" fill="none">
             <circle cx="120" cy="120" r="100" stroke="currentColor" stroke-width="2" />
             <circle cx="120" cy="120" r="70" stroke="currentColor" stroke-width="2" />
             <circle cx="120" cy="120" r="40" stroke="currentColor" stroke-width="2" />
           </svg>
           
           <div class="relative z-10 h-16 w-16 mb-6 flex items-center justify-center rounded-full bg-brand-a/5 text-[color:var(--brand-a)] group-hover:scale-110 transition-transform">
             <Icon name="lucide:map-pin" class="h-8 w-8" />
           </div>
           <p class="text-main text-2xl font-black tracking-tight mb-1">Dhaka, BD</p>
           <p class="text-muted text-xs font-bold uppercase tracking-widest">Global Operations</p>
        </div>

        <!-- Small Bento Card: Experience -->
        <div class="bg-panel/40 border-subtle relative overflow-hidden flex flex-col justify-center items-center md:col-span-4 rounded-[2.5rem] border p-10 text-center transition-all hover:bg-panel group bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)]">
           <!-- Subtle Pulse Shape -->
           <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-[color:var(--brand-a)]/[0.015] blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
           
           <div class="relative z-10">
             <div class="relative inline-block">
               <p class="text-[color:var(--brand-a)] text-6xl font-black tracking-tighter mb-2 group-hover:scale-110 transition-transform">8+</p>
               <span class="handwriting absolute -right-16 top-0 text-brand-a text-2xl rotate-12 whitespace-nowrap opacity-70">Proven Results</span>
             </div>
             <p class="text-main text-lg font-black tracking-tight mb-1">Years of Craft</p>
             <p class="text-muted text-xs font-bold uppercase tracking-widest">Industry Veteran</p>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
