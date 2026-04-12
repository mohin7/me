<template>
  <section id="about" class="py-24 md:py-32 bg-page">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="mb-4 text-4xl font-black tracking-tight md:text-5xl text-main">Design & Execution</h2>
        <p class="text-soft max-w-2xl text-lg font-medium opacity-80">A hybrid approach to leading design and building robust interfaces.</p>
      </div>

      <div class="grid gap-6 md:grid-cols-12">
        <!-- Main Bento Card -->
        <div class="relative overflow-hidden md:col-span-8 md:row-span-2 rounded-[24px] border border-subtle bg-panel p-10 md:p-14 transition-all duration-500 hover:border-brand-a/40 group cursor-default">
          <div class="relative z-10">
            <div class="mb-12 inline-flex h-14 w-14 items-center justify-center rounded-[16px] bg-soft border border-subtle text-brand-a group-hover:scale-110 transition-transform">
              <Icon name="lucide:palette" class="h-7 w-7" />
            </div>
            
            <h3 class="text-main mb-6 text-4xl font-black tracking-tight leading-tight">
              Design Leadership <br> <span class="text-brand-a">& Technical Craft</span>
            </h3>
            
            <p class="text-soft max-w-xl text-lg font-medium leading-relaxed mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
               As Head of Design at <span class="text-main font-semibold">AppsCode</span>, I scale product systems from Figma to Production. Formerly built foundations as a Frontend Developer at <span class="text-main font-semibold">Cloud Software Solutions</span>.
            </p>
            
            <div class="flex flex-wrap gap-2">
               <span v-for="skill in ['NuxtJS', 'VueJS', 'Tailwind', 'Design Systems', 'UI/UX Strategy']" :key="skill" class="bg-soft border-subtle px-4 py-2 rounded-full border text-[0.65rem] font-bold uppercase tracking-widest text-muted transition hover:border-brand-a/30 hover:text-brand-a">{{ skill }}</span>
            </div>
          </div>
          
          <!-- Subtle Accent Pattern -->
          <div class="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
            <Icon name="lucide:layout" class="h-64 w-64" />
          </div>
        </div>

        <!-- Metric Card: Years -->
        <div class="relative overflow-hidden flex flex-col justify-center items-center md:col-span-4 rounded-[24px] border border-subtle bg-panel p-10 text-center transition-all duration-500 hover:border-brand-a/40 group cursor-default">
           <div class="relative z-10">
              <div class="relative inline-block mb-4">
                <p class="text-brand-a text-6xl font-black tracking-tighter group-hover:scale-110 transition-transform">7+</p>
                <span class="handwriting absolute -right-16 top-0 text-brand-a text-2xl rotate-12 whitespace-nowrap opacity-60">Proven Results</span>
              </div>
              <p class="text-main text-xl font-bold tracking-tight">Years of Craft</p>
              <p class="text-muted text-[0.65rem] font-bold uppercase tracking-widest opacity-60">Industry Veteran</p>
           </div>
        </div>

        <!-- Location Card -->
        <div class="relative overflow-hidden flex flex-col justify-center items-center md:col-span-4 rounded-[24px] border border-subtle bg-panel p-10 text-center transition-all duration-500 hover:border-brand-a/40 group cursor-default">
           <div class="relative z-10 h-14 w-14 mb-6 flex items-center justify-center rounded-full bg-soft border border-subtle text-brand-a group-hover:scale-110 transition-transform">
             <Icon name="lucide:map-pin" class="h-6 w-6" />
           </div>
           <p class="text-main text-2xl font-black tracking-tight mb-1">Dhaka, BD</p>
           <p class="text-muted text-[0.65rem] font-bold uppercase tracking-widest opacity-60">Global Operations</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

