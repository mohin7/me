<template>
  <section id="faq" class="relative py-20 md:py-28 overflow-hidden">
    <!-- Geometric Background Architecture -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.3]">
       <div class="absolute left-[5%] md:left-[15%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-glass to-transparent"></div>
       <div class="absolute right-[5%] md:right-[15%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-glass to-transparent"></div>
       <div class="absolute top-[20%] -left-64 w-[800px] h-[800px] border-[0.5px] border-panel/20 border-dashed rounded-full animate-[spin_140s_linear_infinite]"></div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="Quick Profile Notes"
        description="Short answers that summarize what kind of designer and builder I am."
      />
      
      <div class="space-y-4">
        <div 
          v-for="(item, idx) in faqs" 
          :key="idx"
          class="group overflow-hidden rounded-2xl bg-panel/20 backdrop-blur-xl border border-glass transition-all duration-300 hover:border-brand-a/40 shadow-[inset_0_1px_0_0_var(--border-glass)]"
        >
          <button
            @click="toggleFaq(idx)"
            class="hover:bg-soft flex w-full items-center justify-between px-6 py-4 transition"
          >
            <h4 class="text-main text-left text-lg font-semibold">{{ item.question }}</h4>
            <span class="text-2xl text-[color:var(--brand-a)] transition-transform" :style="{ transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0)' }">
              ↓
            </span>
          </button>
          <transition name="expand">
            <div v-if="activeFaq === idx" class="border-glass bg-panel/40 border-t px-6 pb-6 pt-2">
              <p class="text-soft leading-relaxed text-sm">{{ item.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FAQ {
  question: string
  answer: string
}

const activeFaq = ref<number | null>(null)

const faqs: FAQ[] = [
  {
    question: 'What do you focus on most?',
    answer: 'My strongest focus is UI/UX design with a practical, implementation-aware mindset. I enjoy turning product problems into clean flows, polished interfaces, and scalable design systems.'
  },
  {
    question: 'What makes your profile different?',
    answer: 'I am not only a designer. My previous front-end development background means I understand how interfaces get built, where implementation friction appears, and how to design with that reality in mind.'
  },
  {
    question: 'Which technologies and systems do you work around?',
    answer: 'Publicly, my profile highlights work around Vue.js, Nuxt.js, Tailwind CSS, Bootstrap, Bulma CSS, JavaScript, wireframing, prototyping, and design systems.'
  },
  {
    question: 'Where are you currently working?',
    answer: 'Your public GitHub profile identifies you as Head of Design at AppsCode Ltd, based in Dhaka, Bangladesh.'
  },
  {
    question: 'How active are you in open source?',
    answer: 'Your public activity shows 714 contributions in the last year, work across AppsCode repositories, and a steady mix of commits, pull requests, and reviews.'
  },
  {
    question: 'Where should people connect with you?',
    answer: 'The clearest public links are GitHub, LinkedIn, Bento, Dribbble, Twitter/X, Facebook, and your email hello.mohin4@gmail.com.'
  }
]

const toggleFaq = (idx: number) => {
  activeFaq.value = activeFaq.value === idx ? null : idx
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  overflow: hidden;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
}
</style>
