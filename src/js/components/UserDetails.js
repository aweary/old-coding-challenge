import React from 'react'
import EditableContent from './EditableContent'


/**
 * UserDetails takes the user object,
 * parses the keys and then turns those
 * into list items. It ignores the id and image
 * key so those cannot be edited by the user.
 * It returns a list containing EditableContent
 * components which control the input state for the item
 *
 * @class UserDetails
 */
class UserDetails extends React.Component {

  render() {

    /* locally cache the user object */
    let user = this.props.user

    /* Map the keys to list items */
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
