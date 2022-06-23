<template>
  <div class="account-box">
    <a href="/" class="logo-account"
      ><img src="/images/home/BURUX.svg" alt="logo"
    /></a>
    <span class="account-head-line">ثبت نام</span>
    <div class="content-account">
      <form @submit.prevent="handleRegister" id="register">
        <label for="email-phone"
          >پست الکترونیک خود را وارد کنید</label
        >
        <input style="border-radius: 15px; background-color: #EFF0F6;"
          v-model="form.email"
          dir="ltr"
          type="text"
          id="email-phone"
          name="email"
          class="input-email-account"
          placeholder=""
        />
        <label for="password">رمز عبور</label>
        <input style="border-radius: 15px; background-color: #EFF0F6;"
          v-model="form.password"
          dir="ltr"
          type="password"
          id="password"
          class="input-password"
          placeholder=""
        />
        <label v-if="iswrong" for="Wrong" style="color: #fc0303 ;">{{error.register}}</label>
        <div class="parent-btn">
          <button type='submit' class="dk-btn dk-btn-info" :disabled="flag">
            <span v-if="!flag" class="btn-add-to-cart-txt" >
              ثبت نام  
            </span>
            <div v-else-if="flag" class="spinner-border spinner-border-sm" role="status"></div>
            <i class="mdi mdi-account-plus-outline sign-in"></i>                                   
          </button>
        </div>
        <div class="form-auth-row">
          <label for="remember" class="ui-checkbox">
            <input
              v-model="form.checkbox" 
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
            سرویس های سایت بروکس را مطالعه نموده و با کلیه موارد آن
            موافقم.</label
          >
          <label v-if="!isckecked" class="remember-me" style="color: #fc0303">لطفا حریم خصوصی و شرایط و قوانین را مطالعه کرده و پس از تایید مجددا تلاش کنید</label>
        </div>
      </form>
    </div>

    <div class="account-footer">
      <span>قبلا در بروکس ثبت‌نام کرده‌اید؟</span>
      <a href="/login" class="btn-link-register">وارد شویــد</a>
    </div>
  </div>
</template>
<script>
import { ref, watch, reactive, computed,useRouter } from '@nuxtjs/composition-api';
import { SfModal, SfInput, SfButton, SfCheckbox, SfLoader, SfAlert, SfBar } from '@storefront-ui/vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { useUser, useForgotPassword } from '@vue-storefront/spree';
import { useUiState } from '~/composables';

extend('email', {
  ...email,
  message: 'Invalid email'
});

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  name: 'LoginModal',
  components: {
    SfModal,
    SfInput,
    SfButton,
    SfCheckbox,
    SfLoader,
    SfAlert,
    ValidationProvider,
    ValidationObserver,
    SfBar
  },
  layout:'auth',
  setup() {
    const SCREEN_LOGIN = 'login';
    const SCREEN_REGISTER = 'register';
    const SCREEN_THANK_YOU = 'thankYouAfterForgotten';
    const SCREEN_FORGOTTEN = 'forgottenPassword';
    const router = useRouter();
    const { isLoginModalOpen, toggleLoginModal } = useUiState();
    const form = ref({});
    const userEmail = ref('');
    const createAccount = ref(false);
    const rememberMe = ref(false);
    const { register, login, loading, error: userError } = useUser();
    const { request, error: forgotPasswordError, loading: forgotPasswordLoading } = useForgotPassword();
    const currentScreen = ref(SCREEN_REGISTER);
    const flag = ref(false);
    const iswrong = ref(false)
    const isckecked = ref(true)

    if(form.value.checkbox){
        isckecked=false;
        return;
      }

    const error = reactive({
      login: null,
      register: null
    });

    const resetErrorValues = () => {
      error.login = null;
      error.register = null;
    };

    const barTitle = computed(() => {
      switch (currentScreen.value) {
        case SCREEN_LOGIN:
          return 'Sign in';
        case SCREEN_REGISTER:
          return 'Register';
        default:
          return 'Reset Password';
      }
    });

    watch(isLoginModalOpen, () => {
      if (isLoginModalOpen) {
        form.value = {};
        resetErrorValues();
      }
    });

    const setCurrentScreen = (screenName) => {
      resetErrorValues();
      currentScreen.value = screenName;
    };

    const handleForm = (fn) => async () => {
      flag.value=true
      resetErrorValues();
      await fn({ user: form.value });
      
      
    

      const hasUserErrors = userError.value.register || userError.value.login;
      if (hasUserErrors) {
        flag.value=true;
        error.login = userError.value.login?.message;
        error.register = userError.value.register?.message;
        iswrong.value=true
        flag.value=false;
        return;
      }
      else {
        window.location = '/'
      }
      
    };

    const closeModal = () => {
      resetErrorValues();
      setCurrentScreen(SCREEN_LOGIN);
      toggleLoginModal();
    };

    const handleRegister = async () =>  {
      flag.value=true
      handleForm(register)();
      //flag.value=false
      }

    const handleLogin = async () => {
      flag.value=true
      handleForm(login)();
      flag.value=false
      }

    const handleForgotten = async () => {
      userEmail.value = form.value.username;
      await request({ email: userEmail.value });

      if (!forgotPasswordError.value.request) {
        setCurrentScreen(SCREEN_THANK_YOU);
      }
    };

    return {
      form,
      flag,
      iswrong,
      isckecked,
      error,
      userError,
      loading,
      createAccount,
      rememberMe,
      isLoginModalOpen,
      toggleLoginModal,
      handleLogin,
      handleRegister,
      forgotPasswordError,
      forgotPasswordLoading,
      handleForgotten,
      closeModal,
      userEmail,
      barTitle,
      currentScreen,
      setCurrentScreen,
      SCREEN_LOGIN,
      SCREEN_REGISTER,
      SCREEN_THANK_YOU,
      SCREEN_FORGOTTEN
    };
  }
};
</script>
