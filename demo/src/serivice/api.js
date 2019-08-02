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

// 根据经纬度获取详细地址

export const pois = (p) => get('/v2/pois/'+p);


//获取商铺列表

export const getrestaurants = (p) => get('/shopping/restaurants',p);

