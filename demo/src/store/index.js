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
  geohash:"", //城市经纬度
  latitude:[], //搜索历史
  remarks:'',//备注信息.
  useraddress:'',//用户下单地址设置
  useraddressindex:'',//用户地址下标设置
  addStatus:'',//添加地址是否成功的状态

};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
})
