<template>
  <ul class="shop_ul" v-load-more="loaderMore" v-if="restaurantsList.length">
    <li class="shop_li clear" v-for="(item,index) in restaurantsList" :key="index">
      <section class="shop_pic left">
        <img  :src="imgBaseUrl+item.image_path" class="shop_img">
      </section>
      <div class="shop_detail left">
        <header class="shop_detail_header clear">
          <h4 class="shop_title ellipsis   left "   :class="item.is_premium?'premium':''" >{{item.name}}</h4>
          <div class="shop_detail_ri right">
            <span  v-for="item in item.supports">{{item.icon_name}}</span>
          </div>
        </header>
        <div class="rating_order_num clear">
          <div class="rating_order_num_left clear  left">
            <van-rate
              v-model="item.rating"
              gutter="0px"
              size="0.5rem"
              allow-half
              color="#ff6000"
              readonly
              class="left"
            />
            <span class="rating_order_num__">{{item.rating}}</span>
            <span class="rating_order_dan">	月售{{item.recent_order_num}}单</span>
          </div>
          <div class="rating_order_num_right right">
            <span class="delivery_left" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
            <span class="delivery_right"  v-if="is_ontime(item.supports)">准时达</span>
          </div>
        </div>
        <div class="fee_distance clear">
          <p class="fee_distance_left left">¥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</p>
          <p class="fee_distance_right right">{{item.distance}}/{{item.order_lead_time}}</p>
        </div>
      </div>
    </li>
    <li v-if="touchend">没有更多啦</li>
  </ul>
</template>

<script>
  import {getrestaurants} from "../../../serivice/api";
  import {imgBaseUrl} from '../../../config/env'
  import {loadMore} from '../../../config/mixin'


  export default {
        name: "shoplist",

        props:['geohash'],
        mixins: [loadMore],
        data(){
          return{
            rating_num:4.5,
            latitude:"",
            longitude:"",
            restaurantsList:[],
            offset: 0, // 批次加载店铺列表，每次加载20个 limit = 20
            imgBaseUrl,
            preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
            touchend: false, //没有更多
          }
        },
      mounted(){

            this.getInitData();
      },
      methods:{
        // 获取商品列表
        async getInitData(){

          // console.log(this.geohash);
          this.latitude=this.geohash.split(",")[0];
          this.longitude=this.geohash.split(",")[1];
          //获取附近商家的信息
          let restaurantsList = await getrestaurants({latitude:this.latitude,longitude:this.longitude,offset:this.offset});
          this.restaurantsList=restaurantsList;
          if(restaurantsList.length<20){
            this.touchend=false;
          }

        },

        //根据 循环数据中的supports 中的 准  来判断是否是准时到达
        is_ontime(supports){
          let result=false;
          if(supports instanceof Array  && supports.length>0){
              supports.forEach((item)=>{
                 if(item.icon_name=="准"){
                   result=true;
                 }
              })
          }
          return result;
        },
        // 下拉加载数据
        async loaderMore() {
          if (this.touchend) {
            return
          } //防止重复请求
          if (this.preventRepeatReuqest) {
            return
          }
          this.preventRepeatReuqest = true;
          //没拉一页都要加载一次数据
          this.offset+=20;
          try {
            let res = await getrestaurants({latitude:this.latitude,longitude:this.longitude,offset:this.offset});
            this.restaurantsList = [...this.restaurantsList, ...res];
            console.log(res);
            if (res.length < 20) {
              this.touchend = true;
              return
            }

            this.preventRepeatReuqest = false;
          } catch (err) {

          }
        },

      }
    }
</script>

<style scoped lang="less">
  .shop_ul{
    .shop_li{
      border-bottom: .025rem solid #f1f1f1;
      padding: .7rem .4rem;
      .shop_pic{
        width: 2.70rem;
        margin-right: .5rem;
        img{
          width: 100%;

        }
      }
      .shop_detail{
        width: 78%;
        .shop_detail_header{
          .shop_title{
            width: 50%;
            font-size: 0.65rem;
            color: #333333;
            font-weight: bold;
          }
          .premium:before{
            content: "\54C1\724C";
            display: inline-block;
            font-size: .5rem;
            line-height: .6rem;
            color: #333;
            background-color: #ffd930;
            padding: 0 .1rem;
            border-radius: .1rem;
            margin-right: .2rem;
          }
          .shop_detail_ri{
            color: #999999;
            font-size: 0.50rem;
            box-sizing: border-box;
            span{
              border-radius: 0.05rem;
              border: .025rem solid #f1f1f1;
            }
          }
        }
        .rating_order_num{

          .rating_order_num_left{
            font-size: 0.5rem;
            margin-top: 0.5rem;
            width: 7rem;
            .rating_order_num__{
              color: #ff6000;
              margin-left: 0.2rem;

              width: 3rem;
            }
            .rating_order_dan{
              font-size: 0.5rem;
              color: #666666;
            }



          }
          .rating_order_num_right{

            .delivery_left{
              font-size: 0.30rem;
              color: #fff;
              background-color: #3190e8;
              border: .025rem solid #3190e8;
            }
            .delivery_right{
              font-size: 0.30rem;
              color: #3190e8;
              border: .025rem solid #3190e8;
            }
          }

        }
        .fee_distance{
          color: #666;
          font-size: 0.5rem;
        }
      }
    }
  }

</style>
