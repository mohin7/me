<template>
  <section id="contact" class="relative py-32 md:py-56 bg-page overflow-hidden">
    
    <!-- Luminous Brand Aura -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-a/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
    
    <!-- Architectural Background Details -->
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-subtle to-transparent"></div>
    <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-subtle to-transparent"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      
      <!-- Availability Badge -->
      <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-a/30 bg-brand-a/[0.03] mb-12 animate-bounce-slow">
        <div class="relative h-2 w-2">
          <div class="absolute inset-0 rounded-full bg-brand-a animate-ping opacity-75"></div>
          <div class="relative rounded-full h-2 w-2 bg-brand-a"></div>
        </div>
        <span class="text-brand-a text-[0.65rem] font-black uppercase tracking-[0.3em]">Currently accepting new projects</span>
      </div>
      
      <!-- The Final Word -->
      <h2 class="mb-16 text-main text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">
        Let's bring your <br> 
        <span class="relative inline-block">
          <span class="text-brand-a italic">ideas to life.</span>
          <div class="absolute -bottom-4 left-0 w-full h-1.5 bg-brand-a/10 rounded-full"></div>
        </span>
      </h2>
      
      <!-- Multi-Channel Contact -->
      <div class="flex flex-col items-center justify-center gap-12">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <SharedButton 
            tag="a" 
            href="mailto:hello.mohin4@gmail.com" 
            size="xl" 
            variant="primary"
            class="shadow-2xl shadow-brand-a/30 hover:scale-105 transition-transform"
          >
            <template #left><Icon name="lucide:calendar-check" class="h-5 w-5" /></template>
            Schedule a Strategy Call
          </SharedButton>

          <a href="mailto:hello.mohin4@gmail.com" class="group flex items-center gap-4 px-8 h-14 rounded-full border border-subtle bg-panel hover:border-brand-a/40 transition-all duration-300">
             <Icon name="lucide:mail" class="h-5 w-5 text-muted group-hover:text-brand-a transition-colors" />
             <span class="text-soft font-bold tracking-tight">hello.mohin4@gmail.com</span>
          </a>
        </div>
        
        <!-- Trust Signal -->
        <p class="text-muted text-sm font-medium italic opacity-60">
          Typically responds within <span class="text-main font-black">24 hours</span> or less
        </p>
      </div>
    </div>

    <!-- Architectural Background Ticker -->
    <div class="absolute -bottom-12 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
      <h3 class="whitespace-nowrap font-black uppercase tracking-tighter italic" style="font-size: 18rem; line-height: 0.8;">
        UNPACKING VISION BUILDING SCALE UNPACKING VISION BUILDING SCALE
      </h3>
    </div>
  </section>
</template>

<script setup lang="ts">
// Logic for interaction can go here
</script>

<style scoped>
.animate-bounce-slow {
  animation: bounce-slow 4s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}
</style>


