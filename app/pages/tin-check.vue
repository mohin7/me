<template>
  <div class="min-h-screen bg-page">

    <!-- ── Page ── -->
    <div class="relative flex flex-col items-center px-4 pt-32 pb-40 overflow-hidden">

      <!-- Ambient glow -->
      <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] opacity-[0.05]" style="background: radial-gradient(ellipse at top, var(--accent) 0%, transparent 65%);"></div>

      <!-- ── Compact header ── -->
      <div class="text-center mb-12 reveal">
        <span class="section-label block mb-4">Tax Audit 2023–24</span>
        <h2 class="mb-2">TIN Audit Checker</h2>
        <p class="text-soft text-sm font-medium max-w-xs mx-auto leading-relaxed">
          Verified locally · your number never leaves this page
        </p>
      </div>

      <!-- ── Search block ── -->
      <div class="reveal reveal-delay-1 w-full max-w-2xl">

        <!-- Loading state -->
        <div v-if="dataLoading" class="rounded-[28px] p-8" style="background: var(--bg-panel); border: 1px solid var(--border-glass);">
          <div class="flex items-center gap-4">
            <div class="h-14 flex-1 rounded-2xl animate-pulse" style="background: var(--bg-soft);"></div>
            <div class="h-14 w-14 rounded-2xl animate-pulse flex-shrink-0" style="background: var(--bg-soft);"></div>
          </div>
          <p class="text-center text-[0.65rem] font-bold mt-4" style="color: var(--text-muted);">Initialising audit database…</p>
        </div>

        <!-- Search form -->
        <div v-else>

          <!-- ── Big search bar ── -->
          <div
            class="flex items-center gap-0 rounded-[20px] overflow-hidden transition-all duration-300"
            style="background: var(--bg-panel); border: 1.5px solid var(--border-glass); box-shadow: var(--card-shadow);"
            :style="focusStyle"
          >
            <!-- Icon -->
            <div class="pl-6 pr-3 flex-shrink-0">
              <Icon name="lucide:fingerprint" class="h-5 w-5 transition-colors duration-300" :style="{ color: isFocused ? 'var(--accent)' : 'var(--text-muted)' }" />
            </div>

            <!-- Input -->
            <input
              ref="inputEl"
              v-model="tin"
              type="text"
              inputmode="numeric"
              placeholder="Enter your 12-digit TIN number"
              maxlength="12"
              @focus="isFocused = true"
              @blur="isFocused = false"
              @keydown.enter="check"
              @keydown="onKeydown"
              @input="onInput"
              class="flex-1 py-5 text-base font-bold outline-none bg-transparent"
              style="color: var(--text-main); caret-color: var(--accent); letter-spacing: 0.04em;"
            />

            <!-- Counter -->
            <div class="px-4 flex-shrink-0 text-right">
              <span class="text-[0.65rem] font-black tabular-nums transition-colors duration-200" :style="{ color: tin.length === 12 ? 'var(--accent)' : 'var(--text-muted)', opacity: tin.length ? 1 : 0 }">
                {{ tin.length }}/12
              </span>
            </div>

            <!-- Search button -->
            <button
              :disabled="!canCheck"
              @click="check"
              class="m-2 h-12 px-6 rounded-2xl text-sm font-black flex items-center gap-2 transition-all duration-300 flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
              style="background: var(--accent); color: var(--accent-fg);"
              :style="canCheck ? 'box-shadow: 0 4px 16px -4px color-mix(in srgb, var(--accent) 50%, transparent);' : ''"
            >
              <Icon name="lucide:search" class="h-4 w-4" />
              <span class="hidden sm:inline">Search</span>
            </button>
          </div>

          <!-- Validation message -->
          <Transition name="hint-fade">
            <div v-if="invalidKeyMsg" class="flex items-center gap-2 mt-3 ml-1">
              <Icon name="lucide:circle-alert" class="h-3.5 w-3.5 flex-shrink-0" style="color: hsl(30, 90%, 58%);" />
              <p class="text-[0.72rem] font-bold" style="color: hsl(30, 90%, 58%);">TIN numbers are digits only — please use your real 12-digit TIN.</p>
            </div>
            <div v-else-if="validationMsg" class="flex items-center gap-2 mt-3 ml-1">
              <Icon name="lucide:info" class="h-3 w-3 flex-shrink-0" style="color: var(--text-muted);" />
              <p class="text-[0.68rem] font-semibold" style="color: var(--text-muted);">{{ validationMsg }}</p>
            </div>
          </Transition>

          <!-- ── Result panel ── -->
          <Transition name="result-slide">
            <div v-if="result" :key="result + tin" class="mt-5">

              <!-- FOUND -->
              <div v-if="result === 'found'" class="rounded-[20px] overflow-hidden" style="border: 1px solid hsla(30, 90%, 55%, 0.3); box-shadow: 0 8px 32px -8px hsla(30, 90%, 55%, 0.15);">

                <!-- Status header -->
                <div class="px-6 py-5 flex items-center gap-4" style="background: hsla(30, 90%, 55%, 0.08);">
                  <div class="relative flex-shrink-0">
                    <div class="h-11 w-11 rounded-full flex items-center justify-center" style="background: hsla(30, 90%, 55%, 0.15);">
                      <Icon name="lucide:alert-triangle" class="h-5 w-5" style="color: hsl(30, 90%, 58%);" />
                    </div>
                    <span class="absolute -top-1 -right-1 h-3 w-3 rounded-full animate-pulse" style="background: hsl(30, 90%, 58%);"></span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-black text-base leading-none mb-1" style="color: hsl(30, 90%, 58%);">Selected for Tax Audit</p>
                    <p class="text-[0.68rem] font-medium" style="color: var(--text-muted);">Assessment Year 2023–2024 · NBR Bangladesh</p>
                  </div>
                  <span class="hidden sm:flex flex-shrink-0 items-center gap-1.5 text-[0.55rem] font-black uppercase tracking-widest px-3 py-1.5 rounded-full" style="background: hsla(30,90%,55%,0.12); color: hsl(30,90%,58%); border: 1px solid hsla(30,90%,55%,0.2);">
                    <span class="h-1.5 w-1.5 rounded-full inline-block" style="background: hsl(30,90%,58%);"></span>
                    Confirmed
                  </span>
                </div>

                <!-- Detail rows -->
                <div style="border-top: 1px solid hsla(30,90%,55%,0.12);">
                  <div
                    v-for="item in matchDetails"
                    :key="item.label"
                    class="flex items-center justify-between px-6 py-3.5"
                    style="border-bottom: 1px solid var(--border-glass);"
                  >
                    <span class="text-[0.6rem] font-black uppercase tracking-[0.25em]" style="color: var(--text-muted);">{{ item.label }}</span>
                    <span class="text-xs font-bold text-right" style="color: var(--text-main);">{{ item.value }}</span>
                  </div>
                  <div class="flex items-center justify-between px-6 py-3.5">
                    <span class="text-[0.6rem] font-black uppercase tracking-[0.25em]" style="color: var(--text-muted);">TIN</span>
                    <span class="text-sm font-black font-mono tracking-widest" style="color: var(--text-main);">{{ tin }}</span>
                  </div>
                </div>

                <!-- Action footer -->
                <div class="px-6 py-4 flex items-center gap-3" style="background: hsla(30,90%,55%,0.04); border-top: 1px solid hsla(30,90%,55%,0.1);">
                  <Icon name="lucide:info" class="h-3.5 w-3.5 flex-shrink-0" style="color: var(--text-muted);" />
                  <p class="text-[0.68rem] font-medium leading-relaxed" style="color: var(--text-muted);">
                    Please contact your respective tax circle or visit <a href="https://nbr.gov.bd" target="_blank" rel="noopener noreferrer" class="font-bold hover:underline" style="color: var(--text-soft);">nbr.gov.bd</a> for further instructions.
                  </p>
                </div>
              </div>

              <!-- NOT FOUND -->
              <div v-else class="rounded-[20px] overflow-hidden" style="border: 1px solid hsla(142, 60%, 45%, 0.3);">
                <div class="px-6 py-5 flex items-center gap-4" style="background: hsla(142, 60%, 45%, 0.07);">
                  <div class="h-11 w-11 rounded-full flex items-center justify-center flex-shrink-0" style="background: hsla(142, 60%, 45%, 0.15);">
                    <Icon name="lucide:shield-check" class="h-5 w-5" style="color: hsl(142, 60%, 48%);" />
                  </div>
                  <div>
                    <p class="font-black text-base leading-none mb-1" style="color: hsl(142, 60%, 48%);">Not in Audit List</p>
                    <p class="text-[0.72rem] font-medium leading-relaxed" style="color: var(--text-soft);">
                      TIN <span class="font-black font-mono tracking-wider" style="color: var(--text-main);">{{ tin }}</span> was not selected for the 2023–24 audit. No action required.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Transition>
        </div>

        <!-- ── Source & Disclaimer ── -->
        <div class="mt-6 rounded-2xl px-5 py-4 space-y-3" style="background: var(--bg-soft); border: 1px solid var(--border-glass);">
          <div class="flex items-start gap-3">
            <Icon name="lucide:database" class="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style="color: var(--text-muted);" />
            <div>
              <p class="text-[0.58rem] font-black uppercase tracking-[0.25em] mb-1" style="color: var(--text-muted);">Official Source</p>
              <a
                href="https://nbr.gov.bd/taxtypes/income-tax/income-tax-paripatra/eng"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[0.7rem] font-bold hover:underline"
                style="color: var(--accent);"
              >
                nbr.gov.bd — Income Tax Paripatra 2023–24
              </a>
            </div>
          </div>
          <div class="h-px" style="background: var(--border-glass);"></div>
          <div class="flex items-start gap-3">
            <Icon name="lucide:triangle-alert" class="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style="color: var(--text-muted);" />
            <p class="text-[0.67rem] font-medium leading-relaxed" style="color: var(--text-muted);">
              <span class="font-black" style="color: var(--text-soft);">Disclaimer:</span>
              This tool is for informational purposes only. Data is sourced from the National Board of Revenue (NBR) Bangladesh and may not reflect the most current updates. For official confirmation please contact your tax circle or visit <a href="https://nbr.gov.bd" target="_blank" rel="noopener noreferrer" class="font-bold hover:underline" style="color: var(--text-soft);">nbr.gov.bd</a>.
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'TIN Audit Check — 2023–24',
  description: 'Check whether your Tax Identification Number appears in the 2023–24 audit selection list. Your TIN is verified locally and never sent to any server.',
})

