<template>
  <div class="product-card">
    <img :src="product.image" alt="Product image" class="product-card__image" />
    <div class="product-card__bottom-wrapper">
      <span class="product-card__category">{{ product.category }}</span>
      <span class="product-card__title">{{ product.title }}</span>
      <span class="product-card__price">{{ product.price }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    box-shadow: 2px 2px 20px -2px rgba(0, 0, 0, 0.411);
    -webkit-box-shadow: 2px 2px 20px -2px rgba(0, 0, 0, 0.411);
    -moz-box-shadow: 2px 2px 20px -2px rgba(0, 0, 0, 0.411);
    .product-card__image {
      transform: scale(1.1);
    }
  }
  &__image {
    max-height: 250px;
    transition: transform 0.3s ease-in-out;
  }
  &__bottom-wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  &__category {
    font-size: 12px;
  }
  &__title {
    font-size: 18px;
    font-weight: 100;
  }
  &__price {
    font-size: 18px;
    font-weight: normal;
  }
}
</style>
