import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
// import axios from 'axios';
import router from './router';
import request from './utils/request';
import echarts from 'echarts';
Vue.prototype.request = request; //挂载到原型，可以在全局中使用
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
