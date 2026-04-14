<template>
  <div class="fixed bottom-8 right-8 z-[100] group">
    <!-- Pulse Effect -->
    <div class="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
    
    <a 
      href="https://wa.me/8801634419564" 
      target="_blank" 
      rel="noopener noreferrer"
      class="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-500 overflow-hidden group/btn"
      aria-label="Contact on WhatsApp"
    >
      <!-- Label on Hover -->
      <div class="absolute right-full mr-4 px-4 py-2 bg-page border border-accent/10 rounded-xl whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none hidden md:block">
        <span class="text-main text-xs font-black uppercase tracking-widest">Catch me on WhatsApp</span>
      </div>

      <!-- Icon -->
      <Icon name="logos:whatsapp-icon" class="w-7 h-7 md:w-8 md:h-8 group-hover/btn:scale-110 transition-transform duration-500" />
      
      <!-- Subtle Glint -->
      <div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-accent/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
    </a>
  </div>
</template>

<script setup lang="ts">
// WhatsApp number: +8801634419564
</script>

<style scoped>
.shadow-2xl {
  box-shadow: 0 10px 40px -10px rgba(37, 211, 102, 0.5);
}
</style>
