<template>
  <div class="min-h-screen bg-page">

    <!-- ── Page ── -->
    <div class="relative flex flex-col items-center px-4 pt-24 sm:pt-32 pb-24 sm:pb-40 overflow-hidden">

      <!-- Ambient glow -->
      <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] opacity-[0.05]" style="background: radial-gradient(ellipse at top, var(--accent) 0%, transparent 65%);"></div>

      <!-- ── Compact header ── -->
      <div class="text-center mb-12 reveal">
        <span class="section-label block mb-4">Tax Audit 2023–24</span>
        <h2 class="mb-2 text-[1.6rem] sm:text-[2.2rem] md:text-[2.8rem]">TIN Audit Checker</h2>
        <p class="text-soft text-sm font-medium max-w-xs mx-auto leading-relaxed">
          Verified locally · your number never leaves this page
        </p>
      </div>

      <!-- ── Search block ── -->
      <div class="reveal reveal-delay-1 w-full max-w-2xl">

        <!-- Search form -->
        <div>

          <!-- ── Big search bar ── -->
          <div
            class="search-bar flex items-center gap-0 rounded-[20px] overflow-hidden"
            :class="{ 'is-focused': isFocused, 'is-shaking': isShaking, 'is-loading': dataLoading }"
            style="background: var(--bg-panel); border: 1.5px solid var(--border-glass); box-shadow: var(--card-shadow);"
          >
            <!-- Icon -->
            <div class="pl-4 sm:pl-6 pr-2 sm:pr-3 flex-shrink-0">
              <Icon
                name="lucide:fingerprint"
                class="h-5 w-5 fingerprint-icon"
                :class="{ 'is-active': isFocused || tin.length }"
              />
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

            <!-- Counter / Clear -->
            <div class="px-2 sm:px-4 flex-shrink-0 flex items-center gap-1.5 sm:gap-2">
              <span
                class="hidden sm:inline text-[0.65rem] font-black tabular-nums counter"
                :class="{ 'is-complete': tin.length === 12 }"
                :style="{ opacity: tin.length ? 1 : 0 }"
              >
                {{ tin.length }}/12
              </span>
              <Transition name="pop">
                <button v-if="tin.length" @click="reset" class="clear-btn flex items-center justify-center h-6 w-6 rounded-full" style="background: var(--bg-soft); color: var(--text-muted);">
                  <Icon name="lucide:x" class="h-3 w-3" />
                </button>
              </Transition>
            </div>

            <!-- Search button -->
            <button
              :disabled="!canCheck"
              @click="check"
              class="search-btn m-2 h-11 sm:h-12 px-4 sm:px-6 rounded-2xl text-sm font-black flex items-center gap-2 flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
              style="background: var(--accent); color: var(--accent-fg);"
            >
              <Transition name="icon-swap" mode="out-in">
                <svg v-if="dataLoading" key="spinner" class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.5" stroke-dasharray="31.4" stroke-dashoffset="10" stroke-linecap="round" />
                </svg>
                <Icon v-else key="search" name="lucide:search" class="h-4 w-4" />
              </Transition>
              <span class="hidden sm:inline">{{ dataLoading ? 'Checking…' : 'Search' }}</span>
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
          <!-- Recent searches -->
          <Transition name="hint-fade">
            <div v-if="isMounted && recentSearches.length && !result && !tin.length" class="mt-3 px-1">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[0.58rem] font-black uppercase tracking-[0.3em]" style="color: var(--text-muted);">Recent</span>
                <button @click="clearHistory" class="text-[0.58rem] font-bold hover:underline" style="color: var(--text-muted);">Clear all</button>
              </div>
              <div class="rounded-2xl overflow-hidden" style="border: 1px solid var(--border-glass);">
                <TransitionGroup name="list-item">
                <div
                  v-for="(s, i) in recentSearches"
                  :key="s.tin"
                  class="history-row group flex items-center justify-between px-4 py-2.5"
                  :style="i !== recentSearches.length - 1 ? 'border-bottom: 1px solid var(--border-glass);' : ''"
                >
                  <button @click="fillFromHistory(s.tin)" class="flex items-center gap-3 flex-1 min-w-0 text-left">
                    <span
                      class="h-1.5 w-1.5 rounded-full flex-shrink-0"
                      :style="{ background: s.found ? 'hsl(30,90%,58%)' : 'hsl(142,60%,48%)' }"
                    ></span>
                    <span class="text-sm font-black font-mono tracking-wider" style="color: var(--text-main);">{{ s.tin }}</span>
                  </button>
                  <div class="flex items-center gap-3 flex-shrink-0">
                    <span class="text-[0.6rem] font-black uppercase tracking-widest" :style="{ color: s.found ? 'hsl(30,90%,58%)' : 'hsl(142,60%,48%)' }">
                      {{ s.found ? 'Selected' : 'Not found' }}
                    </span>
                    <button
                      @click="removeFromHistory(s.tin)"
                      class="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 flex items-center justify-center h-5 w-5 rounded-full transition-all duration-200 hover:scale-110 active:scale-90"
                      style="background: var(--bg-soft); color: var(--text-muted);"
                    >
                      <Icon name="lucide:x" class="h-2.5 w-2.5" />
                    </button>
                  </div>
                </div>
                </TransitionGroup>
              </div>
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
                <div class="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3" style="background: hsla(30,90%,55%,0.04); border-top: 1px solid hsla(30,90%,55%,0.1);">
                  <div class="flex items-start gap-2 flex-1">
                    <Icon name="lucide:info" class="h-3.5 w-3.5 flex-shrink-0 mt-0.5" style="color: var(--text-muted);" />
                    <p class="text-[0.68rem] font-medium leading-relaxed" style="color: var(--text-muted);">
                      Contact your tax circle or visit <a href="https://nbr.gov.bd" target="_blank" rel="noopener noreferrer" class="font-bold hover:underline" style="color: var(--text-soft);">nbr.gov.bd</a>.
                    </p>
                  </div>
                  <button @click="reset" class="self-start sm:self-auto flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-[0.68rem] font-black transition-all duration-200 hover:scale-105 active:scale-95" style="background: var(--bg-soft); color: var(--text-soft); border: 1px solid var(--border-glass);">
                    <Icon name="lucide:rotate-ccw" class="h-3 w-3" />
                    Search Again
                  </button>
                </div>
              </div>

              <!-- NOT FOUND -->
              <div v-else class="rounded-[20px] overflow-hidden" style="border: 1px solid hsla(142, 60%, 45%, 0.3);">
                <div class="px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4" style="background: hsla(142, 60%, 45%, 0.07);">
                  <div class="flex items-center gap-4 flex-1 min-w-0">
                    <div class="h-11 w-11 rounded-full flex items-center justify-center flex-shrink-0" style="background: hsla(142, 60%, 45%, 0.15);">
                      <Icon name="lucide:shield-check" class="h-5 w-5" style="color: hsl(142, 60%, 48%);" />
                    </div>
                    <div class="min-w-0">
                      <p class="font-black text-base leading-none mb-1" style="color: hsl(142, 60%, 48%);">Not in Audit List</p>
                      <p class="text-[0.72rem] font-medium leading-relaxed" style="color: var(--text-soft);">
                        TIN <span class="font-black font-mono tracking-wider" style="color: var(--text-main);">{{ tin }}</span> was not selected for the 2023–24 audit. No action required.
                      </p>
                    </div>
                  </div>
                  <button @click="reset" class="self-start sm:self-auto flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-[0.68rem] font-black transition-all duration-200 hover:scale-105 active:scale-95" style="background: var(--bg-soft); color: var(--text-soft); border: 1px solid var(--border-glass);">
                    <Icon name="lucide:rotate-ccw" class="h-3 w-3" />
                    Search Again
                  </button>
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

