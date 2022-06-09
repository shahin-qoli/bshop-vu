<template>
  <form @submit.prevent="$emit('submit')" class="form-checkout">
    <div v-if="false" class="form-checkout-headline">
      {{ title }}
    </div>
    <div class="form-checkout-row">
      <div class="row">
        <div class="col-md-6">
          <label for="name">نام تحویل گیرنده</label>
          <input
            v-model="value.firstName"
            type="text"
            id="name"
            class="input-name-checkout"
            placeholder="نام"
          />

        </div>
        <div class="col-md-6">
          <label for="lastName">نام خانوادگی تحویل گیرنده</label>
          <input
            v-model="value.lastName"
            type="text"
            id="lastName"
            class="input-name-checkout"
            placeholder="نام خانوادگی"
          />
        </div>
        <div class="col-md-6">
          <label for="phone-number">شماره موبایل</label>
          <input
            v-model="value.phone"
            type="text"
            dir="ltr"
            id="phone-number"
            class="input-name-checkout"
            placeholder="09xxxxxxxxx"
            style="text-align: left"
          />
        </div>
        <div class="col-md-6">
          <label for="zipcode">کد پستی</label>
          <input
            v-model="value.postalCode"
            type="text"
            id="zipcode"
            dir="ltr"
            class="input-name-checkout"
            placeholder="xxxxxxxxxxx"
            style="text-align: left"
          />

        </div>
        <div class="col-md-6">
          <label>استان</label>
          <select
            v-model="value.state"
          >
            <option
              v-for="state in states"
              :key="state.name"
              :value="state.name"
            >
              {{ state.code }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="city">شهر</label>
          <input
            v-model="value.city"
            type="text"
            id="city"
            class="input-name-checkout"
          />
        </div>
      </div>

      <label for="address">آدرس</label>
      <input
        v-model="value.addressLine1"
        type="text"
        id="address"
        class="input-name-checkout"
        placeholder="آدرس خود را وارد نمایید"
        style="height: 80px"
      />

    </div>
    <slot></slot>
  </form>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    value: {

    },
    states: {

    }
  },
  data () {
    return {
      title: 'افزودن آدرس'
    }
  }
}
</script>