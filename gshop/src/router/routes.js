// 引入要配置成路由的组件
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Searcch/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
// 暴露配置的路由
export default[
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
     meta: {
       isShowFooter: true
     }
  },
  {
    path: '/order',
    component: Order,
     meta: {
       isShowFooter: true
     }
  },
  {
    path: '/profile',
    component: Profile,
     meta: {
       isShowFooter: true
     }
  },
  {
   path: '/login',
   component: Login
  },
  {
    path: '/',
    //重定向
    redirect: '/msite'
  }
]
