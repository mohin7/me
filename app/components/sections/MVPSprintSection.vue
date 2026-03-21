<template>
  <section id="sprint" class="py-24 md:py-32 bg-panel/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2 class="text-main mb-4 text-4xl font-black tracking-tight md:text-5xl uppercase">My 7-Days MVP Sprint</h2>
        <p class="text-soft mx-auto max-w-2xl text-lg font-medium leading-relaxed">
          Launch your startup with confidence—turning your complex vision into a high-fidelity, interactive prototype in just one week.
        </p>
      </div>
      
      <div class="grid gap-12 lg:grid-cols-[1fr_auto_1fr] items-center">
        <!-- Process Steps -->
        <div class="space-y-4">
          <div 
            v-for="(step, idx) in leftSteps" 
            :key="idx"
            class="group relative rounded-2xl border border-subtle bg-panel/40 p-6 transition-all hover:bg-panel"
          >
            <div class="flex items-center gap-4">
              <div class="brand-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-black text-white shadow-lg shadow-brand-a/10">
                {{ step.day }}
              </div>
              <div>
                <h4 class="text-main text-lg font-black tracking-tight uppercase">{{ step.title }}</h4>
                <p class="text-muted text-sm font-medium">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual Separator Line -->
        <div class="hidden lg:flex flex-col items-center gap-4">
          <div class="w-px h-full bg-gradient-to-b from-transparent via-subtle to-transparent"></div>
          <div class="brand-gradient h-3 w-3 rounded-full animate-pulse"></div>
          <div class="w-px h-full bg-gradient-to-t from-transparent via-subtle to-transparent"></div>
        </div>

        <!-- Remaining Steps -->
        <div class="space-y-4">
          <div 
            v-for="(step, idx) in rightSteps" 
            :key="idx"
            class="group relative rounded-2xl border border-subtle bg-panel/40 p-6 transition-all hover:bg-panel"
          >
            <div class="flex items-center gap-4">
              <div class="brand-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-black text-white shadow-lg shadow-brand-a/10">
                {{ step.day }}
              </div>
              <div>
                <h4 class="text-main text-lg font-black tracking-tight uppercase">{{ step.title }}</h4>
                <p class="text-muted text-sm font-medium">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 flex flex-col items-center gap-6">
          <div class="bg-soft border-subtle flex items-center gap-4 rounded-2xl border px-6 py-4">
            <Icon name="lucide:bolt" class="text-[color:var(--brand-a)] h-6 w-6" />
            <p class="text-soft text-sm font-bold uppercase tracking-widest">Speed + Clarity + Quality = Success</p>
          </div>
          <SharedButton tag="a" href="#contact" size="lg" class="!rounded-full px-10 py-5 text-lg font-bold">Start your sprint</SharedButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const leftSteps = [
  { day: '01', title: 'Strategy & Flows', description: 'Deep dive into your product goals and defining core user journeys.' },
  { day: '02', title: 'Wireframing', description: 'Creating low-fidelity blueprints to nail down the UX structure early.' },
  { day: '03', title: 'Visual Identity', description: 'Setting the mood, colors, and typography for a premium look.' }
]

const rightSteps = [
  { day: '04', title: 'High-Fi Design', description: 'Crafting pixel-perfect screens for your MVP\'s most critical features.' },
  { day: '06', title: 'Prototyping', description: 'Linking screens into an interactive flow for testing and pitching.' },
  { day: '07', title: 'Handoff', description: 'Exporting assets and documentation so developers can start building.' }
]
</script>
