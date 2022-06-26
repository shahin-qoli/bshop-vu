<template>
  <div>
    <header class="shopping-page">
        <div class="container">
            <div class="header-shopping-logo">
                <a href="#"><img src="assets/images/logo.png" alt="logo"></a>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <ul class="checkout-steps">
                    <li class="is-completed is-completed-active">
                        <a href="javascript:void(0)" class="checkout-steps-item-link active-link-shopping">
                            <span>اطلاعات ارسال</span>
                        </a>
                    </li>
                    <li class="is-completed is-completed-active">
                        <a href="javascript:void(0)" class="checkout-steps-item-link active-link-shopping">
                            <span>پرداخت</span>
                        </a>
                    </li>
                    <li class="is-active">
                        <a href="javascript:void(0)" class="checkout-steps-item-link active-link-shopping">
                            <span>اتمام خرید و ارسال</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <div class="main-shopping">
        <div class="col-12 text-center">
            <div class="complate-page-container">
                <div class="success-checkout">
                    <div class="container">
                        <div class="icon-success">
                            <span class="fa fa-check"></span>
                        </div>
                        <div class="order-success">
                            سفارش
                            <a href="#" class="order-code">DKC-57262900</a>
                            با موفقیت پرداخت و در سیستم ثبت شد.
                            <span class="order-ready-post">پرداخت با موفقیت انجام شد. سفارش شما با موفقیت ثبت شد و در
                                زمان تعیین شده برای شما ارسال خواهد شد.
                                <br>
                                از اینکه دیجی استور را برای خرید انتخاب کردید از شما سپاسگزاریم.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="checkout-order-info">
                    <div class="order-info">
                        <div class="order-code">
                            کد سفارش :
                            <span>DKC-57262900</span>
                        </div>
                        <div class="checkout-process-order-info">
                            سفارش شما با موفقیت در سیستم ثبت شد و هم اکنون
                            <a href="#" class="processing">در حال پردازش</a>
                            است.جزئیات این سفارش را می توانید
                            با کلیک بر روی دکمه
                            <a href="#" class="link-border">پیگیری سفارش</a>
                            مشاهده نمایید.
                        </div>
                        <div class="parent-btn btn-following-order">
                            <button class="dk-btn dk-btn-info">
                                پیگیری سفارش
                                <i class="fa fa-shopping-bag sign-in"></i>
                            </button>
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">نام تحویل گیرنده: حسن شجاعی</th>
                                    <th scope="col">شماره تماس :</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>تعداد مرسوله : 1</td>
                                    <td>مبلغ کل :</td>
                                </tr>
                                <tr>
                                    <td>وضعیت پرداخت : پرداخت آنلاین(موفق)</td>
                                    <td>وضعیت سفارش : در حال انجام</td>
                                </tr>
                                <tr>
                                    <td>آدرس : استان خراسان شمالی ، بجنورد</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {
  SfHeading,
  SfInput,
  SfButton,
  SfSelect,
  SfRadio,
  SfCheckbox
} from '@storefront-ui/vue';
import { ref, watch, computed, onMounted, useRouter } from '@nuxtjs/composition-api';
import { onSSR } from '@vue-storefront/core';
import { useBilling, useCountry, useUser, useUserBilling } from '@vue-storefront/spree';
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
  name: 'Billing',
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfRadio,
    SfCheckbox,
    AddressPicker,
    ValidationProvider,
    ValidationObserver
  },
  setup(_props, { root }) {
    const { billing: checkoutBillingAddress, load, save } = useBilling();
    const { countries, states, load: loadCountries, loadStates } = useCountry();
    const { isAuthenticated } = useUser();
    const { billing: savedAddresses, load: loadSavedAddresses } = useUserBilling();
    const router = useRouter();

    const selectedSavedAddressId = ref(undefined);
    const form = ref({
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
    const isStateRequired = computed(() => form.value.country && countries.value.find(e => e.key === form.value.country).stateRequired);

    const handleFormSubmit = async () => {
      if (isAuthenticated.value && selectedSavedAddress.value) {
        await save({ billingDetails: selectedSavedAddress.value });
      } else {
        await save({ billingDetails: form.value });
      }
      router.push(root.localePath('/checkout/payment'));
    };

    const isEqualAddress = (a, b) => {
      const aWithoutId = _.omit(a, ['_id']);
      const bWithoutId = _.omit(b, ['_id']);
      return _.isEqual(aWithoutId, bWithoutId);
    };

    const populateSelectedAddressId = () => {
      if (checkoutBillingAddress.value && savedAddresses.value?.addresses) {
        selectedSavedAddressId.value = savedAddresses.value.addresses.find(e => isEqualAddress(e, checkoutBillingAddress.value))?._id;
      }
    };

    onMounted(async () => {
      await load();
      await loadSavedAddresses();
      await loadCountries();

      if (form.value.country) {
        await loadStates(form.value.country);
      }

      if (checkoutBillingAddress.value) {
        form.value = _.omit(checkoutBillingAddress.value, ['_id']);
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

      if (checkoutBillingAddress.value) {
        form.value = _.omit(checkoutBillingAddress.value, ['_id']);
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
      isAuthenticated,
      form,
      countries,
      states,
      isStateRequired,
      savedAddresses,
      selectedSavedAddressId,
      checkoutBillingAddress,
      handleFormSubmit
    };
  }
};
</script>
<style lang="scss" scoped>
.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
}
.form {
  &__select {
    display: flex;
    align-items: center;
    --select-option-font-size: var(--font-size--lg);
    ::v-deep .sf-select__dropdown {
      font-size: var(--font-size--lg);
      margin: 0;
      color: var(--c-text);
      font-family: var(--font-family--secondary);
      font-weight: var(--font-weight--normal);
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
  &__group {
    display: flex;
    align-items: center;
  }
  &__action {
    @include for-desktop {
      flex: 0 0 100%;
      display: flex;
    }
  }
  &__action-button, &__back-button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: auto;
    }
  }
  &__action-button {
    &--secondary {
      @include for-desktop {
        order: -1;
        --button-margin: 0;
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
      color:  white;
    }
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
  &__back-button {
    margin: 0 0 var(--spacer-sm) 0;
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
}
.payment-methods {
  @include for-desktop {
    display: flex;
    padding: var(--spacer-lg) 0;
    border: 1px solid var(--c-light);
    border-width: 1px 0;
  }
}
.payment-method {
  --radio-container-align-items: center;
  --ratio-content-margin: 0 0 0 var(--spacer-base);
  --radio-label-font-size: var(--font-base);
  --radio-background: transparent;
  white-space: nowrap;
  border: 1px solid var(--c-light);
  border-width: 1px 0 0 0;
  &:last-child {
    border-width: 1px 0;
  }
  --radio-background: transparent;
  @include for-desktop {
    border: 0;
    --radio-border-radius: 4px;
  }
}
</style>
