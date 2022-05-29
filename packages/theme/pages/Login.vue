<template>
  <div class="account-box">
    <a href="/" class="logo-account"
      ><img src="/images/logo.png" alt="logo"
    /></a>
    <span class="account-head-line">ورود به دیجی‌استور</span>
    <div class="content-account">
      <form action="#" id="login">
        <label for="email-phone"
          >شماره موبایل یا پست الکترونیک خود را وارد کنید</label
        >
        <input
          type="text"
          id="email-phone"
          class="input-email-account"
          placeholder=""
        />
        <a href="/forgotpassword" class="account-link-password"
          >رمز خود را فراموش کرده ام</a
        >
        <label for="password">رمز عبور</label>
        <input
          type="password"
          id="password"
          class="input-password"
          placeholder=""
        />
        <div class="parent-btn">
          <button class="dk-btn dk-btn-info">
            ورود به دیجی استور
            <i class="fa fa-sign-in sign-in"></i>
          </button>
        </div>
        <div class="form-auth-row">
          <label for="remember" class="ui-checkbox">
            <input
              type="checkbox"
              value="1"
              name="login"
              checked=""
              id="remember"
            />
            <span class="ui-checkbox-check"></span>
          </label>
          <label for="remember" class="remember-me"
            >مرا به خاطر داشته باش</label
          >
        </div>
      </form>
    </div>
    <div class="account-footer">
      <span>کاربر جدید هستید؟</span>
      <a href="/register" class="btn-link-register"
        >ثبت‌نام در دیجی‌استور</a
      >
    </div>
  </div>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      model: {},
    };
  },
};
</script>