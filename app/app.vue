<template>
  <div class="site-shell" :class="[themeClass, schemeClass]">
    <div class="global-tactile-grid"></div>
    <SharedHeader />
    
    <main>
      <SectionsHeroSection />
      <SectionsLogoMarqueeSection />
      <SectionsAboutSection />
      <SectionsSpecialtiesSection />
      <SectionsSelectedWorksSection />
      <SectionsCaseStudiesSection />
      <!-- <SectionsExperienceSection /> -->
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
const { scheme } = useBrandScheme()

const themeClass = computed(() => (theme.value === 'dark' ? 'theme-dark' : 'theme-light'))
const schemeClass = computed(() => `scheme-${scheme.value}`)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Inconsolata:wght@400;700&family=Caveat:wght@400;700&display=swap');
.inconsolata {
  font-family: 'Inconsolata', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

.handwriting {
  font-family: 'Caveat', cursive;
}

/* ── Global reset for smoother rendering ── */
*, *::before, *::after {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.site-shell {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: var(--bg-page);
  color: var(--text-main);
  transition: background-color 280ms ease, color 280ms ease;
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  letter-spacing: -0.01em;
}

/* Cinematic Ambient Mesh Background — softer, deeper, richer */
.site-shell::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -20;
  background:
    radial-gradient(circle at 0% 0%, rgba(var(--brand-rgb), 0.08) 0%, transparent 50%),
    radial-gradient(circle at 100% 20%, rgba(var(--brand-rgb), 0.06) 0%, transparent 40%),
    radial-gradient(circle at 50% 100%, rgba(var(--brand-rgb), 0.04) 0%, transparent 60%),
    linear-gradient(180deg, var(--bg-page) 0%, var(--bg-page-end, var(--bg-page)) 100%);
  pointer-events: none;
}

/* Global Noise Texture — brushed metal grain */
.site-shell::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -10;
  opacity: var(--noise-opacity, 0.035);
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}

/* Tactile Architectural Dot Grid */
.global-tactile-grid {
  position: fixed;
  inset: 0;
  z-index: -15;
  pointer-events: none;
  background-image: radial-gradient(rgba(var(--grid-color), var(--grid-opacity)) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%);
}

.theme-dark {
  /* Titanium dark palette — softer midnight base */
  --bg-page: #050507;
  --bg-page-end: #0a0b10;
  --bg-panel: rgba(255, 255, 255, 0.035);
  --bg-panel-strong: #111214;
  --bg-soft: rgba(255, 255, 255, 0.025);
  --text-main: #e8ecf4;
  --text-soft: #a0aec0;
  --text-muted: #64748b;
  --border-subtle: rgba(255, 255, 255, 0.06);
  --noise-opacity: 0.05;
  --grid-color: 255, 255, 255;
  --grid-opacity: 0.04;
  /* Metallic shimmer tokens - Upgraded to Premium Bright Silver */
  --metallic-from: #ffffff;
  --metallic-via: #f8fafc;
  --metallic-to: #94a3b8;
  --shimmer-white: rgba(255,255,255,0.07);
}

.theme-light {
  --bg-page: #fafafa;
  --bg-page-end: #fdfdfd;
  --bg-panel: rgba(255, 255, 255, 0.75);
  --bg-panel-strong: #ffffff;
  --bg-soft: #f4f4f5;
  --text-main: #18181b;
  --text-soft: #52525b;
  --text-muted: #a1a1aa;
  --border-subtle: #e4e4e7;
  --noise-opacity: 0.008;
  --grid-color: 0, 0, 0;
  --grid-opacity: 0.01;
  --metallic-from: #18181b;
  --metallic-via: #3f3f46;
  --metallic-to: #71717a;
  --shimmer-white: rgba(255,255,255,1);
}

/* Silk light mode aesthetics */
.theme-light .site-shell::before {
  opacity: 0.1;
  background:
    radial-gradient(circle at 0% 0%, rgba(var(--brand-rgb), 0.04) 0%, transparent 60%);
}

.theme-light .bg-white\/5,
.theme-light .bg-white\/\[0\.03\] { 
  background-color: rgba(0, 0, 0, 0.02) !important; 
}

.theme-light .border-white\/10,
.theme-light .border-white\/5 {
  border-color: rgba(0, 0, 0, 0.06) !important;
}

.theme-light .shadow-\[inset_0_2px_0_0_rgba\(255\,255\,255\,0\.18\)\] {
  box-shadow: inset 0 2px 0 0 rgba(255,255,255,1), 0 16px 32px -8px rgba(0,0,0,0.05) !important;
}

