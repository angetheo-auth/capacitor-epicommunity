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
  },
  {
    path: '/role-selection',
    component: () => import ('../views/RoleSelectionPage.vue') 
  },
  {
    path: '/profile-creation',
    component: () => import ('../views/ProfileCreationPage.vue') 
  },
  {
    path: '/create-entity/:type',
    component: () => import ('../views/CreateEntity.vue'),
    props: true
  },
  {
    path: '/entity/:type',
    name: 'EntityPage',
    component: () => import('../views/EntityPage.vue'),
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
