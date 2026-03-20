<template>
  <section class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="Career Path"
        description="How my profile evolved from front-end execution into design leadership."
      />
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div class="space-y-6">
            <div 
              v-for="(step, idx) in steps" 
              :key="idx"
              class="flex gap-4"
            >
              <div class="flex-shrink-0">
                <div class="brand-gradient flex h-12 w-12 items-center justify-center rounded-md font-bold text-white">
                  {{ idx + 1 }}
                </div>
              </div>
              <div>
                <h4 class="text-main mb-2 text-lg font-bold">{{ step.title }}</h4>
                <p class="text-muted">{{ step.description }}</p>
              </div>
            </div>
          </div>
          <SharedButton tag="a" href="https://bento.me/mohin7" target="_blank" rel="noreferrer" size="lg" class="mt-8">Open Bento Profile</SharedButton>
        </div>
        
        <div class="bg-panel border-subtle flex aspect-square items-center justify-center rounded-xl border p-8">
          <div class="text-center">
            <div class="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[color:var(--brand-a)]/10 text-[color:var(--brand-a)]">
              <SharedIcon name="compass" class="h-12 w-12" />
            </div>
            <p class="text-soft">Design x Development x Open Source</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Step {
  title: string
  description: string
}

const steps: Step[] = [
  {
    title: 'Built a front-end base',
    description: 'Started with practical interface implementation, learning how products behave in real codebases.'
  },
  {
    title: 'Expanded into UI/UX design',
    description: 'Shifted from shipping screens to designing the structure, usability, and flow behind them.'
  },
  {
    title: 'Focused on systems',
    description: 'Developed stronger capabilities in design systems, prototyping, and scalable product consistency.'
  },
  {
    title: 'Now leading design at AppsCode',
    description: 'Today, I operate at the intersection of leadership, product strategy, and hands-on design execution.'
  }
]
</script>
