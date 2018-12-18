import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/reset.css'
import axios from 'axios'//全局引入axios
Vue.prototype.$axios = axios//将axios挂载到Vue原型上，我们创建的所有的组件都继承这个原型
console.log(process.env.VUE_APP_URL)
axios.defaults.baseURL = process.env.VUE_APP_URL;//设置axios默认请求路径，其他process.env.VUR_APP_URL保存的是开发这个项目时的默认路径，参考https://cli.vuejs.org/guide/mode-and-env.html#modes
Vue.config.productionTip = false

// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = '#'+Math.random().toString(16).slice(2,8)
//   }
// })

Vue.directive('theme',{
  bind(el,binding,vnode){
    console.log(binding.value)
    console.log(binding.arg)
  }
})

// Vue.filter('to-uppercase',value=>value.toUpperCase())
Vue.filter('snippet',value=>value.slice(0,100)+'...')
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
