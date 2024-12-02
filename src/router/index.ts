import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Library from '@/views/Library.vue'
import Users from '@/views/Users.vue'
import MyBooks from '@/views/MyBooks.vue'
import UserReviews from '@/views/UserReviews.vue'
import Signup from '@/views/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/library',
      name: 'library',
      component: Library,
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/my-books',
      name: 'my-books',
      component: MyBooks
    },
    {
      path:'/user-reviews',
      name: 'user-reviews',
      component: UserReviews
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ],
})

export default router
