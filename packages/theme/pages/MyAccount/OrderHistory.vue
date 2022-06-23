<template>
  <!-- <SfTabs :open-tab="1">
    <SfTab title="My orders">
      <div>
        <p class="message">
          {{ $t('Details and status orders') }}
        </p>
        <div v-if="orders.length === 0" class="no-orders">
          <p class="no-orders__title">{{ $t('You currently have no orders') }}</p>
          <SfButton class="no-orders__button">{{ $t('Start shopping') }}</SfButton>
        </div>
        <SfTable v-else class="orders">
          <SfTableHeading>
            <SfTableHeader
              v-for="tableHeader in tableHeaders"
              :key="tableHeader"
              >{{ tableHeader }}</SfTableHeader>
            <SfTableHeader class="orders__element--right" />
          </SfTableHeading>
          <SfTableRow v-for="order in orders" :key="orderGetters.getId(order)">
            <SfTableData v-e2e="'order-number'">{{ orderGetters.getId(order) }}</SfTableData>
            <SfTableData>{{ orderGetters.getDate(order) }}</SfTableData>
            <SfTableData>{{ $n(orderGetters.getPrice(order), 'currency') }}</SfTableData>
            <SfTableData>
              <span :class="getStatusTextClass(order)">{{ orderGetters.getStatus(order) }}</span>
            </SfTableData>
            <SfTableData class="orders__view orders__element--right">
              <SfButton class="sf-button--text desktop-only" @click="displayOrderDetails(order)">
                {{ $t('View details') }}
              </SfButton>
            </SfTableData>
          </SfTableRow>
        </SfTable>
        <p>Total orders - {{ totalOrders }}</p>
      </div>
    </SfTab>
  </SfTabs> -->
          <div class="col-lg-9 col-md-3 col-xs-12 pull-left">
        <div class="headline-profile page-profile-order">
            <span>همه سفارش ها</span>
        </div>
        <div v-if="orders.length === 0" class="profile-stats">
            <div class="profile-return-box">
                <p class="profile-return-message">در حال حاضر سفارش ثبت شده ای ندارید</p>
                <a href="/" class="profile-return-message-link">بازگشت به فروشگاه</a>
            </div>
                
        </div>
        <div v-else class="profile-stats page-profile-order">
            <div class="table-orders">
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">شماره سفارش</th>
                            <th scope="col">تاریخ ثبت سفارش</th>
                            <th scope="col">مبلغ قابل پرداخت</th>
                            <th scope="col">مبلغ کل</th>
                            <th scope="col">عملیات پرداخت</th>
                            <th scope="col">جزئیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, i) in orders" :key="i">
                            <td>{{i+1}}</td>
                            <td class="order-code">{{ orderGetters.getId(order) }}</td>
                            <td dir="ltr">{{ getFaDate(order.completedAt) }}</td>
                            <td>{{ $n(orderGetters.getPrice(order))}}</td>
                            <td>{{ $n(orderGetters.getPrice(order))}} ریال</td>
                            <td :class="getStatusTextClass(order)">{{ getorderstatus(order) }}</td>
                            <td class="detail" >
                              <a :href="`/my-account/order-details/${orderGetters.getId(order)}`" class="w-100 h-100 d-inline-block">
                                <i class="fa fa-angle-left"></i>
                              </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!--        responsive-profile-order------------------------->
        <div class="page-profile">
            <div class="page-navigation">
                <div class="page-navigation-title">سفارش‌های من</div>
                <a href="/" class="page-navigation-btn-back">بازگشت <i class="fa fa-angle-left"></i></a>
            </div>
            <div v-if="orders.length === 0" class="no-orders">
                <p class="no-orders__title">{{ $t('You currently have no orders') }}</p>
                <SfButton class="no-orders__button">{{ $t('Start shopping') }}</SfButton>
            </div>
            <div v-else class="profile-orders">
                <div class="collapse"  v-for="order in orders" :key="orderGetters.getId(order)">
                    <div class="profile-orders-item">
                        <div class="profile-orders-header" >
                            <a :href="`/my-account/order-details/${orderGetters.getId(order)}`" class="profile-orders-header-details">
                                <div class="profile-orders-header-summary">
                                    <div class="profile-orders-header-row" >
                                        <span class="profile-orders-header-id" dir="rtl">سفارش {{ orderGetters.getId(order) }} </span>
                                       
                                    </div>
                                </div>
                            </a>
                            <hr class="ui-separator">
                            <div class="profile-orders-header-data">
                                <div class="profile-info-row">
                                    <div class="profile-info-label">تاریخ ثبت سفارش</div>
                                    <div class="profile-info-value">{{ getFaDate(order.completedAt) }}</div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-label">مبلغ کل</div>
                                    <div class="profile-info-value" dir="rtl"> {{$n(order.itemTotalAmount)}} ریال</div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-label">هزینه ارسال</div>
                                    <div class="profile-info-value" dir="rtl"> {{$n(order.shipTotalAmount)}} ریال </div>
                                </div>
                                <div class="profile-info-row">
                                    <div class="profile-info-label">مبلغ قابل پرداخت</div>
                                    <div class="profile-info-value" dir="rtl"><strong>{{$n(order.totalAmount)}} ریال</strong></div>
                                </div>
                                
                                <div class="profile-info-row">
                                    <div class="profile-info-label">وضعیت</div>
                                    <div class="profile-info-value" dir="rtl">{{ orderGetters.getStatus(order) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--        responsive-profile-order------------------------->
    </div>
</template>

<script>
import {
  SfTabs,
  SfTable,
  SfButton
} from '@storefront-ui/vue';
import { computed, useRouter } from '@nuxtjs/composition-api';
import { useUserOrder, orderGetters } from '@vue-storefront/spree';
import { AgnosticOrderStatus } from '@vue-storefront/core';
import { onSSR } from '@vue-storefront/core';
import moment from 'moment-jalaali'

export default {
  name: 'OrderHistory',
  components: {
    SfTabs,
    SfTable,
    SfButton
  },
  setup(_, context) {
    const router = useRouter();
    const { orders, search } = useUserOrder();

    const displayOrderDetails = (order) => {
      const path = `/my-account/order-details/${orderGetters.getId(order)}`;
      const localeTransformedPath = context.root.localePath(path);
      router.push(localeTransformedPath);
    };
    const getFaDate = (date) => {
      return moment(date).format('jYYYY/jM/jD HH:mm')
    }
    onSSR(async () => {
      await search();
    });

    const tableHeaders = [
      'Order ID',
      'Payment date',
      'Amount',
      'Status'
    ];

    const getStatusTextClass = (order) => {
      const status = orderGetters.getStatus(order);
      switch (status) {
        case AgnosticOrderStatus.Open:
          return 'text-warning';
        case AgnosticOrderStatus.Complete:
          return 'text-success';
        default:
          return '';
      }
    };

    const getorderstatus=(order)=>{
    const status = orderGetters.getStatus(order)
    if (status == 'complete') {
      return 'اتمام'
    }
    if (status =='returned') {
      return 'مرجوع شد'
    }
    else{
      return orderGetters.getStatus(order); 
    }   
  }

    return {
      tableHeaders,
      orders,
      totalOrders: computed(() => orderGetters.getOrdersTotal(orders.value)),
      getStatusTextClass,
      orderGetters,
      displayOrderDetails,
      getFaDate,
      getorderstatus
    };
  }
};
</script>

<style lang='scss' scoped>
.no-orders {
  &__title {
    margin: 0 0 var(--spacer-lg) 0;
    font: var(--font-weight--normal) var(--font-size--base) / 1.6 var(--font-family--primary);
  }
  &__button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: 17,5rem;
    }
  }
}
.orders {
  @include for-desktop {
    &__element {
      &--right {
        --table-column-flex: 1;
        text-align: right;
      }
    }
  }
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  font: var(--font-weight--light) var(--font-size--base) / 1.6 var(--font-family--primary);
  &__link {
    color: var(--c-primary);
    font-weight: var(--font-weight--medium);
    font-family: var(--font-family--primary);
    font-size: var(--font-size--base);
    text-decoration: none;
    &:hover {
      color: var(--c-text);
    }
  }
}
</style>
