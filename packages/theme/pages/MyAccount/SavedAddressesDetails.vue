<template>
  <!-- <transition name="fade">
    <SfTabs
      v-if="edittingAddress"
      key="edit-address"
      :open-tab="1"
      class="tab-orphan"
    >
      <SfTab
        :title="isNewAddress ? 'Add the address' : 'Update the address'">
        <p class="message">
          {{ $t('Contact details updated') }}
        </p>

        <SavedAddressForm
          :address="activeAddress"
          :isNew="isNewAddress"
          @submit="saveAddress" />
      </SfTab>
    </SfTabs>
    <SfTabs
      v-else
      :open-tab="1"
      key="address-list"
      class="tab-orphan">
      <SfTab title="Saved addresses" class="saved-addresses">
        <p class="saved-addresses__message">
          {{ $t('Manage saved addresses') }}
        </p>
        <transition-group tag="div" name="fade" class="saved-addresses__list">
          <div
            v-for="address in addresses"
            :key="userShippingGetters.getId(address)"
            class="saved-addresses__address address">
            <div class="address__content">
              <UserSavedAddress :address="address" />
            </div>
            <div class="address__actions">
              <SfIcon
                icon="cross"
                color="gray"
                size="14px"
                role="button"
                class="smartphone-only"
                @click="removeAddress(address)"
              />
              <SfButton
                class="address__button address__button--change"
                @click="changeAddress(address)">
                {{ $t('Change') }}
              </SfButton>
              <SfButton
                class="color-light address__button address__button--delete desktop-only"
                @click="removeAddress(address)">
                {{ $t('Delete') }}
              </SfButton>
            </div>
          </div>
        </transition-group>
        <SfButton
          class="saved-addresses__button saved-addresses__button--action"
          @click="changeAddress()">
          {{ $t('Add new address') }}
        </SfButton>
      </SfTab>
    </SfTabs>
  </transition> -->
      <div class="col-lg-9 col-md-8 col-xs-12 pull-right">
        <div class="d-block">
            <div class="profile-content">
                <div class="headline-profile">
                    <span>آدرس من</span>
                </div>
                <div class="profile-stats">
                    <div class="profile-address">
                        <div class="box-header">
                            <span class="box-title">نشانی ما</span>
                        </div>
                        <div
                          v-for="address in addresses"
                          :key="userShippingGetters.getId(address)"
                          class="saved-addresses__address address">
                          <UserSavedAddress :address="address" />
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--       modal----------------------->
    <!-- <div class="remodal-overlay" id="modal">
        <div class="col-lg-8 col-md-8 col-xs-12 mx-auto">
            <div class="remodal">
                <a href="#" class="remodal-close close-profile-address"
                    onclick="document.getElementById('modal').style.display='none'"><i class="fa fa-close"></i></a>
                <div class="middle-container">
                    <form action="#" class="form-checkout">
                        <div class="form-checkout-headline">ویرایش آدرس</div>
                        <div class="form-checkout-row">
                            <label for="name">نام و نام خانوادگی تحویل گیرنده <span class="required-star"
                                    style="color:red;">*</span></label>
                            <input type="text" id="name" class="input-name-checkout"
                                placeholder="نام تحویل گیرنده را وارد نمایید">
                            <label for="phone-number">شماره موبایل <span class="required-star"
                                    style="color:red;">*</span></label>
                            <input type="text" id="phone-number" class="input-name-checkout" placeholder="09xxxxxxxxx"
                                style="text-align:left;">
                            <label for="fixed-number">شماره تلفن ثابت <span class="required-star"
                                    style="color:red;">*</span></label>
                            <input type="text" id="fixed-number" class="input-name-checkout" placeholder="021xxxxxx"
                                style="text-align:left;">

                            <div class="form-checkout-valid-row">
                                <label for="province">استان <span class="required-star"
                                        style="color:red;"></span></label>
                                <select name="province" id="province">
                                    <option value="date-desc" selected="selected">شهر مورد نظر خود را انتخاب کنید
                                    </option>
                                    <option value="date-asc">تهران</option>
                                    <option value="rate">مشهد</option>
                                    <option value="views">اصفهان</option>
                                    <option value="comments">شیراز</option>
                                </select>
                            </div>

                            <div class="form-checkout-valid-row">
                                <label for="city">شهر
                                    <span class="required-star" style="color:red;">*</span></label>
                                <select name="city" id="city">
                                    <option value="date-desc" selected="selected">شهر مورد نظر خود را انتخاب کنید
                                    </option>
                                    <option value="date-asc">آشخانه</option>
                                    <option value="rate">شیروان</option>
                                    <option value="views">اسفراین</option>
                                    <option value="comments">جاجرم</option>
                                </select>
                            </div>

                            <label for="address">آدرس
                                <span class="required-star" style="color:red;">*</span></label>
                            <input type="text" id="address" class="input-name-checkout"
                                placeholder="آدرس خود را وارد نمایید" style="height:80px;">

                            <div class="form-checkout-valid-row">
                                <div class="parent-btn">
                                    <button class="dk-btn dk-btn-info">
                                        ثبت آدرس
                                        <i class="fa fa-check sign-in"></i>
                                    </button>
                                </div>
                            </div>

                            <a href="#" class="cancel-edit-address"
                                onclick="document.getElementById('modal').style.display='none'">انصراف و بازگشت</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script>
