<template>
  <ul class="nav-categories ul-base">
    <cat-item
      v-for="cat in categoryTree.items"
      :key="cat.id"
      :cat="cat"
    >
    </cat-item>
  </ul>
</template>
<script>
import CatItem from './CategoryResponsiveItem.vue'
export default {
  transition: 'fade',
  components: {
    CatItem
  },
  props: {
    categoryTree: {
      required: true,
    },
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    onClick () {
      this.open = !this.open
    }
  }
};
</script>
