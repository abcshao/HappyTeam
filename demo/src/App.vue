<template>
  <div id="app">

    <Sheader></Sheader>
    <div class="s-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sheader from "./components/Sheader/Sheader";
export default {
  name: 'App',
  components: {Sheader}
}
</script>

<style scoped  lang="less">

#app {
  .s-body{
    margin-top: 1.95rem;
  }
}

</style>
