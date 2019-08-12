<template>
      <div class="order" v-if="add">
      <van-nav-bar
        title="订单详情"
        left-arrow
        fixed
        @click-left="onClickLeft"
      />
      <div class="all" v-if="show1">

        <!--等待支付-->
        <div class="top">
          <img :src="'//elm.cangdu.org/img/'+add._doc.restaurant_image_url" alt="">
          <p class="p">支付超时</p>
          <p class="p1"></p>
          <div> <router-link :to="{path:'restaurant',query:{id:add._doc.restaurant_id}}">  <span >再来一单</span> </router-link>  </div>
        </div>

        <!--订单信息-->
        <div class="center">
          <!--第一列-->
          <router-link :to="{path:'restaurant',query:{id:add._doc.restaurant_id}}">
          <div class="c1">
            <img :src="'//elm.cangdu.org/img/'+add._doc.restaurant_image_url" alt="">
            <span>{{add._doc.restaurant_name}}</span>
          </div>
          </router-link>
          <!--第二列-->
          <ul>
            <li v-for="(item,index) in add._doc.basket.group[0]">
              <p>{{item.name}}</p>
              <div>
                <span class="span1">x{{item.quantity}}</span>
                <span class="span2">￥{{item.price}}</span>
              </div>
            </li>
          </ul>

          <!--第三列-->
          <div class="c2">
            <span class="span3">{{add._doc.basket.deliver_fee.name}}</span>
            <span class="span4">￥{{add._doc.basket.deliver_fee.price}}</span>
          </div>

          <!--第四列-->
          <div class="c3">实付{{add._doc.total_amount}}</div>

        </div>

        <!--配送信息-->

        <div class="ps">
          <div class="ps_1">配送信息</div>

          <!--送达时间-->
          <div class="ps_2">
            <p>送达时间：</p>
            <div>
              <p>{{add.deliver_time}}</p>
            </div>
          </div>

          <!--送货地址-->
          <div class="ps_3 clear">
            <p class="pp">送货地址：</p>
            <div class="p_2">
              <p>{{add.addressDetail}}</p>
              <p>{{add.phone}}</p>
              <p></p>
            </div>
          </div>

          <!--配送方式-->
          <div class="ps_2">
            <p>配送方式：</p>
            <div>
              <p>蜂鸟专送</p>
            </div>
          </div>
        </div>


        <div class="ps">
          <div class="ps_1">订单信息</div>

          <!--送达时间-->
          <div class="ps_2">
            <p>订单号：</p>
            <div>
              <p>{{add._doc.id}}</p>
            </div>
          </div>

          <!--送货地址-->
          <div class="ps_2">
            <p>支付方式：</p>
            <div>
              <p>在线支付</p>
            </div>
          </div>

          <!--配送方式-->
          <div class="ps_2">
            <p>下单时间：</p>
            <div>
              <p>{{add._doc.formatted_created_at}}</p>
            </div>
          </div>



      </div>


    </div>

      <div id="elmloading" v-if="show">
        <div class="imgbox">
          <div class="img">
          </div>
        </div>
        <div class="loadfoot">
          <span class="footspan"></span>
        </div>
      </div>
    </div>

</template>

