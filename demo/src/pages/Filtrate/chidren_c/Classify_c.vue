<template>
  <div class="all clear" >
    <div class="leftA_c left">
      <ul class="leftA_c_ul">
        <li v-for="(item,index) in restaurant_category_list"
            :key="index" class="leftA_c_li clear"
            @click="changeRight(index)"
            :class="{isSelected:isSelectedIndex==index}">
          <div class="icon_img left">
            <img :src="getImgPath(item.image_url)" alt="">
          </div>
          <div class="category_name left">
            <span>{{item.name}}</span>
          </div>
          <div class="category_num right">
            <span class="category_num_po">{{item.count}}</span>
            <span> <i class="iconfont">&#xe714;</i></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="rightA_c right">
      <ul class="rightA_c_ul">
        <li v-for="(item,index) in new_sub_categories"
            :key="index" class="clear"
            @click="getnew_categories(index,item.id,item.name)"
        >
          <span class="left" :class="{istwoselected:isclicktwo==item.name}" >{{item.name}}</span>
          <span class="right" :class="{istwoselected:isclicktwo==item.name}">{{item.count}}</span>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>

  import {mapActions,mapState} from "vuex"


  export default {
    name: "Classify_c",
    props:['restaurant_category_list','restaurant_category_id'],
    data(){
      return{
        sub_categories:[],
        isSelectedIndex:"asd",//是否选中添加对应的样式
        isclicktwo:'asd',//判断第第二栏是否选中
      }
    },
    methods:{
      ...mapActions(['SET_RESTAURANT_CATEGORY_IDS']),
      //点击切换分类的数据 为了把此组件的分类id传到其他组件可以把数据存储到vue x里面
      getnew_categories(index,category_ids,titlename){
        this.isclicktwo=titlename;
        this.$parent.getClassify(0,titlename);

        this.SET_RESTAURANT_CATEGORY_IDS(category_ids);
      },
      //点击左侧列表显示右侧内容
      changeRight(index){
        var restaurant=this.restaurant_category_list[index];
        this.sub_categories=restaurant.sub_categories;
        this.isSelectedIndex=index;
      },
      getImgPath(path){
        //传递过来的图片地址需要处理后才能正常使用
        let suffix;
        if (!path) {
          return '//elm.cangdu.org/img/default.jpg'
        }
        if (path.indexOf('jpeg') !== -1) {
          suffix = '.jpeg'
        } else {
          suffix = '.png'
        }
        let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
        return 'https://fuss10.elemecdn.com' + url
      },
      //页面加载初始化页面
      getInitData() {
        var restaurant_category_id=this.restaurant_category_id;
        //具有相同分类的id 进行显示  没有效果，思路方法不错
        this.sub_categories = this.restaurant_category_list.filter((item)=>{
          return item.id==restaurant_category_id;
        });
      }
    },
    mounted(){
      this.getInitData();
    },
    computed:{
      new_category_list(){
        var self=this;
        return  self.restaurant_category_list;
      },
      new_sub_categories(){
        var arr=[];
        this.sub_categories.forEach((item,index)=>{
          if(index!=0){
            arr.push(item);
          }
        })
        return arr;
      }
    }

  }
</script>

<style scoped lang="less">
  .istwoselected{
    color:#3190e8 !important;
  }
  .isSelected{
    background-color: white;
  }
  .all{
    position: relative;
    .leftA_c{
      position: absolute;
      left: 0;
      top: 0;
      height: 18rem;

      background-color:#f1f1f1;
      width: 45%;
      line-height: 2.0rem;
      overflow: scroll;
      .leftA_c_ul{
        .leftA_c_li{
          padding: 0 0.5rem;
          color: #666666;
          font-size: 0.5rem;

          .icon_img{
            width: 0.8rem;
            margin-right: 0.3rem;
            img{
              width: 100%;
              vertical-align: -0.25rem;
            }
          }
          .category_num{
            .category_num_po{
              background-color: #cccccc;
              border-radius: 0.25rem;
            }
          }
        }
      }
    }
    .rightA_c{
      position: absolute;
      right: 0;
      top: 0;
      width: 55%;
      height: 18rem;
      text-align: left;
      background-color: #ffffff;
      line-height: 2.02rem;
      font-size: 0.5rem;
      overflow: scroll;
      .rightA_c_ul{
        li{
          padding: 0 0.5rem;
          border-bottom: .025rem solid #e4e4e4;
          span{
            display: inline-block;
            color: #666666;
          }
        }
      }
    }
  }

</style>
