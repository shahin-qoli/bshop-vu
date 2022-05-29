<template>
  <div class="account-box">
    <a href="/" class="logo-account"
      ><img src="images/logo.png" alt="logo"
    /></a>
    <span class="account-head-line">یاد آوری کلمه عبور</span>
    <div class="content-account pb-5">
      <form action="#" id="password-forget">
        <label for="email-phone"
          >شماره موبایل یا پست الکترونیک خود را وارد کنید</label
        >
        <input
          type="text"
          id="email-phone"
          class="input-email-account"
          placeholder=""
        />
        <div class="parent-btn">
          <button class="dk-btn dk-btn-info">
            ورود به دیجی استور
            <i class="mdi mdi-lock sign-in"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'auth'
}
</script>