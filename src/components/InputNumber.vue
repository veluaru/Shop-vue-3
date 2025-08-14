<template>
  <div class="input-number">
    <button @click="decrement" class="input-number__button" aria-label="Decrease value">-</button>
    <input
      type="text"
      :value="modelValue"
      @input="handleInput"
      class="input-number__value-display"
      readonly
    />
    <button @click="increment" class="input-number__button" aria-label="Increase value">+</button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: Infinity,
  },
})

const emit = defineEmits(['update:modelValue'])

const increment = () => {
  if (props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1)
  }
}

const decrement = () => {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1)
  }
}
</script>

<style scoped lang="scss">
.input-number {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  width: fit-content;
  color: #020817;

  &__value-display {
    width: 40px;
    height: 100%;
    text-align: center;
    font-size: 16px;
    border: none;
    border-left: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    padding: 12px 0;
    background-color: transparent;
    outline: none;
    &:focus {
      outline: none;
    }
  }
  &__button {
    width: 30px;
    height: 40px;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #f7f7f7;
      color: #000;
    }
    &:active {
      background-color: #eeeeee;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>