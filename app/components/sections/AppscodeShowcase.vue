<template>
  <section id="appscode-work" class="relative py-24 md:py-36 overflow-hidden bg-page">

    <!-- Ambient glow -->
    <div class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-[0.04]"
         style="background: var(--accent)"></div>
    <div class="pointer-events-none absolute inset-0 opacity-[0.016]"
         style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 40px 40px;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- ── Section Header ── -->
      <SharedSectionHeader
        label="AppsCode · 6 Years"
        centered
        class="max-w-3xl mx-auto mb-14"
      >
        <template #title>
          Six years. One designer. <span style="color: var(--text-soft)">Every pixel.</span>
        </template>
        <template #description>
          When a company trusts one person with every interface for 6 years, that's not a job title — it's proof. Here's everything I designed and built at AppsCode.
        </template>
      </SharedSectionHeader>

      <!-- ── Ownership Stats ── -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20">
        <div v-for="stat in ownershipStats" :key="stat.label"
             class="relative flex flex-col gap-2 p-6 rounded-2xl border border-glass bg-panel overflow-hidden group hover:border-accent/25 transition-all duration-500">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style="background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent), transparent 93%), transparent 70%)"></div>
          <span class="relative block text-4xl font-black tracking-tighter text-main leading-none">{{ stat.value }}</span>
          <span class="relative block text-xs font-semibold text-muted leading-snug">{{ stat.label }}</span>
        </div>
      </div>

      <!-- ── Work Grid ── -->
      <p class="text-[0.65rem] font-black uppercase tracking-[0.4em] text-muted mb-12 text-center">AppsCode · Flagship Projects</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <a
          v-for="(work, idx) in works"
          :key="idx"
          :href="work.href"
          target="_blank"
          rel="noopener"
          class="group relative flex flex-col rounded-3xl border border-glass bg-panel overflow-hidden transition-all duration-500 hover:border-accent/20 hover:shadow-[0_20px_60px_-16px_rgba(0,0,0,0.2)] cursor-pointer"
        >
          <!-- Image Preview -->
          <div class="relative h-44 overflow-hidden bg-soft/30 border-b border-glass">
            <img
              v-if="work.image"
              :src="work.image"
              :alt="work.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div v-else class="flex items-center justify-center h-full text-muted">
              <Icon name="lucide:image" class="h-8 w-8 opacity-20" />
            </div>
            <!-- Type Badge Overlay -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/20 text-white bg-black/60 backdrop-blur-lg">
                {{ work.type }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1 p-6 flex flex-col">
            <h4 class="text-lg font-bold tracking-tight text-main mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
              {{ work.title }}
            </h4>

            <div class="space-y-3 mb-6">
              <p class="text-[9px] font-black uppercase tracking-[0.2em] text-muted opacity-50">Contributions</p>
              <ul class="space-y-2">
                <li v-for="item in work.contributions" :key="item" class="flex items-start gap-2.5">
                  <Icon name="lucide:check" class="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                  <span class="text-xs font-medium text-soft leading-relaxed">{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Link -->
            <div class="mt-auto pt-4 border-t border-glass">
              <div class="flex items-center justify-between text-[11px] font-bold text-soft group-hover:text-accent transition-colors">
                <span class="truncate mr-3">{{ work.domain }}</span>
                <Icon name="lucide:arrow-up-right" class="h-3.5 w-3.5 shrink-0" />
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- ── Closing CTA ── -->
      <div class="mt-16 relative rounded-2xl overflow-hidden border border-glass bg-panel">
        <div class="pointer-events-none absolute -right-32 -top-32 w-96 h-96 rounded-full blur-[100px] opacity-[0.06]" style="background: var(--accent)"></div>
        <div class="relative z-10 flex flex-col md:flex-row md:items-center gap-8 justify-between p-8 md:p-12">
          <div class="max-w-lg">
            <h3 class="mb-3 leading-tight text-main">What you see is what I built.<br><span style="color:var(--text-soft)">No middlemen. No surprises.</span></h3>
            <p class="text-soft text-sm leading-relaxed">
              When the same person designs and codes, nothing gets lost in translation. That's why teams keep coming back.
            </p>
          </div>
          <div class="flex flex-col gap-3 shrink-0">
            <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" variant="primary" size="lg" class="h-12 px-8 rounded-full" hover-text="Let's Chat">
              Work With Me
              <template #right><Icon name="lucide:arrow-right" class="h-4 w-4" /></template>
              <template #hoverRight><Icon name="lucide:calendar" class="h-4 w-4" /></template>
            </SharedButton>
            <SharedButton tag="a" href="https://appscode.com" variant="outline" size="md" class="rounded-full">
              See AppsCode Live ↗
            </SharedButton>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const ownershipStats = [
  { value: '1',   label: 'Solo designer & UI developer' },
  { value: '6yr+', label: 'At AppsCode, uninterrupted' },
  { value: '10+', label: 'Live products shipped' },
  { value: '0',   label: 'Handoff gaps or design debt' },
]

const works = [
  {
    title: 'KubeDB Website',
    type: 'Web Design · Hugo · JS',
    contributions: [
      'Designed and developed the KubeDB public website to drive user acquisition',
      'Built with the shared product theme for unified brand experience',
      'Optimized information architecture for complex database lifecycle documentation',
      'Integrated comparison matrices for 25+ database engines',
    ],
    href: 'https://kubedb.com',
    domain: 'kubedb.com',
    image: '/images/showcase/kubedb-site.png',
  },
  {
    title: 'Hugo Product Theme',
    type: 'Web Design · Hugo · JS',
    contributions: [
      'Architected the core Hugo theme powering all AppsCode product properties',
      'Engineered for performance and consistent branding across high-traffic documentation sites',
      'Clean HTML, CSS, and vanilla JS base optimized for Core Web Vitals',
      'Reusable components for product features, case studies, and documentation',
    ],
    href: 'https://github.com/appscode/hugo-product-theme',
    domain: 'github.com/appscode/hugo-product-theme',
    image: '/images/showcase/hugo-theme.png',
  },
  {
    title: 'AppsCode.com — Platform Hub',
    type: 'Platform Web · Hugo · JS',
    contributions: [
      'Designed and built the central hub for AppsCode\'s Kubernetes-native products',
      'Crafted a cohesive narrative for infrastructure, security, and data solutions',
      'Responsive design ensuring a premium experience on all devices',
      'Performance-tuned architecture using Hugo and optimized assets',
    ],
    href: 'https://appscode.com',
    domain: 'appscode.com',
    image: '/images/showcase/appscode-hub.png',
  },
  {
    title: 'AppsCode Design System',
    type: 'Design System · Vue.js',
    contributions: [
      'Developed a comprehensive design system for all AppsCode frontend applications',
      'Documented components and patterns at design.appscode.com',
      'Engineered reusable Vue.js components with consistent styling and behavior',
      'Used across mission-critical products like KubeDB UI and ACE Platform',
    ],
    href: 'https://design.appscode.com/components/button',
    domain: 'design.appscode.com',
    image: '/images/showcase/design-system.png',
  },
  {
    title: 'KubeDB UI — Management Platform',
    type: 'Product UI · Vue.js · Nuxt.js',
    contributions: [
      'UI/UX design for the KubeDB Database-as-a-Service management interface',
      'Built a complex, interactive frontend with Vue.js and Nuxt.js',
      'Visualized database provisioning, scaling, and day-2 operations',
      'Streamlined Kubernetes database management for platform engineers',
    ],
    href: 'https://appscode.com/db',
    domain: 'appscode.com/db',
    image: '/images/showcase/kubedb-ui.png',
  },
  {
    title: 'Event Visuals & Brand Graphics',
    type: 'Graphic Design · Print & Digital',
    contributions: [
      'Large-format banners and booth graphics for AppsCode conference appearances',
      'Presentation slide templates aligned to the AppsCode brand',
      'Social media graphics and promotional assets for events and webinars',
      'Print-ready and digital assets for public-facing brand moments',
    ],
    href: 'https://appscode.com',
    domain: 'appscode.com',
    image: '/images/showcase/event-graphics.png',
  },
]
</script>

<style scoped>
/* No specific transitions needed for static grid */
</style>