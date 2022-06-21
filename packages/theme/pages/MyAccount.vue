<template>
  <div id="my-account">
        <div class="col-lg-3 col-md-4 col-xs-12">
        <div class="sidebar-wrapper">         
            <div class="box-sidebar">
                <div class="profile-box">
                    <div class="profile-box-avator">
                        <img src="/images/svg/user-profile.svg" alt="profile">
                    </div>

                    <div class="profile-box-content">
                        <span class="profile-box-nameuser">{{userGetters.getEmailAddress(user)}}</span>
                        <span class="profile-box-phone">شماره موبایل</span>
                    </div>

                    <a href="#" class="profile-box-row-arrow">
                        <div class="profile-box-title">کیف پول</div>
                        <div class="profile-box-price">
                            <div class="wallet-amount">{{ $n(userGetters.getStoreCredits(user)) }}</div>
                            <div class="profile-box-currency">ریال</div>
                            <i class="fa fa-angle-left"></i>
                        </div>
                        <p class="profile-box-wallet-link">افزایش موجودی</p>
                    </a>

                    <a href="#" class="profile-box-row-arrow">
                        <div class="profile-box-title">باشگاه مشتریان</div>
                        <div class="profile-box-price">
                            <div class="wallet-amount">0</div>
                            <div class="profile-box-currency">امتیاز</div>
                            <i class="fa fa-angle-left"></i>
                        </div>
                    </a>
                </div>
                <ul class="profile-menu-items">
                  <li v-for="(page, i) in pages" :key="i">
                    <a
                      :href="page.link"
                      class="profile-menu-url"
                      :class="{ 'active-profile': page.name == activePage }"
                    >
                      <span class="mdi" :class="page.icon"></span>
                      {{ page.title }}
                    </a>
                  </li>
<!--                     <li><a href="profile" class="profile-menu-url"><span
                                class="mdi mdi-account-outline"></span>پروفایل</a></li>
                    <li><a href="profile-order.html" class="profile-menu-url active-profile"><span
                                class="mdi mdi-basket"  ></span>همه سفارش ها</a></li>
                    
                    <li><a href="profile-order-return.html" class="profile-menu-url"><span
                                class="mdi mdi-autorenew"></span>در خواست مرجوعی</a></li>
                    <li><a href="profile-favorites.html" class="profile-menu-url"><span class="mdi mdi-heart-outline"></span>لیست
                            علاقه مندی ها</a></li>
                    <li><a href="profile-comments.html" class="profile-menu-url"><span
                                class="mdi mdi-comment-multiple-outline"></span>نقد و نظرات</a></li>
                    <li><a href="profile-addresses.html" class="profile-menu-url"><span class="mdi mdi-map-marker-outline"></span>آدرس
                            ها</a></li>
                    <li><a href="#" class="profile-menu-url"><span class="mdi mdi-history"></span>بازدید های اخیر</a></li>
                    <li><a href="profile-personal-info.html" class="profile-menu-url"><span
                                class="mdi mdi-account-circle"></span>اطلاعات شخصی</a></li>
                    <li><a href="index.html" class="profile-menu-url"><span
                                class="mdi mdi-power"></span>خروج</a></li> -->
                    <div id="my-account"> 
                  </div>
                </ul>               
            </div>

        </div>
    </div>
    <order-history v-if="activePage == 'Order history'" />
    <my-profile v-if="activePage == 'Profile'" />
    <order-details v-if="activePage == 'Order details'" />
    <Saved-Addresses-Details v-if="activePage == 'Saved addresses'" />
    

  </div>
</template>
<script>
import { SfBreadcrumbs, SfContentPages } from '@storefront-ui/vue';
import { computed, useRoute, useRouter } from '@nuxtjs/composition-api';
import { userGetters, useUser } from '@vue-storefront/spree';
import { onMounted } from '@nuxtjs/composition-api';
import MyProfile from './MyAccount/MyProfile';
import SavedAddressesDetails from './MyAccount/SavedAddressesDetails';
import MyNewsletter from './MyAccount/MyNewsletter';

