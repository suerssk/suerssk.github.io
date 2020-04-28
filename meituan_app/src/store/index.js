import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        position: "深圳"
    },
    mutations: {
        setPosition(state, value) {
            state.position = value;
        }
    },
    actions: {
        setPosition({ commit }, value) {
            // 异步请求后端获取当前位置数据
            commit("setPosition", value);
        }
    },
    modules: {}
});