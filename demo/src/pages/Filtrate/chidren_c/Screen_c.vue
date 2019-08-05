<template>
  <!--<div class="screenA_c" v-if=screenB_c>-->
  <div>
    <p>配送方式</p>
    <ul>
      <li v-for="(item,index) in delivery_list" :key="index" @click="delivery(item.id)" >
        <!--<span> <i class="iconfont">&#xe6d3;</i></span>-->
        <div class="icon_style clear">
          <div class="left icon_style_icon">
            <van-icon name="success"   color="#3190e8" size="0.692rem"    v-show="delivery_mode==item.id"  />
            <i class="iconfont"   :style="{color:'#'+item.color,}" v-show="delivery_mode!=item.id">&#xe632;</i>
          </div>
          <div class="right icon_style_name">
            <span :style="{color:!delivery_mode==item.id?'':'#3190e8'}">{{item.text}}</span>
          </div>
        </div>
      </li>
    </ul>
    <p>商家属性( 可以多选 )</p>
    <ul class="property_c">
      <li v-for="(item,index) in new_activity_list" :key="index"  @click="activityid(index,item.id)">
        <van-icon name="success"   color="#3190e8" size="0.692rem"    v-show="support_ids[index].status"  />
        <span class="txtA_c" v-show="!support_ids[index].status" :style="{color:'#'+item.icon_color,borderColor:'#'+item.icon_color}" >{{item.icon_name}}</span>
        <span :style="{color:!support_ids[index].status?'':'#3190e8'}">{{item.name}}</span>
      </li>
      <div class="empty"></div>
    </ul>
    <div class="bottomA_c">
      <button class="btnEmpty_c" @click="clearAll">清空</button>
      <button class="btnConfirm_c" @click="btn_submit">确定 {{ (select_num+more_select_num)>0?'('+(select_num+more_select_num) +')':''  }}</button>
    </div>
  </div>
  <!--</div>-->
</template>

<script>

  export default {
        name: "Screen_c",
        props:{
          activity_list:{
            type:Array,
          },
          delivery_list:{
            type:Array,
          },
        },
        data(){
              return{
                support_ids:[],
                delivery_mode:null,
                select_num:0,
                more_select_num:0,
              }
        },

        methods:{
          //点击获取配送方式id，不可以支持多选
          delivery(val){
            if(this.delivery_mode==null || this.delivery_mode==!val){
              this.delivery_mode=val;
              this.select_num++;
            }else if(this.delivery_mode==val){
              this.select_num--;
              this.delivery_mode=0;
            }

          },
          //点击获取活动id,可以支持多选
          activityid(index,val){
            if(this.support_ids[index].status){
              this.$set(this.support_ids[index],"status",false);
            }else{
              this.$set(this.support_ids[index],"status",true);
            }
            this.more_select_num=0;
            this.support_ids.forEach((item)=>{
              if(item.status){
                this.more_select_num++;
              }
            })
          },
          //清空所有的选择
          clearAll(){
            this.select_num=0;
            this.more_select_num=0;
            this.delivery_mode=null;
            this.support_ids.forEach((item)=>{
                 this.$set(item,'status',false)
            })
          },
          //点击提交数据
          btn_submit(){

            //把数据提交给父级，控制弹框下拉框消失
            this.$parent.getScreen(this.delivery_mode,this.support_ids);


          }

        },
        mounted(){

        },
        computed:{
          //对数据进行重新解析
          new_activity_list(){
               this.activity_list.forEach((item)=>{
                     item.support_id={status:false,id:item.id};
                 this.support_ids.push(item.support_id)
               });
            return this.activity_list;
          }
        }

    }
</script>

<style scoped lang="less">
/*.icon_style i{*/
  /*font-size: 0.5rem !important;*/
/*}*/
.icon_style{
  .icon_style_icon{
    width: 30%;
    text-align: center;
    .iconfont{
      font-size: 0.6rem;
    }
  }
  .icon_style_name{
    width: 70%;

  }
}
  p {
    text-align: left;
    margin-left: 0.4rem;

  }
  .changeColor{
    color:red !important;
  }
  ul {
    width: 100%;
  li {
    text-align: left;
    border: 1px solid silver;
    width: 4.8rem;
    margin-left: 0.4rem;
    margin-bottom: 0.3rem;
    border-radius: 0.1rem;
  i {
    margin-left: 0.2rem;

  }
  span {
    margin-left: 0.2rem;
  }
  }
  }
  .property_c {
  li {
    float: left;
  span:nth-child(1){
    padding: 0 0.1rem;
    border-radius: 0.2rem;
  }
.txtA_c{
    border: 1px solid;
  border-radius: 0.1rem;
 }

  }
  }
  .bottomA_c {
    width: 100%;
    height: 3rem;
    line-height: 2.5rem;
    margin-top:-0.2rem;
    background:rgb(241,241,241);
    text-align: left;
    color: #ffffff;
    font-size: 0.8rem;
  .btnEmpty_c {
    width: 46%;
    background: white;
    height: 2rem;
    line-height: 2rem;
    margin: 0 0.3rem;
    border-radius: 0.3rem;
    color: #333333;

  }
  .btnConfirm_c {
    width: 45%;
    background: rgb(86,209,118);
    height: 2rem;
    line-height: 2rem;
    margin: 0 0.3rem;
    border-radius: 0.3rem;
  }
  }
  .empty {
    clear: both;
  }
</style>
