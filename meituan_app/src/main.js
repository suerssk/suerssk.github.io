import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.less';
// 导入mock执行函数，模拟数据
import './utils/mock_to_getData.js';

Vue.use(ElementUI);
// 自定义指令 -- 点击选择框以外部分隐藏弹出框
Vue.directive('document-click', {
    bind(el, binding) {
        document.addEventListener('click', binding.value, false);
    }
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')