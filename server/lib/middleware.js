import bodyParser from 'body-parser'
import cors from 'cors'

/**
 * Provides an easy interface for adding
 * middleware to the Express application
 * without cluttering the index.js file
 * @param {Object} app Express application
 */

export default function(app) {
  app.use(bodyParser.json())
  app.use(cors())
}
