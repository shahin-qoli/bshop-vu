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
        <div v-if="error.addAddress" class="text-center pt-3" style="color: #fc0303  ;"> {{errormessage}}</div>

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
    const { addAddress, shipping: savedAddressesObj ,error } = useUserShipping();
    const errormessage = ref(" افزودن آدرس موفقیت آمیز نبود!");
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
      if(!error.value.addAddress){
      const newAddr = savedAddresses.value[savedAddresses.value.length - 1]
      emit('input', newAddr._id)
      }
      else{
        if(error.value.addAddress.response&&error.value.addAddress.response.data){
          errormessage.value=error.value.addAddress.response.data.summary.replace("is invalid","نامعتبر است");
      }
      }
    }

    return {
      states,
      model,
      loading,
      onSubmit,
      errormessage,
      error 
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