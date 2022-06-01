<template>
  <div v-if="isAuthenticated" class="mini-cart-header-responsive">
    <span class="mdi mdi-basket"></span>
  </div>
  <div v-else class="mini-cart-header-responsive">
    <a href="login" class="login-link">
        ورود
    </a>  
  </div>
  
</template>
<script>
import CartDropdown from './CartDropdown.vue';
import { useUser } from '@vue-storefront/spree';

export default {
  components: {
    CartDropdown
  },
  setup(){
    const {
      isAuthenticated,
    } = useUser();
    return {
      isAuthenticated
    }
  }
}
</script>
