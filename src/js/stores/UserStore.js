import Dispatcher from '../dispatcher/Dispatcher'
import Constants from '../constants/Constants'
import Actions from '../actions/Actions'
import immutable from 'immutable'
import { EventEmitter } from 'events'
import request from 'axios'

const EVENT = 'change'

/* Immutable.js is used to store the users in an OrderedMap */
let _users = immutable.OrderedMap()


/**
 * Creates an instance of a flux Store
 * which provides public interfaces for the
 * private methods responsible for user data
 * manipulation.
 * @class Store
 */
class Store extends EventEmitter {

  emitChange() {
    this.emit(EVENT)
  }

  addChangeListener(callback) {
    this.on(EVENT, callback)
  }

  removeListener(callback) {
    this.removeListener(EVENT, callback)
  }

  getAllUsers() {
    return _getAllUsers()
  }

  editUser() {
    _editUser(user)
  }

}

/* Instantiate the UserStore */
const UserStore = new Store()

/* Populate the UserStore so the data is
   available when the components will mount */
_populateUserData()


export default UserStore

/* Register with the dispatcher and handle the payload
   based on the action.actionType
*/
UserStore.dispatcherIndex = Dispatcher.register(payload => {
  let action = payload.action.actionType
  switch (action) {
    case Constants.EDIT_USER:
      _editUser(payload.action.user)
      UserStore.emitChange()
    break;
    case Constants.GET_USERS:
      _getAllUsers()
      UserStore.emitChange()
    break;
    case Constants.SAVE_USERS:
      _saveStateToServer(payload.action.id)
    break;
    default:
    /* noop */
  }
})

/**
 * Returns all the users
 * @return {OrderedMap} user list
 */
function _getAllUsers() {
  return _users
}

/**
 * Queries the user from the OrderedMap
 * and then updates the appropriate property.
 * Then it creates a new OrderedMap with the updated
 * user information.
 *
 * @param {User} user user details
 */
function _editUser(user) {

  let { prop, value } = user;
  let id = user.id.toString();
  let _user = _users.get('' + id);
  _user[prop] = value;
  _users = _users.set(id, _user);
}

/**
 * Makes a simple put request with the updated user
 * which the server takes and saves.
 * @param {Number} id user ID number
 */

function _saveStateToServer(id) {
  let user = _users.get(id.toString())
  request.put('http://localhost:8081/api', user)
}

/**
 * Makes a GET request using the axios package
 * and populates a new _users OrderedMap with the response
 * data.
 */

function _populateUserData() {
  request.get('http://localhost:8081/api')
    .then(response => {
      _users = immutable.OrderedMap(response.data)
      UserStore.emitChange()
    })
    .catch(err => {
      console.log(err)
    })
}
