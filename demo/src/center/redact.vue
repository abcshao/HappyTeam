<template>
    <div class="redact">
      <van-nav-bar
        title="新增地址"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="all">
        <!--姓名-->
        <div class="div1">
          <input type="text" placeholder="请填写你的姓名" @input="yourN" v-model="name" :class="{input:cheack}">
          <p v-if="cheack">请填写您的姓名</p>
        </div>
        
        <!--地址-->
        <router-link :to="{path:'/add'}">
          <div class="div2">
            <input type="text" placeholder="小区/写字楼/学校等" v-model="all.name" style="color: black">
          </div>
        </router-link>

        <!--详细地址-->
        <div class="div3">
          <input type="text" placeholder="请填写详细送餐地址" v-model="addRes" :class="{input:cheack1}" @input="address">
          <p v-if="cheack1">请详细填写送餐地址</p>
          <p v-if="cheack2">送餐地址太短了，不能识别</p>
        </div>

        <!--手机号-->
        <div class="div4">
          <input type="text" placeholder="请填写能够联系到您的手机号" v-model="myPhone" :class="{input:cheack3}" @input="newPhone">
          <p v-if="cheack3">手机号不能为空</p>
          <p v-if="cheack4">请输入正确的手机号</p>
        </div>

        <!--备选手机号-->
        <div class="div5">
          <input type="text" placeholder="备选联系电话（选填）" v-model="bPhone" @input="newBphone">
          <p v-if="cheack5">请输入正确的手机号</p>
        </div>
      </div>

      <!--按钮-->
        <div class="div6">
          <button @click="btnAdd">新增地址</button>
        </div>
      <!--弹框-->
      <transition name="fade" enter-active-class="animated bounceIn"
                  :duration="400">
        <Pop_c v-if="show" :popKuang="popKuang"></Pop_c>
      </transition>

    </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
  import {postadd} from "../serivice/api"
  import Pop_c from "../components/Cpm_c/Pop_c"
    export default {
        name: "redact",
        components:{Pop_c},
      data(){
          return{
             cheack:false,
            cheack1:false,
            cheack2:false,
            cheack3:false,
            cheack4:false,
            cheack5:false,
            //姓名
            name:"",
            //地址
            addRes:"",
          // 手机号
            myPhone:"",
          //  备用手机号
            bPhone:"",
          //  存储的数据
            msg:[],
            allinfo:[],
            show:false,
            popKuang:"",
          }
      },
      methods:{
        ...mapActions(['SET_USER_INFO']),
        ...mapActions(['SET_ALL_INFO']),
        btntxt_c(show){
          this.show = show;
        },
        onClickLeft(){
          this.$router.push({path:'/site'});
        },
      //  姓名输入框内的判断
        yourN(){
          if(this.name==""){
            this.cheack=true;
          }else{
            this.cheack=false;
          }
        },
      //点击详细送餐地址的判断
        address(){
          if(this.addRes.length==0){
            this.cheack1=true;
            this.cheack2=false;
            return;
          }else if(this.addRes.length<3 ){
            this.cheack1=false;
            this.cheack2=true;
            return;
          }else if(this.addRes.length>=3){
            this.cheack1=false;
            this.cheack2=false;
            return;
          }
        },
        newPhone(){
          if(this.myPhone.length==0){
            this.cheack3=true;
            this.cheack4=false;
            return;
          }else if(!(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/).test(this.myPhone)){
            this.cheack4=true;
            this.cheack3=false;
            return;
          }else {
            this.cheack4=false;
            this.cheack3=false;
            return;
          }
        },

        newBphone(){
          if (this.bPhone.length==0) {
            this.cheack5=false;
            return;
          }else if(!(/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/).test(this.bPhone)){
            this.cheack5=true;
            return;
          }else if(this.bPhone.length>11){
            this.cheack5=true;
            return;
          }else{
            this.cheack5=false;
            return;

          }
        },

      //  点击新增按钮传值存储数据
        btnAdd(){

          postadd(this.userinfo.user_id,{
              address_detail:this.all.name,
              address:this.addRes,
              geohash:this.all.geohash,
              name:this.name,
              phone:this.myPhone,
              tag :"标签",
              sex :1,
              phone_bk:this.bPhone,
              tag_type:2
           }
          ).then((result)=>{
              console.log(result)
              //判断地址是否为空
            if(result.message == "地址信息错误"){
              this.show = true;
              this.popKuang = "地址信息错误";
              return;
            }

            if(result.message == "详细地址信息错误"){
              this.show = true;
              this.popKuang = "详细地址信息错误";
              return;
            }
              //判断用户名是否为空
            if(result.message == "收货人姓名错误"){
              this.show = true;
              this.popKuang = "收货人姓名错误";
              return;
            }
            //判断手机号是否正确
            if(result.message == "收获手机号错误"){
              this.show = true;
              this.popKuang = "收获人手机号错误";
              return;
            }
            //判断完毕
            if(result.status == 1){
              // this.show = true;
              // this.popKuang = "收获人手机号错误";
              // return;
              this.SET_ALL_INFO([]);
              this.$router.push({path:'/site'})
            }
          });
        }
      },
      // mounted(){
      // //点击的地址的值
      //   this.msg=JSON.parse(localStorage.getItem('all'));
      //   console.log(this.msg.name)
      //   // this.allinfo=JSON.parse(localStorage.getItem('allinfo'));
      //   // console.log(this.allinfo)
      //
      // },
      computed:{
        ...mapState(['userinfo']),
        ...mapState(['all']),
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
  .all{
    background: #fff;
    padding-top: .4rem;
  }
  div{
    padding-bottom: .4rem;
  }
  input{
    display: block;
    width: 15rem;
    font-size: .6rem;
    margin: 0 auto;
    padding: .3rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  .input{
    border-color: #ea3106;
  }
  p{
    font-size: .4rem;
    color: #ea3106;
    padding-left: .5rem;
    margin-top: .2rem;
  }
  .div6{
    margin: .6rem auto;
    width: 15rem;
    background: #4cd964;
    border-radius: 3px;
  }
  button{
    width: 100%;
    font-size: .6rem;
    color: #fff;
    line-height: 1.6rem;
    background: none;
    font-weight: 700;
    opacity: .6;
  }
</style>
