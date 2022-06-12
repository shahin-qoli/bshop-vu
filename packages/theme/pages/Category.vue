<template>
  <div id="category">
        <div class="col-12">
        <div class="header-filters">
            <button class="btn-filter btn-filter-advanced"
                onclick="document.getElementById('modal-search').style.display='block'">جستجوی پیشرفته</button>
            <button class="btn-filter btn-filter-direction" data-toggle="modal"
                data-target="#exampleModalCenter">پربازدیدترین</button>
            <div class="remodal-search-advanced" id="modal-search">
                <nav class="remodal-page-layout">
                    <button class="search-filter-remodal-close"
                        onclick="document.getElementById('modal-search').style.display='none'">
                        <i class="fa fa-close"></i>
                    </button>
                    <div class="remodal-page-header">لوازم جانبی </div>
                    <div class="remodal-page-main">
                        <div class="filter-bar">
                            <button class="js-listing-options-clear">پاک کردن همه</button>
                            <div class="js-box-content-items">
                                <a href="#">
                                    <label for="switch3">
                                        <input type="checkbox" id="switch3" />
                                        <span class="switch">
                                            <h1 class="switch-title">کالاهای موجود </h1>
                                        </span>
                                        <span class="toggle"></span>
                                    </label>
                                </a>
                            </div>
                        </div>
                        <div class="remodal-page-content">
                            <div class="filter">
                                <label for="search" class="profile-edit-label">
                                    <span>جستجو در نتایج</span>
                                    <input type="text" value="" name="searchInput" id="search"
                                        placeholder="نام محصول مورد نظر را بنویسید ...">
                                </label>
                            </div>

                            <div class="filter">
                                <a href="#">
                                    <label for="switch4">
                                        <input type="checkbox" id="switch4" />
                                        <span class="switch"></span>
                                            <h1 class="switch-title">فقط کالاهای اصل </h1>
                                        <span class="toggle"></span>
                                    </label>
                                </a>
                            </div>

                            <div class="filter">
                                <a href="#">
                                    <label for="switch5">
                                        <input type="checkbox" id="switch5" /><span class="switch"></span>
                                        <h1 class="switch-title">فقط کالاهای آماده ارسال</h1>
                                        <span class="toggle"></span>
                                    </label>
                                </a>
                            </div>

                            <div class="filter">
                                <div class="toggle-box">
                                    <div class="toggle-box-active">
                                        <ul>
                                            <li class="has-sub">
                                                <a href="#">برند</a>
                                                <ul>
                                                    <li>
                                                        <a href="/c/lights" class="filter-label">
                                                            <div class="form-auth-row">
                                                                <label for="remember" class="ui-checkbox">
                                                                    <input type="checkbox" value="1" name="login"
                                                                        id="remember">
                                                                    <span class="ui-checkbox-check"></span>
                                                                </label>
                                                                <label for="remember" href="/c/lights"
                                                                    class="remember-me">بروکس</label>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="filter">
                                <div class="toggle-box">
                                    <div class="toggle-box-active">
                                        <ul>
                                            <li class="has-sub">
                                                <a href="#">فروشنده</a>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="filter-label">
                                                            <div class="form-auth-row">
                                                                <label for="remember" class="ui-checkbox">
                                                                    <input type="checkbox" value="1" name="login"
                                                                        id="remember">
                                                                    <span class="ui-checkbox-check"></span>
                                                                </label>
                                                                <label for="remember"
                                                                    class="remember-me">بروکس</label>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" class="filter-label">
                                                            <div class="form-auth-row">
                                                                <label for="remember" class="ui-checkbox">
                                                                    <input type="checkbox" value="1" name="login"
                                                                        id="remember">
                                                                    <span class="ui-checkbox-check"></span>
                                                                </label>
                                                                <label for="remember"
                                                                    class="remember-me">بروکس</label>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="filter-label">
                                                            <div class="form-auth-row">
                                                                <label for="remember" class="ui-checkbox">
                                                                    <input type="checkbox" value="1" name="login"
                                                                        id="remember">
                                                                    <span class="ui-checkbox-check"></span>
                                                                </label>
                                                                <label for="remember"
                                                                    class="remember-me">بروکس</label>
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
                    <ul class="listing-sort nav nav-tabs" id="myTab" role="tablist" data-label="مرتب‌سازی بر اساس :">
                        <li class="listing-active nav-item"><a class="nav-link active" id="mostvisited-tab"
                                data-toggle="tab" href="#mostvisited" role="tab" aria-controls="mostvisited"
                                aria-selected="true">پربازدید ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="bestselling-tab" data-toggle="tab"
                                href="#bestselling" role="tab" aria-controls="bestselling" aria-selected="false">پرفروش
                                ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="mostpopular-tab" data-toggle="tab"
                                href="#mostpopular" role="tab" aria-controls="mostpopular" aria-selected="false">محبوب
                                ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="news-tab" data-toggle="tab" href="#news" role="tab"
                                aria-controls="news" aria-selected="false">جدید ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="cheapest-tab" data-toggle="tab" href="#cheapest"
                                role="tab" aria-controls="cheapest" aria-selected="false">ارزان ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="mostexpensive-tab" data-toggle="tab"
                                href="#mostexpensive" role="tab" aria-controls="mostexpensive"
                                aria-selected="false">گران ترین</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--        responsive-sidebar----------------------->
    <div class="col-lg-3 col-md-4 col-xs-12 float-right sticky-sidebar">
        <div class="sidebar-wrapper search-sidebar">
            <div class="box-sidebar">
                <button  @click="toggleFilterSidebar" class="btn btn-light btn-box-sidebar" type="button" data-toggle="collapse"
                    data-target="#collapseExamplebrand" aria-expanded="false" aria-controls="collapseExamplebrand">
                    <i class="fa fa-chevron-down arrow" ></i>برند
                </button>
                <div class="collapse" id="collapseExamplebrand">
                    <div class="catalog">
                        
                        <form action="#">
                            
                            <input type="text" class="input-sidebar"
                                placeholder="نام محصول یا برند مورد نظر را بنویسید…">
                            <button class="btn-search-sidebar"><img
                                        src="assets/images/search.png" alt="search"></button>
                        </form>
                        <ul>
                            <li>
                                <a href="/c/lights" class="filter-label">
                                    <div class="form-auth-row">
                                        <label for="remembersumsung" class="ui-checkbox">
                                            <input type="checkbox" value="1" name="login" id="remembersumsung">
                                            <span class="ui-checkbox-check"></span>
                                        </label>
                                        <label for="rememberBurux" class="remember-me">بروکس</label>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="box-sidebar">
                <button class="btn btn-light btn-box-sidebar" type="button">دسته‌بندی </button>
                <div class="catalog" :class="{ 'loading--categories': loading }"
                    :loading="loading">
                    <ul class="catalog-list" v-e2e="'categories-accordion'"
                        :open="activeCategory"
                        :show-chevron="true">
                        <li v-for="(cat, i) in ((menu && menu.items) || (categoryTree && categoryTree.items))"
                            :key="i"
                            :header="cat.name || cat.label"><a :href="localePath(getRoute(cat))" class="catalog-link"><i class="fa fa-angle-left"></i>{{cat.name || cat.label}}</a>
                            <div class="show-more" v-for="(subCat, j) in cat.items"
                            :key="j" :href="localePath(getRoute(subCat))" >
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
            </div>
            <div class="box-sidebar">
                <button class="btn btn-light btn-box-sidebar" type="button" data-toggle="collapse"
                data-target="#collapseExampleSeller" aria-expanded="false" aria-controls="collapseExampleSeller">
                <i class="fa fa-chevron-down arrow"></i>فروشنده
                </button>
                <div class="collapse show" id="collapseExampleSeller">
                    <div class="catalog">
                        <ul>
                            <li>
                                <a href="#" class="filter-label">
                                    <div class="form-auth-row">
                                        <label for="rememberseller1" class="ui-checkbox">
                                            <input type="checkbox" value="1" name="login" id="rememberseller1">
                                            <span class="ui-checkbox-check"></span>
                                        </label>
                                        <label for="rememberseller1" class="remember-me">بروکس</label>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="box-sidebar">
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
            </div>

            <div class="box-sidebar">
                <div class="filter-switch">
                    <div class="switch-box">
                        <div class="centered hidden-xs">
                            <div class="card">
                                <a href="#">
                                    <label for="switch2">
                                        <input type="checkbox" id="switch2"><span class="switch">
                                            <h1 class="switch-title">فقط کالای آماده ارسال</h1>
                                        </span>
                                        <span class="toggle"></span>
                                    </label>
                                </a>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <!--   adplacement -------------------->
            <div class="adplacement">
                <div class="col-12 col-lg-12 pull-right" style="padding:0;">
                    <a href="#" class="item-adplacement">
                        <img src="assets/images/post-adplacement/1000012860.jpg" title="صوتی و تصویری" alt="صوتی و تصویری">
                    </a>
                </div>
            </div>
            <!--   adplacement -------------------->

        </div>
    </div>
    <div class="col-lg-9 col-md-8 col-xs-12 pull-left">
        <div class="js-products">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <SfBreadcrumbs
                      class="breadcrumb-item"
                      :breadcrumbs="breadcrumbs"
                      />
                    
                </ol>
            </nav>

            <div class="listing-listing">
                <div class="listing-counter">۱۹۲,۷۳۲ کالا</div>
                <div class="listing-header">
                    <span class="mdi mdi-sort-variant"></span>
                    <ul class="listing-sort nav nav-tabs" id="myTab2" role="tablist" data-label="مرتب‌سازی بر اساس :">
                        <li class="listing-active nav-item"><a class="nav-link active" id="mostvisited-tab"
                                data-toggle="tab" href="#mostvisited" role="tab" aria-controls="mostvisited"
                                aria-selected="true">پربازدید ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="bestselling-tab" data-toggle="tab"
                                href="#bestselling" role="tab" aria-controls="bestselling" aria-selected="false">پرفروش
                                ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="mostpopular-tab" data-toggle="tab"
                                href="#mostpopular" role="tab" aria-controls="mostpopular" aria-selected="false">محبوب
                                ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="news-tab" data-toggle="tab" href="#news" role="tab"
                                aria-controls="news" aria-selected="false">جدید ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="cheapest-tab" data-toggle="tab" href="#cheapest"
                                role="tab" aria-controls="cheapest" aria-selected="false">ارزان ترین</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="mostexpensive-tab" data-toggle="tab"
                                href="#mostexpensive" role="tab" aria-controls="mostexpensive"
                                aria-selected="false">گران ترین</a>
                        </li>
                    </ul>
                </div>

                <!-- <ul class="listing-item"> -->
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="mostvisited" role="tabpanel"
                            aria-labelledby="mostvisited-tab">
                            <ul class="listing-item">
                                <li
                                > 
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0"
                                             v-for="(product, i) in products"
                                            :key="productGetters.getSlug(product)"
                                            :style="{ '--index': i }"
                                            :title="productGetters.getName(product)"
                                            
                                            :image="productGetters.getCoverImage(product)"
                                            :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                                            :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
                                            :is-in-wishlist="isInWishlist({ product })"
                                            :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                    >
                                        <div 
                                            class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : بروکس</span>
                                            </div>
    
                                            <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)" class="promotion-box-image">
                                                <img :src="productGetters.getCoverImage(product)" alt="product">
                                            </a>
    
                                            <div class="product-box-content">
                                                <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)" class="product-box-title"> {{productGetters.getName(product)}}</a>
                                            </div>
    
                                            <div class="product-box-rate">
                                                
    
                                                <div class="product-star mb-3">
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                </div>
                                            </div>
    
                                            <div class="product-box-row">
                                                <span class="price-value-wrapper">{{$n(productGetters.getPrice(product).regular)}} </span>
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
                                            v-for="(product, i) in products"
                                            :key="productGetters.getSlug(product)"
                                            :style="{ '--index': i }"
                                            :title="productGetters.getName(product)"
                                            
                                            :image="productGetters.getCoverImage(product)"
                                            :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                                            :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
                                            :is-in-wishlist="isInWishlist({ product })"
                                            :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                    >
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : بروکس</span>
                                            </div>
    
                                           <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)" class="promotion-box-image">
                                                <img :src="productGetters.getCoverImage(product)" alt="product">
                                            </a>
    
                                            <div class="product-box-content">
                                                <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)" class="product-box-title"> {{productGetters.getName(product)}}</a>
                                            </div>
    
                                            <div class="product-box-rate">
                                               
    
                                                <div class="product-star mb-3">
                                                     <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                </div>
                                            </div>
    
                                            <div class="product-box-row">
                                                <span class="price-value-wrapper">{{$n(productGetters.getPrice(product).regular)}} </span>
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
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0" v-for="(product, i) in products"
                                            :key="productGetters.getSlug(product)"
                                            :style="{ '--index': i }"
                                            :title="productGetters.getName(product)"
                                            
                                            :image="productGetters.getCoverImage(product)"
                                            :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                                            :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
                                            :is-in-wishlist="isInWishlist({ product })"
                                            :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
                                    >
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : بروکس</span>
                                            </div>
    
                                             <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)" class="promotion-box-image">
                                                <img :src="productGetters.getCoverImage(product)" alt="product">
                                            </a>
    
                                            <div class="product-box-content">
                                                <a :href="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)" class="product-box-title"> {{productGetters.getName(product)}}</a>
                                            </div>
    
                                            <div class="product-box-rate">
                                               
    
                                                <div class="product-star mb-3">
                                                     <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                </div>
                                            </div>
    
                                            <div class="product-box-row">
                                                <span class="price-value-wrapper">{{$n(productGetters.getPrice(product).regular)}} </span>
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
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0">
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : ای جی</span>
                                            </div>
    
                                            <a href="#" class="promotion-box-image">
                                                <img src="assets/images/search/product-2.jpg" alt="product">
                                            </a>
    
                                            <div class="product-box-content">
                                                <a href="#" class="product-box-title">شارژر همراه شیاومی مدل PLM09ZM ظرفیت
                                                    10000
                                                    میلی آمپر ساعت</a>
                                            </div>
    
                                            <div class="product-box-rate">
                                                <span>۲,۶۵۰ نفر</span>
    
                                                <div class="product-star mb-3">
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
    
                                            <div class="product-box-row">
                                                <span class="price-value-wrapper">۱۸۹,۷۰۰ </span>
                                                <span class="price-currency">تومان </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="cheapest" role="tabpanel" aria-labelledby="cheapest-tab">
                            <ul class="listing-item">
                                <li>
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0">
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : ای جی</span>
                                            </div>
    
                                            <a href="#" class="promotion-box-image">
                                                <img src="assets/images/search/product-1.jpg" alt="product">
                                            </a>
    
                                            <div class="product-box-content">
                                                <a href="#" class="product-box-title">شارژر همراه شیاومی مدل PLM09ZM ظرفیت
                                                    10000
                                                    میلی آمپر ساعت</a>
                                            </div>
    
                                            <div class="product-box-rate">
                                                <span>۲,۶۵۰ نفر</span>
    
                                                <div class="product-star mb-3">
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
    
                                            <div class="product-box-row">
                                                <span class="price-value-wrapper">۱۸۹,۷۰۰ </span>
                                                <span class="price-currency">تومان </span>
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
                                    <div class="col-lg-3 col-md-3 col-xs-12 pull-right px-0">
                                        <div class="promotion-box">
                                            <div class="product-seller-details">
                                                <span class="product-main-seller">فروشنده : ای جی</span>
                                            </div>
    
                                            <a href="#" class="promotion-box-image">
                                                <img src="assets/images/search/product-2.jpg" alt="product">
                                            </a>
    
                                            <div class="product-box-content">
                                                <a href="#" class="product-box-title">شارژر همراه شیاومی مدل PLM09ZM ظرفیت
                                                    10000
                                                    میلی آمپر ساعت</a>
                                            </div>
    
                                            <div class="product-box-rate">
                                                <span>۲,۶۵۰ نفر</span>
    
                                                <div class="product-star mb-3">
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star active"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
    
                                            <div class="product-box-row">
                                                <span class="price-value-wrapper">۱۸۹,۷۰۰ </span>
                                                <span class="price-currency">تومان </span>
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
                        <li class="pagination-item"><a href="#" class="pager-item-active">1</a></li>
                        <li class="pagination-item"><a href="#">2</a></li>
                        <li class="pagination-item"><a href="#">3</a></li>
                        <li class="pagination-item"><a href="#">4</a></li>
                        <li class="pagination-item"><a href="#">5</a></li>
                        <li class="pagination-item">
                            <div class="pager-items-partition"></div>
                        </li>
                        <li class="pagination-item"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                    </ul>
                </div>
            </div>
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
  SfBreadcrumbs,
  SfLoader,
  SfColor,
  SfProperty
} from '@storefront-ui/vue';
import { computed, onMounted, useContext, useRoute, watch } from '@nuxtjs/composition-api';
import { useCart, useWishlist, productGetters, useFacet, facetGetters, useUser, wishlistGetters, useMenus } from '@vue-storefront/spree';

