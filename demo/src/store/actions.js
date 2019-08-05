import {GET_CITY,SET_RESTAURANT_CATEGORY_IDS,SET_CLASSIFY_BC} from "./mutation-types"

export default {
    [GET_CITY]({commit}){
      commit(GET_CITY)
    },
  //设置商店分类id,方便父元素获取
  [SET_RESTAURANT_CATEGORY_IDS]({commit},value){
    commit(SET_RESTAURANT_CATEGORY_IDS,value)
  },
  //设置设置导航是否显示
  [SET_CLASSIFY_BC]({commit},value){
    commit(SET_CLASSIFY_BC,value)
  },

}
