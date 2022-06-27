<template>

    <a v-if="!isAuthenticated" href="/login" class="login-link">
    <div class="btn-login-responsive">
      <span class="mdi mdi-account"></span>
    </div>
  </a>
  <a v-else href="#" class="login-link">
    <div class="btn-login-responsive">
      <span class="mdi mdi-account"></span>
      <ProfileDropdown />
    </div>
  </a>

</template>
<script>
import { useUiState } from '~/composables';
import { useUser, useCart, cartGetters, useWishlist, wishlistGetters } from '@vue-storefront/spree';
import { computed, useRoute, useRouter } from '@nuxtjs/composition-api';
import ProfileDropdown from './ProfileDropdown.vue'

export default {
  components: {
    ProfileDropdown
  },
  setup(_props, { root }) {
    const route = useRoute();
    const router = useRouter();
    const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal, toggleMobileMenu, isMobileMenuOpen } = useUiState();
    const { isAuthenticated } = useUser();
    const { cart } = useCart();
    const { wishlist } = useWishlist();

    const isWishlistDisabled = computed(() => wishlistGetters.isWishlistDisabled(wishlist.value));

    const handleAccountClick = async () => {
      if (isMobileMenuOpen.value) {
        toggleMobileMenu();
      }
      if (isAuthenticated.value) {
        return router.push(root.localePath('/my-account'));
      }
      toggleLoginModal();
    };

    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      return count ? count.toString() : null;
    });
    return {
      route,
      isMobileMenuOpen,
      toggleWishlistSidebar,
      toggleCartSidebar,
      toggleMobileMenu,
      cartTotalItems,
      handleAccountClick,
      isWishlistDisabled,
      isAuthenticated
    };
  }
};
</script>