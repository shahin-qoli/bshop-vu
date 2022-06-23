<template>
    <div class="col-lg-9 col-md-8 col-xs-12 pull-right" >
        <div class="col-lg-6 col-xs-12 pull-right">
            <div class="headline-profile">
                <span>اطلاعات شخصی</span>
            </div>
            <div class="profile-stats mt-3">
                <div class="profile-stats-row" v-if="isAuthenticated && user">
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col">
                            <p><span> نام و نام خانوادگی :</span>{{ mainAddress ? `${userShippingGetters.getFirstName(mainAddress)} ${userShippingGetters.getLastName(mainAddress)}` : 'Shipping' }}</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col">
                            <p><span>پست الکترونیک :</span>{{ userGetters.getEmailAddress(user) }}</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col">
                            <p><span>شماره تلفن همراه :</span>{{mainAddress.phone || '-'}}</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col">
                            <p><span>کد پستی :</span>{{mainAddress.postalCode || '-'}}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <!-- <div class="col-lg-6 col-xs-12 pull-right">
            <div class="headline-profile headline-profile-favorites">
                <span>لیست علاقه مندی</span>
            </div>
            <div class="profile-stats mt-3">
                <div class="profile-recent-fav">
                    <a href="#"><img src="assets/images/product-slider-2/111472656.jpg" alt="profile"></a>
                    <div class="profile-recent-fav-col">
                        <a href="#">گوشی موبایل سامسونگ مدل Samsung Galaxy S10 Plus SM...</a>
                        <div class="profile-recent-fav-price">۱,۷۴۶,۰۰۰تومان</div>
                        <div class="profile-recent-fav-remove">
                            <a href="#">
                                <i class="fa fa-trash"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="profile-recent-fav">
                    <a href="#"><img src="assets/images/product-slider-2/111472656.jpg" alt="profile"></a>
                    <div class="profile-recent-fav-col">
                        <a href="#">گوشی موبایل سامسونگ مدل Samsung Galaxy S10 Plus SM...</a>
                        <div class="profile-recent-fav-price">۱,۷۴۶,۰۰۰تومان</div>
                        <div class="profile-recent-fav-remove">
                            <a href="#">
                                <i class="fa fa-trash"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="profile-stats-action">
                    <a href="#" class="link-spoiler-edit"><i class="fa fa-pencil"></i>مشاهده و ویرایش لیست علاقه
                        مندی</a>
                </div>
            </div>
        </div> -->

        
        
        
    </div>

  <!-- <SfTabs :open-tab="1"> -->
    <!-- Personal data update -->
    <!-- <SfTab title="Personal data">
      <p class="message"> -->
        <!-- {{ $t('Feel free to edit') }} -->
      <!-- </p>

      <ProfileUpdateForm @submit="updatePersonalData" />

      <p class="notice">
        {{ $t('Use your personal data') }}
        <a href="">{{ $t('Privacy Policy') }}</a>
      </p>
    </SfTab> -->
    <!-- Password reset -->
    <!-- <SfTab title="Password change">

      <p class="message">
        {{ $t('Change password your account') }}:<br />
      </p>
      <PasswordResetForm/>
    </SfTab>
  </SfTabs> -->
</template>

<script>
import ProfileUpdateForm from '~/components/MyAccount/ProfileUpdateForm';
import PasswordResetForm from '~/components/MyAccount/PasswordResetForm';
import { SfTabs, SfProperty, SfHeading, SfTable, SfLink, SfButton, SfInput } from '@storefront-ui/vue';
import { userGetters, useUser, useUserShipping, userShippingGetters } from '@vue-storefront/spree';
import { onMounted } from '@nuxtjs/composition-api';
import {computed} from '@nuxtjs/composition-api';
import OrderHistory from './OrderHistory.vue';

export default {
  name: 'PersonalDetails',

  components: {
    SfTabs,
    SfInput,
    SfButton,
    ProfileUpdateForm,
    PasswordResetForm,
    SfProperty,
    SfHeading,
    SfTable,
    SfLink,
    OrderHistory
  },

  setup() {
    const { updateUser , isAuthenticated,
      user,
      load: loadUser} = useUser();


    const { shipping, load: loadUserShipping } = useUserShipping();
    const addresses = computed(() => userShippingGetters.getAddresses(shipping.value));
    const mainAddress = computed(() => addresses.value ? addresses.value[0] : {});

    const formHandler = async (fn, onComplete, onError) => {
      try {
        const data = await fn();
        await onComplete(data);
      } catch (error) {
        onError(error);
      }
    };

    const updatePersonalData = ({ form, onComplete, onError }) => formHandler(() => updateUser({ user: form.value }), onComplete, onError);

    onMounted(async () => {
      await loadUserShipping();
      await loadUser();
    });

    return {
      updatePersonalData,
      userGetters,
      user,
      mainAddress,
      shipping,
      userShippingGetters,
      isAuthenticated
    };
  }
};
</script>

<style lang='scss' scoped>
.message,
.notice {
  font-family: var(--font-family--primary);
  line-height: 1.6;
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  font-size: var(--font-size--base);
  &__label {
    font-weight: 400;
  }
}
.notice {
  margin: var(--spacer-lg) 0 0 0;
  font-size: var(--font-size--sm);
}

</style>
