import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  target: 'static',
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    highlight: {
      theme: 'dracula'
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  },
  vite: {
    plugins: [svgLoader()]
  }
})
