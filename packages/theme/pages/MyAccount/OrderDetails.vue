<template>
  <!-- <SfTabs :open-tab="1" v-if="order">
    <SfTab :title="`Order details (${orderGetters.getId(order)})`">
      <SfButton class="sf-button--text all-orders" @click="displayOrderHistory()">Show All Orders</SfButton>
      <div class="highlighted highlighted--total">
        <SfProperty
          name="Order ID"
          :value="orderGetters.getId(order)"
          class="sf-property--full-width property"
        />
        <SfProperty
          name="Date"
          :value="orderGetters.getDate(order)"
          class="sf-property--full-width property"
        />
        <SfProperty
          name="Status"
          :value="orderGetters.getStatus(order)"
          class="sf-property--full-width property"
        />
        <SfProperty
          name="Total"
          :value="$n(orderGetters.getPrice(order), 'currency')"
          class="sf-property--full-width property"
        />
      </div>
      <SfTable class="products">
        <SfTableHeading>
          <SfTableHeader class="products__name">{{ $t('Product') }}</SfTableHeader>
          <SfTableHeader>{{ $t('Quantity') }}</SfTableHeader>
          <SfTableHeader>{{ $t('Price') }}</SfTableHeader>
        </SfTableHeading>
        <SfTableRow v-for="(item, i) in orderGetters.getItems(order)" :key="i">
          <SfTableData class="products__name">
            <nuxt-link :to="'/p/'+orderGetters.getItemSku(item)+'/'+orderGetters.getItemSku(item)">
              {{orderGetters.getItemName(item)}}
            </nuxt-link>
          </SfTableData>
          <SfTableData>{{orderGetters.getItemQty(item)}}</SfTableData>
          <SfTableData>{{$n(orderGetters.getItemPrice(item), 'currency')}}</SfTableData>
        </SfTableRow>
      </SfTable>
    </SfTab>
  </SfTabs> -->
      <div class="col-lg-9 col-md-8 col-xs-12 pull-right">
        <div class="col-lg-12 col-xs-12 pull-right">
            <div class="profile-navbar">
                <div class="profile-navbar-back-alignment">
                    <a class="profile-navbar-btn-back" @click="displayOrderHistory()" >بازگشت</a>
                    <h4>سفارش {{orderGetters.getId(order)}}
                        <span>ثبت شده در تاریخ  {{ getFaDate(order.completedAt) }}</span>
                    </h4>
                </div>
                <div class="profile-navbar-invoice">
                    <button class="profile-navbar-btn-invoice">مشاهده فاکتور</button>
                </div>
            </div>
            <div class="profile-stats mt-3">
                <div class="profile-stats-row">
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col">
                            <p><span> نام و نام خانوادگی :</span>{{Sippingaddress.firstName}} {{Sippingaddress.lastName}}</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col">
                            <p><span>شماره تماس تحویل گیرنده: </span>{{Sippingaddress.phone}}</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col">
                            <p><span>آدرس تحویل گیرنده:</span>{{Sippingaddress.addressLine1}}</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col">
                            <p><span>وضعیت سفارش:</span>{{orderGetters.getStatus(order)}}</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col">
                            <p><span>مبلغ قابل پرداخت:</span>{{$n(orderGetters.getPrice(order))}} ریال</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 pull-right" style="padding:0;">
                        <div class="profile-stats-col" >
                            <p><span>مبلغ کل:</span>{{$n(order.itemTotalAmount)}} ریال</p>
                        </div>
                    </div>
                    <!--                    <a href="#" class="link-spoiler-edit"></a>-->
                </div>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="headline-profile" style="margin-top:15px;">
                <span>مرسوله ۱ از ۱</span>
                <!-- <span class="profile-order-cancel-button">لغو دریافت مرسوله
                </span> -->
            </div>
            <div class="profile-stats profile-order">
                <!-- <div class="profile-order-steps-note">
                    <span>
                        تحویل مرسوله به مشتری
                    </span>
                </div> -->
                <!-- <section class="swiper-container-horizontal">
                    <div class="profile-order-steps-container">
                        <div class="profile-order-steps-item profile-order-steps-item-active">
                            <img src="assets/images/svg/profile-order-1.svg" alt="profile">
                            <span>در صف بررسی</span>
                        </div>
                        <div class="hr profile-order-steps-item-active"></div>
                        <div class="profile-order-steps-item">
                            <img src="assets/images/svg/profile-order-2.svg" alt="profile">
                            <span>تایید سفارش</span>
                        </div>
                        <div class="hr"></div>
                        <div class="profile-order-steps-item">
                            <img src="assets/images/svg/profile-order-3.svg" alt="profile">
                            <span>آماده‌سازی سفارش</span>
                        </div>
                        <div class="hr"></div>
                        <div class="profile-order-steps-item">
                            <img src="assets/images/svg/profile-order-4.svg" alt="profile">
                            <span>خروج از مرکز پردازش</span>
                        </div>
                        <div class="hr"></div>
                        <div class="profile-order-steps-item">
                            <img src="assets/images/svg/profile-order-5.svg" alt="profile">
                            <span>تحویل به پست</span>
                        </div>
                        <div class="hr"></div>
                        <div class="profile-order-steps-item">
                            <img src="assets/images/svg/profile-order-6.svg" alt="profile">
                            <span>دریافت در مرکز مبادلات پست</span>
                        </div>
                        <div class="hr"></div>
                        <div class="profile-order-steps-item">
                            <img src="assets/images/svg/profile-order-7.svg" alt="profile">
                            <span>تحویل مرسوله به مشتری</span>
                        </div>
                    </div>
                </section> -->
                <div class="table-draught">
                    <div class="table-draught-row">
                        <div class="table-draught-col">کد مرسوله: {{orderGetters.getId(order)}}
                           
                            
                        </div>
                        <div class="table-draught-col">مبلغ کل : {{$n(order.itemTotalAmount)}} ریال                            
                        </div>
                        
                    </div>
                    <div class="table-draught-row">
                        <div class="table-draught-col">نحوه ارسال سفارش: پست پیشتاز با ظرفیت اختصاصی برای بروکس
                        </div>
                        <div class="table-draught-col">هزینه ارسال
                            : {{$n(order.shipTotalAmount)}} ریال

                        </div>
                    </div>
                    <div class="table-draught-row">
                        <div class="table-draught-col last-tabel">
                            مبلغ کل این
                            مرسوله: {{$n(order.totalAmount)}}
                          
                        </div>
                    </div>
                </div>
                <div class="table-orders">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">کالا</th>
                                <th scope="col">تعداد</th>
                                <th scope="col">قیمت واحد</th>
                                <th scope="col">قیمت کل</th>
                                <th scope="col">تخفیف</th>
                                <th scope="col">قیمت نهایی</th>
                                <th scope="col">جزییات کالا</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) in lineItems" :key="i">
                                <td :href="'/p/'+orderGetters.getItemSku(item)+'/'+orderGetters.getItemSku(item)">
                                <img  :src="item.image" style="width:100px; float:right;" alt="profile">
                                    <h3 >{{item.name}}
                                    </h3>
                                </td>
                                <td class="order-code">{{item.qty}}</td>
                                <td>{{$n(orderGetters.getItemPrice(item))}} ریال</td>
                                <td>{{$n(orderGetters.getItemQty(item)*orderGetters.getItemPrice(item))}} ریال</td>
                                <td>0</td>
                                <td>{{$n(orderGetters.getItemQty(item)*orderGetters.getItemPrice(item))}} ریال</td>
                                <td class="detail">
                                <a :href="'/p/'+orderGetters.getItemSku(item)+'/'+orderGetters.getItemSku(item)" class="w-100 h-100 d-inline-block">
                                <i class="fa fa-angle-left" :href="'/p/'+orderGetters.getItemSku(item)+'/'+orderGetters.getItemSku(item)"></i>
                                </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 col-xs-12" style="padding:0;" v-for="(item, i) in lineItems" :key="i">
                <div class="product-box-profile">
                    <div class="product-box-content-profile">
                        <div class="product-box-count">{{item.qty}}</div>
                        <a :href="'/p/'+orderGetters.getItemSku(item)+'/'+orderGetters.getItemSku(item)" class="product-box-img">
                            <img :src="item.image" alt="profile">
                        </a>
                        <div class="product-box-title">{{orderGetters.getItemName(item)}}</div>
                        <div class="product-box-seller" v-for="(option,name, j) in item.options" :key="j"><span>{{name}}: </span><span
                                class="product-box-seller-name">{{option}}</span>
                        </div>
                       
                        <div class="price-profile">
                            <div class="price-value-profile">
                                {{$n(orderGetters.getItemQty(item)*orderGetters.getItemPrice(item))}} 
                                <span class="price-currency"> ریال</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
  SfTabs,
  SfTable,
  SfButton,
  SfProperty
} from '@storefront-ui/vue';
import { computed, useRoute, useRouter } from '@nuxtjs/composition-api';
import { useUserOrder, orderGetters } from '@vue-storefront/spree';
import { onSSR } from '@vue-storefront/core';
import moment from 'moment-jalaali'

