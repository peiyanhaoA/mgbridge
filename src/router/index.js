import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Home from '@/view/home'
import recorded from '../components/recorded';
import eventHanding from '../components/event-handing.vue';
import userManage from '../components/user-management.vue';
import buildingDetails from '../components/buildingDetails.vue';
import personInfo from '../components/person-info.vue';
import editInfo from '../components/edit-info.vue';
Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home' ,
      component: Home,
      children:[
        {
          path: 'record',
          name: 'record',
          component: recorded
=======
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
>>>>>>> 4bcf4b1f316ce9397a49e3679219874d961ee840
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
<<<<<<< HEAD
          path: 'usermanage',
          name: 'usermanage',
          component: userManage
        },
        {
          path: 'buildingDetails',
          name: 'buildingDetails',
          component: buildingDetails 
        },
        {
          path: 'personInfo',
          name: 'personInfo',
          component: personInfo 
        },
        {
          path: 'editInfo',
          name: 'editInfo',
          component: editInfo 
=======
            path: '/home',
            name: 'Home',
            component: Home,
            children: [{
                    path: 'record',
                    name: 'record',
                    component: recorded
                },
                {
                    path: 'eventhand',
                    name: 'eventhand',
                    component: eventHanding
                },
                {
                    path: 'usermanage',
                    name: 'usermanage',
                    component: userManage
                }
            ]
>>>>>>> 4bcf4b1f316ce9397a49e3679219874d961ee840
        }
    ]
})