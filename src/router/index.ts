import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/profile/:id',
    component: () => import ('../views/ProfilePage.vue')
  },
  {
    path: '/dashboard/:id',
    component: () => import ('../views/DashboardPage.vue')
  },
  {
    path: '/chat/:id',
    component: () => import ('../views/ChatPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
