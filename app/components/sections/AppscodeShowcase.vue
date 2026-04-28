<template>
  <section id="appscode-work" class="relative py-28 md:py-40 overflow-hidden bg-page">

    <!-- Ambient glow -->
    <div class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-[0.04]"
         style="background: var(--accent)"></div>
    <div class="pointer-events-none absolute inset-0 opacity-[0.016]"
         style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 40px 40px;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- ── Section Header ── -->
      <SharedSectionHeader
        label="AppsCode · 6 Years · Solo Ownership"
        centered
        class="max-w-3xl mx-auto mb-16"
      >
        <template #title>
          The rarest role in tech — <span style="color: var(--text-soft)">designer, developer, decision-maker.</span>
        </template>
        <template #description>
          For 6 years I have been the <strong class="text-main font-bold">only</strong> UI/UX designer and UI developer at AppsCode — shipping Kubernetes-native products used by engineering teams globally. No handoffs. No creative directors. One person, complete ownership.
        </template>
      </SharedSectionHeader>

      <!-- Trust signal -->
      <div class="flex justify-center mb-20">
        <div class="inline-flex items-start gap-3 px-5 py-4 rounded-2xl border border-glass bg-panel text-left max-w-xl">
          <Icon name="lucide:shield-check" class="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p class="text-[0.68rem] font-medium text-soft leading-relaxed">
            <span class="text-main font-bold">Why this matters to you: </span>Every time a designer hands off to a developer, intent gets lost. Nuance evaporates. Timelines slip. When I work with you, that gap does not exist — what I design is exactly what ships.
          </p>
        </div>
      </div>

      <!-- ── Ownership Stats ── -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-24">
        <div v-for="stat in ownershipStats" :key="stat.label"
             class="relative flex flex-col gap-3 p-7 rounded-2xl border border-glass bg-panel overflow-hidden group hover:border-accent/25 transition-all duration-500">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style="background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent), transparent 93%), transparent 70%)"></div>
          <div class="relative">
            <span class="block text-4xl font-black tracking-tighter text-main leading-none mb-1">{{ stat.value }}</span>
            <span class="block text-[0.58rem] font-bold uppercase tracking-widest text-muted leading-relaxed whitespace-pre-line">{{ stat.label }}</span>
          </div>
          <p class="relative text-[0.65rem] font-medium text-soft opacity-60 leading-snug">{{ stat.context }}</p>
        </div>
      </div>

      <!-- ── Work Accordion ── -->
      <div class="mb-6">
        <p class="text-[0.58rem] font-black uppercase tracking-[0.4em] text-muted mb-8 text-center">Three landmark projects · click to expand</p>
      </div>

      <div class="space-y-3">
        <div
          v-for="(work, idx) in works"
          :key="idx"
          class="group relative rounded-[24px] border bg-panel overflow-hidden transition-all duration-500 cursor-pointer"
          :class="expanded === idx
            ? 'border-accent/20 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.25)]'
            : 'border-glass hover:border-accent/10 hover:shadow-md'"
          @click="expanded = expanded === idx ? null : idx"
        >
          <!-- Collapsed row -->
          <div class="flex flex-col md:flex-row md:items-center gap-5 p-7 md:p-8">

            <!-- Number -->
            <span class="text-[0.55rem] font-black tracking-[0.4em] text-muted font-mono w-6 shrink-0">{{ String(idx + 1).padStart(2, '0') }}</span>

            <!-- Type badge -->
            <span class="px-3 py-1 rounded-full text-[0.55rem] font-bold uppercase tracking-widest border border-glass text-muted bg-soft shrink-0">
              {{ work.type }}
            </span>

            <!-- Title + hook -->
            <div class="flex-1 min-w-0">
              <p class="text-base md:text-lg font-black tracking-tight text-main mb-0.5 group-hover:text-accent transition-colors duration-300">{{ work.title }}</p>
              <p class="text-[0.72rem] font-medium text-soft opacity-60">{{ work.hook }}</p>
            </div>

            <!-- Outcome + toggle -->
            <div class="flex items-center gap-3 shrink-0">
              <div class="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-glass bg-soft">
                <Icon name="lucide:zap" class="h-3 w-3 text-accent" />
                <span class="text-[0.6rem] font-bold text-main">{{ work.outcome }}</span>
              </div>
              <div class="h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-400"
                   :class="expanded === idx
                     ? 'bg-accent border-accent rotate-45'
                     : 'bg-soft border-glass group-hover:border-accent/20'">
                <Icon name="lucide:plus" class="h-3.5 w-3.5 transition-colors"
                      :class="expanded === idx ? 'text-accent-fg' : 'text-muted'" />
              </div>
            </div>
          </div>

          <!-- Expanded panel -->
          <Transition name="expand">
            <div v-if="expanded === idx" class="border-t border-glass">
              <div class="grid md:grid-cols-12">

                <!-- Left: narrative -->
                <div class="md:col-span-7 p-7 md:p-9 md:border-r border-glass space-y-6">

                  <!-- Before / After -->
                  <div>
                    <p class="text-[0.55rem] font-black uppercase tracking-widest text-muted mb-3">Problem → Resolution</p>
                    <div class="grid grid-cols-2 gap-3">
                      <div class="p-5 rounded-xl border border-glass bg-soft">
                        <p class="text-[0.52rem] font-black uppercase tracking-widest text-muted mb-2.5">Before</p>
                        <p class="text-[0.78rem] font-medium text-soft leading-relaxed">{{ work.before }}</p>
                      </div>
                      <div class="p-5 rounded-xl border border-accent/15" style="background: color-mix(in srgb, var(--accent), transparent 96%)">
                        <p class="text-[0.52rem] font-black uppercase tracking-widest text-accent mb-2.5">After</p>
                        <p class="text-[0.78rem] font-medium text-main leading-relaxed">{{ work.after }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Psychology -->
                  <div class="flex items-start gap-3 px-4 py-4 rounded-xl border border-glass" style="background: color-mix(in srgb, var(--accent), transparent 97%)">
                    <Icon name="lucide:brain" class="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p class="text-[0.55rem] font-black uppercase tracking-widest text-accent mb-1.5">Design Psychology</p>
                      <p class="text-[0.72rem] font-medium text-soft leading-relaxed">{{ work.psychology }}</p>
                    </div>
                  </div>

                  <!-- Contributions -->
                  <div>
                    <p class="text-[0.55rem] font-black uppercase tracking-widest text-muted mb-3">What I built</p>
                    <ul class="space-y-2">
                      <li v-for="item in work.contributions" :key="item" class="flex items-start gap-2.5">
                        <Icon name="lucide:check" class="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                        <span class="text-[0.78rem] font-medium text-soft leading-snug">{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Right: metrics + CTA -->
                <div class="md:col-span-5 p-7 md:p-9 flex flex-col justify-between gap-8">

                  <div class="space-y-5">
                    <p class="text-[0.55rem] font-black uppercase tracking-widest text-muted">Delivery Metrics</p>
                    <div v-for="metric in work.metrics" :key="metric.label" class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-[0.72rem] font-semibold text-soft">{{ metric.label }}</span>
                        <span class="text-[0.72rem] font-black text-main">{{ metric.value }}</span>
                      </div>
                      <div class="h-[2px] rounded-full overflow-hidden bg-soft">
                        <div class="h-full rounded-full bg-accent" :style="{ width: metric.bar }"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Psychology pull quote -->
                  <div class="p-5 rounded-xl border border-glass bg-soft">
                    <p class="text-[0.72rem] font-medium text-soft leading-relaxed italic">"{{ work.quote }}"</p>
                    <p class="text-[0.55rem] font-black uppercase tracking-widest text-muted mt-2">— Design rationale</p>
                  </div>

                  <a :href="work.href" target="_blank" rel="noopener"
                     class="group/link flex items-center justify-between px-5 py-4 rounded-xl border border-glass bg-soft hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                     @click.stop>
                    <div>
                      <p class="text-xs font-black text-main">View Live Site</p>
                      <p class="text-[0.55rem] font-bold text-muted uppercase tracking-widest mt-0.5">{{ work.domain }}</p>
                    </div>
                    <Icon name="lucide:arrow-up-right" class="h-4 w-4 text-accent group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- ── Closing CTA ── -->
      <div class="mt-20 relative rounded-[32px] overflow-hidden border border-glass">
        <!-- Glow backdrop -->
        <div class="absolute inset-0 bg-panel"></div>
        <div class="pointer-events-none absolute -right-32 -top-32 w-96 h-96 rounded-full blur-[100px] opacity-[0.06]" style="background: var(--accent)"></div>
        <div class="pointer-events-none absolute inset-0 opacity-[0.02]"
             style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 28px 28px;"></div>

        <div class="relative z-10 flex flex-col md:flex-row md:items-center gap-10 justify-between p-10 md:p-14">
          <div class="max-w-xl">
            <div class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass bg-soft">
              <Icon name="lucide:user-check" class="h-3 w-3 text-accent" />
              <span class="text-[0.55rem] font-black uppercase tracking-widest text-muted">What You're Actually Hiring</span>
            </div>
            <h3 class="mb-5 leading-tight">No team. No handoffs.<br><span style="color:var(--text-soft)">Just full ownership.</span></h3>
            <p class="text-soft font-medium leading-relaxed opacity-75 text-[0.9rem]">
              Most designers need a developer to ship. Most developers need a designer to think. I collapse that gap entirely — every pixel, every component, every user flow across AppsCode's entire product surface, delivered by one person without translation loss. That is the compounding advantage you are hiring.
            </p>
          </div>
          <div class="flex flex-col gap-3 shrink-0 min-w-[200px]">
            <SharedButton tag="a" href="https://cal.com/md-mohin-uddin-8gpn95/30min" target="_blank" variant="primary" size="lg" class="h-14 px-10 rounded-full" hover-text="Let's Talk">
              Work With Me
              <template #right><Icon name="lucide:arrow-right" class="h-4 w-4" /></template>
              <template #hoverRight><Icon name="lucide:calendar" class="h-4 w-4" /></template>
            </SharedButton>
            <SharedButton tag="a" href="https://appscode.com" target="_blank" variant="outline" size="md" class="rounded-full">
              See AppsCode Live ↗
            </SharedButton>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref<number | null>(null)

const ownershipStats = [
  {
    value: '1',
    label: 'Designer &\nUI Developer',
    context: 'No agency. No team. No contractor. Every decision — mine alone.'
  },
  {
    value: '15+',
    label: 'Live products\ndesigned & shipped',
    context: 'KubeDB, AppsCode, KubeVault, Stash — all in production, all by me.'
  },
  {
    value: '6yr+',
    label: 'Uninterrupted\nownership',
    context: 'Rare continuity. The system has been mine to evolve across every product generation.'
  },
  {
    value: '0',
    label: 'Handoff gaps\nor design debt',
    context: 'Figma to deployed Vue/Nuxt — I close the loop others leave open.'
  },
]

const works = [
  {
    title: 'KubeDB — Kubernetes Database Platform',
    type: 'Full Redesign · Nuxt 3 · Solo',
    hook: 'Engineers were leaving without understanding the product. I redesigned the entire site so they\'d trust it before reading a single doc.',
    outcome: 'Full redesign — zero agency',
    before: 'The site read like internal documentation. Engineers already needed to know KubeDB to understand it — a fatal evaluation flaw. No trust architecture, no progressive disclosure, no reason for a stranger to stay.',
    after: 'A capability-first experience that mirrors how senior engineers evaluate infrastructure tools. The hero answers "why KubeDB" before doubt forms. The engine matrix closes the comparison loop without a sales call.',
    psychology: 'Cognitive fluency principle: we trust what we can understand quickly. The redesign removed all friction from first evaluation — familiar layout patterns, a clear capability hierarchy, and Hick\'s Law applied ruthlessly: four navigation decisions maximum. Familiarity is not laziness — it is trust architecture.',
    quote: 'The job of the first screen is not to showcase features — it is to eliminate doubt. If a user has to think to understand your product, you have already lost them.',
    contributions: [
      'Full UI/UX redesign — from discovery through to production deployment',
      'Nuxt 3 implementation — every component architected and written by hand',
      'Buyer-journey IA restructured: awareness → trust → capability → action',
      'Visual comparison matrix for 10+ database engines, built for at-a-glance evaluation',
      'Performance pipeline: lazy loading, image optimisation, Core Web Vitals tuning',
    ],
    metrics: [
      { label: 'Pages fully redesigned', value: '12+', bar: '85%' },
      { label: 'Custom components built', value: '40+', bar: '90%' },
      { label: 'Sole ownership', value: '100%', bar: '100%' },
    ],
    href: 'https://kubedb.com',
    domain: 'kubedb.com',
  },
  {
    title: 'AppsCode.com — Central Platform Hub',
    type: 'Brand System · Platform Design · Dev',
    hook: '15 products, no shared story. Enterprise buyers could not see the platform — only isolated tools. I built the narrative from zero.',
    outcome: 'Platform identity from zero',
    before: '15 siloed product pages with no shared visual language or brand logic. Enterprise buyers could not articulate what AppsCode was as a company — only what each isolated tool did. No coherent buyer journey existed anywhere on the site.',
    after: 'A unified platform hub with a deliberate narrative arc — infrastructure layer to application layer — that lets buyers understand the full scope before any sales touchpoint. One design system. One voice. One decision-making journey.',
    psychology: 'Serial position effect: flagship products anchored at the start and end of every listing for maximum recall. Narrative transportation theory: when users follow a continuous story, their critical evaluation drops and emotional buy-in rises. The site does not list products — it tells the story of a complete infrastructure philosophy.',
    quote: 'Enterprise buyers do not buy tools. They buy conviction that the vendor has already thought through the problem the buyer has not yet articulated. The site\'s job is to think ahead of them.',
    contributions: [
      'Full brand identity and design system — built entirely from a blank canvas',
      'Platform narrative architecture — sole author of the information hierarchy',
      'All pages designed in Figma, implemented in Vue/Nuxt from scratch',
      'Unified component library adopted across all 15 AppsCode properties',
      'Dark/light theme system — engineered and refined across 3 product generations',
    ],
    metrics: [
      { label: 'Products unified under one system', value: '15+', bar: '100%' },
      { label: 'Pages owned end-to-end', value: '30+', bar: '95%' },
      { label: 'Design system coverage', value: '100%', bar: '100%' },
    ],
    href: 'https://appscode.com',
    domain: 'appscode.com',
  },
  {
    title: 'KubeVault — Secrets Management UI',
    type: 'Product Design · Risk Systems',
    hook: 'Engineers were abandoning the UI and falling back to CLI. A tool users avoid is a product that has already failed — I rebuilt the entire risk language.',
    outcome: 'Trust through visual control',
    before: 'Flat visual hierarchy made every action feel equally dangerous. Engineers could not distinguish low-risk from destructive operations at a glance, so they avoided the UI entirely. CLI fallback is the clearest signal of a broken product experience.',
    after: 'A layered risk system — colour, iconography, and motion — that communicates danger levels before a user reads a label. Destructive actions require deliberate confirmation. Safe actions are frictionless. The same interface serves novices and experts without compromise.',
    psychology: 'Loss aversion is twice as powerful as the desire for gain — users fear mistakes far more than they value speed. By making risk levels immediately legible, the design eliminates the hesitation that drove CLI fallback. Progressive disclosure protects novices without slowing experts: the rarest balance in complex product design.',
    quote: 'A security interface that makes you feel unsafe is the most dangerous product failure there is. Good design makes the right action obvious and the costly action impossible to do by accident.',
    contributions: [
      'End-to-end product UI design for the KubeVault management dashboard',
      'Risk-level visual language — colour semantics, iconography, and interaction patterns',
      'Figma component library covering every secrets management user flow',
      'Full Vue implementation with WCAG AA accessibility compliance built in',
    ],
    metrics: [
      { label: 'Critical user flows redesigned', value: '8+', bar: '80%' },
      { label: 'Risk UI pattern system', value: 'Built new', bar: '100%' },
      { label: 'WCAG Accessibility', value: 'AA', bar: '88%' },
    ],
    href: 'https://kubevault.com',
    domain: 'kubevault.com',
  },
]
</script>

<style scoped>
.expand-enter-active { transition: opacity 0.38s ease, transform 0.38s cubic-bezier(0.16, 1, 0.3, 1); }
.expand-leave-active  { transition: opacity 0.18s ease, transform 0.18s ease; }
.expand-enter-from, .expand-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
