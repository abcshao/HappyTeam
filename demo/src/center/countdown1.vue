<template>
    <div class="down">
      <!--<van-nav-bar-->
        <!--title="在线支付"-->
        <!--left-arrow-->
        <!--@click-left="onClickLeft"-->
      <!--/>-->
      <div class="s-header clear">
        <i class="iconfont txtQ_c"  @click="$router.go(-1)">&#xe606;</i>
        <span>在线支付</span>
        <div class="empty"></div>
      </div>
      <div class="box1">
        <p class="p1">支付剩余时间</p>
        <div class="box2">
          <van-count-down :time="time" />
        </div>
      </div>
      <div class="box3">
        <p class="p2">选择支付方式</p>
      </div>

      <div class="box4">
        <div class="box5 clear">
          <img src="../imags/zfb.png">
          <span class="s1">支付宝</span>
          <i class="iconfont textC_c right" :class="{'textB_c':active == true}" @click="selectSort_c(0)">&#xe619;</i>
        </div>
        <div class="box5 clear">
          <i class="iconfont left imgA_c">&#xe657;</i>
          <span class="s1 s2">微信</span>
          <i class="iconfont textC_c textD_c right" :class="{'textB_c':txtL_c == true}" @click="selectSort_c(1)">&#xe619;</i>
        </div>
      </div>
      <div class="box_btn">
        <button class="btn btn-success" @click="btnconfirm">确认支付</button>
      </div>
      <transition name="fade" enter-active-class="animated bounceIn"
                  :duration="400">
        <Pop_c v-if="show" :popKuang="popKuang" class="boxK_c"></Pop_c>
      </transition>
    </div>
</template>

<script>
    import Pop_c from "../components/Cpm_c/Pop_c";
    export default {
        name: "countdown1",
      components: {Pop_c},
      data(){
        return{
          time:  15 * 60 * 1000,
          radio:1,
          reveal:false,
          show:false,
          active:true,
          txtL_c:false,
          popKuang:"",
          i:0,
        }
      },
      methods:{
        btntxt_c(show){
          this.show = show;
          if(this.i>=1){
            this.$router.push({path:'/order_jmx'})
          }
          this.i++;
        },
        onClickLeft(){
          this.$router.go(-1)
        },
        close(){
          this.reveal=false
          // this.$router.push({path:""})
        },
        btnconfirm(){
          if(this.radio==1){
            console.log("当前是支付宝支付")
            this.reveal=true
            this.show = true;
            this.popKuang = "当前环境无法支付 , 请打开官方APP进行付款";
          }else {
            console.log("当前是微信支付")
            this.reveal=true;
            this.show = true;
            this.popKuang = "当前环境无法支付 , 请打开官方APP进行付款";

          }
        },
        selectSort_c(index){
          if (index == 0){
            this.active = true;
            this.txtL_c = false;
            this.sexA_c=1;
            this.radio=1
          }else if(index == 1){
            this.active = false;
            this.txtL_c = true;
            this.sexA_c=2;
            this.radio=0
          }
        },
      },
      mounted(){
        this.show = true;
        this.popKuang = "暂不开放支付功能";
      }
      //下方跳转索引 通过vuex变换存储
      // created(){
      //   this.$store.commit('changeTab', 2);
      // },
    }
</script>

<style scoped lang="less">
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
  .van-nav-bar__title{
    color: white;
    font-weight:700;
  }
  .van-nav-bar{
    background: #3190e8;

  }
  .van-icon {
    color: white;
    font-size: 0.25rem;
    margin-left: -100%;
  }
  .box1{
    background: white;
    width: 100%;
    height: 6.5rem;
    text-align: center ;
    overflow: hidden;
  }
  .van-count-down{
    font-size: 1.5rem;
    margin-top: 5%;
  }
  .p1{
    margin-top: 10%;
    font-size: 0.6rem;
    color: #666;
  }
  .p2{
    font-size: 0.7rem;
    line-height: 1.8rem ;
    padding-left: 5%;
  }
  .box4{
    background: white;

  }
  .box4 img{
    width: 2rem;
    /*height: 2rem;*/
    /*margin-right: .2rem;*/
    vertical-align: middle;
    /*padding-left: 0.5rem;*/
    /*background: rgb(64,185,74);*/
    border-radius: 50%;

  }
  .box5{
    padding: 0.4rem .7rem;
    height: 3rem;
    border-bottom: .025rem solid #f5f5f5;
    .imgA_c {
      font-size: 1.9rem;
      color: rgb(69,193,68);
    }
  }
  .s1{
    display: inline-block;
    font-size: .7rem;
    color: #666;
    margin-left: 2%;
  }
  .s2 {
    margin-left: 4%;
    vertical-align: -0.2rem;
  }
  .van-radio{
    display: inline-block;
  }

  .radio1{

    /*margin-top: 0.3rem;*/
    /*margin-right: 0.2rem;*/
    transform: scale(1.3,1.3);
  }
  .btn{
    width: 95%;
    background: #4cd964;
    line-height: 1.5rem;
  }
  .box_btn{
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.7rem;
    color: white;
  }


  /*弹出*/
  .popup{
    top: 28%;
    left: 10%;
    width: 80%;
    background: white;
    /*height: 100px;*/
    overflow: hidden;
    position: absolute;

  }
  .popup p{
    text-align: center;
    margin-top: 5%;
    font-size: 0.16rem;
    color: #333;
  }
  .popup_box1{
    border: 3px solid #f8cb86;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    margin-top: 5%;
  }
  .popup_s1{
    display: inline-block;
    background: #f8cb86;
    width: 0.03rem;
    height: 0.4rem;
    margin-left: 48%;
    margin-top: 10%;
  }
  .popup_s2{
    display: inline-block;
    background: #f8cb86;
    width: 0.03rem;
    height: 0.05rem;
    margin-left: 48%;
    border-radius: 50%;
    margin-bottom: 4px;
  }
  .popup_box2{
    background: #4cd964;
    text-align: center;
    line-height: 0.42rem;
    color: white;
    margin-top: 5%  ;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active{
    animation: one .4s ease-in-out forwards;

  }
.boxK_c {
  margin-top: -0.5rem;
}
  .textC_c {
    background: #ccc;
    border-radius: 50%;
    font-size: 0.6rem;
    margin-top: 0.44rem;
    line-height: 1rem;
    color: white;
    padding: 0.05rem 0.1rem;
  }
  .textB_c {
    background: #4cd964;
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 18px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  @keyframes one {
    0%{
      transform: scale(0.9,0.9);
    }
    50%{
      transform: scale(1.1,1.1);
    }
    75%{
      transform: scale(0.9,0.9);
    }
    100%{
      transform: scale(1.1,1.1);
    }
  }
</style>
