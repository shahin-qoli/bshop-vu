<template>
<div class="adplacement">
    <div class="col-6 col-lg-3 pull-right" style="padding-left: 0">
    
    <a :href="showSlug1" class="item-adplacement">
        <img
        src="images/home/bulbs.svg"
        title="لامپ های حبابی"
        alt="adplacement"
        />
    </a>
    </div>

    <div class="col-6 col-lg-3 pull-right">

    <a :href="showSlug2" class="item-adplacement" >
        <img
        src="images/home/panel.svg"
        title="پنل های سقفی"
        alt="adplacement"
        />
    </a>
    </div>

    <div class="col-6 col-lg-3 pull-right" style="padding-left: 0">

    <a :href="showSlug3" class="item-adplacement">
        <img
        src="images/home/candle.svg"
        title="لامپ های شمعی"
        alt="adplacement"
        />
    </a>
    </div>

    <div class="col-6 col-lg-3 pull-right">

    <a :href="showSlug4" class="item-adplacement">
        <img
        src="images/home/abzar.svg"
        title="ابزار ها"
        alt="adplacement"
        />
    </a>
    </div>

    <div class="product-feature-body">
    <div class="product-feature">
        <div class="row">
        <div class="product-feature-col">
            <a href="#" class="product-feature-item">
            <img
                src="images/home/SavePayment.svg"
                alt="delivery"
            />
            <span
                >خرید و پرداخت
                <br />
                مطمئن
            </span>
            </a>
        </div>

        <div class="product-feature-col">
            <a href="#" class="product-feature-item">
            <img
                src="images/home/ProductWarrantee.svg"
                alt="contact-us"
                style="width: 35px"
            />
            <span
                >ضمانت تعویض
                <br />
                محصولات
            </span>
            </a>
        </div>

        <div class="product-feature-col">
            <a href="#" class="product-feature-item">
            <img
                src="images/home/FastSending.svg"
                alt="payment-terms"
                style="width: 35px"
            />
            <span
                >ارسال سریع
                <br />
                و رایگان
            </span>
            </a>
        </div>

        <div class="product-feature-col">
            <a href="#" class="product-feature-item">
            <img
                src="images/home/SupportAvailable.svg"
                alt="origin-guarantee"
                style="width: 35px"
            />
            <span
                >پشتیبانی 
                <br />
                در دسترس
            </span>
            </a>
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
    slug1: { 
      type: String,
      required: true
    },
    slug2: { 
      type: String,
      required: true
    },
    slug3: { 
      type: String,
      required: true
    },
    slug4: { 
      type: String,
      required: true
    }
    
  },
  data () {
    return {}
  },
  setup(props) {
    const { result, search } = useFacet(props.slug1);
    const products = computed(() => { return facetGetters.getProducts(result.value) })
    const getProductLink = (product) => {
      return `/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`
    }
    const showSlug1="c/"+props.slug1
    const showSlug2="c/"+props.slug2
    const showSlug3="c/"+props.slug3
    const showSlug4="c/"+props.slug4
    onSSR(async () => {
      await search({
        categorySlug: props.slug1,
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
      showSlug1,
      showSlug2,
      showSlug3,
      showSlug4,
    }
  },
}
</script>
