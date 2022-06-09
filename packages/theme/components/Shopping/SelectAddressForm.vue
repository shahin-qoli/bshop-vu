<template>
  <div id="address-section">
    <div class="checkout-contact">
      <div class="checkout-contact-content">
        <ul class="checkout-contact-items">
          <li class="checkout-contact-item">
            گیرنده:
            <span class="full-name">
              {{ address.firstName }} {{ address.lastName }}
            </span>
<!--             <a
              href="#"
              class="edit-address-btn"
              @click="showEditAddr = true"
              >اصلاح این آدرس</a
            > -->
            <a
              href="javascript:void(0)"
              class="checkout-contact-location"
              @click="showModal = true"
              >تغییر آدرس ارسال</a
            >
          </li>
          <li class="checkout-contact-item">
            <div class="checkout-contact-item-mobile">
              شماره تماس:
              <span class="mobile-phone">{{ address.phone }}</span>
            </div>
            <div class="checkout-contact-item-message">
              کد پستی:
              <span class="post-code">{{ address.postalCode }}</span>
              <br />
            </div>
            <span class="address-part">
              {{ address.addressLine1 }}
            </span>
          </li>
        </ul>
        <div class="checkout-contact-badge">
          <i class="fa fa-check"></i>
        </div>
      </div>
    </div>
    <select-address-modal
      :show.sync="showModal"
      :addresses="savedAddresses"
      :value="value"
      @input="onInput"
      @addAddress="onAddAddress"
    ></select-address-modal>
    <new-address-modal
      :show.sync="showNewAddressModal"
      :value="value"
      @input="onInput"
      @cancel="onAddAddressCancel"
    >

    </new-address-modal>
  </div>
</template>
<script>
import SelectAddressModal from './SelectAddressModal.vue'
import NewAddressModal from './NewAddressModal.vue'
export default {
  props: {
    savedAddresses: {},
    value: {}
  },
  components: {
    SelectAddressModal,
    NewAddressModal
  },
  data () {
    return {
      showModal: false,
      showNewAddressModal: false
    }
  },
  computed: {
    address () {
      return this.savedAddresses.find((val) => {
        return val._id == this.value
      }) || {}
    }
  },
  methods: {
    onAddAddress () {
      this.showModal = false
      this.showNewAddressModal = true
    },
    onAddAddressCancel () {
      this.showNewAddressModal = false
      this.showModal = true
    },
    onInput (val) {
      this.showModal = false
      this.showNewAddressModal = false
      this.$emit('input', val)
    }
  }
}
</script>