<script>
  import {getorder_xj} from "../serivice/api"
    export default {
        name: "order_xj",
      data(){
          return{
            add:"",
            show:false,
            show1:true,
            user_id:"",
            order_id:"",

          }
      },
      methods:{
        // ...mapActions(['SET_USER_INFO']),
        onClickLeft(){
          this.$router.go(-1);
        }
      },
      mounted(){

        this.user_id=this.$route.query.user_id;


          this.order_id=this.$route.query.order_id;
      getorder_xj({
        user_id:this.user_id,
       order_id:this.order_id
      }).then((result)=>{
          console.log(result)
        this.add=result
        console.log(this.add._doc);
      })
    }
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

  .top{
    text-align: center;
    background: white;
    margin-top: 1.5rem;
    margin-bottom: .5rem;
    padding-top: 1rem;
    align-items: center;
    padding-bottom: .5rem;

    img{
      border: .05rem solid #3190e8;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
    }
    .p{
      font-size: .9rem;
      color: #333;
      font-weight: 700;
      margin-top: .4rem;
    }
    .p1{
      font-size: .55rem;
      color: #999;
      width: 10rem;
      margin-top: .3rem;
      text-align: center;
    }
    div{

      span{
        font-size: .6rem;
        color: #3190e8;
        margin-top: .5rem;
        border: .025rem solid #3190e8;
        padding: .15rem .4rem;
        border-radius: .1rem;
      }
    }
  }

  .center{
    background: white;
    align-items: center;
    padding: .2rem .5rem;
   margin-bottom: 0.5rem;
    .c1{
      color: #333;
      font-weight: 400;
      border-bottom: 1px solid #f5f5f5;
      span{
        font-size: .75rem;
        color: #333;
        font-weight: 700;
      }
    }
img{
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: middle;
  margin-right: .2rem;
}
li{
  padding: 0 .5rem;
  line-height: 2rem;
  font-size: 0.6rem;
  color: #666;
  border-bottom: 1px solid #f5f5f5;
  p{
    display: inline-block;
  }
  div{
    display: inline-block;
    float: right;
    .span1{
      color: #ccc;
    }
  }
}
  }
  .c3{
    font-size: .6rem;
    color: #fb6b23;
    border-top: 1px solid #f5f5f5;
    font-weight: 700;
    line-height: 2rem;
    text-align: right;
    padding-right: .5rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .c2{
    line-height: 2rem;
    font-size: 0.6rem;
    color: #666;
    .span4{
      float: right;
      margin-right: 0.3rem;
    }
  }
  .span1{
    margin-right: 1.5rem;
  }
.ps{
  background: white;
  margin-top: 0.5rem;
  p{
    font-size: .65rem;
    color: #666;
    line-height: 1rem;
  }
  .ps_1{
    font-size: .75rem;
    color: #333;
    padding: .5rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .ps_2{
    display: flex;
    padding: .5rem;

  }
.ps_3{
  padding: .5rem;

  .p_2{
    float: left;
    display: inline-block;
    width: 10rem;
  }
  .pp{
    display: inline-block;
    float: left;
    width: 4rem;
    height: 3rem;
  }
}

}


  #elmloading{
    width: 50px;
    height:130px;
    position:fixed;
    top: 50%;
    left: 50%;
    margin-top: -65px;
    margin-left: -25px;
    z-index:100;
  }
  .imgbox{
    width: 50px;
    height: 50px;
    animation: myfirst 0.8s infinite;
  }
  .img{
    height: 100%;
    width: 100%;
    background: url('../imags/icon_loading.png') no-repeat;
    background-size:100%;
    animation: myf 5.6s infinite;
  }
  .loadfoot{
    height: 20px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
  }
  .footspan{
    display: inline-block;
    height: 10px;
    width: 20px;
    margin: 5px 0px;
    border-radius: 50%;
    animation: foot 0.8s infinite;
    background: radial-gradient(#7E7E7E, #EDEDED);
  }

  @keyframes myfirst
  {
    0% {margin-top:0px;}
    50% {margin-top:50px;}
    100% {margin-top:0px;}
  }
  @keyframes myf
  {
    0% {background-position:0% 0%;}
    14.2% {background-position:0% 0%;}
    14.2001% {background-position:0% 16%;}
    28.4% {background-position:0% 16%;}
    28.4001% {background-position:0% 33%;}
    42.6% {background-position:0% 33%;}
    42.6001% {background-position:0% 50%;}
    56.8% {background-position:0% 50%;}
    56.8001% {background-position:0% 67%;}
    71% {background-position:0% 67%;}
    71.0001% {background-position:0% 84%;}
    85.2% {background-position:0% 84%;}
    85.2001% {background-position:0% 100%;}
    100% {background-position:0% 100%;}
  }

  @keyframes foot
  {
    0% {width:20px;}
    50% {width:100%;}
    100% {width:20px;}
  }
</style>







