<template>
    <div class="mine">
      <van-nav-bar
        title="我的"
        left-arrow
        @click-left="onClickLeft"
      />
    <!--上面个人中心界面-->
      <div class="top" @click="tz">
        <!--<router-link :to="{path:'/account'}">-->
          <img src="//elm.cangdu.org/img/default.jpg" alt="" id="img">
          <!--<img :src="'//elm.cangdu.org/img/'+obj.avatar" alt="" id="img">-->
          <p id="p1">{{Object.keys(userinfo).length==0?"登录/注册":userinfo.username}}</p>
          <img src="../imags/download.png" alt="" id="img1">
          <p id="p2">{{userinfo.mobile==''?"暂无绑定手机号":userinfo.mobile}}</p>
          <van-icon name="arrow" class="van1"/>
        <!--</router-link>-->
      </div>
      <!--中间部分-->
      <van-row>
      <router-link :to="{path:'/balabce'}">
        <van-col span="8">
         <span class="left2">
             <strong class="left1">0.00</strong>
            元
          </span>
          <p class="left3">我的余额</p>
        </van-col>
      </router-link>


        <router-link :to="{path:'/discounts'}">
        <van-col span="8" class="a">
          <span class="left2">
             <strong class="left1" style="color: #ff5f3e">{{userinfo.gift_amount==undefined?"0":userinfo.gift_amount}}</strong>
            个
          </span>
          <p class="left3">我的优惠</p>
        </van-col>
        </router-link>

        <router-link :to="{path:'/jifen'}">
          <van-col span="8">
         <span class="left2">
             <strong class="left1" style="color: #6ac20b">0</strong>
            分
          </span>
            <p class="left3">我的积分</p>
          </van-col>
        </router-link>


      </van-row>

      <!--单元格-->
      <div class="until">
        <!--<span class="all">-->
          <van-cell title="我的订单" is-link />
        <!--</span>-->
        <!--<span>-->
           <van-cell title="积分商城" is-link  class="b"/>
        <!--</span>-->
        <!--<span>-->
        <router-link :to="{path:'/member'}">
          <van-cell title="饿了么会员卡" is-link  />
        </router-link>

        <!--</span>-->

      </div>

      <!--服务中心-->
      <div>
        <router-link :to="{path:'/serve'}">
           <span>
           <van-cell title="服务中心" is-link  />
        </span>
        </router-link>

        <router-link :to="{path:'/past'}">
        <span>
           <van-cell title="下载饿了么APP" is-link  />
        </span>
        </router-link>

      </div>

      <Sfooter></Sfooter>
    </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
  import Sfooter from "../components/Sfooter/Sfooter";
    export default {
        name: "minejmx",
      data(){
          return{

          }
      },
      methods:{
        ...mapActions(['SET_USER_INFO']),
        onClickLeft(){
          this.$router.go(-1);
        },
        tz(){
          if(Object.keys(this.userinfo).length ==0){
            this.$router.push({path:'/dl'})
          }else{
            this.$router.push({path:'/account'})
          }
        }
      },
      mounted(){
          if (this.userinfo.mobile==""){
            this.userinfo.mobile="暂无绑定手机号"
          }
        console.log(this.userinfo.username)
        },

      computed:{
        ...mapState(['userinfo']),


      },
      components: {
          Sfooter,
      },
    }
</script>

<style scoped>
  .van-cell__right-icon {
    margin-left: 5px;
    color: black;
  }
  .iconfont{
    color: #666;
    font-size: 0.3rem;
  }
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
    width: 100%;
    height: 10%;
    background: rgb(49,144,232);
    position: relative;
    padding: 0.5rem 0.5rem;
  }
#img{
  width: 3rem;
  border-radius: 50%;
}
#img1{
  border-radius: 30%;
}
  .top p{
    color: white;

  }
  #p1{
  position: absolute;
    left:4rem;
    top: 1rem;
    font-size: 0.9rem;
  }
  #p2{
    font-size: 0.6rem;
    position: absolute;
    left: 4.9rem;
    top: 2.7rem;
  }
  .van1{
    color: white;
    font-size:0.6rem;
    position: absolute;
    right: 1rem;
    top: 3rem;
  }

  .van1 :before{
    color: red;
  }

  .left1{
    color: #f90;
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 0.2rem;
    padding-top: 1rem;
  }
  .left2{
    margin: 0.5rem;
    font-size: 0.5rem;
    color: #666;
    padding-bottom: .3rem;
  }
  .left3{
    font-size: .57333rem;
    color: #666;
    font-weight: 400;
    padding-top: .3rem;
    padding-left: 0.5rem;
    padding-bottom: 0.3rem;
  }
.until{
  margin: 0.5rem 0;
}
.until :before{
  color: rgb(187,187,187);
  margin-top: 9rem;


}
.a{
  border-right:0.1rem solid #f1f1f1 ;
  border-left: 0.1rem solid #f1f1f1;
}
  .b{
    border-top:0.05rem solid #f1f1f1 ;
    border-bottom: 0.05rem solid #f1f1f1;
  }
.van-col{
  text-align: center;
  background: white;
}
  .van-icon-arrow:before{
    font-size: 1rem;
   position: absolute;
    bottom: 0.3rem;
  }
  .all{
    background: red;
  }
  .van-icon-arrow[data-v-c451727e]:before {
    color: ;
    font-size: 1rem;
    position: absolute;
    bottom: 0.3rem;
  }
</style>
