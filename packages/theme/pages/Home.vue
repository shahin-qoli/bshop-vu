<template>
  <div>
    <Main-Slider
      :gallery="homePage.gallery"
      :sidePhotos="homePage.sidePhotos"
    />
    <show-taxons title="حبابی" slug1="lights/bulb" slug2="lights/panel" slug3="lights/candle" slug4="lights/panel " />
    
    <Product-Slider
      :section="homePage.carousel1"
      class="mt-4"
    />
    <amazing-section
      :section="homePage.amazingOfferCarousel"
      class="mt-4"
    />
    <Product-Slider
      v-for="section in homePage.otherCarousels"
      :key="section.id"
      :section="section"
      class="mt-4"
    />

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
import { computed } from '@nuxtjs/composition-api'
import { useContent } from '@vue-storefront/spree';
import { onSSR } from '@vue-storefront/core';

export default {
  head(prop){      
    return{
      title : 'صفحه اصلی'
    }
  },
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
    const { search, content } = useContent()
    const homePage = computed(() => {
      if (content.value && content.value.length) {
        const home = content.value.find(c => c.attributes.type == 'Spree::Cms::Pages::Homepage')
        const gallery = home.sections.find(s => s.attributes.type == 'Spree::Cms::Sections::ImageGallery')
        const heroImages = home.sections.filter(s => s.attributes.type == 'Spree::Cms::Sections::HeroImage')
        const sidePhotos = heroImages.filter(hi => hi.attributes.name == 'side-photo-item')
        const productCarousels = home.sections.filter(s => s.attributes.type == 'Spree::Cms::Sections::ProductCarousel')
        const carousel1 = productCarousels.find(pc => pc.attributes.name == 'carousel1')
        const amazingOfferCarousel = productCarousels.find(pc => pc.attributes.name == 'amazingOffer')
        const otherCarousels = productCarousels.filter(pc => pc.attributes.name == 'other-carousels')
        return {
          ...home,
          gallery,
          sidePhotos,
          productCarousels,
          carousel1,
          otherCarousels,
          amazingOfferCarousel,
          heroImages
        }
      }
      else {
        return {}
      }
    })
    onSSR(async () => {
      await search()
    })
    return {
      content,
      homePage
    }
  },
}
</script>