<template>
  <div class="search-view">
    <div class="search-view__header" >
      <h1 v-if="!showAllProducts || loading" class="search-view__header__title">Search results for "{{ route.query.text }}"</h1>
      <h1 v-if="showAllProducts" class="search-view__header__title">All products</h1>
      <span class="search-view__header__sub-title">
        {{ filteredProducts.length }}&nbsp;products found
      </span>
    </div>
    <div class="search-view__products" v-if="!loading">
      <ProductCard
        v-for="item in filteredProducts"
        :key="item.id"
        :product="item"
        @click="changeView('productDetails', item)"
      />
    </div>
    <p v-if="!loading && filteredProducts.length === 0">No products found.</p>
    <div class="search-view__loading" v-if="loading">
      <LoadingSpinner />
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ProductCard from '@/components/ProductCard.vue'
import { categories } from '@/utils/constants'

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()
const { allProducts, searchText } = storeToRefs(productsStore)
const filteredProducts = ref([]);
const loading = ref(false)
const showAllProducts = ref(true);

const changeView = (viewName, params) => {
  const parameters = params ? { params: { id: params.id } } : {}
  router.push({ name: viewName, ...parameters })
}

const getProducts = async (text) => {
  loading.value = true
  //   await productsStore.getProductsByValue(route.query.text || '')
  await productsStore.getAllProducts();
  filteredProducts.value = text && text !== '' ? allProducts.value.filter(product => product.title.toLowerCase().includes(text.toLowerCase())) : allProducts.value;
  showAllProducts.value = text && text !== '' ? false : true;
  loading.value = false
}

onBeforeMount(async () => {
  getProducts(route.query.text);
})

watch(
  () => searchText.value,
  (newValue) => {
    getProducts(newValue);
  }
);
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