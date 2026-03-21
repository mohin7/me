<template>
  <section id="about" class="py-24 md:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <h2 class="text-main mb-4 text-4xl font-black tracking-tight uppercase italic md:text-5xl">Design & Execution</h2>
        <p class="text-soft max-w-2xl text-lg font-medium">A hybrid approach to leading design and building robust interfaces.</p>
      </div>

      <div class="grid gap-6 md:grid-cols-12 md:grid-rows-2">
        <!-- Big Bento Card: Main Hybrid Mission -->
        <div class="bg-panel/40 border-subtle md:col-span-8 md:row-span-2 rounded-[2.5rem] border p-12 transition-all hover:bg-panel group">
          <div class="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)] group-hover:scale-105 group-hover:rotate-3">
            <SharedIcon name="palette" class="h-8 w-8" />
          </div>
          <h3 class="text-main mb-4 text-4xl font-extrabold tracking-tighter uppercase italic md:text-5xl">Bridging the gap <br> from Figma to Production</h3>
          <p class="text-soft max-w-xl text-xl font-medium leading-[1.4]">
             As Head of Design at AppsCode, I build scalable visual systems so teams can ship faster with consistency. My engineering background helps me design interfaces developers can build easily.
          </p>
          
          <div class="mt-12 flex flex-wrap gap-3">
             <span v-for="skill in ['Nuxt', 'Vue', 'Figma', 'Product Strategy', 'Open Source']" :key="skill" class="bg-soft border-subtle px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest text-muted">{{ skill }}</span>
          </div>
        </div>

        <!-- Small Bento Card: Location -->
        <div class="bg-panel border-subtle flex flex-col justify-center items-center md:col-span-4 rounded-[2.5rem] border p-8 transition-all hover:bg-soft">
           <SharedIcon name="compass" class="h-10 w-10 text-[color:var(--brand-a)] mb-4" />
           <p class="text-main text-lg font-black uppercase italic tracking-tight">Dhaka, BD</p>
           <p class="text-muted text-xs font-bold uppercase tracking-widest mt-2">Remote Friendly</p>
        </div>

        <!-- Small Bento Card: Contribution -->
        <div class="bg-panel border-subtle md:col-span-4 rounded-[2.5rem] border p-10 transition-all hover:bg-soft">
           <p class="text-[color:var(--brand-a)] text-5xl font-black tracking-tighter italic">79+</p>
           <p class="text-main text-lg font-black uppercase italic tracking-tight mt-2">Public Repositories</p>
           <p class="text-muted text-xs font-bold uppercase tracking-widest mt-2">Active Developer Ecosystem</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
