
<script setup lang="ts">
import Prose from "~/components/Prose.vue"
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = {
  path: '/blog',
  only: ['_path', 'title', 'date'],
  sort: [{ date: -1 }]
}
</script>

<template>
  <Prose>
    <h1>Blog</h1>
  </Prose>
  <div class="space-y-6 my-12">
    <ContentList :query="query" v-slot="{ list }">
      <NuxtLink
        v-for="post in list"
        :key="post._path"
        :to="post._path"
        class="block transition-colors hover:text-primary-500"
      >
        <span class="block text-xl font-bold">{{ post.title }}</span>
        <span class="block text-sm text-gray-500">{{ $dayjs(post.date).format('ll') }}</span>
      </NuxtLink>
    </ContentList>
  </div>
</template>
