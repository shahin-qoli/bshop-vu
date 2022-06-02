<template>
  <header class="shopping-page">
    <div class="container">
      <div class="header-shopping-logo">
        <a href="/"><img src="/images/logo.png" alt="logo" /></a>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <ul class="checkout-steps">
          <li class="is-completed">
            <a
              href="/checkout/shipping"
              class="checkout-steps-item-link active-link-shopping"
            >
              <span>اطلاعات ارسال</span>
            </a>
          </li>
          <li class="is-completed">
            <a
              href="/checkout/payment"
              class="checkout-steps-item active-link"
            >
              <span>پرداخت</span>
            </a>
          </li>
          <li class="is-active">
            <a
              href="/checkout/complete"
              class="checkout-steps-item active-link"
            >
              <span>اتمام خرید و ارسال</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>