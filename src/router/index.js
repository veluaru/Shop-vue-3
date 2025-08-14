import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      component: ProductDetailsView,
    },
    {
      path: '/search',
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
