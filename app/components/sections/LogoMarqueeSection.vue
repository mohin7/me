<template>
  <section class="py-12 border-y border-subtle bg-panel/10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 mb-8">
      <p class="text-muted text-[0.65rem] font-black uppercase tracking-[0.3em] text-center">Trusted by forward-thinking teams</p>
    </div>
    <div class="flex whitespace-nowrap">
      <div class="animate-marquee-slow flex gap-16 items-center pr-16">
        <div v-for="logo in logos" :key="logo" class="text-muted text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">
          {{ logo }}
        </div>
        <!-- Duplicate for seamless loop -->
        <div v-for="logo in logos" :key="`dup-${logo}`" class="text-muted text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity">
          {{ logo }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = ['AppsCode', 'ByteBuilders', 'KubeVault', 'Stash', 'KubeDB', 'OpenSearch', 'Kubicorn', 'AceUI']
</script>

<style scoped>
.animate-marquee-slow {
  animation: marquee 40s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
</style>
