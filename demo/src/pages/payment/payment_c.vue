<template>
  <div class="order">
    <div class="s-header clear">
      <i class="iconfont txtQ_c">&#xe606;</i>
      <span>确认订单</span>
      <i class="iconfont txtW_c">&#xe601;</i>
      <div class="empty"></div>
    </div>
    <router-link :to="{path:'/select'}">
    <div class="site_c">
      <div class="leftB_c">
      <i class="iconfont txtE_c">&#xe600;</i>
        <div class="leftName_c">
      <div class="name_c">
        <span class="txtX_c">陈</span>
        <span>先生</span>
        <span>陈</span>
      </div>
      <div class="shop_c">
        <span class="txtZ_c">其味无穷</span>
        <span>青蛙多所</span>
      </div>
        </div>
      </div>
      <i class="iconfont txtR_c">&#xe714;</i>
      <div class="empty"></div>
    </div>
    </router-link>
    <div class="time_c">
      <div class="leftBox_c"></div>
      <span>送达时间</span>
      <div class="predict_c">
        <p>尽快送达 | 预计 21:45</p>
        <p>蜂鸟专送</p>
        <div class="empty"></div>
      </div>
      <div class="empty"></div>
    </div>
    <div class="payA_c">
      <div class="payB_c" @click="btnPayA_c">
        <span>支付方式</span>
        <span>在线支付</span>
        <i class="iconfont txtLogoA_c">&#xe714;</i>
        <div class="empty"></div>
      </div>
      <div class="redBig_c">
        <span>红包</span>
        <span>暂时只在饿了么APP中支持</span>
      </div>
    </div>
    <div class="cost_c">
      <ul>
        <li class="shopA_c"><img src="http://elm.cangdu.org/img/16c40699fae50011.jpg" class="imgLogo_c"><span>mark1111333</span></li>
        <li class="moneyA_c"><p>12221</p><div><span>x 2</span><span>￥20</span></div></li>
        <li><p>餐盒</p><div><span class="moneyB_c">￥13918</span></div></li>
        <li><p>配送费</p><div><span class="moneyC_c">￥4</span></div></li>
      </ul>
    </div>
    <div class="allSum_c">
      <p>订单 ￥12962</p>
      <span>待支付 ￥13962</span>
      <div class="empty"></div>
    </div>
    <div class="txtP_c">
      <router-link :to="{path:'/remark'}">
      <span class="txtI_c">订单备注</span><span class="txtU_c">口味、偏好等</span> <i class="iconfont txtLogoB_c">&#xe714;</i>
      </router-link>
    </div>
    <div class="txtO_c">
      <router-link :to="{path:'/invoice'}">
      <span class="txtY_c">发票抬头</span><span class="txtU_c">不需要开发票</span> <i class="iconfont txtLogoB_c">&#xe714;</i>
      </router-link>
    </div>
    <div class="buttonA_c">
      <p>待支付 ￥13962</p><p>确认下单</p>
    </div>
    <div class="payQ_c" v-show="payA_c">
      <div class="wayB_c" @click="btnPayB_c"></div>
    <div class="wayA_c" >
      <p>支付方式</p>
      <ul>
        <li class="moneyP_c clear"><span>货到付款( 商家不支持货到付款 )</span><i class="iconfont txtN_c right">&#xe619;</i></li>
        <li><span>在线支付</span><i class="iconfont txtV_c right">&#xe619;</i></li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "payment_c",
        data(){
          return {
            payA_c:false,
          }
        },
        methods:{
          btnPayA_c(){
            this.payA_c = true;
          },
          btnPayB_c(){
            this.payA_c = false;
          }
        }
    }
</script>

