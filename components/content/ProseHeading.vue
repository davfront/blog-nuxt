<template>
  <component :is="tag" :id="id">
    <span v-if="generate" class="not-prose">
      <a
        :href="`#${id}`"
        class="group border-b border-transparent border-dashed hover:border-current"
      >
        <slot />
        <span class="absolute inline-flex items-center opacity-0 group-hover:opacity-100">
          &nbsp;
          <div class="i-[ri-link] inline-block text-sm translate-x-1 translate-y-0.5" />
        </span>
      </a>
    </span>
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
const props = defineProps<{
  id: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}>()
const tag = `h${props.level}`
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= props.level && !anchorLinks?.exclude.includes(props.level)
</script>
