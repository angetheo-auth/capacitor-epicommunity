import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/dashboard/Dashboard'
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
  },
  {
    path: '/signup',
    component: () => import ('../views/SignUpPage.vue')
  },
  {
    path: '/email-verification',
    component: () => import ('../views/EmailVerificationPage.vue')
  },
  {
    path: '/signin',
    component: () => import ('../views/SignInPage.vue')
  },
  {
    path: '/password-reset-request',
    component: () => import ('../views/PasswordResetRequest.vue') 
  },
  {
    path: '/password-reset',
    component: () => import ('../views/PasswordReset.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
