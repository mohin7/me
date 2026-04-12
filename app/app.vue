<template>
  <div class="site-shell" :class="themeClass">
    <SharedHeader />
    <main>
      <SectionsHeroSection />
      <SectionsTrustBar />
      <SectionsAboutSection />
      <SectionsExperienceSection />
      <SectionsSpecialtiesSection />
      <SectionsProcessSection />
      <SectionsSelectedWorksSection />
      <SectionsCaseStudiesSection />
      <SectionsMVPSprintSection />
      <SectionsPackagesSection />
      <SectionsTestimonialsSection />
      <SectionsFAQSection />
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Caveat:wght@400;700&display=swap');

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
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  letter-spacing: -0.015em;
}

/* ───────────────────────────────────────
   LIGHT — "Design Leader" Minimalist
─────────────────────────────────────── */
.theme-light {
  --bg-page:         #F9FAFB;
  --bg-panel:        #FFFFFF;
  --bg-panel-strong: #F3F4F6;
  --bg-soft:         #F3F4F6;
  --text-main:       #111827;
  --text-soft:       #374151;
  --text-muted:      #9CA3AF;
  --border-subtle:   #E5E7EB;
  --accent:          #4338CA;
  --accent-rgb:      67 56 202;
  --accent-fg:       #FFFFFF;
  --brand-a:         #4338CA;
  --brand-rgb:       67 56 202;
}

/* ───────────────────────────────────────
   DARK — Inverted, high-contrast minimalist
─────────────────────────────────────── */
.theme-dark {
  --bg-page:         #0D1117;
  --bg-panel:        #161B22;
  --bg-panel-strong: #21262D;
  --bg-soft:         #1C2128;
  --text-main:       #F0F6FC;
  --text-soft:       #B1BAC4;
  --text-muted:      #8B949E;
  --border-subtle:   rgba(255, 255, 255, 0.08);
  --accent:          #818CF8;
  --accent-rgb:      129 140 248;
  --accent-fg:       #0D1117;
  --brand-a:         #818CF8;
  --brand-rgb:       129 140 248;
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