import { useUiHelpers, useUiState } from '~/composables';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
import cacheControl from './../helpers/cacheControl';
import CategoryPageHeader from '~/components/CategoryPageHeader';
import FiltersSidebar from '~/components/FiltersSidebar.vue';

// TODO(addToCart qty, horizontal): https://github.com/vuestorefront/storefront-ui/issues/1606
export default {
  transition: 'fade',
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5
  }),
  setup() {
    const th = useUiHelpers();
    const { toggleFilterSidebar, isCategoryGridView, changeToCategoryGridView, changeToCategoryListView, uiState } = useUiState();
    const context = useContext();
    const route = useRoute()
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
    watch(() => route.query, async () => {
        console.log("hey")
      await search(th.getFacetsFromURL());
      if (error?.value?.search) context.app.nuxt.error({ statusCode: 404 });
    })
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
      if (error?.value?.search) context.app.nuxt.error({ statusCode: 404 });
    });
    return {
      ...uiState,
      toggleFilterSidebar,
      route,
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
    LazyHydrate,
    FiltersSidebar
  }
};
</script>

<style lang="scss" scoped>
#category {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.main {
  &.section {
    padding: var(--spacer-xs);
    @include for-desktop {
      padding: 0;
    }
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
.navbar {
  position: relative;
  display: flex;
  border: 1px solid var(--c-light);
  border-width: 0 0 1px 0;
  @include for-desktop {
    border-width: 1px 0 1px 0;
  }
  &.section {
    padding: var(--spacer-sm);
    @include for-desktop {
      padding: 0;
    }
  }
  &__aside {
    display: flex;
    align-items: center;
    padding: var(--spacer-sm) 0;
    flex: 0 0 15%;
    padding: var(--spacer-sm) var(--spacer-sm);
    border: 1px solid var(--c-light);
    border-width: 0 1px 0 0;
  }
  &__title {
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-title-font-size: var(--font-size--xl);
  }
}
.main {
  display: flex;
}
.list {
  --menu-item-font-size: var(--font-size--sm);
  &__item {
    &:not(:last-of-type) {
      --list-item-margin: 0 0 var(--spacer-sm) 0;
    }
    .nuxt-link-exact-active {
      text-decoration: underline;
    }
  }
}
.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
  &__grid {
    justify-content: center;
    @include for-desktop {
      justify-content: flex-start;
    }
  }
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__product-card {
    --product-card-title-margin: var(--spacer-base) 0 0 0;
    --product-card-title-font-weight: var(--font-weight--medium);
    --product-card-title-margin: var(--spacer-xs) 0 0 0;
    flex: 1 1 50%;
    @include for-desktop {
      --product-card-title-font-weight: var(--font-weight--normal);
      --product-card-add-button-bottom: var(--spacer-base);
      --product-card-title-margin: var(--spacer-sm) 0 0 0;
    }
  }
  &__product-card-horizontal {
    flex: 0 0 100%;
    @include for-mobile {
      ::v-deep .sf-image {
        --image-width: 5.3125rem;
        --image-height: 7.0625rem;
      }
    }
  }
  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &__slide-enter-active {
    transition: all 0.2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
  @include for-desktop {
    &__grid {
      margin: var(--spacer-sm) 0 0 var(--spacer-sm);
    }
    &__pagination {
      display: flex;
      justify-content: flex-start;
      margin: var(--spacer-xl) 0 0 0;
    }
    &__product-card-horizontal {
      margin: var(--spacer-lg) 0;
    }
    &__product-card {
      flex: 1 1 25%;
    }
    &__list {
      margin: 0 0 0 var(--spacer-sm);
    }
  }
  &__show-on-page {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    &__label {
      font-family: var(--font-family--secondary);
      font-size: var(--font-size--sm);
    }
  }
}
.sidebar {
  flex: 0 0 15%;
  padding: var(--spacer-sm);
  border: 1px solid var(--c-light);
  border-width: 0 1px 0 0;
}
.loading {
  margin: var(--spacer-3xl) auto;
  @include for-desktop {
    margin-top: 6.25rem;
  }
  &--categories {
    @include for-desktop {
      margin-top: 3.75rem;
    }
  }
}
.wishlist__button{
  margin: 0 0 1rem auto;
  display: block;
}
</style>
