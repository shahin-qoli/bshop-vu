<template>
  <div>
    <div class="page-content">
        <div class="col-lg-4 col-md-4 col-xs-12 pull-right">
            <div class="checkout-tab">
                <div class="checkout-tab-pill listing-active-cart">
                          سبد خرید شما                  
                    <span class="checkout-tab-counter">{{$n(totalItems)}}</span>
                </div>
                
            </div>

        </div>
    </div>
    <div v-if="cart.itemCount!=0" class="cart-tab-main">
        <div class="col-lg-9 col-md-9 col-xs-12 pull-right">
            <div class="page-content-cart">
                <form @submit.prevent>
                    <div class="header-express">
                        <!-- <span class="checkout-header-title"><i class="fa fa-truck"></i>ارسال عادی</span>
                        <span class="header-extra-info">({{$n(totalItems)}}
                            کالا)</span> -->
                        <span class="checkout-header-delivery-cost">{{$n(totalItems)}} کالا</span>
                    </div>
                    <div v-for="(product) in products"
                                :key="cartGetters.getItemSku(product)"
                                :name="product.name"
                                :qty="cartGetters.getItemQty(product)"
                                :displayTotal="product.displayTotal"
                                :image="cartGetters.getItemImage(product)"
                                :regular-price="$n(cartGetters.getItemPrice(product).regular, 'currency')"
                                class="checkout-body">
                        <a  class="remove-from-cart" @click="removeItem({ product: { id: product.id } })"><i class="mdi mdi-close"></i></a>
                        <a :href="localePath(`/p/${cartGetters.getItemVariantId(product)}/${cartGetters.getItemSlug(product)}`)" class="col-thumb"><img :src= "cartGetters.getItemImage(product)"
                                alt="img-slider"></a>

                        <div class="checkout-col-desc">
                            <a :href="localePath(`/p/${cartGetters.getItemVariantId(product)}/${cartGetters.getItemSlug(product)}`)">
                                <h3 style="font-size:17px;"><strong>{{productGetters.getName(product)}}</strong>
                                </h3>
                            </a>
                            <div class="checkout-variant-color">
                                <!-- <span class="checkout-variant-title">سفید</span> -->
                                <!-- <div class="checkout-variant-shape"></div> -->
                                <div class="checkout-dealer" v-for="(option,name, j) in product.options" :key="j" ><i class="fa fa-check"></i>{{name}} : {{option}}</div>
   
                            </div>
                            <div class="quantity">
                                <input
                                  @input="updateQuantity({ product: { id: product.id }, quantity: Number($event.currentTarget.value) })"
                                  type="number" min="1" max="10" step="1" :value="cartGetters.getItemQty(product)" >
                                  <div class="quantity-nav">
                                    <div class="quantity-button quantity-up" @click="updateQuantity({ product: { id: product.id }, 
                                    quantity: cartGetters.getItemQty(product)+1 })">+</div>
                                    <div v-if="product.qty>1" class="quantity-button quantity-down" @click="updateQuantity({ product: { id: product.id }, 
                                    quantity: cartGetters.getItemQty(product)-1 })">-</div>
                                    <div v-else class="quantity-button quantity-down" @click="removeItem({ product: { id: product.id } })">
                                    <i class="fa fa-trash"></i></div>             
                                  </div>
                            </div>
                            
                            <a href="#" class="add-to-sfl">
                                
                                <div class="cart-item-product-price">
                                  <span>قیمت واحد:</span>
                                    {{$n(cartGetters.getItemPrice(product).regular)}}
                                    <span>
                                        ریال
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </form>
            </div>

            
        </div>
        <div class="col-lg-3 col-md-3 col-xs-12 pull-left">
            <div class="page-aside">
                <div class="checkout-summary">
                    <ul class="checkout-summary-summary">
                        <li>
                            <span>قیمت کالاها ({{$n(totalItems)}} کالا)</span>
                            <span>{{$n(totals.subtotal)}} تومان</span>
                        </li>
                        <li>
                            <!-- <span>جمع</span>
                            <span>{{$n(totals.subtotal)}} ریال</span> -->
                            <span style="color: #05a0fa">سود شما</span>
                            <span style="color: #05a0fa">{{$n(0)}} ریال</span>
                        </li>
                        <li>
                            <span style="color: #7d8182; font-size:12px;"> هزینه ارسال براساس آدرس و میزان خرید شما محاسبه می شود</span>
                            <span></span>
                        </li>
                        <li>
                            <!-- <span><i class="fa fa-truck"></i>ارسال عادی</span>
                            <span>براساس شهر واستان</span> -->
                        </li>
                        <li>
                            <span>جمع سبد خرید</span>
                            <span>{{$n(totals.subtotal)}} ریال</span>
                        </li>

                    </ul>
                </div>
                    <div class="checkout-to-shipping-sticky">
                    <a href="/checkout/shipping" class="selenium-next-step-shipping">ادامه فرآیند خرید</a>
                    <!-- <div class="checkout-to-shipping-price-report">
                        <p>مبلغ قابل پرداخت</p>
                        <div class="cart-item-product-price">
                            {{$n(totals.subtotal)}}
                            <span>
                                ریال
                            </span>
                        </div>
                    </div> -->
                </div>
                <div class="checkout-summary-content">
                    <p>سفارش شما هنوز ثبت نشده است ، برای تکمیل فرآیند خرید  بر روی ادامه فرآیند خرید کلیک کنید</p>
                </div>
                <div class="checkout-summary">
                  <ul class="checkout-summary-summary">
                    <li><i class="fa fa-truck"></i>ارسال رایگان</li>
                    <li>برای سفارش بالای {{$n(800000)}} تومان</li></ul>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="cart-tab-main"  >
        <div class="col-lg-8 col-md-8 col-xs-12 pull-right">
            <div class="page-content-cart">
                <div class="container">
                    <div class="checkout-empty">
                        <div class="checkout-empty-icon">
                            <span class="mdi mdi-cart-remove"></span>
                        </div>
                        <div class="checkout-empty-title">سبد خرید شما خالی است!</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-xs-12 pull-left">
            <div class="page-aside">
                <div class="checkout-summary">
                    <h1>چگونه میتوان خرید کرد؟</h1>
                    <p>
                        .شما میتوانبد با مشاهده هر کالا و با انتخاب گزینه "افزودن به سبد خرید"  آن را در سبد خرید خود مشاهده کنید
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {
  SfSidebar,
  SfHeading,
  SfButton,
  SfIcon,
  SfProperty,
  SfPrice,
  SfCollectedProduct,
  SfImage,
  SfQuantitySelector
} from '@storefront-ui/vue';
import { computed } from '@nuxtjs/composition-api';
import { useProduct, useCart, cartGetters, useWishlist, productGetters } from '@vue-storefront/spree';
import { useUiState } from '~/composables';
import debounce from 'lodash.debounce';
import {wishlistGetters} from '@vue-storefront/spree';
export default {
  head(prop){      
    return{
      title : 'سبد خرید'
    }
  },
    name: 'Cart',
    components: {
    SfSidebar,
    SfButton,
    SfHeading,
    SfIcon,
    SfProperty,
    SfPrice,
    SfCollectedProduct,
    SfImage,
    SfQuantitySelector
  },
  setup() {
    const { isCartSidebarOpen, toggleCartSidebar } = useUiState();
    const { cart, removeItem, updateItemQty, loading } = useCart();
    const products = computed(() => cartGetters.getItems(cart.value));
    const totals = computed(() => cartGetters.getTotals(cart.value));
    const totalItems = computed(() => cartGetters.getTotalItems(cart.value));
    const { wishlist, addItem: addItemToWishlist, isInWishlist } = useWishlist();
    const isWishlistDisabled = computed(() => wishlistGetters.isWishlistDisabled(wishlist.value));
    const updateQuantity = debounce(async ({ product, quantity }) => {
 
      await updateItemQty({ product, quantity });
    }, 500);

    const handleSaveForLaterClick = async(product) => {
      if (!isInWishlist({product})) {
        await Promise.all([addItemToWishlist({product}), removeItem({product})]);
      }
    };
    

    return {
      updateQuantity,
      loading,
      products,
      removeItem,
      isCartSidebarOpen,
      toggleCartSidebar,
      totals,
      totalItems,
      cartGetters,
      cart,
      handleSaveForLaterClick,
      isWishlistDisabled,
      isInWishlist,
      useProduct,
      productGetters
    };
  }
  
}
</script>
<style lang="scss" scoped>
#cart {
  --sidebar-z-index: 3;
  --overlay-z-index: 3;
  @include for-desktop {
    & > * {
      --sidebar-bottom-padding: var(--spacer-base);
      --sidebar-content-padding: var(--spacer-base);
    }
  }
}
.cart-summary {
  margin-top: var(--spacer-xl);
}
.my-cart {
  flex: 1;
  display: flex;
  flex-direction: column;
  &__total-items {
    margin: 0;
  }
  &__total-price {
    --price-font-size: var(--font-size--xl);
    --price-font-weight: var(--font-weight--medium);
    margin: 0 0 var(--spacer-base) 0;
  }
}
.empty-cart {
  --heading-description-margin: 0 0 var(--spacer-xl) 0;
  --heading-title-margin: 0 0 var(--spacer-xl) 0;
  --heading-title-color: var(--c-primary);
  --heading-title-font-weight: var(--font-weight--semibold);
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  &__banner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
  &__heading {
    padding: 0 var(--spacer-base);
  }
  &__image {
    --image-width: 16rem;
    margin: 0 0 var(--spacer-2xl) 7.5rem;
  }
  @include for-desktop {
    --heading-title-font-size: var(--font-size--xl);
    --heading-title-margin: 0 0 var(--spacer-sm) 0;
  }
}
.collected-product-list {
  flex: 1;
}
.collected-product {
  margin: 0 0 var(--spacer-sm) 0;
  &__properties {
    margin: var(--spacer-xs) 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 2;
    &:first-child {
      margin-bottom: 8px;
    }
  }
  &__actions {
    transition: opacity 150ms ease-in-out;
  }
  &__save,
  &__compare {
    --button-padding: 0;
    &:focus {
      --cp-save-opacity: 1;
      --cp-compare-opacity: 1;
    }
  }
  &__save {
    opacity: var(--cp-save-opacity, 0);
  }
  &__compare {
    opacity: var(--cp-compare-opacity, 0);
  }
  &:hover {
    --cp-save-opacity: 1;
    --cp-compare-opacity: 1;
    @include for-desktop {
      .collected-product__properties {
        display: none;
      }
    }
  }
}

.wishlist__text {
  text-decoration: underline;
  color: gray;
  font-family: var(--font-family--secondary);
  font-size: var(--font-size--sm);
}

</style>