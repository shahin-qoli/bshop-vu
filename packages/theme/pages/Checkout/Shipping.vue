<template>
  <div>

    <div class="main-shopping">
      <div class="content-shopping">
        <div class="col-lg-9 col-md-9 col-xs-12 pull-right">
          <div class="shipment-page-container">
            <div class="headline-checkout-shopping">
              <span>انتخاب آدرس تحویل سفارش</span>
            </div>
            <div id="address-section">
              <div class="checkout-contact">
                <div class="checkout-contact-content">
                  <ul class="checkout-contact-items">
                    <li class="checkout-contact-item">
                      گیرنده:
                      <span class="full-name">حسن شجاعی</span>
                      <a
                        href="#"
                        class="edit-address-btn"
                        onclick="document.getElementById('modal').style.display='block'"
                        >اصلاح این آدرس</a
                      >
                      <a
                        href="#"
                        class="checkout-contact-location"
                        onclick="document.getElementById('modal').style.display='block'"
                        >تغییر آدرس ارسال</a
                      >
                    </li>
                    <li class="checkout-contact-item">
                      <div class="checkout-contact-item-mobile">
                        شماره تماس:
                        <span class="mobile-phone">0991xxxxxxx</span>
                      </div>
                      <div class="checkout-contact-item-message">
                        کد پستی:
                        <span class="post-code">946598848626</span>
                        <br />
                      </div>
                      <span class="address-part">خراسان شمالی، بجنورد</span>
                    </li>
                  </ul>
                  <div class="checkout-contact-badge">
                    <i class="fa fa-check"></i>
                  </div>
                </div>
              </div>
            </div>
            <form action="#" id="shipping-data-form">
              <div class="normal-delivery">
                <div class="checkout-pack">
                  <div class="checkout-pack-header">
                    <span>مرسوله ۱ از ۱</span>
                    <span class="checkout-time-table-shipping-lead-time">
                      آماده ارسال
                    </span>
                  </div>
                  <div class="checkout-time-table-shipping-type">
                    <i class="fa fa-truck"></i>ارسال عادی
                  </div>
                  <div class="checkout-pack-row">
                    <div class="swiper-products-compact">
                      <div class="box">
                        <div class="col-lg-3 col-md-4 col-xs-12">
                          <div class="product-box-container">
                            <div class="product-box-compact">
                              <a href="#">
                                <img
                                  src="assets/images/product-slider-2/111460776.jpg"
                                  alt="img-slider"
                                />
                              </a>
                              <div class="product-box-title">
                                گوشی موبایل سامسونگ مدل Galaxy A50 SM-A505F/DS
                                دو ...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="shipment-submit-type">
                    <div class="checkout-time-table">
                      <div class="additional-options-action-bar">
                        <div class="additional-options-checkbox-container">
                          <label
                            class="checkout-additional-options-checkbox-image"
                          ></label>
                        </div>
                        <div
                          class="checkout-additional-options-action-container"
                        >
                          <div class="action-title">
                            زمان تقریبی تحویل از ۸ آذر تا ۱۲ آذر
                          </div>
                          <ul class="action-description">
                            <li>پست پیشتاز با ظرفیت اختصاصی برای دیجی استور</li>
                            <li class="package-shipping-cost">
                              هزینه ارسال : ۸,۰۰۰ تومان
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="headline-checkout-shopping">
            <span>صدور فاکتور</span>
          </div>
          <div class="checkout-invoice">
            <div class="checkout-invoice-headline">
              <div class="form-auth-row">
                <label class="ui-checkbox">
                  <input type="checkbox" value="1" name="login" id="remember" />
                  <span class="ui-checkbox-check"></span>
                </label>
                <label for="remember" class="remember-me"
                  >درخواست ارسال فاکتور خرید</label
                >
              </div>
            </div>
          </div>

          <div class="checkout-to-shipping-sticky">
            <a href="#" class="selenium-next-step-shipping"
              >ادامه فرآیند خرید</a
            >
            <div class="checkout-to-shipping-price-report">
              <p>مبلغ قابل پرداخت</p>
              <div class="cart-item-product-price">
                ۳,۴۲۰,۰۰۰
                <span>تومان</span>
              </div>
            </div>
          </div>

          <div class="checkout-actions">
            <a href="cart.html" class="btn-link-spoiler">
              « بازگشت به سبد خرید
            </a>
            <a href="shopping-payment.html" class="save-shipping-data">
              تایید و ادامه ثبت سفارش »
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-xs-12 pull-left">
          <div class="page-aside" style="margin-top: 95px">
            <div class="checkout-summary">
              <ul class="checkout-summary-summary">
                <li>
                  <span>مبلغ کل (۱ کالا)</span>
                  <span>۳,۴۲۰,۰۰۰ تومان</span>
                </li>
                <li>
                  <span>جمع</span>
                  <span>۳,۴۲۰,۰۰۰ تومان</span>
                </li>
                <li>
                  <span style="color: #424750; font-size: 14px"
                    >هزینه ارسال</span
                  >
                  <span></span>
                </li>
                <li>
                  <span><i class="fa fa-truck"></i>ارسال عادی</span>
                  <span>رایگان</span>
                </li>
                <li>
                  <span>مبلغ قابل پرداخت</span>
                  <span>۳,۴۲۰,۰۰۰ تومان</span>
                </li>
                <li class="checkout-digiclub-container">
                  <span class="checkout-digiclub-row">
                    <img src="assets/images/digiclub.png" alt="digiclub" />
                    <span class="checkout-digiclub-points">
                      امتیاز دیجی‌کلاب
                    </span>
                  </span>
                  <span class="checkout-digiclub-row"
                    >150
                    <span class="checkout-bill-currency"> امتیاز </span>
                  </span>
                </li>
              </ul>
            </div>
            <div class="checkout-summary-content">
              <p>
                کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش
                مراحل بعدی را تکمیل کنید.
              </p>
            </div>
          </div>
        </div>

        <footer class="footer-light">
          <div class="container">
            <div class="footer-checkout-col">
              <div class="footer-checkout-col-phone">
                <span class="mdi mdi-phone"></span>شماره تماس :
                <a href="#">۶۱۹۳۰۰۰۰ - ۰۲۱</a>
              </div>
            </div>

            <div class="footer-checkout-col">
              <div class="footer-checkout-col-phone">
                <span class="mdi mdi-email-outline"></span>شماره تماس :
                <a href="#">info@digistore.com</a>
              </div>
            </div>

            <p class="title-footer">
              استفاده از کارت هدیه یا کد تخفیف، درصفحه ی پرداخت امکان پذیر است.
            </p>

            <p class="copy-right-footer-light">
              Copyright © 2006 - 2019 DigiStore.com
            </p>
          </div>
        </footer>
      </div>
    </div>
    <ValidationObserver v-if="false" v-slot="{ handleSubmit }">
      <SfHeading
        v-e2e="'shipping-heading'"
        :level="3"
        :title="$t('Shipping')"
        class="sf-heading--left sf-heading--no-underline title"
      />
      <AddressPicker
        v-if="isAuthenticated && savedAddresses"
        v-model="selectedSavedAddressId"
        :key="isFormSubmitted"
        :addresses="savedAddresses.addresses"
        :saved-address="checkoutShippingAddress"
        :isFormSubmitted="isFormSubmitted"
        @input="getBackToShippingDetails()"

      />
      <form @submit.prevent="handleSubmit(handleFormSubmit)">
        <div v-if="!selectedSavedAddressId" class="form">
          <ValidationProvider
            v-if="!isAuthenticated"
            name="email"
            rules="required|email"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              v-on:click="getBackToShippingDetails()"
              :class="{'disable-input': isFormSubmitted}"
              v-model="form.email"
              label="Email"
              name="email"
              class="form__element"
              :valid="!errors[0]"
              :errorMessage="errors[0]"
            />
          </ValidationProvider>
          <ValidationProvider
            name="firstName"
            rules="required|min:2"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              v-on:click="getBackToShippingDetails()"
              :class="{'disable-input': isFormSubmitted}"
              v-e2e="'shipping-firstName'"
              v-model="form.firstName"
              label="First name"
              name="firstName"
              class="form__element form__element--half"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
            />
          </ValidationProvider>
          <ValidationProvider
            name="lastName"
            rules="required|min:2"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              v-on:click="getBackToShippingDetails()"
              :class="{'disable-input': isFormSubmitted}"
              v-e2e="'shipping-lastName'"
              v-model="form.lastName"
              label="Last name"
              name="lastName"
              class="form__element form__element--half form__element--half-even"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
            />
          </ValidationProvider>
          <ValidationProvider
            name="streetName"
            rules="required|min:2"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              v-on:click="getBackToShippingDetails()"
              :class="{'disable-input': isFormSubmitted}"
              v-e2e="'shipping-streetName'"
              v-model="form.addressLine1"
              label="Street name"
              name="streetName"
              class="form__element"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
            />
          </ValidationProvider>
          <SfInput
            v-on:click="getBackToShippingDetails()"
            :class="{'disable-input': isFormSubmitted}"
            v-e2e="'shipping-apartment'"
            v-model="form.addressLine2"
            label="House/Apartment number"
            name="apartment"
            class="form__element"
          />
          <ValidationProvider
            name="city"
            rules="required|min:2"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              v-on:click="getBackToShippingDetails()"
              :class="{'disable-input': isFormSubmitted}"
              v-e2e="'shipping-city'"
              v-model="form.city"
              label="City"
              name="city"
              class="form__element"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
            />
          </ValidationProvider>
          <ValidationProvider
            v-if="states && states.length > 0"
            v-slot="{ errors }"
            name="state"
            rules="required"
            slim
          >
            <SfSelect
              :class="{'disable-dropdown': isFormSubmitted}"
              data-cy="shipping-details-input_state"
              class="form__element form form__select sf-select--underlined"
              v-model="form.state"
              name="state"
              label="State/Province"
              :required="isStateRequired"
              :valid="!errors[0]"
              :errorMessage="errors[0]"
              @input="getBackToShippingDetails()"
            >
              <SfSelectOption
                v-for="{ code, name } in states"
                :key="code"
                :value="name"
              >
                {{ name }}
              </SfSelectOption>
            </SfSelect>
          </ValidationProvider>
          <ValidationProvider
            name="country"
            rules="required|min:2"
            v-slot="{ errors }"
            slim
          >
            <SfSelect
              :class="{'disable-dropdown': isFormSubmitted}"
              v-e2e="'shipping-country'"
              v-model="form.country"
              label="Country"
              name="country"
              class="form__element form__element--half form__select sf-select--underlined"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
              @input="getBackToShippingDetails()"
            >
              <SfSelectOption
                v-for="countryOption in countries"
                :key="countryOption.key"
                :value="countryOption.key"
              >
                {{ countryOption.label }}
              </SfSelectOption>
            </SfSelect>
          </ValidationProvider>
          <ValidationProvider
            name="zipCode"
            rules="required|min:2"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              v-on:click="getBackToShippingDetails()"
              :class="{'disable-input': isFormSubmitted}"
              v-e2e="'shipping-zipcode'"
              v-model="form.postalCode"
              label="Zip-code"
              name="zipCode"
              class="form__element form__element--half form__element--half-even"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
            />
          </ValidationProvider>
          <ValidationProvider
            name="phone"
            rules="required|digits:11"
            v-slot="{ errors }"
            slim
          >
            <SfInput
              v-on:click="getBackToShippingDetails()"
              :class="{'disable-input': isFormSubmitted}"
              v-e2e="'shipping-phone'"
              v-model="form.phone"
              label="Phone number"
              name="phone"
              class="form__element"
              required
              :valid="!errors[0]"
              :errorMessage="errors[0]"
            />
          </ValidationProvider>
          <SfCheckbox
            class="form__save-address"
            v-if="isAuthenticated && !isFormSubmitted"
            v-model="isSaveAddressSelected"
            label="Save address"
          />
        </div>
        <div class="form">
          <div class="form__action">
            <SfCheckbox
              name="shippingToBilling"
              label="Use the same details for billing"
              hintMessage=""
              :required="false"
              infoMessage=""
              errorMessage=""
              valid
              :disabled="false"
              v-model="isCopyToBillingSelected"
            />
          </div>
          <div class="form__action">
            <SfButton
              v-if="!isFormSubmitted"
              :disabled="loading"
              class="form__action-button"
              type="submit"
            >
              {{ $t('Select shipping method') }}
            </SfButton>
          </div>
        </div>
        <VsfShippingProvider
          v-if="isFormSubmitted"
          @submit="router.push(localePath({ name: 'billing' }))"
          @back="() => isFormSubmitted = !isFormSubmitted"
        />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  SfHeading,
  SfInput,
  SfButton,
  SfSelect,
  SfCheckbox
} from '@storefront-ui/vue';
import { ref, watch, computed, onMounted, useRouter } from '@nuxtjs/composition-api';
import { onSSR, useVSFContext } from '@vue-storefront/core';
import { useBilling, useShipping, useCountry, useUser, useUserShipping } from '@vue-storefront/spree';
import { required, min, digits } from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import AddressPicker from '~/components/Checkout/AddressPicker';
import _ from 'lodash';

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('min', {
  ...min,
  message: 'The field should have at least {length} characters'
});
extend('digits', {
  ...digits,
  message: 'Please provide a valid phone number'
});

