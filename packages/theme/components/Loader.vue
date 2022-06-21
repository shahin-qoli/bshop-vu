<template>
  <div class="fullscreen-loader" v-show="isLoaderOpen">
    <div class="border rounded bg-white p-4">
      <img width="100px" src="/images/svg/logo-grey.svg" />
      <div class="text-center mt-4">
        <div class="spinner-border"></div>
      </div>
    </div>
  </div>
</template>
<script>
import useLoader from '~/composables/useLoader'
import { watch } from '@nuxtjs/composition-api'
export default {
  setup () {
    const { isLoaderOpen } = useLoader()
    watch(() => isLoaderOpen.value, () => {
      if (isLoaderOpen.value) {
        document.body.classList.add('modal-open')
      }
      else {
        document.body.classList.remove('modal-open')
      }
    })
    return {
      isLoaderOpen
    }
  }
}
</script>
