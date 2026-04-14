<template>
  <div class="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="h-px w-8 bg-accent/20"></div>
        <span class="text-accent text-[0.65rem] font-bold uppercase tracking-[0.5em]">Legal</span>
      </div>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-main mb-8">
        Terms of <br />
        <span class="italic serif-font lowercase" style="color: var(--text-soft)">service.</span>
      </h1>
      <p class="text-soft text-xl font-medium opacity-60">Last updated: April 14, 2026</p>
    </div>

    <div class="space-y-12 text-soft text-lg leading-relaxed">
      <section class="space-y-4">
        <h2 class="text-main text-2xl font-black tracking-tight">01. Professional Engagement</h2>
        <p>
          By accessing this site or engaging in my services, you agree to comply with and be bound by the following terms. 
          My practice operates on a project-based or monthly retainer model as specified in individual Master Service Agreements (MSA).
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-main text-2xl font-black tracking-tight">02. Intellectual Property</h2>
        <p>
          All content, designs, and code produced during a project engagement remain the intellectual property of Md Mohin Uddin until final payment is received, at which point ownership transfers to the client as per the specific contract terms. 
          The design system primitives and architectural frameworks used are licensed for use by the client in perpetuity.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-main text-2xl font-black tracking-tight">03. Project Velocity & Delivery</h2>
        <p>
          Project timelines—including 3-day or 7-day sprints—are estimates based on rapid feedback loops. 
          Delay in client feedback or technical blockers outside my control may shift delivery targets. 
          Commitment to "Strategic Equity" deals requires a separate legal partnership agreement.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-main text-2xl font-black tracking-tight">04. Limitation of Liability</h2>
        <p>
          In no event shall I be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on my website or resulting from service implementation.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-main text-2xl font-black tracking-tight">05. Governing Protocol</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of Bangladesh, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </section>

      <section class="pt-12 border-t border-glass text-sm opacity-50">
        <p>Terms subject to technical evolution. Agreement to these terms is implicit in any formal project initiation.</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service — Md Mohin Uddin',
  description: 'Operating protocols and service terms for Md Mohin Uddin’s design engineering practice.'
})
</script>

<style scoped>
.serif-font { font-family: 'Playfair Display', serif; }
</style>
