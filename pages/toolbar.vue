<template>
 <div class="page">
  <nuxt-link :to="'/'">to home</nuxt-link>
   <br>
   ssr ApplicationTop {{ssrApplicationTop}}<br>
   clientApplicationTop {{clientApplicationTop}}<br>
  </div>
</template>

<script>

export default {
  layout: 'toolbar',
  created: function() {
    if (process.server) {
      this.ssrApplicationTop = this.$vuetify.application.top
    } else {
     this.clientApplicationTop = this.$vuetify.application.top
    }    
    
  },
  data: () => ({
    ssrApplicationTop: undefined,
    clientApplicationTop: undefined
  })
}
</script>
