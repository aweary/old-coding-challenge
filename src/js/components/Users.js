import React from 'react'
import UserList from '../components/UserList'
import UserStore from '../stores/UserStore'
import 'main.css'

function getInitalState() {
  return {
    users: UserStore.getAllUsers().toArray()
  }
}

class Users extends React.Component {

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
  this.getState()
}

  render() {
    return <UserList users={this.state.users}  update={this.update.bind(this)} />
  }

}

export default Users
