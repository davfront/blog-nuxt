<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-1 px-6 border-l-[6px]" :class="alertClass" role="alert">
    <p class="font-bold uppercase mb-0 flex items-center">
      <span class="inline-block text-3xl mr-4 -my-2 translate-y-[-2px]" :class="iconColorClass">
        <span :class="iconClass" />
      </span>
      {{ title }}
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  type?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  title: ''
})

const alertClass = computed(() => {
  if (props.type === 'success') {
    return 'bg-green-100 text-green-900 border-green-500'
  }
  if (props.type === 'warning') {
    return 'bg-orange-100 text-orange-900 border-orange-500'
  }
  if (props.type === 'danger') {
    return 'bg-red-100 text-red-900 border-red-500'
  }
  return 'bg-blue-100 text-blue-900 border-blue-500'
})

const iconClass = computed(() => {
  if (props.type === 'success') {
    return 'i-[ri-checkbox-circle-fill]'
  }
  if (props.type === 'warning') {
    return 'i-[ri-error-warning-fill]'
  }
  if (props.type === 'danger') {
    return 'i-[ri-error-warning-fill]'
  }
  return 'i-[ri-information-fill]'
})

const iconColorClass = computed(() => {
  if (props.type === 'success') {
    return 'text-green-500'
  }
  if (props.type === 'warning') {
    return 'text-orange-500'
  }
  if (props.type === 'danger') {
    return 'text-red-500'
  }
  return 'text-blue-500'
})

const title = computed(() => {
  if (props.title) {
    return props.title
  }
  if (props.type === 'success') {
    return 'Success'
  }
  if (props.type === 'warning') {
    return 'Warning'
  }
  if (props.type === 'danger') {
    return 'Error'
  }
  return 'Info'
})
</script>
