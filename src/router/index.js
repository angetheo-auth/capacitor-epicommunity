import { createRouter, createWebHistory } from '@ionic/vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const authRoutes = {
  path: '/',
  component: AuthLayout,
  children: [
    { path: 'signin', component: () => import('../views/SignInPage.vue') },
    { path: 'signup', component: () => import('../views/SignUpPage.vue') },
    { path: 'email-verification', component: () => import('../views/EmailVerificationPage.vue') },
    { path: 'password-reset-request', component: () => import('../views/PasswordResetRequest.vue') },
    { path: 'password-reset', component: () => import('../views/PasswordReset.vue') },
    { path: 'role-selection', component: () => import('../views/RoleSelectionPage.vue') },
    { path: 'profile-creation', component: () => import('../views/ProfileCreationPage.vue') }
  ]
}
const appRoutes = {
  path: '/',
  component: AppLayout,
  children: [
    { path: '', redirect: '/dashboard' },
    { path: 'dashboard', component: () => import('../views/DashboardPage.vue') },
    { path: 'profile', component: () => import('../views/ProfilePage.vue') },
    { path: 'chat', component: () => import('../views/ChatPage.vue') },

    { path: 'create-entity/:type', component: () => import('../views/CreateEntity.vue'), props: true },
    { path: 'entity/:type', name: 'EntityPage', component: () => import('../views/EntityPage.vue'), props: true },
    { path: 'update-entity/:type', component: () => import('../views/UpdateEntity.vue'), props: true },

    { path: 'Groups', component: () => import('../views/GroupsPage.vue') },
    { path: 'group-entity', component: () => import('../views/GroupEntity.vue') },
    { path: 'create-group', component: () => import('../views/CreateGroup.vue') },
    { path: 'update-group', component: () => import('../views/UpdateGroup.vue') },

    { path: 'assessment', component: () => import('../views/AssessmentPage.vue') },
    { path: 'recommendations/:type', component: () => import('../views/RecommendationsPage.vue'), props: true },
    { path: 'search/:type', component: () => import('../views/SearchPage.vue'), props: true }
  ]
}
const routes = [
  authRoutes,
  appRoutes,
  { path: '/:pathMatch(.*)*', redirect: '/signin' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
