export const useLayout = (): void => {
  const route = useRoute();

  const title = `${(route.meta.title as string) || 'Empty'} - Nuxt3`;

  // https://v3.nuxtjs.org/getting-started/seo-meta/
  useHead({
    title
    // // TODO REPEATED RENDER -> titleTemplate: '%s !!!',
    // htmlAttrs: {
    //   lang: 'en'
    // },
    // charset: 'utf-8',
    // viewport: 'width=device-width, initial-scale=1',
    // meta: [
    //   { hid: 'description', name: 'description', content: '' },
    //   { name: 'format-detection', content: 'telephone=no' }
    // ],
    // // TODO NOT RECOGNIZE ".ico" FILES -> link: [{ rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' }]
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/nuxt.png' }]
  });
};
