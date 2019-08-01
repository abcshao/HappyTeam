import Vue from 'vue'
import Router from 'vue-router'

const helloword  = () => import("../components/HelloWorld");
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: helloword
    }
  ]
})
