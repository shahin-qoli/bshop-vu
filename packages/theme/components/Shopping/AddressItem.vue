<template>
  <label class="w-100" style="cursor: pointer">
    <input
      :value="address._id"
      v-model="model"
      type="radio"
      name="address"
    />
    <div class="d-inline-block">
      {{ address.addressLine1 }}
    </div>
    <br>
    <div class="address-props mt-3 mr-4">
      <div class="py-1">
        <i class="fa fa-envelope"></i>
        <span>
          {{ address.postalCode }}
        </span>
      </div>
      <div class="py-1">
        <i class="fa fa-phone"></i>
        <span>
          {{ address.phone }}
        </span>
      </div>
      <div class="py-1">
        <i class="fa fa-user"></i>
        <span>
          {{ address.firstName }} {{ address.lastName }}
        </span>
      </div>
    </div>
    <hr>
  </label>
</template>
<script>
export default {
  props: {
    value: {},
    address: {}
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>
<style scoped>
.address-props {
  color: grey;
  font-size: .9rem;
}
</style>