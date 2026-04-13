<template>
  <div class="relative z-30 -mt-10 mb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- The Precision Proof Bar (Compact, Useful, Elite UX) -->
      <div class="relative flex flex-col md:flex-row items-stretch md:items-center bg-panel/40 backdrop-blur-3xl border border-glass rounded-3xl md:rounded-full overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)]">
        
        <!-- Social Proof Column (Compact) -->
        <div class="flex items-center gap-4 px-8 py-5 border-b md:border-b-0 md:border-r border-accent/10">
          <div class="flex -space-x-3">
            <div v-for="i in 3" :key="i" class="h-8 w-8 rounded-full border-2 border-page bg-soft flex items-center justify-center overflow-hidden">
               <Icon name="lucide:user" class="h-3.5 w-3.5 text-accent/40" />
            </div>
          </div>
          <div class="flex flex-col">
            <span class="text-main text-[0.7rem] font-bold tracking-tight leading-none italic serif-font">Elite Collaboration</span>
            <span class="text-muted text-[0.55rem] font-black uppercase tracking-widest opacity-40 mt-1">Founders Selection</span>
          </div>
        </div>

        <!-- The Logo Stream (UX Focus: Smooth, Unobtrusive) -->
        <div class="flex-1 w-full overflow-hidden relative px-4 py-5">
           <div class="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-panel to-transparent z-10"></div>
           <div class="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-panel to-transparent z-10"></div>
           
           <div class="flex gap-12 md:gap-20 animate-ticker grayscale opacity-20 hover:opacity-100 transition-opacity duration-700">
             <div v-for="i in 3" :key="i" class="flex gap-12 md:gap-20">
               <div v-for="l in logos" :key="l.name" class="flex items-center gap-3">
                 <Icon :name="l.icon" class="h-4 w-4 text-main" />
                 <span class="text-main font-bold tracking-tighter text-sm lowercase">{{ l.name }}</span>
               </div>
             </div>
           </div>
        </div>

        <!-- Metric Hub (High Information Density) -->
        <div class="flex items-center gap-10 px-10 py-5 bg-accent text-accent-fg shrink-0">
           <div class="flex items-baseline gap-2">
             <span class="text-2xl font-black italic serif-font leading-none">07</span>
             <div class="flex flex-col">
               <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-60">Year_Craft</span>
             </div>
           </div>
           
           <div class="h-6 w-px bg-accent-fg/20"></div>

           <div class="flex items-baseline gap-2">
             <span class="text-2xl font-black italic serif-font leading-none">24<span class="text-sm">+</span></span>
             <div class="flex flex-col">
               <span class="text-[0.5rem] font-black uppercase tracking-widest opacity-60">Ships</span>
             </div>
           </div>

           <div class="h-6 w-px bg-accent-fg/20 hidden lg:block"></div>

           <div class="items-center gap-2 hidden lg:flex">
             <div class="h-1.5 w-1.5 rounded-full bg-accent-fg animate-pulse"></div>
             <span class="text-[0.6rem] font-bold uppercase tracking-[0.2em]">Active</span>
           </div>
        </div>

      </div>
      
      <!-- Subtle Under-label for UX Context -->
      <div class="mt-4 flex justify-center">
         <span class="text-[0.55rem] font-black uppercase tracking-[0.4em] text-muted opacity-30">Verified Technical Expertise & Structural Logic</span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  { name: 'AppsCode', icon: 'lucide:box' },
  { name: 'KubeDB', icon: 'lucide:database' },
  { name: 'Stash', icon: 'lucide:shield-check' },
  { name: 'ByteBuilders', icon: 'lucide:cpu' },
  { name: 'CloudSoft', icon: 'lucide:cloud' },
]
</script>

<style scoped>
.animate-ticker {
  animation: ticker 45s linear infinite;
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
