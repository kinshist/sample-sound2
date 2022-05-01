<script setup lang="ts">
interface Props {
  label: string;
}
const props = defineProps<Props>();
</script>

<template>
  <button @click="$emit('click-btn')">
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 256px;
  margin: auto;
  font-size: 14px;
  text-align: center;
  background-color: #fff5fa;
  color: #de669a;
  font-weight: bold;
  border: #de669a 1px solid;
  border-radius: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    width: 0;
    height: 0;
    margin: auto;
    border-top: transparent 7px solid;
    border-right: transparent 12px solid;
    border-bottom: transparent 7px solid;
    border-left: #de669a 12px solid;
  }
  &.back {
    width: 190px;
    height: 36px;
    font-size: 11px;
    background-color: #fff;
    color: #535353;
    font-weight: bold;
    border: #d0d0d0 1px solid;
    border-radius: 50px;
    &::after {
      right: auto;
      left: 20px;
      border-top: transparent 5px solid;
      border-left: transparent 9px solid;
      border-bottom: transparent 5px solid;
      border-right: #535353 9px solid;
    }
  }
}
</style>
