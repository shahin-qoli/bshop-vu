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
import MiniCartHeader from './Header/MiniCart.vue'
import MiniCartResponsive from './Header/MiniCartResponsive.vue'
import Categories from './Header/Categories.vue'
import HeaderProfile from './Header/HeaderProfile.vue'
import HeaderProfileResponsive from './Header/HeaderProfileResponsive.vue'
import SearchBox from './Header/SearchBox.vue'
import { SfHeader, SfImage, SfIcon, SfButton, SfBadge, SfSearchBar, SfOverlay } from '@storefront-ui/vue';
import { useUiState } from '~/composables';
import { useCart, useFacet, useUser, cartGetters, useWishlist, wishlistGetters } from '@vue-storefront/spree';
import { computed, ref, watch, onBeforeUnmount, useRouter } from '@nuxtjs/composition-api';
import { useUiHelpers } from '~/composables';
import LocaleSelector from './LocaleSelector';
import SearchResults from '~/components/SearchResults';
import HeaderNavigation from './HeaderNavigation';
import { clickOutside } from '@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js';
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
import debounce from 'lodash.debounce';

export default {
  components: {
    MiniCartHeader,
    MiniCartResponsive,
    Categories,
    HeaderProfile,
    HeaderProfileResponsive,
    SearchBox,
    SfHeader,
    SfImage,
    LocaleSelector,
    SfIcon,
    SfButton,
    SfBadge,
    SfSearchBar,
    SearchResults,
    SfOverlay,
    HeaderNavigation
  },
  directives: { clickOutside },
  setup(props, { root }) {
    const router = useRouter();
    const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal, isMobileMenuOpen } = useUiState();
    const { setTermForUrl, getFacetsFromURL } = useUiHelpers();
    const { isAuthenticated } = useUser();
    const { result: searchResult, search } = useFacet('searchResults');
    const { cart } = useCart();
    const { wishlist } = useWishlist();
    const term = ref(getFacetsFromURL().phrase);
    const isSearchOpen = ref(false);
    const searchBarRef = ref(null);
    const isMobile = computed(mapMobileObserver().isMobile);

    const result = computed(() => searchResult.value?.data);
    const cartTotalItems = computed(() => cartGetters.getTotalItems(cart.value));
    const wishlistTotalItems = computed(() => wishlistGetters.getTotalItems(wishlist.value));

    const accountIcon = computed(() => isAuthenticated.value ? 'profile_fill' : 'profile');
    const isWishlistDisabled = computed(() => wishlistGetters.isWishlistDisabled(wishlist.value));

    // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4927
    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        const localeAccountPath = root.localePath({ name: 'my-account' });
        return router.push(localeAccountPath);
      }

      toggleLoginModal();
    };

    const closeSearch = () => {
      const wishlistClassName = 'sf-product-card__wishlist-icon';
      const isWishlistIconClicked = event.path.find(p => wishlistClassName.search(p.className) > 0);
      if (isWishlistIconClicked || !isSearchOpen.value) return;

      term.value = '';
      isSearchOpen.value = false;
    };

    const handleSearch = debounce(async (paramValue) => {
      if (!paramValue.target) {
        term.value = paramValue;
      } else {
        term.value = paramValue.target.value;
      }
      await search({ term: term.value });
    }, 1000);

    const closeOrFocusSearchBar = () => {
      if (isMobile.value) {
        return closeSearch();
      } else {
        term.value = '';
        return searchBarRef.value.$el.children[0].focus();
      }
    };

    watch(() => term.value, (newVal, oldVal) => {
      const shouldSearchBeOpened = (!isMobile.value && term.value.length > 0) && ((!oldVal && newVal) || (newVal.length !== oldVal.length && isSearchOpen.value === false));
      if (shouldSearchBeOpened) {
        isSearchOpen.value = true;
      }
    });

    const removeSearchResults = () => {};

    onBeforeUnmount(() => {
      unMapMobileObserver();
    });

    return {
      accountIcon,
      cartTotalItems,
      wishlistTotalItems,
      handleAccountClick,
      toggleCartSidebar,
      toggleWishlistSidebar,
      setTermForUrl,
      term,
      isSearchOpen,
      closeSearch,
      handleSearch,
      result,
      closeOrFocusSearchBar,
      searchBarRef,
      isMobile,
      isMobileMenuOpen,
      removeSearchResults,
      isWishlistDisabled
    };
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
