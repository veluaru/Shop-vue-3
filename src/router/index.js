import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      component: ProductDetailsView,
    },
    {
      path: '/search/:text',
      name: 'searchView',
      component: SearchView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import(/* webpackChunkName: "pagenotfound" */ '@/views/PageNotFound.vue'),
    },
  ],
})

export default router
