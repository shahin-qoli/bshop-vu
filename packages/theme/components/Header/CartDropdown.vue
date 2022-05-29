<template>
  <div class="mini-cart-dropdown">
    <div class="header-cart-info-header">
      <div class="header-cart-info-count">2 کالا</div>
      <a href="#" class="header-cart-info-link">
        <span>مشاهده سبد خرید</span>
      </a>
    </div>
    <div class="wrapper">
      <div class="scrollbar" id="style-1">
        <div class="force-overflow">
          <ul class="header-basket-list">
            <li class="js-mini-cart-item">
              <a href="#" class="header-basket-list-item">
                <div class="header-basket-list-item-image">
                  <img
                    src="assets/images/product-slider-2/GalaxyS20Ultra.jpg"
                    alt="img-slider"
                  />
                </div>
                <div class="header-basket-list-item-content">
                  <h1 class="header-basket-list-item-title">
                    گوشی موبایل سامسونگ مدل Galaxy S20 Ultra
                    SM-G988B/DS دو سیم کارت ظرفیت 128 گیگابایت
                  </h1>
                  <span
                    class="header-basket-list-item-shipping-type"
                    >موجود در انبار دیجی‌کلا</span
                  >
                  <div class="header-basket-list-item-footer">
                    <div class="header-basket-list-item-props">
                      <span
                        class="header-basket-list-item-props-item"
                      >
                        ۱ عدد</span
                      >
                      <span
                        class="header-basket-list-item-props-item"
                      >
                        <span
                          class="
                            header-basket-list-item-color-badge
                          "
                          style="background: #9e9e9e"
                        >
                        </span>
                        خاکستری
                      </span>
                      <span
                        class="header-basket-list-item-remove"
                      >
                        <i class="mdi mdi-delete"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="js-mini-cart-item">
              <a href="#" class="header-basket-list-item">
                <div class="header-basket-list-item-image">
                  <img
                    src="assets/images/product-slider-2/Huawei-WATCHFIT.jpg"
                    alt="img-slider"
                  />
                </div>
                <div class="header-basket-list-item-content">
                  <h1 class="header-basket-list-item-title">
                    ساعت هوشمند هوآوی مدل WATCH FIT
                  </h1>
                  <span
                    class="header-basket-list-item-shipping-type"
                    >موجود در انبار دیجی‌کلا</span
                  >
                  <div class="header-basket-list-item-footer">
                    <div class="header-basket-list-item-props">
                      <span
                        class="header-basket-list-item-props-item"
                      >
                        ۱ عدد</span
                      >
                      <span
                        class="header-basket-list-item-props-item"
                      >
                        <span
                          class="
                            header-basket-list-item-color-badge
                          "
                          style="background: #00e676"
                        ></span>
                        سبز
                      </span>
                      <span
                        class="header-basket-list-item-remove"
                      >
                        <i class="mdi mdi-delete"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="js-mini-cart-item">
              <a href="#" class="header-basket-list-item">
                <div class="header-basket-list-item-image">
                  <img
                    src="assets/images/product-slider-2/NIGHT-HUNTER.jpg"
                    alt="img-slider"
                  />
                </div>
                <div class="header-basket-list-item-content">
                  <h1 class="header-basket-list-item-title">
                    کامپیوتر دسکتاپ دیویژن مدل NIGHT HUNTER
                  </h1>
                  <span
                    class="header-basket-list-item-shipping-type"
                    >موجود در انبار دیجی‌کلا</span
                  >
                  <div class="header-basket-list-item-footer">
                    <div class="header-basket-list-item-props">
                      <span
                        class="header-basket-list-item-props-item"
                      >
                        ۱ عدد</span
                      >
                      <span
                        class="header-basket-list-item-props-item"
                      >
                        <span
                          class="
                            header-basket-list-item-color-badge
                          "
                          style="background: #000000"
                        ></span>
                        مشکی
                      </span>
                      <span
                        class="header-basket-list-item-remove"
                      >
                        <i class="mdi mdi-delete"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-cart-info-footer">
      <div class="header-cart-info-total">
        <span class="header-cart-info-total-text"
          >مبلغ قابل پرداخت</span
        >
        <p class="header-cart-info-total-amount">
          <span class="header-cart-info-total-amount-number">
            6,200,000</span
          >
          <span> تومان</span>
        </p>
      </div>
      <div>
        <NuxtLink :to="localePath('/checkout/shipping')" class="header-cart-info-submit btn btn-danger">
          ثبت سفارش
        </NuxtLink>
      </div>
    </div>
  </div>
</template>