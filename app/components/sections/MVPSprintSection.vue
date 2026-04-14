<template>
  <section id="mvp-sprint" class="py-24 md:py-44 bg-accent text-accent-fg relative overflow-hidden">
    <!-- Architectural Overlays -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style="background-image: radial-gradient(circle at center, var(--accent-fg) 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Narrative (Centered for Maximum Impact) -->
      <div class="max-w-4xl mx-auto text-center mb-24 md:mb-32">
        <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent-fg/20 bg-accent-fg/5 mb-10">
          <div class="h-1.5 w-1.5 rounded-full bg-accent-fg animate-pulse"></div>
          <span class="text-[0.6rem] font-black uppercase tracking-[0.4em]">Strategic MVP Protocol</span>
        </div>
        
        <h2 class="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-12">
          Pushing for traction? <br />
          Don’t let <span class="opacity-40 italic serif-font lowercase">slow design</span> hold you back.
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12 text-left">
          <p class="text-lg md:text-xl font-medium leading-relaxed opacity-70">
            As a young founder, you’re pushing hard—pitching to investors, talking to users, and chasing tight deadlines. But when your design isn’t clear, it slows down your momentum.
          </p>
          <p class="text-lg md:text-xl font-medium leading-relaxed opacity-70 border-l border-accent-fg/10 pl-12">
            I specialize in <span class="font-black text-accent-fg">Fast-Track MVP Design</span>. From napkin sketches to investor-ready interfaces — I help founders move with clarity, confidence, and conversion.
          </p>
        </div>
      </div>

      <!-- The "Tier 1" Offer Grid (Bento Style) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Pillar 01: Speed -->
        <div class="group relative bg-accent-fg/5 border border-accent-fg/10 rounded-[40px] p-10 overflow-hidden transition-all duration-700 hover:bg-accent-fg/[0.08]">
          <div class="relative z-10">
            <div class="flex justify-between items-start mb-16">
               <div class="h-14 w-14 rounded-2xl bg-accent-fg/10 flex items-center justify-center text-accent-fg group-hover:bg-accent-fg group-hover:text-accent transition-all duration-500">
                 <Icon name="lucide:zap" class="h-7 w-7" />
               </div>
               <span class="text-[0.55rem] font-black opacity-30 uppercase tracking-widest">Protocol_01</span>
            </div>
            <h3 class="text-2xl font-black tracking-tight mb-4">7-Day Delivery</h3>
            <p class="text-accent-fg/60 text-sm leading-relaxed max-w-[240px]">
              Rapid execution cycles. From concept to shippable MVP in 168 hours or less.
            </p>
          </div>
          <!-- Decorative UI -->
          <div class="absolute -bottom-6 -right-6 h-32 w-32 border border-accent-fg/5 rounded-full opacity-20"></div>
        </div>

        <!-- Pillar 02: Predictability (The Anchor) -->
        <div class="group relative bg-accent-fg text-accent border border-accent-fg rounded-[40px] p-10 overflow-hidden transition-all duration-700 shadow-2xl scale-105 z-20">
          <div class="relative z-10">
            <div class="flex justify-between items-start mb-16">
               <div class="h-14 w-14 rounded-2xl bg-accent text-accent-fg flex items-center justify-center transition-all duration-500">
                 <Icon name="lucide:banknote" class="h-7 w-7" />
               </div>
               <span class="text-[0.55rem] font-black opacity-30 uppercase tracking-widest text-accent">Protocol_02</span>
            </div>
            <h3 class="text-2xl font-black tracking-tight mb-4">Fixed-Budget</h3>
            <p class="opacity-70 text-sm leading-relaxed max-w-[240px]">
              Clear, predictable investment. No hidden costs, no scope creep, just results.
            </p>
            <!-- Progress Detail -->
            <div class="mt-12 pt-8 border-t border-glass">
               <span class="text-[0.6rem] font-bold uppercase tracking-widest opacity-40">Founder Guarantee</span>
               <p class="text-xs font-bold mt-2 uppercase tracking-tight">"No fluff, no layers, no missed deadlines."</p>
            </div>
          </div>
        </div>

        <!-- Pillar 03: Precision -->
        <div class="group relative bg-accent-fg/5 border border-accent-fg/10 rounded-[40px] p-10 overflow-hidden transition-all duration-700 hover:bg-accent-fg/[0.08]">
          <div class="relative z-10">
            <div class="flex justify-between items-start mb-16">
               <div class="h-14 w-14 rounded-2xl bg-accent-fg/10 flex items-center justify-center text-accent-fg group-hover:bg-accent-fg group-hover:text-accent transition-all duration-500">
                 <Icon name="lucide:infinite" class="h-7 w-7" />
               </div>
               <span class="text-[0.55rem] font-black opacity-30 uppercase tracking-widest">Protocol_03</span>
            </div>
            <h3 class="text-2xl font-black tracking-tight mb-4">Unlimited Iterations</h3>
            <p class="text-accent-fg/60 text-sm leading-relaxed max-w-[240px]">
              We work 1:1 together until your product is investor-perfect and market-ready.
            </p>
          </div>
          <!-- Decorative UI Grid -->
          <div class="absolute bottom-6 right-6 flex gap-1 opacity-20">
             <div v-for="i in 3" :key="i" class="h-1 w-4 bg-accent-fg"></div>
          </div>
        </div>

      </div>

      <!-- Action Indicator -->
      <div class="mt-24 flex flex-col items-center gap-6">
         <div class="flex items-center gap-2 text-[0.6rem] font-black uppercase tracking-[0.5em] opacity-40">
           Available for Q2 Startups
         </div>
         <div class="h-20 w-px bg-gradient-to-b from-accent-fg/40 to-transparent"></div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
</style>
