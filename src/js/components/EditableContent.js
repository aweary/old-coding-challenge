import React from 'react'

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
