// 配置并暴露一系列的路由
// 引入要配置成路由的组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Messages from '../pages/Messages.vue'
import Mdetails from '../pages/Mdetails.vue'
export default [{
    path: '/about',
    // 注册路由
    component: About
  },
  {
    path: '/home',
    component: Home,
    // 注册子路由组件
    children: [{
        path: '/home/news',
        component: News,
      },
      {
        path: '/home/messages',
        component: Messages,
        // 注册Messages下的子路由
       children:[
         {
           path: '/home/messages/mdetails/:id',
           component:Mdetails
         }
       ]
      },
      // 重定向到news
      {
        path: '/hone',
        redirect: '/home/news'
      }
    ]


  },
  {
    // 重定向到about
    path: '/',
    redirect: '/about'

  }
]
