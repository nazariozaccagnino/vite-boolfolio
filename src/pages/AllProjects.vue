<template>
    <div class="container">
        <h1 class="text-center">All projects</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="col" v-if="projects.length>0" v-for="project in projects" :key="project.id">
                <CardComponent :item="project" />
            </div>
            <div v-else>
                Nessun progetto trovato
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import CardComponent from '../components/CardComponent.vue'

export default {
    name: 'AllProjects',
    components: {
        CardComponent
    },
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
    }
}

</script>

<style lang="scss" scoped></style>