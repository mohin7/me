<template>
  <section id="strategic-advantage" class="py-20 md:py-32 bg-page relative overflow-hidden">
    <!-- Sophisticated Technical Backdrop -->
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="relative bg-panel/30 border border-accent/10 rounded-[64px] p-8 md:p-16 backdrop-blur-3xl overflow-hidden">
        
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style="background-image: radial-gradient(var(--accent) 0.5px, transparent 0.5px); background-size: 30px 30px;">
        </div>

        <div class="relative z-10">
          
          <div class="grid lg:grid-cols-[1fr_400px] gap-20 items-start mb-24">
            <div>
              <div class="mb-8">
                 <span class="section-label">Strategic Advantage Matrix</span>
              </div>
              <h2 class="text-main text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-10 max-w-2xl">
                I bridge the gap for <br />
                founders demanding <span class="text-soft italic serif-font lowercase">momentum.</span>
              </h2>
              <p class="text-soft text-lg md:text-xl font-medium leading-relaxed max-w-xl opacity-80">
                Engineering high-performance MVPs with surgical precision. By fusing expert UI/UX design with technical engineering, I ensure your product launches faster, cleaner, and investor-ready.
              </p>
            </div>

            <!-- Right: Specs Block (Aligned & Structured) -->
            <div class="space-y-8 bg-accent/5 p-10 rounded-[40px] border border-accent/10">
               <div class="flex items-baseline justify-between mb-4">
                  <span class="text-[0.65rem] font-bold uppercase tracking-widest text-muted">Strategic Model</span>
                  <span class="text-main font-black text-xs">v.2024.Q2</span>
               </div>
               
               <div class="grid grid-cols-1 gap-6">
                 <div class="flex items-center gap-4">
                    <div class="h-10 w-10 rounded-xl bg-accent text-accent-fg flex items-center justify-center">
                       <Icon name="lucide:clock-4" class="h-5 w-5" />
                    </div>
                    <div class="flex flex-col">
                       <span class="text-main font-bold tracking-tight">7-Day MVP Sprint</span>
                       <span class="text-[0.55rem] font-black uppercase tracking-widest text-muted opacity-60">Rapid Launch Cycle</span>
                    </div>
                 </div>
                 <div class="flex items-center gap-4">
                    <div class="h-10 w-10 rounded-xl bg-accent text-accent-fg flex items-center justify-center">
                       <Icon name="lucide:banknote" class="h-5 w-5" />
                    </div>
                    <div class="flex flex-col">
                       <span class="text-main font-bold tracking-tight">Fixed Budget</span>
                       <span class="text-[0.55rem] font-black uppercase tracking-widest text-muted opacity-60">Zero Scope Creep</span>
                    </div>
                 </div>
                 <div class="flex items-center gap-4">
                    <div class="h-10 w-10 rounded-xl bg-accent text-accent-fg flex items-center justify-center">
                       <Icon name="lucide:user-2" class="h-5 w-5" />
                    </div>
                    <div class="flex flex-col">
                       <span class="text-main font-bold tracking-tight">1:1 Partnership</span>
                       <span class="text-[0.55rem] font-black uppercase tracking-widest text-muted opacity-60">Direct Engineering Flow</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          <!-- Pillar Rows: Symmetrical & Balanced -->
          <div class="grid md:grid-cols-3 gap-6 pt-16 border-t border-accent/10">
            <!-- Advantage Card 01 -->
            <div class="p-10 rounded-[40px] bg-panel/40 border border-glass hover:border-accent/30 transition-all duration-700">
               <h3 class="text-lg font-black tracking-tight mb-2">Design-to-Code</h3>
               <p class="text-soft text-sm leading-relaxed opacity-60">Eliminate the "lost in translation" friction. Production-ready Nuxt & Vue code directly from Figma.</p>
            </div>
            <!-- Advantage Card 02 -->
            <div class="p-10 rounded-[40px] bg-panel/40 border border-glass hover:border-accent/30 transition-all duration-700">
               <h3 class="text-lg font-black tracking-tight mb-2">Venture Scale</h3>
               <p class="text-soft text-sm leading-relaxed opacity-60">Leading design systems for high-concurrency cloud infrastructure at AppsCode. Built for tomorrow.</p>
            </div>
            <!-- Advantage Card 03 -->
            <div class="p-10 rounded-[40px] bg-panel/40 border border-glass hover:border-accent/30 transition-all duration-700">
               <h3 class="text-lg font-black tracking-tight mb-2">Founder Focus</h3>
               <p class="text-soft text-sm leading-relaxed opacity-60">Unlimited revisions until market-perfect. Dedicated, no-fluff partnership for fast-moving teams.</p>
            </div>
          </div>

          <!-- Footer Bar: Integrated & Grounded -->
          <div class="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-accent/5">
            <div class="flex items-center gap-4 opacity-40 text-[0.65rem] font-black uppercase tracking-[0.4em]">
              <Icon name="lucide:shield-check" class="h-4 w-4" />
              <span>Investment Secured Core</span>
            </div>
            <SharedButton variant="primary" size="lg" class="px-12 h-14 rounded-full">
              Initiate Partnership
              <template #right>
                <Icon name="lucide:arrow-right" class="h-4 w-4" />
              </template>
            </SharedButton>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
</style>
