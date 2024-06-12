<template>
    <div v-if="project">
        <!-- <img :src="getImage" class="postimg" :alt="project.title"> -->
        <h1 class="my-4">{{ project.title }}</h1>
        <p>{{ project.content }}</p>
        <!-- <p>{{ project.category?.name }}</p> -->
        
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
            axios.get(this.store.apiBaseUrl + '/projects/'+this.$route.params.slug).then((res) => {
                console.log(res.data.results);
                this.project = res.data.results;
            })
        }
    },
    computed: {
        getImage() {
            return this.item.image? this.store.imgBasePath + this.item.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png';
        }
    },
    mounted() {
        this.getProject();
    },

}
</script>

<style lang="scss" scoped></style>