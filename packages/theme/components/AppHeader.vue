<template>
  <div>
    <header class="header-main-page">
      <div class="d-block">
        <div>
          <div class="col-lg-8 col-md-8 col-xs-12 pull-right">
            <div class="header-right">
              <div class="logo">
                <a href="/"><img src="/images/home/BURUX.svg" alt="logo" /></a>
              </div>

              <div class="col-lg-8 col-md-12 col-xs-12 pull-right">
                <Search-Box />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-xs-12 pull-left">
            <div class="header-left">
              <Mini-Cart-Header />
              <div></div>
              <Header-Profile />
              <!-- Example single danger button -->
              <!-- responsive header-->
              <div class="responsive-header-left">

                <MiniCartResponsive />
                <Header-Profile-Responsive />
                <button class="question-faq">
                  <span class="fa fa-question-circle-o"></span>
                </button>
              </div>
              <!-- responsive header-->
            </div>
          </div>
        </div>
        <!-- Start megamenu-->
        <nav class="main-menu">
          <ul class="new-list-menu">
            <li class="item-list-menu megamenu-1 category nav-overlay">
              <a
                href="#"
                class="list-category first after"
                style="font-weight: bold"
              >
                <i class="mdi mdi-menu"></i>
                دسته بندی محصولات
              </a>
              <Categories />
            </li>
            <li class="item-list-menu megamenu-1">
              <a href="#" class="list-category first after">
                <i class="mdi mdi-plus-outline text-primary"></i>
                ویزیتور هستید
              </a>
            </li>
            <li class="item-list-menu megamenu-1 item-set">
              <a href="#" class="list-category first after">فروشگاه الکتریکی دارید؟</a>
            </li>
            <li class="item-list-menu megamenu-1 item-set">
              <a href="#" class="list-category first after">فروش سازمانی</a>
            </li>
            <li class="map-city-item">
              <a href="#" class="map-city"
                >لطفا شهر و استان خود را انتخاب کنید
                <span class="mdi mdi-map-marker-outline"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!--        End megamenu------------------->

      <!--    responsive-megamenu-mobile----------------->
      <nav class="sidebar">
        <div class="nav-header">
          <div class="header-cover"></div>
          <div class="logo-wrap">
            <a class="logo-icon" href="#"
              ><img alt="logo-icon" src="assets/images/logo.png" width="40"
            /></a>
          </div>
        </div>
        <ul class="nav-categories ul-base">
          <li class="has-sub">
            <a href="#">کالای دیجیتال</a>
            <ul>
              <li class="has-sub">
                <a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3">کیف و کاور گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >پاور بانک(شارژر همراه)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">پایه نگهدارنده گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">گوشی موبایل</a>
                <ul>
                  <li><a href="#" class="category-level-3">سامسونگ</a></li>
                  <li><a href="#" class="category-level-3">هوآوی</a></li>
                  <li><a href="#" class="category-level-3">اپل</a></li>
                  <li><a href="#" class="category-level-3">شیائومی</a></li>
                  <li><a href="#" class="category-level-3">آنر</a></li>
                  <li><a href="#" class="category-level-3">نوکیا</a></li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">دوربین</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین عکاسی دیجیتال</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین ورزشی و فیلم برداری</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">دوربین چاپ سریع</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="#">آرایشی، بهداشتی و سلامت</a>
            <ul>
              <li class="has-sub">
                <a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3">کیف و کاور گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >پاور بانک(شارژر همراه)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">پایه نگهدارنده گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">گوشی موبایل</a>
                <ul>
                  <li><a href="#" class="category-level-3">سامسونگ</a></li>
                  <li><a href="#" class="category-level-3">هوآوی</a></li>
                  <li><a href="#" class="category-level-3">اپل</a></li>
                  <li><a href="#" class="category-level-3">شیائومی</a></li>
                  <li><a href="#" class="category-level-3">آنر</a></li>
                  <li><a href="#" class="category-level-3">نوکیا</a></li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">دوربین</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین عکاسی دیجیتال</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین ورزشی و فیلم برداری</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">دوربین چاپ سریع</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="#">خودرو ، ابزار اداری</a>
            <ul>
              <li class="has-sub">
                <a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3">کیف و کاور گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >پاور بانک(شارژر همراه)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">پایه نگهدارنده گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">گوشی موبایل</a>
                <ul>
                  <li><a href="#" class="category-level-3">سامسونگ</a></li>
                  <li><a href="#" class="category-level-3">هوآوی</a></li>
                  <li><a href="#" class="category-level-3">اپل</a></li>
                  <li><a href="#" class="category-level-3">شیائومی</a></li>
                  <li><a href="#" class="category-level-3">آنر</a></li>
                  <li><a href="#" class="category-level-3">نوکیا</a></li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">دوربین</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین عکاسی دیجیتال</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین ورزشی و فیلم برداری</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">دوربین چاپ سریع</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="#">مد پوشاک</a>
            <ul>
              <li class="has-sub">
                <a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3">کیف و کاور گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >پاور بانک(شارژر همراه)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">پایه نگهدارنده گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">گوشی موبایل</a>
                <ul>
                  <li><a href="#" class="category-level-3">سامسونگ</a></li>
                  <li><a href="#" class="category-level-3">هوآوی</a></li>
                  <li><a href="#" class="category-level-3">اپل</a></li>
                  <li><a href="#" class="category-level-3">شیائومی</a></li>
                  <li><a href="#" class="category-level-3">آنر</a></li>
                  <li><a href="#" class="category-level-3">نوکیا</a></li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">دوربین</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین عکاسی دیجیتال</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین ورزشی و فیلم برداری</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">دوربین چاپ سریع</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="#">خانه آشپزخانه</a>
            <ul>
              <li class="has-sub">
                <a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3">کیف و کاور گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >پاور بانک(شارژر همراه)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">پایه نگهدارنده گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">گوشی موبایل</a>
                <ul>
                  <li><a href="#" class="category-level-3">سامسونگ</a></li>
                  <li><a href="#" class="category-level-3">هوآوی</a></li>
                  <li><a href="#" class="category-level-3">اپل</a></li>
                  <li><a href="#" class="category-level-3">شیائومی</a></li>
                  <li><a href="#" class="category-level-3">آنر</a></li>
                  <li><a href="#" class="category-level-3">نوکیا</a></li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">دوربین</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین عکاسی دیجیتال</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین ورزشی و فیلم برداری</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">دوربین چاپ سریع</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="#">کتاب، لوازم تحریر</a>
            <ul>
              <li class="has-sub">
                <a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3">کیف و کاور گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >پاور بانک(شارژر همراه)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">پایه نگهدارنده گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">گوشی موبایل</a>
                <ul>
                  <li><a href="#" class="category-level-3">سامسونگ</a></li>
                  <li><a href="#" class="category-level-3">هوآوی</a></li>
                  <li><a href="#" class="category-level-3">اپل</a></li>
                  <li><a href="#" class="category-level-3">شیائومی</a></li>
                  <li><a href="#" class="category-level-3">آنر</a></li>
                  <li><a href="#" class="category-level-3">نوکیا</a></li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">دوربین</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین عکاسی دیجیتال</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین ورزشی و فیلم برداری</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">دوربین چاپ سریع</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="has-sub">
            <a href="#">اسباب بازی ، کودک نوزاد</a>
            <ul>
              <li class="has-sub">
                <a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3">کیف و کاور گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >پاور بانک(شارژر همراه)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">پایه نگهدارنده گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">گوشی موبایل</a>
                <ul>
                  <li><a href="#" class="category-level-3">سامسونگ</a></li>
                  <li><a href="#" class="category-level-3">هوآوی</a></li>
                  <li><a href="#" class="category-level-3">اپل</a></li>
                  <li><a href="#" class="category-level-3">شیائومی</a></li>
                  <li><a href="#" class="category-level-3">آنر</a></li>
                  <li><a href="#" class="category-level-3">نوکیا</a></li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">دوربین</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین عکاسی دیجیتال</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین ورزشی و فیلم برداری</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">دوربین چاپ سریع</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="#">ورزش و سفر</a>
            <ul>
              <li class="has-sub">
                <a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3">کیف و کاور گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >پاور بانک(شارژر همراه)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">پایه نگهدارنده گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">گوشی موبایل</a>
                <ul>
                  <li><a href="#" class="category-level-3">سامسونگ</a></li>
                  <li><a href="#" class="category-level-3">هوآوی</a></li>
                  <li><a href="#" class="category-level-3">اپل</a></li>
                  <li><a href="#" class="category-level-3">شیائومی</a></li>
                  <li><a href="#" class="category-level-3">آنر</a></li>
                  <li><a href="#" class="category-level-3">نوکیا</a></li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">دوربین</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین عکاسی دیجیتال</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین ورزشی و فیلم برداری</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">دوربین چاپ سریع</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="#">خوردنی و آشامیدنی</a>
            <ul>
              <li class="has-sub">
                <a href="#" class="category-level-2">لوازم جانبی گوشی</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3">کیف و کاور گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >پاور بانک(شارژر همراه)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">پایه نگهدارنده گوشی</a>
                  </li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">گوشی موبایل</a>
                <ul>
                  <li><a href="#" class="category-level-3">سامسونگ</a></li>
                  <li><a href="#" class="category-level-3">هوآوی</a></li>
                  <li><a href="#" class="category-level-3">اپل</a></li>
                  <li><a href="#" class="category-level-3">شیائومی</a></li>
                  <li><a href="#" class="category-level-3">آنر</a></li>
                  <li><a href="#" class="category-level-3">نوکیا</a></li>
                  <li>
                    <a href="#" class="category-level-3">همه موارد این دسته</a>
                  </li>
                </ul>
              </li>
              <li class="has-sub">
                <a href="#" class="category-level-2">دوربین</a>
                <ul>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین عکاسی دیجیتال</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3"
                      >دوربین ورزشی و فیلم برداری</a
                    >
                  </li>
                  <li>
                    <a href="#" class="category-level-3">دوربین چاپ سریع</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <a href="#">پیشنهاد ها و تخفیف ها</a>
            <ul>
              <li>
                <a href="#" class="category-level-2">کالاهای شگفت انگیز</a>
              </li>
              <li><a href="#" class="category-level-2">فروش ویژه</a></li>
              <li>
                <a href="#" class="category-level-2">با هر خرید هدیه بگیرید</a>
              </li>
              <li><a href="#" class="category-level-2">تخفیف پایان فصل</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="nav-btn">
        <span class="linee1"></span>
        <span class="linee2"></span>
        <span class="linee3"></span>
      </div>
      <div class="overlay"></div>
      <!--    responsive-megamenu-mobile----------------->
    </header>
    <SfHeader
      v-if="false"
      class="sf-header--has-mobile-search"
      :class="{'header-on-top': isSearchOpen}"
      :isNavVisible="isMobileMenuOpen"
    >
      <!-- TODO: add mobile view buttons after SFUI team PR -->
      <template #logo>
        <a :href="localePath('/')" class="sf-header__logo">
          <SfImage src="/icons/logo.svg" alt="Vue Storefront Next" class="sf-header__logo-image"/>
        </a>
      </template>
      <template #navigation>
        <HeaderNavigation :isMobile="isMobile" />
      </template>
      <template #aside>
        <LocaleSelector class="smartphone-only" />
      </template>
      <template #header-icons>
        <div v-e2e="'header-icons'" class="sf-header__icons">
          <SfButton
            class="sf-button--pure sf-header__action"
            aria-label="Open account button"
            @click="handleAccountClick"
          >
            <SfIcon
              :icon="accountIcon"
              size="1.25rem"
            />
          </SfButton>
          <SfButton
            v-if="!isWishlistDisabled"
            class="sf-button--pure sf-header__action"
            aria-label="Toggle wishlist sidebar"
            @click="toggleWishlistSidebar"
          >
            <SfIcon
              class="sf-header__icon"
              icon="heart"
              size="1.25rem"
            />
            <SfBadge v-if="wishlistTotalItems > 0" class="sf-badge--number">{{wishlistTotalItems}}</SfBadge>
          </SfButton>
          <SfButton
            class="sf-button--pure sf-header__action"
            aria-label="Toggle cart sidebar"
            @click="toggleCartSidebar"
          >
            <SfIcon
              class="sf-header__icon"
              icon="empty_cart"
              size="1.25rem"
            />
            <SfBadge v-if="cartTotalItems > 0" class="sf-badge--number">{{cartTotalItems}}</SfBadge>
          </SfButton>
        </div>
      </template>
      <template #search>
        <SfSearchBar
          ref="searchBarRef"
          :placeholder="$t('Search for items')"
          aria-label="Search"
          class="sf-header__search"
          :value="term"
          @input="handleSearch"
          @keydown.enter="handleSearch($event)"
          @focus="isSearchOpen = true"
          @keydown.esc="closeSearch"
          v-click-outside="closeSearch"
        >
          <template #icon>
            <SfButton
              v-if="!!term"
              aria-label="Close search"
              class="sf-search-bar__button sf-button--pure"
              @click="closeOrFocusSearchBar"
            >
              <span class="sf-search-bar__icon">
                <SfIcon color="var(--c-text)" size="18px" icon="cross" />
              </span>
            </SfButton>
            <SfButton
              v-else
              aria-label="Open search"
              class="sf-search-bar__button sf-button--pure"
              @click="isSearchOpen ? isSearchOpen = false : isSearchOpen = true"
            >
              <span class="sf-search-bar__icon">
                <SfIcon color="var(--c-text)" size="20px" icon="search" />
              </span>
            </SfButton>
          </template>
        </SfSearchBar>
      </template>
    </SfHeader>
    <SearchResults
      :visible="isSearchOpen"
      :result="result"
      :term="term"
      @close="closeSearch"
      @removeSearchResults="removeSearchResults"
    />
    <SfOverlay :visible="isSearchOpen" />
  </div>
