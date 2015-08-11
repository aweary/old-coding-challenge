import bodyParser from 'body-parser'
import cors from 'cors'

export default function(app) {
  app.use(bodyParser.json())
  app.use(cors())
}
 
