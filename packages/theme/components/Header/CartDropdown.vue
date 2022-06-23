<template>
  <div class="mini-cart-dropdown">
    <div class="header-cart-info-header">
      <div class="header-cart-info-count">{{$n(totalItems)}} کالا</div>
      <a href="/cart" class="header-cart-info-link">
        <span>مشاهده سبد خرید</span>
      </a>
    </div>
    <div class="wrapper">
      <div class="scrollbar" id="style-1">
        <div>
          <ul class="header-basket-list">
            <li v-for="(product, i) in products"
                                :key="i"
                                :name="product.name"
                                :qty="cartGetters.getItemQty(product)"
                                :displayTotal="product.displayTotal"
                                :image="cartGetters.getItemImage(product)"
                                :regular-price="$n(cartGetters.getItemPrice(product).regular, 'currency')" 
            class="js-mini-cart-item" :href="localePath(`/p/${cartGetters.getItemVariantId(product)}/${cartGetters.getItemSlug(product)}`)">
              <a  class="header-basket-list-item" >
                <div class="header-basket-list-item-image"  >
                  <img
                    :src="cartGetters.getItemImage(product)"
                    
                    alt="img-slider"
                  />
                </div>
                <div class="header-basket-list-item-content" >
                  <h1 class="header-basket-list-item-title">
                    {{productGetters.getName(product)}}
                  </h1>
                  <span
                    class="header-basket-list-item-shipping-type" 
                    >موجود در انبار </span
                  >
                  <div class="header-basket-list-item-footer">
                    <div class="header-basket-list-item-props">
                      <span
                        class="header-basket-list-item-props-item"
                        >
                        {{$n(cartGetters.getItemQty(product))}} عدد</span
                      >
                      <!-- <span
                        class="header-basket-list-item-props-item"
                      >
                        <span
                          class="
                            header-basket-list-item-color-badge
                          "
                          style="background: #9e9e9e"
                        >
                        </span>
                        خاکستری
                      </span> -->
                      <span
                        class="header-basket-list-item-remove"
                       @click="removeItem({ product: { id: product.id } })">
                        <i class="mdi mdi-delete"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    <div class="header-cart-info-footer">
      <div class="header-cart-info-total">
        <span class="header-cart-info-total-text" 
          >مبلغ قابل پرداخت</span
        >
        <p class="header-cart-info-total-amount">
          <span class="header-cart-info-total-amount-number">
            {{$n(totals.subtotal)}}</span
          >
          <span> ریال</span>
        </p>
      </div>
      <div>
        <NuxtLink to="/checkout/shipping" class="header-cart-info-submit btn btn-primary">
          ثبت سفارش
        </NuxtLink>
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
import { onSSR } from '@vue-storefront/core';
import {wishlistGetters} from '@vue-storefront/spree';
export default {
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
    const { cart, removeItem, updateItemQty, loading, load } = useCart();
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

    onSSR(async () => {
      load()
    });
    
    // setTimeout(() => {
    //   isCartSidebarOpen.value = false
    // }, 1000)
    
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