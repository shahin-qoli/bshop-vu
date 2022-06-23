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
      <div class="megamenu-level-3">
        <div class="row">
          <div
            v-for="(cat_lev2) in cat_lev1.items" 
            :key="cat_lev2.id"  
            class="col-4 px-4"
          >
            <a :href="cat_lev2.link" class="text-primary"
              >{{cat_lev2.name}}</a
            >
            <ul  
              v-for="(cat_lev3) in cat_lev2.items"
              :key="cat_lev3.id"
              >
              <a :href="cat_lev3.link" class=""
                ><span style="color:grey">{{cat_lev3.name}}</span>
              </a>
            </ul>        

          </div>

        </div>
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
