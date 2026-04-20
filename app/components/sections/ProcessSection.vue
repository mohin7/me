<template>
  <section id="process" class="relative py-24 md:py-32 bg-page overflow-hidden">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glass to-transparent"></div>

    <!-- Asymmetric header: label+title left, description right -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
      <div class="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
        <div>
          <span class="section-label mb-6">How I work</span>
          <h2 class="text-main mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
            A <span class="serif-font italic text-accent">steady</span> four-step cadence.
          </h2>
        </div>
        <p class="text-soft text-base md:text-lg leading-relaxed max-w-sm">
          Scoped, priced, and shipped like engineering work — not agency theatre.
        </p>
      </div>
    </div>

    <!-- Horizontal scroll-snap rail with native CSS -->
    <div class="process-rail pb-10">
      <div class="process-track px-4 sm:px-6 lg:px-8 max-w-[100vw]">
        <div
          v-for="(step, idx) in steps"
          :key="idx"
          class="process-card reveal"
          :class="`reveal-delay-${Math.min(idx, 3)}`"
        >
          <div class="flex items-center justify-between mb-8">
            <span class="mono-font text-accent text-sm font-medium tabular-nums">0{{ idx + 1 }}</span>
            <span class="text-muted text-xs">{{ step.duration }}</span>
          </div>
          <h3 class="text-main text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4">
            {{ step.title }}
          </h3>
          <p class="text-soft text-[0.95rem] leading-relaxed mb-8">
            {{ step.description }}
          </p>
          <ul class="mt-auto space-y-2.5 pt-6 border-t border-glass">
            <li v-for="output in step.outputs" :key="output" class="flex items-center gap-2.5 text-soft text-sm">
              <span class="h-1 w-1 rounded-full bg-accent/60"></span>
              {{ output }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Scope & strategy',
    duration: 'Week 1',
    description: 'Deconstruct the technical and business constraints into a shippable roadmap, not a wish list.',
    outputs: ['Competitive audit', 'Conversion roadmap', 'Sprint plan'],
  },
  {
    title: 'Architecture',
    duration: 'Week 1–2',
    description: 'Define information hierarchy and user paths before a single pixel moves.',
    outputs: ['Experience flows', 'Site hierarchy', 'Logic maps'],
  },
  {
    title: 'Visual system',
    duration: 'Week 2–3',
    description: 'Scale a consistent design system from tokens to product surfaces — built for teams, not just decks.',
    outputs: ['Design tokens', 'Component library', 'High-fidelity UI'],
  },
  {
    title: 'Ship & iterate',
    duration: 'Week 3+',
    description: 'Handover is code, not comps. I ship production Nuxt/Vue and stay close to the first weeks of usage.',
    outputs: ['Production code', 'QA passes', 'Launch readout'],
  },
]
</script>

<style scoped>
.process-rail {
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.process-rail::-webkit-scrollbar { display: none; }

.process-track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
}

.process-card {
  scroll-snap-align: start;
  flex: 0 0 min(420px, 85vw);
  min-height: 420px;
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid var(--border-glass);
  background: var(--bg-panel);
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.process-card:hover {
  border-color: color-mix(in oklch, var(--accent) 30%, var(--border-glass));
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .process-card { padding: 2.5rem; min-height: 460px; flex-basis: 440px; }
  .process-track { gap: 1.5rem; }
}
</style>
