<template>
  <header class="main-header">
    <!-- <div class="header-container"> -->
    <nav class="main-nav">
      <div class="main-nav__left">
        <span class="main-nav__left__logo-link" @click="changeView('home')">MINIMAL</span>
      </div>
      <div class="main-nav__center">
        <div class="main-nav__center__search-bar">
          <i class="pi pi-search"></i>
          <input type="text" placeholder="Search products..." class="main-nav__center__input" />
        </div>
      </div>
      <div class="main-nav__right">
        <span class="main-nav__right__link">Shop</span>
        <i class="pi pi-shopping-cart main-nav__right__cart"></i>
      </div>
    </nav>
    <!-- </div> -->
  </header>
</template>

<script setup>
const changeView = (viewName) => {}
</script>

<style scoped lang="scss">
.main-header {
  width: 100%;
  border-bottom: 1px solid rgb(204, 204, 204);
  background-color: #fff;
  box-sizing: border-box;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  @media screen and (max-width: 1024px) {
    padding: 0 5%;
  }
}
.main-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &__left {
    &__logo-link {
      letter-spacing: 2px;
      font-weight: lighter;
      font-size: 20px;
      color: rgb(17 24 39);
      cursor: pointer;
      &:hover {
        color: rgb(76, 81, 92);
      }
    }
  }
  &__center {
    max-width: 450px;
    width: 100%;
    &__search-bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 10px;
      padding: 5px 10px;
      height: 30px;
      border: 1px solid rgb(209 213 219);
      max-width: inherit;
    }
    &__input {
      border: none;
      height: 30px;
      width: 90%;
      &:focus {
        outline: none;
        border: none;
      }
      &::placeholder {
        font-size: 16px;
        color: rgb(174, 178, 184);
      }
    }
    i {
      font-size: 14px;
      margin-right: 10px;
      color: rgb(174, 178, 184);
    }
  }
  &__right {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 15px;
    &__link {
    }
    &__cart {
      font-size: 20px;
    }
  }
}
</style>