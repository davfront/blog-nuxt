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
    :class="{ 'mr-[1.5em]': isExternalLink }"
  >
    <slot />
    <span v-if="isExternalLink" class="absolute inline-flex items-center">
      &nbsp;
      <span
        class="inline-block text-gray-400 dark:text-gray-500 translate-y-[-1px] translate-x-[-1px]"
      >
        <span class="i-[ri-external-link-line]" />
      </span>
    </span>
  </NuxtLink>
</template>
