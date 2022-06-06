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
            <li class="is-completed is-completed-active">
              <a
                href="/checkout/shipping"
                class="checkout-steps-item-link active-link-shopping"
              >
                <span>اطلاعات ارسال</span>
              </a>
            </li>
            <li class="is-completed is-completed-active">
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
                class="checkout-steps-item-link active-link-shopping"
              >
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
                <a href="#" class="order-code">
                  {{ orderNumber }}
                </a>
                با موفقیت پرداخت و در سیستم ثبت شد.
                <span class="order-ready-post"
                  >پرداخت با موفقیت انجام شد. سفارش شما با موفقیت ثبت شد و در
                  زمان تعیین شده برای شما ارسال خواهد شد.
                  <br />
                  از اینکه دیجی استور را برای خرید انتخاب کردید از شما
                  سپاسگزاریم.
                </span>
              </div>
            </div>
          </div>

          <div class="checkout-order-info">
            <div class="order-info">
              <div class="order-code">
                کد سفارش :
                <span>
                  {{ orderNumber }}
                </span>
              </div>
              <div class="checkout-process-order-info">
                سفارش شما با موفقیت در سیستم ثبت شد و هم اکنون
                <a href="#" class="processing">در حال پردازش</a>
                است.
                <!--                 جزئیات این سفارش را می توانید با کلیک بر روی دکمه
                <a href="#" class="link-border">پیگیری سفارش</a>
                مشاهده نمایید. -->
              </div>
              <div class="parent-btn btn-following-order">
                <button @click="goToHome" class="dk-btn dk-btn-info">
                  بازگشت به صفحه اصلی
                  <i class="fa fa-home sign-in"></i>
                </button>
              </div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">
                      نام تحویل گیرنده:
                      {{ order.address.shipping.firstName }}
                      {{ order.address.shipping.lastName }}
                    </th>
                    <th scope="col">شماره تماس :</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>تعداد مرسوله : 1</td>
                    <td>مبلغ کل :
                      {{ order.totalAmount }}
                    </td>
                  </tr>
                  <tr>
                    <td>وضعیت پرداخت : پرداخت آنلاین(موفق)</td>
                    <td>وضعیت سفارش : در حال انجام</td>
                  </tr>
                  <tr>
                    <td>
                      آدرس :
                      {{ order.address.shipping.addressLine1 }}
                    </td>
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
import { ref, computed, useRouter, useRoute, onMounted } from '@nuxtjs/composition-api';
import {
  useMakeOrder,
  useCart,
  cartGetters,
  orderGetters,
  useUserOrder,
} from '@vue-storefront/spree';
import axios from 'axios';

export default {
  name: 'ThankYou',
  layout: 'shopping',
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
    VsfPaymentProvider: () =>
      import('~/components/Checkout/VsfPaymentProvider'),
  },
  setup(_props, { root }) {
    const router = useRouter();
    const route = useRoute();
    const { cart, load } = useCart();
    const { make, loading, error: makeError } = useMakeOrder();
    const { orders, search } = useUserOrder();
    const orderNumber = computed(() => {
      if (route.value) {
        return route.value.query.order;
      } else {
        return '';
      }
    });
    const orderId = computed(() => {
      if (route.value) {
        return Number(route.value.query.orderId);
      } else {
        return '';
      }
    });
    const order = computed(() => {
      return orders.value.find((o) => {
        return o.number == orderNumber.value
      }) || {
        address: {
          billing: {},
          shipping: {}
        }
      }
    })
    const isPaymentReady = ref(false);
    const savePayment = ref(null);
    const terms = ref(false);
    const goToHome = function () {
      window.location.href = '/'
    }
    onSSR(async () => {
      await load();
      await search({
        // orderId
      });
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
      route,
      orders,
      order,
      orderNumber,
      orderId,
      goToHome,
      isPaymentReady,
      terms,
      loading,
      cart,
      products: computed(() => cartGetters.getItems(cart.value)),
      totals: computed(() => cartGetters.getTotals(cart.value)),
      tableHeaders: ['Description', 'Size', 'Color', 'Quantity', 'Amount'],
      cartGetters,
      processOrder,
      handlePaymentChange,
    };
  },
};
</script>
