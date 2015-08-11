import { Dispatcher } from 'flux'

/**
 * A simple implementation of flux's Dispatcher package.
 * @class AppDispatcher
 */
class AppDispatcher extends Dispatcher {

  /**
   * Take in an action and dispatch it to the
   * UserStore for handling
   * @param {Object} action action details
   */

  handleAction(action) {
    console.log(action)
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }

}

export default new AppDispatcher()
