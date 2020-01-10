<template>
  <div class="add">
    <h1>Add a todo</h1>
    <form @submit.prevent="submit">
      <input type="text" v-model="todo" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    ...mapMutations("todo", ["add"]),
    submit() {
      this.add(this.todo);
      this.todo = "";
      this.$router.push("/");
    }
  }
};
</script>
