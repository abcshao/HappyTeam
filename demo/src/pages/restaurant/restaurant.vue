<template>
    <div class="s-restaurant">
         <div class="s-header">
                   <i class="iconfont arrow_left" @click="$router.go(-1)" >&#xe606;</i>
                  <ul class="s-header-ul clear"  :style="{backgroundImage: 'url(//elm.cangdu.org/img/'+restaurantMessage.image_path+')',
                  }">
                    <!--<div class="mask"></div>-->
                    <li class="s-header-li-img left" >
                      <img :src="'//elm.cangdu.org/img/'+restaurantMessage.image_path" alt="">
                    </li>
                    <li class="s-header-li-list left clear">
                       <h3>{{restaurantMessage.name}}</h3>
                        <router-link :to="{}">
                        <p>

                                <span>商家配送</span>
                                <span>{{restaurantMessage.order_lead_time}}分钟送达</span>
                                <span>配送费约¥{{restaurantMessage.float_delivery_fee}}</span>

                        </p>
                          <i class="iconfont right"></i>
                       <p>公告:{{restaurantMessage.promotion_info}}</p>
                        </router-link>
                    </li>

                    <li class="s-activity clear left" @click="show_activity_details=!show_activity_details"    v-if="restaurantMessage.activities !== undefined  && restaurantMessage.activities.length>0">
                      <span class="icon" :style="{backgroundColor:'#'+restaurantMessage.activities[0].icon_color}">{{restaurantMessage.activities[0].icon_name}}</span>  <span>{{restaurantMessage.activities[0].description}}(APP专享)</span>
                      <span class="right">{{restaurantMessage.activities.length}}个活动 <i class="iconfont">&#xe612;</i></span>
                    </li>

                  </ul>

                   <ul class="s-nav clear">
                     <!--<router-link :to="{name:'restaurantgoodslist',query:{id:id} }">-->
                     <li class="s-nav-left left " @click="changePage(1)">
                           <span :class="{snavactive:isGoodsorRate=='goods'}">
                             商品
                           </span>
                     </li>

                   <li class="s-nav-right right"@click="changePage(2)" >
                           <span :class="{snavactive:isGoodsorRate=='rate'}">
                                评价
                           </span>
                     </li>
                   </ul>
         </div>
      <!--商店商品和评价页面的相互跳转-->
      <div class="ll"   :style="{top:restaurantMessage.activities !== undefined  && restaurantMessage.activities.length>0?'6.4rem':'5.3rem'   }">

       <transition name="pagechange">

        <restaurantgoodslist v-if="isGoodsorRate=='goods'?true:false" :restaurant_goods_list="foodsList" :shopid="id"  ></restaurantgoodslist>


        <restaurantrate v-if="isGoodsorRate=='rate'" :ratelist="ratelist"  :ratescore = "ratescore"  :ratetags="ratetags"  :shopid="id" ></restaurantrate>
       </transition>

      </div>
         <!--点击活动时显示活动详细页面-->
         <div class="s_activity_details" v-if="show_activity_details">
                 <h2>{{restaurantMessage.name}}</h2>
                 <h3>
                  <span class="youhui_message">优惠信息</span>
                 </h3>
                  <p v-for="ite in restaurantMessage.activities">
                    <span class="icon" :style="{backgroundColor:'#'+ite.icon_color}">{{ite.icon_name}}</span>  <span>{{ite.description}}(APP专享)</span>
                  </p>
                  <h3>
                    <span  class="youhui_message">商家公告</span>
                  </h3>
                   <p>{{restaurantMessage.promotion_info}}</p>
                   <p class="delet_btn" ><i class="iconfont" @click="show_activity_details=!show_activity_details">&#xe613;</i></p>
         </div>

        <div class="shopcar" v-if="isGoodsorRate=='goods'?true:false">
          <div class="s-shopcar">
            <div class="cart_icon_container" :class="{cart_icon_active:allmoney>0,moveanimate:isshowAnimate}"   @click="showcartdata()" ref="cartContainer">
              <i class="iconfont" style="color: white;">&#xe60c;</i>
              <span class="category_num"  v-if="allnum>0" >{{allnum}}</span>

            </div>
            <div  class="cart_num">
              <div class="money" >¥ {{allmoney}}</div>
              <div class="pei_money">配送费¥{{restaurantMessage.float_delivery_fee}}</div>
            </div>
            <div class="gotopay " :class="{color_green:allmoney-restaurantMessage.float_minimum_order_amount>=0}"    @touchstart = "btnorder">
              <span  class="gotopay_button_style" v-if="allmoney-restaurantMessage.float_minimum_order_amount>=0">去结算</span>
              <span  class="gotopay_button_style "   v-else>还差¥{{ Math.abs(allmoney-restaurantMessage.float_minimum_order_amount)   }}起送</span>
            </div>
            <transition name="fadecar" >
            <div class="showcart" v-if="allmoney>0 && isshowcartdata ">
              <header >
                <h4>购物车</h4>
                <div  @click="clearCart(cartlist)">
                  <i class="iconfont">&#xe6db;</i>
                  <span class="clear_cart">清空</span>
                </div>
              </header>
              <section  id="cartFood" class="cart_food_details">
                <ul >
                  <li  class="cart_food_li" v-for="(item,index) in cartlist" :key="index">
                    <div  class="cart_list_num">
                      <p  class="ellipsis">{{item.name}}</p>
                      <p  class="ellipsis" v-if="item.type=='spec_type'">{{item.specs_name}}</p>
                    </div>
                    <div class="cart_list_price">
                      <span >¥</span>
                      <span >{{item.price}}</span></div>
                    <section  class="cart_list_control">
                      <i class="iconfont" style="font-size: 0.7rem;color: #3190e8;"   @touchstart="reduceCar(item)">&#xe656;</i>
                      <span  class="cart_list_num">{{item.goodsnum}}</span>
                      <i class="iconfont" style="font-size: 0.75rem;color: #3190e8;"  @touchstart="btnss(item)">&#xe60d;</i>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
            </transition>
            <div class="zhezhao"  v-if="iszhezhao && allmoney>0"></div>
          </div>

        </div>

          <section class="animation_opactiy shop_back_svg_container" v-if="showLoading">
            <img src="../../images/shop_back_svg.svg">
          </section>
           <loading v-if="showLoading"></loading>
    </div>



