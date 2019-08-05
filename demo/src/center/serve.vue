<template>
    <div class="serve">
      <van-nav-bar
        title="服务中心"
        left-arrow
        fixed
        @click-left="onClickLeft"
      />
      <!--客服-->
      <div class="top">
        <!--在线客服-->
       <div style="border-right: 0.05rem solid #F5F5F5">
         <p class="p"><i class="iconfont">&#xe64e;</i></p>
         <p class="p1">在线客服</p>
       </div>
        <!--电话客服-->
        <div>
          <p class="p2"><i class="iconfont">&#xe702;</i></p>
          <p class="p1">电话客服</p>
        </div>
      </div>


      <!--热门问题部分-->
      <div class="bottom">
        <p>热门问题</p>
        <ul>
          <router-link :to="{path:'/svip',query:{tit:serveObj.supervipCaption,question:serveObj.supervipContent}}">
          <li>
              <span>{{serveObj.supervipCaption}}</span>
              <span class="span1"> ></span>
          </li>
          </router-link>

          <router-link :to="{path:'/svip',query:{tit:serveObj.signCaption,question:serveObj.signContent}}">
            <li>
              <span>{{serveObj.signCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.rankCaption,question:serveObj.rankContent}}">
            <li>
              <span>{{serveObj.rankCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.pointtextCaption,question:serveObj.pointtextContent}}">
            <li>
              <span>{{serveObj.pointtextCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.phototutorialCaption,question:serveObj.phototutorialContent}}">
            <li>
              <span>{{serveObj.phototutorialCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.paymentCaption,question:serveObj.paymentContent}}">
            <li>
              <span>{{serveObj.paymentCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.paymentCaption,question:serveObj.otherContent}}">
            <li>
              <span>{{serveObj.otherCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.ontimeCaption,question:serveObj.ontimeContent}}">
            <li>
              <span>{{serveObj.ontimeCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.memberTimesCaption,question:serveObj.memberTimesContent}}">
            <li>
              <span>{{serveObj.memberTimesCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.memberCaption,question:serveObj.memberContent}}">
            <li>
              <span>{{serveObj.memberCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.hongbaoCaption,question:serveObj.hongbaoContent}}">
            <li>
              <span>{{serveObj.hongbaoCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.freshmanCaption,question:serveObj.freshmanContent}}">
            <li>
              <span>{{serveObj.freshmanCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.forgotCaption,question:serveObj.forgotContent}}">
            <li>
              <span>{{serveObj.forgotCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.discountCaption,question:serveObj.discountContent}}">
            <li>
              <span>{{serveObj.discountCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.disclaimerCaption,question:serveObj.disclaimerContent}}">
            <li>
              <span>{{serveObj.disclaimerCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.couponCaption,question:serveObj.couponContent}}">
            <li>
              <span>{{serveObj.couponCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.businessCaption,question:serveObj.businessContent}}">
            <li>
              <span>{{serveObj.businessCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
          <router-link :to="{path:'/svip',query:{tit:serveObj.balanceCaption,question:serveObj.balanceContent}}">
            <li>
              <span>{{serveObj.balanceCaption}}</span>
              <span class="span1"> ></span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
  import {getsvip} from "../serivice/api"
    export default {
        name: "serve",
      data(){
          return{
              serveObj:"",
          }
      },
      methods:{
        onClickLeft(){
          this.$router.go(-1);
        }
      },
      mounted(){
        getsvip().then((result)=>{
          this.serveObj=result;
          console.log(this.serveObj);
          // let arrA=[];
          // for (let i in result){
          //   arrA.push(result[i])
          //
          // }
          // console.log(arrA);
          // arrA.splice(24,1);
          // arrA.splice(17,4);
          // for(let j=0;j<arrA.length;j++){
          //   this.serveObj.push(arrA[2*j+1]);
          //   console.log(arrA[2*j+1]);
          // }
          // this.serveObj.splice(21)
        })
      }
    }
</script>

<style scoped >
  .serve{
    background: white;
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
    margin-top: 2rem;
  }
  .top div{
    background: white;
    float: left;
    display: inline-block;
    width: 50%;
    text-align: center;
    padding-top: 0.5rem;
    border-bottom: 0.05rem solid #f1f1f1;
  }
  .p1{
    color: #666;
    font-size: 0.6rem;
    padding-top:0.2rem ;
    padding-bottom: 0.5rem;
  }
  .p{
    color: rgb(255, 123, 82);
    font-size: 0.8rem;
  }
  .p2{
    color: rgb(106, 194, 11);
    font-size: 0.8rem;
  }
  .bottom{
    background: white;
    border-top: 0.1rem solid #f1f1f1;

  }
  .bottom p{
    line-height: 3rem;
    font-size: 0.75rem;
    color: #333;
    padding-left: 0.5rem;
  }
  li{
    padding-top: 0.4rem;
    padding-bottom: 0.5rem;
    border-top: 0.05rem solid #f1f1f1;
    padding-left: 0.5rem;
    position: relative;
  }
li span{
    color: #666;
  font-size: 0.6rem;
}
.span1{
  display: inline-block;
  font-size: 1rem;
 position: absolute;
  right: 0.5rem;
  color: rgb(153,153,153);
}
</style>
