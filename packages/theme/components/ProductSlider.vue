<template>
  <div class="col-lg-12 col-md-12 col-xs-12 pull-right">
    <div class="row">
      <div class="col-12">
        <div class="widget widget-product card">
          <header class="card-header">
            <a :href="showcat">
            <span class="title-one">{{ title }}</span>
            </a>
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
                  class="owl-item"
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
                        {{ product.name }}
                      </a>
                    </h2>
                    <div class="price">
                      <ins
                        ><span>{{ $n(product.price.current) }}<span>ریال</span></span></ins
                      >
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
    const showcat="c/"+props.slug
    
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
      getProductLink,
      showcat
    }
  },
}
</script>
