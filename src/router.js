import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import AddBlog from './views/AddBlog.vue'
import ShowBlog from './views/ShowBlog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showblog',
      component: ShowBlog
    },
    {
      path:'/addblog',
      name:'addblog',
      component:AddBlog
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
