<template>
  <div class="remodal-overlay" :style="styles">
    <div class="col-lg-8 col-md-8 col-xs-12 mx-auto">
      <div class="remodal">
        <a
          href="#"
          class="remodal-close"
          @click="close"
          ><i class="fa fa-close"></i
        ></a>
        <div class="middle-container">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  },
  computed: {
    styles () {
      return {
        display: this.value ? 'block' : 'none'
      }
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    }
  }
}
</script>