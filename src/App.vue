<template>
  <HeaderComponent />
<router-view></router-view>
</template>

<script>
import {store} from './store';
import axios from 'axios';

import HeaderComponent from './components/HeaderComponent.vue'
export default {
  name: 'App',
  components:{
    HeaderComponent
  },
  data() {
  },
  methods: {
    
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped></style>