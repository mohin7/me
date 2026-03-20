<template>
  <section id="contact" class="py-20 md:py-28 relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(249,115,22,0.11),rgba(236,72,153,0.1))]"></div>
    
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 class="text-main mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
        Let’s connect.
      </h2>
      <p class="text-soft mx-auto mb-8 max-w-2xl text-xl">
        Find my work, profile links, and contact points across GitHub, LinkedIn, and Bento.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <SharedButton tag="a" href="mailto:hello.mohin4@gmail.com" size="lg">Email Mohin</SharedButton>
        <SharedButton tag="a" href="https://bento.me/mohin7" target="_blank" rel="noreferrer" variant="outline" size="lg">Open Link Hub</SharedButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
