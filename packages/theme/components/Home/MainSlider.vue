<template>
  <div class="d-block">
    <div class="col-lg-8 col-md-8 col-xs-12 pull-right mt-5">
      <div class="main-slider">
        <div class="main-slider-container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <!-- <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li> -->
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active" >
                <a :href="`/c/${content.link_one}`">
                  <img
                    class="d-block w-100"
                    :src="attrs.img_one_lg"
                    alt="Second slide"
                    
                  />
                </a>
              </div>
              <div class="carousel-item">
                <a :href="`/c/${content.link_two}`">
                  <img
                    class="d-block w-100"
                    :src="attrs.img_two_lg"
                    alt="First slide"
                  />
                </a>
              </div>
              <div class="carousel-item">
                <a :href="`/c/${content.link_three}`">
                  <img
                    class="d-block w-100"
                    :src="attrs.img_three_lg"
                    alt="Third slide"
                  />
                </a>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="fa fa-angle-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="fa fa-angle-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-xs-12 pull-left mt-5">
    <aside class="adplacement-container-column">
        <a :href="sidePhoto2.attributes.link" class="adplacement-item adplacement-item-column">
            <div class="adplacement-sponsored-box">
                <img :src="sidePhoto1.attributes.img_one_lg" alt="adplacement">
            </div>
        </a>
        <a :href="sidePhoto2.attributes.link" class="adplacement-item adplacement-item-column">
            <div class="adplacement-sponsored-box">
                <img :src="sidePhoto2.attributes.img_one_lg" height="100%" alt="adplacement">
            </div>
        </a>
    </aside>
    </div>
  </div>
</template>
<script>
/*
  {
    attributes: {
      content: {
        link_one: string
      },
      img_one_lg: string
      img_one_md: string
      img_one_sm: string
      img_one_xl: string
    }
  }
*/
export default {
  props: {
    gallery: {},
    sidePhotos: {}
  },
  computed: {
    attrs () {
      const gallery = this.gallery || {}
      return gallery.attributes || { content: {} }
    },
    content () {
      return this.attrs.content || {}
    },
    sidePhoto1 () {
      return this.sidePhotos.length ? this.sidePhotos[0] : {}
    },
    sidePhoto2 () {
      return this.sidePhotos.length ? this.sidePhotos[1] : {}
    }
  },
  methods: {
    getSidePhotoContent (section) {
      return section.attributes.content || {}
    }
  }
}
</script>
