import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage/homepage'
import SelecteCity from '@/components/city/selectecity'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/SelecteCity',
      name: 'SelecteCity',
      component: SelecteCity
    }
  ]
})
