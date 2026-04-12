<template>
  <section id="top" class="relative min-h-[100dvh] flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">

    <!-- Subtle ambient -->
    <div class="pointer-events-none absolute inset-0 hero-bg"></div>

    <div class="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:gap-20 lg:grid-cols-[1fr_360px]">

        <!-- Left: Content -->
        <div class="hero-enter">

          <!-- Status -->
          <div class="status-pill">
            <span class="status-dot"></span>
            <span>Available for new projects</span>
          </div>

          <!-- Title -->
          <h1 class="hero-title">
            <span class="text-main">I design & build</span><br />
            <span class="hero-accent">digital products</span>
          </h1>

          <!-- Subtitle -->
          <p class="hero-sub">
            Head of Design with 7+ years helping startups turn complex ideas into intuitive, scalable products. From high-fidelity design to production-ready code.
          </p>

          <!-- Metrics -->
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num">7+</span>
              <span class="stat-label">Years</span>
            </div>
            <span class="stat-sep"></span>
            <div class="stat">
              <span class="stat-num">20+</span>
              <span class="stat-label">Products</span>
            </div>
            <span class="stat-sep"></span>
            <div class="stat">
              <span class="stat-num">100%</span>
              <span class="stat-label">Delivery</span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex items-center gap-3 flex-wrap">
            <SharedButton tag="a" href="#contact" variant="primary" size="lg">
              Book a call
              <template #right>
                <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
              </template>
            </SharedButton>
            <SharedButton tag="a" href="#works" variant="outline" size="lg">
              View work
            </SharedButton>
          </div>
        </div>

        <!-- Right: Card -->
        <div class="hero-enter-delayed flex justify-center lg:justify-end">
          <div class="profile-card group">

            <div class="photo-frame">
              <img src="/img/mohin_cutout.png" alt="Md Mohin Uddin" class="w-full h-full object-cover object-top" />
            </div>

            <h2 class="card-name">Md Mohin Uddin</h2>
            <span class="card-role">Head of Design</span>

            <p class="card-location">
              <Icon name="lucide:map-pin" class="h-3 w-3 shrink-0" style="color: var(--accent);" />
              Dhaka, Bangladesh
            </p>

            <!-- Socials -->
            <div class="card-socials">
              <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" :aria-label="s.label" class="social-btn">
                <Icon :name="s.icon" class="h-4 w-4" />
              </a>
            </div>

            <!-- Tech -->
            <div class="card-tech">
              <Icon v-for="t in techs" :key="t" :name="t" class="w-4 h-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
            </div>

            <!-- CTA link -->
            <a href="#works" class="card-link group/l">
              <span>View Selected Works</span>
              <Icon name="lucide:arrow-right" class="h-3.5 w-3.5 transition-transform group-hover/l:translate-x-0.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const socials = [
  { label: 'GitHub', href: 'https://github.com/mohin7', icon: 'lucide:github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mohin7', icon: 'lucide:linkedin' },
  { label: 'Dribbble', href: 'https://dribbble.com/mohin7', icon: 'lucide:dribbble' },
  { label: 'Email', href: 'mailto:hello.mohin4@gmail.com', icon: 'lucide:mail' },
]
const techs = ['logos:figma', 'logos:vue', 'logos:nuxt-icon', 'logos:tailwindcss-icon', 'logos:typescript-icon']
</script>

<style scoped>
/*
  RADIUS SCALE (matches navbar):
    ROUNDED-FULL (Pill) — buttons, badges, status, socials, nav links
    16px (2xl) — photo-frame, action links
    24px (3xl) — profile-card (matches main section cards)
*/

.hero-bg {
  background: radial-gradient(
    ellipse 60% 50% at 0% 35%,
    rgba(var(--accent-rgb), 0.04) 0%,
    transparent 70%
  );
}

/* ── Entry ── */
.hero-enter {
  animation: up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.hero-enter-delayed {
  animation: up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}
@keyframes up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Status ── */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px 4px 8px;
  border-radius: 9999px;           /* PILL */
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-soft);
  border: 1px solid var(--border-subtle);
  background: var(--bg-panel);
  margin-bottom: 24px;
}
.status-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.12);
  animation: blink 2.5s ease-in-out infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ── Title ── */
.hero-title {
  font-size: clamp(2.4rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}
.hero-accent { color: var(--accent); }

/* ── Subtitle ── */
.hero-sub {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-soft);
  max-width: 480px;
  margin-bottom: 24px;
}

/* ── Stats ── */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
}
.stat-num {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}
.stat-label {
  display: block;
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-top: 3px;
}
.stat-sep {
  width: 1px;
  height: 24px;
  background: var(--border-subtle);
}

/* ── Card ── */
.profile-card {
  width: 100%;
  max-width: 320px;
  padding: 24px 20px 16px;
  border-radius: 24px;              /* 24px — consistent large card */
  background: var(--bg-panel);
  border: 1px solid var(--border-subtle);
  box-shadow: 0 1px 2px rgba(0,0,0,0.02), 0 4px 16px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s, transform 0.3s;
}
.profile-card:hover {
  box-shadow: 0 2px 4px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.05);
  transform: translateY(-3px);
}

.photo-frame {
  width: 72px; height: 72px;
  border-radius: 16px;              /* 16px — refined frame */
  overflow: hidden;
  border: 1.5px solid var(--border-subtle);
  margin-bottom: 14px;
}

.card-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  text-align: center;
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.card-role {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 9999px;            /* PILL */
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: var(--accent);
  color: var(--accent-fg);
  margin-bottom: 8px;
}

.card-location {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 14px;
}

.card-socials {
  display: flex;
  gap: 6px;
  margin-bottom: 14px;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border-radius: 9999px;           /* PILL */
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  transition: all 0.15s;
}
.social-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
  transform: translateY(-1px);
}

.card-tech {
  width: 100%;
  border-top: 1px solid var(--border-subtle);
  padding-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 12px;
}

.card-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 8px;
  border-radius: 9999px;           /* PILL for actions */
  background: var(--bg-soft);
  border: 1px solid var(--border-subtle);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-soft);
  text-decoration: none;
  transition: all 0.15s;
}
.card-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}
</style>
