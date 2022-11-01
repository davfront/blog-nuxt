<template>
  <div
    :class="[
      'prose',
      // full width
      'max-w-none',
      // dark mode
      'dark:prose-invert',
      // links
      'prose-a:no-underline prose-a:font-semibold prose-a:border-b prose-a:border-transparent prose-a:text-primary-500 prose-a:transition-colors hover:prose-a:border-current',
      // headings
      'prose-h1:font-bold prose-h2:font-bold prose-h3:font-bold'
    ]"
  >
    <slot />
  </div>
</template>
