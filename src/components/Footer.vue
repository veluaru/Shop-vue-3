<template>
  <footer class="footer">
    <span class="footer__title">Stay Updated</span>
    <span class="footer__sub-title">Get notified about new arrivals and exclusive offers</span>
    <div class="footer__input-wrapper">
      <input type="text" placeholder="Your email" class="footer__input-wrapper__input" />
      <button class="footer__input-wrapper__button">Subscribe</button>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8% 0;
  margin-top: 30px;
  &__title {
    font-size: 24px;
    margin-bottom: 16px;
  }
  &__sub-title {
    font-size: 16px;
    margin-bottom: 30px;
  }
  &__input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    &__input {
      padding: 10px;
      border: 1px solid #ccc;
      max-width: 300px;
      width: 100%;
      height: 18px;
      &:focus {
        outline: none;
      }
    }
    &__button {
      @include main-button;
    }
  }
}
</style>