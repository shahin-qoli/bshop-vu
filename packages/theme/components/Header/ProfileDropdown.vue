<template>
  <div v-if="isAuthenticated" class="dropdown-menu-login">
    <div class="header-profile-dropdown-account">
      <div class="header-profile-dropdown-user">
        <div class="header-profile-dropdown-user-img">
          <img
            src="assets/images/svg/user-profile.svg"
            alt="profile"
          />
        </div>
        <div class="header-profile-dropdown-user-info">
          <p class="header-profile-dropdown-user-name">
            {{userGetters.getEmailAddress(user)}}
            <span
              class="header-profile-dropdown-user-profile-link"
              >مشاهده حساب کاربری</span
            >
          </p>
        </div>
        <div class="header-profile-dropdown-account">
          <div class="header-profile-dropdown-account-item">
            <span
              class="header-profile-dropdown-account-item-title"
              >کیف پول</span
            >
            <div
              class="
                header-profile-dropdown-account-item-amount
              "
            >
              <span
                class="
                  header-profile-dropdown-account-item-amount-number
                "
                >۰
              </span>
              تومان
            </div>
          </div>
          <div class="header-profile-dropdown-account-item">
            <span
              class="header-profile-dropdown-account-item-title"
              >دیجی‌کلاب</span
            >
            <div
              class="
                header-profile-dropdown-account-item-amount
              "
            >
              <span
                class="
                  header-profile-dropdown-account-item-amount-number
                "
                >۰
              </span>
              تومان
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-profile-dropdown-actions">
      <div class="header-profile-dropdown-action-container">
        <span class="header-profile-dropdown-action-link"
          >سفارش‌های من</span
        >
      </div>
      <div class="header-profile-dropdown-action-container">
        <span class="header-profile-dropdown-action-link"
          >جوایز دیجی‌کلاب</span
        >
      </div>
      <div @click="handleLogout('Log Out')" class="header-profile-dropdown-action-container">
        <span class="header-profile-dropdown-action-link"
          >خروج از حساب کاربری</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { userGetters, useUser, useUserShipping, userShippingGetters } from '@vue-storefront/spree';
import { SfProperty, SfHeading, SfTable, SfLink, SfButton, SfInput } from '@storefront-ui/vue';
import { onMounted } from '@nuxtjs/composition-api';
import { computed,useRouter } from '@nuxtjs/composition-api';
export default {
  name: 'ProfileUpdateForm',
  components: {
    SfProperty,
    SfHeading,
    SfTable,
    SfLink,
    SfButton,
    SfInput
  },
  setup(props,context) {
    const {
      isAuthenticated,
      user,
      load: loadUser,
      logout
    } = useUser();
    const router = useRouter();
      
    onMounted(async () => {
      await loadUser();
    });
    const handleLogout = async (title) => {
      if (title === 'Log Out') {
        await logout();
        console.log(isAuthenticated)
        router.push(context.root.localePath({ name: 'home' }));
        return;
      }

      const slugifiedTitle = (title || '').toLowerCase().replace(' ', '-');
      const transformedPath = `/my-account/${slugifiedTitle}`;
      const localeTransformedPath = context.root.localePath(transformedPath);
      router.push(localeTransformedPath);
    };
    return {
      userGetters,
      user,
      isAuthenticated,
      handleLogout
    };
    
    
  }
};
</script>
<style lang="scss" scoped>
.redirect-button {
  width: 75%;
}
.right-column {
  display: flex;
  justify-content: flex-end;
}
</style>



