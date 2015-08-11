import fs from 'fs'
import crypto from 'crypto'

/**
 * Handles all routing for the Express application.
 * Also reads from the database JSON file and keeps
 * an in memory instance of the resulting array.
 *
 * When an API GET request is made it pipes the array
 * using res.json. When an API PUT request is made it
 * pushes the new item into the array and then writes
 * the file.
 *
 * @param {Object} app Express application
 */

export default function(app) {

  const source = fs.readFileSync('./db/users.json')
  const users = JSON.parse(source)

  /* Respond with in-memory user list */
  app.get('/api', (req, res) => {
    res.json(users)
  })

  /* Insert the new user into the users list and write
     the updated list back to the file */

  app.put('/api', (req, res) => {
    let user = req.body
    let id = user.id
    users[id] = user
    let result = JSON.stringify(users)
    fs.writeFile('./db/users.json', result, (err) => {
      if (err) console.log(err)
    })
  })

}