import OrderDetails from './MyAccount/OrderDetails';
import OrderHistory from './MyAccount/OrderHistory.vue';



export default {
  name: 'MyAccount',
  components: {
    SfBreadcrumbs,
    SfContentPages,
    MyProfile,
    SavedAddressesDetails,
    MyNewsletter,
    OrderDetails,
    OrderHistory
},
  middleware: [
    'is-authenticated'
  ],
/*   setup(props, context) {
    const route = useRoute();
    const router = useRouter();
    const { logout } = useUser();
    const isMobile = computed(mapMobileObserver().isMobile);
    const activePage = computed(() => {
      const { pageName } = route.value.params;
      if (!pageName) return isMobile.value ? '' : 'My profile';
      return `${pageName.charAt(0).toUpperCase()}${pageName.slice(1)}`.replace('-', ' ');
    });

    const changeActivePage = async (title) => {
      if (title === 'Log out') {
        await logout();
        router.push(context.root.localePath({ name: 'home' }));
        return;
      }

      const slugifiedTitle = (title || '').toLowerCase().replace(' ', '-');
      const transformedPath = `/my-account/${slugifiedTitle}`;
      const localeTransformedPath = context.root.localePath(transformedPath);
      router.push(localeTransformedPath);
    };

    onBeforeUnmount(() => {
      unMapMobileObserver();
    });

    return { changeActivePage, activePage };
  }, */

  setup(props,context) {
    const {
      isAuthenticated,
      user,
      load: loadUser,
      logout
    } = useUser();
    const route = useRoute();
    const router = useRouter();
    const activePage = computed(() => {
      const { pageName } = route.value.params;
      if (!pageName) return isMobile.value ? '' : 'My profile';
      return `${pageName.charAt(0).toUpperCase()}${pageName.slice(1)}`.replace('-', ' ');
    });
    const pages = [
      {
        title: 'پروفایل',
        name: 'Profile',
        link: '/my-account/profile',
        icon: 'mdi-account-outline'
      },
      {
        title: 'همه سفارش ها',
        name: 'Order history',
        link: '/my-account/order-history',
        icon: 'mdi-basket'
      },
      // {
      //   title: 'درخواست مرجوعی',
      //   name: 'Return',
      //   link: 'return',
      //   icon: 'mdi mdi-autorenew'
      // },
      {
        title: 'آدرس ها',
        name: 'SavedAdresses',
        link: '/my-account/saved-addresses',
        icon: 'mdi mdi-map-marker-outline'
      }
    ]   
    onMounted(async () => {
      await loadUser();
    });
    const handleLogout = async (title) => {
      if (title === 'Log Out') {
        await logout();
       
        router.push(context.root.localePath({ name: 'home' }));
        return;
      }

      

      const slugifiedTitle = (title || '').toLowerCase().replace(' ', '-');
      const transformedPath = `/my-account/${slugifiedTitle}`;
      const localeTransformedPath = context.root.localePath(transformedPath);
      router.push(localeTransformedPath);
    };
    const displayOrderHistory = () => {
      const localeTransformedPath = context.root.localePath('/my-account/order-history');
      router.push(localeTransformedPath);
     
    };
    return {
      userGetters,
      user,
      activePage,
      pages,
      isAuthenticated,
      handleLogout,
      displayOrderHistory
    };
    
    
  },

  data(root) {
    return {
      breadcrumbs: [
        {
          text: 'Home',
          link: root.localePath('/')
        },
        {
          text: 'My Account',
          link: root.localePath('/my-account')
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
#my-account {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.my-account {
  @include for-mobile {
    --content-pages-sidebar-category-title-font-weight: var(
      --font-weight--normal
    );
    --content-pages-sidebar-category-title-margin: var(--spacer-sm)
    var(--spacer-sm) var(--spacer-sm) var(--spacer-base);
  }
  @include for-desktop {
    --content-pages-sidebar-category-title-margin: var(--spacer-xl) 0 0 0;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) 0 var(--spacer-lg);
}
</style>
