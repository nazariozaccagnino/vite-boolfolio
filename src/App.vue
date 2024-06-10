<template>
  <div>
    <i class="fa fa-solid fa-home"></i>
    <h1 class="text-center">Test</h1>
  </div>
</template>

<script>
import {store} from './store';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      store,
      projects: [],
    }
  },
  methods: {
    getProjects() {
      axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
        console.log(res);
      });
    },
  },
  mounted(){
    this.getProjects()
  }
}
</script>

<style lang="scss" scoped></style>