<template>
  <section id="services" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="I offer simple packages"
        description="Choose the right plan for your project"
      />
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(package_, idx) in packages" 
          :key="idx"
          :class="[
            'rounded-xl border p-8 transition',
            package_.featured 
              ? 'gradient-border bg-gradient-to-br from-orange-500/10 to-pink-500/10 border-orange-500/50 transform scale-105'
              : 'border-white/10 bg-gray-900/50 hover:border-orange-500/30'
          ]"
        >
          <div v-if="package_.featured" class="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            MOST POPULAR
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">{{ package_.name }}</h3>
          <p class="text-orange-400 text-3xl font-bold mb-6">${{ package_.price }}</p>
          <p class="text-gray-400 mb-8 text-sm">{{ package_.description }}</p>
          <ul class="space-y-3 mb-8">
            <li v-for="feature in package_.features" :key="feature" class="text-gray-300 text-sm flex items-start gap-2">
              <span class="text-orange-400 mt-1">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <SharedButton 
            :variant="package_.featured ? 'primary' : 'outline'"
            class="w-full"
          >
            Get Started
          </SharedButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Package {
  name: string
  price: number
  description: string
  features: string[]
  featured?: boolean
}

const packages: Package[] = [
  {
    name: 'Starter',
    price: 2500,
    description: 'Perfect for small projects and MVPs',
    features: [
      'UI/UX Design',
      'Up to 5 screens',
      'Figma prototype',
      'Revision rounds: 2',
      'Turnaround: 2 weeks'
    ]
  },
  {
    name: 'Professional',
    price: 5000,
    description: 'Complete design solution for growing startups',
    features: [
      'Everything in Starter',
      'Up to 15 screens',
      'User research',
      'Design system',
      'Revision rounds: 4',
      'Turnaround: 4 weeks'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 10000,
    description: 'Full-service design for major projects',
    features: [
      'Everything in Professional',
      'Unlimited screens',
      'Usability testing',
      'Handoff & documentation',
      'Unlimited revisions',
      'Custom timeline'
    ]
  }
]
</script>
