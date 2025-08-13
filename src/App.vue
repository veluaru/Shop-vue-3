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
  font-family: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
}
</style>
