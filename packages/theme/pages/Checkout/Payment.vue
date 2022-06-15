<template>
  <div>
    <header class="shopping-page">
      <div class="container">
        <div class="header-shopping-logo">
          <a href="#"><img src="/images/home/BURUX.svg" alt="logo" /></a>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <ul class="checkout-steps">
            <li class="is-completed is-completed-active">
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
                class="checkout-steps-item-link active-link-shopping"
              >
                <span>پرداخت</span>
              </a>
            </li>
            <li class="is-active">
              <a
                href="/checkout/thank-you"
                class="checkout-steps-item active-link"
              >
                <span>اتمام خرید و ارسال</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="main-shopping">
      <div class="content-shopping">
        <div class="col-lg-9 col-md-9 col-xs-12 pull-right">
          <div class="shipment-page-container">
            <div class="headline-checkout-shopping">
              <span>انتخاب شیوه پرداخت</span>
            </div>
            <div class="payment">
              <ul class="checkout-paymethod">
                <li class="wallet-container">
                  <div class="checkout-paymethod-item">
                    <span class="mdi mdi-card-text-outline"></span>
                    <label class="radio-primary">
                      <input type="radio" name="payment-radio" value="wallet" />
                      <span class="ui-radio-check"></span>
                    </label>
                    <div class="checkout-paymethod-title">
                      <div class="paymethod-wallet-amount">
                        <p class="checkout-paymethod-title-label">
                          افزایش اعتبار و پرداخت از کیف پول
                        </p>
                        <span>موجودی:</span>
                        <span class="wallet-amount">0</span>
                        <span class="checkout-paymethod-currency">تومان</span>
                      </div>
                    </div>
                    <div class="wallet-extra-info">
                      نیازمند
                      <span class="wallet-needed-money"
                        >{{ $n(totals.subtotal) }}
                      </span>
                      ریال افزایش اعتبار
                    </div>
                    <div class="checkout-paymethod-by-digipay">
                      <img src="/images/af737e9d.png" alt="digipay" />
                    </div>
                  </div>
                </li>
                <li class="wallet-container">
                  <div class="checkout-paymethod-item">
                    <span class="mdi mdi-card-text-outline"></span>
                    <label class="radio-primary" style="display: block">
                      <input
                        type="radio"
                        name="payment-radio"
                        value="wallet"
                        checked="checked"
                      />
                      <span class="ui-radio-check"></span>
                    </label>
                    <div class="checkout-paymethod-title">
                      <div class="paymethod-wallet-amount">
                        <p class="checkout-paymethod-title-label">
                          پرداخت اینترنتی بروکس
                        </p>
                        <span>آنلاین با تمامی کارت‌های بانکی</span>
                      </div>
                    </div>
                    <div class="checkout-paymethod-by-digipay">
                      <img src="assets/images/af737e9d.png" alt="digipay" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="headline-checkout-shopping">
              <span>خلاصه سفارش</span>
            </div>
            <div class="checkout-order-summary">
              <div class="checkout-order-summary-item">
                <a
                  class="btn btn-light btn-checkout"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <header class="checkout-order-summary-header">
                    <i class="fa fa-chevron-down arrow"></i>
                    <div class="checkout-order-summary-row">
                      <div class="checkout-order-summary-col-post-time">
                        مرسوله 1 از 1
                        <span>(۱ کالا)</span>
                      </div>
                      <div class="checkout-order-summary-col-post-time">
                        زمان ارسال
                        <span>بازه جمعه ۸ تیر - سه‌شنبه ۱۲ تیر</span>
                      </div>
                      <div class="checkout-order-summary-col-shipping-cost">
                        مبلغ مرسوله
                        <span>{{ $n(300000) }} ریال</span>
                      </div>
                    </div>
                  </header>
                </a>

                <div class="collapse float-right" id="collapseExample">
                              <div v-if="cart" class="product-box-compact" style="display:flex;overflow-x: auto;">
                                <div
                                  v-for="item in cart.lineItems"
                                  :key="item._id"
                                  class="box">
                                  <div
                                    class="col-lg-3 col-md-6 col-xs-12"
                                    
                                  >
                                    <CartItem :item="item"  />
                                  </div>
                                </div>
                              </div>
                  <div class="checkout-order-summary-content">
                    <section class="swiper-order-summary">
                      <div class="swiper-container">
                        
                        <div class="col-lg-5 col-md-6 col-xs-12">
                          <div class="product-box-container">

                           
                            <!-- <div class="product-box-compact">
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
                              <div class="checkout-order-summary-tagline">
                                <span>تعداد : 1 عدد</span>
                              </div>
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div class="checkout-to-shipping-sticky">
                <a @click="processOrder" class="selenium-next-step-shipping"
                  >پرداخت</a
                >
                <div class="checkout-to-shipping-price-report">
                  <p>مبلغ قابل پرداخت</p>
                  <div class="cart-item-product-price">
                    {{ $n(totals.subtotal + 300000) }}
                    <span>ریال</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="checkout-price-options">
              <section class="checkout-price-options-container">
                <div class="checkout-price-options-header">
                  <span>استفاده از کارت هدیه بروکس</span>
                </div>
                <div class="checkout-price-options-content">
                  <p>
                    با ثبت کد کارت هدیه، مبلغ کارت هدیه از “مبلغ قابل پرداخت”
                    کسر می‌شود.
                  </p>
                </div>
                <div class="checkout-price-options-row">
                  <div class="checkout-price-options-form-field">
                    <input
                      type="text"
                      name="gift-card-serial"
                      class="input-field"
                      placeholder="مثلا 1234ABCD5678EFGH0123"
                    />
                  </div>
                  <button class="checkout-price-options-form-button">
                    ثبت کدهدیه
                  </button>
                </div>
              </section>
            </div>
            <div class="checkout-price-options">
              <section class="checkout-price-options-container">
                <div class="checkout-price-options-header">
                  <span>استفاده از کد تخفیف بروکس</span>
                </div>
                <div class="checkout-price-options-content">
                  <p>
                    با ثبت کد تخفیف، مبلغ کد تخفیف از “مبلغ قابل پرداخت” کسر
                    می‌شود.
                  </p>
                </div>
                <div class="checkout-price-options-row">
                  <div class="checkout-price-options-form-field">
                    <input
                      type="text"
                      name="gift-card-serial"
                      class="input-field"
                      placeholder="مثلا 837A2CS"
                    />
                  </div>
                  <button class="checkout-price-options-form-button">
                    ثبت کد هدیه
                  </button>
                </div>
              </section>
            </div>
          </div>

          <div class="checkout-actions">
            <a href="#" class="btn-link-spoiler"> « بازگشت به سبد خرید </a>
            <a href="#" class="save-shipping-data">
              تایید و ادامه ثبت سفارش »
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-xs-12 pull-left">
          <div class="page-aside" style="margin-top: 95px">
            <div class="checkout-summary">
              <ul class="checkout-summary-summary">
                <li>
                  <span>مبلغ کل ({{ $n(totalItems) }} کالا)</span>
                  <span>{{ $n(totals.subtotal) }} ریال</span>
                </li>
                <li>
                  <span>جمع</span>
                  <span>{{ $n(totals.subtotal) }} ریال</span>
                </li>
                <li>
                  <span style="color: #424750; font-size: 14px"
                    >هزینه ارسال</span
                  >
                  <span></span>
                </li>
                <li>
                  <span><i class="fa fa-truck"></i>ارسال عادی</span>
                  <span>{{ $n(300000) }} ریال</span>
                </li>
                <li>
                  <span>مبلغ قابل پرداخت</span>
                  <span>{{ $n(totals.subtotal + 300000) }} ریال</span>
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
    <template v-if="false">
      <SfHeading
        :level="3"
        title="Payment"
        class="sf-heading--left sf-heading--no-underline title"
      />
      <SfTable class="sf-table--bordered table desktop-only">
        <SfTableHeading class="table__row">
          <SfTableHeader class="table__header table__image">{{
            $t('Item')
          }}</SfTableHeader>
          <SfTableHeader
            v-for="tableHeader in tableHeaders"
            :key="tableHeader"
            class="table__header"
            :class="{ table__description: tableHeader === 'Description' }"
          >
            {{ tableHeader }}
          </SfTableHeader>
        </SfTableHeading>
        <SfTableRow
          v-for="(product, index) in products"
          :key="index"
          class="table__row"
        >
          <SfTableData class="table__image">
            <SfImage
              :src="cartGetters.getItemImage(product)"
              :alt="cartGetters.getItemName(product)"
            />
          </SfTableData>
          <SfTableData class="table__data table__description table__data">
            <div class="product-title">
              {{ cartGetters.getItemName(product) }}
            </div>
            <div class="product-sku">{{ cartGetters.getItemSku(product) }}</div>
          </SfTableData>
          <SfTableData
            class="table__data"
            v-for="(value, key) in cartGetters.getItemAttributes(product, [
              'size',
              'color',
            ])"
            :key="key"
          >
            {{ value }}
          </SfTableData>
          <SfTableData class="table__data">{{
            cartGetters.getItemQty(product)
          }}</SfTableData>
          <SfTableData class="table__data price">
            <SfPrice
              :regular="
                $n(cartGetters.getItemPrice(product).regular, 'currency')
              "
              :special="
                cartGetters.getItemPrice(product).special &&
                $n(cartGetters.getItemPrice(product).special, 'currency')
              "
              class="product-price"
            />
          </SfTableData>
        </SfTableRow>
      </SfTable>
      <div class="summary">
        <div class="summary__group">
          <div class="summary__total">
            <SfProperty
              name="Subtotal"
              :value="
                $n(
                  totals.special > 0 ? totals.special : totals.subtotal,
                  'currency'
                )
              "
              class="sf-property--full-width property"
            />
          </div>

          <SfDivider />

          <SfProperty
            name="Total price"
            :value="$n(totals.total, 'currency')"
            class="
              sf-property--full-width sf-property--large
              summary__property-total
            "
          />

          <VsfPaymentProvider @change:payment="handlePaymentChange" />

          <SfCheckbox
            v-e2e="'terms'"
            v-model="terms"
            name="terms"
            class="summary__terms"
          >
            <template #label>
              <div class="sf-checkbox__label">
                {{ $t('I agree to') }}
                <SfLink href="#"> {{ $t('Terms and conditions') }}</SfLink>
              </div>
            </template>
          </SfCheckbox>

          <div v-e2e="'payment-summary-buttons'" class="summary__action">
            <SfButton
              type="button"
              class="sf-button color-secondary summary__back-button"
              @click="router.push(localePath('/checkout/billing'))"
            >
              {{ $t('Go back') }}
            </SfButton>
            <SfButton
              :disabled="loading || !terms"
              class="summary__action-button"
              @click="processOrder"
            >
              {{ $t('Make an order') }}
            </SfButton>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {
  SfHeading,
  SfTable,
  SfCheckbox,
  SfButton,
  SfDivider,
  SfImage,
  SfIcon,
  SfPrice,
  SfProperty,
  SfAccordion,
  SfLink,
} from '@storefront-ui/vue';
import { onSSR, Logger } from '@vue-storefront/core';
import { ref, computed, useRouter } from '@nuxtjs/composition-api';
import {
  useMakeOrder,
  useCart,
  cartGetters,
  orderGetters,
} from '@vue-storefront/spree';
import axios from 'axios';
import CartItem from '~/components/Shopping/CartItem.vue'

