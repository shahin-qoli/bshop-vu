<template>
<section
  class="section-slider amazing-section mb-3 mt-4"
  style="background: rgb(0, 148, 212)"
>
  <div class="container-amazing">
  <div class="container-main">
    <div>
      <div class="col-lg-3 display-md-none pull-right">
        <div class="amazing-product text-center mt-5">
          <a href="#">
            <img src="images/home/amazing.png" alt="amazing" />
          </a>
          <a href="/c/lights" class="view-all-amazing-btn">
            تخفیف ویژه
            <i class="uil uil-angle-left"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-9 col-md-12 pull-left">
        <div class="section-slider-content">
          <div class="section-slider-product slider-amazing mt-3">
            <div class="widget widget-product card" style="margin: 0">
              <header class="card-header card-header-amazing">
                <span class="title-one">پیشنهاد شگفت انگیز</span>
                <a class="card-title">مشاهده نشود</a>
              </header>
              <div
                class="
                  product-carousel
                  owl-carousel owl-theme owl-rtl owl-loaded owl-drag
                "
              >
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style="
                      transform: translate3d(0px, 0px, 0px);
                      transition: all 0s ease 0s;
                      width: 2234px;
                    "
                  >
                    <div
                      v-for="product in products"
                      :key="productGetters.getId(product)"
                      class="owl-item active"
                      style="width: 309.083px; margin-left: 10px"
                    >   
                      <div class="item">
                        <a :href="localePath(getProductLink(product))">
                        <img
                          :src="productGetters.getCoverImage(product)"
                          class="img-fluid"
                          alt="img-slider"
                        />
                        </a>

                        <h2 class="post-title">
                          <a :href="localePath(getProductLink(product))">
                            {{product.name}}                                
                          </a>
                        </h2>
                        <div class="price">
                          <a :href="localePath(getProductLink(product))">
                          <div class="discount-item">
                            <span>{{Math.floor((1-(product.price.current/product.price.original))*100)}}%</span>
                          </div>
                          <del
                            ><span>{{$n((product.price.original))}}<span>ریال</span></span></del
                          >
                          <ins
                            ><span>{{$n(product.price.current)}}<span>ریال</span></span></ins
                          >                              
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

  
</template>
<script>
import { useFacet, facetGetters, productGetters } from '@vue-storefront/spree';
import { computed } from '@nuxtjs/composition-api';
import { onSSR } from '@vue-storefront/core';


export default {
  props: {
    title: {
      type: String,
      required: true
    },
    slug: { 
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  setup(props) {
    const { result, search } = useFacet(props.slug);
    const products = computed(() => { return facetGetters.getProducts(result.value) })
    const getProductLink = (product) => {
      return `/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`
    }
    
    onSSR(async () => {
      await search({
        categorySlug: props.slug,
        page: 1,
        itemsPerPage: 10,
        selectedOptionTypeFilters: [],
        selectedProductPropertyFilters: [],
        priceFilter: [],
        sort: 'updated_at',
        term: ''
      })
    })
    return {
      result,
      products,
      productGetters,
      getProductLink
    }
  },
}
</script>
