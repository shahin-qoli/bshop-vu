<template>
  <modal
    :value="show"
    @input="$emit('update:show', $event)"
    title="آدرس تحویل"
  >
    <div class="text-right px-4">
      <div @click="$emit('addAddress')" class="py-3 add-address-btn">
        <i class="fa fa-map-marker"></i>
        <span>
          افزودن آدرس جدید
        </span>
        <i class="fa fa-chevron-left float-left"></i>
      </div>
      <hr>
      <address-item
        v-for="address in addresses"
        :key="address._id"
        :value="value"
        @input="$emit('input', $event)"
        :address="address"
      />
    </div>
  </modal>
</template>
<script>
import AddressItem from './AddressItem.vue'
import Modal from '../Modal.vue'
export default {
  components: {
    Modal,
    AddressItem
  },
  props: {
    value: {},
    show: Boolean,
    addresses: {}
  }
}
</script>
<style scoped lang="scss">
.add-address-btn {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>