export default {
  name: 'OrderDetails',
  components: {
    SfTabs,
    SfTable,
    SfButton,
    SfProperty
  },
  setup(_, context) {
    const route = useRoute();
    const router = useRouter();
    const { orders, search } = useUserOrder();
    const orderId = route?.value?.params?.id;
    

    const order = computed(() => orderId ? (orders.value || null) : null);

    const displayOrderHistory = () => {
      const localeTransformedPath = context.root.localePath('/my-account/order-history');
      router.push(localeTransformedPath);
    };
    const getFaDate = (date) => {
      return moment(date).format('jYYYY/jM/jD HH:mm')
    }
    const lineItems=computed(()=> {
      if (!order.value) {
        return {}
          }
      else {
        const lineItems=order.value.lineItems;
        return lineItems
      }

    });

    const Sippingaddress= computed(()=>{
          if (!order.value) {
        return {}
          }
          else {
            const adress=order.value.address;
           return adress.shipping
          }
    })
  
    onSSR(async () => {
      if (orderId) await search({ orderId });
      
    });

    return {
      orderGetters,
      Sippingaddress,
      getFaDate,
      displayOrderHistory,
      order,
      lineItems,
    };
  }
};
</script>

<style lang='scss' scoped>
.all-orders {
  --button-padding: var(--spacer-base) 0;
}
.products {
  --table-column-flex: 1;
  &__name {
    margin-right: var(--spacer-sm);
    @include for-desktop {
      --table-column-flex: 2;
    }
  }
}
.highlighted {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--c-light);
  padding: var(--spacer-sm);
  --property-value-font-size: var(--font-size--base);
  --property-name-font-size: var(--font-size--base);
  &:last-child {
    margin-bottom: 0;
  }
  ::v-deep .sf-property__name {
    white-space: nowrap;
  }
  ::v-deep .sf-property__value {
    text-align: right;
  }
  &--total {
    margin-bottom: var(--spacer-sm);
  }
  @include for-desktop {
    padding: var(--spacer-xl);
    --property-name-font-size: var(--font-size--lg);
    --property-name-font-weight: var(--font-weight--medium);
    --property-value-font-size: var(--font-size--lg);
    --property-value-font-weight: var(--font-weight--semibold);
  }
}
</style>

