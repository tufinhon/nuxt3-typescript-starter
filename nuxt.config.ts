import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // alias mapping
  alias: {
    '~~': './src',
    '@@': '.',
    '~': './src',
    '@': '.',
    assets: './src/assets',
    public: 'public'
  },

  // directory mapping
  rootDir: '.', // TODO
  srcDir: 'src/', // TODO
  workspaceDir: '.',

  // app template
  app: {
    head: {
      title: 'Template  - Nuxt3',
      // TODO REPEATED RENDER -> titleTemplate: '%s !!!',
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      // TODO NOT RECOGNIZE ".ico" FILES -> link: [{ rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' }]
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/nuxt.png' }] // https://reactgo.com/nuxt-change-favicon/
    }
  },
  // meta: {},

  // modules
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [['defineStore', 'definePiniaStore']]
      }
    ]
  ],

  // auto import components & composables
  components: true,
  imports: {
    // https://v3.nuxtjs.org/api/configuration/nuxt.config#imports
    dirs: ['composables'],
    global: true
  },

  // nitro: {},

  telemetry: false, // https://github.com/nuxt/telemetry
  typescript: {
    shim: false,
    strict: true, // TODO
    typeCheck: true, // TODO
    tsConfig: true
  },
  vite: {
    root: './', // https://stackoverflow.com/questions/68654761/how-to-add-a-public-directory-in-vitejs-configuration-file
    publicDir: 'public'
  }
});
