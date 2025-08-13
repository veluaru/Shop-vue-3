<template>
  <div class="product-details" v-if="productDetails && !loading">
    <img :src="productDetails.image" alt="Product image" class="product-details__image" />
    <div class="product-details__information">
      <span class="product-details__information__category">{{ productDetails.category }}</span>
      <span class="product-details__information__title">{{ productDetails.title }}</span>
      <span class="product-details__information__price">${{ productDetails.price }}</span>
      <span class="product-details__information__description">
        {{ productDetails.description }}
      </span>
      <div class="product-details__information__rating">
        <span class="product-details__information__rating__label">{{ productDetails.rating.rate }}</span>
        <StarsRating :modelValue="productDetails.rating.rate" />
        ({{ productDetails.rating.count }})
      </div>
      <div class="product-details__information__add-to-cart">
        <InputNumber v-model="addToCartQuantity" :min="1" :max="10" />
        <button class="product-details__information__add-to-cart__button" @click="addToCart()">ADD TO CART</button>
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
import StarsRating from '@/components/StarsRating.vue'
import InputNumber from '@/components/InputNumber.vue'

const route = useRoute()
const productsStore = useProductsStore()
const loading = ref(false)
const productDetails = ref(null)
const addToCartQuantity = ref(1)

const changeView = (viewName) => {}

const addToCart = () => {}

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  justify-items: center;
  padding: 5% 10%;
  @media (max-width: 950px) {
    grid-template-columns: 1fr; /* Stacks columns on small screens */
  }
  &__image {
    max-width: 500px;
    width: 100%;
  }
  &__information {
    min-width: 300px;
    max-width: 590px;
    display: flex;
    flex-direction: column;
    row-gap: 5%;
      @media (max-width: 950px) {
    row-gap: 35px;
      }
    &__category {
      font-size: 14px;
      color: #6b7280;
      text-transform: uppercase;
    }
    &__title {
      font-size: 34px;
    }
    &__price {
      font-size: 30px;
      font-weight: bold;
    }
    &__description {
      font-size: 16px;
      color: #4B5563;
    }
    &__rating {
      display: flex;
      flex-direction: row;
      align-items: center;
      &__label {
        font-size: 16px;
        margin-right: 10px;
      }
    }
    &__add-to-cart {
      display: flex;
      flex-direction: row;
      align-items: center;
      row-gap: 10px;
      margin-bottom: 20px;
      &__button {
        @include main-button;
        margin-left: 10px;
        height: 44px;
      }
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