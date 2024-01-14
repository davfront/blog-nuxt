<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import Prose from '~/components/Prose.vue'

const query: QueryBuilderParams = {
  path: '/blog',
  only: ['_path', 'title', 'date', 'cover'],
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
        class="block transition-colors hover:text-primary-500 flex items-start"
      >
        <div
          class="w-24 aspect-[4/3] relative bg-gray-200 dark:bg-gray-800 flex-none mr-4 hidden sm:block"
        >
          <img
            v-if="post.cover"
            class="block w-full h-full object-cover"
            :src="post.cover"
            :alt="post.title"
          />
        </div>
        <div>
          <span class="block text-xl font-bold mt-1">{{ post.title }}</span>
          <span class="block text-sm text-gray-500 mt-1">{{ $dayjs(post.date).format('ll') }}</span>
        </div>
      </NuxtLink>
    </ContentList>
  </div>
</template>
