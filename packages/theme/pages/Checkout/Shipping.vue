<template>
  <div>
    <header class="shopping-page">
      <div class="container">
        <div class="header-shopping-logo">
          <a href="/"><img src="/images/home/BURUX.svg" alt="logo" /></a>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <ul class="checkout-steps">
            <li class="is-completed">
              <a
                href="/checkout/shipping"
                class="checkout-steps-item-link active-link-shopping"
              >
                <span>اطلاعات ارسال</span>
              </a>
            </li>
            <li class="is-completed">
              <a
                href="/checkout/payment"
                class="checkout-steps-item active-link"
              >
                <span>پرداخت</span>
              </a>
            </li>
            <li class="is-active">
              <a
                href="/checkout/complete"
                class="checkout-steps-item active-link"
              >
                <span>اتمام خرید و ارسال</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <modal v-model="showEditAddr">
      <Address-Form v-model="form" />
    </modal>
    <div class="main-shopping">
      <div class="content-shopping">
        <div class="col-lg-9 col-md-9 col-xs-12 pull-right">
          <div class="shipment-page-container">
            <div class="headline-checkout-shopping">
              <span>آدرس تحویل سفارش</span>
            </div>
            <Address-Form
              v-model="form"
              :states="states"
            />
            <div id="address-section" class="d-none">
              <div class="checkout-contact">
                <div class="checkout-contact-content">
                  <ul class="checkout-contact-items">
                    <li class="checkout-contact-item">
                      گیرنده:
                      <span class="full-name">حسن شجاعی</span>
                      <a
                        href="#"
                        class="edit-address-btn"
                        @click="showEditAddr = true"
                        >اصلاح این آدرس</a
                      >
                      <a
                        href="#"
                        class="checkout-contact-location"
                        @click="showEditAddr = true"
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
                    <div v-if="cart" class="swiper-products-compact">
                      <div
                        v-for="item in cart.lineItems"
                        :key="item._id"
                        class="box">
                        <div
                          class="col-lg-3 col-md-4 col-xs-12"
                        >
                          <CartItem :item="item" />
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
                            زمان تقریبی تحویل از ۸ تیر تا ۱۲ تیر
                          </div>
                          <ul class="action-description">
                            <li>پست پیشتاز با ظرفیت اختصاصی برای بروکس</li>
                            <li class="package-shipping-cost">
                              هزینه ارسال : {{$n(300000)}} ریال
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
          <div class="headline-checkout-shopping d-none">
            <span>صدور فاکتور</span>
          </div>
          <div class="checkout-invoice d-none">
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
            <a
              @click.prevent="handleFormSubmit"
              class="selenium-next-step-shipping"
              :class="{ dispabled: loading }"
            >
              <span v-if="!loading">
                ادامه فرآیند خرید
              </span>
              <div v-else class="spinner-border spinner-border-sm" role="status"></div>
              
            </a>
            <div class="checkout-to-shipping-price-report">
              <p>مبلغ قابل پرداخت</p>
              <div class="cart-item-product-price">
                {{ $n(cartGetters.getTotals(cart).total +300000) }}
                <span>ریال</span>
              </div>
            </div>
          </div>

          <div class="checkout-actions">
            <a href="/cart" class="btn-link-spoiler">
              « بازگشت به سبد خرید
            </a>
            <a @click.prevent="handleFormSubmit" href="javascript(void)" class="save-shipping-data">
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
                  <span>
                    <span>
                      {{$n(cartGetters.getTotals(cart).total) }}
                    </span>
                    <span>
                      ریال
                    </span>
                  </span>
                </li>
                <li>
                  <span>جمع</span>
                  <span>{{$n(cartGetters.getTotals(cart).total) }} ریال</span>
                </li>
                <li>
                  <span style="color: #424750; font-size: 14px"
                    >هزینه ارسال</span
                  >
                  <span></span>
                </li>
                <li>
                  <span><i class="fa fa-truck"></i>ارسال عادی</span>
                  <span>{{$n(300000)}}ریال</span>
                </li>
                <li>
                  <span>مبلغ قابل پرداخت</span>
                  <span>{{$n(cartGetters.getTotals(cart).total+300000) }} ریال</span>
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
  </div>
