import createApp from '@/create-app'

export default context => {
  const {app, router} = createApp()
  
  return new Promise((resolve, reject) => {
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }

      context.router = router

      // 匹配组件预加载数据
      resolve(app)
    })
  })
}