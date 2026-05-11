// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://mohin.design',
    name: 'Md Mohin Uddin — Head of Design',
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  components: true,
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  app: {
    head: {
      title: 'Md Mohin Uddin — Head of Design & Product Architect',
      titleTemplate: '%s | mohin.design',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#25C55D' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Md Mohin Uddin' },
      ],
      script: [
        {
          children: `(function(){const t=localStorage.getItem("portal-theme")||'dark';document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(t);document.documentElement.dataset.theme=t;})();`,
          type: 'text/javascript',
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Md Mohin Uddin',
            url: 'https://mohin.design',
            image: 'https://mohin.design/og-banner.png',
            jobTitle: 'Head of Design',
            worksFor: {
              '@type': 'Organization',
              name: 'AppsCode',
              url: 'https://appscode.com',
            },
            sameAs: [
              'https://www.linkedin.com/in/mohin7/',
              'https://github.com/mohin7',
              'https://dribbble.com/mohin7',
            ],
            knowsAbout: ['UI/UX Design', 'Nuxt.js', 'Vue.js', 'Design Systems', 'Kubernetes', 'SaaS'],
          }),
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://mohin.design' },
      ],
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  content: {
    collections: {
      blog: {
        type: 'page',
        source: 'blog/**'
      }
    }
  },
  runtimeConfig: {
    tinSalt: process.env.TIN_SALT
  },
  nitro: {
    prerender: {
      routes: ['/blog'],
      crawlLinks: true
    }
  }
})
