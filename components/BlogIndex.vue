<template>
  <div class="prose">
    <h1>Notes</h1>
    <ul>
      <li v-for="{ _path: slug, title } in posts" :key="slug">
        <NuxtLink :to="slug">{{ title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const posts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .find();
</script>
