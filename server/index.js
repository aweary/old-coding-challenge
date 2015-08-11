import express from 'express'
import middleware from './lib/middleware'
import routes from './lib/routes'

const app = express()

/* Load middleware */
middleware(app)
/* Attach all routes */
routes(app)
/* Start the application */
app.listen(8081, () => console.log('App started!'))
