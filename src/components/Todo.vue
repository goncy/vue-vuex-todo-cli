<template>
  <li class="todo">
    <slot></slot>
    <span @click="remove">[X]</span>
  </li>
</template>

<script>
export default {
  props: {
    index: Number
  },
  methods: {
    remove() {
      this.$emit("remove", this.index);
    }
  }
};
</script>

<style scoped>
.todo {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
