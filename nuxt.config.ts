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
    url: 'https://mohin-design.vercel.app',
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
      title: 'Md Mohin Uddin — Best UI/UX Designer in Bangladesh | Product Architect',
      titleTemplate: '%s | Md Mohin Uddin',
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
          innerHTML: `(function(){const t=localStorage.getItem("portal-theme")||'dark';document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(t);document.documentElement.dataset.theme=t;})();`,
          type: 'text/javascript',
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-EKZEKVJBRP',
          async: true,
        },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-EKZEKVJBRP');`,
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Md Mohin Uddin',
            url: 'https://mohin-design.vercel.app',
            image: 'https://mohin-design.vercel.app/og-banner.png',
            jobTitle: 'UI/UX Designer & Product Architect',
            description: 'Best UI/UX designer in Bangladesh. Freelance product designer based in Dhaka with 7+ years designing SaaS, web apps, and design systems for global clients.',
            worksFor: {
              '@type': 'Organization',
              name: 'AppsCode',
              url: 'https://appscode.com',
            },
            hasOccupation: {
              '@type': 'Occupation',
              name: 'UI/UX Designer',
              occupationLocation: {
                '@type': 'City',
                name: 'Dhaka',
              },
              description: 'Freelance UI/UX designer and product architect in Bangladesh specializing in SaaS, web apps, and design systems.',
              skills: 'UI/UX Design, Product Design, Figma, Nuxt.js, Vue.js, Design Systems, SaaS, Web App Design, Mobile App Design',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dhaka',
              addressRegion: 'Dhaka Division',
              addressCountry: 'BD',
            },
            sameAs: [
              'https://www.linkedin.com/in/mohin7/',
              'https://github.com/mohin7',
              'https://dribbble.com/mohin7',
            ],
            knowsAbout: [
              'UI/UX Design',
              'Product Design',
              'Freelance UI Designer',
              'Web Design Bangladesh',
              'SaaS Design',
              'Mobile App Design',
              'Design Systems',
              'Nuxt.js',
              'Vue.js',
              'Figma',
              'Kubernetes',
              'Bangladesh',
              'Dhaka',
            ],
          }),
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      noscript: [
        { innerHTML: 'Please enable JavaScript to use this site.' }
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
  content: {},
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
