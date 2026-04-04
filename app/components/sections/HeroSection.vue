<template>
  <section id="top" class="hero-shell relative isolate overflow-hidden min-h-screen flex items-center py-24 md:py-32">
    <!-- Immersive Background Gradients -->
    <div class="pointer-events-none absolute inset-0" :class="theme === 'dark' ? 'hero-backdrop-dark' : 'hero-backdrop-light'"></div>
    <div class="hero-glow-left pointer-events-none absolute -left-48 top-10 h-[50rem] w-[50rem] rounded-full blur-[120px] opacity-30 md:opacity-50"></div>
    <div class="hero-glow-right pointer-events-none absolute -right-20 top-40 h-[40rem] w-[40rem] rounded-full blur-[100px] opacity-20 md:opacity-40"></div>

    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.15]">
      <!-- Floating Plus Signs -->
      <span class="absolute top-[20%] left-[10%] text-brand-a/2 text-4xl font-light">+</span>
      
      <!-- Abstract Circle Outlines -->
      <div class="absolute -left-20 top-[40%] h-96 w-96 rounded-full border border-brand-a/2"></div>
      
      <!-- Floating Dots Pattern -->
      <div class="absolute top-[15%] right-[25%] opacity-[0.02]">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="10" cy="10" r="2" fill="currentColor" class="text-brand-a" />
          <circle cx="30" cy="10" r="2" fill="currentColor" class="text-brand-a" />
          <circle cx="50" cy="10" r="2" fill="currentColor" class="text-brand-a" />
          <circle cx="10" cy="30" r="2" fill="currentColor" class="text-brand-a" />
          <circle cx="10" cy="50" r="4" fill="currentColor" class="text-brand-b" />
        </svg>
      </div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        
        <!-- Left Column: Content -->
        <div class="hero-enter relative z-20">
          <p class="handwriting text-brand-a mb-4 flex items-center gap-3 text-2xl md:text-3xl md:mb-6">
            Hire Your Next 
            <span class="text-main/20 text-sm leading-none font-sans font-black tracking-widest">•</span>
          </p>

          <h1 class="mb-6 font-black leading-[1] tracking-tight relative" style="font-size: clamp(3.5rem, 10vw, 8rem);">
            <span class="block metallic-text py-1">Designer</span>
            <span class="block brand-text-gradient py-1">& Coder</span>
            
            <!-- Handwritten Note -->
            <div class="absolute -right-8 -top-12 md:-right-24 md:-top-16 opacity-0 animate-fade-in-up" style="animation-delay: 1.2s;">
               <p class="handwriting text-brand-a text-2xl md:text-3xl -rotate-12 whitespace-nowrap">
                 Design-to-Production <br> <span class="text-xs tracking-widest uppercase font-black opacity-30 font-sans block mt-1">Efficiency focus</span>
               </p>
            </div>
          </h1>

          <p class="text-soft mb-4 max-w-lg text-lg font-medium leading-[1.3] sm:text-2xl">
            I help startups turn complex ideas into intuitive, scalable products—delivering faster launches, happier users, and standout results.
          </p>

          <!-- Current Work Badges -->
          <div class="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-soft font-medium animate-fade-in-up" style="animation-delay: 0.5s;">
            <span>Shaping cloud platforms at:</span>
            <div class="flex items-center gap-2">
              <a href="https://appscode.com" target="_blank" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle bg-white/5 hover:bg-brand-a/10 hover:text-brand-a hover:border-brand-a/30 transition-colors group/link cursor-pointer">
                <Icon name="lucide:server" class="h-3.5 w-3.5" />
                <span>AppsCode</span>
              </a>
              <a href="https://kubedb.com" target="_blank" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle bg-white/5 hover:bg-brand-a/10 hover:text-brand-a hover:border-brand-a/30 transition-colors group/link cursor-pointer">
                <Icon name="lucide:database" class="h-3.5 w-3.5" />
                <span>KubeDB</span>
              </a>
            </div>
          </div>
          <!-- <p class="text-main/80 mb-4 max-w-lg text-base font-normal leading-[1.5]">
            I design cloud-based, user-centric solutions at AppsCode, shaping products like <a href='https://appscode.com' class='underline text-brand-a' target='_blank'>appscode.com</a> and <a href='https://kubedb.com' class='underline text-brand-a' target='_blank'>kubedb.com</a>.<br>
            7+ years in UI/UX design & development. Focused on micro-interactions, scalable UI, and user behavior insights. Design is about making technology feel human.
          </p> -->
          <ul class="text-main/70 text-base mb-6 space-y-1 pl-2">
            <li class="flex items-center gap-2"><Icon name="lucide:star" class="h-4 w-4 text-brand-a" /> 7+ years building delightful user experiences</li>
            <li class="flex items-center gap-2"><Icon name="lucide:cloud" class="h-4 w-4 text-brand-a" /> Shipped 20+ SaaS & cloud platforms</li>
            <li class="flex items-center gap-2"><Icon name="lucide:rocket" class="h-4 w-4 text-brand-a" /> Expert in rapid MVP launches & scaling</li>
            <li class="flex items-center gap-2"><Icon name="lucide:mouse-pointer-click" class="h-4 w-4 text-brand-a" /> Obsessed with usability and conversion</li>
            <li class="flex items-center gap-2"><Icon name="lucide:smile" class="h-4 w-4 text-brand-a" /> Proven results: faster launches, happier users</li>
          </ul>
          <div class="flex items-center gap-4">
            <SharedButton tag="a" href="#contact" variant="primary" size="lg" class="shadow-2xl shadow-brand-a/20">
              Book a 15-min call 
              <template #right>
                <span class="text-xl leading-none italic">↗</span>
              </template>
            </SharedButton>
          </div>
        </div>

        <!-- Right Column: Premium Glass Profile Card -->
        <div class="hero-enter-delay hero-right-col relative z-10 flex justify-center lg:justify-end">
          <!-- Ambient glow blobs behind card -->
          <div class="hero-right-glow-wrap pointer-events-none absolute inset-0 z-0">
            <div class="hero-blob-a absolute w-[360px] h-[360px] rounded-full blur-[90px]"></div>
            <div class="hero-blob-b absolute w-[260px] h-[260px] rounded-full blur-[70px]"></div>
          </div>


          <!-- Main glass card -->
          <div class="hero-glass-card group relative z-10 w-full max-w-[400px]">
            <!-- Inner highlight rim -->
            <div class="hero-card-rim" aria-hidden="true"></div>

            <!-- Photo section -->
            <div class="relative px-8 pt-10 pb-6 flex flex-col items-center">
              <!-- Availability pill -->
              <div class="hero-avail-pill mb-6">
                <span class="hero-avail-dot"></span>
                <span class="text-[11px] font-semibold tracking-wide text-main/80">Available for projects</span>
              </div>

              <!-- Photo frame -->
              <div class="hero-photo-frame mb-6">
                <div class="hero-photo-ring"></div>
                <div class="hero-photo-ring hero-photo-ring-2"></div>
                <div class="hero-photo-inner">
                  <img
                    src="/img/mohin_cutout.png"
                    alt="Md Mohin Uddin"
                    class="hero-photo-img"
                  />
                </div>
              </div>

              <!-- Name & role -->
              <h2 class="text-main font-black text-2xl md:text-[1.6rem] mb-1 text-center tracking-tight">Md Mohin Uddin</h2>
              <div class="flex items-center gap-2 mb-4">
                <span class="hero-role-badge">Head of Design</span>
              </div>

              <!-- Location -->
              <div class="flex items-center gap-1.5 mb-5 text-soft text-sm">
                <Icon name="lucide:map-pin" class="h-3.5 w-3.5 text-brand-a" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <!-- Divider -->
              <div class="hero-divider mb-5"></div>

              <!-- Skill chips -->
              <div class="flex flex-wrap gap-2 justify-center mb-5">
                <span class="hero-chip">UI/UX</span>
                <span class="hero-chip">NuxtJS</span>
                <span class="hero-chip">Vue</span>
                <span class="hero-chip">Figma</span>
                <span class="hero-chip">Design Systems</span>
              </div>

              <!-- Social links row -->
              <div class="flex items-center gap-3 mb-6">
                <a href="https://github.com" target="_blank" class="hero-social-icon" aria-label="GitHub">
                  <Icon name="lucide:github" class="h-4 w-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" class="hero-social-icon" aria-label="LinkedIn">
                  <Icon name="lucide:linkedin" class="h-4 w-4" />
                </a>
                <a href="https://twitter.com" target="_blank" class="hero-social-icon" aria-label="Twitter/X">
                  <Icon name="lucide:twitter" class="h-4 w-4" />
                </a>
                <a href="mailto:me@mohin.dev" class="hero-social-icon" aria-label="Email">
                  <Icon name="lucide:mail" class="h-4 w-4" />
                </a>
              </div>

              <!-- CTA button -->
              <a href="#works" class="hero-secondary-btn w-full mt-2">
                <Icon name="lucide:layout-grid" class="h-4 w-4" />
                Explore Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#imports'
