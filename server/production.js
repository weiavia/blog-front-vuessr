const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const VueServerRender = require('vue-server-renderer')
const handler = require('./handler')

const clientManifest = require('../public/vue-ssr-client-manifest.json')
const serverBundle = require('../public/vue-ssr-server-bundle.json')
const renderer = VueServerRender.createBundleRenderer(serverBundle, {
  inject: false,
  clientManifest
})

const template = fs.readFileSync(path.join(__dirname, './template.ejs'),'utf-8')

const pageRouter = new Router()
pageRouter.get('*', async (ctx) => {
  await handler(ctx, renderer, template)
})

module.exports = pageRouter