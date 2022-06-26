<template>
<div class="home-category-items">
  
  
    <a :href="showSlug1" class="home-category-item">
    <div class="home-category-item-image">
    <img 
        src="images/home/BulbsTaxon.png"
        title="لامپ های حبابی"
        alt="BulbTaxons"
        width="100%"
        />
    </div>
        <span>لامپ های حبابی</span>
    </a>



    <a :href="showSlug2" class="home-category-item" >
    <div class="home-category-item-image">
    <img
        src="images/home/CeilingPanelTaxon.png"
        title="پنل های سقفی"
        alt="CeilingPanel"
        width="100%"
        />
    </div>
        <span>پنل های سقفی</span>
    </a>




    <a :href="showSlug3" class="home-category-item">
    <div class="home-category-item-image">
      <img
        src="images/home/CandleTaxon.png"
        title="لامپ های شمعی"
        alt="CandleTaxon"
        width="100%"
        />
    </div>
        <span>لامپ های شمعی</span>
    </a>




    <a :href="showSlug4" class="home-category-item">
    <div class="home-category-item-image">
      <img
        src="images/home/ToolsTaxon.png"
        title="ابزار ها"
        alt="ToolsTaxon"
        width="100%"
        />
    </div>
        <span>ابزارها</span>
    </a>


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
<style lang="css">
.home-category-items{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    top: 30px;
}
.home-category-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 160px;
    min-height: 160px;

}
.home-category-item span{
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    font-size: 15px;
}
.home-category-item-image{
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.home-category-item-image img{
  width: 180px;
    height: 180px;
}
</style>
