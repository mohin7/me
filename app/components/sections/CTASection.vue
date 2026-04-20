<template>
  <section id="contact" class="relative py-24 md:py-40 bg-page overflow-hidden">

    <!-- Ambient aura -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/[0.04] blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glass to-transparent"></div>

    <div class="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">

      <!-- Status -->
      <div class="flex items-center justify-center gap-2.5 mb-10">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full rounded-full bg-accent/40 animate-ping"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
        </span>
        <span class="text-soft text-sm">Taking on {{ availabilityTag }} projects</span>
      </div>

      <!-- Headline -->
      <h2 class="mb-12 text-main text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1]">
        Let's bring your <br />
        <span class="serif-font italic text-accent">vision to life.</span>
      </h2>

      <p class="text-soft text-lg leading-relaxed mb-12 max-w-xl mx-auto">
        30-minute strategy call, no pressure. I'll tell you straight if I'm the right fit.
      </p>

      <!-- Single primary CTA + quiet email -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
         <SharedButton
           tag="a"
           href="https://cal.com/md-mohin-uddin-8gpn95/30min"
           target="_blank"
           size="lg"
           variant="primary"
           class="w-full sm:w-auto px-8 h-12 rounded-full"
           hover-text="Talk for 30 min"
         >
           Book a call
           <template #right><Icon name="lucide:arrow-up-right" class="h-4 w-4" /></template>
         </SharedButton>

         <a
           href="mailto:hello.mohin4@gmail.com"
           class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full text-soft hover:text-main transition-colors"
         >
           or email me
           <Icon name="lucide:mail" class="h-4 w-4" />
         </a>
      </div>

      <p class="mt-10 text-muted text-sm">
        I usually reply within 24 hours.
      </p>

    </div>
  </section>
</template>

<script setup lang="ts">
const now = new Date()
const currentYear = now.getFullYear()
const currentQuarter = Math.floor((now.getMonth() + 3) / 3)
const availabilityTag = `Q${currentQuarter} ${currentYear}`
</script>
