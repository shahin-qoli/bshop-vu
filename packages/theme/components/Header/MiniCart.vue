<template>
  <div class="mini-cart-header">
    <a href="/cart" style="color: #4a5f73">
      <img class="header-basket-desktop" src="../../static/images/Header/Cart.png" alt="" />
      <span v-if="totalItems!==0" class="cart-count">{{$n(totalItems)}}</span>
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

  setup(prop) {
    const { cart, removeItem, updateItemQty, loading, load } = useCart();
    const products = computed(() => cartGetters.getItems(cart.value));
    const totals = computed(() => cartGetters.getTotals(cart.value));
    const totalItems = computed(() => cartGetters.getTotalItems(cart.value));
    console.log("cart")
    console.log(cart)
    
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
<style lang="css">
.header-basket-desktop{
  border: 1px solid #d7d7d9;
  border-radius: 5px;
}
</style>
