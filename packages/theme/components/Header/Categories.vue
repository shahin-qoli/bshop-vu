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
        <div   
        class="row">
        <div
         v-for="(cat_lev2) in cat_lev1.items" 
         :key="cat_lev2.id"  
          class="col-4"
        >

        </div>
        <div class="col-4"></div>
        <li 

         class="list-category row" 
         style="padding:25px">
          <a :href="cat_lev2.link" class="list-category-megamenu row"
            >{{cat_lev2.name}}</a
          >
          <ul>
            <li  
              v-for="(cat_lev3) in cat_lev2.items"
              :key="cat_lev3.id"
              class="item-megamenu-item"> 
              <a :href="cat_lev3.link" class="list-category-megamenu-3"
                ><span style="color:grey">{{cat_lev3.name}}</span>
              </a>
            </li>  
          </ul>
      
        </li>
      </div>
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
