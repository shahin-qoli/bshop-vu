<template>
    <div id="category">
        <div class="col-12">
            <div class="header-filters">
                <button class="btn-filter btn-filter-advanced"
                    onclick="document.getElementById('modal-search').style.display='block'">جستجوی پیشرفته</button>
                <button class="btn-filter btn-filter-direction" data-toggle="modal"
                    data-target="#exampleModalCenter">مرتب سازی</button>
                <div class="remodal-search-advanced" id="modal-search">
                    <nav class="remodal-page-layout">
                        <button class="search-filter-remodal-close"
                            onclick="document.getElementById('modal-search').style.display='none'">
                            <i class="fa fa-close"></i>
                        </button>
                        <div class="remodal-page-header">جستجوی پیشرفته </div>
                        <div class="remodal-page-main">
                            <div class="filter-bar">
                                <button class="js-listing-options-clear">پاک کردن همه</button>
                                <!-- <div class="js-box-content-items">
                                <a href="#">
                                    <label for="switch3">
                                        <input type="checkbox" id="switch3" />
                                        <span class="switch">
                                            <h1 class="switch-title">کالاهای موجود </h1>
                                        </span>
                                        <span class="toggle"></span>
                                    </label>
                                </a>
                            </div> -->
                            </div>
                            <div class="remodal-page-content">
                                <div class="filter">
                                    <label for="search" class="profile-edit-label">
                                        <span>جستجو در نتایج</span>
                                        <input type="text" value="" name="searchInput" id="search"
                                            placeholder="نام محصول مورد نظر را بنویسید ...">
                                    </label>
                                </div>
                                <div v-for="(facet, i) in facets" :key="i">
                                    <div class="filter" v-if="facet.label != 'Price'">
                                        <div class="toggle-box">
                                            <div class="toggle-box-active">
                                                <ul>
                                                    <li class="has-sub">
                                                        <a href="#">{{ facet.label }}</a>
                                                        <ul>
                                                            <li v-for="(option,t) in facet.options" :key="t">
                                                                <a href="/c/lights" class="filter-label">
                                                                    <div class="form-auth-row">
                                                                        <label for="remember" class="ui-checkbox">
                                                                            <input type="checkbox" value="1"
                                                                                name="login" id="remember">
                                                                            <span class="ui-checkbox-check"></span>
                                                                        </label>
                                                                        <label for="remember" href="/c/lights"
                                                                            class="remember-me">{{ option.value }}</label>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 305px; margin:20px auto;">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="remodal-header">مرتب‌سازی بر اساس</div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="remodal-list-sort">
                        <ul class="listing-sort nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item"><a class="nav-link" id="news-tab" data-toggle="tab" href="#news"
                                    @click="changesort('-updated_at')" role="tab" aria-controls="news"
                                    aria-selected="false">جدید ترین</a>
                            </li>
                            <li class="nav-item"><a class="nav-link" id="cheapest-tab" data-toggle="tab"
                                    href="#cheapest" @click="changesort('price')" role="tab" aria-controls="cheapest"
                                    aria-selected="false">ارزان ترین</a>
                            </li>
                            <li class="nav-item"><a class="nav-link" id="mostexpensive-tab" data-toggle="tab"
                                    href="#mostexpensive" @click="changesort('-price')" role="tab"
                                    aria-controls="mostexpensive" aria-selected="false">گران ترین</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--        responsive-sidebar----------------------->
        <div class="col-lg-3 col-md-4 col-xs-12 float-right sticky-sidebar">

            <div v-if="haveproduct" class="sidebar-wrapper search-sidebar">

                <div class="box-sidebar">
                    <button class="btn btn-light btn-box-sidebar" type="button" data-toggle="collapse"
                        data-target="#collapseExampleSeller" aria-expanded="false"
                        aria-controls="collapseExampleSeller">
                        <i class="fa fa-chevron-down arrow"></i>فیلتر
                    </button>
                    <div class="collapse show" id="collapseExampleSeller">
                        <div class="catalog" v-for="(facet, i) in facets" :key="i">
                            <template v-if="facet.label != 'Price'">
                                <ul>
                                    <li>
                                        <div style=" font-size:15px; font-family: iranyekan;">{{ facet.label }} : </div>
                                        <label  class="filter-label" v-for="(option,j) in facet.options" :key="j">
                                            <div class="form-auth-row">
                                                <label for="rememberseller1" class="ui-checkbox">
                                                    <input @input="() => selectFilter(facet, option)"
                                                        :checked="isFilterSelected(facet, option)" type="checkbox"
                                                        :value="option.id" name="login" :id="option.value">
                                                    <span class="ui-checkbox-check"></span>
                                                </label>
                                                <label :for="option.value" class="remember-me">{{ option.value }}</label>
                                            </div>
                                        </label>

                                    </li>
                                </ul>
                                <hr />
                            </template>

                        </div>
                        
                    </div>
                </div>

                <!-- <div class="box-sidebar">
                <button class="btn btn-light btn-box-sidebar" type="button">دسته‌بندی </button>
                <div class="catalog" :class="{ 'loading--categories': loading }"
                    :loading="loading">
                    <ul class="catalog-list" v-e2e="'categories-accordion'"
                        :open="activeCategory"
                        :show-chevron="true">
                        <li v-for="(cat, i) in ((menu && menu.items) || (categoryTree && categoryTree.items))"
                            :key="cat.id"
                            :header="cat.name || cat.label"><a :href="localePath(getRoute(cat))" class="catalog-link"><i class="fa fa-angle-left"></i>{{cat.name || cat.label}}</a>
                            <div class="show-more" v-for="(subCat, j) in cat.items"
                            :key="subCat.id" :href="localePath(getRoute(subCat))" >
                            <a :href="localePath(getRoute(subCat))">
                                <span class="catalog-cat-item" :count="subCat.count || ''"
                                :label="subCat.name || subCat.label" :href="localePath(getRoute(subCat))"><i class="fa fa-angle-left" ></i>{{subCat.name || subCat.label}}</span>
                            </a>      
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="box-sidebar">
                <button class="btn btn-light btn-box-sidebar" type="button">
                    جستجو در نتایج:
                </button>
                <form action="#">
                    <input type="text" class="input-sidebar" placeholder="نام محصول یا برند مورد نظر را بنویسید…">

                    <button class="btn-search-sidebar"><img src="assets/images/search.png" alt="search"></button>
                </form>
            </div> -->

                <!-- <div class="box-sidebar">
                <div class="filter-switch">
                    <div class="switch-box">
                        <div class="centered hidden-xs">
                            <div class="card">
                                <a href="#">
                                    <label for="switch1">
                                        <input type="checkbox" id="switch1"><span class="switch">
                                            <h1 class="switch-title">فقط کالای موجود</h1>
                                        </span>
                                        <span class="toggle"></span>
                                    </label>
                                </a>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div> -->


                <!--   adplacement -------------------->
                <!-- <div class="adplacement">
                <div class="col-12 col-lg-12 pull-right" style="padding:0;">
                    <a href="#" class="item-adplacement">
                        <img src="assets/images/post-adplacement/1000012860.jpg" title="صوتی و تصویری" alt="صوتی و تصویری">
                    </a>
                </div>
            </div> -->
                <!--   adplacement -------------------->

            </div>
        </div>
        <div v-if="haveproduct" class="col-lg-9 col-md-8 col-xs-12 pull-left">
            <div class="js-products">
                <div class="listing-listing w-100">
                    <div class="listing-counter">{{ $n(products.length) }} کالا</div>
                    <div class="listing-header">
                        <span class="mdi mdi-sort-variant"></span>
                        <ul class="listing-sort nav nav-tabs" id="myTab2" data-label="مرتب‌سازی بر اساس :">
                            <li class="nav-item"><a class="nav-link"
                                    :class="sortBy.selected == '-updated_at' ? 'active' : ''" href="javascript:void(0)"
                                    @click="changesort('-updated_at')" role="tab" aria-controls="news"
                                    aria-selected="false">جدید ترین</a>
                            </li>
                            <li class="nav-item"><a class="nav-link" :class="sortBy.selected == 'price' ? 'active' : ''"
                                    href="javascript:void(0)" @click="changesort('price')" role="tab"
                                    aria-controls="cheapest" aria-selected="false">ارزان ترین</a>
                            </li>
                            <li class="nav-item"><a class="nav-link"
                                    :class="sortBy.selected == '-price' ? 'active' : ''" href="javascript:void(0)"
                                    @click="changesort('-price')" role="tab" aria-controls="mostexpensive"
                                    aria-selected="false">گران ترین</a>
                            </li>
                        </ul>
                    </div>

                    <!-- <ul class="listing-item"> -->
                    <div  class="tab-content" id="myTabContent">
                        <div  class="tab-pane fade show active" id="mostvisited" role="tabpanel"
                            aria-labelledby="mostvisited-tab">                                               
                            <ul  class="listing-item">
                                <li>
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0"
                                        v-for="(product, i) in products" :key="product.id" :style="{ '--index': i }"
                                        :title="productGetters.getName(product)"
                                        :image="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'" 
                                        :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                                        :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
                                        :is-in-wishlist="isInWishlist({ product })"
                                        :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)">
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : بروکس</span>
                                            </div>

                                            <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                class="promotion-box-image">
                                                <img :src="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'" alt="product">
                                            </a>

                                            <div class="product-box-content">
                                                <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                    class="product-box-title"> {{ productGetters.getName(product) }}</a>
                                            </div>

                                            <div class="product-box-row">
                                                <span
                                                    class="price-value-wrapper">{{ $n(productGetters.getPrice(product).regular) }}
                                                </span>
                                                <span class="price-currency">ریال </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="bestselling" role="tabpanel" aria-labelledby="bestselling-tab">
                            <ul class="listing-item">
                                <li>
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0"
                                        v-for="(product, i) in products" :key="product.id" :style="{ '--index': i }"
                                        :title="productGetters.getName(product)"
                                        :image="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'"
                                        :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                                        :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
                                        :is-in-wishlist="isInWishlist({ product })"
                                        :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)">
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : بروکس</span>
                                            </div>

                                            <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                class="promotion-box-image">
                                                <img :src="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'" alt="product">
                                            </a>

                                            <div class="product-box-content">
                                                <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                    class="product-box-title"> {{ productGetters.getName(product) }}</a>
                                            </div>
                                            <div class="product-box-row">
                                                <span
                                                    class="price-value-wrapper">{{ $n(productGetters.getPrice(product).regular) }}
                                                </span>
                                                <span class="price-currency">ریال </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="mostpopular" role="tabpanel" aria-labelledby="mostpopular-tab">
                            <ul class="listing-item">
                                <li>
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0"
                                        v-for="(product, i) in products" :key="product.id" :style="{ '--index': i }"
                                        :title="productGetters.getName(product)"
                                        :image="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'"
                                        :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                                        :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
                                        :is-in-wishlist="isInWishlist({ product })"
                                        :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)">
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : بروکس</span>
                                            </div>

                                            <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                class="promotion-box-image">
                                                <img :src="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'" alt="product">
                                            </a>

                                            <div class="product-box-content">
                                                <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                    class="product-box-title"> {{ productGetters.getName(product) }}</a>
                                            </div>
                                            <div class="product-box-row">
                                                <span
                                                    class="price-value-wrapper">{{ $n(productGetters.getPrice(product).regular) }}
                                                </span>
                                                <span class="price-currency">ریال </span>
                                            </div>
                                        </div>
                                    </div>


                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
                            <ul class="listing-item">
                                <li>
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0"
                                        v-for="(product, i) in products" :key="product.id" :style="{ '--index': i }"
                                        :title="productGetters.getName(product)"
                                        :image="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'"
                                        :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                                        :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
                                        :is-in-wishlist="isInWishlist({ product })"
                                        :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)">
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : بروکس</span>
                                            </div>

                                            <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                class="promotion-box-image">
                                                <img :src="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'" alt="product">
                                            </a>

                                            <div class="product-box-content">
                                                <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                    class="product-box-title">
                                                    {{ productGetters.getName(product) }}</a>
                                            </div>


                                            <div class="product-box-row">
                                                <span
                                                    class="price-value-wrapper">{{ $n(productGetters.getPrice(product).regular) }}</span>
                                                <span class="price-currency">ریال </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="cheapest" role="tabpanel" aria-labelledby="cheapest-tab">
                            <ul class="listing-item">
                                <li>
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0"
                                        v-for="(product, i) in products" :key="product.id" :style="{ '--index': i }"
                                        :title="productGetters.getName(product)"
                                        :image="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'"
                                        :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                                        :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
                                        :is-in-wishlist="isInWishlist({ product })"
                                        :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)">
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : بروکس</span>
                                            </div>

                                            <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                class="promotion-box-image">
                                                <img :src="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'" alt="product">
                                            </a>

                                            <div class="product-box-content">
                                                <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                    class="product-box-title">
                                                    {{ productGetters.getName(product) }}</a>
                                            </div>


                                            <div class="product-box-row">
                                                <span
                                                    class="price-value-wrapper">{{ $n(productGetters.getPrice(product).regular) }}</span>
                                                <span class="price-currency">ریال </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="mostexpensive" role="tabpanel"
                            aria-labelledby="mostexpensive-tab">
                            <ul class="listing-item">
                                <li>
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0"
                                        v-for="(product, i) in products" :key="product.id" :style="{ '--index': i }"
                                        :title="productGetters.getName(product)"
                                        :image="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'"
                                        :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                                        :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
                                        :is-in-wishlist="isInWishlist({ product })"
                                        :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)">
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : بروکس</span>
                                            </div>

                                            <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                class="promotion-box-image">
                                                <img :src="productGetters.getCoverImage(product) || '/images/product/Panel-18w-min-1.png'" alt="product">
                                            </a>

                                            <div class="product-box-content">
                                                <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                                    class="product-box-title"> {{ productGetters.getName(product) }}</a>
                                            </div>

                                            <div class="product-box-row">
                                                <span
                                                    class="price-value-wrapper">{{ $n(productGetters.getPrice(product).regular) }}
                                                </span>
                                                <span class="price-currency">ریال</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- </ul> -->
                    <div class="pager">
                        <ul class="page-item">

                            <li v-for="(num, i) in pagination.totalPages" :key="i" class="pagination-item">
                                <a href="javascript:void(0)" @click="handlePageClick(i + 1)"
                                    :class="pagination.currentPage === i + 1 ? 'pager-item-active' : ''">
                                    {{ i + 1 }}
                                </a>
                            </li>
                            <li class="pagination-item">
                                <div class="pager-items-partition"></div>
                            </li>
                            <li class="pagination-item"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="col-lg-12 col-md-12 col-xs-12 pull-left">
            <div class="js-products" style="text-align: center;">                                      
                    <img
                    src="/images/product/Frame-75.svg" 
                    width="629"
                    alt="img-slider"
                />  
            </div>
            
            
               
           
            
        </div>
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

    SfLoader,
    SfColor,
    SfProperty
} from '@storefront-ui/vue';
import { ref, computed, onMounted, useContext, useRoute, useRouter, watch, onBeforeMount } from '@nuxtjs/composition-api';
import { useCart, useWishlist, productGetters, useFacet, facetGetters, useUser, wishlistGetters, useMenus } from '@vue-storefront/spree';

