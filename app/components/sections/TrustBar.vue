<template>
  <div class="relative z-20 py-12 md:py-20 -mt-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- The Glass Pill Container -->
      <div class="relative overflow-hidden rounded-[40px] border border-subtle bg-panel/40 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group">
        
        <!-- Abstract Decoration -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.03] select-none text-[8rem] font-black text-main flex items-center justify-center tracking-tighter italic">
          STRATEGIC ALIGNMENT
        </div>

        <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <!-- Identification -->
          <div class="flex flex-col gap-2 shrink-0 text-center lg:text-left">
            <div class="flex items-center justify-center lg:justify-start gap-3">
              <div class="h-2 w-2 rounded-full bg-brand-a animate-pulse shadow-[0_0_10px_var(--brand-a)]"></div>
              <span class="text-brand-a text-[0.6rem] font-black uppercase tracking-[0.4em]">Verified Ecosystem</span>
            </div>
            <p class="text-main text-lg font-black tracking-tighter">Global Impact Hub</p>
          </div>

          <!-- The Brand Grid -->
          <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
             <div v-for="l in logos" :key="l.name" class="flex items-center gap-2 group/logo cursor-help transition-all duration-500 hover:scale-105" :title="l.name">
                <Icon :name="l.icon" class="h-6 w-6 text-muted group-hover/logo:text-brand-a transition-colors" />
                <div class="flex flex-col">
                  <span class="text-main font-black tracking-tighter text-base leading-none">{{ l.name }}</span>
                  <span class="text-[0.5rem] font-bold text-muted uppercase tracking-[0.2em] mt-1 opacity-40">{{ l.role }}</span>
                </div>
             </div>
          </div>

          <!-- Secondary Metric -->
          <div class="hidden xl:flex flex-col items-end shrink-0 pl-12 border-l border-subtle">
             <span class="text-main text-2xl font-black tracking-tighter leading-none">500M+</span>
             <span class="text-muted text-[0.55rem] font-bold uppercase tracking-widest mt-1 opacity-60">Lines of Code Deflected</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  { name: 'AppsCode', icon: 'lucide:box', role: 'PLATFORM' },
  { name: 'KubeDB', icon: 'lucide:database', role: 'STORAGE' },
  { name: 'Stash', icon: 'lucide:shield-check', role: 'SECURITY' },
  { name: 'ByteBuilders', icon: 'lucide:cpu', role: 'ENGINEERING' },
]
</script>

