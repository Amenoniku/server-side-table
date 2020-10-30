<template>
  <button class="button" @click="$emit('click')">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["label"]
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0 10px;
  padding: 10px;
  background: cadetblue;
  color: white;
  border-radius: 7px;
  border: none;
}
</style>
