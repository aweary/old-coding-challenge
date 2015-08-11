import React from 'react'
import Actions from '../actions/Actions.js'

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