</template>

<script>
  import  {
    get_restaurant_message,
    get_restaurant_goods_list,
    get_restaurant_rating,
    get_restaurant_rating_score,
    get_restaurant_rating_tags
  }  from "../../serivice/api";
  import {mapGetters,mapActions,mapState} from "vuex"

  import ShopCar from "../../components/Sfooter/shopCar";
  import Restaurantgoodslist from "./children/restaurantgoodslist";
  import Restaurantrate from "./children/restaurantrate";
  import loading from "../../components/Cpm_c/loading"
    export default {
        name: "restaurant",
        components: {Restaurantrate, Restaurantgoodslist, ShopCar,loading},
        data(){
           return{
             id:null,//商店id
             showLoading: true, //显示加载动画
             restaurantMessage:{},//餐馆详细信息
             show_activity_details:false,//显示活动详情页面是否显示
             isshowcartdata:false,
             iszhezhao:false,
             isGoodsorRate:"goods",  // 商品页面和评价页面相互切换 默认是商品页面
             foodsList:[],
             ratelist:[],//获取评价数据
             ratescore:[],//获取评价分数
             ratetags:[],//获取评价分类
             isshowAnimate:false,//判断动画是否显示
           }
        },
       async created() {
          this.id=this.$route.query.id;
          this.getrestaurantMessage();
          //获取商店商品信息
          this.foodsList=await get_restaurant_goods_list({restaurant_id:this.id});
          // 获取商店评价信息
          this.ratelist = await get_restaurant_rating(this.id);
          //获取评价分数
           this.ratescore = await get_restaurant_rating_score(this.id);
          //获取评价分类
           this.ratetags = await get_restaurant_rating_tags(this.id);
           this.showLoading=false;
       },
        methods:{
          ...mapActions(['UPDATE_RESTAURANT_GOODS']),
          //子元素修改父元素的值
          changeRate(newda){
            this.ratelist = [...this.ratelist,...newda];

          },

           //点击提交订单页面
          btnorder(){
            this.$router.push({path:"/order",query:{geohash:this.geohash,shopid:this.id}})
          },
           //点击切换页面
          changePage(val){
            if(val==1){
              this.isGoodsorRate="goods";
            }else{
              this.isGoodsorRate="rate";

            }
          },

          //清空购物车
          clearCart(cartlist){
            cartlist.forEach(item=>{
              item.goodsnum=0;
            })
            this.isshowcartdata=false;
            this.iszhezhao=false;
            this.UPDATE_RESTAURANT_GOODS();
          },
           //修改数量
          btnss(val){
            val.goodsnum++;
            this.UPDATE_RESTAURANT_GOODS();


          },
          //减少数量
          reduceCar(val){
            val.goodsnum--;
            if(this.allmoney==0){
              this.isshowcartdata=false;
              this.iszhezhao=false;
            }
            this.UPDATE_RESTAURANT_GOODS();

          },
          async getrestaurantMessage(){
             //根据餐馆id 获取对应的餐馆相应的信息
              let res = await get_restaurant_message(this.id);
            this.restaurantMessage=res;
           },
          showcartdata(){
            if(this.allmoney==0){
               return;
            }
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
          },
          //监听圆点是否进入购物车
          listenInCart(){
            if (!this.isshowAnimate) {
              this.isshowAnimate = true;
              this.$refs.cartContainer.addEventListener('animationend', () => {
                this.isshowAnimate = false;
              })
              this.$refs.cartContainer.addEventListener('webkitAnimationEnd', () => {
                this.isshowAnimate = false;
              })
            }
          },
        },
      computed:{
        ...mapGetters([
          'shopcard',
          'allcartlist',
          'allcategorynum'
        ]),
        ...mapState(['geohash']),
        cardata(){
          return this.shopcard(this.id);
        },
        //获取购物车所购买的数据
        cartlist(){
           return this.allcartlist(this.id);
        },
        //获取总数量
        allnum(){
          var allnum=0;
           this.allcategorynum(this.id).forEach(item=>{
              allnum+=item;
           })
          return allnum
        },
        //在此处调用 vuex 为啥没有数据
        allmoney(){
          var allmoney = 0;
          this.cardata.forEach(item=>{
            item.foods.forEach(it=>{
                it.specfoods.forEach(i=>{
                  if(i.goodsnum){
                    allmoney=allmoney+i.goodsnum*i.price;
                  }
                })
            })
          });
          return allmoney;
        }
      },
    }
