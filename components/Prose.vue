<template>
  <div class="prose-anchor-links prose !max-w-none prose-a:no-underline prose-a:text-primary-500 prose-a:transition-all prose-h1:font-bold prose-h2:font-bold prose-h3:font-bold dark:prose-invert">
    <slot />
  </div>
</template>

<style lang="scss">
.prose-anchor-links {
  h1, h2, h3, h4, h5, h6 {
    a {
      color: inherit !important;
      text-decoration: inherit !important;
      font-weight: inherit !important;
      position: relative;
      &::before {
        content: '#';
        display: block;
        position: absolute;
        left: -1em;
        top: 50%;
        margin-top: -0.5em;
        font-size: 1em;
        line-height: 1;
        opacity: 0;
      }
      &:hover::before {
        opacity: 0.5;
      }
    }
  }
}
</style>


