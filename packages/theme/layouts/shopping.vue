<template>
  <div>
    <Shopping-Header />
    <Nuxt />
    <script src="/js/jquery-3.2.1.min.js"></script>
    <script src="/js/jquery.ez-plus.js"></script>
    <script src="/js/owl.carousel.min.js"></script>
    <script src="/js/jquery.countdown.min.js"></script>
    <script src="/js/popper.min.js"></script>
    <script src="/js/bootstrap.js"></script>
    <script src="/js/theia-sticky-sidebar.min.js"></script>
    <script src="/js/main.js"></script>
  </div>
</template>
<script>
import ShoppingHeader from '~/components/Shopping/ShoppingHeader.vue'
import { onSSR } from '@vue-storefront/core';
import { useRoute } from '@nuxtjs/composition-api';
import { useCart, useStore, useUser } from '@vue-storefront/spree';
export default {
  name: 'shopping',
  components: {
    ShoppingHeader
  },
  setup() {
    const route = useRoute();
    const { load: loadStores } = useStore();
    const { load: loadUser } = useUser();
    const { load: loadCart } = useCart();

    onSSR(async () => {
      await Promise.all([
        loadStores(),
        loadUser(),
        loadCart(),
      ]);
    });

    return {
      route
    };
  }
}
</script>