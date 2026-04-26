<template>
  <section id="contact" class="relative py-20 md:py-32 bg-page overflow-hidden">
    
    <!-- Section Divider -->
    <div class="section-divider absolute inset-x-0 top-0"></div>

    <!-- Subtle Technical Aura -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] rounded-full pointer-events-none" style="background: color-mix(in srgb, var(--accent), transparent 98%)"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      
      <!-- System Status Line -->
      <div class="reveal flex items-center justify-center gap-4 mb-10">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span class="text-soft text-[0.65rem] font-black uppercase tracking-[0.4em]">{{ availabilityTag }}</span>
      </div>
      
      <!-- The Final Launch Word -->
      <h2 class="reveal mb-12">
        Let's bring your <br /> 
        <span style="color: var(--text-soft)">vision to life.</span>
      </h2>
      
      <!-- CTA Buttons -->
      <div class="reveal flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
         <SharedButton 
           tag="a" 
           href="https://cal.com/md-mohin-uddin-8gpn95/30min" 
           target="_blank"
           size="lg" 
           variant="primary"
           class="w-full md:w-auto px-10 h-14 rounded-full" hover-text="Let's Talk"
         >
           Schedule Strategy Call
           <template #right><Icon name="lucide:calendar" class="h-4 w-4" /></template>
         </SharedButton>

         <SharedButton 
           tag="a" 
           href="mailto:hello.mohin4@gmail.com" 
           size="lg" 
           variant="liquid"
           class="w-full md:w-auto px-10 h-14 rounded-full" hover-text="Send Message"
         >
           hello.mohin4@gmail.com
         </SharedButton>
      </div>

      <!-- Protocol Timeline -->
      <p class="reveal mt-10 text-muted text-[0.6rem] font-bold uppercase tracking-[0.4em] opacity-80">
        Responses within <span class="text-main">24 hours</span>
      </p>

    </div>
  </section>
</template>

<script setup lang="ts">
const now = new Date()
const currentYear = now.getFullYear()
const currentQuarter = Math.floor((now.getMonth() + 3) / 3)
const availabilityTag = `Available for Strategic Partnership // ${currentYear}.Q${currentQuarter}`
</script>
