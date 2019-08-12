export default {
   // 根据商店id   restaurant 查询对应商店购物车的数据
  shopcard: (state) => (id) => {
    var result =  state.restaurantgoods.filter(item=>{
      return  item.restaurant_id== id;
    });
    return result;
  },
  //获取栏目左侧不同栏目商品数量的的获取
  allcategorynum: (state) => (id) => {
    var goods_num = [];
    var result =  state.restaurantgoods.filter(item=>{
      return  item.restaurant_id== id;
    });

    result.forEach(item=>{
      var num = 0;
      item.foods.forEach(it=>{
        it.specfoods.forEach(i=>{
          if(i.goodsnum>0){
            num  = i.goodsnum+num;
          }else{
            num=num+0;
          }
        });
      });
      goods_num.push(num)
    });
    return goods_num;
  },
  //获取购买的商品数量并且是如果是是多规格的还有单个的分别摘出来
  allcartlist: (state) => (id) => {
    var cartlist = [];
    var result =  state.restaurantgoods.filter(item=>{
      return  item.restaurant_id== id;
    });

    result.forEach(item=>{
      item.foods.forEach(it=>{
          var type  =  it.specifications.length>0?'spec_type':'normal_type';
             it.specfoods.forEach(i=>{
               if(i.goodsnum>0){
                 i.type = type;
                 cartlist.push(i);
               }
             })

      });
    });
     return cartlist;
  }

}
