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
              <Categories :categoryTree="categoryTree" />
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
      <!-- <categories-responsive :categoryTree="categoryTree" :sidebarOpen="sidebarOpen" /> -->

      <nav class="sidebar" 
       :class="sidebarOpen ? 'open' : ''">
        <div class="nav-header">
          <div class="header-cover"></div>  
          <div class="logo-wrap">
            <a class="logo-icon" href="#"
              ><img alt="logo-icon" src="/images/home/BURUX.svg" width="40"
            /></a>
          </div>
        </div>
        <categories-responsive :categoryTree="categoryTree" />
        <!-- <ul class="nav-categories ul-base">
          <li 
           v-for="(cat_lev_1, i) in categoryTree.items"
           :key="i"
           class="has-sub">
            <a :href="'/c/'+cat_lev_1.slug">{{cat_lev_1.name}}</a>
             <ul>
              <li 
               v-for="(cat_lev_2 ,j) in cat_lev_1.items"
               :key="j"
               class="has-sub">
                <a :href="'/c/'+cat_lev_2.slug" class="category-level-2">{{cat_lev_2.name}}</a>
                <ul>
                  <li
                   v-for="(cat_lev_3 ,k) in cat_lev_2.items"
                   :key="k">
                    <a :href="'/c/'+cat_lev_3.slug" class="category-level-3">{{cat_lev_3.name}}</a>
                  </li>
                </ul>
              </li> 
            </ul> 
          </li>
        </ul> -->
      </nav>
      <div class="nav-btn"
       @click="sidebarOpen = !sidebarOpen">
        <span class="linee1"></span>
        <span class="linee2"></span>
        <span class="linee3"></span>
      </div>
      <div class="overlay" :style="{ display: sidebarOpen ? 'block' : 'none' }"></div> 

      <!--    responsive-megamenu-mobile----------------->
    </header>

<!--     <SearchResults
      :visible="isSearchOpen"
      :result="result"
      :term="term"
      @close="closeSearch"
      @removeSearchResults="removeSearchResults"
    />
    <SfOverlay :visible="isSearchOpen" /> -->
  </div>
</template>

<script>
import MiniCartHeader from './Header/MiniCart.vue'
import MiniCartResponsive from './Header/MiniCartResponsive.vue'
import HeaderProfile from './Header/HeaderProfile.vue'
import HeaderProfileResponsive from './Header/HeaderProfileResponsive.vue'
import SearchBox from './Header/SearchBox.vue'
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
import { computed, onMounted, useContext, ref } from '@nuxtjs/composition-api';
import { useCart, useWishlist, productGetters, useFacet, useCategory, facetGetters, useUser, wishlistGetters, useMenus } from '@vue-storefront/spree';
import { useUiHelpers, useUiState } from '~/composables';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
// import cacheControl from './../helpershelpers/cacheControl';
import CategoryPageHeader from '~/components/CategoryPageHeader';
import Categories from './Header/Categories.vue';
import CategoriesResponsive from './Header/CategoriesResponsive.vue'


// TODO(addToCart qty, horizontal): https://github.com/vuestorefront/storefront-ui/issues/1606
export default {
  transition: 'fade',
  // middleware: cacheControl({
  //   'max-age': 60,
  //   'stale-when-revalidate': 5
  // }),
  setup() {
    const th = useUiHelpers();
    const uiState = useUiState();
    const context = useContext();
    const { addItem: addItemToCart, isInCart } = useCart();
    // const { result, search, loading, error } = useFacet();
    const { categories, search, loading, error } = useCategory();
    const { wishlist, addItem: addItemToWishlist, isInWishlist, removeItem: removeItemFromWishlist } = useWishlist();
    const { isAuthenticated } = useUser();
    const { menu, loadMenu } = useMenus('header');
    //const products = computed(() => facetGetters.getProducts(result.value));
    //const breadcrumbs = computed(() => facetGetters.getBreadcrumbs(result.value).map(e => ({...e, link: context.localePath(e.link)})));
    //const pagination = computed(() => facetGetters.getPagination(result.value));
    //const categoryTree = computed(() => facetGetters.getCategoryTree(result.value));
    const { locale } = context.app.i18n;

    const getRoute = (category) => {
      // if (menu.value.isDisabled) {
         return '/c/' + category.slug;
      // }
      //return "";
    };

/*     const activeCategory = computed(() => {
      const items = categoryTree.value.items;

      if (!items || !items.length) {
        return '';
      }

      const category = items.find(({ isCurrent, items }) => isCurrent || items.find(({ isCurrent }) => isCurrent));
      return category?.label || items[0]?.label;
    }); */

    const isWishlistDisabled = computed(() => wishlistGetters.isWishlistDisabled(wishlist.value));
    const categoryTree = computed(() => categories.value.current)


    let sidebarOpen = ref(false)




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
const searchParams = {
  categorySlug: "mhswlt-rwshnyy"
}
    onSSR(async () => {
      await search(searchParams);
      if (error?.value?.search) {
        console.error(error?.value?.search)
      };
    });
    
    return {
      ...uiState,
      th,
      categoryTree,
      //products,
      //categoryTree,
      loading,
      productGetters,
      //pagination,
      //activeCategory,
      //breadcrumbs,
      categories,
      addItemToCart,
      isInWishlist,
      isInCart,
      handleWishlistClick,
      isWishlistDisabled,
      getRoute,
      menu,
      sidebarOpen
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
    LazyHydrate,
    Categories,
    MiniCartHeader,
    MiniCartResponsive,
    HeaderProfile,
    HeaderProfileResponsive,
    SearchBox,
    CategoriesResponsive

  }
};
// let document;
// const sideBar = document.querySelector('sidebar')
// function openSideBar(){
//   sideBar.
//   console.log("sideBar")
//   //sideBar.style.display = "open"
// } 
// debugger

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