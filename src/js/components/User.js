import React from 'react'
import UserDetails from './UserDetails'
import EditButton from './EditButton'


/**
 * User is the main component for displaying the individual
 * users. There are a few state properties stored here
 * since those properties are specific to each user, such as
 * whether its editable or expanded. This component populates
 * the UserDetails and EditButton components.
 * @class User
 */
class User extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      expanded: false,
      editText: 'Edit',
      expandText: 'Expand'
    }
  }

  /* Toggle editable state and update button text as needed */
  toggleEditable() {
    this.setState({
      editable: !this.state.editable,
      editText: this.state.editable ? 'Edit' : 'Save'
    })
  }
  /* Toggle expanded state and update button text as needed */
  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded,
      expandText: this.state.expanded ? 'Expand' : 'Collapse'
    })
  }

  render() {
    let props = this.props
    let user = props.user
    let editable = this.state.editable

    return (
      <div className='user col-md-12 col-sm-12'>
        <h1> {`${user.firstName} ${user.lastName}`}</h1>
        {/* A more complex app may use another component for the user image */}
        <img src={user.image}/> <br/>
        {/* Use an AND statement to return the details only when the user is expanded */}
        {this.state.expanded && <UserDetails data={user} editable={editable} {...props} />}
        {this.state.expanded && <EditButton text={this.state.editText} id={user.id} toggle={this.toggleEditable.bind(this)} />}
        <button className='btn btn-primary' onClick={this.toggleExpanded.bind(this)}>
          {this.state.expandText}
        </button>
      </div>
    )
  }

}

export default User
