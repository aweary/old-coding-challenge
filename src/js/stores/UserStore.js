import Dispatcher from '../dispatcher/Dispatcher'
import Constants from '../constants/Constants'
import Actions from '../actions/Actions'
import immutable from 'immutable'
import { EventEmitter } from 'events'
import request from 'axios'

const EVENT = 'change'
let _users = immutable.OrderedMap()

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
    console.log('editing user...')
    _editUser(user)
  }

}

const UserStore = new Store()
_populateUserData()

export default UserStore

UserStore.dispatcherIndex = Dispatcher.register(payload => {
  let action = payload.action.actionType
  console.log(payload.action.user)
  switch (action) {
    case Constants.EDIT_USER:
      console.log('editing user...')
      _editUser(payload.action.user)
      UserStore.emitChange()
    break;
    case Constants.GET_USERS:
      console.log('getting users...')
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

function _getAllUsers() {
  console.log('_users', _users)
  return _users
}

function _editUser(user) {

  let { prop, value } = user;
  let id = user.id.toString();
  let _user = _users.get('' + id);
  _user[prop] = value;
  _users = _users.set(id, _user);
  console.log('_user', _user);
}

function _saveStateToServer(id) {
  let user = _users.get(id.toString())
  request.put('http://localhost:8081/api', user)
}

function _populateUserData() {
  request.get('http://localhost:8081/api')
    .then(response => {
      console.log(response)
      _users = immutable.OrderedMap(response.data)
      console.log('response', _users)
      UserStore.emitChange()
    })
    .catch(err => {
      console.log(err)
    })
}