.theme-light .group:hover {
  border-color: rgba(var(--brand-rgb), 0.3) !important;
}

.theme-light .metallic-text {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
}


.scheme-futuristic {
  --brand-a: #bef264;
  --brand-b: #22c55e;
  --brand-c: #84cc16;
  --brand-rgb: 190 242 100;
}

.theme-light.scheme-futuristic {
  --brand-a: #65a30d;
  --brand-b: #15803d;
  --brand-c: #84cc16;
  --brand-rgb: 101 163 13;
}

.scheme-premium {
  --brand-a: #a78bfa;
  --brand-b: #7c3aed;
  --brand-c: #6366f1;
  --brand-rgb: 167 139 250;
}

.theme-light.scheme-premium {
  --brand-a: #7c3aed;
  --brand-b: #4f46e5;
  --brand-c: #8b5cf6;
  --brand-rgb: 124 58 237;
}

.scheme-energetic {
  --brand-a: #fb923c;
  --brand-b: #ef4444;
  --brand-c: #f59e0b;
  --brand-rgb: 251 146 60;
}

.theme-light.scheme-energetic {
  --brand-a: #ea580c;
  --brand-b: #dc2626;
  --brand-c: #f59e0b;
  --brand-rgb: 234 88 12;
}

.scheme-editorial {
  --brand-a: #fb7185;
  --brand-b: #e11d48;
  --brand-c: #be123c;
  --brand-rgb: 251 113 133;
}

.theme-light.scheme-editorial {
  --brand-a: #e11d48;
  --brand-b: #be123c;
  --brand-c: #9f1239;
  --brand-rgb: 225 29 72;
}

.scheme-neutral {
  --brand-a: #64748b;
  --brand-b: #475569;
  --brand-c: #334155;
  --brand-rgb: 100 116 139;
}

.theme-light.scheme-neutral {
  --brand-a: #475569;
  --brand-b: #334155;
  --brand-c: #1e293b;
  --brand-rgb: 71 85 105;
}

.scheme-monochrome {
  --brand-a: #ffffff;
  --brand-b: #71717a;
  --brand-c: #d4d4d8;
  --brand-rgb: 255 255 255;
}

.theme-light.scheme-monochrome {
  --brand-a: #18181b;
  --brand-b: #52525b;
  --brand-c: #27272a;
  --brand-rgb: 24 24 27;
}

.text-main {
  color: var(--text-main);
}

.text-soft {
  color: var(--text-soft);
}

.text-muted {
  color: var(--text-muted);
}

.bg-panel {
  background: var(--bg-panel);
}

.bg-panel-strong {
  background: var(--bg-panel-strong);
}

.bg-soft {
  background: var(--bg-soft);
}

.border-subtle {
  border-color: var(--border-subtle);
}

.brand-gradient {
  background-image: linear-gradient(92deg, var(--brand-a), var(--brand-c) 45%, var(--brand-b));
  background-size: 200% auto;
  animation: liquidGradient 6s linear infinite;
}

@keyframes liquidGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.brand-text-gradient {
  background-image: linear-gradient(92deg, var(--brand-a), var(--brand-c) 45%, var(--brand-b));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding-bottom: 0.1em;
}

/* ── Metallic / Titanium text gradient ── */
.metallic-text {
  background: linear-gradient(
    170deg,
    var(--metallic-from) 0%,
    var(--metallic-via) 60%,
    var(--metallic-to) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding-bottom: 0.1em;
  filter: drop-shadow(0 4px 12px rgba(255,255,255,0.08));
}

/* Lighter metallic shimmer for secondary headings */
.metallic-text-soft {
  background: linear-gradient(
    170deg,
    var(--text-soft) 0%,
    var(--text-muted) 60%,
    var(--text-soft) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* ── Titanium card surface ── */
.titanium-surface {
  background:
    linear-gradient(135deg, var(--shimmer-white) 0%, transparent 50%, var(--shimmer-white) 100%),
    var(--bg-panel);
  border: 1px solid var(--border-subtle);
  box-shadow:
    0 1px 0 0 var(--shimmer-white) inset,
    0 -1px 0 0 rgba(0,0,0,0.05) inset,
    0 16px 48px -12px rgba(0,0,0,0.2);
}

/* ── Refined section divider ── */
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--border-subtle) 20%, var(--border-subtle) 80%, transparent 100%);
}

/* ── Metallic tag/badge ── */
.metallic-badge {
  background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>