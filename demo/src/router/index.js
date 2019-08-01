import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import DL from "../center/denglujmx"
export default new Router({
  routes: [
    {path: '/',component:DL},
    // {path:"/denglu",component:DL}
  ]
})
