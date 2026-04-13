<template>
  <div class="site-shell" :class="themeClass">
    <SharedHeader />
    <main>
      <SectionsHeroSection />
      <SectionsStrategicAdvantage />
      <SectionsExperienceSection />
      <SectionsProcessSection />
      <SectionsCaseStudiesSection />
      <SectionsTestimonialsSection />
      <SectionsCTASection />
    </main>
    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
const { theme } = useTheme()
const themeClass = computed(() => theme.value === 'dark' ? 'theme-dark' : 'theme-light')
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@1,900&family=Caveat:wght@400;700&display=swap');

html {
  scroll-behavior: smooth;
}

*, *::before, *::after {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

.handwriting { font-family: 'Caveat', cursive; }

.site-shell {
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-main);
  transition: background-color 250ms ease, color 250ms ease;
  font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  letter-spacing: -0.02em;
}

/* ───────────────────────────────────────
   LIGHT — "Design Leader" Minimalist
─────────────────────────────────────── */
.theme-light {
  --bg-page:         #F9FAFB;
  --bg-panel:        #FFFFFF;
  --bg-panel-strong: #F3F4F6;
  --bg-soft:         #F3F4F6;
  --text-main:       #0A0A0A;
  --text-soft:       #52525B;
  --text-muted:      #A1A1AA;
  --border-subtle:   rgba(0,0,0,0.06);
  --border-glass:    rgba(0, 0, 0, 0.05);
  --bg-glass:        rgba(255, 255, 255, 0.7);
  --accent:          #111111;
  --accent-rgb:      17 17 17;
  --accent-fg:       #FFFFFF;
}

/* ───────────────────────────────────────
   DARK — Inverted, high-contrast minimalist
─────────────────────────────────────── */
.theme-dark {
  --bg-page:         #0A0A0A;
  --bg-panel:        #121212;
  --bg-panel-strong: #1A1A1A;
  --bg-soft:         #1A1A1A;
  --text-main:       #FAFAFA;
  --text-soft:       #A1A1AA;
  --text-muted:      #71717A;
  --border-subtle:   rgba(255, 255, 255, 0.08);
  --border-glass:    rgba(255, 255, 255, 0.12);
  --bg-glass:        rgba(10, 10, 10, 0.8);
  --accent:          #FFFFFF;
  --accent-rgb:      255 255 255;
  --accent-fg:       #111111;
}

/* ── Utilities ── */
.text-main        { color: var(--text-main); }
.text-soft        { color: var(--text-soft); }
.text-muted       { color: var(--text-muted); }
.bg-page          { background: var(--bg-page); }
.bg-panel         { background: var(--bg-panel); }
.bg-panel-strong  { background: var(--bg-panel-strong); }
.bg-soft          { background: var(--bg-soft); }
.border-subtle    { border-color: var(--border-subtle); }
.bg-glass         { background-color: var(--bg-glass); }
.border-glass     { border-color: var(--border-glass); }

/* ── Backward-compat aliases ── */
.brand-text-gradient { color: var(--accent); font-weight: 900; }
.metallic-text       { color: var(--text-main); font-weight: 900; }
.metallic-text-soft  { color: var(--text-soft); font-weight: 900; }
.brand-gradient      { background: var(--accent); }
.text-brand-a        { color: var(--accent); }
.bg-brand-a          { background: var(--accent); }
.border-brand-a      { border-color: var(--accent); }
.section-divider     { height: 1px; background: var(--border-subtle); }
</style>