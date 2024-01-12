<template>
  <Prose>
    <h1>Bookmarks</h1>

    <section v-for="(category, catIndex) in bookmarkConfig" :key="catIndex">
      <h3>{{ category.category }}</h3>
      <ul>
        <li v-for="(bookmark, bmkIndex) in category.bookmarks" :key="bmkIndex">
          <a :href="bookmark.url" target="_blank" :title="bookmark.title">
            {{ bookmark.title }}
          </a>
          {{ bookmark.description ? `- ${bookmark.description}` : '' }}
        </li>
      </ul>
    </section>
  </Prose>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Prose from '~/components/Prose.vue'

const bookmarkConfig = ref([
  {
    category: 'UX/UI',
    bookmarks: [
      {
        title: 'Open UI',
        url: 'https://open-ui.org',
        description: 'Comparison of components from different design systems'
      }
    ]
  },
  {
    category: 'Resources',
    bookmarks: [
      {
        title: 'Iconify',
        url: 'https://iconify.design',
        description: 'All popular icon sets in one framework'
      },
      {
        title: 'Icones.js.org',
        url: 'https://icones.js.org',
        description: '700+ SVG icons for popular brands'
      }
    ]
  },
  {
    category: 'Development',
    bookmarks: [
      {
        title: 'Javascript.info',
        url: 'https://javascript.info',
        description: 'Modern JavaScript Tutorial'
      }
    ]
  },
  {
    category: 'Tools',
    bookmarks: [
      {
        title: 'Caniuse.com',
        url: 'https://caniuse.com',
        description: 'Browser support tables for modern web technologies'
      }
    ]
  }
])

useHead({
  title: 'Bookmarks'
})
</script>
