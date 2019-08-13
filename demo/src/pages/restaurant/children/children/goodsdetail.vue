<template>
  <div class="s-goodsdetail">
    <div class="s-header clear">
      <i class="iconfont txtQ_c"  @click="dispage">&#xe606;</i>
      <span>{{goodsdetail.name}}</span>
      <div class="empty"></div>
    </div>
    <div class="goods_message">
       <div class="goods_img">
         <img :src="'//elm.cangdu.org/img/'+goodsdetail.image_path" alt="">
       </div>
        <ul class="goods_ul">
          <li class="goods_name">{{goodsdetail.name}}</li>
          <li class="goods_description">{{goodsdetail.description}}</li>
          <li class="goods_rate">评分
            <van-rate
            v-model="goodsdetail.rating"
            gutter="0px"
            size="0.5rem"
            allow-half
            color="#ff6000"
            readonly
            class="ll"
          />
           <span class="col">{{goodsdetail.rating}}</span>   </li>
          <li class="sale">月售&nbsp;{{goodsdetail.month_sales}}单

              <!--<span></span>-->
              <span class="send_price">售价&nbsp; ¥{{goodsdetail.specfoods[0].price}}
              <span v-if="goodsdetail.specifications.length">起</span>
              </span>

          </li>
          <li>评论数&nbsp;{{goodsdetail.rating_count}}&nbsp;好评率&nbsp;{{goodsdetail.satisfy_rate}}%</li>
        </ul>
    </div>

  </div>



</template>

<script>
    export default {
        name: "goodsdetail",
      props:['goodsdetail'],
      methods:{
        dispage(){
          this.$parent.disapearpage();
        }
      }
    }
</script>

<style scoped lang="less">
  .s-goodsdetail{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: #fff;
    .s-header {
      background-color: #3190e8;
      width: 100%;
      height: 1.95rem;
      color: white;
      font-size: 0.8rem;
      line-height: 1.95rem;
      text-align: center;
      .txtQ_c {
        float: left;
        margin-left: 0.5rem;
      }
      span {
        margin-right: 0.9rem;
        font-weight: bold;
      }
    }
    .goods_message{

      .goods_img{
        width: 100%;
        img{
          width: 100%;
        }
      }

      .goods_ul{
        padding: 0.5rem;
        font-size: .6rem;
        li{
          line-height: 1.2rem;
        }
        .goods_rate{
          .ll{
            display: inline-block;
          }
          .col{
            color: #ff6000;
          }
        }
        .send_price{
          color: #ff6000;
        }

      }
    }
  }

</style>
