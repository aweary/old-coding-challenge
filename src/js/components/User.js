import React from 'react'
import UserDetails from './UserDetails'
import EditableContent from './EditableContent'
import EditButton from './EditButton'

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

  toggleEditable() {
    this.setState({
      editable: !this.state.editable,
      editText: this.state.editable ? 'Edit' : 'Save'
    })
  }

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
        <img src={user.image}/> <br/>
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
