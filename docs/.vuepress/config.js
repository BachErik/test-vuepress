import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/test-vuepress',
  title: 'VuePress Starter',
  description: 'VuePress Starter Project in Stackblitz',
  bundler: viteBundler(),
  theme: defaultTheme(),
})