const dataLoading = ref(false)

interface RecentSearch { tin: string; found: boolean }
const HISTORY_KEY = 'tin-check-history'
const MAX_HISTORY = 15

const recentSearches = ref<RecentSearch[]>([])
const isMounted = ref(false)

onMounted(async () => {
  try {
    recentSearches.value = JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]')
  } catch {}
  isMounted.value = true
  await nextTick()
  inputEl.value?.focus()
})

function saveToHistory(tin: string, found: boolean) {
  const list = recentSearches.value.filter(s => s.tin !== tin)
  list.unshift({ tin, found })
  recentSearches.value = list.slice(0, MAX_HISTORY)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(recentSearches.value))
}

function fillFromHistory(savedTin: string) {
  tin.value = savedTin
  nextTick(() => check())
}

function removeFromHistory(tin: string) {
  recentSearches.value = recentSearches.value.filter(s => s.tin !== tin)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(recentSearches.value))
}

function clearHistory() {
  recentSearches.value = []
  localStorage.removeItem(HISTORY_KEY)
}

const canCheck = computed(() => tin.value.length === 12 && !dataLoading.value)



const isShaking = ref(false)

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
  // Shake the search bar
  isShaking.value = true
  setTimeout(() => { isShaking.value = false }, 500)
}

function reset() {
  tin.value = ''
  result.value = null
  matchData.value = null
  nextTick(() => inputEl.value?.focus())
}

