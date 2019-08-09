import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  city:"北京",
  restaurant_categoryids:'',//商店分类id
  classifyB_c:0,//点击导航是否显示
  searchAddressName:"",   //搜索地址的名字
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
