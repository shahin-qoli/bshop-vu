<template>
  <div id="product">
    <div class="col-12">
      <div class="product-page">
        <article class="js-product">
          <div class="product-nav-container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb px-0">
                <SfBreadcrumbs
                class="breadcrumb-item"
                :breadcrumbs="breadcrumbs"
                />
              </ol>
            </nav>
            <!-- <div class="product-ext-links">
              <a href="#" class="product-ext-link"
                >کالای خود را در دیجی‌استور بفروشید
                <i class="mdi mdi-storefront"></i
              ></a>
            </div> -->
          </div>
          <div class="col-lg-4 col-md-12 col-xs-12 pull-right">
            <Product-Gallery :images="productGallery"/>
          </div>

          <!-- Modal social-->
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">
                    اشتراک گذاری در شبکه های اجتماعی
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="form-share-row">
                  <div class="form-share-col">
                    <ul class="btn-group-share">
                      <li>
                        <a href="#" class="btn-share btn-share-twitter">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="btn-share btn-share-facebook">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="btn-share btn-share-whatsapp">
                          <i class="fa fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-share-title">ارسال به ایمیل</div>
                <form for="#" class="send-to-email">
                  <div class="form-share-row">
                    <div class="form-share-col">
                      <input
                        name="email"
                        class="input-send-to-email"
                        type="email"
                        placeholder="آدرس ایمیل را وارد نمایید."
                      />
                    </div>
                  </div>
                  <div class="form-share-row">
                    <div class="form-share-col">
                      <div class="btn-send-email">ارسال</div>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
          <!-- Modal social-->
          <!-- Modal alarm -->
          <div
            class="modal fade"
            id="exampleModalCenteralarm"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">
                    به من اطلاع بده
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form action="#" class="form-notification">
                    <div class="form-notification-title">
                      اطلاع به من در زمان:
                    </div>
                    <div class="form-notification-row">
                      <div class="form-notification-col">
                        <div class="form-notification-status">
                          پیشنهاد شگفت‌انگیز
                        </div>
                      </div>
                    </div>
                    <div class="form-notification-title">از طریق:</div>
                    <div class="form-notification-row">
                      <div class="form-notification-col">
                        <ul class="form-notification-params">
                          <li>
                            <div class="form-auth-row">
                              <label class="ui-checkbox">
                                <input
                                  type="checkbox"
                                  value="1"
                                  name="login"
                                  id="remember1"
                                />
                                <span class="ui-checkbox-check"></span>
                              </label>
                              <label for="remember1" class="remember-me"
                                >ایمیل به
                                <span class="js-observed-user-email"
                                  >09911234567</span
                                >
                              </label>
                            </div>
                          </li>
                          <li>
                            <div class="form-auth-row">
                              <label class="ui-checkbox">
                                <input
                                  type="checkbox"
                                  value="1"
                                  name="login"
                                  id="remember2"
                                />
                                <span class="ui-checkbox-check"></span>
                              </label>
                              <label for="remember2" class="remember-me"
                                >پیامک به
                                <span class="js-observed-user-email"
                                  >09911234567</span
                                >
                              </label>
                            </div>
                          </li>
                          <li>
                            <div class="form-auth-row">
                              <label class="ui-checkbox">
                                <input
                                  type="checkbox"
                                  value="1"
                                  name="login"
                                  id="remember3"
                                />
                                <span class="ui-checkbox-check"></span>
                              </label>
                              
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer d-block text-right">
                  <button type="button" class="btn btn-primary ml-2">
                    ثبت
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    بازگشت
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal alarm -->
          <div class="col-lg-8 col-md-12 col-xs-12 pull-left px-0">
            <section class="product-info">
              <div class="product-headline">
                <div class="product-title-container">
                  <div class="product-directory">
                    <ul class="mb-0">
                      <li v-for="(breadcrumb, i) in breadcrumbs"
                                :key="i"
                                :text="breadcrumb.text"
                                :link="breadcrumb.link"      
                    >
                        <a href='#' class="link-border">{{breadcrumb.text}}
                        <span>/</span>
                        </a>
                      
                      </li>
                      <!-- <li>
                        <a href="#" class="link-border">گوشی موبایل شیائومی</a>
                      </li> -->
                      
                    </ul>
                    <h1 class="product-title">
                      {{ productGetters.getName(product) }}
                    </h1>
                  </div>
                </div>
              </div>
              <div class="product-attributes">
                <div class="col-lg-8 col-md-8 col-xs-12 pull-right pr-0">
                  <div class="product-config">
                 
                    <div class="product-config-wrapper">
                      <div v-for="(optionTypeValue, i) in optionTypeValues"
                                :key="i"
                                :name="optionTypeValue.name"
                                :presentation="optionTypeValue.presentation"
                                class="product-variants">
                        <span>{{optionTypeValue.presentation}}: </span>
                        <Color-Select
                          v-if="optionTypeValue.name == 'color'"
                          :value="configuration[optionTypeValue.name]"
                          @input="updateFilter({ [optionTypeValue.id]: $event })"
                          :options="options[optionTypeValue.name]"
                        />
                        <Text-Select
                          v-else
                          :value="configuration[optionTypeValue.name]"
                          @input="updateFilter({ [optionTypeValue.id]: $event })"
                          :options="options[optionTypeValue.name]"
                        />
                      </div>
                      <div class="product-params">
                        <ul>
                          <li class="title-product-features">
                            ویژگی‌های محصول
                          </li>
                          <li v-for="(property, i) in properties"
                                :key="i"
                                :name="property.name"
                                :value="property.value"
                                class="sf-property--full-width product__property">

                            <span>{{property.name}}: </span>
                            <span>{{property.value}}</span>
                          </li>
                          
                        </ul>
        
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-4 col-xs-12 pull-left sticky-sidebar"
                  style="padding: 0"
                >
                  <div class="product-seller-info">
                    <div class="js-seller-info-changable">
                      <div class="product-seller-row">
                        <div class="product-seller-first-line d-inline-block">
                          فروشنده:
                        </div>
                        <a href="#" class="js-seller-count-row">
                          <span class="js-seller-count u-text-bold">بروکس</span>
                        </a>
                      </div>
                      <div
                        class="product-seller-row product-seller-row-guarantee"
                      >
                        <div class="js-guarantee-text">
                          گارانتی شرکتی بروکس
                          <i class="mdi mdi-check"></i>
                        </div>
                      </div>
                      <div class="product-seller-row js-seller-info-shipment">
                        <div class="js-guarantee-text">
                          موجود در انبار فروشنده
                          <i class="mdi mdi-content-save-outline"></i>
                        </div>
                        <div class="product-delivery-warehouse">
                          ارسال سریع از انبار بروکس
                        </div>
                      </div>
                      
                      <div class="product-seller-row">
                        <div class="product-seller-row-price">
                          <div class="product-seller-price-label">
                            قیمت فروشنده
                          </div>
                          <div class="product-seller-price-real">
                            <div class="product-seller-price-prev">
                              {{ $n(productGetters.getPrice(product).regular) }}
                            </div>
                            ریال
                          </div>
                        </div>
                        <div class="product-remaining-in-stock-parent">
                        </div>
                          <button  @click="addToCart" class="btn-add-to-cart">
                            <span  class="btn-add-to-cart-txt">
                              افزودن به سبد خرید
                            </span>
                          
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              
            </section>
            
          </div>
          <div class="product-feature-body">
            <div>
                <img
                src="../static/images/home/BrxContent.svg"
                alt="contact-us"
                style="align:center;width: 100%;" />
            </div>
          </div>   
        </article>
        <Product-Slider title="محصولات مرتبط" slug="lights/bulb" class="p-0" />
        <Product-Slider title="خانواده پرژکتور" slug="lights/projector" class="p-0" />
        <div class="p-tabs">
          <div class="col-lg-9 col-md-12 col-xs-12 pull-right p-0 res-w">
            <div class="box-tabs-main">
              <ul class="box-tabs">
                <li class="box-tabs-tab active-tabs">
                  <a href="#"> درباره محصول</a>
                </li>
                <li class="box-tabs-tab">
                  <a href="#"> مشخصات</a>
                </li>
                
              </ul>
            </div>
            <div class="tabs-content">
              <div class="tab-active-content">
                <div class="tab content-expert" style="display: block">
                  <article>
                    <h2 class="params-headline">
                      
                      <span><p>{{ productGetters.getName(product) }}</p></span
                      >
                    </h2>
                    <section class="content-expert-summary">
                      <div class="is-masked">
                        <div class="mask-text-product-summary active">
                          <p v-html="productGetters.getDescription(product)" ></p>
                        </div>
                         <!--<a  href="#" class="mask-handler">
                          <span class="show-more">ادامه مطلب</span>
                          <span class="show-less">بستن</span>
                        </a> -->
                        <div class="shadow-box" style="display: none;"></div>
                      </div>
                    </section>
                  </article>
                </div>
                <div class="tab params" style="display: none">
                  <article>
                    <h2 class="params-headline">
                      مشخصات فنی
                      <span
                        >{{ productGetters.getName(product) }}</span
                      >
                    </h2>
                    <section>
                      <h3 class="params-title">مشخصات کلی</h3>
                      <ul class="params-list">
                        <li  v-for="(property, i) in properties"
                                :key="i"
                                :name="property.name"
                                :value="property.value"
                                class="sf-property--full-width product__property">
                          
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">{{property.name}}</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block"
                                >{{property.value}}</span
                              >
                            </div>
                          </div>
                         </li>
                      </ul>
                    </section>
                  </article>
                </div>
              </div>
              <div class="footer-product-id">
                <span>شناسه کالا :</span>
                <span>DKP - ۱۶۷۲۴۷۸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductSlider from '~/components/ProductSlider.vue'
