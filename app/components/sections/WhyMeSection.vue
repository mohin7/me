<template>
  <section id="why-me" class="py-16 md:py-24 bg-page relative overflow-hidden">
    <!-- Architectural Subtle Grid -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px); background-size: 80px 80px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-20 items-end mb-12 md:mb-24">
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
            <span class="text-accent text-[0.65rem] font-black uppercase tracking-[0.5em]">The Strategic Edge</span>
          </div>
          <h2 class="text-main text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8">
            Why partner with <br /> <span class="text-gradient italic serif-font lowercase">Md Mohin Uddin?</span>
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
        
        <!-- Pillar 01: Design-to-Code -->
        <div class="group p-10 rounded-[32px] border border-[var(--border-glass)] bg-panel hover:border-accent/25 transition-all duration-500">
          <div class="mb-8 h-14 w-14">
            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
              <!-- Figma frame -->
              <rect x="6" y="8" width="20" height="28" rx="4" fill="var(--accent)" fill-opacity="0.12" stroke="var(--accent)" stroke-width="1.5"/>
              <rect x="9" y="11" width="14" height="10" rx="2" fill="var(--accent)" fill-opacity="0.25"/>
              <line x1="9" y1="25" x2="23" y2="25" stroke="var(--accent)" stroke-width="1.2" stroke-linecap="round"/>
              <line x1="9" y1="29" x2="18" y2="29" stroke="var(--accent)" stroke-width="1.2" stroke-linecap="round" stroke-opacity="0.5"/>
              <!-- Arrow bridge -->
              <path d="M29 28 L35 28" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M33 25.5 L35.5 28 L33 30.5" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <!-- Code block -->
              <rect x="36" y="18" width="14" height="20" rx="3" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-width="1.5" stroke-opacity="0.6"/>
              <path d="M39 24 L37.5 26 L39 28" stroke="var(--accent)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.7"/>
              <path d="M47 24 L48.5 26 L47 28" stroke="var(--accent)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.7"/>
              <line x1="41" y1="26" x2="45" y2="26" stroke="var(--accent)" stroke-width="1" stroke-linecap="round" stroke-opacity="0.5"/>
            </svg>
          </div>
          <h3 class="text-main text-xl font-black tracking-tight mb-4">Design-to-Code</h3>
          <p class="text-soft text-sm leading-relaxed opacity-70">
            I eliminate the "lost in translation" friction by delivering production-ready Nuxt & Vue code directly from Figma.
          </p>
        </div>

        <!-- Pillar 02: Venture Scale -->
        <div class="group p-10 rounded-[32px] border border-[var(--border-glass)] bg-panel hover:border-accent/25 transition-all duration-500">
          <div class="mb-8 h-14 w-14">
            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
              <!-- Stacked layers -->
              <ellipse cx="28" cy="42" rx="16" ry="4" fill="var(--accent)" fill-opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
              <ellipse cx="28" cy="35" rx="16" ry="4" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)" stroke-width="1.5"/>
              <ellipse cx="28" cy="28" rx="16" ry="4" fill="var(--accent)" fill-opacity="0.3" stroke="var(--accent)" stroke-width="1.5"/>
              <!-- Top highlight -->
              <ellipse cx="28" cy="21" rx="16" ry="4" fill="var(--accent)" fill-opacity="0.5" stroke="var(--accent)" stroke-width="1.5"/>
              <!-- Growth arrow -->
              <path d="M38 14 L42 10 M42 10 L42 14 M42 10 L38 10" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-main text-xl font-black tracking-tight mb-4">Venture Scale</h3>
          <p class="text-soft text-sm leading-relaxed opacity-70">
            Deep experience leading design systems for complex, high-concurrency cloud infrastructure at AppsCode.
          </p>
        </div>

        <!-- Pillar 03: Performance First -->
        <div class="group p-10 rounded-[32px] border border-[var(--border-glass)] bg-panel hover:border-accent/25 transition-all duration-500">
          <div class="mb-8 h-14 w-14">
            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
              <!-- Speedometer arc -->
              <path d="M10 36 A18 18 0 0 1 46 36" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-opacity="0.25"/>
              <path d="M10 36 A18 18 0 0 1 38 18" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
              <!-- Center dot -->
              <circle cx="28" cy="36" r="3" fill="var(--accent)"/>
              <!-- Needle -->
              <line x1="28" y1="36" x2="38" y2="18" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
              <!-- Tick marks -->
              <line x1="10" y1="36" x2="13" y2="36" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.5"/>
              <line x1="28" y1="18" x2="28" y2="21" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.5"/>
              <line x1="46" y1="36" x2="43" y2="36" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.5"/>
              <!-- Zap bolt -->
              <path d="M32 8 L28 14 L31 14 L27 20" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0"/>
            </svg>
          </div>
          <h3 class="text-main text-xl font-black tracking-tight mb-4">Performance First</h3>
          <p class="text-soft text-sm leading-relaxed opacity-70">
            Optimized for human behavior and technical speed. My products are built to load fast and convert users effectively.
          </p>
        </div>

        <!-- Pillar 04: Full Lifecycle -->
        <div class="group p-10 rounded-[32px] border border-[var(--border-glass)] bg-panel hover:border-accent/25 transition-all duration-500">
          <div class="mb-8 h-14 w-14">
            <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
              <!-- Circular lifecycle loop -->
              <circle cx="28" cy="28" r="16" stroke="var(--accent)" stroke-width="1.5" stroke-opacity="0.2" stroke-dasharray="4 3"/>
              <!-- Orbit path with arrow -->
              <path d="M28 12 A16 16 0 1 1 12.5 34" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>
              <path d="M10 32 L12.5 34 L15 31.5" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              <!-- Phase dots -->
              <circle cx="28" cy="12" r="2.5" fill="var(--accent)"/>
              <circle cx="44" cy="28" r="2.5" fill="var(--accent)" fill-opacity="0.6"/>
              <circle cx="28" cy="44" r="2.5" fill="var(--accent)" fill-opacity="0.35"/>
              <circle cx="12" cy="28" r="2.5" fill="var(--accent)" fill-opacity="0.15"/>
            </svg>
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
          <div class="h-12 w-12 rounded-full border-2 border-glass flex items-center justify-center">
             <Icon name="lucide:binary" class="h-5 w-5 text-accent" />
          </div>
          <span class="text-main text-lg font-bold tracking-tight">Engineering design with mathematical precision.</span>
        </div>
        <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" variant="outline" size="lg" class="px-12">
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
