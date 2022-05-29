<template>
  <div class="product-gallery">
    <img
      class="zoom-img"
      id="img-product-zoom"
      src="/images/product-slider-2/114393183.jpg"
      data-zoom-image="/images/product-slider-2/114393183.jpg"
      width="411"
      alt="img-slider"
    />
    <div id="gallery_01f" style="width: 420px; float: right">
      <ul
        class="gallery-items owl-carousel owl-theme"
        id="gallery-slider"
      >
        <li class="item">
          <a
            href="#"
            class="elevatezoom-gallery active"
            data-update=""
            data-image="/images/product-slider-2/114393183.jpg"
            data-zoom-image="/images/product-slider-2/114393183.jpg"
          >
            <img
              src="/images/product-slider-2/111460798.jpg"
              width="100"
              alt="img-slider"
          /></a>
        </li>
        <li class="item">
          <a
            href="#"
            class="elevatezoom-gallery active"
            data-update=""
            data-image="/images/product-slider-2/113345411(1).jpg"
            data-zoom-image="/images/product-slider-2/113345411(1).jpg"
          >
            <img
              src="/images/product-slider-2/113345411.jpg"
              width="100"
              alt="img-slider"
          /></a>
        </li>
        <li class="item">
          <a
            href="#"
            class="elevatezoom-gallery"
            data-image="/images/product-slider-2/113345412(1).jpg"
            data-zoom-image="/images/product-slider-2/113345412(1).jpg"
          >
            <img
              src="/images/product-slider-2/113345412.jpg"
              width="100"
              alt="img-slider"
            />
          </a>
        </li>
        <li class="item">
          <a
            href="#"
            class="elevatezoom-gallery"
            data-image="/images/product-slider-2/111460791(1).jpg"
            data-zoom-image="/images/product-slider-2/111460791(1).jpg"
          >
            <img
              src="/images/product-slider-2/111460791.jpg"
              width="100"
              alt="img-slider"
          /></a>
        </li>
        <li class="item">
          <a
            href="#"
            class="elevatezoom-gallery"
            data-image="/images/product-slider-2/111460801(1).jpg"
            data-zoom-image="/images/product-slider-2/111460801(1).jpg"
          >
            <img
              src="/images/product-slider-2/111460800.jpg"
              width="100"
              alt="img-slider"
            />
          </a>
        </li>
      </ul>
    </div>
    <div class="gallery-item">
      <ul class="gallery-options">
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
      </ul>
    </div>
  </div>
</template>