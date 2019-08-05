<template>
    <div class="s-shopcar">

        <div class="cart_icon_container">
          <i class="iconfont" style="color: white;">&#xe60c;</i>
        </div>
        <div  class="cart_num">
          <div class="money" >¥ 0.00</div>
          <div class="pei_money">配送费¥5</div>
        </div>
        <div class="gotopay">
          <span  class="gotopay_button_style">还差¥20起送</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "shopCar"
    }
</script>

<style scoped lang="less">
   .s-shopcar{
     width: 100%;
     height: 1.95rem;
      background-color: #333;
     position: fixed;
     left: 0;
     bottom: 0;
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
   }
</style>
