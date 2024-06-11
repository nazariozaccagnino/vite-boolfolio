<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">My portfolio logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(link, index) in menuItems" :key="index">
                           <router-link :to="{name: link.routename}" class="nav-link" active-class="active">{{ link.label }}
                           </router-link>
                        </li>
                    </ul>
                    <div class="ms-auto">
                        <a href="http://localhost:8000" class="nav-link">
                            <i class="fa-solid fa-user"></i> <span>Admin Panel</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routename: 'home'
                },
                {
                    label: 'Projects',
                    routename: 'allprojects'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>