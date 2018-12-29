import Vue from 'vue'
import App from './App.vue'
import createRouter from './route/index'
import 'common/style/normalize.css'
import 'common/style/base.sass'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

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