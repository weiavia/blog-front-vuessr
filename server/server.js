const Koa = require('koa')
const app = new Koa()
const staticRouter = require('./staticRouter')

const isDev = process.env.NODE_ENV === 'development'

app.use(async (ctx, next) => {
  try {
    // console.log(`request with path ${ctx.path}`)
    await next()
  } catch (err) {
    // 全局处理错误
    ctx.status = 500
    if (isDev) {
      ctx.body = err.message
    } else {
      ctx.bosy = 'please try again later'
    }
  }
})

let handRouter

if(isDev) {
  handRouter = require('./development')
} else {
  handRouter = require('./production')
}

app.use(staticRouter.routes()).use(staticRouter.allowedMethods())
app.use(handRouter.routes()).use(handRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on http://${HOST}:${PORT}`)
})