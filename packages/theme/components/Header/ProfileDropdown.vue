<template>
  <div class="dropdown-menu-login">
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
      <div class="header-profile-dropdown-action-container">
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
import {computed} from '@nuxtjs/composition-api';
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
  setup() {
    const {
      isAuthenticated,
      user,
      load: loadUser
    } = useUser();
    onMounted(async () => {
      await loadUser();
    });
    return {
      userGetters,
      user,
      isAuthenticated
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



