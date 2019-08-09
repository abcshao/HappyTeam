import {get , post} from "../config/http"

//使用axios 调用接口 封装的方法 ，以后调用接口 直接在这里设置function函数
// // 获取商品列表

export const cityGuess = () => get('/v1/cities', {
  type: 'guess'
});
/**
 * 获取首页热门城市
 */
export const hotcity = () => get('/v1/cities', {
  type: 'hot'
});

/**
 * 获取首页所有城市
 */
export const groupcity = () => get('/v1/cities', {
  type: 'group'
});

/*
* 获取城市搜索地址
* */
export const getSearchCity=(p)=>get('/v1/pois',p);

/*
* 获取食品分类列表
* */
export const  getEntryList = ()=>get("/v2/index_entry");



//请求验证码
export const yzmjmx = () => post('/v1/captchas');

//获取登陆用户名密码数据
export const landing_c = (p) => post('/v2/login',p);

//修改用户密码
export const amend_c = (p) => post('/v2/changepassword',p);

//获取添加地址数据
export  const address_c = (p) => post('v1/users/:user_id/addresses', p)


//获取红包数据
export const getdiscounts=()=>get('/promotion/v2/users/1/hongbaos?limit=20&offset=0');


//获取服务中心的数据
export const getsvip=()=>get('/v3/profile/explain');

// 根据经纬度获取详细地址

export const pois = (p) => get('/v2/pois/'+p);


//获取商铺列表

export const getrestaurants = (p) => get('/shopping/restaurants',p);
//商铺筛选单独接口

export const getrestaurants_shai = (p) => get('/shopping/restaurants?'+p);

//获取所有的商铺列表

export const get_restaurant_category = () => get('/shopping/v2/restaurant/category');

//获取配送方式

export const get_delivery_modes = (p) => get('/shopping/v1/restaurants/delivery_modes',p);

//获取商家属性活动列表

export const get_activity_attributes = (p) => get('/shopping/v1/restaurants/activity_attributes',p);

//获取餐馆详情

export const get_restaurant_message = (p) => get('/shopping/restaurant/'+p);

//获取餐馆食品列表
// https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1

export const get_restaurant_goods_list = (p) => get('/shopping/v2/menu',p);

//获取商店评价信息

export const get_restaurant_rating = (p,offset=0)=>get("/ugc/v2/restaurants/"+p+"/ratings?offset="+offset+"&limit=10");

//获取商店评价分数

export const get_restaurant_rating_score = (p)=>get("/ugc/v2/restaurants/"+p+"/ratings/scores");

//获取评价分类

export const get_restaurant_rating_tags =(p)=>get("/ugc/v2/restaurants/"+p+"/ratings/tags");
