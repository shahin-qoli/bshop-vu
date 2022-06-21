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
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active" >
                <img
                  class="d-block w-100"
                  src="/images/home/Tile_Shop.jpg"
                  alt="Second slide"
                  
                />
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
        <a href="#" class="adplacement-item adplacement-item-column">
            <div class="adplacement-sponsored-box">
                <img src="/images/home/burux-1.jpg" alt="adplacement">
            </div>
        </a>
        <a href="#" class="adplacement-item adplacement-item-column">
            <div class="adplacement-sponsored-box">
                <img height="100%" src="images/home/burux-1.jpg" alt="adplacement">
            </div>
        </a>
    </aside>
    </div>
  </div>
</template>