import { useUiHelpers, useUiState } from '~/composables';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
import cacheControl from './../helpers/cacheControl';
import CategoryPageHeader from '~/components/CategoryPageHeader';
import FiltersSidebar from '~/components/FiltersSidebar.vue';
import FiltersNew from '~/components/FiltersNew.vue';
import Vue from 'vue';

// TODO(addToCart qty, horizontal): https://github.com/vuestorefront/storefront-ui/issues/1606
export default {
    transition: 'fade',
    middleware: cacheControl({
        'max-age': 60,
        'stale-when-revalidate': 5
    }),
    setup() {
        const th = useUiHelpers();
        const { changeFilters, isFacetColor, isFacetPrice, getSearchPriceFromUrl, getFiltersFromURL } = useUiHelpers();
        const { toggleFilterSidebar, isCategoryGridView, changeToCategoryGridView, changeToCategoryListView, uiState } = useUiState();
        const context = useContext();
        const router = useRouter();
        const route = useRoute()
        const { addItem: addItemToCart, isInCart } = useCart();
        const { result, search, loading, error } = useFacet();
        const { wishlist, addItem: addItemToWishlist, isInWishlist, removeItem: removeItemFromWishlist } = useWishlist();
        const { isAuthenticated } = useUser();
        const { menu, loadMenu } = useMenus('header');
        const products = computed(() => facetGetters.getProducts(result.value));

        const pagination = computed(() => facetGetters.getPagination(result.value));

        const { locale } = context.app.i18n;
        const lengthProduct = products.length
        const sortBy = computed(() => facetGetters.getSortOptions(result.value));

        const haveproduct = computed(() => {
        if (products.value.length<1) {
            return false
        }
        else {
            return true
        }
        });

        const getRoute = (category) => {
            // if (menu.value.isDisabled) {
            return '/c/' + category.slug;
            // }
            //return "";
        };
        const changesort = async (sort) => {
            th.changeSorting(sort)
            // await search(th.getFacetsFromURL());
            if (error?.value?.search) context.app.nuxt.error({ statusCode: 404 });
            setTimeout(() => { location.reload() });
        };
        watch(() => route.query, async () => {
            await search(th.getFacetsFromURL());
            if (error?.value?.search) context.app.nuxt.error({ statusCode: 404 });
        })


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
        const facets = computed(() => facetGetters.getGrouped(result.value, ['color', 'size']));

        const selectedFilters = ref({});
        const setSelectedFilters = () => {
            if (!facets.value.length || Object.keys(selectedFilters.value).length) return;

            selectedFilters.value = facets.value.reduce((prev, curr) => ({
                ...prev,
                [curr.id]: curr.options
                    .filter(o => o.selected)
                    .map(o => o.id)

            }), {});

        };
        const isFilterSelected = (facet, option) => (selectedFilters.value[facet.id] || []).includes(option.id);

        const selectFilter = (facet, option) => {

            if (!selectedFilters.value[facet.id]) {
                Vue.set(selectedFilters.value, facet.id, []);

            }

            if (selectedFilters.value[facet.id].find(f => f === option.id)) {
                selectedFilters.value[facet.id] = selectedFilters.value[facet.id].filter(f => f !== option.id);
                applyFilters();
                return;

            }

            selectedFilters.value[facet.id].push(option.id);
            applyFilters();

        };
        const handlePageClick = (n) => {
            router.push({
                query: {
                    ...route.value.query,
                    page: n
                }
            })
            setTimeout(() => {
                location.reload()
            })
        }
        const clearFilters = () => {
            toggleFilterSidebar();
            selectedFilters.value = {};
            changeFilters(selectedFilters.value);
        };
        const applyFilters = async () => {

            Vue.set(selectedFilters.value, 'price', []);

            changeFilters(selectedFilters.value);
            await search(th.getFacetsFromURL());

        };

        onMounted(async () => {

            await loadMenu({ menuType: 'header', menuName: 'Main menu', locale: locale });
        });
        onBeforeMount(() => {
            const filters = getFiltersFromURL()

            for (const key in filters) {
                Vue.set(selectedFilters.value, key, filters[key])
            }
        })

        onSSR(async () => {
            await search(th.getFacetsFromURL());
            if (error?.value?.search) context.app.nuxt.error({ statusCode: 404 });
        });


        return {
            ...uiState,
            toggleFilterSidebar,
            route,
            th,
            products,
            handlePageClick,
            loading,
            productGetters,
            pagination,
            setSelectedFilters,
            clearFilters,
            applyFilters,
            isFilterSelected,
            selectFilter,
            selectedFilters,
            haveproduct,
            addItemToCart,
            isInWishlist,
            isInCart,
            handleWishlistClick,
            isWishlistDisabled,
            getRoute,
            FiltersNew,
            facets,
            changesort,
            sortBy,




            menu,


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

        SfLoader,
        SfColor,
        SfHeading,
        SfProperty,
        LazyHydrate,
        FiltersSidebar
    }
};

</script>
