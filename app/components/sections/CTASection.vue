<template>
  <section id="contact" class="relative py-24 md:py-40 bg-page overflow-hidden">
    
    <!-- Subtle Technical Aura -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/[0.02] blur-[120px] rounded-full pointer-events-none"></div>
    
    <!-- Section Border -->
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      
      <!-- System Status Line: Minimalist -->
      <div class="flex items-center justify-center gap-4 mb-14">
        <div class="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_var(--accent)]"></div>
        <span class="text-soft text-[0.65rem] font-black uppercase tracking-[0.4em]">Available for Strategic Partnership // 2024.Q2</span>
      </div>
      
      <!-- The Final Launch Word: Balanced Scale -->
      <h2 class="mb-16 text-main text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
        Let's bring your <br /> 
        <span class="serif-font lowercase italic" style="color: #52525B">vision to life.</span>
      </h2>
      
      <!-- Higher Density Consistent Buttons -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
         <!-- Primary Action: Shared Component -->
         <SharedButton 
           tag="a" 
           href="mailto:hello.mohin4@gmail.com" 
           size="lg" 
           variant="primary"
           class="w-full md:w-auto px-10 h-14 rounded-full"
         >
           Schedule Strategy Call
           <template #right><Icon name="lucide:arrow-right" class="h-4 w-4" /></template>
         </SharedButton>

         <!-- Consistent Secondary Action -->
         <SharedButton 
           tag="a" 
           href="mailto:hello.mohin4@gmail.com" 
           size="lg" 
           variant="ghost"
           class="w-full md:w-auto px-10 h-14 rounded-full border border-accent/10 hover:border-accent text-soft hover:text-main"
         >
           hello.mohin4@gmail.com
         </SharedButton>
      </div>

      <!-- Protocol Timeline -->
      <p class="mt-12 text-muted text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-30">
        Responses within <span class="text-main">24 hours</span>
      </p>

    </div>

    <!-- Minimalist Trace Watermark -->
    <div class="absolute bottom-6 left-0 w-full overflow-hidden opacity-[0.01] pointer-events-none select-none">
      <h3 class="whitespace-nowrap font-black italic serif-font lowercase text-main text-[12rem] leading-none tracking-tighter">
        design architecture scale design architecture scale
      </h3>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
</style>
