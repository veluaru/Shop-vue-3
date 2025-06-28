<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <MainHeader />
  <RouterView />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}
</style>
