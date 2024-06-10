<template>
  <div>
    <i class="fa fa-solid fa-home"></i>
    <h1 class="text-center">Test</h1>
  </div>
</template>

<script>
import store from './store';
  export default {
    name: 'App',
    data(){
      return{
        store,
        projects:[],
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>