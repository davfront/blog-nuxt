<template>
  <Prose>
    <h1>Bookmarks</h1>

    <section v-for="(category, index) in bookmarkConfig" :key="index">
      <h3>{{category.category}}</h3>
      <ul>
        <li v-for="bookmark in category.bookmarks" :key="index">
          <a
            :href="bookmark.url"
            target="_blank"
            :title="bookmark.title"
          >
            {{ bookmark.title }}
          </a>
          {{ bookmark.description ? `- ${bookmark.description}` : '' }}
        </li>
      </ul>
    </section>

  </Prose>
</template>

<script setup lang="ts">
import Prose from "~/components/Prose.vue"
import { ref } from "vue";

const bookmarkConfig = ref([
  {
    category: "UX/UI",
    bookmarks: [
      {
        title: "Open UI",
        url: "https://open-ui.org",
        description: "Comparison of components from different design systems",
      }
    ]
  },
  {
    category: "Resources",
    bookmarks: [
      {
        title: "Iconify",
        url: "https://iconify.design",
        description: "All popular icon sets in one framework",
      }
    ]
  }
])

useHead({
  title: 'Bookmarks',
})
</script>
