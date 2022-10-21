import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  vite: {
    plugins: [svgLoader()]
  },
});