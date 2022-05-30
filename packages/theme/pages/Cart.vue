<template>
  <div>
    <div class="page-content">
        <div class="col-lg-4 col-md-4 col-xs-12 pull-right">
            <div class="checkout-tab">
                <div class="checkout-tab-pill listing-active-cart">
                    سبد خرید
                    <span class="checkout-tab-counter">1</span>
                </div>
                <div class="checkout-tab-pill">لیست خرید بعدی</div>
            </div>

        </div>
    </div>
    <div class="cart-tab-main">
        <div class="col-lg-9 col-md-9 col-xs-12 pull-right">
            <div class="page-content-cart">
                <form action="#">
                    <div class="header-express">
                        <span class="checkout-header-title"><i class="fa fa-truck"></i>ارسال عادی</span>
                        <span class="header-extra-info">(۱
                            کالا)</span>
                        <span class="checkout-header-delivery-cost">هزینه ارسال:رایگان</span>
                    </div>

                    <div v-for="(product, i) in products"
                                :key="i"
                                :name="product.name"
                                :qty="cartGetters.getItemQty(product)"
                                :displayTotal="product.displayTotal"
                                :image="cartGetters.getItemImage(product)"
                                :regular-price="$n(cartGetters.getItemPrice(product).regular, 'currency')"
                                class="checkout-body">
                        <a  class="remove-from-cart"><i class="mdi mdi-close"></i></a>
                        <a href="#" class="col-thumb"><img :src= "cartGetters.getItemImage(product)"
                                alt="img-slider"></a>

                        <div class="checkout-col-desc">
                            <a href="#">
                                <h3>{{productGetters.getName(product)}}
                                </h3>
                            </a>
                            <div class="checkout-variant-color">
                                <span class="checkout-variant-title">سفید</span>
                                <div class="checkout-variant-shape"></div>
                                <!-- <div class="checkout-guarantee"><i class="fa fa-check"></i>گارانتی ۱۸ ماهه
                                    انفورماتیک گستر</div> -->
                                <div class="checkout-dealer"><i class="fa fa-check"></i>بروکس</div>
                            </div>

                            <div class="quantity">
                                <!-- <input type="number" min="1" max="10" step="1" value="1" > -->
                                
                            </div>
                            <!-- <SfCollectedProduct
                                    v-e2e="'collected-product'"
                                    :key="cartGetters.getItemSku(product)"
                                    :image="cartGetters.getItemImage(product)"
                                    :title="cartGetters.getItemName(product)"
                                    :regular-price="$n(cartGetters.getItemPrice(product).regular, 'currency')"
                                    :special-price="cartGetters.getItemPrice(product).special && $n(cartGetters.getItemPrice(product).special, 'currency')"
                                    :stock="99999"
                                    :link="localePath(`/p/${cartGetters.getItemVariantId(product)}/${cartGetters.getItemSlug(product)}`)"
                                    @click:remove="removeItem({ product: { id: product.id } })"
                                     class="collected-product"
                            >
                                <template #input>
                                <div class="sf-collected-product__quantity-wrapper">
                                    <SfQuantitySelector
                                    :disabled="loading"
                                    :qty="cartGetters.getItemQty(product)"
                                    :min="1"
                                    class="sf-collected-product__quantity-selector"
                                    @input="updateQuantity({ product: { id: product.id }, quantity: Number($event) })"
                                    />
                                </div>
                                </template>
                            </SfCollectedProduct> -->



                            <a href="#" class="add-to-sfl">
                                ذخیره در لیست خرید بعدی
                                <div class="cart-item-product-price">
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

            <div class="checkout-to-shipping-sticky">
                <a href="/checkout/shipping" class="selenium-next-step-shipping">ادامه فرآیند خرید</a>
                <div class="checkout-to-shipping-price-report">
                    <p>مبلغ قابل پرداخت</p>
                    <div class="cart-item-product-price">
                        {{$n(totals.subtotal)}}
                        <span>
                            ریال
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-xs-12 pull-left">
            <div class="page-aside">
                <div class="checkout-summary">
                    <ul class="checkout-summary-summary">
                        <li>
                            <span>مبلغ کل (۱ کالا)</span>
                            <span>۳,۴۲۰,۰۰۰ تومان</span>
                        </li>
                        <li>
                            <span>جمع</span>
                            <span>{{$n(totals.subtotal)}} ریال</span>
                        </li>
                        <li>
                            <span style="color: #424750; font-size:14px;">هزینه ارسال</span>
                            <span></span>
                        </li>
                        <li>
                            <span><i class="fa fa-truck"></i>ارسال عادی</span>
                            <span>رایگان</span>
                        </li>
                        <li>
                            <span>مبلغ قابل پرداخت</span>
                            <span>{{$n(totals.subtotal)}} ریال</span>
                        </li>
                        <li class="checkout-digiclub-container">
                            <span class="checkout-digiclub-row">
                                <img src="assets/images/digiclub.png" alt="digiclub">
                                <span class="checkout-digiclub-points">
                                    امتیاز دیجی‌کلاب
                                </span>
                            </span>
                            <span class="checkout-digiclub-row">150
                                <span class="checkout-bill-currency">
                                    امتیاز
                                </span>
                            </span>

                        </li>
                    </ul>
                </div>
                <div class="checkout-summary-content">
                    <p>کالاهای موجود در سبد شما ثبت و رزرو نشده‌اند، برای ثبت سفارش مراحل بعدی را تکمیل کنید.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="cart-tab-main" style="display:none;">
        <div class="col-lg-8 col-md-8 col-xs-12 pull-right">
            <div class="page-content-cart">
                <div class="container">
                    <div class="checkout-empty">
                        <div class="checkout-empty-icon">
                            <span class="mdi mdi-cart-remove"></span>
                        </div>
                        <div class="checkout-empty-title">لیست خرید بعدی شما خالی است!</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-xs-12 pull-left">
            <div class="page-aside">
                <div class="checkout-summary">
                    <h1>لیست خرید بعدی چیست؟</h1>
                    <p>
                        شما می‌توانید محصولاتی که به سبد خرید
                        خود افزوده اید و موقتا قصد خرید آن‌ها را ندارید، در لیست خرید بعدی خود قرار داده و
                        هر زمان مایل بودید آن‌ها را مجدداً به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
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
    debugger

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