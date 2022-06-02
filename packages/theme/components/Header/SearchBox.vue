<template>
  <div class="search-header search-box">
    <form action="#">
      <input
        type="text"
        class="header-search-input"
        placeholder="جستجو محصولات ..."
      />
      <button class="btn-search" type="submit">
        <img src="assets/images/search.png" alt="search" />
      </button>
    </form>
    <div class="search-result">
      <ul class="search-result-list">
        <li>
          <a href="#" class="btn btn-light btn-remove-search"
            >موبایل
            <i class="mdi mdi-close"></i>
          </a>
        </li>
        <li>
          <a href="#" class="btn btn-light btn-remove-search"
            >لپ تاپ
            <i class="mdi mdi-close"></i>
          </a>
        </li>
        <li>
          <a href="#" class="btn btn-light btn-remove-search"
            >مودم
            <i class="mdi mdi-close"></i>
          </a>
        </li>
        <li>
          <a href="#" class="btn btn-light btn-remove-search"
            >شیائومی
            <i class="mdi mdi-close"></i>
          </a>
        </li>
        <li>
          <a href="#" class="btn btn-light btn-remove-search"
            >دوربین
            <i class="mdi mdi-close"></i>
          </a>
        </li>
      </ul>
      <ul class="search-result-most-view">
        <li>
          <a href="#">موبایل <i class="fa fa-angle-left"></i></a>
        </li>
        <li>
          <a href="#">لپ تاپ <i class="fa fa-angle-left"></i></a>
        </li>
        <li>
          <a href="#">مودم <i class="fa fa-angle-left"></i></a>
        </li>
        <li>
          <a href="#">شیائومی <i class="fa fa-angle-left"></i></a>
        </li>
        <li>
          <a href="#">دوربین <i class="fa fa-angle-left"></i></a>
        </li>
      </ul>
      <div class="search-results-list js-search-ad-banner">
        <a href="#">
          <img src="assets/images/banner-search.jpg" alt="banner-search" />
        </a>
      </div>
    </div>
  </div>
</template>
