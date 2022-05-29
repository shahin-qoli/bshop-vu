<template>
  <div id="product">
    <div class="col-12">
      <div class="product-page">
        <article class="js-product">
          <div class="product-nav-container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb px-0">
                <li class="breadcrumb-item">
                  <a href="#">فروشگاه اینترنتی دیجی استور</a>
                </li>
                <li class="breadcrumb-item"><a href="#">کالای دیجیتال</a></li>
                <li class="breadcrumb-item"><a href="#">موبایل</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  گوشی موبایل
                </li>
              </ol>
            </nav>
            <div class="product-ext-links">
              <a href="#" class="product-ext-link"
                >کالای خود را در دیجی‌استور بفروشید
                <i class="mdi mdi-storefront"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-xs-12 pull-right">
            <Product-Gallery />
          </div>

          <!-- Modal social-->
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">
                    اشتراک گذاری در شبکه های اجتماعی
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="form-share-row">
                  <div class="form-share-col">
                    <ul class="btn-group-share">
                      <li>
                        <a href="#" class="btn-share btn-share-twitter">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="btn-share btn-share-facebook">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="btn-share btn-share-whatsapp">
                          <i class="fa fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-share-title">ارسال به ایمیل</div>
                <form for="#" class="send-to-email">
                  <div class="form-share-row">
                    <div class="form-share-col">
                      <input
                        name="email"
                        class="input-send-to-email"
                        type="email"
                        placeholder="آدرس ایمیل را وارد نمایید."
                      />
                    </div>
                  </div>
                  <div class="form-share-row">
                    <div class="form-share-col">
                      <div class="btn-send-email">ارسال</div>
                    </div>
                  </div>
                </form>
                <div class="form-share-row">
                  <div class="form-share-col">
                    <input
                      class="ui-url-field"
                      type="url"
                      value="https://www.digikala.com/product/dkp-1672478"
                      readonly=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal social-->
          <!-- Modal alarm -->
          <div
            class="modal fade"
            id="exampleModalCenteralarm"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">
                    به من اطلاع بده
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form action="#" class="form-notification">
                    <div class="form-notification-title">
                      اطلاع به من در زمان:
                    </div>
                    <div class="form-notification-row">
                      <div class="form-notification-col">
                        <div class="form-notification-status">
                          پیشنهاد شگفت‌انگیز
                        </div>
                      </div>
                    </div>
                    <div class="form-notification-title">از طریق:</div>
                    <div class="form-notification-row">
                      <div class="form-notification-col">
                        <ul class="form-notification-params">
                          <li>
                            <div class="form-auth-row">
                              <label class="ui-checkbox">
                                <input
                                  type="checkbox"
                                  value="1"
                                  name="login"
                                  id="remember1"
                                />
                                <span class="ui-checkbox-check"></span>
                              </label>
                              <label for="remember1" class="remember-me"
                                >ایمیل به
                                <span class="js-observed-user-email"
                                  >09911234567</span
                                >
                              </label>
                            </div>
                          </li>
                          <li>
                            <div class="form-auth-row">
                              <label class="ui-checkbox">
                                <input
                                  type="checkbox"
                                  value="1"
                                  name="login"
                                  id="remember2"
                                />
                                <span class="ui-checkbox-check"></span>
                              </label>
                              <label for="remember2" class="remember-me"
                                >پیامک به
                                <span class="js-observed-user-email"
                                  >09911234567</span
                                >
                              </label>
                            </div>
                          </li>
                          <li>
                            <div class="form-auth-row">
                              <label class="ui-checkbox">
                                <input
                                  type="checkbox"
                                  value="1"
                                  name="login"
                                  id="remember3"
                                />
                                <span class="ui-checkbox-check"></span>
                              </label>
                              <label for="remember3" class="remember-me"
                                >سیستم پیام شخصی دیجی‌کالا
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer d-block text-right">
                  <button type="button" class="btn btn-primary ml-2">
                    ثبت
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    بازگشت
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal alarm -->
          <div class="col-lg-8 col-md-12 col-xs-12 pull-left px-0">
            <section class="product-info">
              <div class="product-headline">
                <div class="product-title-container">
                  <div class="product-directory">
                    <ul class="mb-0">
                      <li>
                        <a href="#" class="link-border">شیائومی</a>
                      </li>
                      <li>
                        <span>/</span>
                      </li>
                      <li>
                        <a href="#" class="link-border">گوشی موبایل شیائومی</a>
                      </li>
                    </ul>
                    <h1 class="product-title">
                      {{ productGetters.getName(product) }}
                    </h1>
                  </div>
                </div>
              </div>
              <div class="product-attributes">
                <div class="col-lg-8 col-md-8 col-xs-12 pull-right pr-0">
                  <div class="product-config">
                    <div class="product-engagement">
                      <div class="product-engagement-item">
                        <div class="product-engagement-rating">
                          ۳.۷
                          <span class="product-engagement-rating-num">
                            (۳)
                          </span>
                        </div>
                      </div>
                      <div class="product-engagement-item">
                        <div class="product-engagement-set"></div>
                        <div
                          class="product-engagement-link"
                          data-activate-tab="comments"
                        >
                          ۸۱ دیدگاه کاربران
                        </div>
                      </div>
                      <div class="product-engagement-item">
                        <div class="product-engagement-set"></div>
                        <div
                          class="product-engagement-link"
                          data-activate-tab="questions"
                        >
                          ۱۴ پرسش و پاسخ
                        </div>
                      </div>
                    </div>
                    <div class="product-config-wrapper">
                      <div class="product-variants">
                        <span>انتخاب رنگ: </span>
                        <ul>
                          <li class="js-c-ui-variant">
                            <label class="ui-variant-color">
                              <span
                                class="ui-variant-shape"
                                style="background-color: #2196f3"
                              ></span>
                              <input
                                type="radio"
                                value="4"
                                name="color"
                                id="variant"
                                class="js-variant-selector"
                                checked=""
                              />
                              <span class="ui-variant-check"></span>
                            </label>
                          </li>
                          <li class="js-c-ui-variant">
                            <label class="ui-variant-color">
                              <span
                                class="ui-variant-shape"
                                style="background-color: #fff"
                              ></span>
                              <input
                                type="radio"
                                value="4"
                                name="color"
                                id="variant"
                                class="js-variant-selector"
                              />
                              <span
                                class="ui-variant-check ui-variant-check-white"
                              ></span>
                            </label>
                          </li>
                          <li class="js-c-ui-variant">
                            <label class="ui-variant-color">
                              <span
                                class="ui-variant-shape"
                                style="background-color: #212121"
                              ></span>
                              <input
                                type="radio"
                                value="4"
                                name="color"
                                id="variant"
                                class="js-variant-selector"
                              />
                              <span class="ui-variant-check"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div class="product-params">
                        <ul>
                          <li class="title-product-features">
                            ویژگی‌های محصول
                          </li>
                          <li>
                            <span>حافظه داخلی: </span>
                            <span>128 گیگابایت</span>
                          </li>
                          <li>
                            <span>شبکه های ارتباطی: </span>
                            <span>2G،3G،4G</span>
                          </li>
                          <li>
                            <span>حس‌گرها: </span>
                            <span>
                              قطب‌نما (Compass)،شتاب‌سنج (Accelerometer)،مجاورت
                              (Proximity)،ژیروسکوپ (Gyro)،اثرانگشت زیر صفحه
                              نمایش (FingerPrint|Under-Display)</span
                            >
                          </li>
                          <li class="product-params-more">
                            <span>مقدار RAM:</span>
                            <span> 6 گیگابایت</span>
                          </li>
                          <li class="product-params-more">
                            <span>رزولوشن عکس: </span>
                            <span>48 مگاپیکسل</span>
                          </li>
                          <li class="product-params-more">
                            <span>باتری قابل تعویض: </span>
                            <span>خیر</span>
                          </li>
                          <li class="product-params-more">
                            <span>بازه‌ی اندازه صفحه نمایش: </span>
                            <span>6.43 اینچ و بزرگتر</span>
                          </li>
                          <li class="product-params-more">
                            <span>ویژگی‌های خاص: </span>
                            <span>
                              مناسب عکاسی فبلت مجهز به حس‌گر اثرانگشت مناسب
                              عکاسی سلفی</span
                            >
                          </li>
                          <li class="product-params-more">
                            <span>نسخه سیستم عامل: </span>
                            <span>Android 11</span>
                          </li>
                          <li class="product-params-more-handler">
                            <a href="#" class="link-border">
                              <span class="show-more">موارد بیشتر</span>
                              <span class="show-less">بستن</span>
                            </a>
                          </li>
                        </ul>
                        <div class="product-additional-info">
                          <div class="product-additional-item">
                            <p>
                              هشدار سامانه همتا: حتما در زمان تحویل دستگاه، به
                              کمک کد فعال‌سازی چاپ شده روی جعبه یا کارت گارانتی،
                              دستگاه را از طریق #7777*، برای سیم‌کارت خود
                              فعال‌سازی کنید. آموزش تصویری در آدرس اینترنتی
                              hmti.ir/05
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-4 col-xs-12 pull-left sticky-sidebar"
                  style="padding: 0"
                >
                  <div class="product-seller-info">
                    <div class="js-seller-info-changable">
                      <div class="product-seller-row">
                        <div class="product-seller-first-line d-inline-block">
                          فروشنده:
                        </div>
                        <a href="#" class="js-seller-count-row">
                          <span class="js-seller-count u-text-bold">۲</span>
                          <span class="u-text-bold"> فروشنده</span>
                          دیگر
                        </a>
                      </div>
                      <div
                        class="product-seller-row product-seller-row-guarantee"
                      >
                        <div class="js-guarantee-text">
                          گارانتی ۱۸ ماهه دیجی استور
                          <i class="mdi mdi-check"></i>
                        </div>
                      </div>
                      <div class="product-seller-row js-seller-info-shipment">
                        <div class="js-guarantee-text">
                          موجود در انبار فروشنده
                          <i class="mdi mdi-content-save-outline"></i>
                        </div>
                        <div class="product-delivery-warehouse">
                          آماده ارسال
                        </div>
                      </div>
                      <div class="product-seller-row">
                        <div class="product-seller-digiclub">
                          <img
                            src="assets/images/digiclub.png"
                            alt="digiclub"
                          />
                          <div>
                            <span>۱۵۰</span>
                            امتیاز دیجی‌کلاب
                          </div>
                        </div>
                      </div>
                      <div class="product-seller-row">
                        <div class="product-seller-row-price">
                          <div class="product-seller-price-label">
                            قیمت فروشنده
                          </div>
                          <div class="product-seller-price-real">
                            <div class="product-seller-price-prev">
                              ۶,۲۸۹,۰۰۰
                            </div>
                            تومان
                          </div>
                        </div>
                        <div class="product-remaining-in-stock-parent">
                          <div class="cart-view-count">
                            <i class="mdi mdi-eye-outline"></i>
                            ۱۰+ نفر در حال بازدید این کالا می‌باشند.
                          </div>
                        </div>
                        <button @click="addItem({ product, quantity: 1 })" class="btn-add-to-cart">
                          <span class="btn-add-to-cart-txt"
                            >افزودن به سبد خرید
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-feature-body">
                <div class="product-feature">
                  <div class="row">
                    <div class="product-feature-col">
                      <a href="#" class="product-feature-item">
                        <img
                          src="assets/images/footer-svg/delivery.svg"
                          alt="delivery"
                        />
                        <span
                          >امکان تحویل
                          <br />
                          اکسپرس
                        </span>
                      </a>
                    </div>

                    <div class="product-feature-col">
                      <a href="#" class="product-feature-item">
                        <img
                          src="assets/images/footer-svg/contact-us.svg"
                          alt="contact-us"
                          style="width: 35px"
                        />
                        <span
                          >۷ روز هفته
                          <br />
                          ۲۴ ساعته
                        </span>
                      </a>
                    </div>

                    <div class="product-feature-col">
                      <a href="#" class="product-feature-item">
                        <img
                          src="assets/images/footer-svg/payment-terms.svg"
                          alt="payment-terms"
                          style="width: 35px"
                        />
                        <span
                          >امکان
                          <br />
                          پرداخت در محل
                        </span>
                      </a>
                    </div>

                    <div class="product-feature-col">
                      <a href="#" class="product-feature-item">
                        <img
                          src="assets/images/footer-svg/origin-guarantee.svg"
                          alt="origin-guarantee"
                          style="width: 35px"
                        />
                        <span
                          >ضمانت
                          <br />
                          اصل بودن کالا
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
        <Product-Slider title="محصولات مرتبط" slug="lights/bulb" class="p-0" />
        <Product-Slider title="محصولات" slug="lights/projector" class="p-0" />
        <div v-if="false" class="col-lg-12 col-md-12 col-xs-12 pull-right p-0">
          <div class="row">
            <div class="col-12">
              <div class="widget widget-product card">
                <header class="card-header">
                  <span class="title-one">محصولات مرتبط</span>
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
                        width: 2281px;
                      "
                    >
                      <div
                        class="owl-item active"
                        style="width: 315.75px; margin-left: 10px"
                      >
                        <div class="item">
                          <a href="#">
                            <img
                              src="assets/images/product-slider-2/111460776.jpg"
                              class="img-fluid"
                              alt="img-slider"
                            />
                          </a>
                          <h2 class="post-title">
                            <a href="#">
                              گوشی موبایل سامسونگ مدل Galaxy A50 SM-A505F/DS دو
                              ...
                            </a>
                          </h2>
                          <div class="price">
                            <del
                              ><span>۴,۵۳۰,۰۰۰<span>تومان</span></span></del
                            >
                            <ins
                              ><span>۳,۳۹۵,۰۰۰<span>تومان</span></span></ins
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active"
                        style="width: 315.75px; margin-left: 10px"
                      >
                        <div class="item">
                          <a href="#">
                            <img
                              src="assets/images/product-slider-2/111474228.jpg"
                              class="img-fluid"
                              alt="img-slider"
                            />
                          </a>
                          <h2 class="post-title">
                            <a href="#">
                              گوشی موبایل سامسونگ مدل Galaxy A10 SM-A105F/DS دو
                              ...
                            </a>
                          </h2>
                          <div class="price">
                            <del
                              ><span>۴,۵۳۰,۰۰۰<span>تومان</span></span></del
                            >
                            <ins
                              ><span>۳,۳۹۵,۰۰۰<span>تومان</span></span></ins
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active"
                        style="width: 315.75px; margin-left: 10px"
                      >
                        <div class="item">
                          <a href="#">
                            <img
                              src="assets/images/product-slider-2/112145268.jpg"
                              class="img-fluid"
                              alt="img-slider"
                            />
                          </a>
                          <h2 class="post-title">
                            <a href="#">
                              گوشی موبایل سامسونگ مدل Galaxy A70 SM-A705FN/DS
                              دو...
                            </a>
                          </h2>
                          <div class="price">
                            <del
                              ><span>۴,۵۳۰,۰۰۰<span>تومان</span></span></del
                            >
                            <ins
                              ><span>۳,۳۹۵,۰۰۰<span>تومان</span></span></ins
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active"
                        style="width: 315.75px; margin-left: 10px"
                      >
                        <div class="item">
                          <a href="#">
                            <img
                              src="assets/images/product-slider-2/111475300.jpg"
                              class="img-fluid"
                              alt="img-slider"
                            />
                          </a>
                          <h2 class="post-title">
                            <a href="#">
                              گوشی موبایل سامسونگ مدل Galaxy A30 SM-A305F/DS دو
                              ...
                            </a>
                          </h2>
                          <div class="price">
                            <del
                              ><span>۴,۵۳۰,۰۰۰<span>تومان</span></span></del
                            >
                            <ins
                              ><span>۳,۳۹۵,۰۰۰<span>تومان</span></span></ins
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item"
                        style="width: 315.75px; margin-left: 10px"
                      >
                        <div class="item">
                          <a href="#">
                            <img
                              src="assets/images/product-slider-2/113542184.jpg"
                              class="img-fluid"
                              alt="img-slider"
                            />
                          </a>
                          <h2 class="post-title">
                            <a href="#">
                              گوشی موبایل اپل مدل iPhone 11 Pro Max A2218 دو
                              سیم...
                            </a>
                          </h2>
                          <div class="price">
                            <del
                              ><span>۴,۵۳۰,۰۰۰<span>تومان</span></span></del
                            >
                            <ins
                              ><span>۳,۳۹۵,۰۰۰<span>تومان</span></span></ins
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item"
                        style="width: 315.75px; margin-left: 10px"
                      >
                        <div class="item">
                          <a href="#">
                            <img
                              src="assets/images/product-slider-2/111469793.jpg"
                              class="img-fluid"
                              alt="img-slider"
                            />
                          </a>
                          <h2 class="post-title">
                            <a href="#">
                              گوشی موبایل سامسونگ مدل Galaxy A20 SM-A205F/DS دو
                              ...
                            </a>
                          </h2>
                          <div class="price">
                            <del
                              ><span>۴,۵۳۰,۰۰۰<span>تومان</span></span></del
                            >
                            <ins
                              ><span>۳,۳۹۵,۰۰۰<span>تومان</span></span></ins
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item"
                        style="width: 315.75px; margin-left: 10px"
                      >
                        <div class="item">
                          <a href="#">
                            <img
                              src="assets/images/product-slider-2/111472656.jpg"
                              class="img-fluid"
                              alt="img-slider"
                            />
                          </a>
                          <h2 class="post-title">
                            <a href="#">
                              گوشی موبایل سامسونگ مدل Samsung Galaxy S10 Plus
                              SM...
                            </a>
                          </h2>
                          <div class="price">
                            <del
                              ><span>۴,۵۳۰,۰۰۰<span>تومان</span></span></del
                            >
                            <ins
                              ><span>۳,۳۹۵,۰۰۰<span>تومان</span></span></ins
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

        <div class="p-tabs">
          <div class="col-lg-9 col-md-12 col-xs-12 pull-right p-0 res-w">
            <div class="box-tabs-main">
              <ul class="box-tabs">
                <li class="box-tabs-tab active-tabs">
                  <a href="#"> نقد و بررسی</a>
                </li>
                <li class="box-tabs-tab">
                  <a href="#"> مشخصات</a>
                </li>
                <li class="box-tabs-tab">
                  <a href="#">نظرات کاربران</a>
                </li>
                <li class="box-tabs-tab">
                  <a href="#">پرسش و پاسخ</a>
                </li>
              </ul>
            </div>
            <div class="tabs-content">
              <div class="tab-active-content">
                <div class="tab content-expert" style="display: block">
                  <article>
                    <h2 class="params-headline">
                      نقد و بررسی اجمالی
                      <span
                        >Xiaomi Redmi Note 10 M2101K7AG Dual SIM 128GB And 6GB
                        RAM Mobile Phone</span
                      >
                    </h2>
                    <section class="content-expert-summary">
                      <div class="is-masked">
                        <div class="mask-text-product-summary">
                          <p>
                            گوشی موبایل شیائومی مدل Redmi Note 10 دو سیم‌ کارت
                            ظرفیت 128 گیگابایت با بدون فناوری NFC وارد بازار شده
                            است. شیائومی در مارس 2021، نسل دهم از گوشی‌های Redmi
                            Note خود را معرفی کرده است. گوشی « Redmi Note 10»
                            مانند نسخه‌های قبلی این سری از گوشی‌های شیائومی از
                            صفحه‌نمایش بزرگ، باتری پرقدرت، طراحی جذاب دوربین و
                            سخت‌افزار مناسب برای اجرای بازی برخوردار است. هم با
                            پنل IPS LCD ساخته‌شده و فاصله لبه صفحه‌نمایش در آن
                            بسیار کم است. این نمایشگر 4.43 اینچی حدود 409 پیکسل
                            را در هر اینچ جا داده است. بدنه و نمایشگر این محصول
                            با استفاده از Corning Gorilla Glass 3 محافظت می‌شود
                            تا گوشی در برابر خط ‌وخش ایمن باشد. ویژگی دیگر Redmi
                            Note 10 مجهز شدن به حسگر اثرانگشت بر روی لبه کناری
                            آن است. شیائومی برای این محصول خود از یک دوربین
                            چهارگانه استفاده کرده است. لنزعریض 48 مگاپیکسلی، لنز
                            فوق عریض 8 مگاپیکسلی، لنز ماکرو با کیفیت 2 مگاپیکسل
                            و سنسور عمق 2 مگاپیکسلی مجموعه دوربین Redmi Note 10
                            را تشکیل می‌دهد. یک دوربین سلفی 13 مگاپیکسلی هم در
                            مرکز بالای نمایشگر این گوشی به کار گرفته شده است.
                            ازنظر سخت‌افزاری هم این گوشی از تراشه Snapdragon 678
                            بهره می‌برد که در آن پردازنده‌ای هشت‌هسته‌ا‌ی و
                            قدرتمند قرارگرفته است. حافظه رم با ظرفیت 6 گیگابایت
                            هم در کنار این مجموعه قرار گرفته است تا بتواند
                            علاوه‌بر کارهای معمول، از قابلیت‌های جدید گوشی‌های
                            امروزی پشتیبانی کند. باتری 5000 میلی‌آمپرساعتی با
                            پشتیبانی از شارژ سریع 33 وات، درگاه ارتباطی USB
                            Type-C 2.0 و جک 3.5 میلی‌متری صدا هم از دیگر مشخصات
                            این محصول جدید است.
                          </p>
                        </div>
                        <a href="#" class="mask-handler">
                          <span class="show-more">ادامه مطلب</span>
                          <span class="show-less">بستن</span>
                        </a>
                        <div class="shadow-box"></div>
                      </div>
                    </section>
                  </article>
                  <section class="content-expert-stats row">
                    <div class="col-8 pull-right">
                      <div class="content-expert-stats-left">
                        <div class="content-expert-evaluation">
                          <div
                            class="col-lg-5 col-md-5 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="content-expert-evaluation-positive">
                              <span>نقاط قوت</span>
                              <ul>
                                <li>صفحه نمایش AMOLED</li>
                                <li>طراحی چشم‎نواز قاب پشتی</li>
                                <li>عملکرد مطلوب تراشه Exynos 9610</li>
                                <li>طول عمر بالای باتری</li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="col-lg-5 col-md-5 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="content-expert-evaluation-negative">
                              <span>نقاط ضعف</span>
                              <ul>
                                <li>مقاوم نبودن در برابر آب</li>
                                <li>عملکرد نه چندان خوب دوربین در شب</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div class="tab params" style="display: none">
                  <article>
                    <h2 class="params-headline">
                      مشخصات فنی
                      <span
                        >Xiaomi Redmi Note 10 M2101K7AG Dual SIM 128GB And 6GB
                        RAM Mobile Phone</span
                      >
                    </h2>
                    <section>
                      <h3 class="params-title">مشخصات کلی</h3>
                      <ul class="params-list">
                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">ابعاد</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block"
                                >7.7 × 74.7 × 158.5 میلی‌متر</span
                              >
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">توضیحات سیم کارت</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block"
                                >سایز نانو (8.8 × 12.3 میلی‌متر)</span
                              >
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">وزن</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">166 گرم</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">ساختار بدنه</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">قاب جلو شیشه</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span
                                class="block"
                                style="background: #fff"
                              ></span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">قاب پشت پلاستیک</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">ویژگی‌های خاص</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block"
                                >مناسب عکاسی , فبلت , مجهز به حس‌گر اثرانگشت ,
                                مناسب عکاسی سلفی
                              </span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">تعداد سیم کارت</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">دو سیم کارت </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h3 class="params-title">پردازنده</h3>
                      <ul class="params-list">
                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">تراشه</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">Exynos 9610 (10nm) CPU</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <div class="js-dk-wiki-trigger">
                                <a href="#" class="link-border"
                                  >پردازنده‌ی مرکزی</a
                                >
                                <div class="wiki-container">
                                  <p class="c-wiki__text">
                                    سی‌پی‌یو (به انگلیسی Central Processing Unit
                                    یا CPU) یا پردازنده (به انگلیسی Processor)،
                                    یکی از اجزاء رایانه می‌باشد که فرامین و
                                    اطلاعات را مورد پردازش قرار می‌دهد. واحدهای
                                    پردازش مرکزی ویژگی پایه‌ای قابل برنامه‌ریزی
                                    شدن را در رایانه‌های رقمی فراهم می‌کنند، و
                                    یکی از مهم‌ترین اجزا رایانه‌ها هستند. یک
                                    پردازنده مرکزی، مداری یکپارچه می‌باشد که
                                    معمولا به عنوان ریزپردازنده شناخته می‌شود.
                                    امروزه عبارت CPU معمولا برای ریزپردازنده‌ها
                                    به کار می‌رود. مدت زمان انجام یک کار به
                                    وسیله رایانه، به عوامل متعددی بستگی دارد که
                                    اولین آن‌ها، سرعت پردازشگر رایانه است.
                                    پردازشگر یک تراشه الکترونیکی کوچک در قلب
                                    کامپیوتر است و سرعت آن بر حسب مگاهرتز یا
                                    گیگاهرتز سنجیده می‌شود. هر چه مقدار این
                                    پارامتر بیشتر باشد، پردازشگر سریع‌تر خواهد
                                    بود و در نتیجه قادر خواهد بود، محاسبات
                                    بیشتری را در هر ثانیه انجام دهد. در اصطلاح
                                    عامیانه CPU به عنوان مغز رایانه شناخته
                                    می‌شود.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block"
                                >7.7 × 74.7 × 158.5 میلی‌متر</span
                              >
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">نوع پردازنده</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">64 بیت </span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">فرکانس پردازنده‌ی مرکزی</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">2.3 و 1.7 گیگاهرتز</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="js-dk-wiki-trigger">
                                <a href="#" class="link-border"
                                  >پردازنده‌ی گرافیکی</a
                                >
                                <div class="wiki-container">
                                  <p class="c-wiki__text">
                                    پردازشگر گرافیکی (به انگلیسی Graphics
                                    Processing Unit)‏ که با نام GPU نیز شناخته
                                    می‌شود، یک مدار الکتریکی پیشرفته است که
                                    تصاویر خروجی را برای نمایشگر تولید می‌کند.
                                    اکثر پردازشگرهای گرافیکی، توابع مختلفی مانند
                                    شتاب دهنده‌ی رندر صحنه‌های سه‌بعدی و دوبعدی،
                                    رمز گشایی کردن MPEG-2/MPEG-4، خروجی تلویزیون
                                    و حتی قابلیت اتصال چند مانیتور را ارائه
                                    می‌کنند.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">Mali-G72 MP3 GPU</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h3 class="params-title">حافظه</h3>
                      <ul class="params-list">
                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">حافظه داخلی</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">128 گیگابایت </span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">مقدار RAM</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">4 گیگابایت</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block"
                                >پشتیبانی از کارت حافظه جانبی</span
                              >
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">microSD</span>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div
                            class="col-lg-3 col-md-3 col-xs-12 pull-right"
                            style="padding: 0"
                          >
                            <div class="params-list-key">
                              <span class="block">حداکثر ظرفیت کارت حافظه</span>
                            </div>
                          </div>

                          <div
                            class="col-lg-9 col-md-9 col-xs-12 pull-left"
                            style="padding: 0"
                          >
                            <div class="params-list-value">
                              <span class="block">1 ترابایت</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </section>
                  </article>
                </div>
                <div class="tab comments" style="display: none">
                  <h2 class="comments-headline">
                    امتیاز کاربران به:
                    <span>
                      <span
                        >Xiaomi Redmi Note 10 M2101K7AG Dual SIM 128GB And 6GB
                        RAM Mobile Phone</span
                      >
                    </span>
                  </h2>
                  <div class="comments-summary">
                    <div
                      class="
                        col-lg-3 col-md-3 col-xs-12
                        pull-right
                        sticky-sidebar
                      "
                    >
                      <div class="comments-summary-box">
                        <div class="comments-side-rating-container">
                          <div class="comments-side-rating">
                            <div class="comments-side-rating-main">۳.۷</div>
                            <div class="comments-side-rating-desc">از ۵</div>
                          </div>
                          <div class="comments-side-rating-bottom">
                            <div class="product-star mb-3">
                              <i class="fa fa-star active"></i>
                              <i class="fa fa-star active"></i>
                              <i class="fa fa-star active"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <div class="comments-side-rating-all">
                              از مجموع ۸۳ امتیاز
                            </div>
                          </div>
                        </div>
                        <ul class="comments-item-rating">
                          <li>
                            <div class="cell">کیفیت ساخت:</div>
                            <div class="cell-2">
                              <div class="rating rating-general js-rating">
                                <div class="rating-rate"></div>
                              </div>
                              <span class="rating-overall-word">۳.۷</span>
                            </div>
                          </li>
                          <li>
                            <div class="cell">ارزش خرید به نسبت قیمت:</div>
                            <div class="cell-2">
                              <div class="rating rating-general js-rating">
                                <div class="rating-rate"></div>
                              </div>
                              <span class="rating-overall-word">۳.۷</span>
                            </div>
                          </li>
                          <li>
                            <div class="cell">نوآوری:</div>
                            <div class="cell-2">
                              <div class="rating rating-general js-rating">
                                <div class="rating-rate"></div>
                              </div>
                              <span class="rating-overall-word">۳.۷</span>
                            </div>
                          </li>
                          <li>
                            <div class="cell">امکانات و قابلیت ها:</div>
                            <div class="cell-2">
                              <div class="rating rating-general js-rating">
                                <div class="rating-rate"></div>
                              </div>
                              <span class="rating-overall-word">۳.۷</span>
                            </div>
                          </li>
                          <li>
                            <div class="cell">سهولت استفاده:</div>
                            <div class="cell-2">
                              <div class="rating rating-general js-rating">
                                <div class="rating-rate"></div>
                              </div>
                              <span class="rating-overall-word">۳.۷</span>
                            </div>
                          </li>
                          <li>
                            <div class="cell">طراحی و ظاهر:</div>
                            <div class="cell-2">
                              <div class="rating rating-general js-rating">
                                <div class="rating-rate"></div>
                              </div>
                              <span class="rating-overall-word">۳.۷</span>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div class="comments-summary-note">
                        <span>دیدگاه خود را درباره این کالا بیان کنید</span>
                        <div class="parent-btn">
                          <button class="dk-btn dk-btn-info">
                            افزودن نظر جدید
                            <i class="fa fa-comments sign-in"></i>
                          </button>
                        </div>
                        <div class="comments-dc-touch">
                          <div class="comments-dc-touch-title">
                            ۵ امتیاز دیجی‌کلاب
                          </div>
                          <div class="comments-dc-touch-desc">
                            با بیان دیدگاه برای این کالا دریافت کنید
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-xs-12 pull-left">
                      <div class="comments-filter">
                        <div class="filter-item-main">
                          <ul
                            class="filter-items nav nav-tabs"
                            id="myTab"
                            role="tablist"
                          >
                            <li>
                              <span class="sort-row-text"
                                ><i class="mdi mdi-sort"></i> مرتب‌سازی
                                دیدگاه‌ها بر اساس:</span
                              >
                            </li>
                            <li class="filter-items-active nav-item">
                              <a
                                class="nav-link active"
                                id="Buyerscomments-tab"
                                data-toggle="tab"
                                href="#Buyerscomments"
                                role="tab"
                                aria-controls="Buyerscomments"
                                aria-selected="true"
                                >نظر خریداران</a
                              >
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                id="Usefulcomments-tab"
                                data-toggle="tab"
                                href="#Usefulcomments"
                                role="tab"
                                aria-controls="Usefulcomments"
                                aria-selected="true"
                                >مفیدترین نظرات</a
                              >
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                id="Newscomments-tab"
                                data-toggle="tab"
                                href="#Newscomments"
                                role="tab"
                                aria-controls="Newscomments"
                                aria-selected="true"
                                >جدیدترین نظرات</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="product-comment-list">
                        <div class="tab-content" id="myTabContent">
                          <div
                            class="tab-pane fade show active"
                            id="Buyerscomments"
                            role="tabpanel"
                            aria-labelledby="Buyerscomments-tab"
                          >
                            <ul class="comments-list">
                              <li>
                                <section>
                                  <div
                                    class="
                                      col-lg-4 col-md-5 col-xs-12
                                      pull-right
                                    "
                                  >
                                    <div class="aside">
                                      <div class="message-light">
                                        <span class="mdi mdi-cart"></span>
                                        خریدار این محصول
                                      </div>
                                      <ul class="comments-user-shopping">
                                        <li>
                                          <div class="cell">
                                            رنگ خریداری شده:
                                          </div>
                                          <div class="color-cell">
                                            <span
                                              class="shopping-color-value"
                                            ></span
                                            >آبی
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">
                                            خریداری شده از:
                                          </div>
                                          <div class="color-cell">
                                            <span class="mdi mdi-home"></span>
                                            <a href="#" class="link-border"
                                              >دی جی لند پلاس</a
                                            >
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">قیمت خرید:</div>
                                          <div class="bought-price">
                                            ۴,۳۷۵,۰۰۰تومان
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">تاریخ خرید:</div>
                                          <div class="bought-price">
                                            بیش از سه ماه پیش
                                          </div>
                                        </li>
                                      </ul>
                                      <div
                                        class="message-light opinion-positive"
                                      >
                                        <span class="fa fa-thumbs-o-up"></span>
                                        خریدار این محصول
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      col-lg-8 col-md-7 col-xs-12
                                      pull-left
                                    "
                                  >
                                    <div class="article">
                                      <div class="header">
                                        <div>
                                          ارسال رم 4 بجای رم 6
                                          <span
                                            >توسط حسن شجاعی در تاریخ ۱۳ خرداد
                                            ۱۳۹۸</span
                                          >
                                        </div>
                                      </div>
                                      <p>
                                        از دیجیکالا خواهش میکنم زمان ثبت مشخصات،
                                        دقت لازم رو داشته باشند...<br />
                                        این گوشی، گوشی بسیار خوبی هست، اما من
                                        زمانی که توی مشخصات نوشته بود رم 6 هست،
                                        خریدمش! اما پس از ارسال، رمش 4 بود که از
                                        پست تحویل نگرفتم و مرجوعش کردم! هزینه ش
                                        فقط زمانی بود که از دست رفت! وقتی
                                        میتونستم داخل شهر رم 4ش رو با قیمتی
                                        بسیار کمتر بخرم!<br />
                                        انشالله سری بعد در ثبت مشخصات کالا دقت
                                        لازم بکار گرفته شود...
                                      </p>
                                      <div class="footer">
                                        <div class="comment-like-container">
                                          آیا این نظر برایتان مفید بود؟
                                          <button
                                            class="btn-like"
                                            data-counter="۱,۵۲۸"
                                          >
                                            بله
                                          </button>
                                          <button
                                            class="btn-like"
                                            data-counter="۷۹"
                                          >
                                            خیر
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section>
                                  <div
                                    class="
                                      col-lg-4 col-md-5 col-xs-12
                                      pull-right
                                    "
                                  >
                                    <div class="aside">
                                      <div class="message-light">
                                        <span class="mdi mdi-cart"></span>
                                        خریدار این محصول
                                      </div>
                                      <ul class="comments-user-shopping">
                                        <li>
                                          <div class="cell">
                                            رنگ خریداری شده:
                                          </div>
                                          <div class="color-cell">
                                            <span
                                              class="shopping-color-value"
                                            ></span
                                            >آبی
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">
                                            خریداری شده از:
                                          </div>
                                          <div class="color-cell">
                                            <span class="mdi mdi-home"></span>
                                            <a href="#" class="link-border"
                                              >دی جی لند پلاس</a
                                            >
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">قیمت خرید:</div>
                                          <div class="bought-price">
                                            ۴,۳۷۵,۰۰۰تومان
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">تاریخ خرید:</div>
                                          <div class="bought-price">
                                            بیش از سه ماه پیش
                                          </div>
                                        </li>
                                      </ul>
                                      <div
                                        class="message-light opinion-positive"
                                      >
                                        <span class="fa fa-thumbs-o-up"></span>
                                        خریدار این محصول
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      col-lg-8 col-md-7 col-xs-12
                                      pull-left
                                    "
                                  >
                                    <div class="article">
                                      <div class="header">
                                        <div>
                                          ارسال رم 4 بجای رم 6
                                          <span
                                            >توسط حسن شجاعی در تاریخ ۱۳ خرداد
                                            ۱۳۹۸</span
                                          >
                                        </div>
                                      </div>
                                      <p>
                                        از دیجیکالا خواهش میکنم زمان ثبت مشخصات،
                                        دقت لازم رو داشته باشند...<br />
                                        این گوشی، گوشی بسیار خوبی هست، اما من
                                        زمانی که توی مشخصات نوشته بود رم 6 هست،
                                        خریدمش! اما پس از ارسال، رمش 4 بود که از
                                        پست تحویل نگرفتم و مرجوعش کردم! هزینه ش
                                        فقط زمانی بود که از دست رفت! وقتی
                                        میتونستم داخل شهر رم 4ش رو با قیمتی
                                        بسیار کمتر بخرم!<br />
                                        انشالله سری بعد در ثبت مشخصات کالا دقت
                                        لازم بکار گرفته شود...
                                      </p>
                                      <div class="footer">
                                        <div class="comment-like-container">
                                          آیا این نظر برایتان مفید بود؟
                                          <button
                                            class="btn-like"
                                            data-counter="۱,۵۲۸"
                                          >
                                            بله
                                          </button>
                                          <button
                                            class="btn-like"
                                            data-counter="۷۹"
                                          >
                                            خیر
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section>
                                  <div
                                    class="
                                      col-lg-4 col-md-5 col-xs-12
                                      pull-right
                                    "
                                  >
                                    <div class="aside">
                                      <div class="message-light">
                                        <span class="mdi mdi-cart"></span>
                                        خریدار این محصول
                                      </div>
                                      <ul class="comments-user-shopping">
                                        <li>
                                          <div class="cell">
                                            رنگ خریداری شده:
                                          </div>
                                          <div class="color-cell">
                                            <span
                                              class="shopping-color-value"
                                            ></span
                                            >آبی
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">
                                            خریداری شده از:
                                          </div>
                                          <div class="color-cell">
                                            <span class="mdi mdi-home"></span>
                                            <a href="#" class="link-border"
                                              >دی جی لند پلاس</a
                                            >
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">قیمت خرید:</div>
                                          <div class="bought-price">
                                            ۴,۳۷۵,۰۰۰تومان
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">تاریخ خرید:</div>
                                          <div class="bought-price">
                                            بیش از سه ماه پیش
                                          </div>
                                        </li>
                                      </ul>
                                      <div
                                        class="message-light opinion-positive"
                                      >
                                        <span class="fa fa-thumbs-o-up"></span>
                                        خریدار این محصول
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      col-lg-8 col-md-7 col-xs-12
                                      pull-left
                                    "
                                  >
                                    <div class="article">
                                      <div class="header">
                                        <div>
                                          ارسال رم 4 بجای رم 6
                                          <span
                                            >توسط حسن شجاعی در تاریخ ۱۳ خرداد
                                            ۱۳۹۸</span
                                          >
                                        </div>
                                      </div>
                                      <p>
                                        از دیجیکالا خواهش میکنم زمان ثبت مشخصات،
                                        دقت لازم رو داشته باشند...<br />
                                        این گوشی، گوشی بسیار خوبی هست، اما من
                                        زمانی که توی مشخصات نوشته بود رم 6 هست،
                                        خریدمش! اما پس از ارسال، رمش 4 بود که از
                                        پست تحویل نگرفتم و مرجوعش کردم! هزینه ش
                                        فقط زمانی بود که از دست رفت! وقتی
                                        میتونستم داخل شهر رم 4ش رو با قیمتی
                                        بسیار کمتر بخرم!<br />
                                        انشالله سری بعد در ثبت مشخصات کالا دقت
                                        لازم بکار گرفته شود...
                                      </p>
                                      <div class="footer">
                                        <div class="comment-like-container">
                                          آیا این نظر برایتان مفید بود؟
                                          <button
                                            class="btn-like"
                                            data-counter="۱,۵۲۸"
                                          >
                                            بله
                                          </button>
                                          <button
                                            class="btn-like"
                                            data-counter="۷۹"
                                          >
                                            خیر
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </li>
                            </ul>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="Usefulcomments"
                            role="tabpanel"
                            aria-labelledby="Usefulcomments-tab"
                          >
                            <ul class="comments-list">
                              <li>
                                <section>
                                  <div
                                    class="
                                      col-lg-4 col-md-5 col-xs-12
                                      pull-right
                                    "
                                  >
                                    <div class="aside">
                                      <div class="message-light">
                                        <span class="mdi mdi-cart"></span>
                                        خریدار این محصول
                                      </div>
                                      <ul class="comments-user-shopping">
                                        <li>
                                          <div class="cell">
                                            رنگ خریداری شده:
                                          </div>
                                          <div class="color-cell">
                                            <span
                                              class="shopping-color-value"
                                            ></span
                                            >آبی
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">
                                            خریداری شده از:
                                          </div>
                                          <div class="color-cell">
                                            <span class="mdi mdi-home"></span>
                                            <a href="#" class="link-border"
                                              >دی جی لند پلاس</a
                                            >
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">قیمت خرید:</div>
                                          <div class="bought-price">
                                            ۴,۳۷۵,۰۰۰تومان
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">تاریخ خرید:</div>
                                          <div class="bought-price">
                                            بیش از سه ماه پیش
                                          </div>
                                        </li>
                                      </ul>
                                      <div
                                        class="message-light opinion-positive"
                                      >
                                        <span class="fa fa-thumbs-o-up"></span>
                                        خریدار این محصول
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      col-lg-8 col-md-7 col-xs-12
                                      pull-left
                                    "
                                  >
                                    <div class="article">
                                      <div class="header">
                                        <div>
                                          ارسال رم 4 بجای رم 6
                                          <span
                                            >توسط حسن شجاعی در تاریخ ۱۳ خرداد
                                            ۱۳۹۸</span
                                          >
                                        </div>
                                      </div>
                                      <p>
                                        از دیجیکالا خواهش میکنم زمان ثبت مشخصات،
                                        دقت لازم رو داشته باشند...<br />
                                        این گوشی، گوشی بسیار خوبی هست، اما من
                                        زمانی که توی مشخصات نوشته بود رم 6 هست،
                                        خریدمش! اما پس از ارسال، رمش 4 بود که از
                                        پست تحویل نگرفتم و مرجوعش کردم! هزینه ش
                                        فقط زمانی بود که از دست رفت! وقتی
                                        میتونستم داخل شهر رم 4ش رو با قیمتی
                                        بسیار کمتر بخرم!<br />
                                        انشالله سری بعد در ثبت مشخصات کالا دقت
                                        لازم بکار گرفته شود...
                                      </p>
                                      <div class="footer">
                                        <div class="comment-like-container">
                                          آیا این نظر برایتان مفید بود؟
                                          <button
                                            class="btn-like"
                                            data-counter="۱,۵۲۸"
                                          >
                                            بله
                                          </button>
                                          <button
                                            class="btn-like"
                                            data-counter="۷۹"
                                          >
                                            خیر
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section>
                                  <div
                                    class="
                                      col-lg-4 col-md-5 col-xs-12
                                      pull-right
                                    "
                                  >
                                    <div class="aside">
                                      <div class="message-light">
                                        <span class="mdi mdi-cart"></span>
                                        خریدار این محصول
                                      </div>
                                      <ul class="comments-user-shopping">
                                        <li>
                                          <div class="cell">
                                            رنگ خریداری شده:
                                          </div>
                                          <div class="color-cell">
                                            <span
                                              class="shopping-color-value"
                                            ></span
                                            >آبی
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">
                                            خریداری شده از:
                                          </div>
                                          <div class="color-cell">
                                            <span class="mdi mdi-home"></span>
                                            <a href="#" class="link-border"
                                              >دی جی لند پلاس</a
                                            >
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">قیمت خرید:</div>
                                          <div class="bought-price">
                                            ۴,۳۷۵,۰۰۰تومان
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">تاریخ خرید:</div>
                                          <div class="bought-price">
                                            بیش از سه ماه پیش
                                          </div>
                                        </li>
                                      </ul>
                                      <div
                                        class="message-light opinion-positive"
                                      >
                                        <span class="fa fa-thumbs-o-up"></span>
                                        خریدار این محصول
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      col-lg-8 col-md-7 col-xs-12
                                      pull-left
                                    "
                                  >
                                    <div class="article">
                                      <div class="header">
                                        <div>
                                          ارسال رم 4 بجای رم 6
                                          <span
                                            >توسط حسن شجاعی در تاریخ ۱۳ خرداد
                                            ۱۳۹۸</span
                                          >
                                        </div>
                                      </div>
                                      <p>
                                        از دیجیکالا خواهش میکنم زمان ثبت مشخصات،
                                        دقت لازم رو داشته باشند...<br />
                                        این گوشی، گوشی بسیار خوبی هست، اما من
                                        زمانی که توی مشخصات نوشته بود رم 6 هست،
                                        خریدمش! اما پس از ارسال، رمش 4 بود که از
                                        پست تحویل نگرفتم و مرجوعش کردم! هزینه ش
                                        فقط زمانی بود که از دست رفت! وقتی
                                        میتونستم داخل شهر رم 4ش رو با قیمتی
                                        بسیار کمتر بخرم!<br />
                                        انشالله سری بعد در ثبت مشخصات کالا دقت
                                        لازم بکار گرفته شود...
                                      </p>
                                      <div class="footer">
                                        <div class="comment-like-container">
                                          آیا این نظر برایتان مفید بود؟
                                          <button
                                            class="btn-like"
                                            data-counter="۱,۵۲۸"
                                          >
                                            بله
                                          </button>
                                          <button
                                            class="btn-like"
                                            data-counter="۷۹"
                                          >
                                            خیر
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section>
                                  <div
                                    class="
                                      col-lg-4 col-md-5 col-xs-12
                                      pull-right
                                    "
                                  >
                                    <div class="aside">
                                      <div class="message-light">
                                        <span class="mdi mdi-cart"></span>
                                        خریدار این محصول
                                      </div>
                                      <ul class="comments-user-shopping">
                                        <li>
                                          <div class="cell">
                                            رنگ خریداری شده:
                                          </div>
                                          <div class="color-cell">
                                            <span
                                              class="shopping-color-value"
                                            ></span
                                            >آبی
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">
                                            خریداری شده از:
                                          </div>
                                          <div class="color-cell">
                                            <span class="mdi mdi-home"></span>
                                            <a href="#" class="link-border"
                                              >دی جی لند پلاس</a
                                            >
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">قیمت خرید:</div>
                                          <div class="bought-price">
                                            ۴,۳۷۵,۰۰۰تومان
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">تاریخ خرید:</div>
                                          <div class="bought-price">
                                            بیش از سه ماه پیش
                                          </div>
                                        </li>
                                      </ul>
                                      <div
                                        class="message-light opinion-positive"
                                      >
                                        <span class="fa fa-thumbs-o-up"></span>
                                        خریدار این محصول
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      col-lg-8 col-md-7 col-xs-12
                                      pull-left
                                    "
                                  >
                                    <div class="article">
                                      <div class="header">
                                        <div>
                                          ارسال رم 4 بجای رم 6
                                          <span
                                            >توسط حسن شجاعی در تاریخ ۱۳ خرداد
                                            ۱۳۹۸</span
                                          >
                                        </div>
                                      </div>
                                      <p>
                                        از دیجیکالا خواهش میکنم زمان ثبت مشخصات،
                                        دقت لازم رو داشته باشند...<br />
                                        این گوشی، گوشی بسیار خوبی هست، اما من
                                        زمانی که توی مشخصات نوشته بود رم 6 هست،
                                        خریدمش! اما پس از ارسال، رمش 4 بود که از
                                        پست تحویل نگرفتم و مرجوعش کردم! هزینه ش
                                        فقط زمانی بود که از دست رفت! وقتی
                                        میتونستم داخل شهر رم 4ش رو با قیمتی
                                        بسیار کمتر بخرم!<br />
                                        انشالله سری بعد در ثبت مشخصات کالا دقت
                                        لازم بکار گرفته شود...
                                      </p>
                                      <div class="footer">
                                        <div class="comment-like-container">
                                          آیا این نظر برایتان مفید بود؟
                                          <button
                                            class="btn-like"
                                            data-counter="۱,۵۲۸"
                                          >
                                            بله
                                          </button>
                                          <button
                                            class="btn-like"
                                            data-counter="۷۹"
                                          >
                                            خیر
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </li>
                            </ul>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="Newscomments"
                            role="tabpanel"
                            aria-labelledby="Newscomments-tab"
                          >
                            <ul class="comments-list">
                              <li>
                                <section>
                                  <div
                                    class="
                                      col-lg-4 col-md-5 col-xs-12
                                      pull-right
                                    "
                                  >
                                    <div class="aside">
                                      <div class="message-light">
                                        <span class="mdi mdi-cart"></span>
                                        خریدار این محصول
                                      </div>
                                      <ul class="comments-user-shopping">
                                        <li>
                                          <div class="cell">
                                            رنگ خریداری شده:
                                          </div>
                                          <div class="color-cell">
                                            <span
                                              class="shopping-color-value"
                                            ></span
                                            >آبی
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">
                                            خریداری شده از:
                                          </div>
                                          <div class="color-cell">
                                            <span class="mdi mdi-home"></span>
                                            <a href="#" class="link-border"
                                              >دی جی لند پلاس</a
                                            >
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">قیمت خرید:</div>
                                          <div class="bought-price">
                                            ۴,۳۷۵,۰۰۰تومان
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">تاریخ خرید:</div>
                                          <div class="bought-price">
                                            بیش از سه ماه پیش
                                          </div>
                                        </li>
                                      </ul>
                                      <div
                                        class="message-light opinion-positive"
                                      >
                                        <span class="fa fa-thumbs-o-up"></span>
                                        خریدار این محصول
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      col-lg-8 col-md-7 col-xs-12
                                      pull-left
                                    "
                                  >
                                    <div class="article">
                                      <div class="header">
                                        <div>
                                          ارسال رم 4 بجای رم 6
                                          <span
                                            >توسط حسن شجاعی در تاریخ ۱۳ خرداد
                                            ۱۳۹۸</span
                                          >
                                        </div>
                                      </div>
                                      <p>
                                        از دیجیکالا خواهش میکنم زمان ثبت مشخصات،
                                        دقت لازم رو داشته باشند...<br />
                                        این گوشی، گوشی بسیار خوبی هست، اما من
                                        زمانی که توی مشخصات نوشته بود رم 6 هست،
                                        خریدمش! اما پس از ارسال، رمش 4 بود که از
                                        پست تحویل نگرفتم و مرجوعش کردم! هزینه ش
                                        فقط زمانی بود که از دست رفت! وقتی
                                        میتونستم داخل شهر رم 4ش رو با قیمتی
                                        بسیار کمتر بخرم!<br />
                                        انشالله سری بعد در ثبت مشخصات کالا دقت
                                        لازم بکار گرفته شود...
                                      </p>
                                      <div class="footer">
                                        <div class="comment-like-container">
                                          آیا این نظر برایتان مفید بود؟
                                          <button
                                            class="btn-like"
                                            data-counter="۱,۵۲۸"
                                          >
                                            بله
                                          </button>
                                          <button
                                            class="btn-like"
                                            data-counter="۷۹"
                                          >
                                            خیر
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section>
                                  <div
                                    class="
                                      col-lg-4 col-md-5 col-xs-12
                                      pull-right
                                    "
                                  >
                                    <div class="aside">
                                      <div class="message-light">
                                        <span class="mdi mdi-cart"></span>
                                        خریدار این محصول
                                      </div>
                                      <ul class="comments-user-shopping">
                                        <li>
                                          <div class="cell">
                                            رنگ خریداری شده:
                                          </div>
                                          <div class="color-cell">
                                            <span
                                              class="shopping-color-value"
                                            ></span
                                            >آبی
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">
                                            خریداری شده از:
                                          </div>
                                          <div class="color-cell">
                                            <span class="mdi mdi-home"></span>
                                            <a href="#" class="link-border"
                                              >دی جی لند پلاس</a
                                            >
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">قیمت خرید:</div>
                                          <div class="bought-price">
                                            ۴,۳۷۵,۰۰۰تومان
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">تاریخ خرید:</div>
                                          <div class="bought-price">
                                            بیش از سه ماه پیش
                                          </div>
                                        </li>
                                      </ul>
                                      <div
                                        class="message-light opinion-positive"
                                      >
                                        <span class="fa fa-thumbs-o-up"></span>
                                        خریدار این محصول
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      col-lg-8 col-md-7 col-xs-12
                                      pull-left
                                    "
                                  >
                                    <div class="article">
                                      <div class="header">
                                        <div>
                                          ارسال رم 4 بجای رم 6
                                          <span
                                            >توسط حسن شجاعی در تاریخ ۱۳ خرداد
                                            ۱۳۹۸</span
                                          >
                                        </div>
                                      </div>
                                      <p>
                                        از دیجیکالا خواهش میکنم زمان ثبت مشخصات،
                                        دقت لازم رو داشته باشند...<br />
                                        این گوشی، گوشی بسیار خوبی هست، اما من
                                        زمانی که توی مشخصات نوشته بود رم 6 هست،
                                        خریدمش! اما پس از ارسال، رمش 4 بود که از
                                        پست تحویل نگرفتم و مرجوعش کردم! هزینه ش
                                        فقط زمانی بود که از دست رفت! وقتی
                                        میتونستم داخل شهر رم 4ش رو با قیمتی
                                        بسیار کمتر بخرم!<br />
                                        انشالله سری بعد در ثبت مشخصات کالا دقت
                                        لازم بکار گرفته شود...
                                      </p>
                                      <div class="footer">
                                        <div class="comment-like-container">
                                          آیا این نظر برایتان مفید بود؟
                                          <button
                                            class="btn-like"
                                            data-counter="۱,۵۲۸"
                                          >
                                            بله
                                          </button>
                                          <button
                                            class="btn-like"
                                            data-counter="۷۹"
                                          >
                                            خیر
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section>
                                  <div
                                    class="
                                      col-lg-4 col-md-5 col-xs-12
                                      pull-right
                                    "
                                  >
                                    <div class="aside">
                                      <div class="message-light">
                                        <span class="mdi mdi-cart"></span>
                                        خریدار این محصول
                                      </div>
                                      <ul class="comments-user-shopping">
                                        <li>
                                          <div class="cell">
                                            رنگ خریداری شده:
                                          </div>
                                          <div class="color-cell">
                                            <span
                                              class="shopping-color-value"
                                            ></span
                                            >آبی
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">
                                            خریداری شده از:
                                          </div>
                                          <div class="color-cell">
                                            <span class="mdi mdi-home"></span>
                                            <a href="#" class="link-border"
                                              >دی جی لند پلاس</a
                                            >
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">قیمت خرید:</div>
                                          <div class="bought-price">
                                            ۴,۳۷۵,۰۰۰تومان
                                          </div>
                                        </li>
                                        <li>
                                          <div class="cell">تاریخ خرید:</div>
                                          <div class="bought-price">
                                            بیش از سه ماه پیش
                                          </div>
                                        </li>
                                      </ul>
                                      <div
                                        class="message-light opinion-positive"
                                      >
                                        <span class="fa fa-thumbs-o-up"></span>
                                        خریدار این محصول
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="
                                      col-lg-8 col-md-7 col-xs-12
                                      pull-left
                                    "
                                  >
                                    <div class="article">
                                      <div class="header">
                                        <div>
                                          ارسال رم 4 بجای رم 6
                                          <span
                                            >توسط حسن شجاعی در تاریخ ۱۳ خرداد
                                            ۱۳۹۸</span
                                          >
                                        </div>
                                      </div>
                                      <p>
                                        از دیجیکالا خواهش میکنم زمان ثبت مشخصات،
                                        دقت لازم رو داشته باشند...<br />
                                        این گوشی، گوشی بسیار خوبی هست، اما من
                                        زمانی که توی مشخصات نوشته بود رم 6 هست،
                                        خریدمش! اما پس از ارسال، رمش 4 بود که از
                                        پست تحویل نگرفتم و مرجوعش کردم! هزینه ش
                                        فقط زمانی بود که از دست رفت! وقتی
                                        میتونستم داخل شهر رم 4ش رو با قیمتی
                                        بسیار کمتر بخرم!<br />
                                        انشالله سری بعد در ثبت مشخصات کالا دقت
                                        لازم بکار گرفته شود...
                                      </p>
                                      <div class="footer">
                                        <div class="comment-like-container">
                                          آیا این نظر برایتان مفید بود؟
                                          <button
                                            class="btn-like"
                                            data-counter="۱,۵۲۸"
                                          >
                                            بله
                                          </button>
                                          <button
                                            class="btn-like"
                                            data-counter="۷۹"
                                          >
                                            خیر
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab js-faq-container" style="display: none">
                  <div class="faq-headline">
                    پرسش و پاسخ
                    <span
                      >Xiaomi Redmi Note 10 M2101K7AG Dual SIM 128GB And 6GB RAM
                      Mobile Phone</span
                    >
                  </div>
                  <form action="#" class="form-faq">
                    <div class="form-faq-row">
                      <div class="form-faq-col">
                        <div class="ui-textarea">
                          <textarea
                            name="Question-Text"
                            title="متن سوال"
                            class="ui-textarea-field"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="form-faq-row">
                      <div class="form-faq-col form-faq-col-submit">
                        <button class="btn-tertiary">ثبت پرسش</button>
                      </div>
                      <div class="account-agree">
                        <label class="checkbox-primary">
                          <span
                            class="checkbox-check checkbox-custom-pic"
                          ></span>
                          <input
                            type="checkbox"
                            id="accountAutoLogin"
                            class="remember-checkbox"
                          />
                        </label>
                        <label for="accountAutoLogin" class="remember-me">
                        </label>
                      </div>
                      <div class="form-auth-row form-auth-row-product">
                        <label class="ui-checkbox">
                          <input
                            type="checkbox"
                            value="1"
                            name="login"
                            checked=""
                            id="remember"
                          />
                          <span class="ui-checkbox-check"></span>
                        </label>
                        <label for="remember" class="remember-me">
                          اولین پاسخی که به پرسش من داده شد، از طریق ایمیل به من
                          اطلاع دهید.
                          <br />
                          با انتخاب دکمه “ثبت پرسش”، موافقت خود را با
                          <a href="#" class="link-border"
                            >قوانین انتشار محتوا</a
                          >
                          در دیجی کالا اعلام می کنم.
                        </label>
                      </div>
                    </div>
                  </form>
                  <div class="col-lg-9 col-md-9 col-xs-12 pull-left">
                    <div class="faq-filter">
                      <div class="filter-item-main">
                        <ul
                          class="filter-items nav nav-tabs"
                          id="myTab1"
                          role="tablist"
                        >
                          <li>
                            <span class="sort-row-text"
                              ><i class="mdi mdi-sort"></i> مرتب‌سازی دیدگاه‌ها
                              بر اساس:</span
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              id="Usefulfaqs-tab"
                              data-toggle="tab"
                              href="#Usefulfaqs"
                              role="tab"
                              aria-controls="Usefulfaqs"
                              aria-selected="true"
                              >مفیدترین پرسش</a
                            >
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              id="Newsfaqs-tab"
                              data-toggle="tab"
                              href="#Newsfaqs"
                              role="tab"
                              aria-controls="Newsfaqs"
                              aria-selected="true"
                              >جدیدترین پرسش</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="product-questions-list">
                      <div class="tab-content" id="myTabfaqContent">
                        <div
                          class="tab-pane fade show active"
                          id="Usefulfaqs"
                          role="tabpanel"
                          aria-labelledby="Usefulfaqs-tab"
                        >
                          <ul class="faq-list">
                            <li class="is-question">
                              <div class="section">
                                <div class="faq-header-question">
                                  <span class="fa fa-question-circle-o"></span>
                                  <p>
                                    پرسش
                                    <span>حسن شجاعی</span>
                                  </p>
                                </div>
                                <p>
                                  اين دستگاه قابليت استفاده از شارژر هاي بلوتوثي
                                  رو هم داره؟<br />
                                  مطابق با سيستم Qr هست؟
                                </p>
                                <div class="footer">
                                  <em>۶ آذر ۱۳۹۸</em>
                                  <a
                                    href="#"
                                    class="link-border js-add-answer-btn"
                                    >به این پرسش پاسخ دهید
                                  </a>
                                </div>
                              </div>
                              <div class="section">
                                <div class="faq-header-question">
                                  <span class="fa fa-question-circle-o"></span>
                                  <p>
                                    پرسش
                                    <span>حسن شجاعی</span>
                                  </p>
                                </div>
                                <p>
                                  اين دستگاه قابليت استفاده از شارژر هاي بلوتوثي
                                  رو هم داره؟<br />
                                  مطابق با سيستم Qr هست؟
                                </p>
                                <div class="footer">
                                  <em>۶ آذر ۱۳۹۸</em>
                                  <a
                                    href="#"
                                    class="link-border js-add-answer-btn"
                                    >به این پرسش پاسخ دهید
                                  </a>
                                </div>
                              </div>
                              <div class="section">
                                <div class="faq-header-question">
                                  <span class="fa fa-question-circle-o"></span>
                                  <p>
                                    پرسش
                                    <span>حسن شجاعی</span>
                                  </p>
                                </div>
                                <p>
                                  اين دستگاه قابليت استفاده از شارژر هاي بلوتوثي
                                  رو هم داره؟<br />
                                  مطابق با سيستم Qr هست؟
                                </p>
                                <div class="footer">
                                  <em>۶ آذر ۱۳۹۸</em>
                                  <a
                                    href="#"
                                    class="link-border js-add-answer-btn"
                                    >به این پرسش پاسخ دهید
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="Newsfaqs"
                          role="tabpanel"
                          aria-labelledby="Newsfaqs-tab"
                        >
                          <ul class="faq-list">
                            <li class="is-question">
                              <div class="section">
                                <div class="faq-header-question">
                                  <span class="fa fa-question-circle-o"></span>
                                  <p>
                                    پرسش
                                    <span>علی</span>
                                  </p>
                                </div>
                                <p>
                                  اين دستگاه قابليت استفاده از شارژر هاي بلوتوثي
                                  رو هم داره؟<br />
                                  مطابق با سيستم Qr هست؟
                                </p>
                                <div class="footer">
                                  <em>۶ آذر ۱۳۹۸</em>
                                  <a
                                    href="#"
                                    class="link-border js-add-answer-btn"
                                    >به این پرسش پاسخ دهید
                                  </a>
                                </div>
                              </div>
                              <div class="section">
                                <div class="faq-header-question">
                                  <span class="fa fa-question-circle-o"></span>
                                  <p>
                                    پرسش
                                    <span>علی</span>
                                  </p>
                                </div>
                                <p>
                                  اين دستگاه قابليت استفاده از شارژر هاي بلوتوثي
                                  رو هم داره؟<br />
                                  مطابق با سيستم Qr هست؟
                                </p>
                                <div class="footer">
                                  <em>۶ آذر ۱۳۹۸</em>
                                  <a
                                    href="#"
                                    class="link-border js-add-answer-btn"
                                    >به این پرسش پاسخ دهید
                                  </a>
                                </div>
                              </div>
                              <div class="section">
                                <div class="faq-header-question">
                                  <span class="fa fa-question-circle-o"></span>
                                  <p>
                                    پرسش
                                    <span>علی</span>
                                  </p>
                                </div>
                                <p>
                                  اين دستگاه قابليت استفاده از شارژر هاي بلوتوثي
                                  رو هم داره؟<br />
                                  مطابق با سيستم Qr هست؟
                                </p>
                                <div class="footer">
                                  <em>۶ آذر ۱۳۹۸</em>
                                  <a
                                    href="#"
                                    class="link-border js-add-answer-btn"
                                    >به این پرسش پاسخ دهید
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg-3 col-md-3 col-xs-12 pull-left sticky-sidebar"
                  >
                    <div class="question-side-bar">
                      <div class="question-filter">
                        <div class="form-auth-row d-inline-block mb-0">
                          <label class="ui-checkbox">
                            <input
                              type="checkbox"
                              value="1"
                              name="login"
                              id="remember1"
                            />
                            <span class="ui-checkbox-check"></span>
                          </label>
                          <label for="remember1" class="remember-me"
                            >پرسش‌های پاسخ داده شده
                          </label>
                        </div>
                        <div class="form-auth-row d-inline-block mt-0 mb-0">
                          <label class="ui-checkbox">
                            <input
                              type="checkbox"
                              value="1"
                              name="login"
                              id="remember2"
                            />
                            <span class="ui-checkbox-check"></span>
                          </label>
                          <label for="remember2" class="remember-me"
                            >پرسش‌های بی‌پاسخ
                          </label>
                        </div>
                        <div class="question-filter-bottom">
                          <div class="form-auth-row d-inline-block mt-0 mb-0">
                            <label class="ui-checkbox">
                              <input
                                type="checkbox"
                                value="1"
                                name="login"
                                id="remember3"
                              />
                              <span class="ui-checkbox-check"></span>
                            </label>
                            <label for="remember3" class="remember-me"
                              >پرسش‌های من
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-product-id">
                <span>شناسه کالا :</span>
                <span>DKP - ۱۶۷۲۴۷۸</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 pull-left sticky-sidebar">
            <div class="mini-buy-box-fixed">
              <div class="mini-buy-box js-mini-buy-box">
                <div class="mini-buy-box-product-info">
                  <img
                    src="assets/images/product-slider-2/RedmiNote-10-M2101K7AG.jpg"
                    class="mini-buy-box-product-info-img"
                    alt="img-slider"
                  />
                  <div class="mini-buy-box-product-info-info">
                    <div class="title">
                      گوشی موبایل شیائومی مدل Redmi Note 10 M2101K7AG دو سیم‌
                      کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت
                    </div>
                    <div class="colors">
                      <label
                        data-color-code="#FFFFFF"
                        class="js-variant-color"
                        style="background-color: rgb(255, 255, 255)"
                      ></label>
                      <span class="js-color-title">سفید</span>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    mini-buy-box-row mini-buy-box-seller
                    js-mini-not-digikala-seller
                  "
                >
                  <i class="mdi mdi-storefront"></i>
                  <label class="js-mini-seller-name">مارکت موبایل پایتخت</label>
                </div>
                <div class="mini-buy-box-row mini-buy-box-warranty">
                  <i class="mdi mdi-check"></i>
                  گارانتی ۱۸ ماهه تجارت ژاو
                </div>
                <div class="mini-buy-box-row mini-buy-box-stock">
                  <i class="mdi mdi-content-save-outline"></i>
                  موجود در انبار دیجی‌کالا
                </div>
                <div
                  class="
                    mini-buy-box-row mini-buy-box-best-price
                    js-data-best-price
                    text-success
                  "
                >
                  <i class="mdi mdi-information-outline"></i>
                  بهترین قیمت ۳۰ روز گذشته
                </div>
                <div
                  class="
                    product-seller-row product-seller-row-price
                    mini-buy-box-price-row
                  "
                >
                  <div class="product-mini-seller-price-real">
                    <div
                      class="
                        product-mini-seller-price-pure
                        js-price-value
                        d-inline-block
                      "
                    >
                      ۶,۲۱۵,۰۰۰
                    </div>
                    <span class="mini-buy-box-toman">تومان</span>
                  </div>
                </div>
                <div class="mini-buy-box-btn-row">
                  <a href="#" class="btn btn-danger product-add-to-cart-btn">
                    افزودن به سبد خرید
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="false">
      <SfBreadcrumbs
        class="breadcrumbs desktop-only"
        :breadcrumbs="breadcrumbs"
      />
      <div class="product">
        <LazyHydrate when-idle>
          <SfGallery :images="productGallery" class="product__gallery" />
        </LazyHydrate>

        <div class="product__info">
          <div class="product__header">
            <SfHeading
              :title="productGetters.getName(product)"
              :level="3"
              class="sf-heading--no-underline sf-heading--left"
            />
            <SfIcon
              icon="drag"
              size="xxl"
              color="var(--c-text-disabled)"
              class="product__drag-icon smartphone-only"
            />
          </div>
          <div class="product__price-and-rating">
            <SfPrice
              :regular="
                $n(productGetters.getPrice(product).regular, 'currency')
              "
              :special="
                productGetters.getPrice(product).special &&
                $n(productGetters.getPrice(product).special, 'currency')
              "
            />
          </div>
          <div>
            <SfSelect
              v-e2e="'size-select'"
              v-if="options.size"
              :value="configuration.size"
              @input="(size) => updateFilter({ size })"
              label="Size"
              class="sf-select--underlined product__select-size"
              :required="true"
            >
              <SfSelectOption
                v-for="size in options.size"
                :key="size.value"
                :value="size.value"
              >
                {{ size.value }}
              </SfSelectOption>
            </SfSelect>
            <SfButton
              v-if="options.size"
              class="sf-button--text desktop-only product__guide"
            >
              {{ $t('Size guide') }}
            </SfButton>
            <div
              v-if="options.color && options.color.length > 1"
              class="product__colors desktop-only"
            >
              <p class="product__color-label">{{ $t('Color') }}:</p>
              <SfColor
                v-for="(color, i) in options.color"
                :key="i"
                :color="color.value"
                :selected="color.value === configuration.color"
                class="product__color"
                @click="updateFilter({ color: color.value })"
              />
            </div>
            <SfAddToCart
              v-e2e="'product_add-to-cart'"
              v-model="qty"
              :disabled="loading || !isInStock"
              class="product__add-to-cart"
              @click="addItem({ product, quantity: parseInt(qty) })"
            />
          </div>

          <LazyHydrate when-idle>
            <SfTabs :open-tab="1" class="product__tabs">
              <SfTab title="Description" style="padding: 0; margin: 0">
                <div
                  v-html="productGetters.getDescription(product)"
                  class="product__description"
                ></div>
              </SfTab>
              <SfTab title="Properties" class="product__tab">
                <SfProperty
                  v-for="(property, i) in properties"
                  :key="i"
                  :name="property.name"
                  :value="property.value"
                  class="sf-property--full-width product__property"
                >
                  <template v-if="property.name === 'Category'" #value>
                    <SfButton class="product__property__button sf-button--text">
                      {{ property.value }}
                    </SfButton>
                  </template>
                </SfProperty>
              </SfTab>
            </SfTabs>
          </LazyHydrate>
        </div>
      </div>

      <LazyHydrate when-visible>
        <RelatedProducts
          :products="relatedProducts"
          :loading="relatedLoading"
          title="Match it with"
        />
      </LazyHydrate>

      <LazyHydrate when-visible>
        <InstagramFeed />
      </LazyHydrate>
    </template>
  </div>