const { theme } = useTheme()
const { scheme } = useBrandScheme()
</script>

<style scoped>
/* Hide scrollbar for code editor */
.hero-shell pre::-webkit-scrollbar {
  display: none;
}
.hero-backdrop-dark {
  background: radial-gradient(circle at 10% 20%, rgba(var(--brand-rgb), 0.15), transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(var(--brand-rgb), 0.1), transparent 40%),
    linear-gradient(180deg, var(--bg-page), #000 100%);
}

.hero-backdrop-light {
  background: radial-gradient(circle at 10% 20%, rgba(var(--brand-rgb), 0.1), transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(var(--brand-rgb), 0.05), transparent 40%),
    linear-gradient(180deg, #fdfefe 0%, #f2f5f9 100%);
}

.hero-glow-left {
  background: var(--brand-a);
  animation: liquidFlow 20s infinite alternate-reverse ease-in-out;
}

.hero-glow-right {
  background: var(--brand-b);
  animation: liquidFlow 25s infinite alternate ease-in-out;
}

@keyframes liquidFlow {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    border-radius: 50%;
  }
  33% {
    transform: translate(15%, -10%) scale(1.1) rotate(45deg);
    border-radius: 40% 60% 50% 50%;
  }
  66% {
    transform: translate(-10%, 15%) scale(0.9) rotate(90deg);
    border-radius: 60% 40% 60% 40%;
  }
  100% {
    transform: translate(5%, 5%) scale(1.05) rotate(135deg);
    border-radius: 50%;
  }
}

.hero-enter {
  animation: heroRise 800ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-enter-delay {
  animation: heroRise 800ms cubic-bezier(0.16, 1, 0.3, 1) 150ms both;
}

@keyframes heroRise {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.hero-marquee-text-solid {
  background: none;
  mix-blend-mode: normal;
  opacity: 1;
}
.hero-marquee-veteran-solid {
  color: inherit;
  font-weight: 300;
  letter-spacing: 0.04em;
}

/* ─── Right column positioning ─── */
.hero-right-col {
  position: relative;
}

/* ─── Ambient glow blobs ─── */
.hero-blob-a {
  background: radial-gradient(circle, var(--brand-a), transparent 70%);
  top: 5%;
  left: 50%;
  transform: translateX(-30%);
  opacity: 0.45;
  animation: blobDrift 18s ease-in-out infinite alternate;
}
.hero-blob-b {
  background: radial-gradient(circle, var(--brand-b), transparent 70%);
  bottom: 0%;
  right: 10%;
  opacity: 0.30;
  animation: blobDrift 22s ease-in-out infinite alternate-reverse;
}
@keyframes blobDrift {
  0%   { transform: translateX(-30%) scale(1); }
  50%  { transform: translateX(-20%) scale(1.12) translateY(-8%); }
  100% { transform: translateX(-35%) scale(0.95) translateY(5%); }
}

/* ─── Main glass card ─── */
.hero-glass-card {
  border-radius: 28px;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow:
    0 2px 0 0 rgba(255,255,255,0.18) inset,
    0 32px 80px -16px rgba(0,0,0,0.45),
    0 0 0 1px rgba(0,0,0,0.08),
    0 8px 32px rgba(var(--brand-rgb), 0.08);
  transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
  overflow: hidden;
}
.hero-glass-card:hover {
  transform: translateY(-6px) scale(1.012);
  box-shadow:
    0 2px 0 0 rgba(255,255,255,0.22) inset,
    0 40px 100px -16px rgba(0,0,0,0.50),
    0 0 0 1px rgba(0,0,0,0.10),
    0 12px 48px rgba(var(--brand-rgb), 0.15);
}

/* Top highlight rim (specular line) */
.hero-card-rim {
  position: absolute;
  top: 0; left: 16px; right: 16px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55) 50%, transparent);
  border-radius: 100%;
  z-index: 10;
  pointer-events: none;
}

/* ─── Availability pill ─── */
.hero-avail-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 14px 5px 8px;
  border-radius: 100px;
  background: rgba(34,197,94,0.10);
  border: 1px solid rgba(34,197,94,0.25);
  backdrop-filter: blur(8px);
}
.hero-avail-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34,197,94,0.25);
  animation: pulseGreen 2s ease-in-out infinite;
}
@keyframes pulseGreen {
  0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.25); }
  50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0.10); }
}

