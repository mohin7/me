<template>
  <section id="contact" class="relative isolate overflow-hidden py-32 md:py-48 mt-12">
    <!-- Immersive Gradient Background -->
    <div class="absolute inset-0 z-0 bg-black">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-a/20 via-brand-b/10 to-transparent"></div>
      <div class="absolute bottom-0 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand-a/30 blur-[120px]"></div>
    </div>
    
    <div class="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
      <p class="text-soft mb-6 text-sm font-black uppercase tracking-[0.3em]">I have an opening for 2026</p>
      
      <h2 class="text-main mb-12 text-balance text-6xl font-black tracking-tighter sm:text-7xl md:text-9xl">
        Let's bring it <br> <span class="text-[color:var(--brand-a)]">to life.</span>
      </h2>
      
      <div class="flex flex-col items-center justify-center gap-6">
        <SharedButton 
          tag="a" 
          href="mailto:hello.mohin4@gmail.com" 
          size="lg" 
          class="!rounded-full px-12 py-8 text-2xl font-black shadow-2xl shadow-brand-a/40 transition-transform hover:scale-105"
        >
          <Icon name="lucide:message-circle" class="mr-3 h-8 w-8" />
          Book a 15-min call
        </SharedButton>
        
        <p class="text-muted text-lg font-medium">or email at <a href="mailto:hello.mohin4@gmail.com" class="text-main underline decoration-brand-a/30 underline-offset-8 transition hover:text-brand-a">hello.mohin4@gmail.com</a></p>
      </div>
    </div>
    
    <!-- Giant Footer Marquee -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden opacity-5" style="pointer-events: none;">
      <h2 class="whitespace-nowrap font-black uppercase tracking-tighter" style="font-size: 20rem; line-height: 0.8;">
        Mohin Uddin Mohin Uddin Mohin Uddin
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
