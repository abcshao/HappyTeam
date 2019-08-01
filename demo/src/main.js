// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//移动端 字体样式自动设置   pc端不需要设置
import './config/rem'
// 获取vuex store
import store from './store/index'

//引入公共common.less 重置样式
import "./style/common.less"

//使用element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//使用vant样式
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//移动端双击操作设置  // 防止页面双击，放大页面
import FastClick from "fastclick"
//使用fastclick
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//     FastClick.attach(document.body);
//   }, false);
// }

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
