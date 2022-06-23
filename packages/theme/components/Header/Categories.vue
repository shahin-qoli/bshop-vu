<template>
  <ul class="list-menu-level-2">
    <li
      v-for="(cat_lev1) in categoryTree.items"
      :key="cat_lev1.id"
      class="item-menu-2"
    >
      <a :href="cat_lev1.link" 
       class="list-category-menu-2"
        >{{cat_lev1.name}}</a
      >
      <ul   
      class="megamenu-level-3">
        <li 
         v-for="(cat_lev2) in cat_lev1.items" 
         :key="cat_lev2.id"  
         class="list-category row" 
         style="padding:25px">
          <a :href="cat_lev2.link" class="list-category-megamenu row"
            >{{cat_lev2.name}}</a
          >
          <ul  
            v-for="(cat_lev3) in cat_lev2.items"
            :key="cat_lev3.id"
            class="item-megamenu-item">
            <a :href="'/c/'+cat_lev1.slug" class="list-category-megamenu-3"
              ><span style="color:grey">{{cat_lev3.name}}</span>
            </a>
          </ul>        
        </li>
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
