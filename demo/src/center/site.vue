<template>
    <div class="site">



      <van-nav-bar
        title="编辑地址"
        left-arrow
        fixed
        @click-left="onClickLeft"

        @click-right="updateStatus"
      >
       <span slot="right"  style="color: #fff;" v-if="!isupdate" >编辑</span>
       <span slot="right"  style="color: #fff;" v-else >完成</span>
      </van-nav-bar>



      <ul>
        <li v-for="(pro,index) in newmsg" :key="index">
            <div class="div2">
              <p>{{pro.address}}</p>
              <p>{{pro.phone}}
              </p>
              <div class="delsign" v-if="isupdate" @click="del_btn(pro.id,pro.user_id,index)">x</div>

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
  import {postaddB,del_zhi} from "../serivice/api"
    export default {
        name: "site",
      data(){
          return{
            msg:[],
            isupdate:false,
          }
      },
      methods:{
        ...mapActions(['SET_USER_INFO']),

        onClickLeft(){
          this.$router.push({path:'/account'});
        },
        del_btn(id,user_id,index){
          del_zhi({id:id,user_id:user_id}).then((result)=>{
            if(result.status==1){
              this.msg.splice(index,1);
            }
          })
        },
        updateStatus(){
          this.isupdate=!this.isupdate;
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
  li:nth-child(1){
    background: #fff8c3;
  }
  .van-nav-bar__text{
    color: #fff;
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
    position: relative;
    display: inline-block;
    width: 95%;
    padding-left: 0.5rem;
  }
  .delsign{
    position: absolute;
    right: 0;
    top: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    font-size: 0.7rem;
    color: #999999;
  }
</style>
