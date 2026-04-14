<template>
  <div class="relative z-20 py-12 md:py-20 -mt-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- The Cinematic Hub Container -->
      <div class="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-glass bg-panel/40 backdrop-blur-2xl p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] group">
        
        <!-- Technical Background Noise -->
        <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] pointer-events-none" 
             style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 24px 24px;"></div>
        
        <!-- Architectural Ornaments (Meaningful Metadata) -->
        <div class="absolute top-0 right-0 p-6 flex items-start gap-4 opacity-30 hidden md:flex">
          <div class="flex flex-col items-end">
             <span class="text-[0.5rem] font-bold tabular-nums">EXPERIENCE: 07Y</span>
             <div class="h-0.5 w-16 bg-accent/40 mt-1"></div>
          </div>
          <Icon name="lucide:shield-check" class="h-4 w-4 text-accent" />
        </div>

        <div class="absolute bottom-0 left-0 p-6 opacity-30 hidden md:block">
           <div class="flex items-center gap-3">
             <div class="h-px w-10 bg-accent/40"></div>
             <span class="text-[0.45rem] font-bold uppercase tracking-widest leading-none mt-1">Status: Open for Projects</span>
           </div>
        </div>

        <div class="relative z-10 grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-center">
          
          <!-- Left side: Content Node -->
          <div class="flex flex-col gap-8">
            <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-glass bg-soft/40 w-fit backdrop-blur-md">
              <div class="relative flex h-1.5 w-1.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              </div>
              <span class="text-main text-[0.6rem] font-black uppercase tracking-[0.2em]">Verified Expertise</span>
            </div>
            
            <div class="space-y-6">
              <h2 class="text-main text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1]">
                End-to-end delivery <br> for <span class="text-soft italic serif-font lowercase">visionary teams.</span>
              </h2>
              
              <div class="flex items-center gap-10">
                <div class="flex flex-col">
                   <div class="flex items-baseline gap-1">
                     <span class="text-main text-2xl font-black tabular-nums">07</span>
                     <span class="text-accent text-xs font-bold">Years</span>
                   </div>
                   <span class="text-muted text-[0.5rem] font-bold uppercase tracking-widest opacity-60">Professional Craft</span>
                </div>
                <div class="h-10 w-px bg-subtle/40"></div>
                <div class="flex flex-col">
                   <div class="flex items-baseline gap-1">
                     <span class="text-main text-2xl font-black tabular-nums">24+</span>
                     <span class="text-accent text-xs font-bold">Ships</span>
                   </div>
                   <span class="text-muted text-[0.5rem] font-bold uppercase tracking-widest opacity-60">Products Delivered</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right side: Infinite Ticker + Technical Detail -->
          <div class="relative pt-4">
            <div class="relative w-full overflow-hidden rounded-2xl bg-soft/10 border border-subtle/10 p-4 md:p-8">
              <!-- Fade Masks -->
              <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-panel/40 to-transparent z-10"></div>
              <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-panel/40 to-transparent z-10"></div>
              
              <div class="flex gap-12 md:gap-20 animate-ticker whitespace-nowrap">
                <div v-for="i in 3" :key="i" class="flex gap-12 md:gap-20">
                  <div v-for="l in logos" :key="l.name" class="flex items-center gap-5 group/logo">
                    <div class="h-10 w-10 rounded-full bg-panel border border-subtle flex items-center justify-center group-hover/logo:border-accent transition-all duration-500 shadow-sm">
                      <Icon :name="l.icon" class="h-5 w-5 text-muted group-hover/logo:text-accent" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-main font-bold tracking-tight text-lg leading-none">{{ l.name }}</span>
                      <span class="text-[0.5rem] font-bold text-muted uppercase tracking-[0.2em] mt-2 opacity-50">{{ l.role }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Technical Metadata Strip -->
            <div class="absolute -bottom-6 -right-2 flex items-center gap-4 opacity-30 hidden md:flex">
               <span class="text-[0.45rem] font-black tracking-widest">ENGINE: NUXT_3</span>
               <div class="h-px w-6 bg-accent/40"></div>
               <span class="text-[0.45rem] font-black tracking-widest">DRIVEN_BY: VUE_JS</span>
            </div>
          </div>

        </div>

        <!-- Decorative Progress Gradient at bottom -->
        <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
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

.serif-font { font-family: 'Playfair Display', serif; }
</style>


