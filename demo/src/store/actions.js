import {
  GET_CITY,
  SET_RESTAURANT_CATEGORY_IDS,
  SET_CLASSIFY_BC,
  SET_NAME,
  SET_USER_INFO,
  SET_ALL_INFO,
  SET_SHOP_CAR_LIST,
  REMOVE_SHOP_CAR_LIST,
  INIT_SHOP_CAR_LIST,
  CLEAT_SHOP_CAR_LIST,
  SET_RESTAURANT_GOODS,
  UPDATE_RESTAURANT_GOODS,
  SET_SEARCH_ADDRESS_NAME,
  SET_GEO_HASH
} from "./mutation-types"
import {setStore} from "../config/mUtils";
export default {
    [GET_CITY]({commit},value){
      commit(GET_CITY,value)
    },
  //设置商店分类id,方便父元素获取
  [SET_RESTAURANT_CATEGORY_IDS]({commit},value){
    commit(SET_RESTAURANT_CATEGORY_IDS,value)
  },
  //设置设置导航是否显示
  [SET_CLASSIFY_BC]({commit},value){
    commit(SET_CLASSIFY_BC,value)
  },
  //设置用户信息
  [SET_USER_INFO]({commit},value){
    commit(SET_USER_INFO,value)
  },


//  搜索地址
  [SET_ALL_INFO]({commit},value){
    commit(SET_ALL_INFO,value)
  },
  [SET_SEARCH_ADDRESS_NAME]({commit},value){
    commit(SET_SEARCH_ADDRESS_NAME,value)
  },


  [SET_SHOP_CAR_LIST]({commit},value){
    commit(SET_SHOP_CAR_LIST,value)
  },
  [REMOVE_SHOP_CAR_LIST]({commit},value){
    commit(REMOVE_SHOP_CAR_LIST,value)
  },
  [INIT_SHOP_CAR_LIST]({commit}){
    commit(INIT_SHOP_CAR_LIST)
  },
  [CLEAT_SHOP_CAR_LIST]({commit},value){
    commit(CLEAT_SHOP_CAR_LIST,value)
  },
  //存入购物车数据
  [SET_RESTAURANT_GOODS]({commit},value){
    commit(SET_RESTAURANT_GOODS,value)
  },
  //更新购物车数据
  [UPDATE_RESTAURANT_GOODS]({commit}){
    commit(UPDATE_RESTAURANT_GOODS);
  },
  //设置用户的geohash
  //设置geohash
  [SET_GEO_HASH]({commit},value){
    commit(SET_GEO_HASH,value);
  }

}
