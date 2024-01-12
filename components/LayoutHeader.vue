<template>
  <header :class="tw.header">
    <div :class="tw.headerContainer">
      <NuxtLink to="/" :class="tw.headerBrand">
        <Logo :class="tw.headerLogo" />
      </NuxtLink>
      <nav :class="tw.headerNav">
        <NuxtLink
          :to="{ name: 'index' }"
          :class="tw.headerNavItem"
          :active-class="tw.headerNavItemActive"
          title="About"
        >
          <span :class="tw.headerNavItemIcon">
            <div class="i-[ri-information-line]" />
          </span>
          <span :class="tw.headerNavItemLabel">About</span>
        </NuxtLink>
        <NuxtLink
          :to="{ name: 'blog-slug' }"
          :class="tw.headerNavItem"
          :active-class="tw.headerNavItemActive"
          title="Blog"
        >
          <span :class="tw.headerNavItemIcon">
            <div class="i-[ri-article-line]" />
          </span>
          <span :class="tw.headerNavItemLabel">Blog</span>
        </NuxtLink>
        <NuxtLink
          :to="{ name: 'bookmarks' }"
          :class="tw.headerNavItem"
          :active-class="tw.headerNavItemActive"
          title="Bookmarks"
        >
          <span :class="tw.headerNavItemIcon">
            <div class="i-[ri-bookmark-line]" />
          </span>
          <span :class="tw.headerNavItemLabel">Bookmarks</span>
        </NuxtLink>
        <span :class="tw.headerNavSeparator"></span>
        <a
          href="https://github.com/davfront"
          target="_blank"
          :class="tw.headerNavIconItem"
          title="Github"
        >
          <div class="i-[ri-github-fill]" />
        </a>
        <a
          href="https://codepen.io/davfront"
          target="_blank"
          :class="tw.headerNavIconItem"
          title="Codepen"
        >
          <div class="i-[ri-codepen-fill]" />
        </a>
        <a
          href="https://www.linkedin.com/in/davidpereiranet/"
          target="_blank"
          :class="tw.headerNavIconItem"
          title="Linkedin"
        >
          <div class="i-[ri-linkedin-fill]" />
        </a>
        <a
          href="mailto:contact@david-pereira.net"
          target="_blank"
          :class="tw.headerNavIconItem"
          title="Send an email"
        >
          <div class="i-[ri-mail-line]" />
        </a>
        <a
          :class="tw.headerNavIconItem"
          :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          @click="toggleDark()"
        >
          <div :class="isDark ? 'i-[ri-moon-line]' : 'i-[ri-sun-line]'" />
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import Logo from '~/assets/svg/logo.svg?component'

// dark mode
const isDark = useDark()
const toggleDark = useToggle(isDark)

// tailwind
const tw = ref({
  header: [
    'sticky z-30 top-0',
    'border-black border-b border-opacity-10',
    'bg-white bg-opacity-75 backdrop-blur',
    'overflow-x-auto',
    // dark
    'dark:bg-gray-900 dark:bg-opacity-75 dark:border-white dark:border-opacity-10'
  ],
  headerContainer: [
    'px-6 h-16 flex items-center',
    // desktop
    'md:px-8'
  ],
  headerBrand: 'block mr-auto',
  headerLogo: 'h-8 fill-primary',
  headerNav: 'ml-2 -mr-2 flex items-center relative group',
  headerNavItem: [
    'flex-shrink-0',
    'flex items-center',
    'p-3',
    'text-sm select-none',
    'transition-colors hover:text-primary-500',
    // desktop
    'md:px-5'
  ],
  headerNavItemIcon: [
    'text-xl',
    // desktop
    'md:hidden'
  ],
  headerNavItemLabel: [
    'hidden',
    // desktop
    'md:inline'
  ],
  headerNavItemActive: 'font-semibold text-primary-500',
  headerNavSeparator: [
    'hidden',
    'h-6 w-[1px]',
    'bg-black',
    'opacity-10',
    'mx-4',
    // dark
    'dark:bg-white',
    // desktop
    'md:block'
  ],
  headerNavIconMenu: [
    'flex items-center justify-between',
    'mx-2',
    // desktop
    'md:mx-0'
  ],
  headerNavIconItem: [
    'flex-shrink-0',
    'p-3',
    'flex items-center',
    'text-xl cursor-pointer',
    'transition-colors hover:text-primary-500',
    // desktop
    'md:text-lg'
  ]
})
</script>
