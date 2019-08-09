
import {
  GET_CITY,
  SET_RESTAURANT_CATEGORY_IDS,
  SET_CLASSIFY_BC,
  SET_NAME,
  SET_SHOP_CAR_LIST,
  REMOVE_SHOP_CAR_LIST,
  INIT_SHOP_CAR_LIST,
  CLEAT_SHOP_CAR_LIST,
  SET_RESTAURANT_GOODS,
  UPDATE_RESTAURANT_GOODS,
  SET_SEARCH_ADDRESS_NAME

} from "./mutation-types"

import {getStore,setStore}  from "../config/mUtils";
export default {
  [GET_CITY](state, value) {
    state.city = value;
  },
  //设置商店分类id
  [SET_RESTAURANT_CATEGORY_IDS](state, value) {
    state.restaurant_categoryids = value;
  },
  //设置导航是否显示
  [SET_CLASSIFY_BC](state, value) {
    state.classifyB_c = value;
  },
  //购物车数据存入vuex中
  [SET_SHOP_CAR_LIST](state, {
    shopId,       //商店id
    category_id,  //食品分类id
    item_id,     //食品规格id
    food_id,   // 食品id
    name,   //商品名称
    price,  //商品价格
    specs,   //食品规格
    type='no_spec'   //判断是否是规格产品
  }) {
    var carList = state.shopCarList;
    var shop = carList[shopId] = (carList[shopId] || {});
    var category = shop[category_id] = (shop[category_id] || {});
    var item = category[item_id] = (category[item_id] || {});
    if(item[food_id]){
      item[food_id].num++;
    }else{
      item[food_id]={
        name,
        num:1,
        price,
        specs,
        type,
      }
    }
    //把购物车数据存入vuex的同时直接存入localstorage
    state.shopCarList={...carList};
    setStore('LocalshopCar',state.shopCarList);
  },
  //购物车删除对应的数据
  [REMOVE_SHOP_CAR_LIST](state,{
    shopId,       //商店id
    category_id,  //食品分类id
    item_id,     //食品规格id
    food_id,   // 食品id
    name,   //商品名称
    price,  //商品价格
    specs   //食品规格
  }){
    var carList = state.shopCarList;
    var shop = carList[shopId] = (carList[shopId] || {});
    var category = shop[category_id] = (shop[category_id] || {});
    var item = category[item_id] = (category[item_id] || {});
    if(item[food_id]){
       if(item[food_id].num>0){
         item[food_id].num--;
         setStore('LocalshopCar',state.shopCarList);
       }else{
         //直接清空购物车
         item[food_id]=null;
       }
    }

  },

  [SET_SEARCH_ADDRESS_NAME](state,value) {
    state.searchAddressName = value;
  },
  //刷新页面初始化时，把local的数据传输给vuex  给vuex重新赋值
  [INIT_SHOP_CAR_LIST](state){
     let data = getStore("LocalshopCar");
    if(data){
        state.shopCarList=JSON.parse(data);
    }
  },
  //清空对应商店的购物车
  [CLEAT_SHOP_CAR_LIST](state,{
    shopId
  }){
    var carList = state.shopCarList;
    carList[shopId]=null;
    state.shopCarList={...carList};
    setStore('LocalshopCar',state.shopCarList);
  },
  //存入购物车数据
  [SET_RESTAURANT_GOODS](state,{id,data}){
    // this.$set(data,'shopid',id);
    if(state.restaurantgoods.length>0){
      var result =   state.restaurantgoods.filter((item)=>{
         return  item.restaurant_id== id;
        });
      if(result.length==0){
        state.restaurantgoods=state.restaurantgoods.concat(data);;
        }
    }else{
      state.restaurantgoods=data;
    }
  },
  //更新购物车数据
  [UPDATE_RESTAURANT_GOODS](state){
    state.restaurantgoods=state.restaurantgoods;

  }
}
