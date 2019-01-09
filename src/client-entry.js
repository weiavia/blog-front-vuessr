import Vue from 'vue'
import creatApp from '@/create-app'

const {app, router} = creatApp()

window.vm = app
window.bus = new Vue()

router.onReady(() => {
  app.$mount('#app')
})