<style scoped lang="less">
.order {
  position: relative;
  overflow: auto;
  .s-header {
  background-color: #3190e8;
  width: 100%;
  height: 1.95rem;
  color: white;
  font-size: 0.8rem;
  line-height: 1.95rem;
  text-align: center;
    position: fixed;
    top: 0;
    .txtQ_c {
      float: left;
      margin-left: 0.5rem;
    }
    span {
      margin-right: 0.4rem;
      font-weight: bold;
    }
    .txtW_c {
      float: right;
      margin-right: 0.6rem;
      font-weight: bold;
    }
  }
  .site_c {
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    background: white;
    font-size: 0.6rem;
    margin-top: 1.95rem;
    /*border-bottom: 2px dashed ;*/
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100% repeat-x;
    background-color: #fff;
    background-size: auto .12rem;
    .leftB_c {
      width: 10rem;
      display: inline-block;
      height: 3.5rem;
      box-sizing: border-box;
      color: black;
      .txtE_c {
        margin-left: 0.8rem;
        color: rgb(60, 144, 232);
        vertical-align: 0.4rem;
        /*line-height: 3.5rem;*/
      }
      .leftName_c{
        display: inline-block;
        margin-left: 0.3rem;
      }
      .name_c {
        width: 5rem;
        line-height: 1rem;
        margin-top: 0.7rem;
        .txtX_c {
          font-size: 0.8rem;
          font-weight: bold;
        }
      }
      .shop_c {
        /*display: inline-block;*/
        width: 5rem;
        line-height: 0.7rem;
        font-size: 0.5rem;
        .txtZ_c {
          background: rgb(255,87,34);
          color: white;
          border-radius:0.2rem;
          padding: 0 0.3rem;
        }
        :nth-child(2){
          color: rgb(119,119,119);
        }
      }
    }
    .txtR_c {
      float: right;
      margin-right: 0.3rem;
      color: rgb(153,153,153);
      /*font-weight: 100;*/
      font-size: 1.2rem;
    }
  }
  .time_c {
    width: 100%;
    height: 4rem;
    background: white;
    margin-top: 0.3rem;
    span {
      /*line-height: 4rem;*/
      vertical-align: 1.9rem;
      font-size: 0.8rem;
      font-weight: bold;
      margin-left: 0.8rem;
    }
    .leftBox_c {
      width: 0.2rem;
      height: 4rem;
      background: rgb(49,144,232);
      display: inline-block;
    }
    .predict_c {
      display: inline-block;
      text-align: right;
      font-size: 0.7rem;
      float: right;
      margin-top: 0.7rem;
      margin-right: 0.5rem;

      :nth-child(1){
        color: rgb(109,144,236);
        width: 7rem;
      }
      :nth-child(2){
        background: rgb(49,144,232);
        font-size: 0.55rem;
        width: 2.4rem;
        float: right;
        color: white;
        margin-top: 0.56rem;
        /*padding-right: 0.1rem;*/
        padding: 0.1rem;
        border-radius:0.1rem;
      }
    }
  }
  .payA_c {
    width: 100%;
    height: 4rem;
    line-height: 2rem;
    background: white;
    margin-top: 0.3rem;
    font-size: 0.6rem;
    color: rgb(170,170,170);
    .payB_c {
      width: 97%;
      margin-left: 3%;
      text-align: right;
      border-bottom: 1px solid #f5f5f5;

      :nth-child(1){
        color: #666;
        font-size: 0.7rem;
        float: left;
      }
      .txtLogoA_c {
        margin-right: 0.4rem;
      }
    }
    .redBig_c {
      margin-left: 3%;
      :nth-child(2){
        float: right;
        margin-right: 0.5rem;
      }
    }
  }
  .cost_c {
    width: 100%;
    margin-top: 0.3rem;
    background: white;
    .imgLogo_c {
      width: 1.2rem;
      margin-left: 3%;
      vertical-align: -0.3rem;
    }
    ul {
      font-size: 0.7rem;
      color: #666;
      border-bottom: 1px solid #f5f5f5;
      li {
        height: 2rem;
        line-height: 2rem;
        p {
          display: inline-block;
          margin-left: 3%;
          width: 70%;
        };
        div {
          display: inline-block;
        }
      }
      .shopA_c {
        border-bottom: 1px solid #f5f5f5;
        height: 2.8rem;
        line-height: 2.8rem;
        font-size: 0.8rem;
        span {
          margin-left: 0.3rem;
          color: #333;
        }
      }
      .moneyA_c {
        div {
          :nth-child(1){
            color: #f60;
          }
          :nth-child(2){
            margin-left: 1.3rem;
          }
        }
      }
    }
    .moneyB_c {
      margin-left: 1.1rem;
    }
    .moneyC_c {
      margin-left: 2.7rem;
    }
  }
  .allSum_c {
    width: 100%;
    height: 3.6rem;
    background: white;
    font-size: 0.7rem;
    color: #666;
    p {
      width: 70%;
      /*height: 3.5rem;*/
      line-height: 1.8rem;
      margin-left: 3%;
      float: left;
    }
    span {
      width: 27%;
      float: left;
      line-height: 1.8rem;
      color: #f60;
    }
  }
  .txtP_c {
    width: 100%;
    background: white;
    margin-top: 0.3rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.73rem;
    padding: 0 3% 0 3%;

    a {
      border-bottom: 1px solid #f5f5f5;
      display: inline-block;
      width: 100%;
      height: 2rem;
      color: #666;
      .txtLogoB_c {
        vertical-align: -0.1rem;
        color: #ccc;
      }
    }
    .txtI_c{
      display: inline-block;
      width: 2.93rem;
      /*margin-left: 3%;*/
    }
    .txtU_c{
      display: inline-block;
      width: 10rem;
      text-align: right;
      font-size: 0.65rem;
      margin-left: 5%;
      color: #aaa;
    }
  }
  .txtO_c {
    width: 100%;
    background: white;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.65rem;
    padding: 0 3% 0 3%;
    margin-bottom: 3rem;
    a {
      border-bottom: 1px solid #f5f5f5;
      display: inline-block;
      width: 100%;
      height: 2rem;
      color: #666;
      .txtY_c {
        display: inline-block;
        width: 2.93rem;
      }
      .txtU_c{
        display: inline-block;
        width: 10rem;
        text-align: right;
        font-size: 0.65rem;
        margin-left: 5%;
        color: #aaa;
      }
      .txtLogoB_c {
        vertical-align: -0.1rem;
        color: #ccc;
      }
    }
  }
  .buttonA_c {
    width: 100%;
    height: 2rem;
    background: #3c3c3c;
    position: fixed;
    left: 0;
    bottom: 0;
    p {
      display: inline-block;
      font-size: 0.75rem;
      line-height: 2rem;
      color: white;
    }
    :nth-child(1){
       width: 72%;
       margin-left: 3%;
     }
    :nth-child(2){
      width: 25%;
      text-align: center;
      background: #56d176;
    }
  }
  .payQ_c{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
  }
  .wayB_c {
    width: 100%;
    height: 62%;
  }
  .wayA_c {
    width: 100%;
    height: 38%;
    position: fixed;
    bottom: 0;
    background: white;
    font-size: 0.7rem;
    color: #333;
    position: fixed;
    bottom: 0;
    z-index: 200;
    p {
      text-align: center;
      line-height: 2rem;
      background: #fafafa;
    }
    ul {
      padding: 0 0.6rem;
      li {
        height: 2.5rem;
        line-height: 2.5rem;
        i{
          background: #ccc;
          border-radius: 50%;
          font-size: 0.6rem;
          color: white;
          padding: 0.05rem 0.13rem;
         text-align: right;
          height: 0.9rem;
          line-height: 0.9rem;
          margin-top: 0.8rem;
          width: 0.9rem;
        }
        .txtV_c {
          background: #4cd964;
        }
      }
      .moneyP_c {
        color: #ccc;
      }
    }
  }
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
  .empty {
    clear: both;
  }
</style>