export default {
  name: 'Shipping',
  layout: 'shopping',
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfCheckbox,
    AddressPicker,
    ValidationProvider,
    ValidationObserver,
    VsfShippingProvider: () => import('~/components/Checkout/VsfShippingProvider')
  },
  setup () {
    const router = useRouter();
    const isFormSubmitted = ref(false);
    const isSaveAddressSelected = ref(false);
    const isCopyToBillingSelected = ref(true);
    const { countries, states, load: loadCountries, loadStates } = useCountry();
    const { shipping: checkoutShippingAddress, load, save, loading } = useShipping();
    const { shipping: savedAddresses, load: loadSavedAddresses, addAddress } = useUserShipping();
    const { isAuthenticated } = useUser();
    const { $spree } = useVSFContext();
    const billing = useBilling();

    const selectedSavedAddressId = ref(undefined);
    const form = ref({
      email: '',
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
      phone: null
    });

    const selectedSavedAddress = computed(() => {
      if (!selectedSavedAddressId.value) {
        return undefined;
      }

      return savedAddresses.value.addresses.find(e => e._id === selectedSavedAddressId.value);
    });

    const getBackToShippingDetails = () => {
      if (isFormSubmitted.value) {
        isFormSubmitted.value = !isFormSubmitted;
      }
    };

    const isStateRequired = computed(() => form.value.country && countries.value.find(e => e.key === form.value.country).stateRequired);

    const handleFormSubmit = async () => {
      if (!isAuthenticated.value) {
        await $spree.api.saveGuestCheckoutEmail(form.value.email);
      }

      const shippingAddress = isAuthenticated.value && selectedSavedAddress.value
        ? selectedSavedAddress.value
        : form.value;

      await save({ shippingDetails: shippingAddress });
      if (isCopyToBillingSelected.value) {
        await billing.save({ billingDetails: shippingAddress });
      }

      if (isSaveAddressSelected.value) {
        await addAddress({ address: shippingAddress });
      }

      isFormSubmitted.value = true;
    };

    const isEqualAddress = (a, b) => {
      const aWithoutId = _.omit(a, ['_id']);
      const bWithoutId = _.omit(b, ['_id']);
      return _.isEqual(aWithoutId, bWithoutId);
    };

    const populateSelectedAddressId = () => {
      if (checkoutShippingAddress.value && savedAddresses.value?.addresses) {
        selectedSavedAddressId.value = savedAddresses.value.addresses.find(e => isEqualAddress(e, checkoutShippingAddress.value))?._id;
      }
    };

    onMounted(async () => {
      await load();
      await loadSavedAddresses();
      await loadCountries();

      if (form.value.country) {
        await loadStates(form.value.country);
      }

      if (checkoutShippingAddress.value) {
        form.value = _.omit(checkoutShippingAddress.value, ['_id']);
      }

      populateSelectedAddressId();
    });

    onSSR(async () => {
      await load();
      await loadSavedAddresses();
      await loadCountries();

      if (form.value.country) {
        await loadStates(form.value.country);
      }

      if (checkoutShippingAddress.value) {
        form.value = _.omit(checkoutShippingAddress.value, ['_id']);
      }

      populateSelectedAddressId();
    });

    watch(() => form.value.country, async (newValue, oldValue) => {
      if (newValue !== oldValue) {
        form.value.state = null;
        await loadStates(newValue);
      }
    });

    return {
      router,
      loading,
      isFormSubmitted,
      isSaveAddressSelected,
      isAuthenticated,
      isStateRequired,
      form,
      countries,
      states,
      savedAddresses,
      selectedSavedAddressId,
      checkoutShippingAddress,
      handleFormSubmit,
      isCopyToBillingSelected,
      getBackToShippingDetails
    };
  }
};
</script>

