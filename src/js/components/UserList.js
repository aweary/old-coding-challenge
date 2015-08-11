import React from 'react'
import User from './User'

class UserList extends React.Component {

  mapUsers() {

    let users = this.props.users
    console.log('USESRS', users)

    return users.map((user, i) => {
      return <User user={user} key={i} update={this.props.update.bind(this, user.id)}/>
    })
  }

  render() {
    return <div className='row'> {this.mapUsers()} </div>
  }

}

export default UserList
