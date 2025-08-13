<template>
  <div class="stars-container">
    <i
      v-for="star in 5"
      :key="star"
      class="pi pi-star-fill stars-container__icon"
      :class="{ filled: star <= modelValue }"
      @click="setRating(star)"
    ></i>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
})
const emit = defineEmits(['update:modelValue'])
const setRating = (rating) => {
  emit('update:modelValue', rating)
}
</script>


<style scoped lang="scss">
.stars-container {
  display: flex;
  flex-direction: row;
  &__icon {
    color: #ccc;
    font-size: 25px;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    margin: 0 3px;
    &:hover {
      transform: scale(1.05);
      color: #ffcc33;
    }
    &:active {
      transform: scale(0.95);
    }
  }
}
.stars-container__icon.filled {
  color: #ffc107;
}
</style>