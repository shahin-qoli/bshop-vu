<template>
  <div class="btn-login-responsive">
    <span class="mdi mdi-account"></span>
    <span class="cart-count">3</span>
    <ProfileDropdown />
  </div>
</template>
<script>
import ProfileDropdown from './ProfileDropdown.vue'
export default {
  components: {
    ProfileDropdown
  }
}
</script>