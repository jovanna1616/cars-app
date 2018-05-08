import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './container/AppCars.vue'
import AddCar from './container/AddCar.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/cars' },
  { path: '/cars', component: AppCars },
  { path: '/add', component: AddCar }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
