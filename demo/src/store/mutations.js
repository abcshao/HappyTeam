import {GET_CITY,SET_RESTAURANT_CATEGORY_IDS,SET_CLASSIFY_BC,SET_NAME} from "./mutation-types"

export default {
  [GET_CITY](state,value) {
    state.city=value;
  },
  //设置商店分类id
  [SET_RESTAURANT_CATEGORY_IDS](state,value){
    state.restaurant_categoryids=value;
  },
  //设置导航是否显示
  [SET_CLASSIFY_BC](state,value){
    state.classifyB_c=value;

  }

}
