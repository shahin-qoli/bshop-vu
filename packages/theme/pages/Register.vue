<template>
  <div class="account-box">
    <a href="/" class="logo-account"
      ><img src="/images/logo.png" alt="logo"
    /></a>
    <span class="account-head-line">ثبت نام در دیجی‌استور</span>
    <div class="content-account">
      <div class="massege-light">
        ثبت نام تنها با شماره تلفن همراه امکان پذیر است.
      </div>
      <form action="#" id="register">
        <label for="email-phone"
          >شماره موبایل یا پست الکترونیک خود را وارد کنید</label
        >
        <input
          type="text"
          id="email-phone"
          class="input-email-account"
          placeholder=""
        />
        <label for="password">رمز عبور</label>
        <input
          type="password"
          id="password"
          class="input-password"
          placeholder=""
        />

        <div class="parent-btn">
          <button class="dk-btn dk-btn-info">
            ثبت نام به دیجی استور
            <i class="mdi mdi-account-plus-outline sign-in"></i>
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
            ><a href="#">حریم خصوصی</a> و <a href="#">شرایط قوانین</a>استفاده از
            سرویس های سایت دیجی‌استور را مطالعه نموده و با کلیه موارد آن
            موافقم.</label
          >
        </div>
      </form>
    </div>

    <div class="account-footer">
      <span>قبلا در دیجی‌استور ثبت‌نام کرده‌اید؟</span>
      <a href="/login" class="btn-link-register">وارد شویــد</a>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'auth'
}
</script>