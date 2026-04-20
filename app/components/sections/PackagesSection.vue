<template>
  <section id="packages" class="py-24 md:py-32 bg-page relative overflow-hidden">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glass to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Asymmetric header: label+title + description right -->
      <div class="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end mb-16 md:mb-20">
        <div>
          <span class="section-label mb-6">Pricing</span>
          <h2 class="text-main mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
            Fixed scope. <span class="serif-font italic text-accent">Fixed price.</span>
          </h2>
        </div>
        <p class="text-soft text-base md:text-lg leading-relaxed max-w-sm">
          No hourly drift. Pick the engagement that matches where you are.
        </p>
      </div>

      <!-- Pricing grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div
          v-for="(pkg, idx) in packages"
          :key="idx"
          :class="[
            `reveal reveal-delay-${Math.min(idx, 3)}`,
            'group relative flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-300',
            pkg.popular
              ? 'border-accent bg-accent/[0.03] shadow-[0_12px_40px_-16px_oklch(from_var(--accent)_l_c_h_/_0.35)]'
              : 'border-glass bg-panel/40 hover:border-accent/30'
          ]"
        >
          <div v-if="pkg.popular" class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="px-3 py-1 bg-accent text-accent-fg text-xs font-medium rounded-full">
              Most popular
            </span>
          </div>

          <div class="mb-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-main text-xl font-semibold tracking-tight">{{ pkg.name }}</h3>
              <Icon v-if="pkg.icon" :name="pkg.icon" class="h-5 w-5 text-muted" />
            </div>

            <div class="flex items-baseline gap-2 mb-4">
              <span class="text-main text-4xl font-semibold tracking-tight serif-font">{{ pkg.price }}</span>
              <span class="text-soft text-sm">{{ pkg.unit }}</span>
            </div>

            <p class="text-soft text-sm leading-relaxed">
              {{ pkg.description }}
            </p>
          </div>

          <ul class="space-y-3 mb-8 flex-1 pt-6 border-t border-glass">
            <li v-for="feature in pkg.features" :key="feature" class="flex items-start gap-3 text-soft text-sm leading-snug">
              <Icon name="lucide:check" class="h-4 w-4 text-accent mt-0.5 shrink-0" />
              {{ feature }}
            </li>
          </ul>

          <a
            href="#contact"
            @click="jumpToContact"
            :class="[
              'w-full h-11 rounded-full flex items-center justify-center gap-2 font-medium text-sm transition-all',
              pkg.popular
                ? 'bg-accent text-accent-fg hover:brightness-[var(--hover-brightness)]'
                : 'bg-panel border border-glass text-main hover:border-accent'
            ]"
          >
            Start here
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </a>
        </div>
      </div>

      <!-- Equity partnership -->
      <div class="mt-10 rounded-3xl border border-glass bg-panel/40 p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div class="max-w-xl">
          <div class="flex items-center gap-2 mb-4">
            <Icon name="lucide:zap" class="h-4 w-4 text-accent" />
            <span class="mono-font text-accent text-xs font-medium">Equity partnership</span>
          </div>
          <h3 class="text-main text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-3">
            Build with me for <span class="serif-font italic text-accent">1% equity</span>.
          </h3>
          <p class="text-soft text-base leading-relaxed">
            Reserved for founders with strong conviction and early-stage capital. Two slots a year.
          </p>
        </div>
        <a href="#contact" @click="jumpToContact" class="inline-flex items-center gap-2 px-6 h-11 rounded-full hover:brightness-[var(--hover-brightness)] transition font-medium text-sm" style="background: var(--text-main); color: var(--bg-page);">
          Explore partnership
          <Icon name="lucide:arrow-right" class="h-4 w-4" />
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const jumpToContact = (e: Event) => {
  e.preventDefault()
  const el = document.getElementById('contact')
  if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
}

const packages = [
  {
    name: 'Pitch MVP',
    icon: 'lucide:cpu',
    price: '$1,450',
    unit: 'one-time',
    description: 'A precision-engineered prototype for rapid investor validation.',
    popular: false,
    features: [
      'Core brand identity',
      'High-conversion landing page',
      'Up to 10 key app screens',
      '3-day accelerated delivery',
      'Investor-ready prototype',
    ],
  },
  {
    name: 'Production MVP',
    icon: 'lucide:rocket',
    price: '$3,200',
    unit: 'one-time',
    description: 'A shippable foundation for your market entry — built in production code.',
    popular: true,
    features: [
      'Full design system',
      '4-page high-momentum site',
      'Up to 20 advanced UI screens',
      '7-day engineering sprint',
      'Pitch deck design',
    ],
  },
  {
    name: 'Design partner',
    icon: 'lucide:crown',
    price: '$5,900',
    unit: '/ month',
    description: 'Long-term architectural commitment. Embedded as your design engineering lead.',
    popular: false,
    features: [
      'Unlimited functional design',
      'Full SaaS / web app ecosystem',
      '4 weeks dedicated support',
      'Strategic decision partner',
      'Mid-level support included',
    ],
  },
]
</script>
