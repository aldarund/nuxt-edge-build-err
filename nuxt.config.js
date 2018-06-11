module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'slot-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  css: [
    '~/assets/css.css',
    '~/assets/main.styl'
  ],
  
  plugins: [
  ],
  loading: { color: '#3B8070' },
   modules: [
    '@nuxtjs/apollo'
  ],
   apollo: {
    tokenName: 'JWT',
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost',
        persisting: false
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      
    }
  }
}
