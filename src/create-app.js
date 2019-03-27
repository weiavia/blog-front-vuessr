import Vue from 'vue'
import App from './App.vue'
import createRouter from './route/index'
import 'common/style/normalize.css'
import 'common/style/base.sass'

// 引入 mkdown
import mavonEditor from 'mavon-editor-via'
import 'mavon-editor-via/dist/css/index.css'
Vue.use(mavonEditor)

// 引入 element ui库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

if(true) {
  require('common/skin/light.sass')
}

export default () => {
  const router = createRouter()

  const app = new Vue({
    router,
    render: h => h(App)
  })
  
  return {app, router}
}