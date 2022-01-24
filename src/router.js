import { createRouter, createWebHistory } from "vue-router";
import realApp from "./realApp.vue";
import Login from "./components/Login.vue";

const notFound = { template: '<div>Error 404</div>' };

const routes = [
    { 
        path: '/Home' , 
        name: 'Home', 
        component: realApp 
    },
    { 
        path: '/Login', 
        name: 'Login', 
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

