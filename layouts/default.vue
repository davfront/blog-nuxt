<template>
  <div class="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
    <header class="sticky top-0 z-30 border-black border-b border-opacity-10 bg-white bg-opacity-75 backdrop-blur dark:bg-gray-900 dark:bg-opacity-75 dark:border-white dark:border-opacity-10">
      <div class="px-8 h-16 flex items-center">
        <NuxtLink to="/" class="block">
          <Logo class="h-8 fill-primary" />
        </NuxtLink>
        <span class="mx-auto"></span>
        <nav class="-mx-4 flex items-center">
          <NuxtLink
            to="/"
            class="p-4 flex items-center text-sm font-semibold transition-colors hover:text-primary-500"
            activeClass="text-primary-500">
            About
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="p-4 flex items-center text-sm font-semibold transition-colors hover:text-primary-500"
            activeClass="text-primary-500">
            Blog
          </NuxtLink>
          <NuxtLink
            to="/bookmarks"
            class="p-4 flex items-center text-sm font-semibold transition-colors hover:text-primary-500"
            activeClass="text-primary-500">
            Bookmarks
          </NuxtLink>
          <div class="block h-6 border-l border-black opacity-10 dark:border-white mx-4" />
          <div class="flex items-center">
            <a
            href="https://github.com/davfront"
              target="_blank"
              class="p-4 flex items-center text-sm font-semibold transition-colors hover:text-primary-500 cursor-pointer">
              <div class="text-lg i-[ri-github-fill]" />
            </a>
            <a
              href="https://www.linkedin.com/in/davidpereiranet/"
              target="_blank"
              class="p-4 flex items-center text-sm font-semibold transition-colors hover:text-primary-500 cursor-pointer">
              <div class="text-lg i-[ri-linkedin-fill]" />
            </a>
            <a
              href="mailto:contact@david-pereira.net"
              target="_blank"
              class="p-4 flex items-center text-sm font-semibold transition-colors hover:text-primary-500 cursor-pointer">
              <div class="text-lg i-[ri-mail-line]" />
            </a>
            <a
              @click="toggleDark()"
              class="p-4 flex items-center text-sm font-semibold transition-colors hover:text-primary-500 cursor-pointer">
              <div class="text-lg" :class="isDark ? 'i-[ri-moon-line]' : 'i-[ri-sun-line]'" />
            </a>
          </div>
        </nav>
      </div>
    </header>
    <main class="flex justify-center">
      <div class="w-full max-w-2xl m-8 md:my-16">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import Logo from "~/assets/svg/logo.svg?component";

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
