import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AllProjects from './pages/AllProjects.vue';
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
name: 'Allprojects',
component: AllProjects,
},
]
});
export { router };