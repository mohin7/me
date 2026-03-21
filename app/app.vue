<template>
  <div class="site-shell" :class="[themeClass, schemeClass]">
    <SharedHeader />
    
    <main>
      <SectionsHeroSection />
      <SectionsLogoMarqueeSection />
      <SectionsAboutSection />
      <SectionsSpecialtiesSection />
      <SectionsSelectedWorksSection />
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
.site-shell {
  min-height: 100vh;
  background: var(--bg-page);
  color: var(--text-main);
  transition: background-color 240ms ease, color 240ms ease;
}

.theme-dark {
  --bg-page: #080b10;
  --bg-panel: rgba(255, 255, 255, 0.04);
  --bg-panel-strong: #10151e;
  --bg-soft: rgba(255, 255, 255, 0.03);
  --text-main: #f4f7ff;
  --text-soft: #d4dcec;
  --text-muted: #9aa7bf;
  --border-subtle: rgba(255, 255, 255, 0.12);
}

.theme-light {
  --bg-page: #f7fafc;
  --bg-panel: rgba(255, 255, 255, 0.9);
  --bg-panel-strong: #ffffff;
  --bg-soft: rgba(15, 23, 42, 0.04);
  --text-main: #101828;
  --text-soft: #344054;
  --text-muted: #667085;
  --border-subtle: rgba(15, 23, 42, 0.14);
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
}
</style>