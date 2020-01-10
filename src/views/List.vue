<template>
  <div class="list">
    <h1>Thing to do</h1>
    <ul v-if="todos.length">
      <Todo v-for="(todo, index) in todos" :key="todo" @remove="remove(index)">
        {{ todo }}
      </Todo>
    </ul>
    <span v-else>
      You have nothing to do
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Todo from "@/components/Todo.vue";

export default {
  name: "home",
  components: {
    Todo
  },
  computed: mapState("todo", {
    todos: "list"
  }),
  methods: mapMutations("todo", ["remove"])
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
</style>
