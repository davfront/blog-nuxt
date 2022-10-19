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
</script>