import ProductGallery from '~/components/Product/ProductGallery.vue'
import ColorSelect from '~/components/Product/ColorSelect.vue'
import TextSelect from '~/components/Product/TextSelect.vue'
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfRating,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfIcon,
  SfImage,
  SfBanner,
  SfAlert,
  SfSticky,
  SfBreadcrumbs,
  SfButton,
  SfColor,
} from '@storefront-ui/vue';

import InstagramFeed from '~/components/InstagramFeed.vue';
import RelatedProducts from '~/components/RelatedProducts.vue';
import {
  ref,
  computed,
  useRoute,
  useRouter,
  useContext,
} from '@nuxtjs/composition-api';
import { useProduct, useCart, productGetters, cartGetters } from '@vue-storefront/spree';

import { onSSR } from '@vue-storefront/core';

import LazyHydrate from 'vue-lazy-hydration';
import cacheControl from './../helpers/cacheControl';

export default {
  name: 'Product',
  transition: 'fade',
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5,
  }),
  setup() {
    
    let isClicked = ref(false);
    const qty = ref(1);
    const route = useRoute();
    const router = useRouter();
    const context = useContext();
    const { products, search } = useProduct('products');
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading,
    } = useProduct('relatedProducts');
    const { addItem, loading, cart } = useCart();
    const { slug } = route.value.params;

    const product = computed(() =>
        productGetters.getFiltered(products.value, {
          master: true,
          attributes: route.value.query,
        })[0]
    );
    const optionTypes = computed(() => 
        productGetters.getOptionTypeNames(product.value)
      );
    const optionTypeValues = computed(() => {
      if (product.value) {
        return product.value.optionTypes
      }
      else {
        return []
      }
    });
    const options = computed(() =>
      productGetters.getAttributes(products.value, optionTypes.value)
    );
    const configuration = computed(() =>
      productGetters.getAttributes(product.value, optionTypes.value)
    );
    const categories = computed(() =>
      productGetters.getCategoryIds(product.value)
    );
    const properties = computed(() =>
      productGetters.getProperties(product.value)
    );
    const Description = computed (() =>
      productGetters.getDescription(product)
    );

    const cartproducts = computed(() => cartGetters.getItems(cart.value));
    const totals = computed(() => cartGetters.getTotals(cart.value));
    const totalItems = computed(() => cartGetters.getTotalItems(cart.value));

    const breadcrumbs = computed(() =>
      productGetters
        .getBreadcrumbs(product.value)
        .map((e) => ({ ...e, link: context.localePath(e.link) }))
    );
    const addToCart = async () => {
      await addItem({ product: product.value, quantity: 1 })
      isClicked.value=true
      window.alert("کالای مورد نظر به سبد خرید اضافه شد")
    }
    const isInStock = computed(() => productGetters.getInStock(product.value));
    const productGallery = computed(() =>
      productGetters.getGallery(product.value)
    );

    //debugger
    

    onSSR(async () => {
      await search({ slug });
      await searchRelatedProducts({
        categoryId: [categories.value[0]],
        limit: 8,
      });
    });

    const updateFilter = (filter) => {
      const keys = Object.keys(filter)
      const conf = {}
      if (keys.length) {
        const key = keys[0]
        const p = products.value.find((p) => {
          return p.optionValues
            .some(ov => ov.optionTypeId == key &&
              ov.presentation == filter[key]
            )
        })
        if (p) {
          for (var ov of p.optionValues) {
            const otv = optionTypeValues.value.find(ot => ot.id == ov.optionTypeId)
            if (otv) {
              conf[otv.name] = ov.presentation
            }
          }
        }
        else {
          alert('محصولی با این مشخصات موجود نیست')
          return
        }
      }
      router.push({
        path: route.value.path,
        query: {
          ...conf,
          // ...filter,
        },
      });
    };
    


    return {
      updateFilter,
      addToCart,
      isClicked,
      configuration,
      product,
      isInStock,
      relatedProducts: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      relatedLoading,
      options,
      qty,
      addItem,
      loading,
      productGetters,
      optionTypeValues,
      productGallery,
      productGetters,
      optionTypes,
      properties,
      Description,
      breadcrumbs,
      cartproducts,
      totals,
      products,
      totalItems
    };
  },
  components: {
    ProductSlider,
    ProductGallery,
    ColorSelect,
    TextSelect,
    SfAlert,
    SfColor,
    SfProperty,
    SfHeading,
    SfPrice,
    SfRating,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfImage,
    SfBanner,
    SfSticky,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    LazyHydrate,
  },
  data() {
    return {
      description:
        'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
      detailsIsActive: false,
      brand:
        'Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.',
      careInstructions: 'Do not wash!',
    };
  },
};
</script>

<style lang="scss" scoped>
#product {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
  &__info {
    width: 100%;
    margin: var(--spacer-sm) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--secondary)
    );
    padding: 0;
    margin: 0;
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-sm);
  }
  &__color-label {
    margin: 0 var(--spacer-sm) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__add-to-cart {
    margin: var(--spacer-2xl) 0 var(--spacer-sm);
  }
  &__guide {
    display: block;
    margin: 0 0 var(--spacer-sm) auto;
  }
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    --tabs-title-z-index: 0;
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
  }
  &__property {
    margin: var(--spacer-sm) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  &__gallery {
    flex: 1;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
