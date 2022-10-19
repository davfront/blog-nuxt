<template>
  <div>
    <template v-if="isRouteBase">
      <BlogIndex />
    </template>
    <template v-else>
      <Prose>
        <div>
          <NuxtLink :to="routeBase" class="flex items-center mb-2">
            <div class="i-[ri-arrow-left-line] mr-2" />
            <span class="text-sm font-semibold">All posts</span>
          </NuxtLink>
        </div>
        <ContentDoc />
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

if (isRouteBase) {
  useHead({
    title: 'Blog'
  })
}
</script>

