import React from 'react'
import PropTypes from 'prop-types'

import classNames from './TextInput.module.css'

class TextInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      focused: false,
    }
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onFocus() {
    this.setState(prevState => ({ focused: true }))
  }

  onBlur() {
    this.setState(prevState => ({ focused: false }))
  }

  render() {
    const isFocused = !this.state.focused ? '' : classNames.isFocused
    const classes = `${classNames.InputWrap} ${isFocused}`
    return (
      <div className={classes}>
        <input
          style={{
            color: this.props.color,
            borderColor: this.props.border,
          }}
          onChange={this.props.onChange}
          className={classNames.TextInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          autoFocus={this.props.autoFocus}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
  border: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default TextInput
