<template>
    <div class="order">
      <van-nav-bar
        title="订单列表"
        left-arrow
        fixed
        @click-left="onClickLeft"
      />
      <!--所有订单-->
      <div class="all">
        <ul>
          <!--每一个订单，每个订单都是一个li，循环li实现订单列表的循环-->
          <li v-for="(pro,index) in orderArry" :key="index">
            <!--左边图片部分-->
            <img src="//elm.cangdu.org/img/16ade95518e40718.jpg" alt="">
            <!--右边订单详情-->
            <div class="right">
              <!--状态和订单状态-->
              <div class="right_top">
                <div class="div1">
                  <h4>
                    <span>{{pro.restaurant_name}}</span>
                    <span></span>
                  </h4>
                  <p>{{pro.formatted_created_at}}</p>
                </div>
                <p class="p">{{pro.status_bar.title}}</p>
              </div>
              <div class="div2">
                <p>{{allGoodsname(pro)}}</p>
                <p>{{pro.total_amount}}</p>
              </div>
              <!--再来一单-->
              <div class="top_bottom">
                <router-link :to="{path:'/restaurant',query:{id:pro.restaurant_id}}">
              <span>再来一单</span>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <sfooter></sfooter>
    </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
  import {getorder} from "../serivice/api"
  import Sfooter from "../components/Sfooter/Sfooter";
    export default {
        name: "order",
      components: {Sfooter},
      data(){
          return{
        orderArry:[],
          }
      },
      methods:{
        ...mapActions(['SET_USER_INFO']),
        onClickLeft(){
          this.$router.go(-1);
        },
        //合并产品名称
        allGoodsname(val){
          var str = "";
           val.basket.group[0].forEach(item=>{
             if(item.name !=undefined){
               str+=item.name
             }
           });
          return str;
        }
      },
      mounted(){
        getorder(this.userinfo.user_id).then((result)=>{

          this.orderArry=result;
        })
      },
      computed:{
        ...mapState(['userinfo']),
      },
    }
</script>

<style scoped lang="less">
  .van-nav-bar {
    background-color: #3190e8;
  }
  .van-nav-bar__title {
    color: white;
    font-weight: 400;
  }
  :before{
    color: white;
    text-align: center;
  }
  .all{
    padding-top: 2rem;
  }
li{
  background-color: #fff;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: .5rem;
  padding: .6rem .6rem 0;
}
  img{
    width: 2rem;
    height: 2rem;
    margin-right: .4rem;
  }
  .right{
    flex: 5;
  }
.right_top{
  border-bottom: .025rem solid #f5f5f5;
  padding-bottom: .3rem;
  display: flex;
  justify-content: space-between;

  p{
    font-size: .55rem;
    color: #999;
    line-height: .8rem;
  }
}
  .div2{
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
    border-bottom: .025rem solid #f5f5f5;
  }
  .top_bottom{
    text-align: right;
    line-height: 1.6rem;

    span{
      font-size: .55rem;
      color: #3190e8;
      border: .025rem solid #3190e8;
      padding: .1rem .2rem;
      border-radius: .15rem;
    }
  }
  h4{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: .75rem;
    color: #333;
    line-height: 1rem;
    width: 9rem;
  }
  .p{
    font-size: .6rem;
    color: #333;
  }
  .div2{
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
    border-bottom: .025rem solid #f5f5f5;
    p:nth-child(1){
      font-size: .6rem;
      color: #666;
      width: 10rem;
    }
    p:nth-child(2){
      font-size: .6rem;
      color: #f60;
      font-weight: 700;
    }
  }
</style>
