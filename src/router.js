import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AllProjects from './pages/AllProjects.vue';
import SingleProjectComponent from './pages/SingleProjectComponent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'allprojects',
            component: AllProjects,
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProjectComponent,
        },
        
    ]
});
export { router };