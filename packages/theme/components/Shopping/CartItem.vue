<template>
  <div class="product-box-container">
    <div class="product-box-compact">
      <a :href="`/p/${cartGetters.getItemVariantId(item)}/${cartGetters.getItemSlug(item)}`">
        <img
          :src="cartGetters.getItemImage(item)"
          alt="img-slider"
        />
      </a>
      <div class="product-box-title">
        {{ cartGetters.getItemName(item) }}
      </div>
    </div>
  </div>
</template>
<script>
import { cartGetters } from '@vue-storefront/spree'
export default {
  props: {
    item: {}
  },
  setup () {
    return {
      cartGetters
    }
  }
}
</script>