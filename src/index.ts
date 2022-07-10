import { Application, Router } from 'https://deno.land/x/oak@v10.6.0/mod.ts'

const app = new Application()

, router = new Router()

router.get('/', (ctx) => {
  ctx.response.body = 'Hello World'
})

app.use(router.allowedMethods())

app.use(router.routes())

app.use(ctx => {
  ctx.response.status = 404
  ctx.response.body = 'Not Found'
})

await app.listen({
  port: 8000
})
