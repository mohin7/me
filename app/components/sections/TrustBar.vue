<template>
  <div class="border-y border-subtle bg-page/50 backdrop-blur-sm relative z-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        <!-- Label -->
        <div class="flex items-center gap-3 shrink-0">
          <div class="h-1 w-8 bg-brand-a rounded-full"></div>
          <span class="text-[0.65rem] font-black uppercase tracking-[0.25em] text-muted">Trusted by Innovators</span>
        </div>

        <!-- Logos (Static, Premium Grayscale) -->
        <div class="flex flex-wrap items-center justify-center md:justify-end gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           <!-- Using neutral placeholders or icons that look like tech brands -->
           <div v-for="l in logos" :key="l.name" class="flex items-center gap-2 group cursor-help" :title="l.name">
              <Icon :name="l.icon" class="h-6 w-6 transition-transform group-hover:scale-110" />
              <span class="text-main font-bold tracking-tighter text-lg">{{ l.name }}</span>
           </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  { name: 'AppsCode', icon: 'lucide:box' },
  { name: 'KubeDB', icon: 'lucide:database' },
  { name: 'Stash', icon: 'lucide:shield' },
  { name: 'ByteBuilders', icon: 'lucide:cpu' },
]
</script>
