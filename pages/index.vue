<template>
 <div class="page">
  <nuxt-link :to="'/toolbar'">to toolbar</nuxt-link>

  </div>
</template>

<script>
import PROPERTY_EDIT from '~/graphql/mutation/propertyEdit.gql'

export default {
  created: function() {
  },
  data: () => ({
    ssrApplicationTop: undefined,
    clientApplicationTop: undefined
  })
}
</script>
