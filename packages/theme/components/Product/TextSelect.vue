<template>
  <select v-model="model" class="form-control">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
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
    }
  }
}
</script>
