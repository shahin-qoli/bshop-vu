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
      <div class="product-box-title">
        <span>تعداد:</span>
        {{ cartGetters.getItemQty(item) }}
        <span> عدد </span>
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
    const cartGetters1 = cartGetters

    return {
      cartGetters
    }
  }
}
</script>