<template>
    <div class="option-type-container">
    <input
      type="button"
      v-for="option in options"
      :key="option.value"
      :class="option.value===model? 'option-type-item active':'option-type-item'"
      :value="option.value"
      @click="event => model = event.target.value"
    />
  </div>
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
<style lang="css">
.option-type-item{
  padding: 3px 6px;
  margin: 0 3px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #aaa;
}
.option-type-item.active{
  color: dodgerblue;
  border: 1px solid dodgerblue;
}
</style>