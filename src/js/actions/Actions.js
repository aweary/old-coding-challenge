import Constants from '../constants/Constants'
import Dispatcher from '../dispatcher/Dispatcher'

export default {

  getAllUsers: function() {
    Dispatcher.handleAction({
      actionType: Constants.GET_USERS
    })
  },

  editUser: function(user) {
    Dispatcher.handleAction({
      actionType: Constants.EDIT_USER,
      user: user
    })
  },

  saveUsers: function(id) {
    Dispatcher.handleAction({
      actionType: Constants.SAVE_USERS,
      id: id
    })
  }
}