interface AuditEntry {
  zone: string
  circle: string
  type: string
}

const tin = ref('')
const result = ref<'found' | 'notfound' | null>(null)
const matchData = ref<AuditEntry | null>(null)
const inputEl = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)

const auditLookup = ref<Record<string, AuditEntry> | null>(null)
const dataLoading = ref(true)

onMounted(async () => {
  try {
    auditLookup.value = await $fetch<Record<string, AuditEntry>>('/audit.json')
  } finally {
    dataLoading.value = false
    await nextTick()
    inputEl.value?.focus()
  }
})

const canCheck = computed(() => tin.value.length === 12 && !dataLoading.value)

const focusStyle = computed(() => isFocused.value
  ? 'border-color: color-mix(in srgb, var(--accent) 40%, transparent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 8%, transparent), var(--card-shadow);'
  : ''
)

const validationMsg = computed(() => {
  if (!tin.value.length) return ''
  if (tin.value.length < 12) return `${12 - tin.value.length} more digit${12 - tin.value.length > 1 ? 's' : ''} needed`
  return ''
})


function onKeydown(e: KeyboardEvent) {
  const control = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End']
  if (control.includes(e.key)) return
  if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) return
  if (!/^\d$/.test(e.key)) {
    e.preventDefault()
    showInvalidKeyMsg()
  }
}

