<template>
  <footer>
    <div class="footer-jump">
      <a href="#">
        <span class="footer-jump-angle"
          ><i class="fa fa-angle-up"></i>برگشت به بالا</span
        >
      </a>
    </div>
    <section
      class="burux-banner"
      
      >
      <!-- <li class="Right" 
        style="position: absolute ;height: 34.14px;color: white;font-size:50px; padding: 30px 0; "
        dir="rtl"
        >
        بروکس
      </li> -->
      <img src="../static/images/home/BuruxFaText.svg" 
      />
      <ul>   
        <li>فروشگاه</li>
        <li>آنلاین</li>
      </ul>
      <div style="width: 48px;">

      </div>
      <div class="phone-number">
        <div class="fa fa-phone"></div>
        <div style="width:6px"></div>
        <div>021-77541</div>
      </div>
      
    </section>

    <div class="container">

    </div>
    <div class="row">
    <div class="col-12">
      <div class="middle-bar-footer" style="background: #FFFFFF;">
        <div class="col-lg-6 col-xs-12 pull-right">
          <div class="footer-links">
            <div class="links-col">
              <a href="#" class="head-line">دسته بندی ها</a>
              <ul class="links-ul">
                <li><a href="#">نحوه ثبت سفارش</a></li>
                <li><a href="#">رویه ارسال سفارش</a></li>
                <li><a href="#">شیوه‌های پرداخت</a></li>
              </ul>
            </div>

          </div>
        </div>


        <div class="col-lg-4 col-xs-12 pull-left">


          <div class="footer-social">
            <span class="newslitter-form-social"
              >ما را در شبکه‌های اجتماعی دنبال کنید:</span
            >

            <div class="social-links">
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-linkedin-square"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="row p-3" style="background:#FFFFFF; font-family: iranyekan; ">
    <div class="col-12 col-xl-9 col-lg-9 col-md-9">
      <P style="font-weight: 900;align-items: center;font-size:25px;font-style: normal;font-weight: 500;font-size: 18px;">
       درباره فروشگاه بروکس</P>
      <p>
        بروکس به عنوان یکی از معتبرترین فروشگاه های اینترنتی با بیش
        از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، 7 روز ضمانت
        بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های
        معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض
        ورود به سایت بروکس با دنیایی از کالا رو به رو می‌شوید! هر
        آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید
        کرد.
      </p>
    </div>
      <div class="col-auto mr-auto text-left" style="background:#FFFFFF">
        <img src="../static/images/home/ENamad.svg" />
      </div>
    </div>


  <SfFooter v-if="false && !menu.isDisabled" :column="parseInt(menuSize)" multiple class="footer">
    <SfFooterColumn
      v-for="(column, i) in menu && menu.items"
      :key="i"
      :title="column.name"
    >
      <SfList>
        <SfListItem
          v-for="(footerItem, j) in column.items"
          :key="j">
          <SfMenuItem
            :label="footerItem.name"
            :link="localePath(footerItem.link)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
  </SfFooter>
  <SfFooter v-else-if="false" :column="4" multiple class="footer">
    <SfFooterColumn :title="$t('About us')">
      <SfList>
        <SfListItem
          v-for="item in aboutUs"
          :key="item"
          >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Departments')">
      <SfList>
        <SfListItem
          v-for="item in departments"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Help')">
      <SfList>
        <SfListItem
          v-for="item in help"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Payment & Delivery')">
      <SfList>
        <SfListItem
          v-for="item in paymentsDelivery"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn title="Social">
      <div class="footer__socials">
        <SfImage class="footer__social-image" v-for="item in social" :key="item" :src="'/icons/'+item+'.svg'" :alt="item" width="32" height="32" />
      </div>
    </SfFooterColumn>
  </SfFooter>
  </footer>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem } from '@storefront-ui/vue';
import { onMounted, ref} from '@nuxtjs/composition-api';
import { useMenus } from '@vue-storefront/spree';
import { onSSR } from '@vue-storefront/core';

export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem
  },
  data() {
    return {
      aboutUs: ['Who we are', 'Quality in the details', 'Customer Reviews'],
      departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
      help: ['Customer service', 'Size guide', 'Contact us'],
      paymentsDelivery: ['Purchase terms', 'Guarantee'],
      social: ['facebook', 'pinterest', 'google', 'twitter', 'youtube'],
      isMobile: false,
      desktopMin: 1024
    };
  },
  setup(props, context) {
    const { menu, loadMenu } = useMenus('footer');
    const menuSize = ref({});
    const { locale } = context.root.$i18n;

    onMounted(() => menuSize.value = menu.value?.items?.length || 0);

    onSSR(async () => {
      await loadMenu({menuType: 'footer', menuName: 'Footer menu', locale: locale});
    });

    return {
      menu,
      menuSize
    };
  }
};
</script>

<style lang="scss">

.footer {
  margin-bottom: 3.75rem;
  @include for-desktop {
    margin-bottom: 0;
  }
  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);
    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
    }
  }
  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
  }
}
.sf-footer {
  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    margin-top: var(--spacer-2xl);
  }
  &__container {
    margin: var(--spacer-sm);
    @include for-desktop {
      max-width: 69rem;
      margin: 0 auto;
    }
  }
}
.burux-banner{
  height: 72px;
    background: #0094D4;
    padding: 0 48px;
    display: flex;
    align-items: center;
}
.burux-banner ul{
  color: #fff;
    margin: 0;
    padding: 0 12px;
}
.burux-banner div {
  color:#fff
}
.burux-banner .phone-number{
      display: flex;
    align-items: center;
}
</style>

