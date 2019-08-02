<template>
    <div class="discounts">
      <van-nav-bar
        title="我的优惠"
        left-arrow
        @click-left="onClickLeft"
      />

      <van-tabs sticky>
        <van-tab title="红包">
          <div class="kuang">
            <span class="yue">有
            <span style="color: red;">3</span>
              个红包即将过期
            </span>
            <section>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAvJJREFUSA21Vk1IFVEU/s7MvOd/+U+pkZmEEBXiIgpq06KFYUmLFrZp0S4fFAW1ioi2RU9oFbQJCgoqQYIWEkKQixKK7IfMCnuEYvlSek99M7d77rzRGWfu06Du5s49P98599zzM4QCa3dyumlR2IeFEJ0gbJWiDXnxFATGiGggRuaj4UTNhA6GohjtfVMNcMQlgjghwc0oGY8mjdgCdAsGXRzprUt5dG8PGWjv+95FNt0WEBWe0Fp2As0KUxwf6d3Q75c3/IeO5GQCNj34W3DGUDpSV2H4QJduwJ4zuBQNGPVky+KELVUmZEgw/iOHuQXhsVbs5MAU3d5NlAGOOdnOuyjPK4oIp/aW4+iOEhlm1x/bEbj/OoO+Z3P4vRg25IbLaOM3sZR5+aBR4Ax39VAlOpriGPyYxdNP8zAl8cj2EhzbVYraMgPnBtIrbpAPl8SUjJPkpmLuc1S2dLYV4/LB9XjyIYvzj5eBLBnEuz01aKm20HNnGm8ncyEjnF0xspqNfJ5HpmJ7Y0wp9o9mAgA5Bxj+uqBo2+rcIAQE5IEdZmxDFdFKbv78fiqHh28yGJsOe9i4zvVpJhN+Aw+OsS1VoRqZe6/Y86D3rLxzYwx7NseRzjp4+c29iQca2GX1c0p65R/g6Q4t1Saud1Uq9gX5LrPzGu9cgIbInNeB15cbuNFdhdIYyeyZwfP8O+jkmc4GQv1Dp3BmXwXqy01cGfyFofECoVkGSBncFZfP+q+4fNMDrUWYSOfQP5rVC/o5ElsWJw34abpvLirTIHz5aetEQnTGLlhofg0urjppJCNbw0y24MMqtaVC42Gh+rkfLeK72CK01lpoltW7lsWYjO1mkRwW3KAKKW6q5PSswtn9q48JhSUxGU8Z4K7HwwKQrVazON+HZLMbSa2WPeS4g8edbm7/zYPysHAccU03EzS2fWRyDINOv0jUJz1iwAAT/+vIZAM8iYRptIGMm5wJTCu0lIyUZR1vivnlQzfwM//Fb8sfhhUzHMwI/u8AAAAASUVORK5CYII=" alt="" class="img">

              <router-link :to="{}" class="shuoming">红包说明</router-link>
            </section>
          </div>
        </van-tab>
          <van-tab title="商家代金券"></van-tab>
      </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "discounts",
      methods:{
        onClickLeft(){
          this.$router.go(-1);
        }
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
  .kuang{
    /*width: 94%;*/
    /*height: 90%;*/
    margin-left: 0.5rem;
    margin-top: 0.25rem;
    position: relative;
  }
  .img{
    width: 0.6rem;
    position: absolute;
    right: 3.2rem;
    top: 0.6rem;
  }
  .yue{
    font-size: 0.55rem;
    color: #666;
    margin-left:0.5rem ;
  }
  .shuoming{
    font-size: 0.6rem;
    color: #3190e8;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
</style>
