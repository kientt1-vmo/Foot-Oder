import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from "@/views/Login.vue";
import FeedBack from '@/views/FeedBack.vue';
import Debt from '../views/Debt.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: FeedBack
  },
  {
    path: '/debts',
    name: 'Debts',
    component: Debt
  },

  {
     path: '/login',
     name: 'Login',
     component: Login,
     props: true
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