</template>
<script>
import ProductSlider from '~/components/ProductSlider.vue'
import ProductGallery from '~/components/Product/ProductGallery.vue'
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfRating,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfIcon,
  SfImage,
  SfBanner,
  SfAlert,
  SfSticky,
  SfBreadcrumbs,
  SfButton,
  SfColor,
} from '@storefront-ui/vue';

import InstagramFeed from '~/components/InstagramFeed.vue';
import RelatedProducts from '~/components/RelatedProducts.vue';
import {
  ref,
  computed,
  useRoute,
  useRouter,
  useContext,
} from '@nuxtjs/composition-api';
import { useProduct, useCart, productGetters } from '@vue-storefront/spree';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
import cacheControl from './../helpers/cacheControl';

export default {
  name: 'Product',
  transition: 'fade',
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5,
  }),
  setup() {
    const qty = ref(1);
    const route = useRoute();
    const router = useRouter();
    const context = useContext();
    const { products, search } = useProduct('products');
    const {
      products: relatedProducts,
      search: searchRelatedProducts,
      loading: relatedLoading,
    } = useProduct('relatedProducts');
    const { addItem, loading } = useCart();
    const { slug } = route.value.params;

    const product = computed(
      () =>
        productGetters.getFiltered(products.value, {
          master: true,
          attributes: route.value.query,
        })[0]
    );
    const optionTypes = computed(() =>
      productGetters.getOptionTypeNames(product.value)
    );
    const options = computed(() =>
      productGetters.getAttributes(products.value, optionTypes.value)
    );
    const configuration = computed(() =>
      productGetters.getAttributes(product.value, optionTypes.value)
    );
    const categories = computed(() =>
      productGetters.getCategoryIds(product.value)
    );
    const properties = computed(() =>
      productGetters.getProperties(product.value)
    );
    const breadcrumbs = computed(() =>
      productGetters
        .getBreadcrumbs(product.value)
        .map((e) => ({ ...e, link: context.localePath(e.link) }))
    );
    const isInStock = computed(() => productGetters.getInStock(product.value));
    const productGallery = computed(() =>
      productGetters.getGallery(product.value)
    );

    onSSR(async () => {
      await search({ slug });
      await searchRelatedProducts({
        categoryId: [categories.value[0]],
        limit: 8,
      });
    });

    const updateFilter = (filter) => {
      router.push({
        path: route.value.path,
        query: {
          ...configuration.value,
          ...filter,
        },
      });
    };

    return {
      updateFilter,
      configuration,
      product,
      isInStock,
      relatedProducts: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      relatedLoading,
      options,
      qty,
      addItem,
      loading,
      productGetters,
      productGallery,
      optionTypes,
      properties,
      breadcrumbs,
    };
  },
  components: {
    ProductSlider,
    ProductGallery,
    SfAlert,
    SfColor,
    SfProperty,
    SfHeading,
    SfPrice,
    SfRating,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfImage,
    SfBanner,
    SfSticky,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    LazyHydrate,
  },
  data() {
    return {
      description:
        'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
      detailsIsActive: false,
      brand:
        'Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.',
      careInstructions: 'Do not wash!',
    };
  },
};
</script>

<style lang="scss" scoped>
#product {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
  &__info {
    width: 100%;
    margin: var(--spacer-sm) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--secondary)
    );
    padding: 0;
    margin: 0;
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-sm);
  }
  &__color-label {
    margin: 0 var(--spacer-sm) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__add-to-cart {
    margin: var(--spacer-2xl) 0 var(--spacer-sm);
  }
  &__guide {
    display: block;
    margin: 0 0 var(--spacer-sm) auto;
  }
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    --tabs-title-z-index: 0;
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
  }
  &__property {
    margin: var(--spacer-sm) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  &__gallery {
    flex: 1;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
