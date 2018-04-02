import Vue from 'vue';
import Router from 'vue-router';

// 页面懒加载 (https://router.vuejs.org/zh-cn/advanced/lazy-loading.html)
const Index = () => import('@/pages/index');
const List = () => import('@/pages/list');
const Detail = () => import('@/pages/detail');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
});
