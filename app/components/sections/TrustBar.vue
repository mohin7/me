<template>
  <div class="relative z-20 py-12 md:py-24 -mt-10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- The Cinematic Hub Container -->
      <div class="relative overflow-visible rounded-[32px] md:rounded-[48px] border border-subtle bg-panel/30 backdrop-blur-2xl p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] group">
        
        <!-- Holographic Background Detail -->
        <div class="absolute -top-24 -right-24 h-64 w-64 bg-brand-a/10 blur-[100px] rounded-full group-hover:bg-brand-a/20 transition-all duration-1000"></div>

        <div class="relative z-10 grid lg:grid-cols-[400px_1fr] gap-16 items-center">
          
          <!-- Command Node: Verified Status -->
          <div class="flex flex-col gap-6 shrink-0 relative">
            <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-a/20 bg-brand-a/[0.04] w-fit shadow-inner">
              <div class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-a opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-a"></span>
              </div>
              <span class="text-brand-a text-[0.65rem] font-black uppercase tracking-[0.4em]">Verified Status</span>
            </div>
            
            <div class="space-y-2">
              <h2 class="text-main text-3xl md:text-5xl font-black tracking-tighter leading-none italic">
                Global Impact <br> <span class="text-brand-a">Ecosystem</span>
              </h2>
              <div class="flex items-center gap-4 pt-4">
                <div class="flex flex-col">
                   <span class="text-main text-sm font-black tabular-nums">15+</span>
                   <span class="text-muted text-[0.5rem] font-bold uppercase tracking-widest opacity-40">Active Nodes</span>
                </div>
                <div class="h-8 w-px bg-subtle"></div>
                <div class="flex flex-col">
                   <span class="text-main text-sm font-black tabular-nums">99.9%</span>
                   <span class="text-muted text-[0.5rem] font-bold uppercase tracking-widest opacity-40">Uptime Delivery</span>
                </div>
              </div>
            </div>
          </div>

          <!-- The Infinity Brand Ticker -->
          <div class="relative w-full overflow-hidden">
            <!-- Fade Masks -->
            <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-panel/30 to-transparent z-10"></div>
            <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-panel/30 to-transparent z-10"></div>
            
            <div class="flex gap-16 md:gap-24 animate-ticker whitespace-nowrap py-4">
              <!-- Double duplicate for seamless scroll -->
              <div v-for="i in 3" :key="i" class="flex gap-16 md:gap-24">
                <div v-for="l in logos" :key="l.name" class="flex items-center gap-4 group/logo cursor-none">
                  <div class="h-12 w-12 rounded-2xl bg-soft border border-subtle flex items-center justify-center group-hover/logo:border-brand-a/40 transition-all duration-500">
                    <Icon :name="l.icon" class="h-6 w-6 text-muted group-hover/logo:text-brand-a" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-main font-black tracking-tighter text-xl leading-none">{{ l.name }}</span>
                    <span class="text-[0.55rem] font-bold text-muted uppercase tracking-[0.2em] mt-1.5 opacity-40">{{ l.role }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Decorative "Global Ticker" strip at bottom -->
        <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-a/20 to-transparent"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  { name: 'AppsCode', icon: 'lucide:box', role: 'PLATFORM_HUB' },
  { name: 'KubeDB', icon: 'lucide:database', role: 'CORE_STORAGE' },
  { name: 'Stash', icon: 'lucide:shield-check', role: 'SECURITY_OPS' },
  { name: 'ByteBuilders', icon: 'lucide:cpu', role: 'SYSTEM_ARCH' },
  { name: 'CloudSoft', icon: 'lucide:cloud', role: 'INFRA_ENGINE' },
]
</script>

<style scoped>
.animate-ticker {
  animation: ticker 40s linear infinite;
}

@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-ticker:hover {
  animation-play-state: paused;
}
</style>


