<template>
  <div class="mini-cart-header">
    <a href="/cart" style="color: #4a5f73">
      <span class="mdi mdi-basket"></span>
      <span class="cart-count">{{$n(totalItems)}}</span>
    </a>
    <Cart-Dropdown />
  </div>
</template>
<script>
import CartDropdown from './CartDropdown.vue';
import { computed } from '@nuxtjs/composition-api';
import { useProduct, useCart, cartGetters, useWishlist, productGetters } from '@vue-storefront/spree';

export default {
  components: {
    CartDropdown,
  },

  setup() {
    const { cart, removeItem, updateItemQty, loading, load } = useCart();
    const products = computed(() => cartGetters.getItems(cart.value));
    const totals = computed(() => cartGetters.getTotals(cart.value));
    const totalItems = computed(() => cartGetters.getTotalItems(cart.value));
    
    return {
      loading,
      products,
      totals,
      totalItems,
      cartGetters,
    };
  }
};
</script>
