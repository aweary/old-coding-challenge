import React from 'react'
import Actions from '../actions/Actions.js'

/**
 * This component simple returns a button that
 * switches between 'edit' and 'save'. It also checks
 * whether the button being clicked is the Save button.
 * I'd probably improve on this to use a boolean instead of
 * string for checking that, but it works. If they are clicking
 * save we submit an action to push the current state to the server
 * @class EditButton
 */
class EditButton extends React.Component {

  checkSaveStatus() {
    this.props.toggle()
    if (this.props.text === 'Save') {
      Actions.saveUsers(this.props.id)
    }
  }

  render() {
    return <button className='btn btn-warning' onClick={this.checkSaveStatus.bind(this)}> {this.props.text} </button>
  }

}

export default EditButton
