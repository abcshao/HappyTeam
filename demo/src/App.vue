<template>
  <div id="app">

    <div class="s-body">

      <transition enter-active-class="animated fadeIn" leave-active-class="opacity 0">
      <router-view/>
      </transition>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style scoped  lang="less">

</style>
