import { ref } from '@nuxtjs/composition-api'
const isLoaderOpen = ref(false)
export default () => {
  return {
    isLoaderOpen
  }
}
