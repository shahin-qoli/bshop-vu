<template>

  <li>
    <a 
     :href="cat.link"
     :style="{ color: isOpen ? 'Black' : 'gray' }">{{ cat.name }}</a>
    <span 
      v-if="cat.items.length > 0"
      :class="!isOpen ? 'fa fa-angle-left text-black' : 'fa fa-angle-down text-black'"
      @click="toggle"
      style="top: 17px; left: 15px; position: absolute;font-weight: bolder">
    </span>
    <ul :style="{ display: isOpen ? 'block' : 'none' }">
      <Cat-Item
      v-for="catChild in cat.items"
      :key="catChild.id" 
      :cat="catChild">
      </Cat-Item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'CatItem',
  props: {
    cat: {}
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
