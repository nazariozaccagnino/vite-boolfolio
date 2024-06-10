<template>
  <div>
    <i class="fa fa-solid fa-home"></i>
    <h1 class="text-center">Test API</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
    </ul>
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
        this.projects=res.data.results
      });
    },
  },
  mounted(){
    this.getProjects()
  }
}
</script>

<style lang="scss" scoped></style>