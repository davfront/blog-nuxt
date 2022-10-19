<template>
  <div>
    <template v-if="$route.path === '/blog'">
      <BlogIndex />
    </template>
    <template v-else>
      <Prose>
        <div>
          <NuxtLink to="/blog" class="flex items-center mb-2">
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
</script>