import {
  SfTabs,
  SfButton,
  SfIcon
} from '@storefront-ui/vue';
import UserSavedAddress from '~/components/UserSavedAddress';
import SavedAddressForm from '~/components/MyAccount/SavedAddressForm';
import { useUserShipping, userShippingGetters } from '@vue-storefront/spree';
import { ref, computed } from '@nuxtjs/composition-api';
import { onSSR } from '@vue-storefront/core';

export default {
  name: 'SavedAddressesDetails',
  components: {
    SfTabs,
    SfButton,
    SfIcon,
    UserSavedAddress,
    SavedAddressForm
  },
  setup() {
    const { shipping, load: loadUserSavedAddresses, addAddress, deleteAddress, updateAddress } = useUserShipping();
    const addresses = computed(() => userShippingGetters.getAddresses(shipping.value));
    const edittingAddress = ref(false);
    const activeAddress = ref(undefined);
    const isNewAddress = computed(() => !activeAddress.value);

    const changeAddress = (address = undefined) => {
      activeAddress.value = address;
      edittingAddress.value = true;
    };

    const removeAddress = address => deleteAddress({ address });

    const saveAddress = async ({ form, onComplete, onError }) => {
      try {
        const actionMethod = isNewAddress.value ? addAddress : updateAddress;
        const data = await actionMethod({ address: form });
        edittingAddress.value = false;
        activeAddress.value = undefined;
        await onComplete(data);
      } catch (error) {
        onError(error);
      }
    };

    onSSR(async () => {
      await loadUserSavedAddresses();
    });

    return {
      changeAddress,
      updateAddress,
      removeAddress,
      saveAddress,
      userShippingGetters,
      addresses,
      edittingAddress,
      activeAddress,
      isNewAddress
    };
  }
};
</script>

<style lang='scss' scoped>

.saved-addresses {
  &__message {
    font-family: var(--font-family--primary);
    line-height: 1.6;
    font-size: var(--font-size--base);
    margin: 0 0 var(--spacer-base);
  }
  &__list {
    margin-bottom: var(--spacer-base);
  }
  .address {
    display: flex;
    padding: var(--spacer-xl) 0;
    border-top: 1px solid var(--c-light);
    &:last-child {
      border-bottom: 1px solid var(--c-light);
    }
    &__content {
      flex: 1;
      color: var(--c-text);
      font-size: var(--font-size--base);
      font-weight: 300;
      line-height: 1.6;
      margin: 0;
      p {
        margin: 0;
      }
    }
    &__actions {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      @include for-desktop {
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
      }
    }
    &__button {
      &--delete {
        color: var(--c-link);
        @include for-desktop {
          margin-left: var(--spacer-base);
        }
      }
      &--action {
        width: 100%;
        @include for-desktop {
          width: auto;
        }
      }
    }
  }
}
.tab-orphan {
  @include for-mobile {
    ::v-deep .sf-tabs {
      &__title {
        display: none;
      }

      &__content {
        border: 0;
        padding: 0;
      }
    }
  }
}
</style>
