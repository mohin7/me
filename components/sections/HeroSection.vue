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
      <div>
        <div class="bg-panel border-subtle aspect-square rounded-2xl border p-8 shadow-2xl shadow-black/15">
          <div class="text-center">
            <div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)]">
              <SharedIcon name="user" class="h-10 w-10" />
            </div>
            <p class="text-soft">Profile Snapshot</p>
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
</style>
