<template>
  <section id="top" class="relative min-h-[100dvh] flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-page">
    
    <!-- ── Enhanced Visual Texture Layers (Adaptive Theme) ── -->
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <!-- High-Visibility Grid Pattern (Adaptive Opacity) -->
      <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" 
           style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 32px 32px;"></div>
      
      <!-- Vivid Mesh Gradient Glows (Smoky/Ethereal) -->
      <div class="absolute -left-[10%] top-[0%] h-[700px] w-[700px] rounded-full bg-accent/5 dark:bg-accent/3 blur-[160px] animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div class="absolute -right-[5%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-accent/5 dark:bg-accent/3 blur-[140px] animate-[pulse_10s_ease-in-out_infinite]"></div>
      
      <!-- Architectural Geometric Shapes -->
      <div class="absolute right-[5%] top-[10%] opacity-[0.08] dark:opacity-[0.04] hidden lg:block">
        <div class="relative h-80 w-80 border-[1px] border-accent/20 border-dashed rounded-full animate-[spin_100s_linear_infinite]">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent/20"></div>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full border border-accent/20 bg-panel"></div>
        </div>
      </div>

      <!-- Noise Overlay (Adaptive Mix-blend) -->
      <div class="absolute inset-0 opacity-[0.025] dark:opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center text-center">

        <!-- Content Stack -->
        <div class="hero-enter flex flex-col items-center">
          <!-- Designation -->
          <div class="mb-6 flex items-center gap-3">
             <div class="h-px w-8 bg-accent/30"></div>
             <span class="text-[0.7rem] font-bold uppercase tracking-[0.4em] text-soft">Head of Design • 7+ Years Experience</span>
             <div class="h-px w-8 bg-accent/30"></div>
          </div>

          <!-- Title -->
          <h1 class="hero-title max-w-5xl mx-auto mb-10">
            <span class="text-main block">Designing the future</span>
            <span class="text-main block mt-2">of digital <span class="text-soft italic serif-font">products.</span></span>
          </h1>

          <!-- Subtitle -->
          <p class="hero-sub font-medium leading-relaxed mx-auto max-w-3xl opacity-80">
            I help early-stage founders and enterprise teams bridge the gap between <span class="text-main font-bold">complex vision</span> and <span class="text-main font-bold">high-impact</span> product execution through elite design & engineering.
          </p>

          <!-- CTAs -->
          <div class="flex items-center justify-center gap-8 mt-4">
            <SharedButton tag="a" href="#contact" variant="primary" size="lg" class="h-14 px-10">
              Book a Strategy Call
              <template #right>
                <Icon name="lucide:arrow-right" class="h-4 w-4" />
              </template>
            </SharedButton>
            <a href="#works" class="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-main hover:text-soft transition-colors mt-1">
              Explore Portfolio
              <Icon name="lucide:chevron-down" class="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* ── Entry Animations ── */
.hero-enter { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
.hero-enter-delayed { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both; }
@keyframes slideUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

/* ── Typography ── */
.serif-font { font-family: 'Playfair Display', serif; }

.hero-title {
  font-size: clamp(2.8rem, 9vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.hero-sub {
  font-size: 1.35rem;
  color: var(--text-soft);
  max-width: 720px;
  margin-bottom: 56px;
  letter-spacing: -0.01em;
}
</style>
