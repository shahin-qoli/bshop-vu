<template>
  <ul class="list-menu-level-2">
    <li
      v-for="(cat_lev1) in categoryTree.items"
      :key="cat_lev1.id"
      class="item-menu-2"
    >
      <a :href="'/c/'+cat_lev1.slug" class="list-category-menu-2"
        >{{cat_lev1.name}}</a
      >
      <ul class="megamenu-level-3 row">
        <li class="list-category">
          <a href="#" class="list-category-megamenu"
            >همه دسته بندی های  {{cat_lev1.name}}</a
          >
        </li>
        <template 
        v-for="(cat_lev2) in cat_lev1.items">
          <li
            :key="cat_lev2.id"
            class="item-megamenu-title">
            <a :href="'/c/'+cat_lev1.slug" class="list-category-megamenu-3"
              ><span>{{cat_lev2.name}}<i class="fa fa-angle-left"></i></span
            ></a>
          </li>
          <li
            v-for="(cat_lev3) in cat_lev2.items"
            :key="cat_lev3.id"
            class="item-megamenu-item">
            <a :href="'/c/'+cat_lev1.slug" class="list-category-megamenu-3"
              ><span>{{cat_lev3.name}}</span>
            </a>
          </li>
        </template>
      </ul>
    </li>
  </ul>
</template>
<script>



export default {
  props: {
    categoryTree: {
      required: true
    }
  },
  transition: 'fade',

  setup(props) {

  },

};
</script>
