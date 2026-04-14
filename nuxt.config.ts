// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],
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
      title: 'Md Mohin Uddin - Head of Design & Product Architect',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
        {
          children: `
            (function() {
              const stored = localStorage.getItem("portal-theme");
              const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
              const theme = stored || preferred;
              document.documentElement.classList.remove("theme-light", "theme-dark"); document.documentElement.classList.add("theme-" + theme);
            })();
          `,
          type: "text/javascript"
        }
      ],

      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})
