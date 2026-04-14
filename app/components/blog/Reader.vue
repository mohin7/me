<template>
  <div class="prose prose-xl max-w-none article-content">
    <slot />
  </div>
</template>

<style scoped>
/* Surgical typography for high-density technical reading */
:deep(.article-content) {
  --tw-prose-body: var(--text-soft);
  --tw-prose-headings: var(--text-main);
  --tw-prose-links: var(--accent);
  --tw-prose-bold: var(--text-main);
  --tw-prose-quotes: var(--text-main);
}

:deep(p) {
  @apply text-lg leading-[1.8] mb-8 font-medium text-soft;
}

:deep(h2) {
  @apply text-4xl font-black tracking-tighter mt-16 mb-8 text-main leading-none;
}

:deep(h3) {
  @apply text-2xl font-black tracking-tight mt-12 mb-6 text-main;
}

:deep(blockquote) {
  @apply border-l-4 border-accent pl-8 py-2 my-12 text-2xl text-main rounded-r-3xl pr-8 font-black;
  background-color: color-mix(in srgb, var(--accent), transparent 97%);
}

:deep(ul), :deep(ol) {
  @apply space-y-4 mb-8 pl-6;
}

:deep(li) {
  @apply text-lg opacity-80;
}

:deep(pre) {
  @apply border border-glass rounded-2xl p-6 my-12 overflow-x-auto;
  background-color: color-mix(in srgb, var(--panel), transparent 50%);
}

:deep(code) {
  @apply font-mono text-sm px-1.5 py-0.5 rounded-md border;
  color: var(--accent);
  border-color: color-mix(in srgb, var(--accent), transparent 90%);
  background-color: color-mix(in srgb, var(--accent), transparent 95%);
}
</style>
