<template>
  <section class="py-20 md:py-28 relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 pointer-events-none"></div>
    
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Have an idea?
      </h2>
      <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Let's turn it into a beautiful, functional product that users will love.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <SharedButton size="lg">Start Your Project</SharedButton>
        <SharedButton variant="outline" size="lg">Schedule a Call</SharedButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