export default {
  name: 'Payment',
  components: {
    SfHeading,
    SfTable,
    SfCheckbox,
    SfButton,
    SfDivider,
    SfImage,
    SfIcon,
    SfPrice,
    SfProperty,
    SfAccordion,
    SfLink,
    CartItem,
    VsfPaymentProvider: () =>
      import('~/components/Checkout/VsfPaymentProvider'),
  },
  setup(_props, { root }) {
    const router = useRouter();
    const { cart, load } = useCart();
    const { make, loading, error: makeError } = useMakeOrder();

    const isPaymentReady = ref(false);
    const savePayment = ref(null);
    const terms = ref(false);

    onSSR(async () => {
      await load();
    });

    const handlePaymentChange = (params) => {
      isPaymentReady.value = params.isPaymentReady;
      savePayment.value = params.savePayment;
    };

    const processOrder = async () => {
      const orderId = orderGetters.getId(cart.value);
      try {
        const cartId = cart.value._id;
        const cartamount = cart.value.totalAmount + 300000;

        const res2 = await axios.get(
          'http://bshop.burux.com/paymenturl/' + cartId + '/' + cartamount + ''
        );

        window.open(res2.data.payment_url, '_self');
        const CartNumber = cart.value.number;

        //await savePayment.value();
      } catch (e) {
        Logger.error(e);
        return;
      }

      await make();
      if (makeError.value.make) {
        Logger.error(makeError.value.make);
        return;
      }
      //router.push(root.localePath(`/checkout/thank-you?order=${orderId}`));
    };
    return {
      router,
      isPaymentReady,
      terms,
      loading,
      products: computed(() => cartGetters.getItems(cart.value)),
      totals: computed(() => cartGetters.getTotals(cart.value)),
      tableHeaders: ['Description', 'Size', 'Color', 'Quantity', 'Amount'],
      cartGetters,
      processOrder,
      handlePaymentChange,
      cart,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
}
.table {
  margin: 0 0 var(--spacer-base) 0;
  &__row {
    justify-content: space-between;
  }
  @include for-desktop {
    &__header {
      text-align: center;
      &:last-child {
        text-align: right;
      }
    }
    &__data {
      text-align: center;
    }
    &__description {
      text-align: left;
      flex: 0 0 12rem;
    }
    &__image {
      --image-width: 5.125rem;
      text-align: left;
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
}
.product-sku {
  color: var(--c-text-muted);
  font-size: var(--font-size--sm);
}
.price {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.product-price {
  --price-font-size: var(--font-size--base);
}
.summary {
  &__terms {
    margin: var(--spacer-base) 0 0 0;
  }
  &__total {
    margin: 0 0 var(--spacer-sm) 0;
    flex: 0 0 16.875rem;
  }
  &__action {
    @include for-desktop {
      display: flex;
      margin: var(--spacer-xl) 0 0 0;
    }
  }
  &__action-button {
    margin: 0;
    width: 100%;
    margin: var(--spacer-sm) 0 0 0;
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
      width: auto;
    }
    &--secondary {
      @include for-desktop {
        text-align: right;
      }
    }
  }
  &__back-button {
    margin: var(--spacer-xl) 0 0 0;
    width: 100%;
    @include for-desktop {
      margin: 0 var(--spacer-xl) 0 0;
      width: auto;
    }
    color: var(--c-white);
    &:hover {
      color: var(--c-white);
    }
  }
  &__property-total {
    margin: var(--spacer-xl) 0 0 0;
  }
}
.property {
  margin: 0 0 var(--spacer-sm) 0;
  &__name {
    color: var(--c-text-muted);
  }
}
.accordion {
  margin: 0 0 var(--spacer-xl) 0;
  &__item {
    display: flex;
    align-items: flex-start;
  }
  &__content {
    flex: 1;
  }
  &__edit {
    flex: unset;
  }
}
.content {
  margin: 0 0 var(--spacer-xl) 0;
  color: var(--c-text);
  &:last-child {
    margin: 0;
  }
  &__label {
    font-weight: var(--font-weight--normal);
  }
}
</style>
