import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo: {
      namespaced: true,
      state: {
        list: []
      },
      mutations: {
        remove(state, index) {
          state.list.splice(index, 1);
        },
        add(state, todo) {
          state.list.push(todo);
        }
      },
      actions: {}
    }
  }
});
