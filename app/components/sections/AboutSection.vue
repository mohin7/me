<template>
  <section id="about" class="py-24 md:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <h2 class="text-main mb-4 text-4xl font-black tracking-tight uppercase md:text-5xl">Design & Execution</h2>
        <p class="text-soft max-w-2xl text-lg font-medium">A hybrid approach to leading design and building robust interfaces.</p>
      </div>

      <div class="grid gap-6 md:grid-cols-12 md:grid-rows-2">
        <!-- Big Bento Card: Main Hybrid Mission -->
        <div class="bg-panel/40 border-subtle md:col-span-8 md:row-span-2 rounded-[2.5rem] border p-12 transition-all hover:bg-panel group">
          <div class="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)] group-hover:scale-105 group-hover:rotate-3">
            <Icon name="lucide:palette" class="h-8 w-8" />
          </div>
          <h3 class="text-main mb-4 text-4xl font-extrabold tracking-tighter uppercase md:text-5xl">Design Leadership <br> & Technical Craft</h3>
          <p class="text-soft max-w-xl text-xl font-medium leading-[1.4]">
             As Head of Design at <span class="text-main">AppsCode</span>, I scale product systems from Figma to Production. Formerly built foundations as a Frontend Developer at <span class="text-main opacity-60">Cloud Software Solutions</span>.
          </p>
          
          <div class="mt-12 flex flex-wrap gap-3">
             <span v-for="skill in ['NuxtJS', 'Vuejs', 'Tailwind', 'Bulma', 'Bootstrap', 'Design Systems']" :key="skill" class="bg-soft border-subtle px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest text-muted">{{ skill }}</span>
          </div>
        </div>

        <!-- Small Bento Card: Location -->
        <div class="bg-panel border-subtle flex flex-col justify-center items-center md:col-span-4 rounded-[2.5rem] border p-8 transition-all hover:bg-soft">
           <Icon name="lucide:compass" class="h-10 w-10 text-[color:var(--brand-a)] mb-4" />
           <p class="text-main text-lg font-black uppercase tracking-tight">Dhaka, BD</p>
           <p class="text-muted text-xs font-bold uppercase tracking-widest mt-2">Home Base</p>
        </div>

        <!-- Small Bento Card: Experience -->
        <div class="bg-panel border-subtle md:col-span-4 rounded-[2.5rem] border p-10 transition-all hover:bg-soft">
           <p class="text-[color:var(--brand-a)] text-5xl font-black tracking-tighter">8+</p>
           <p class="text-main text-lg font-black uppercase tracking-tight mt-2">Years of Experience</p>
           <p class="text-muted text-xs font-bold uppercase tracking-widest mt-2">Industry Veteran</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
