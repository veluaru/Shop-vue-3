<template>
  <main>
    <div class="home">
      <div class="header">
        <span class="header__title">Less is More</span>
        <span class="header__sub-title">Curated essentials for the modern lifestyle</span>
        <button class="header__button" @click="changeView('home')">SHOP NOW</button>
      </div>
      <div class="featured">
        <div class="featured__header">
          <span class="featured__header__title">Featured</span>
          <div class="featured__header__line"></div>
        </div>
        <div class="featured__products">
          <ProductCard v-for="item in allProducts.slice(0, 8)" :key="item.id" :product="item" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductsStore } from '@/stores/products'
import { storeToRefs } from 'pinia'

const productsStore = useProductsStore()
const { allProducts } = storeToRefs(productsStore)
const loading = ref(false)

const changeView = (viewName) => {}

onBeforeMount(async () => {
  loading.value = true
  await productsStore.getAllProducts()
  loading.value = false
})
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 80px;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  text-align: center;
  background-color: #f9fafb;
  width: 100%;
  padding: 10% 0;
  &__title {
    font-size: 40px;
    font-weight: lighter;
  }
  &__sub-title {
    font-size: 20px;
    font-weight: lighter;
  }
  &__button {
    @include main-button;
  }
}
.featured {
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    margin-bottom: 4rem;
    &__title {
      font-size: 30px;
    }
    &__line {
      height: 1px;
      background: rgb(22, 22, 22);
      width: 60px;
    }
  }
  &__products {
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    max-width: 1200px;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    align-items: center;
    gap: 2rem;
  }
}
</style>