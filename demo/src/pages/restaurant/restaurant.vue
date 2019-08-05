<template>
    <div class="s-restaurant">
         <div class="s-header">
                  <ul class="s-header-ul clear">
                    <li class="s-header-li-img left">
                      <img :src="'//elm.cangdu.org/img/'+restaurantMessage.image_path" alt="">
                    </li>
                    <li class="s-header-li-list left">
                       <h3>{{restaurantMessage.name}}</h3>
                        <p>
                          <span>商家配送</span>
                          <span>{{restaurantMessage.order_lead_time}}分钟送达</span>
                          <span>配送费约¥{{restaurantMessage.float_delivery_fee}}</span>
                        </p>
                       <p>公告:{{restaurantMessage.promotion_info}}</p>
                    </li>
                  </ul>
                   <ul class="s-nav clear">
                     <router-link :to="{name:'restaurantgoodslist',query:{id:id} }">
                     <li class="s-nav-left left ">
                           <span class="s-nav-active">
                             商品
                           </span>
                     </li>
                     </router-link>
                     <router-link :to="{name:'restaurantrate',query:{id:id} }">
                   <li class="s-nav-right right">
                           <span class="s-nav-active">
                                评价
                           </span>
                     </li>
                     </router-link>

                   </ul>
         </div>
        <!--商店商品和评价页面的相互跳转-->
        <router-view></router-view>
        <shop-car></shop-car>
    </div>



</template>

<script>
  import  {get_restaurant_message}  from "../../serivice/api";
    import ShopCar from "../../components/Sfooter/shopCar";
    export default {
        name: "restaurant",
        components: {ShopCar},
        data(){
           return{
               id:null,
               restaurantMessage:{},//餐馆详细信息
           }
        },
        mounted() {
          this.id=this.$route.query.id;
          this.getrestaurantMessage();
        },
        methods:{
          async getrestaurantMessage(){
             //根据餐馆id 获取对应的餐馆相应的信息
              let res = await get_restaurant_message(this.id);
             this.restaurantMessage=res;
           }
        }
    }
</script>

<style scoped lang="less">
 .s-restaurant{
   width: 100%;
   .s-header{
     width: 100%;
      position: fixed;
     left: 0;
     top: 0;
     .s-header-ul{
       width: 100%;
       padding: 0.65rem;
       background: url("//elm.cangdu.org/img/164ad0b6a3917599.jpg");

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
      .router-link-active .s-nav-active{
         color: #3190e8;
         border-bottom: 2px solid #3190e8;
       }
     }
   }

 }
</style>
