<template>
  <div class="mini-cart-header">
    <a href="/cart" style="color: #4a5f73">
      <span class="mdi mdi-basket"></span>
      <span class="cart-count">2</span>
    </a>
    <Cart-Dropdown />
  </div>
</template>
<script>
import {
  SfSidebar,
  SfHeading,
  SfButton,
  SfIcon,
  SfProperty,
  SfPrice,
  SfCollectedProduct,
  SfImage,
  SfQuantitySelector
} from '@storefront-ui/vue';
import CartDropdown from './CartDropdown.vue'
import { computed } from '@nuxtjs/composition-api';
import { useCart, cartGetters, useWishlist } from '@vue-storefront/spree';
import { useUiState } from '~/composables';
import debounce from 'lodash.debounce';
import {wishlistGetters} from '@vue-storefront/spree';

export default {
  name: 'Cart',
  components: {
    CartDropdown,
    SfSidebar,
    SfButton,
    SfHeading,
    SfIcon,
    SfProperty,
    SfPrice,
    SfCollectedProduct,
    SfImage,
    SfQuantitySelector
  },
  setup() {
    const { isCartSidebarOpen, toggleCartSidebar } = useUiState();
    const { cart, removeItem, updateItemQty, loading } = useCart();
    const products = computed(() => cartGetters.getItems(cart.value));
    const totals = computed(() => cartGetters.getTotals(cart.value));
    const totalItems = computed(() => cartGetters.getTotalItems(cart.value));
    const { wishlist, addItem: addItemToWishlist, isInWishlist } = useWishlist();
    const isWishlistDisabled = computed(() => wishlistGetters.isWishlistDisabled(wishlist.value));
    const updateQuantity = debounce(async ({ product, quantity }) => {
      await updateItemQty({ product, quantity });
    }, 500);

    const handleSaveForLaterClick = async(product) => {
      if (!isInWishlist({product})) {
        await Promise.all([addItemToWishlist({product}), removeItem({product})]);
      }
    };

    return {
      updateQuantity,
      loading,
      products,
      removeItem,
      isCartSidebarOpen,
      toggleCartSidebar,
      totals,
      totalItems,
      cartGetters,
      handleSaveForLaterClick,
      isWishlistDisabled,
      isInWishlist
    };
  }
};
</script>
