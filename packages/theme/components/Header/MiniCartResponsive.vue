<template>

    <div class="mini-cart-header-responsive">
      <span class="mdi mdi-basket"></span>
      <CartDropdown />
      <span class="cart-count">{{$n(totalItems)}}</span>
  </div>
  
</template>
<script>
import CartDropdown from './CartDropdown.vue';
import { useUser ,useCart, cartGetters,} from '@vue-storefront/spree';
import { computed } from '@nuxtjs/composition-api';


export default {
  components: {
    CartDropdown
  },
  setup(){
    const {
      isAuthenticated,
    } = useUser();
    const { cart, removeItem, updateItemQty, loading, load } = useCart();
    const products = computed(() => cartGetters.getItems(cart.value));
    const totals = computed(() => cartGetters.getTotals(cart.value));
    const totalItems = computed(() => cartGetters.getTotalItems(cart.value));
    return {
      isAuthenticated,
      loading,
      products,
      totals,
      totalItems,
      cartGetters,
    }
  }
}
</script>
