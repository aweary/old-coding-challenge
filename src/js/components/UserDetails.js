import React from 'react'
import EditableContent from './EditableContent'

class UserDetails extends React.Component {

  render() {

    let user = this.props.user
    let details = Object.keys(user).map((key, index) => {

      if (key === 'id' || key === 'image') return
      
      return (
        <li key={index}>
          <strong>{key}</strong> - <EditableContent data={user} prop={key} editable={this.props.editable} update={this.props.update} />
        </li>
      )
    })

    return (
      <ul className='user--details'>
        {details}
      </ul>
    )
  }

}

export default UserDetails