</template>

<script>
import {
  SfSidebar,
  SfButton,
  SfList,
  SfIcon,
  SfHeading,
  SfMenuItem,
  SfFilter,
  SfProductCard,
  SfProductCardHorizontal,
  SfPagination,
  SfAccordion,
  SfSelect,
  SfBreadcrumbs,
  SfLoader,
  SfColor,
  SfProperty
} from '@storefront-ui/vue';
import { computed, onMounted, useContext } from '@nuxtjs/composition-api';
import { useCart, useWishlist, productGetters, useFacet, facetGetters, useUser, wishlistGetters, useMenus } from '@vue-storefront/spree';
import { useUiHelpers, useUiState } from '~/composables';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
import cacheControl from './../helpers/cacheControl';
import CategoryPageHeader from '~/components/CategoryPageHeader';

// TODO(addToCart qty, horizontal): https://github.com/vuestorefront/storefront-ui/issues/1606
export default {
  transition: 'fade',
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
  setup() {
    const th = useUiHelpers();
    const uiState = useUiState();
    const context = useContext();
    const { addItem: addItemToCart, isInCart } = useCart();
    const { result, search, loading, error } = useFacet();
    const { wishlist, addItem: addItemToWishlist, isInWishlist, removeItem: removeItemFromWishlist } = useWishlist();
    const { isAuthenticated } = useUser();
    const { menu, loadMenu } = useMenus('header');
    const products = computed(() => facetGetters.getProducts(result.value));
    const breadcrumbs = computed(() => facetGetters.getBreadcrumbs(result.value).map(e => ({...e, link: context.localePath(e.link)})));
    const pagination = computed(() => facetGetters.getPagination(result.value));
    const categoryTree = computed(() => facetGetters.getCategoryTree(result.value));
    const { locale } = context.app.i18n;

    const getRoute = (category) => {
      // if (menu.value.isDisabled) {
         return '/c/' + category.slug;
      // }
      //return "";
    };

    const activeCategory = computed(() => {
      const items = categoryTree.value.items;

      if (!items || !items.length) {
        return '';
      }

      const category = items.find(({ isCurrent, items }) => isCurrent || items.find(({ isCurrent }) => isCurrent));
      return category?.label || items[0]?.label;
    });

    const isWishlistDisabled = computed(() => wishlistGetters.isWishlistDisabled(wishlist.value));

    const handleWishlistClick = async (product) => {
      if (!isAuthenticated.value) {
        uiState.toggleLoginModal();
      } else if (!isInWishlist({ product })) {
        await addItemToWishlist({ product });
      } else {
        await removeItemFromWishlist({ product });
      }
    };

    onMounted(async () => {
      await loadMenu({menuType: 'header', menuName: 'Main menu', locale: locale});
    });

    onSSR(async () => {
      await search(th.getFacetsFromURL());
      if (error?.value?.search) context.app.nuxt.error;
    });
    return {
      ...uiState,
      th,
      products,
      categoryTree,
      loading,
      productGetters,
      pagination,
      activeCategory,
      breadcrumbs,
      addItemToCart,
      isInWishlist,
      isInCart,
      handleWishlistClick,
      isWishlistDisabled,
      getRoute,
      menu
    };
  },
  components: {
    CategoryPageHeader,
    SfButton,
    SfSidebar,
    SfIcon,
    SfList,
    SfFilter,
    SfProductCard,
    SfProductCardHorizontal,
    SfPagination,
    SfMenuItem,
    SfAccordion,
    SfSelect,
    SfBreadcrumbs,
    SfLoader,
    SfColor,
    SfHeading,
    SfProperty,
    LazyHydrate
  }
};
</script>

<style lang="scss" scoped>
.sf-header {
  --header-padding:  var(--spacer-sm);
  @include for-desktop {
    --header-padding: 0;
  }
  &__logo-image {
    height: 100%;
  }
}
.header-on-top {
  z-index: 2;
}
.nav-item {
  --header-navigation-item-margin: 0 var(--spacer-base);
  .sf-header-navigation-item__item--mobile {
    display: none;
  }
}

.sf-badge {
  position: absolute;
  bottom: 40%;
  left: 40%;
}
</style>
