<template>
  <div class="product-gallery">
    <img
      class="zoom-img"
      id="img-product-zoom"
      :src="images[0].desktop.url"
      :data-zoom-image="images[0].big.url"
      width="350"
      alt="img-slider"
    />
    <div id="gallery_01f" style="width: 420px; float: right">
      <ul
        class="gallery-items owl-carousel owl-theme"
        id="gallery-slider"
      >
        <li v-for="image in images" 
        :key="image.desktop.url"
        :value="image"
        class="item"
        >
          <a
            href="#"
            class="elevatezoom-gallery active"
            data-update=""
            :data-image="image.desktop.url"
            :data-zoom-image="image.big.url"
          >
            <img
              :src="image.mobile.url" 
              width="100"
              alt="img-slider"
          /></a>
        </li>
      </ul> 
    </div>
    <div class="gallery-item">
      
      <!-- Gallary Options://add to wishlist - Share-inform to some body-Compair products -->

      <!-- <ul class="gallery-options">
        <li class="option-wishes">
          <button class="btn-option btn-option-wishes">
            <i class="mdi mdi-heart-outline"></i>
            <span class="tooltip-short">افزودن به علاقه‌مندی</span>
          </button>
        </li>
        <li class="option-social">
          <button
            class="btn-option btn-option-social"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <i class="mdi mdi-share-outline"></i>
            <span class="tooltip-short">اشتراک گذاری</span>
          </button>
        </li>
        <li class="option-alarm">
          <button
            class="btn-option btn-option-alarm"
            data-toggle="modal"
            data-target="#exampleModalCenteralarm"
          >
            <i class="mdi mdi-bell-outline"></i>
            <span class="tooltip-short">اطلاع‌رسانی</span>
          </button>
        </li>
        <li class="option-alarm">
          <a
            href="product-comparison.html"
            class="btn-option btn-option-comparison"
          >
            <i class="mdi mdi-compare"></i>
            <span class="tooltip-short">مقایسه</span>
          </a>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>

export default {
  props: {
    images: {
      images: String,
      required: true
    }
  },
  data () {
    return {}
  },

}
</script>