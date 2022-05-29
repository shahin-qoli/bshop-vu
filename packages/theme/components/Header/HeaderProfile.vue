<template>
  <a href="login.html" class="login-link">
    <div class="btn-login">
      <span class="mdi mdi-account"></span>
      پروفایل من
      <ProfileDropdown />
    </div>
  </a>
</template>
<script>
import ProfileDropdown from './ProfileDropdown.vue'
export default {
  components: {
    ProfileDropdown
  }
}
</script>