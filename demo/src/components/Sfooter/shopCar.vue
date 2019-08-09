<template>
    <div class="s-shopcar">
        <div class="cart_icon_container" :class="{cart_icon_active:allmoney>0}"  @click="showcartdata()">
          <i class="iconfont" style="color: white;">&#xe60c;</i>
        </div>
        <div  class="cart_num">
          <div class="money" >¥ {{allmoney}}</div>
          <div class="pei_money">配送费¥{{float_delivery_fee}}</div>
        </div>
        <div class="gotopay " :class="{color_green:allmoney-float_minimum_order_amount>=0}">
          <span  class="gotopay_button_style" v-if="allmoney-float_minimum_order_amount>=0">去结算</span>
          <span  class="gotopay_button_style "   v-else>还差¥{{ Math.abs(allmoney-float_minimum_order_amount)   }}起送</span>
        </div>
        <div class="showcart" v-if="allmoney>0 && isshowcartdata">
          <header >
            <h4>购物车</h4>
            <div>
              <span class="clear_cart">清空</span>
            </div>
          </header>
          <section  id="cartFood" class="cart_food_details">
            <ul >
                <li  class="cart_food_li">
                      <div  class="cart_list_num">
                        <p  class="ellipsis">1231</p>
                        <p  class="ellipsis">132</p>
                      </div>
                      <div class="cart_list_price">
                        <span >¥</span>
                        <span >20</span></div>
                      <section  class="cart_list_control">
                        <span ></span>
                        <span  class="cart_num">1</span>
                      </section>
              </li>
             </ul>
          </section>
        </div>

        <div class="zhezhao"  v-if="iszhezhao && allmoney>0"></div>

    </div>
</template>

<script>
  import {mapGetters} from "vuex"

  export default {
        name: "shopCar",
        props:['cardata','float_delivery_fee','float_minimum_order_amount'],
       data(){
          return {
            isshowcartdata:false,
            iszhezhao:false,//判断遮罩层是否开启
          }
       },
        methods:{
          showcartdata(){
           if(this.iszhezhao){
             this.iszhezhao=false;
           }else{
             this.iszhezhao=true;
           }
            if(this.isshowcartdata){
              this.isshowcartdata=false;
            }else{
              this.isshowcartdata=true;
            }
          }
        },
      computed:{
        ...mapGetters([
          'shopcard',
        ]),
        //在此处调用 vuex 为啥没有数据
        allmoney(){
          var allmoney = 0;
          this.cardata.forEach(item=>{
             item.foods.forEach(it=>{
               if(it.goodsnum){
                 it.specfoods.forEach(i=>{
                   if(i.goodsnum){
                     allmoney=allmoney+i.goodsnum*i.price;
                   }
                 })
               }
             })
          });
          return allmoney;
        }
      }
    }
</script>

<style scoped lang="less">
  .zhezhao{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: -2;
  }
   .s-shopcar{
     width: 100%;
     height: 1.95rem;
      background-color: #333;
     position: fixed;
     left: 0;
     bottom: 0;
     z-index: 1000;
     .cart_icon_container{
       background-color: #3d3d3f;
       position: absolute;
       padding: .4rem;
       border: .18rem solid #444;
       border-radius: 50%;
       left: .5rem;
       top: -.7rem;
       width: 2.3rem;
       height: 2.3rem;
     }
     .cart_icon_active{
       background-color: #3190e8;
     }
     .cart_num{
       position: absolute;
       top: 50%;
       transform: translateY(-50%);
       left:4.0rem;
       color: #fff;
       font-size: 0.75rem;
       .money{
         font-size: 0.8rem;
         font-weight: 700;
       }
       .pei_money{
         font-size: 0.65rem;
       }

     }
     .gotopay{
       position: absolute;
       right: 0;
       background-color: #535356;
       width: 5.5rem;
       height: 100%;
       line-height: 1.95rem;
       padding:  0 0.05rem;
       text-align: center;
       font-size: 0.85rem;
       color: #ffffff;

     }
     .color_green{
       background-color: #4cd964;
     }
     .showcart{
        background-color: white;
       position: fixed;
       left: 0;
       bottom: 2.0rem;
       right:0 ;
       z-index:-1;
       width: 100%;


       header{
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: .3rem .6rem;
         background-color: #eceff1;

       }
       .cart_food_li{
         display: flex;
         justify-content: space-between;
         padding: .6rem .5rem;
         align-items: center;
       }
      .cart_food_details{
        background-color: #fff;
        max-height: 20rem;
        overflow-y: auto;

      }
     }
   }
</style>
