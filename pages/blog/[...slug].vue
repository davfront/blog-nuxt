<template>
  <div>

    <!-- Index -->
    <template v-if="isRouteBase">
      <BlogIndex />
    </template>

    <!-- Post -->
    <template v-else>
      <ContentDoc tag="article" v-slot="{ doc }">
        <Prose>
          <header class="mb-16">
            <div class="flex items-center mb-2 text-sm text-gray-500">
              <NuxtLink :to="routeBase" class="flex items-center">
                <div class="i-[ri-arrow-left-line] mr-2" />
                All posts
              </NuxtLink>
              <span class="mx-2">·</span>
              <span>{{ $dayjs(doc.date).format('ll') }}</span>
            </div>
            <h1 class="m-0">{{doc.title}}</h1>
            <div v-if="doc.tags?.length" class="mt-4 space-x-1">
              <span
                v-for="tag in doc.tags"
                class="ïnline-block bg-gray-200 text-sm text-gray-600 px-2 py-0.5 rounded dark:text-gray-300 dark:bg-gray-700"
              >
                {{ tag }}
              </span>
            </div>
            <img v-if="doc.cover" class="mt-8" :src="doc.cover" />
          </header>   
          <ContentRenderer :value="doc" />
        </Prose>
      </ContentDoc>
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

if (isRouteBase) {
  useHead({
    title: 'Blog'
  })
}
</script>

