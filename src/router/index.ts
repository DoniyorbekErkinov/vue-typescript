import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component:  () => import('../Pages/Home.vue')
    },
  ]
  
  export const router = createRouter({
    history: createWebHistory(),
    routes, 
  })