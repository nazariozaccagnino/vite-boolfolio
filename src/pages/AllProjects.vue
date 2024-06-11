<template>
    <div class="container">
        <h1 class="text-center">All projects</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="col" v-for="project in projects" :key="project.id">
                <div class="card">
                    <img :src=getImage class="card-img-top"
                        :alt=project.title>
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.content }}</p>
                        <div>
                            <span class="badge text-bg-info">{{ project.type_id }}</span>
                            <span class="badge rounded-pill text-bg-success">Technology</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AllProjects',
    data() {
        return {
            store,
            projects: [],
        }
    },
    methods: {
        getProjects() {
            axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
                console.log(res.data.results);
                this.projects = res.data.results
            });
        },
    },
    mounted() {
        this.getProjects()
    },
    computed: {
        getImage(){
        
            return this.projects.image? this.store.imgBasePath + this.project.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png';
        }
    }
}

</script>

<style lang="scss" scoped>

</style>