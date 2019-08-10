<template>
    <div class="add">
      <van-nav-bar
        title="搜索地址"
        fixed
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="top">
        <input type="search" placeholder="请输入小区/写字楼/学校等" v-model="input1">
       <button @click="btnSearch">确认</button>
      </div>
      <div class="center">为了满足商家的送餐要求，建议您从列表中选择地址</div>
      <div class="bottom" v-if="check">
        <p>找不到地址？</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号）可稍后输入哦。</p>
      </div>

      <ul v-if="textA">
        <router-link :to="{path:'/redact'}">
          <li v-for="(por, index) in add" :key="index" @click="newadd(por)">
            <p>{{por.name}}</p>
            <p>{{por.address}}</p>
          </li>
        </router-link>
      </ul>

    </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
  import {getadd} from "../serivice/api"
    export default {
        name: "add",
      data(){
          return{
            message:[],
            input1:"",
            add:[],

            check:true,
            textA:false,
            cityxinxi:[],
          }
      },

      methods:{
        ...mapActions(['SET_USER_INFO']),
        ...mapActions(['SET_ALL_INFO']),
        onClickLeft(){
          this.$router.push({path:'/redact',});
        },
        btnSearch(){
          // this.message=JSON.parse(localStorage.getItem('allinfo'));
          // console.log(this.message.city);
          getadd({city_id:(this.userinfo.city),keyword:this.input1}).then((result)=>{
            this.add=result;
            console.log(this.add)
            if(this.add.name=='ERROR_QUERY_TYPE'){
              this.check=true;
              this.textA=false;
            }else{
              this.check=false;
              this.textA=true;
            }
          })

        },
        newadd(v){
          console.log(v)
          this.SET_ALL_INFO(v)
          // this.cityxinxi=localStorage.setItem('all',JSON.stringify((v)))
        }
      },
      beforeRouteLeave(to, from, next) {
        // 设置下一个路由的 meta
        to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
        next();
      },
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
  .top{
    margin-top: 2rem;
    background: #fff;
    padding: .5rem;
    position: relative;
  }
  .center{
    background: #fff6e4;
    font-size: .62rem;
    color: #ff883f;
    text-align: center;
    padding: .2rem 0;
  }
  input{
    display: block;
    width: 11.8rem;
    padding: .4rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: .6rem;
  }
  button{
    display: block;
    width: 3rem;
    background: #3199e8;
    font-size: .7rem;
    color: #fff;
    border-radius: 5px;
    padding: .4rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  .bottom{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;

    p{
      width: 100%;
      text-align: center;
      font-size: .7rem;
      color: #969696;
      margin-bottom: .4rem;
    }
  }
  li{
    border-bottom: 1px solid #ccc;
    padding: .4rem;
    p{
      font-size: .65rem;
      color: #969696;
      margin-bottom: .2rem;
    }
  }

</style>
