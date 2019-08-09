import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
const state = {
  city:"北京",
  restaurant_categoryids:'',//商店分类id
  classifyB_c:0,//点击导航是否显示
  userinfo:[],//存储登录的信息
  all:[],//存储获取的地址的信息
  searchAddressName:"",   //搜索地址的名字
  shopCarList:{},//购物车id
  restaurantgoods:[],//商店商品信息
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
})
