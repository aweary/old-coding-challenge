import React from 'react'


/**
 * EditableContent switches between an immutable
 * list item and an input field based on the editable
 * state passed down to it. It is also responsible for
 * sending the updated DOM element value to the parent
 * update function so it can be set in the state.
 * @class EditableContent
 */
class EditableContent extends React.Component {

  update(prop) {
    let value = React.findDOMNode(this.refs[prop]).value
    this.props.update(prop, value)
  }

  render() {

    let data = this.props.data
    let prop = this.props.prop
    let editable = this.props.editable

    if (editable) return (
      <input type='text' onInput={this.update.bind(this, prop)} defaultValue={data[prop]} ref={prop} />
    )

    else return <span> {data[prop]} </span>
  }

}

export default EditableContent
