import express from 'express'
import middleware from './lib/middleware'
import routes from './lib/routes'

const app = express()

middleware(app)
routes(app)

app.listen(8081, () => console.log('App started!'))
