<template>
  <div class="search-header search-box">
    <form action="#">
      <input
        type="text"
        class="header-search-input"
        placeholder="جستجو محصولات ..."
        @input="handleSearch"
          @keydown.enter="handleSearch($event)"
          @focus="isSearchOpen = true"
          @keydown.esc="closeSearch"
      />
      <button class="btn-search" type="submit">
        <img src="assets/images/search.png" alt="search" />
      </button>
    </form>
    <SearchResults
      :visible="isSearchOpen && term"
      :result="result"
      :term="term"
      @close="closeSearch"
      @removeSearchResults="removeSearchResults"
    />
  </div>
</template>
<script>
import MiniCartHeader from './MiniCart.vue'
import MiniCartResponsive from './MiniCartResponsive.vue'
import Categories from './Categories.vue'
import HeaderProfile from './HeaderProfile.vue'
import HeaderProfileResponsive from './HeaderProfileResponsive.vue'
import { SfHeader, SfImage, SfIcon, SfButton, SfBadge, SfSearchBar, SfOverlay } from '@storefront-ui/vue';
import { useUiState } from '~/composables';
import { useCart, useFacet, useUser, cartGetters, useWishlist, wishlistGetters } from '@vue-storefront/spree';
import { computed, ref, watch, onBeforeUnmount, useRouter } from '@nuxtjs/composition-api';
import { useUiHelpers } from '~/composables';
import LocaleSelector from './../LocaleSelector';
import SearchResults from '~/components/SearchResults';
import HeaderNavigation from './../HeaderNavigation';
import { clickOutside } from '@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js';
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
import debounce from 'lodash.debounce';

export default {
  components: {
    MiniCartHeader,
    MiniCartResponsive,
    Categories,
    HeaderProfile,
    HeaderProfileResponsive,
    SfHeader,
    SfImage,
    LocaleSelector,
    SfIcon,
    SfButton,
    SfBadge,
    SfSearchBar,
    SearchResults,
    SfOverlay,
    HeaderNavigation
  },
  directives: { clickOutside },
  setup(props, { root }) {
    const router = useRouter();
    const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal, isMobileMenuOpen } = useUiState();
    const { setTermForUrl, getFacetsFromURL } = useUiHelpers();
    const { isAuthenticated } = useUser();
    const { result: searchResult, search } = useFacet('searchResults');
    const { cart } = useCart();
    const { wishlist } = useWishlist();
    const term = ref(getFacetsFromURL().phrase);
    const isSearchOpen = ref(false);
    const searchBarRef = ref(null);
    const isMobile = computed(mapMobileObserver().isMobile);

    const result = computed(() => searchResult.value?.data);
    const cartTotalItems = computed(() => cartGetters.getTotalItems(cart.value));
    const wishlistTotalItems = computed(() => wishlistGetters.getTotalItems(wishlist.value));

    const accountIcon = computed(() => isAuthenticated.value ? 'profile_fill' : 'profile');
    const isWishlistDisabled = computed(() => wishlistGetters.isWishlistDisabled(wishlist.value));

    // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4927
    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        const localeAccountPath = root.localePath({ name: 'my-account' });
        return router.push(localeAccountPath);
      }

      toggleLoginModal();
    };

    const closeSearch = () => {
      const wishlistClassName = 'sf-product-card__wishlist-icon';
      const isWishlistIconClicked = event.path.find(p => wishlistClassName.search(p.className) > 0);
      if (isWishlistIconClicked || !isSearchOpen.value) return;

      term.value = '';
      isSearchOpen.value = false;
    };

    const handleSearch = debounce(async (paramValue) => {
      if (!paramValue.target) {
        term.value = paramValue;
      } else {
        term.value = paramValue.target.value;
      }
      await search({ term: term.value });
    }, 1000);

    const closeOrFocusSearchBar = () => {
      if (isMobile.value) {
        return closeSearch();
      } else {
        term.value = '';
        return searchBarRef.value.$el.children[0].focus();
      }
    };

    watch(() => term.value, (newVal, oldVal) => {
      const shouldSearchBeOpened = (!isMobile.value && term.value.length > 0) && ((!oldVal && newVal) || (newVal.length !== oldVal.length && isSearchOpen.value === false));
      if (shouldSearchBeOpened) {
        isSearchOpen.value = true;
      }
    });

    const removeSearchResults = () => {};

    onBeforeUnmount(() => {
      unMapMobileObserver();
    });

    return {
      accountIcon,
      cartTotalItems,
      wishlistTotalItems,
      handleAccountClick,
      toggleCartSidebar,
      toggleWishlistSidebar,
      setTermForUrl,
      term,
      isSearchOpen,
      closeSearch,
      handleSearch,
      result,
      closeOrFocusSearchBar,
      searchBarRef,
      isMobile,
      isMobileMenuOpen,
      removeSearchResults,
      isWishlistDisabled
    };
  }
};
</script>
