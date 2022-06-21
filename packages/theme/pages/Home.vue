<template>
  <div>
    <Main-Slider />
   
    <!-- show taxons --------------------------------->
    <show-taxons title="حبابی" slug1="lights/bulb" slug2="lights/panel" slug3="lights/candle" slug4="lights/panel " />
    <!-- show taxons --------------------------------->


    <!--slider-amazing----------------------------->
    
    <amazing-section title="تخفیف های ویژه" slug="specialdisc/summerdisc" class="mt-4" />
    <!--slider-amazing----------------------------->
    
    <!--adplacement--------------------------------> 

    <Product-Slider title="پرفروش ترین ها" slug="bestsellers" class="mt-4" />

    <Product-Slider title="محبوب ترین ها" slug="popular" class="mt-4" />
   

    
   
   
    <!--        category--------------------------->

    <!--   slider-product-------------------->
    <Product-Slider title="پنل" slug="lights/panel" class="mt-4" />

   
    <!--   adplacement -------------------->

    <Product-Slider title="حبابی" slug="lights/bulb" class="mt-4" />
 
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
import ProductSlider from '~/components/ProductSlider.vue'
import MainSlider from '~/components/Home/MainSlider.vue'
import AmazingSection from '../components/AmazingSection.vue';
import ShowTaxons from '~/components/Home/showTaxons.vue';
import campaign from '~/components/Home/campaign.vue';
export default {
  components: {
    AppHeader,
    AppFooter,
    ProductSlider,
    MainSlider,
    AmazingSection,
    ShowTaxons,
    campaign

  },
  setup() {
    
  },
}
</script>