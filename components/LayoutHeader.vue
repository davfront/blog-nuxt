<template>
  <header :class="tw.header">
    <div :class="tw.headerContainer">
      <NuxtLink to="/" :class="tw.headerBrand">
        <Logo :class="tw.headerLogo" />
      </NuxtLink>
      <div :class="tw.headerNav">
        <a :class="tw.headerNavToggle" tabindex="0">
          <div class="i-[ri-menu-line]" />
        </a>
        <nav :class="tw.headerNavPopover" tabindex="0">
          <NuxtLink
            to="/"
            :class="tw.headerNavItem"
            :activeClass="tw.headerNavItemActive"
            @click.native="closeDropdown()">
            About
          </NuxtLink>
          <NuxtLink
            to="/blog"
            :class="tw.headerNavItem"
            :activeClass="tw.headerNavItemActive"
            @click.native="closeDropdown()">
            Blog
          </NuxtLink>
          <NuxtLink
            to="/bookmarks"
            :class="tw.headerNavItem"
            :activeClass="tw.headerNavItemActive"
            @click.native="closeDropdown()">
            Bookmarks
          </NuxtLink>
          <div :class="tw.headerNavSeparator" />
          <div :class="tw.headerNavIconMenu">
            <a
              href="https://github.com/davfront"
              target="_blank"
              :class="tw.headerNavIconItem"
              @click.native="closeDropdown()">
              <div class="text-lg i-[ri-github-fill]" />
            </a>
            <a
              href="https://www.linkedin.com/in/davidpereiranet/"
              target="_blank"
              :class="tw.headerNavIconItem"
              @click.native="closeDropdown()">
              <div class="text-lg i-[ri-linkedin-fill]" />
            </a>
            <a
              href="mailto:contact@david-pereira.net"
              target="_blank"
              :class="tw.headerNavIconItem"
              @click.native="closeDropdown()">
              <div class="text-lg i-[ri-mail-line]" />
            </a>
            <a
              :class="tw.headerNavIconItem"
              @click="toggleDark()"
              @click.native="closeDropdown()">
              <div class="text-lg" :class="isDark ? 'i-[ri-moon-line]' : 'i-[ri-sun-line]'" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { reactive } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import Logo from "~/assets/svg/logo.svg?component";

// dark mode
const isDark = useDark()
const toggleDark = useToggle(isDark)

// dropdown
const closeDropdown = () => {
  document.activeElement.blur()
}

// tailwind
const tw = reactive({
  header: [
    'sticky z-30 top-0',
    'border-black border-b border-opacity-10',
    'bg-white bg-opacity-75 backdrop-blur',
    // dark
    'dark:bg-gray-900 dark:bg-opacity-75 dark:border-white dark:border-opacity-10',
  ],
  headerContainer: 'px-8 h-16 flex items-center',
  headerBrand: 'block mr-auto',
  headerLogo: 'h-8 fill-primary',
  headerNav: '-mr-2 flex items-center relative group',
  headerNavToggle: [
    'flex items-center',
    'p-4 -mx-4',
    'text-2xl cursor-pointer',
    'transition-colors hover:text-primary-500 focus:text-primary-500',
    // desktop
    'md:hidden',
  ],
  headerNavPopover: [
    'absolute z-10 top-full right-0 w-56',
    'py-2 -mr-2 -mt-1',
    'bg-white text-gray-900 shadow-lg border rounded',
    // dropdown menu visibility
    'hidden group-focus-within:block',
    // desktop
    'md:static md:w-auto md:bg-transparent md:text-inherit md:shadow-none md:border-0',
    'md:m-0',
    'md:!flex md:items-center',
  ],
  headerNavItem: [
    'flex items-center',
    'px-5 py-3',
    'text-sm select-none',
    'transition-colors hover:bg-gray-100',
    // desktop
    'md:hover:bg-transparent md:hover:text-primary-500',
  ],
  headerNavItemActive: [
    'font-semibold !text-primary-600 !bg-primary-100',
    // desktop
    'md:!text-primary-500 md:!bg-transparent',
  ].join(' '),
  headerNavSeparator: [
    'block h-[1px]',
    'bg-black',
    'opacity-10',
    'my-2',
    // dark
    'dark:bg-white',
    // desktop
    'md:h-6 md:w-[1px] md:my-0 md:mx-4',
  ],
  headerNavIconMenu: [
    'flex items-center justify-between',
    'mx-2',
    // desktop
    'md:mx-0',
  ],
  headerNavIconItem: [
    'flex-shrink-0',
    'p-3',
    'flex items-center',
    'text-sm font-semibold cursor-pointer',
    'transition-colors hover:text-primary-500',
    // desktop
    'md:px-4',
  ],
})
</script>