</template>

<script>
import Modal from '~/components/Modal.vue'
import CartItem from '~/components/Shopping/CartItem.vue'
import AddressForm from '~/components/Shopping/AddressForm.vue'
import {
  SfHeading,
  SfInput,
  SfButton,
  SfSelect,
  SfCheckbox
} from '@storefront-ui/vue';
import { ref, watch, computed, onMounted, useRouter } from '@nuxtjs/composition-api';
import { onSSR, useVSFContext } from '@vue-storefront/core';
import { useBilling, useShipping, useCountry, useUser, useUserShipping, useShippingProvider } from '@vue-storefront/spree';
import { required, min, digits } from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import AddressPicker from '~/components/Checkout/AddressPicker';
import _ from 'lodash';
import { useCart, cartGetters } from '@vue-storefront/spree';

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
    Modal,
    CartItem,
    AddressForm,
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
  data () {
    return {
      showEditAddr: false
    }
  },
  setup () {
    const router = useRouter();
    const isFormSubmitted = ref(false);
    const isSaveAddressSelected = ref(false);
    const isCopyToBillingSelected = ref(true);
    const { countries, states, load: loadCountries, loadStates } = useCountry();
    const { shipping: checkoutShippingAddress, load, save, loading: shippingLoading } = useShipping();
    const { state: shipments, save: saveShipments, load: loadShipments } = useShippingProvider();
    const { shipping: savedAddresses, load: loadSavedAddresses, addAddress, loading: userShippingLoading } = useUserShipping();
    const { isAuthenticated } = useUser();
    const { cart } = useCart();
    const billing = useBilling();

    const selectedSavedAddressId = ref(undefined);
    const loading = computed(() => {
      return shippingLoading.value || userShippingLoading.value
    })
    const form = ref({
      email: '',
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: 'IR',
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

    const isStateRequired = computed(() => true);
    const selectedShippingRates = ref({})
    onMounted(async () => {
/*       selectedShippingRates.value = {
        10123: {
          cost: "300000.0",
          id: "10171",
          methodId: 10000,
          name: "Tehran",
          selected: false
        }
      } */
    })
    const selectShippingRate = (shipmentId, shippingRateId) => {
      selectedShippingRates.value = { ...selectedShippingRates.value, [shipmentId]: shippingRateId };
    };
    const handleFormSubmit = async () => {

      const shippingAddress = isAuthenticated.value && selectedSavedAddress.value
        ? selectedSavedAddress.value
        : form.value;

      await save({ shippingDetails: shippingAddress });
      if (isCopyToBillingSelected.value || true) {
        await billing.save({ billingDetails: shippingAddress });
      }

      if (isSaveAddressSelected.value) {
        await addAddress({ address: shippingAddress });
      }
      await loadShipments()
      selectedShippingRates.value = shipments.value.reduce((prev, curr) => ({...prev, [curr.id]: null }), {});
      const defaultShipment = shipments.value[0]
      selectShippingRate(defaultShipment.id, defaultShipment.availableShippingRates[1].id)
      await saveShipments({
        shippingMethod: selectedShippingRates.value
      })
      router.push('/checkout/payment')

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
      // await loadCountries();

      if (form.value.country) {
        await loadStates(form.value.country);
      }

      // if (checkoutShippingAddress.value) {
        // form.value = _.omit(checkoutShippingAddress.value, ['_id']);
      // }

      populateSelectedAddressId();
    });

    onSSR(async () => {
      if (isAuthenticated.value === false) {
        router.push('/login?returnUrl=/checkout/shipping')
      }
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
        await loadStates(newValue)
      }
    });

    return {
      selectedShippingRates,
      router,
      cart,
      cartGetters,
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
