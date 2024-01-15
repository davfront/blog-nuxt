<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <header :class="tw.header">
    <div :class="tw.headerContainer">
      <NuxtLink to="/" :class="tw.headerBrand">
        <Logo :class="tw.headerLogo" />
      </NuxtLink>
      <a v-if="isMobileMenuOpened" :class="tw.headerNavToggle" title="Close the menu">
        <div class="i-[ri-menu-unfold-line]"></div>
      </a>
      <a
        v-else
        :class="tw.headerNavToggle"
        title="Open the menu"
        @click="isMobileMenuOpened = true"
      >
        <div class="i-[ri-menu-fold-line]"></div>
      </a>
    </div>
  </header>
  <nav ref="navTarget" :class="tw.headerNav">
    <NuxtLink
      :to="{ name: 'index' }"
      :class="tw.headerNavItem"
      :active-class="tw.headerNavItemActive"
      title="About"
    >
      <span :class="[...tw.headerNavItemIcon, 'md:hidden']">
        <div class="i-[ri-information-line]"></div>
      </span>
      <span :class="tw.headerNavItemLabel">About</span>
    </NuxtLink>
    <NuxtLink
      :to="{ name: 'blog-slug' }"
      :class="tw.headerNavItem"
      :active-class="tw.headerNavItemActive"
      title="Blog"
    >
      <span :class="[...tw.headerNavItemIcon, 'md:hidden']">
        <div class="i-[ri-article-line]"></div>
      </span>
      <span :class="tw.headerNavItemLabel">Blog</span>
    </NuxtLink>
    <NuxtLink
      :to="{ name: 'bookmarks' }"
      :class="tw.headerNavItem"
      :active-class="tw.headerNavItemActive"
      title="Bookmarks"
    >
      <span :class="[...tw.headerNavItemIcon, 'md:hidden']">
        <div class="i-[ri-bookmark-line]"></div>
      </span>
      <span :class="tw.headerNavItemLabel">Bookmarks</span>
    </NuxtLink>
    <span :class="tw.headerNavSeparator"></span>
    <a href="https://github.com/davfront" target="_blank" :class="tw.headerNavItem" title="Github">
      <span :class="tw.headerNavItemIcon">
        <div class="i-[ri-github-fill]"></div>
      </span>
      <span :class="[...tw.headerNavItemLabel, 'md:hidden']">Github</span>
    </a>
    <a href="https://codepen.io/davfront" target="_blank" :class="tw.headerNavItem" title="Codepen">
      <span :class="tw.headerNavItemIcon">
        <div class="i-[ri-codepen-fill]"></div>
      </span>
      <span :class="[...tw.headerNavItemLabel, 'md:hidden']">Codepen</span>
    </a>
    <a
      href="https://www.linkedin.com/in/davidpereiranet/"
      target="_blank"
      :class="tw.headerNavItem"
      title="Linkedin"
    >
      <span :class="tw.headerNavItemIcon">
        <div class="i-[ri-linkedin-fill]"></div>
      </span>
      <span :class="[...tw.headerNavItemLabel, 'md:hidden']">Linkedin</span>
    </a>
    <a
      href="mailto:contact@david-pereira.net"
      target="_blank"
      :class="tw.headerNavItem"
      title="Send an email"
    >
      <span :class="tw.headerNavItemIcon">
        <div class="i-[ri-mail-line]"></div>
      </span>
      <span :class="[...tw.headerNavItemLabel, 'md:hidden']">Send an email</span>
    </a>
    <span :class="[...tw.headerNavSeparator, 'md:hidden']"></span>
    <a
      :class="tw.headerNavItem"
      :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click="toggleDark()"
    >
      <span :class="tw.headerNavItemIcon">
        <div :class="isDark ? 'i-[ri-moon-line]' : 'i-[ri-sun-line]'"></div>
      </span>
      <span :class="[...tw.headerNavItemLabel, 'md:hidden']">
        {{ `Switch to ${isDark ? 'light' : 'dark'} mode` }}
      </span>
    </a>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDark, useToggle, onClickOutside } from '@vueuse/core'
import { useRouter } from 'vue-router'
import Logo from '~/assets/svg/logo.svg?component'

// router
const router = useRouter()
router.afterEach(() => {
  isMobileMenuOpened.value = false
})

// dark mode
const isDark = useDark()
const toggleDark = useToggle(isDark)

// mobile menu
const isMobileMenuOpened = ref(false)

const navTarget = ref(null)
onClickOutside(navTarget, () => {
  if (isMobileMenuOpened.value) {
    isMobileMenuOpened.value = false
  }
})

// tailwind
const tw = computed(() => ({
  header: [
    'sticky z-30 inset-x-0 top-0',
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
  headerNavToggle: [
    'flex-shrink-0',
    'flex items-center',
    'p-3 -mr-3',
    'text-2xl select-none cursor-pointer',
    'transition-colors hover:text-primary-500',
    isMobileMenuOpened.value ? 'text-primary-500' : '',
    // desktop
    'md:hidden'
  ],
  headerNav: [
    'fixed z-40',
    // mobile
    'max-md:inset-y-0 max-md:right-0 max-md:mt-16 max-md:w-64 max-md:max-w-full max-md:overflow-auto',
    'max-md:bg-gray-200 max-md:shadow-2xl',
    'max-md:py-4',
    // mobile dark
    'max-md:dark:bg-gray-800',
    // mobile visibility
    'max-md:transition-transform',
    !isMobileMenuOpened.value ? 'max-md:translate-x-96' : '',
    // desktop
    'md:top-0 md:right-6 md:h-16',
    'md:flex md:items-center md:justify-end'
  ],
  headerNavSeparator: [
    'block opacity-10',
    'bg-black dark:bg-white',
    // mobile
    'max-md:h-[1px]',
    'max-md:my-3 max-md:mx-5',
    // desktop
    'md:h-6 md:w-[1px]',
    'md:mx-4'
  ],
  headerNavItem: [
    'flex items-center',
    'text-sm',
    'select-none cursor-pointer',
    'transition-colors hover:text-primary-500',
    'py-3',
    // mobile
    'max-md:px-6',
    'max-md:hover:bg-sky-500/[.05]',
    // desktop
    'md:px-3'
  ],
  headerNavItemActive: 'font-semibold text-primary-500',
  headerNavItemIcon: [
    'max-md:text-xl',
    // desktop
    'md:text-lg'
  ],
  headerNavItemLabel: [
    // mobile
    'max-md:text-lg max-md:ml-4 max-md:mb-[1px]',
    // desktop
    'md:px-2'
  ]
}))
</script>
