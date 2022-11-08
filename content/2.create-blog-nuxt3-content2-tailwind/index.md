---
date: '2022-11-07'
title: Create a blog with Nuxt3, Content2 and Tailwind CSS
tags: [Nuxt, Tailwind CSS]
---

## Prerequesites

First of all, you need to have
[Node.js](https://nodejs.org) and
[NPM](https://www.npmjs.com/) installed.

## Install Nuxt

```bash
npx nuxi init blog-app
cd blog-app
npm install
```

Start the dev server:

```bash
npm run dev
```

## Install Tailwind CSS for Nuxt

1. Add `@nuxtjs/tailwindcss` dependency to your project:

```bash
npm i -D @nuxtjs/tailwindcss
```

2. Add `@nuxtjs/tailwindcss` to the modules section of `nuxt.config.js`:

```js
{
  modules: [
    '@nuxtjs/tailwindcss'
  ]
}
```

## Install Content

1. Add `@nuxt/content` dependency to your project:

```bash
npm i -D @nuxt/content
```

2. Add `@nuxt/content` to the modules section of `nuxt.config.js`:

```js
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
```


