import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from "@/views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: HomePage
  },
  {
    path: '/debts',
    name: 'Debt',
    component: HomePage
  },

  {
     path: '/login',
     name: 'Login',
     component: Login,
     props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