/* ─── Photo frame & rings ─── */
.hero-photo-frame {
  position: relative;
  width: 132px;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-photo-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid transparent;
  background:
    linear-gradient(var(--bg-page, #0e0e0e), var(--bg-page, #0e0e0e)) padding-box,
    conic-gradient(from 0deg, var(--brand-a) 0%, var(--brand-b) 50%, var(--brand-a) 100%) border-box;
  animation: ringRotate 4s linear infinite;
}
.hero-photo-ring-2 {
  inset: -14px;
  border-width: 1.5px;
  opacity: 0.35;
  animation-duration: 8s;
  animation-direction: reverse;
}
@keyframes ringRotate {
  to { transform: rotate(360deg); }
}
.hero-photo-inner {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255,255,255,0.18);
  box-shadow: 0 8px 32px rgba(0,0,0,0.35), 0 0 0 3px rgba(var(--brand-rgb),0.15);
  background: var(--bg-panel, #18181b);
  z-index: 2;
  position: relative;
}
.hero-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  filter: brightness(1.05) contrast(1.02);
}

/* ─── Role badge ─── */
.hero-role-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 100px;
  background: linear-gradient(135deg, rgba(var(--brand-rgb),0.22) 0%, rgba(var(--brand-b-rgb, 99,102,241),0.15) 100%);
  border: 1px solid rgba(var(--brand-rgb), 0.35);
  color: var(--brand-a);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* ─── Divider ─── */
.hero-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10) 50%, transparent);
}

