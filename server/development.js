const Router = require('koa-router')
const axios = require('axios')
const path = require('path')
const fs = require('fs')
const MemoryFS = require('memory-fs')
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')
const webpackServerConfig = require('../webpack/server')
const handler = require('./handler')

const mfs = new MemoryFS()
const serverCompiler = webpack(webpackServerConfig)
serverCompiler.outputFileSystem = mfs

let bundle
serverCompiler.watch({}, (err, stats) => {  // 监听文件改变生成新的bundle
  if(err) throw err
  
  // stats.errors.forEach(err => console.log(err))
  // stats.warnings.forEach(err => console.warn(err))

  const bundlePath = path.join(webpackServerConfig.output.path, 'vue-ssr-server-bundle.json')
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))

  console.log('New Bundle Generated')
})

const handleSSR = async (ctx) => {
  if (!bundle) {
    return ctx.body = '服务初起，稍等...'
  }

  const clientManifestResp = await axios.get(
    'http://127.0.0.1:9000/vue-ssr-client-manifest.json'
  )
  const clientManifest = clientManifestResp.data

  const template = fs.readFileSync(path.join(__dirname, './template.ejs'),'utf-8')

  const renderer = VueServerRenderer.createBundleRenderer(bundle, {
    inject: false,
    clientManifest
  })

  // 将渲染好的应用拼接模板
  await handler(ctx, renderer, template)
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router