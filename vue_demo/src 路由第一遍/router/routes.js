// 引入将要被注册成路由的组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Messages from '../pages/Messages.vue';
import MessageDetail from '../pages/MessageDetail.vue'
// 暴露路由器模块
export default[
   { // 注册路由组件
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        // 注册home下的子路由组件
        {
          path: '/home/news',
          component: News
        },
        {
          path: '/home/messages',
          component: Messages,
          children: [
            // 注册messages下的子路由组件
            {
              path: '/home/messages/detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          path: '/home',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      // 重定向
      redirect: '/about'
    }
  ]
