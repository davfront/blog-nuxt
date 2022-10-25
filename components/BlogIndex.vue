<template>
  <Prose>
    <h1>Blog</h1>
  </Prose>
  <div class="space-y-6 my-12">
    <NuxtLink
      v-for="post in posts"
      :key="post._path"
      :to="post._path"
      class="block transition-colors hover:text-primary-500"
    >
      <span class="block text-xl font-bold">{{ post.title }}</span>
      <span class="block text-sm text-gray-500">{{ $dayjs(post.date).format('ll') }}</span>
    </NuxtLink>
  </div>
</template>


<script setup lang="ts">
import Prose from "~/components/Prose.vue"
const posts = await queryContent('blog')
  .only(['_path', 'title', 'date'])
  .sort({ date: -1 }) // show latest articles first
  .find();
</script>
