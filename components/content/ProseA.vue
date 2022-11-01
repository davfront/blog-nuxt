<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  }
})

const isExternalLink = computed(() => {
  return props.href.startsWith('http://') || props.href.startsWith('https://')
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="isExternalLink ? '_blank' : undefined"
    :class="{ isExternalLink: 'mr-[1.5em]' }"
  >
    <slot />
    <span v-if="isExternalLink" class="absolute inline-flex items-center">
      &nbsp;
      <div
        class="i-[ri-external-link-line] inline-block text-gray-400 dark:text-gray-500 translate-y-[1px]"
      />
    </span>
  </NuxtLink>
</template>
