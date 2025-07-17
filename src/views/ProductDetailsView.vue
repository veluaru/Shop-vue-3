<template>
  <div class="product-details" v-if="productDetails && !loading">
    <img :src="productDetails.image" alt="Product image" class="product-details__image" />
    <div class="product-details__information">
      <span class="product-details__information__category">{{ productDetails.category }}</span>
      <span class="product-details__information__title">{{ productDetails.name }}</span>
      <span class="product-details__information__price">${{ productDetails.price }}</span>
      <span class="product-details__information__description">
        {{ productDetails.description }}
      </span>
      <div>
        <span class="product-details__information__rating">{{ productDetails.rating.rate }}</span>
        <span class="product-details__information__features-list">
          {{ productDetails.rating.count }} opinions
        </span>
      </div>
    </div>
  </div>
  <div class="product-details-not-found" v-if="!productDetails && !loading">Product not found</div>
  <div class="product-details-loading" v-if="loading">
    <LoadingSpinner />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useProductsStore } from '@/stores/products'
import { useRoute } from 'vue-router'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const route = useRoute()
const productsStore = useProductsStore()
const loading = ref(false)
const productDetails = ref(null)

const changeView = (viewName) => {}

onBeforeMount(async () => {
  loading.value = true
  if (route.params.id) {
    productDetails.value = await productsStore.getProductById(route.params.id)
  } else {
    productDetails.value = null
  }
  loading.value = false
})
</script>

<style scoped lang="scss">
.product-details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5%;
  &__image {
    max-width: 500px;
  }
  &__information {
    min-width: 300px;
    &__category {
    }
    &__title {
    }
    &__price {
    }
    &__description {
    }
    &__features {
    }
    &__features-list {
    }
  }
}
.product-details-not-found {
}
.product-details-loading {
  width: 100%;
  margin-top: 10%;
  display: flex;
  justify-content: center;
}
</style>