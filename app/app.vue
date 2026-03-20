<template>
  <div class="site-shell" :class="themeClass">
    <SharedHeader />
    
    <main>
      <SectionsHeroSection />
      <SectionsSpecialtiesSection />
      <SectionsSelectedWorksSection />
      <SectionsMoreWorksSection />
      <SectionsPackagesSection />
      <SectionsMVPSprintSection />
      <SectionsFAQSection />
      <SectionsCTASection />
    </main>
    
    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
const { theme } = useTheme()

const themeClass = computed(() => (theme.value === 'dark' ? 'theme-dark' : 'theme-light'))
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
  --brand-a: #fb923c;
  --brand-b: #ec4899;
  --brand-c: #f59e0b;
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
  --brand-a: #ea580c;
  --brand-b: #db2777;
  --brand-c: #f59e0b;
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
}

.brand-text-gradient {
  background-image: linear-gradient(92deg, var(--brand-a), var(--brand-c) 45%, var(--brand-b));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>