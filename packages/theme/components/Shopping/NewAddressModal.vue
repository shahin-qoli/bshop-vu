<template>
  <modal
    :value="show"
    @input="$emit('update:show', $event)"
    title="آدرس جدید"
  >
    <div class="text-right px-4">
      <Address-Form
        v-model="model"
        @submit="onSubmit"
        :states="states"
      >
        <div class="d-flex">
          <base-button
            :loading="loading"
            type="success"
            nativeType="submit"
          >
            ثبت
          </base-button>
          <button
            @click="$emit('cancel')"
            type="button"
            class="btn btn-secondary mr-auto">
            انصراف
          </button>
        </div>

      </Address-Form>
    </div>
  </modal>
</template>
<script>
import Modal from '../Modal.vue'
import AddressForm from './AddressForm.vue'
import BaseButton from '~/components/Base/BaseButton'
import { useCountry, useUserShipping } from '@vue-storefront/spree';
import { ref, computed, onBeforeMount } from '@nuxtjs/composition-api'
export default {
  components: {
    BaseButton,
    Modal,
    AddressForm
  },
  props: {
    show: Boolean,
    addresses: {}
  },
  setup(_, { emit }) {
    const { states, loadStates } = useCountry();
    const { addAddress, shipping: savedAddressesObj } = useUserShipping();
    const savedAddresses = computed(() => savedAddressesObj.value.addresses || [])
    const model = {
      country: 'IR'
    }
    const loading = ref(false)
    onBeforeMount(() => {
      loadStates('IR')
    })
    const onSubmit = async () => {
      loading.value = true
      await addAddress({ address: model })
      loading.value = false
      const newAddr = savedAddresses.value[savedAddresses.value.length - 1]
      emit('input', newAddr._id)
    }
    return {
      states,
      model,
      loading,
      onSubmit
    }
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