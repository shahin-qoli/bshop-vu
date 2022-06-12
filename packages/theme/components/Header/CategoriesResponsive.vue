<template>
    <!-- <nav class="sidebar" 
     :class="sidebarOpen ? 'open' : ''">
    <div class="nav-header">
      <div class="header-cover"></div>  
      <div class="logo-wrap">
        <a class="logo-icon" href="#"
          ><img alt="logo-icon" src="/images/home/BURUX.svg" width="40"
        /></a>
      </div>
    </div> -->
    <ul class="nav-categories ul-base">
      <li
        v-for="(cat_lev_1, i) in categoryTree.items"
        :key="i"
        :class="cat_lev_1.items.length > 0 ? 'has-sub' :''"
        ><a :href="'/c/'+cat_lev_1.slug">{{cat_lev_1.name}}</a>
        <ul>
          <li 
            v-for="(cat_lev_2 ,j) in cat_lev_1.items"
            :key="j"
            :class="cat_lev_2.items.length > 0 ? 'has-sub' :''"
            >
            <a :href="'/c/'+cat_lev_2.slug" class="category-level-2" >{{cat_lev_2.name}}</a>
            <ul>
              <li
                v-for="(cat_lev_3 ,k) in cat_lev_2.items"
                :key="k">
                <a :href="'/c/'+cat_lev_3.slug" class="category-level-3">{{cat_lev_3.name}}</a>
              </li>
            </ul>
          </li> 
        </ul> 
      </li>
    </ul>
  <!-- </nav> -->

</template>
<script>  
import { ref } from '@nuxtjs/composition-api';
import {categoryTree} from '../AppHeader.vue';


export default {
  props: {
    categoryTree: {
      required: true
    }
  },  
  transition: 'fade',
  setup(props) {
    const categoryTree  = props.categoryTree
    const sidebarOpen = props.sidebarOpen
  },
  components: {
    categoryTree
  }
};
</script>
