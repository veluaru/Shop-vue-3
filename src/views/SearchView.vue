<template>
  <div class="search-view">
    <div class="search-view__header" v-if="!loading">
      <h1 v-if="!showAllProducts" class="search-view__header__title">
        Search results for "{{ route.query.text }}"
      </h1>
      <h1 v-if="showAllProducts" class="search-view__header__title">All products</h1>
      <span class="search-view__header__sub-title">
        {{ filteredProducts.length }}&nbsp;products found
      </span>
    </div>
    <div class="search-view__filters" v-if="!loading">
      <button
        v-for="category in filterCategories"
        :key="category"
        class="search-view__filters__button"
        :class="{ 'search-view__filters__button--active': selectedCategory === category }"
        @click="changeCategory(category)"
      >
        {{ category }}
      </button>
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
const filteredProducts = ref([])
const loading = ref(false)
const showAllProducts = ref(true)
const selectedCategory = ref('All')
const filterCategories = ['All', ...categories]

const applyFilters = () => {
  let products = allProducts.value
  const text = searchText.value

  if (text && text !== '') {
    products = products.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    )
  }

  if (selectedCategory.value !== 'All') {
    products = products.filter(
      (product) => product.category.toLowerCase() === selectedCategory.value.toLowerCase()
    )
  }

  filteredProducts.value = products
}

const changeCategory = (category) => {
  selectedCategory.value = category
  applyFilters()
}

const changeView = (viewName, params) => {
  const parameters = params ? { params: { id: params.id } } : {}
  router.push({ name: viewName, ...parameters })
}

const getProducts = async () => {
  loading.value = true
  await productsStore.getAllProducts()
  selectedCategory.value = 'All'
  applyFilters()
  showAllProducts.value = !searchText.value || searchText.value === ''
  loading.value = false
}

onBeforeMount(async () => {
  getProducts()
})

watch(
  () => searchText.value,
  (newValue, oldValue) => {
    if (!newValue && oldValue) {
      // When search is cleared
      selectedCategory.value = 'All'
    }
    getProducts()
  }
)

watch(
  () => route.query.text,
  (newValue) => {
    if (newValue !== searchText.value) {
      searchText.value = newValue
    }
  }
)
</script>

<style scoped lang="scss">
.search-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
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
  &__filters {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    width: 100%;
    &:hover {
      color: white;
    }
    &__button {
      @include main-button;
      background-color: transparent;
      border: 1px solid black;
      color: black;
      &--active {
        border: 1px solid transparent;
        background-color: black;
        color: white;
      }
      &:hover {
        border: 1px solid transparent;
        color: white;
      }
    }
  }
}
</style>