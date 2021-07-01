import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    // vue의 data와 비슷
  },
  getters: {
    // vue의 computed와 비슷
  },
  mutations: {
    // state를 수정할 때 사용. 동기적으로..
  },
  actions: {
    // 비동기를 사용할 때, 또는 여러 mutation을 연달아 실행할 때
  },
});
