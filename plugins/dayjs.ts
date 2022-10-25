import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat.js'

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.extend(localizedFormat)
  nuxtApp.provide('dayjs', dayjs)
})

declare module '#app' {
  interface NuxtApp {
    $dayjs: dayjs.Dayjs
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}
