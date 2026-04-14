<template>
  <section id="why-me" class="py-16 md:py-24 bg-page relative overflow-hidden">
    <!-- Architectural Subtle Grid -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px); background-size: 80px 80px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-[1fr_400px] gap-20 items-end mb-24">
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
            <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.5em]">The Strategic Edge</span>
          </div>
          <h2 class="text-main text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
            Why partner with <br /> <span class="text-soft italic serif-font lowercase">Md Mohin Uddin?</span>
          </h2>
          <p class="text-soft text-xl font-medium leading-relaxed opacity-80">
            I don't just design interfaces; I engineer high-performance products that bridge the critical gap between visionary design and scalable code.
          </p>
        </div>
        
        <div class="hidden lg:flex flex-col items-end text-right space-y-2 opacity-20">
           <span class="text-[0.6rem] font-black uppercase tracking-widest">ADVANTAGE_MATRIX_v04</span>
           <div class="h-px w-32 bg-accent"></div>
           <span class="text-[0.6rem] font-black uppercase tracking-widest">STATUS: HIGH_LEVERAGE</span>
        </div>
      </div>

      <!-- The Advantage Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Pillar 01: Product Bridge -->
        <div class="group p-10 rounded-[32px] border border-glass bg-panel/30 backdrop-blur-3xl hover:border-accent/30 transition-all duration-700">
          <div class="h-14 w-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-accent-fg transition-all">
            <Icon name="lucide:cable" class="h-7 w-7" />
          </div>
          <h3 class="text-main text-xl font-black tracking-tight mb-4">Design-to-Code</h3>
          <p class="text-soft text-sm leading-relaxed opacity-70">
            I eliminate the "lost in translation" friction by delivering production-ready Nuxt & Vue code directly from Figma.
          </p>
        </div>

        <!-- Pillar 02: Venture Scale -->
        <div class="group p-10 rounded-[32px] border border-glass bg-panel/30 backdrop-blur-3xl hover:border-accent/30 transition-all duration-700">
          <div class="h-14 w-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-accent-fg transition-all">
            <Icon name="lucide:layers" class="h-7 w-7" />
          </div>
          <h3 class="text-main text-xl font-black tracking-tight mb-4">Venture Scale</h3>
          <p class="text-soft text-sm leading-relaxed opacity-70">
            Deep experience leading design systems for complex, high-concurrency cloud infrastructure at AppsCode.
          </p>
        </div>

        <!-- Pillar 03: Performance First -->
        <div class="group p-10 rounded-[32px] border border-glass bg-panel/30 backdrop-blur-3xl hover:border-accent/30 transition-all duration-700">
          <div class="h-14 w-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-accent-fg transition-all">
            <Icon name="lucide:zap" class="h-7 w-7" />
          </div>
          <h3 class="text-main text-xl font-black tracking-tight mb-4">Performance First</h3>
          <p class="text-soft text-sm leading-relaxed opacity-70">
            Optimized for human behavior and technical speed. My products are built to load fast and convert users effectively.
          </p>
        </div>

        <!-- Pillar 04: Full Lifecycle -->
        <div class="group p-10 rounded-[32px] border border-glass bg-panel/30 backdrop-blur-3xl hover:border-accent/30 transition-all duration-700">
          <div class="h-14 w-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-accent-fg transition-all">
            <Icon name="lucide:refresh-ccw" class="h-7 w-7" />
          </div>
          <h3 class="text-main text-xl font-black tracking-tight mb-4">Full Lifecycle Craft</h3>
          <p class="text-soft text-sm leading-relaxed opacity-70">
            From initial discovery and strategy to deployment and scale. I own the entire success of the product interface.
          </p>
        </div>

      </div>

      <!-- Conceptual Footer Overlay -->
      <div class="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 p-10 border border-glass rounded-[40px] bg-accent/5">
        <div class="flex items-center gap-6">
          <div class="h-12 w-12 rounded-full border-2 border-accent/20 flex items-center justify-center">
             <Icon name="lucide:binary" class="h-5 w-5 text-accent" />
          </div>
          <span class="text-main text-lg font-bold tracking-tight">Engineering design with mathematical precision.</span>
        </div>
        <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" target="_blank" variant="outline" size="lg" class="px-12">
          Discuss Your Roadmap
          <template #right>
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </template>
        </SharedButton>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
</style>