let invalidKeyTimer: ReturnType<typeof setTimeout> | null = null
const invalidKeyMsg = ref(false)

function showInvalidKeyMsg() {
  invalidKeyMsg.value = true
  if (invalidKeyTimer) clearTimeout(invalidKeyTimer)
  invalidKeyTimer = setTimeout(() => { invalidKeyMsg.value = false }, 2500)
}

function onInput() {
  tin.value = tin.value.replace(/\D/g, '')
  if (result.value) result.value = null
}

function check() {
  if (!canCheck.value) return
  const normalized = tin.value.trim()
  const lookup = auditLookup.value ?? {}
  const entry = lookup[normalized]
  if (entry) {
    result.value = 'found'
    matchData.value = entry
  } else {
    result.value = 'notfound'
    matchData.value = null
  }
}

const matchDetails = computed(() => {
  if (!matchData.value) return []
  return [
    { label: 'Zone', value: matchData.value.zone },
    { label: 'Circle', value: matchData.value.circle },
    { label: 'Type', value: matchData.value.type },
  ]
})
</script>

<style scoped>
input::placeholder {
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 0;
}

.result-slide-enter-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.result-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.result-slide-leave-active { transition: opacity 0.15s ease; }
.result-slide-leave-to { opacity: 0; }

.hint-fade-enter-active, .hint-fade-leave-active { transition: opacity 0.2s ease; }
.hint-fade-enter-from, .hint-fade-leave-to { opacity: 0; }
</style>
