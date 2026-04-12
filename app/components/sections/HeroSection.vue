<template>
  <section id="top" class="relative min-h-[100dvh] flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-page">
    
    <!-- ── Enhanced Visual Texture Layers (Adaptive Theme) ── -->
    <div class="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <!-- High-Visibility Grid Pattern (Adaptive Opacity) -->
      <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" 
           style="background-image: radial-gradient(var(--brand-a) 1px, transparent 1px); background-size: 32px 32px;"></div>
      
      <!-- Vivid Mesh Gradient Glows (Smoky/Ethereal) -->
      <div class="absolute -left-[10%] top-[0%] h-[700px] w-[700px] rounded-full bg-brand-a/10 dark:bg-brand-a/5 blur-[160px] animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div class="absolute -right-[5%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-brand-a/8 dark:bg-brand-a/3 blur-[140px] animate-[pulse_10s_ease-in-out_infinite]"></div>
      
      <!-- Architectural Geometric Shapes -->
      <div class="absolute right-[5%] top-[10%] opacity-[0.08] dark:opacity-[0.04] hidden lg:block">
        <div class="relative h-80 w-80 border-[1px] border-brand-a/30 border-dashed rounded-full animate-[spin_100s_linear_infinite]">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-brand-a/40 shadow-[0_0_20px_rgba(var(--brand-rgb),0.3)]"></div>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full border border-brand-a/40 bg-panel"></div>
        </div>
      </div>

      <!-- Floating Minimalist Lines -->
      <div class="absolute left-[5%] bottom-[15%] opacity-[0.08] dark:opacity-[0.04] hidden lg:block">
        <div class="flex flex-col gap-4">
          <div class="h-px w-32 bg-brand-a"></div>
          <div class="h-px w-16 bg-brand-a translate-x-8"></div>
          <div class="h-px w-24 bg-brand-a"></div>
        </div>
      </div>

      <!-- Noise Overlay (Adaptive Mix-blend) -->
      <div class="absolute inset-0 opacity-[0.025] dark:opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:gap-20 lg:grid-cols-[1fr_360px]">

        <!-- Left: Content -->
        <div class="hero-enter">
          <!-- Status -->
          <div class="status-pill group">
            <span class="status-dot"></span>
            <span class="relative overflow-hidden">
               <span class="block transition-transform duration-300 group-hover:-translate-y-full">Available for new projects</span>
               <span class="absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-brand-a font-bold">In-demand • Ready to scale</span>
            </span>
          </div>

          <!-- Title -->
          <h1 class="hero-title">
            <span class="text-main">I design & build</span><br />
            <span class="hero-accent relative inline-block">
              digital products
              <svg class="absolute -bottom-2 left-0 w-full h-2 text-brand-a/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="hero-sub font-medium leading-relaxed">
            Head of Design with <span class="text-main font-bold">7+ years</span> expertise. I help founders bridge the gap between complex vision and <span class="text-main font-bold">shippable, high-impact</span> product experiences.
          </p>

          <!-- Metrics Panel (Adaptive theme) -->
          <div class="hero-stats-panel p-6 rounded-3xl border border-subtle bg-panel/40 backdrop-blur-md mb-10 inline-flex items-center gap-10">
            <div class="stat group">
              <span class="stat-num group-hover:text-brand-a transition-colors">7y+</span>
              <span class="stat-label">Product Craft</span>
            </div>
            <span class="stat-sep"></span>
            <div class="stat group">
              <span class="stat-num group-hover:text-brand-a transition-colors">24+</span>
              <span class="stat-label">Built & Swung</span>
            </div>
            <span class="stat-sep"></span>
            <div class="stat group">
              <span class="stat-num group-hover:text-brand-a transition-colors">Top</span>
              <span class="stat-label">1% Delivery</span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex items-center gap-5 flex-wrap">
            <SharedButton tag="a" href="#contact" variant="primary" size="lg">
              Transform your Idea
              <template #right>
                <Icon name="zap" class="h-4 w-4" />
              </template>
            </SharedButton>
            <SharedButton tag="a" href="#works" variant="outline" size="lg" class="bg-panel/20 backdrop-blur-md">
              View Portfolios
            </SharedButton>
          </div>
        </div>

        <!-- Right: Profile Card (Frost Effect) -->
        <div class="hero-enter-delayed flex justify-center lg:justify-end">
          <div class="profile-card relative group p-1 border border-glass bg-glass backdrop-blur-xl">
            
            <!-- Dynamic Gradient Rim -->
            <div class="absolute inset-0 bg-gradient-to-tr from-brand-a/30 via-transparent to-brand-a/5 rounded-[24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div class="relative z-10 w-full flex flex-col items-center bg-panel/60 dark:bg-panel/20 rounded-[22px] p-6 pb-4 shadow-sm border border-glass">
              <div class="photo-frame-v2 group-hover:border-brand-a/40 transition-all duration-500">
                <img src="/img/mohin_cutout.png" alt="Md Mohin Uddin" class="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
              </div>

              <h2 class="card-name group-hover:text-brand-a transition-colors">Md Mohin Uddin</h2>
              <span class="card-role-v2">Product Design Lead</span>

              <p class="card-location">
                <Icon name="globe" class="h-3 w-3 shrink-0" style="color: var(--accent);" />
                Full-remote • BD
              </p>

              <!-- Socials (Pill Group) -->
              <div class="flex gap-2 p-1 bg-soft/50 rounded-full mb-6">
                <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" class="social-btn-v2" :aria-label="s.label">
                  <Icon :name="s.icon" class="h-4 w-4" />
                </a>
              </div>

              <!-- Tech stack -->
              <div class="w-full pt-4 border-t border-brand-a/5 flex justify-center gap-4 mb-4">
                <Icon v-for="t in techs" :key="t" :name="t" class="w-5 h-5 grayscale opacity-50 dark:opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
              </div>

              <!-- Mini Detail -->
              <div class="text-[0.6rem] font-bold text-muted uppercase tracking-[0.2em] mb-4">7y+ Design Lead</div>
            </div>
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
const techs = ['figma', 'vue', 'nuxt', 'tailwindcss', 'typescript']
</script>

<style scoped>
/* ── Entry Animations ── */
.hero-enter { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
.hero-enter-delayed { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both; }
@keyframes slideUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }

/* ── Status Pill ── */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px 8px 12px;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-soft);
  border: 1px solid var(--brand-a);
  background: var(--bg-panel);
  margin-bottom: 32px;
  box-shadow: 0 10px 30px rgba(var(--brand-rgb), 0.08);
}
.status-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.5);
  position: relative;
}
.status-dot::after {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid #22c55e;
  animation: statusPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes statusPulse { 0% { transform: scale(0.6); opacity: 1; } 100% { transform: scale(2.5); opacity: 0; } }

/* ── Typography ── */
.hero-title {
  font-size: clamp(2.8rem, 7vw, 4.75rem);
  font-weight: 950;
  line-height: 0.95;
  letter-spacing: -0.05em;
  margin-bottom: 32px;
}
.hero-accent { color: var(--brand-a); }

.hero-sub {
  font-size: 1.25rem;
  color: var(--text-soft);
  max-width: 580px;
  margin-bottom: 40px;
}

/* ── Statistics Panel ── */
.hero-stats-panel {
  box-shadow: 0 15px 40px rgba(0,0,0,0.04);
  background: var(--bg-panel);
}
.stat-num {
  font-size: 2rem;
  font-weight: 950;
  color: var(--text-main);
  letter-spacing: -0.03em;
}
.stat-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  margin-top: 4px;
}
.stat-sep { width: 1.5px; height: 40px; background: var(--brand-a); opacity: 0.1; }

/* ── Profile Card V2 ── */
.profile-card {
  width: 100%;
  max-width: 360px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.06);
  background: var(--bg-panel);
}

.photo-frame-v2 {
  width: 90px; height: 90px;
  border-radius: 24px;
  overflow: hidden;
  border: 3px solid var(--bg-panel);
  margin-bottom: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  background: var(--bg-soft);
  ring: 1px solid var(--brand-a);
  ring-opacity: 0.1;
}

.card-name {
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 10px;
  letter-spacing: -0.03em;
}

.card-role-v2 {
  padding: 4px 16px;
  border-radius: 9999px;
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  background: var(--brand-a);
  color: white;
  margin-bottom: 14px;
  box-shadow: 0 4px 12px rgba(var(--brand-rgb), 0.3);
}

.card-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.social-btn-v2 {
  width: 38px; height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-soft);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.social-btn-v2:hover {
  background: var(--bg-soft);
  color: var(--brand-a);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transform: scale(1.1) translateY(-2px);
}
</style>
