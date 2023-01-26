import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostaComment.vue')
  },
  {
    path: '/liked',
    name: 'liked',
    component: () => import(/* webpackChunkName: "about" */ '../views/MostLikedWebsite.vue')
  },
  {
    path: '/commented',
    name: 'commented',
    component: () => import(/* webpackChunkName: "about" */ '../views/MostLikedWebsite.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyProfile.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingsView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
