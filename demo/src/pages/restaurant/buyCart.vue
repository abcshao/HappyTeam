<template>
  <!--规格弹窗页面-->
  <div class="addcarshop"   >
    <ul class="addcarshop_ul">
      <li class="carshop_name clear">{{foods_message.name}}
        <div class="right" @click="btnclearAlertcart"> <i class="iconfont">&#xe794;</i></div>
      </li>
      <li class="carshop_message">
        <h3>规格</h3>
        <div>
          <span
                v-for="(item,index) in foods_message.specfoods"
                :key="index"
                @click="getshopmessage(item,index)"
                :class="{specs_activity:is_checked==index}"
          > {{item.specs_name}}</span>
        </div>
      </li>
      <li class="carshop_footer clear">
        <div class="carshop_footer_left   left">
          <span>¥</span>
          <span>{{foods_message.specfoods[0].price}}</span>
        </div>
        <div class="carshop_footer_right left" @click="addSpecCart()">
          加入购物车
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"

  export default {
        name: "buyCart",
        props:[
          'foods_message',
          'shopid'
         ],

      data(){
          return{
            is_checked:0,
          }
      },
      methods:{
         ...mapActions(["SET_SHOP_CAR_LIST",'UPDATE_RESTAURANT_GOODS']),
        btnclearAlertcart(){
          this.$parent.btnclearAlert();
        },
        getshopmessage(item,index){
          this.is_checked=index;
        },
        //添加规格购物车
        addSpecCart(){

          // shopId,       //商店id
          //   category_id,  //食品分类id
          //   item_id,     //食品规格id
          //   food_id,   // 食品id
          //   name,   //商品名称
          //   price,  //商品价格
          //   specs   //食品规格
        // let data  =  {
        //     shopId:this.shopid,
        //     category_id:this.foods_message.category_id,
        //     item_id:this.foods_message.item_id,
        //     name:this.foods_message.specfoods[this.is_checked].name,
        //     price:this.foods_message.specfoods[this.is_checked].price,
        //     food_id:this.foods_message.specfoods[this.is_checked].food_id,
        //     specs:this.foods_message.specfoods[this.is_checked].specs_name,
        //     type:"is_spec",
        //   };
        //    this.SET_SHOP_CAR_LIST(data);
        //    this.btnclearAlertcart();

               if(this.foods_message.specfoods[this.is_checked].goodsnum){
                 this.foods_message.specfoods[this.is_checked].goodsnum=this.foods_message.specfoods[this.is_checked].goodsnum+1;
               }else{
                 this.$set(this.foods_message.specfoods[this.is_checked],'goodsnum',1);
               }

          this.UPDATE_RESTAURANT_GOODS();

          this.btnclearAlertcart();

        }
      }

    }
</script>

<style scoped lang="less">
  .addcarshop{
    position: fixed;
    top: 35%;
    left: 15%;
    width: 70%;
    background-color: #fff;
    z-index: 18;
    border: 1px;
    border-radius: .2rem;
    .addcarshop_ul{
      .carshop_name{
        font-size: .7rem;
        color: #222;
        font-weight: 400;
        text-align: center;
        padding: .5rem;
      }
      .carshop_message {
        padding: .5rem;

        h3{
          font-size: .6rem;
          color: #666;

        }
        div{
          flex-wrap: wrap;
          padding: .4rem 0;
          span{
            display: inline-block;
            font-size: .6rem;
            padding: .3rem .5rem;
            border: .025rem solid #ddd;
            border-radius: .2rem;
            margin-right: .5rem;
            margin-bottom: .2rem;

          }
          .specs_activity{
            border-color: #3199e8;
            color: #3199e8;
          }
        }

      }
      .carshop_footer{
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
        background-color: #f9f9f9;
        padding: .5rem;
        border: 1px;
        border-bottom-left-radius: .2rem;
        border-bottom-right-radius: .2rem;
        .carshop_footer_left{
          width: 55%;
          span{
            color: #ff6000;

            &:nth-child(1){
              font-size: .5rem;
            }
            &:nth-child(2){

            }
          }
        }
        .carshop_footer_right{
          width: 4.2rem;
          height: 1.3rem;
          background-color: #3199e8;
          border: 1px;
          border-radius: .15rem;
          font-size: .6rem;
          color: #fff;
          text-align: center;
          line-height: 1.3rem;
        }
      }

    }

  }
</style>
