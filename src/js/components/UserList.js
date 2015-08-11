import React from 'react'
import User from './User'


/**
 * UserList uses a helper method, mapUsers, to return
 * a User component for each user passed from the Users
 * parent component.
 * @class UserList
 */
class UserList extends React.Component {

  /**
   * Iterate through the users array and
   * return User components for each item
   * @return {User} user component
   */

  mapUsers() {
    let users = this.props.users
    return users.map((user, i) => {
      return <User user={user} key={i} update={this.props.update.bind(this, user.id)}/>
    })
  }

  render() {
    return <div className='row'> {this.mapUsers()} </div>
  }

}

export default UserList
