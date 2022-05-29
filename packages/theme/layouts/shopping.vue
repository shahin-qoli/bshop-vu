<template>
  <div>
    <Shopping-Header />
    <Nuxt />
  </div>
</template>
<script>
import ShoppingHeader from '~/components/Shopping/ShoppingHeader.vue'
export default {
  name: 'shopping',
  components: {
    ShoppingHeader
  }
}
</script>