</script>

<style scoped lang="less">

  @keyframes movein {
    0%   { transform: scale(1) }
    25%  { transform: scale(.8) }
    50%  { transform: scale(1.1) }
    75%  { transform: scale(.9) }
    100% { transform: scale(1) }
  }
  .moveanimate{
    animation: movein 0.5s ease-in-out;
  }

  .fadecar-enter-active, .fadecar-leave-active {
    transition: all .3s ease-out;
  }
  .fadecar-enter, .fadecar-leave-active {
    opacity: 0;
  }
  .pagechange-enter-active, .pagechange-leave-active {
    transition: all .3s ease-out;
  }
  .pagechange-enter, .pagechange-leave-active {
    opacity: 0;
  }

  .shop_back_svg_container{
    position: fixed;
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
    z-index: 1003;
  }
  .ll{
    position: fixed;
    /*top: 6.4rem;*/
    /*top: 6.4rem;*/
    width: 100%;

  }
 .s-restaurant{
   width: 100%;
   .s-header{
     width: 100%;
      position: fixed;
     left: 0;
     top: 0;
     .arrow_left{
       color: white;
       position: fixed;
       left:0.3rem;
       top: 0.3rem;
       z-index: 8;
     }
     .s-header-ul{
       width: 100%;
       padding: 0.65rem;
       background-repeat:no-repeat;
       background-size: cover;
       position: relative;
       color:white;

       .mask{
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          filter:  blur(1px);

        }
       .s-header-li-img{
         width: 2.1rem;
         line-height: 0;
         margin-right: 0.3rem;
         img{
           width: 100%;
         }
       }
       .s-header-li-list{
         font-size: 0.5rem;
         width: 80%;
         position: relative;
         a{
           color: white;
           i{
             display: inline-block;
             position: absolute;
             right: -0.5rem;
             top: 1.2rem;
           }
         }
       }
       .s-activity{
         width: 100%;
         font-size: 0.5rem;
         color:white;
         margin-top: 0.4rem;
         .icon{
           display: inline-block;
           font-size: 0.3rem;
           padding: 0.03rem;
         }
       }
     }
     .s-nav{
       width: 100%;
       background: white;
       padding:0 0.65rem;
       font-size: 0.8rem;
       text-align: center;
       line-height: 1.8rem;
       border-bottom: 0.025rem solid gray;

       .s-nav-left{
         width: 50%;
         color: #333333;
       }
       .s-nav-right{
         width: 50%;
         color: #333333;
       }
      .snavactive{
         color: #3190e8;
         border-bottom: 2px solid #3190e8;
       }
     }
   }
   .s_activity_details{
      position: fixed;
     width: 100%;
     height: 100%;
     bottom: 0;
     top: 0;
     left: 0;
     right: 0;
     background-color: #262626;
     z-index: 1001;
     color:white;
     h2{
       text-align: center;
       padding: 0.9rem;
       font-size: 1.0rem;
     }
     .youhui_message{
       padding:0.2rem 0.5rem;
       font-size: 0.55rem;
       border: 1px solid gray;
       border-radius: 3rem;
     }
     h3{
       text-align: center;
       padding: 0.7rem;
     }

     p{
       padding:0 0.7rem;

       width: 100%;
       font-size: 0.7rem;
       color:white;
       margin-top: 0.4rem;
       .icon{
         display: inline-block;
         font-size: 0.6rem;
         padding: 0.1rem;
       }


     };
     .delet_btn{
       position: absolute;
       bottom: 1.0rem;
       text-align: center;
       left: 0;
       font-size: 2.5rem;
     }
   }
   .shopcar{
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
         .category_num{
           position: absolute;
           top: -0.3rem;
           right: -0.1rem;
           background-color: #ff461d;
           line-height: .6rem;
           text-align: center;
           border-radius: 50%;
           border: .025rem solid #ff461d;
           min-width: .6rem;
           height: .6rem;
           font-size: .5rem;
           color: #fff;
           font-family: Helvetica Neue,Tahoma,Arial;
         }
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
         font-size: .7rem;
         color: #666;

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
           .cart_list_num{
             width: 30%;
           }
           .cart_list_price{
             width: 30%;
           }
           .cart_list_control{
             width: 20%;
             .cart_list_num{
               width: 1rem;
               text-align: center;
               display: inline-block;
             }
           }
         }
         .cart_food_details{
           background-color: #fff;
           max-height: 20rem;
           overflow-y: auto;

         }
       }
     }
   }
 }
</style>
