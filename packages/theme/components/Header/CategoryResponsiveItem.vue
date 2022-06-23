<template>
  <li
    :class="cat.items.length > 0 ? 'has-sub' : ''"
  >
    <a @click="toggle" :href="'/c/' + cat.slug">{{ cat.name }}</a>
    <Cat-Item
      v-for="catChild in cat.items"
      :key="catChild.id"
      :cat="catChild"
      :style="{ display: isOpen ? 'block' : 'none' }"
    >

    </Cat-Item>
  </li>
</template>
<script>
export default {
  name: 'CatItem',
  props: {
    cat: {}
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
