<template>
  <ProseHeading :id="id" :level="2">
    <slot />
  </ProseHeading>
</template>

<script setup lang="ts">
import ProseHeading from './ProseHeading.vue'
defineProps<{ id: string }>()
</script>
