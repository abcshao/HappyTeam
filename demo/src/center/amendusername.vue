<template>
    <div class="amendusername">
      <van-nav-bar
        title="修改用户名"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="top">
        <input type="text" placeholder="输入用户名" :class="{input1:p1}" v-model="username" @input="information">
        <p v-if="p" class="p">用户名只能修改一次（5-24字符之间）</p>
        <p v-if="p1" class="p1">用户名长度在5到24位之间</p>
      </div>
      <button :class="{button1:b1}" :disabled=p1 @click="abc">确认修改</button>
    </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
    export default {
        name: "amendusername",
      data(){
          return{
            username:"",
            p:true,
            p1:false,
            b1:false,
            allinfo:[],
          }
      },
      methods:{
        ...mapActions(['SET_USER_INFO']),
        abc(){
          // console.log(123)
          this.userinfo.username=this.username;
          // console.log(this.allinfo.username);
          this.$router.push({path:'/account'})
        },
        onClickLeft(){
          this.$router.go(-1);
        },
        information(){
          if(this.username.length<=4){
            this.p=false;
            this.p1=true;
            this.b1=false;
          }else if(this.username.length>24){
            this.p=false;
            this.p1=true;
            this.b1=false;
          }else if (this.username.length>4) {
            this.p=true;
            this.p1=false;
            this.b1=true;
          }
        }

      },

      // mounted(){
      //     this.allinfo=JSON.parse(localStorage.getItem('allinfo'));
      //   console.log(this.allinfo.username);
      //
      // },
      computed:{
        ...mapState(['userinfo']),
      }
    }
</script>

<style scoped>
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
  input{
    background: none;
    width: 96%;
    margin-left: 2%;
    margin-top: 2%;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: .2rem .2rem;
    line-height: 1.2rem;
    font-size: .7rem;
    display: block;
  }
  .input1{
    background: none;
    width: 96%;
    margin-left: 2%;
    margin-top: 2%;
    border: 1px solid #ea3106;
    border-radius: 2px;
    padding: .2rem .2rem;
    line-height: 1.2rem;
    font-size: .7rem;
    display: block;
  }
  .p{
    width: 100%;
    font-size: .4rem;
    color: #666;
    padding: .4rem 0 1rem;
    margin-left: 2%;
  }
  .p1{
    width: 100%;
    font-size: .4rem;
    color: #ea3106;
    padding: .4rem 0 1rem;
    margin-left: 2%;
  }
  button{
    display: block;
    width: 96%;
    margin-left: 2%;
    background: #3199e8;
    line-height: 2rem;
    font-size: .7rem;
    color: #ddd;
    transition: all .5s;
  }
  .button1{
    display: block;
    width: 96%;
    margin-left: 2%;
    background: #3199e8;
    line-height: 2rem;
    font-size: .7rem;
    color: #fff;
    transition: all 1s;
    z-index: 10;
  }
</style>