/* ─── Skill chips ─── */
.hero-chip {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 100px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.10);
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-soft, #a1a1aa);
  letter-spacing: 0.02em;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.hero-chip:hover {
  background: rgba(var(--brand-rgb),0.12);
  border-color: rgba(var(--brand-rgb),0.30);
  color: var(--brand-a);
}

/* ─── Social icons ─── */
.hero-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.10);
  color: var(--text-soft, #a1a1aa);
  transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
}
.hero-social-icon:hover {
  background: rgba(var(--brand-rgb),0.14);
  border-color: rgba(var(--brand-rgb),0.35);
  color: var(--brand-a);
  transform: translateY(-2px);
}

/* ─── CTA button ─── */
.hero-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 100px;
  background: linear-gradient(135deg, var(--brand-a) 0%, var(--brand-b) 100%);
  color: #fff;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  box-shadow: 0 8px 24px rgba(var(--brand-rgb), 0.35), 0 2px 8px rgba(0,0,0,0.2);
  transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, opacity 0.2s;
  text-decoration: none;
}
.hero-cta-btn:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 12px 32px rgba(var(--brand-rgb), 0.45), 0 4px 12px rgba(0,0,0,0.25);
  opacity: 0.95;
}

/* ─── Secondary Outline Button ─── */
.hero-secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 100px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
  text-decoration: none;
}
.hero-secondary-btn:hover {
  background: rgba(var(--brand-rgb), 0.1);
  border-color: rgba(var(--brand-rgb), 0.3);
  color: var(--brand-a);
  transform: translateY(-2px);
}

/* ─── Floating stat badges ─── */
.hero-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 14px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 8px 24px rgba(0,0,0,0.20);
  z-index: 20;
  min-width: 90px;
}
.hero-badge-top-left {
  top: 6%;
  left: -4%;
}
.hero-badge-bottom-right {
  bottom: 10%;
  right: -4%;
}

/* ─── Float animations for badges ─── */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-10px) rotate(1deg); }
}
@keyframes floatDelayed {
  0%, 100% { transform: translateY(0px) rotate(1deg); }
  50%       { transform: translateY(-8px) rotate(-1.5deg); }
}
.animate-float-slow {
  animation: floatSlow 5s ease-in-out infinite;
}
.animate-float-delayed {
  animation: floatDelayed 6s ease-in-out 1.5s infinite;
}
</style>
