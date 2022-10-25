<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :color="primary" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  import colors from 'tailwindcss/colors'

  // use primary color for the loading indicator
  const primary = colors.sky[500]

  // scroll to top when navigating
  const nuxtApp = useNuxtApp()
  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })

  // head properties
  useHead({
    titleTemplate: title => title ? `${title} - David Pereira` : 'David Pereira',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    htmlAttrs: {
      lang: 'en-US'
    }
  })
</script>

<style>
/* fix tailwindcss-iconify compatibility issue with autoprefixer */
[class^="i-\["][class$="\]"] {
  mask-size: 100% 100%;
}
</style>