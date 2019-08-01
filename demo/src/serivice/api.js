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


export const apiGoodsList = () => get('/getGoodsList');

// //添加商品
// export const apiAddGoods = (p) => post('/addData',p);
//
// //删除商品
// export const  apiDelGoods=(p)=>get("/delGoods",p);
//
// //添加购物车
// export const  apiAddShopCar=(p)=>post("/addShopCar",p);
//
// //获取所有购车所有信息
// export const  apiGetShopCar=()=>get("/getShopCar");
//
// //删除购物车
// export const  apiDelCar=(p)=>get("/delCar",p);
//
// // 购物车修改
// export const  apiUpdateCar =(p)=>post("/updateShopCar",p);

