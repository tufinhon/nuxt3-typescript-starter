import { defineNuxtConfig } from 'nuxt';
// import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    '~~': './src',
    '@@': '.',
    '~': './src',
    '@': '.',
    assets: './src/assets',
    public: 'public'
  },
  app: {
    // baseURL: '/',
    head: {
      // https://nuxtjs.org/docs/configuration-glossary/configuration-head
      title: 'Default Template',
      titleTemplate: '%s - Nuxt',
      htmlAttrs: {
        lang: 'en'
      },
      // meta: [
      //   // { charset: 'utf-8' },
      //   // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //   { hid: 'description', name: 'description', content: '' },
      //   { name: 'format-detection', content: 'telephone=no' }
      // ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/icons/nuxt3.ico' }] //
    }
    // layoutTransition: {
    //   mode: 'out-in',
    //   name: 'layout'
    // },
    // pageTransition: {
    //   mode: 'fade-in',
    //   name: 'page'
    // },
  },
  // appConfig: {},
  // build: {},
  // buildDir: '/<rootDir>/.nuxt',
  // builder: '@nuxt/vite-builder', // "vite" | "webpack"
  components: {
    // https://v3.nuxtjs.org/api/configuration/nuxt-config/#components
    dirs: ['components'],
    global: true
  },
  css: [],
  // dev: true,
  // devServerHandlers: [], // https://v3.nuxtjs.org/api/configuration/nuxt.config#devserverhandlers
  // dir: {
  //   public: 'public'
  // },
  // experimental: {}, // https://v3.nuxtjs.org/api/configuration/nuxt.config#experimental
  // extends: [],
  // extensions: ['.vue', '.js', '.ts'],
  // hooks: {},
  // ignore: [], // https://v3.nuxtjs.org/api/configuration/nuxt.config#ignore
  // ignoreOptions: {},
  // ignorePrefix: '{}',
  imports: {
    // https://v3.nuxtjs.org/api/configuration/nuxt.config#imports
    dirs: ['composables'],
    global: true
  },
  // meta: {},
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          // // 'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
        ]
      }
    ]
  ],
  // nitro: {},
  // pages: true,
  // postcss: {}, // https://v3.nuxtjs.org/api/configuration/nuxt.config#postcss
  // privateRuntimeConfig: {},
  // publicRuntimeConfig: {},
  rootDir: '.',
  // runtimeConfig: {},
  // serverHandlers: [],
  // sourcemap: {},
  srcDir: 'src/', // TODO
  ssr: true,
  telemetry: false, // https://github.com/nuxt/telemetry
  // theme: '',
  typescript: {
    shim: false,
    strict: true, // TODO
    typeCheck: true, // TODO
    tsConfig: true
  },
  vite: {
    // https://v3.nuxtjs.org/api/configuration/nuxt.config#vite
    // plugins: [eslintPlugin()], // TODO
    // css: {
    //   preprocessorOptions: {
    //     sass: {
    //       additionalData: '@import "~/assets/sass/weplay1.scss"'
    //     }
    //   }
    // }
    root: './', // https://stackoverflow.com/questions/68654761/how-to-add-a-public-directory-in-vitejs-configuration-file
    publicDir: 'public'
  }

  // vue: {},
  // watchers: {},
  // webpack: {},
  // workspaceDir: '/<rootDir>'
});
