<template>
    <div v-if="project">
        <div class="container position-relative">
            <!-- <p>{{ project.category?.name }}</p> -->
            <div class="card position-absolute top-0 start-50 translate-middle-x">
                <h4 class="card-header text-center">
                    {{ project.title }}
                </h4>
                <img :src="getImage" class="card-img-top" :alt="project.title">
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">{{ project.content }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SingleProjectComponent',
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        getProject() {
            console.log(this.$route);
            axios.get(this.store.apiBaseUrl + '/projects/' + this.$route.params.slug).then((res) => {
                console.log(res.data.results);
                this.project = res.data.results;
                console.log(this.project);
            })
        }
    },
    computed: {
        getImage() {
            return this.project.image ? this.store.imgBasePath + this.project.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png';
        }

    },
    mounted() {
        this.getProject();

    },

}
</script>

<style lang="scss" scoped>
.card{
    width: 50rem;
}
</style>