<template>
  <section id="top" class="relative min-h-screen overflow-hidden">
    <div class="pointer-events-none absolute inset-0" :class="theme === 'dark' ? 'hero-backdrop-dark' : 'hero-backdrop-light'"></div>
    
    <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div>
        <div class="mb-6 inline-block rounded-lg border border-[color:var(--brand-a)]/40 bg-[color:var(--brand-a)]/10 px-4 py-2">
          <span class="text-[color:var(--brand-a)] text-sm font-medium">Head of Design at AppsCode</span>
        </div>
        <h1 class="text-main mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Md Mohin Uddin
          <br />
          <span class="brand-text-gradient">Designs systems, products, and front-end experiences</span>
        </h1>
        <p class="text-soft mb-8 max-w-2xl text-lg">
          UI/UX specialist, UI designer, and developer based in Dhaka, Bangladesh. I lead design at AppsCode and bring a mix of product thinking, front-end execution, and open-source experience.
        </p>
        <div class="flex flex-wrap gap-4">
          <SharedButton tag="a" href="https://www.linkedin.com/in/mohin7/" target="_blank" rel="noreferrer" size="lg">View LinkedIn</SharedButton>
          <SharedButton tag="a" href="https://github.com/mohin7" target="_blank" rel="noreferrer" variant="outline" size="lg">Explore GitHub</SharedButton>
        </div>
      </div>
      <div class="relative w-full max-w-lg mx-auto lg:max-w-none">
        <div class="absolute -inset-1 z-0 rounded-[3rem] bg-gradient-to-tr from-orange-500 to-pink-500 opacity-20 blur-3xl transition-opacity duration-500 hover:opacity-40"></div>
        <div class="bg-panel border-subtle relative z-10 overflow-hidden rounded-[2.5rem] border shadow-2xl shadow-black/40">
          <img src="/hero-graphic.png" alt="Abstract 3D Art" class="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" />
          
          <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
            <div class="flex items-center gap-3">
               <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                 <SharedIcon name="ph:star-four-fill" class="h-5 w-5" />
               </div>
               <div>
                  <p class="text-sm font-medium text-white">Design Leader</p>
                  <p class="text-xs text-gray-300">UI/UX & Systems</p>
               </div>
            </div>
            <div class="text-right">
              <p class="text-lg font-bold text-white">10+</p>
              <p class="text-xs text-gray-300">Years Exp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { theme } = useTheme()
</script>

<style scoped>
.hero-backdrop-dark {
  background: radial-gradient(circle at 20% 20%, rgba(249, 115, 22, 0.16), transparent 35%),
    radial-gradient(circle at 80% 0%, rgba(236, 72, 153, 0.18), transparent 38%),
    linear-gradient(180deg, #0b0d12 0%, #07080b 80%);
}

.hero-backdrop-light {
  background: radial-gradient(circle at 20% 20%, rgba(249, 115, 22, 0.16), transparent 35%),
    radial-gradient(circle at 80% 0%, rgba(236, 72, 153, 0.12), transparent 38%),
    linear-gradient(180deg, #fdfefe 0%, #f2f5f9 90%);
}

/* Smooth out the typing caret transition */
.typing-caret {
  background: var(--accent);
  border-radius: 9999px;
  height: 0.9em;
  left: 0;
  margin-left: 3px;
  position: absolute;
  top: 50%;
  transform: translate3d(var(--caret-x), -50%, 0);
  transition: transform 100ms ease-out, opacity 0.15s ease !important;
  width: 3px;
  will-change: transform;
}
</style>
