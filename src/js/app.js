import React from 'react'
import UserList from './components/UserList'
import UserStore from './stores/UserStore'
import Actions from './actions/Actions'
import 'main.css'

/**
 * State is populated in this component using
 * the UserStore.getAllUsers() method called
 * in getInitialState. Event listeners are registered
 * and removed on mount/unmount respectively
 * and the UserList component is passed the array of
 * users for rendering
 * @class App
 */

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = getInitalState()
  }

  componentWillMount() {
    UserStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    UserStore.removeChangeListner(this._onChange.bind(this))
  }

  _onChange() {
  this.setState(getInitalState())
}

  update(id, prop, value) {
    Actions.editUser({ id, prop, value })
  }

  render() {
    return (
      <div className='container'>
      <UserList users={this.state.users}  update={this.update.bind(this)}/>
      </div>
    )
  }

}

/**
 * Helper function that pulls the user
 * data from the UserStore and converts
 * the immutable OrderedMap to an array
 * for iteration
 *
 * @return {Object} component state
 */

function getInitalState() {
  return {
    users: UserStore.getAllUsers().toArray()
  }
}

React.render(<App/>, document.getElementById('react'))
