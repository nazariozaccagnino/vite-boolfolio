<template>
    
                <div class="card">
                    <img :src=getImage class="card-img-top"
                        :alt=item.title>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.content }}</p>
                        <div>
                            <span class="badge text-bg-info">{{ item.type_id }}</span>
                            <span class="badge rounded-pill text-bg-success">Technology</span>
                        </div>
                        <RouterLink :to="{ name: 'single-project', params: { 'slug': item.slug } }" class="btn btn-success">
                            Leggi articolo</RouterLink>
                    </div>
                </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    props: ['item'],
    data() {
        return {
            store
        }
    },
    computed: {
        getImage(){
        
            return this.item.image? this.store.imgBasePath + this.item.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png';
        }
    }
}
</script>

<style lang="scss" scoped>

</style>