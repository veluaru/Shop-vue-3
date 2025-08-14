<template>
  <div class="search-view">
    <div class="search-view__header">
      <h1 class="search-view__header__title">Search results for "{{ route.query.text }}"</h1>
      <span class="search-view__header__sub-title">
        {{ allProducts.length }}&nbsp;products found
      </span>
    </div>
    <div class="search-view__products" v-if="!loading">
      <ProductCard
        v-for="item in allProducts"
        :key="item.id"
        :product="item"
        @click="changeView('productDetails', item)"
      />
    </div>
    <p v-if="!loading && allProducts.length === 0">No products found.</p>
    <div class="search-view__loading" v-if="loading">
      <LoadingSpinner />
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ProductCard from '@/components/ProductCard.vue'
import { categories } from '@/utils/constants'

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()
const { allProducts } = storeToRefs(productsStore)
const loading = ref(false)

const changeView = (viewName, params) => {
  const parameters = params ? { params: { id: params.id } } : {}
  router.push({ name: viewName, ...parameters })
}

onBeforeMount(async () => {
  loading.value = true
  //   await productsStore.getProductsByValue(route.query.text || '')
  await productsStore.getAllProducts()
  loading.value = false
})
</script>

<style scoped lang="scss">
.search-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 80px;
  padding: 30px 10%;
  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    align-items: center;
    gap: 50px;
    margin-bottom: 30px;
    width: 100%;
    @media screen and (max-width: 1024px) {
      gap: 20px;
    }
  }
  &__loading {
    width: 100%;
    margin-top: 10%;
    display: flex;
    justify-content: center;
  }
  &__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    row-gap: 20px;
    &__title {
      font-size: 30px;
      font-weight: lighter;
    }
    &__sub-title {
      font-size: 16px;
      color: #4b5563;
    }
  }
}
</style>