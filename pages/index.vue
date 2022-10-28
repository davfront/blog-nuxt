<template>
  <Prose>
    <h1>Hello, I am David Pereira.</h1>
    <p>
      I am a <b>Front-end developer</b> & <b>UI designer</b>
      currently living in France, Lyon area.
    </p>
    <p>
      I have been designing and developing websites for over a decade. While I started working on
      static marketing sites, I switched few years ago working on complex web applications, using
      the framework
      <a href="https://vuejs.org/" target="_blank" title="Vue.js">Vue.js</a>.
    </p>
    <p>
      Outside of working and helping my wife take care of our two kids, I enjoy travelling and
      outdoor activities.
    </p>
  </Prose>
</template>

<script setup lang="ts">
import Prose from '~/components/Prose.vue'

useHead({
  title: ''
})
</script>