<style lang="scss" scoped>
.form {
  --button-width: 100%;
  &__select {
    display: flex;
    align-items: center;
    --select-option-font-size: var(--font-size--lg);
    ::v-deep .sf-select__dropdown {
      font-size: var(--font-size--lg);
      margin: 0;
      font-family: var(--font-family--secondary);
      font-weight: var(--font-weight--normal);
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    --button-width: auto;
  }
  &__element {
    margin: 0 0 var(--spacer-xl) 0;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding: 0 0 0 var(--spacer-xl);
        }
      }
    }
  }
  &__action {
    @include for-desktop {
      flex: 0 0 100%;
      display: flex;
    }
  }
  &__action-button {
    &--secondary {
      @include for-desktop {
        order: -1;
        text-align: left;
      }
    }
    &--add-address {
      width: 100%;
      margin: 0;
      @include for-desktop {
        margin: 0 0 var(--spacer-lg) 0;
        width: auto;
      }
    }
  }
  &__back-button {
    margin: var(--spacer-xl) 0 var(--spacer-sm);
    &:hover {
      color:  var(--c-white);
    }
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
  &__save-address {
    margin: 0 0 var(--spacer-xs) 0;
    --checkbox-font-family: var(--font-family--secondary);
  }
}

.shipping {
  &__label {
    display: flex;
    justify-content: space-between;
  }
  &__description {
    --radio-description-margin: 0;
    --radio-description-font-size: var(--font-xs);
  }
}

.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
}
.disable-input{
    --input-border-color: var(--c-text-disabled);
    --input-color: var(--c-text-disabled);
    -webkit-text-fill-color: var(--c-text-disabled);

}
.disable-dropdown{
  color: var(--c-text-disabled);
  --select-dropdown-border-color: var(--c-text-disabled);
  --select-label-color: var(--c-text-disabled);
  --select-dropdown-color: var(--c-text-disabled);
}

</style>
