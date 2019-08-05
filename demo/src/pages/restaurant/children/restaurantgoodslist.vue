<template>
  <div class="s-content">

    <div class="s-content-tab clear">
      <ul class="s-tab-list left">

        <li class="s-tab-li"
            v-for="(item,index) in foods_category_list"
            :class="{s_tab_li_active:index==isBtn}"
            :key="index"
            @click="selectBtn(index)"
        >{{item.name}}</li>
      </ul>
      <div class="s-content-list left">
        <template v-for="(item,index) in foodsList">
        <div class="s-content-list-title" :key="index">
          <b>{{item.name}}</b>
          <span>{{item.description}}</span>
        </div>
        <ul class="s-goods-list">
          <li class="s-goods-list-li clear" v-for="(val,index) in item.foods" :key="index">
            <div class="goods-img left">
              <img :src="'//elm.cangdu.org/img/'+val.image_path" alt="">
            </div>
            <ul class="goods-message left">
              <li class="goods-name">{{val.name}}</li>
              <li class="goods-desc">{{val.description}}</li>
              <li >月售{{val.month_sales}}份 好评率{{val.satisfy_rate}}%</li>
              <li class="clear">
                <div class="price left">
                  <span>¥</span>
                  <span>{{val.specfoods[0].price}}</span>
                </div>
                <span v-if="val.specifications.length">起</span>
                <div class="btn right">
                  <button class="get-rule">选规格</button>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import  {get_restaurant_goods_list}  from "../../../serivice/api";

  export default {
        name: "restaurantgoodslist",
        data(){
           return{
             id:null,//餐馆id
             foodsList:[],//商店食品信息
             foods_category_list:[],//获取商品分类信息
             isBtn:0,//是否是直接选中
           }
        },
        methods:{
          async getIntData(){
            this.foodsList=await get_restaurant_goods_list({restaurant_id:this.id});
            console.log(this.foodsList);

            this.foods_category_list=this.foodsList.map((item)=>{
              return {
                name:item.name,
              }
            });
          },
          //点击跳转对应的种类
          selectBtn(index){
            this.isBtn=index;
          },

        },
        mounted(){
          this.id=this.$route.query.id;
          this.getIntData();
        }
    }
</script>

<style scoped lang="less">
  .s-content{
    /*width: 100%;*/
    margin-top: 5.3rem;

    .s-content-tab{

      .s-tab-list{
        width: 30%;
        font-size: .6rem;
        color: #666;
        height: 21rem;
        overflow: auto;
        .s-tab-li{
          line-height: 1.3rem;
          padding: 0.65rem;
          border-bottom: .025rem solid #ededed;
          box-sizing: border-box;
          border-left: .15rem solid #f8f8f8;
        }
        .s_tab_li_active{
          box-sizing: border-box;

          border-left:.15rem solid #3190e8;
          background-color: white;
          font-weight: bold;
        }
      }
      .s-content-list{
        width: 70%;
        overflow: auto;
        height: 21rem;
        .s-content-list-title{
          padding:0 0.4rem;

          font-size: 0.5rem;
          line-height: 1.65rem;
          b{
            font-size: 0.65rem;
          }
          span{
            font-size: 0.45rem;

          }
        }
        .s-goods-list{
          font-size: 0.5rem;
          line-height: 0.7rem;
          background-color: white;
          .s-goods-list-li{
            padding: .6rem .4rem;
            border-bottom: 1px solid #f8f8f8;

            .goods-img{
              width: 25%;
              img{
                width: 1.65rem;
              }
            }
            .goods-message{
              width: 75%;
              .price{
                font-size: .7rem;
                color: #f60;
                font-weight: 700;
                margin-right: .3rem;
              }
              .get-rule{
                display: inline-block;
                font-size: .55rem;
                color: #fff;
                padding: .1rem .2rem;
                background-color: #3190e8;
                border-radius: .2rem;
                border: 1px solid #3190e8;
              }
            }
          }
        }
      }
    }

  }
</style>
