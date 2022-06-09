<template>
  <ul>
    <li
      v-for="option in options"
      :key="option.value"
      class="js-c-ui-variant"
    >
      <label class="ui-variant-color">
        <span
          class="ui-variant-shape"
          :style="{ backgroundColor: option.value }"
        ></span>
        <input
          :value="option.value"
          v-model="model"
          type="radio"
          name="color"
          class="js-variant-selector"
          checked=""
        />
        <span class="ui-variant-check"></span>
      </label>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    options: Array,
    value: {}
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    },
  }
}
</script>
