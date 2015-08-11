import React from 'react'
import UserList from './components/UserList'
import UserStore from './stores/UserStore'
import Actions from './actions/Actions'
import 'main.css'

function getInitalState() {
  return {
    users: UserStore.getAllUsers().toArray()
  }
}

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

React.render(<App/>, document.getElementById('react'))
