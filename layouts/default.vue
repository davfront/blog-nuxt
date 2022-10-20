<template>
  <div class="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
    <LayoutHeader />
    <main class="flex justify-center">
      <div class="w-full max-w-2xl m-8 md:my-16">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import LayoutHeader from "~/components/LayoutHeader.vue"
</script>