function onInput() {
  tin.value = tin.value.replace(/\D/g, '')
  if (result.value) result.value = null
}

async function check() {
  if (!canCheck.value) return
  dataLoading.value = true
  try {
    const res = await $fetch<{ found: boolean; zone?: string; circle?: string; type?: string }>('/api/tin-check', {
      method: 'POST',
      body: { tin: tin.value.trim() }
    })
    if (res.found) {
      result.value = 'found'
      matchData.value = { zone: res.zone ?? '', circle: res.circle ?? '', type: res.type ?? '' }
    } else {
      result.value = 'notfound'
      matchData.value = null
    }
    saveToHistory(tin.value.trim(), res.found)
  } catch {
    result.value = 'notfound'
    matchData.value = null
  } finally {
    dataLoading.value = false
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

/* ── Search bar ── */
.search-bar {
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease;
}
.search-bar.is-focused {
  border-color: color-mix(in srgb, var(--accent) 35%, transparent) !important;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 7%, transparent), var(--card-shadow) !important;
}
.search-bar.is-loading {
  opacity: 0.85;
}

/* Shake on invalid key */
.search-bar.is-shaking {
  animation: shake 0.45s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  15%       { transform: translateX(-5px); }
  30%       { transform: translateX(5px); }
  45%       { transform: translateX(-4px); }
  60%       { transform: translateX(4px); }
  75%       { transform: translateX(-2px); }
  90%       { transform: translateX(2px); }
}

/* ── Fingerprint icon ── */
.fingerprint-icon {
  color: var(--text-muted);
  transition: color 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.fingerprint-icon.is-active {
  color: var(--accent);
  transform: scale(1.15);
}

/* ── Counter ── */
.counter {
  color: var(--text-muted);
  transition: color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.counter.is-complete {
  color: var(--accent);
  transform: scale(1.1);
}

/* ── Clear button ── */
.clear-btn {
  transition: background 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
}
.clear-btn:hover { transform: scale(1.15); }
.clear-btn:active { transform: scale(0.88); }

/* ── Search button ── */
.search-btn {
  transition: opacity 0.25s ease, box-shadow 0.25s ease, transform 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}
.search-btn:not(:disabled) {
  box-shadow: 0 4px 16px -4px color-mix(in srgb, var(--accent) 50%, transparent);
}
.search-btn:not(:disabled):hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px -4px color-mix(in srgb, var(--accent) 60%, transparent);
}
.search-btn:active:not(:disabled) { transform: scale(0.95); }

/* ── Spinner ── */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.animate-spin { animation: spin 0.8s linear infinite; }

/* ── Icon swap (search ↔ spinner) ── */
.icon-swap-enter-active { transition: opacity 0.15s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.icon-swap-leave-active { transition: opacity 0.1s ease; position: absolute; }
.icon-swap-enter-from   { opacity: 0; transform: scale(0.6) rotate(-30deg); }
.icon-swap-leave-to     { opacity: 0; }

/* ── Pop (clear button appear) ── */
.pop-enter-active { transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.pop-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.pop-enter-from   { opacity: 0; transform: scale(0.5); }
.pop-leave-to     { opacity: 0; transform: scale(0.5); }

/* ── Result panel ── */
.result-slide-enter-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.result-slide-enter-from {
  opacity: 0;
  transform: translateY(14px) scale(0.98);
}
.result-slide-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.result-slide-leave-to     { opacity: 0; transform: translateY(-6px) scale(0.98); }

/* ── History row hover ── */
.history-row {
  transition: background 0.2s ease, padding-left 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}
.history-row:hover {
  background: var(--bg-soft);
  padding-left: 20px;
}

/* ── History list items ── */
.list-item-enter-active {
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.list-item-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease, max-height 0.25s ease;
  overflow: hidden;
}
.list-item-enter-from { opacity: 0; transform: translateX(-10px); }
.list-item-leave-to   { opacity: 0; transform: translateX(10px); max-height: 0; }
.list-item-move       { transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1); }

/* ── Hint / validation fade ── */
.hint-fade-enter-active { transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.hint-fade-leave-active { transition: opacity 0.15s ease; }
.hint-fade-enter-from   { opacity: 0; transform: translateY(-4px); }
.hint-fade-leave-to     { opacity: 0; }
</style>
