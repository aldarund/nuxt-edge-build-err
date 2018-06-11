<template>
 <div class="page">
  <nuxt-link :to="'/toolbar'">to toolbar</nuxt-link>
   <br>
   ssr ApplicationTop {{ssrApplicationTop}}<br>
   clientApplicationTop {{clientApplicationTop}}<br>
   
  </div>
</template>

<script>

export default {
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
