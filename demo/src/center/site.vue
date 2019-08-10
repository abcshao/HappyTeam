<template>
    <div class="site">
      <van-nav-bar
        title="编辑地址"
        left-arrow
        fixed
        @click-left="onClickLeft"
      />
      <ul>
        <li v-for="(pro,index) in newmsg" :key="index">
            <div class="div2">
              <p>{{pro.address}}</p>
              <p>{{pro.phone}}</p>
            </div>

        </li>
      </ul>

      <router-link :to="{path:'/redact'}">
        <div class="div1">
          <span class="span1">新增地址</span>
          <span class="span2"><i class="iconfont">&#xe714;</i></span>
        </div>
      </router-link>
    </div>
</template>

<script>
  import {mapActions,mapState} from "vuex"
  import {postaddB} from "../serivice/api"
    export default {
        name: "site",
      data(){
          return{
            msg:[],
          }
      },
      methods:{
        ...mapActions(['SET_USER_INFO']),

        onClickLeft(){
          this.$router.push({path:'/account'});
        }
      },
      beforeRouteLeave(to, from, next) {
        // 设置下一个路由的 meta
        to.meta.keepAlive = false;  // B 跳转到 A 时，让 A 缓存，即不刷新
        next();
      },
      mounted(){
        postaddB(this.userinfo.user_id).then((result)=>{
          console.log(result);
          this.msg=result;


        })
      },
      computed: {
        ...mapState(['userinfo']),
        newmsg(){
          return this.msg.reverse();
        }
      },
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
  .iconfont{
    font-size: 1.5rem;
    color: rgb(216, 216, 216);
    font-weight: 300;
  }
  .div1{
    background: white;
    padding: 0.2rem 0.3rem;
    /*margin: 0.5rem 0;*/
  }
  .span2{
    float: right;
  }
  ul{
    background: #fff;
    margin-top: 1.7rem;
    border-top: 0.02rem solid #d9d9d9;
    border-bottom: 0.02rem solid #d9d9d9;
  }
  li{
    border-bottom: 1px solid #d9d9d9;
    padding: .4rem 0;
  }
  p{
    line-height: .9rem;
    font-size: .6rem;
    color: #333;
  }
  span{
    font-size: .7rem;
    color: #999;
  }
  .div2{
    display: inline-block;
    width: 95%;
    padding-left: 0.5rem;
  }
</style>
