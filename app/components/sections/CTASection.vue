<template>
  <section id="contact" class="relative isolate overflow-hidden py-32 md:py-48 bg-page">
    <div class="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
      <p class="text-brand-a mb-6 text-sm font-bold uppercase tracking-[0.3em]">Currently accepting new projects</p>
      
      <h2 class="mb-12 text-main text-5xl md:text-8xl font-black tracking-tighter leading-tight">
        Let's bring your <br> <span class="text-brand-a">ideas to life.</span>
      </h2>
      
      <div class="flex flex-col items-center justify-center gap-8">
        <SharedButton 
          tag="a" 
          href="mailto:hello.mohin4@gmail.com" 
          size="xl" 
          variant="primary"
          class="shadow-xl shadow-brand-a/20"
        >
          <template #left><Icon name="lucide:calendar" class="h-5 w-5" /></template>
          Book a 15-min call
        </SharedButton>
        
        <p class="text-soft text-lg font-medium">
          or email directly at 
          <a href="mailto:hello.mohin4@gmail.com" class="text-main font-bold hover:text-brand-a transition-colors underline decoration-brand-a/30 underline-offset-8">
            hello.mohin4@gmail.com
          </a>
        </p>
      </div>
    </div>

    <!-- Giant Background Text (Minimalist) -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
      <h2 class="whitespace-nowrap font-black uppercase tracking-tighter" style="font-size: 15rem; line-height: 0.8;">
        Mohin Uddin Mohin Uddin
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

