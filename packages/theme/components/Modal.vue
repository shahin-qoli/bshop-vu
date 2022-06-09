<template>
  <div class="modal fade" :class="classes" :style="styles">
    <div class="modal-dialog" :class="modalDialogClasses">
      <div class="modal-content">
        <div class="modal-header">
          <h5>
            {{ title }}
          </h5>
          <button
            @click="$emit('input', false)"
            type="button"
            class="close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
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
    },
    title: {},
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    styles () {
      return {
        display: this.value ? 'block' : 'none'
      }
    },
    classes () {
      return {
        show: this.value
      }
    },
    modalDialogClasses () {
      return `modal-${this.size}`
    }
  },
  watch: {
    value () {
      if (this.value) {
        const div = document.createElement('div')
        div.classList = 'modal-backdrop fade show'
        div.addEventListener('click', () => {
          this.$emit('input', false)
        })
        document.body.appendChild(div)
        setTimeout(() => {
          document.body.classList.add('modal-open')
        })
      }
      else {
        this.removeBackdrop()
      }
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    },
    removeBackdrop () {
      const el = document.querySelector('.modal-backdrop')
      if (el) {
        document.body.removeChild(el)
      }
      document.body.classList.remove('modal-open')
    }
  },
  beforeDestroy () {
    this.removeBackdrop()
  }
}
</script>