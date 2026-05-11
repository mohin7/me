<template>
  <div class="article-content">
    <slot />
  </div>
</template>

<style scoped>
.article-content :deep(p) {
  font-size: 1.1rem;
  line-height: 1.85;
  font-weight: 400;
  color: var(--text-soft);
  margin-bottom: 1.75rem;
  letter-spacing: -0.005em;
}

.article-content :deep(h1) {
  display: none;
}

.article-content :deep(h2) {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--text-main);
  margin-top: 3.5rem;
  margin-bottom: 1.25rem;
}

.article-content :deep(h3) {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--text-main);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.article-content :deep(blockquote) {
  border-left: 2px solid var(--accent);
  padding: 1rem 1.5rem;
  margin: 2.5rem 0;
  border-radius: 0 12px 12px 0;
  background: color-mix(in srgb, var(--accent), transparent 96%);
}

.article-content :deep(blockquote p) {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-main);
  margin: 0;
  font-style: italic;
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-bottom: 1.75rem;
  padding-left: 1.5rem;
  space-y: 0.75rem;
}

.article-content :deep(li) {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-soft);
  margin-bottom: 0.5rem;
}

.article-content :deep(a) {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  transition: opacity 0.2s;
}
.article-content :deep(a:hover) { opacity: 0.75; }

.article-content :deep(h1 a),
.article-content :deep(h2 a),
.article-content :deep(h3 a),
.article-content :deep(h4 a) {
  text-decoration: none;
  color: inherit;
}

.article-content :deep(pre) {
  border: 1px solid var(--border-glass);
  border-radius: 16px;
  padding: 1.5rem;
  margin: 2rem 0;
  overflow-x: auto;
  background: var(--bg-soft) !important;
}

.article-content :deep(code) {
  font-family: 'Inconsolata', monospace;
  font-size: 0.875rem;
  padding: 0.15rem 0.4rem;
  border-radius: 6px;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent), transparent 93%);
  border: 1px solid color-mix(in srgb, var(--accent), transparent 88%);
}

.article-content :deep(pre code) {
  background: none;
  border: none;
  padding: 0;
  color: var(--text-soft);
  font-size: 0.9rem;
}

.article-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 3rem 0;
}

.article-content :deep(strong) {
  font-weight: 800;
  color: var(--text-main);
}

.article-content :deep(img) {
  border-radius: 16px;
  border: 1px solid var(--border-glass);
  width: 100%;
  margin: 2rem 0;
}
</style>
