<template>
  <div class="page-not-found">
    <span class="page-not-found__title">Ups!</span>
    <span class="page-not-found__sub-title">Page not found</span>
    <button class="page-not-found__button" @click="changeView('home')">Go home</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const changeView = (viewName) => {
  router.push({ name: viewName })
}
</script>

<style scoped lang="scss">
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding-top: 5%;
  &__title {
    font-size: 30px;
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
</style>