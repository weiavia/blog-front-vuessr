import Router from 'vue-router'
import Vue from 'vue'
import Home from 'pages/home'
import Article from 'pages/article'
import Write from 'pages/write'
import NotFoundComponent from 'pages/404'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/article',
        component: Article
      },
      {
        path: '/write',
        component: Write
      },
      { 
        path: '*', 
        component: NotFoundComponent 
      }
    ]
  })
}