<template>
  <div class="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
    <LayoutHeader />
    <div class="mx-auto max-w-2xl px-6 py-12 md:px-8 md:py-16">
      <main>
        <slot />
      </main>
      <LayoutFooter />
    </div>
  </div>
</template>

<script setup>
import LayoutHeader from "~/components/LayoutHeader.vue"
import LayoutFooter from "~/components/LayoutFooter.vue"
</script>
