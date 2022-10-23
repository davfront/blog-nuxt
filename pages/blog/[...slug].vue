<template>
  <div>
    <template v-if="isRouteBase">
      <BlogIndex />
    </template>
    <template v-else>
      <Prose>
        <article>
          <header class="mb-16">
            <div class="flex items-center mb-2 text-sm text-gray-500">
              <NuxtLink :to="routeBase" class="flex items-center">
                <div class="i-[ri-arrow-left-line] mr-2" />
                All posts
              </NuxtLink>
              <span class="mx-2">·</span>
              <span>{{data.date}}</span>
            </div>
            <h1 class="m-0">{{data.title}}</h1>
            <div v-if="data.tags?.length" class="mt-4 space-x-1">
              <span
                v-for="tag in data.tags"
                class="ïnline-block bg-gray-200 text-sm text-gray-600 px-2 py-0.5 rounded dark:text-gray-300 dark:bg-gray-700"
              >
                {{ tag }}
              </span>
            </div>
            <img v-if="data.cover" class="mt-8" :src="data.cover" />
          </header>   
          <ContentDoc />     
        </article>
      </Prose>
    </template>
  </div>
</template>

<script setup lang="ts">
import Prose from "~/components/Prose.vue"
import BlogIndex from "~/components/BlogIndex.vue"
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();
const routeBase = ref('/blog');
const isRouteBase = route.path === routeBase.value

const { data } = await useAsyncData('post-' + route.path, () => queryContent(route.path).findOne())

if (isRouteBase) {
  useHead({
    title: 'Blog'
  })
}
</script>

