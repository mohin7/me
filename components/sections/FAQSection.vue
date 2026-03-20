<template>
  <section id="faq" class="py-20 md:py-28">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SharedSectionHeader 
        title="Frequently Asked Questions"
        description="Get answers to common questions about working with me"
      />
      
      <div class="space-y-4">
        <div 
          v-for="(item, idx) in faqs" 
          :key="idx"
          class="border border-white/10 rounded-lg overflow-hidden hover:border-orange-500/30 transition"
        >
          <button
            @click="toggleFaq(idx)"
            class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-900/50 transition"
          >
            <h4 class="text-lg font-semibold text-white text-left">{{ item.question }}</h4>
            <span class="text-orange-400 text-2xl transform transition-transform" :style="{ transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0)' }">
              ↓
            </span>
          </button>
          <transition name="expand">
            <div v-if="activeFaq === idx" class="px-6 pb-4 bg-gray-900/30 border-t border-white/10">
              <p class="text-gray-300 leading-relaxed">{{ item.answer }}</p>
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
    question: 'What is your design process?',
    answer: 'I start with understanding your business goals and user needs through discovery. Then I create wireframes, high-fidelity designs, and interactive prototypes. Finally, I provide comprehensive documentation and developer handoff.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects take 2-4 weeks depending on scope and complexity. Our MVP Sprint takes just 1-2 weeks, while enterprise projects can be customized for longer timelines.'
  },
  {
    question: 'Do you work with remote teams?',
    answer: 'Yes! I work with clients worldwide. I use tools like Figma, Slack, and Zoom to collaborate seamlessly regardless of time zones.'
  },
  {
    question: 'What deliverables do I get?',
    answer: 'You receive Figma design files, interactive prototypes, design specifications, brand guidelines, and comprehensive documentation for your development team.'
  },
  {
    question: 'Can you help with design systems?',
    answer: 'Absolutely! I can create and maintain design systems that ensure consistency across your products and help your team scale design efficiently.'
  },
  {
    question: 'What is your revision policy?',
    answer: 'Different packages include different numbers of revision rounds. Revisions are included as long as they are within scope. Major changes beyond scope can be discussed separately.'
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
