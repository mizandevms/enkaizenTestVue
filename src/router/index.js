import { createRouter, createWebHistory } from 'vue-router'
// import CreateBlog from '../views/CreateBlog.vue'
// import Home from '../views/Home.vue'

const routes = [
    {
        path: "/",
        name: 'home',
        component: ()=> import ('../views/HomePage.vue')
    },
    {
        path: "/home",
        name: 'HomePage',
        component: ()=> import ('../views/HomePage.vue')
    },
    {
        path: "/create-blog",
        name: 'CreateBlog',
        component: ()=> import ('../views/CreateBlog.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router