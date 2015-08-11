import { Dispatcher } from 'flux'

class AppDispatcher extends Dispatcher {

  handleAction(action) {
    console.log(action)
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }

}

export default new AppDispatcher()
