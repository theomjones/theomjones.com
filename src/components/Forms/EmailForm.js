import React from 'react'

import TextInput from '../Inputs/TextInput/'
import PropTypes from 'prop-types'

import classNames from './EmailForm.module.css'
import API from '../../Services/Api'

import Text from '../Typography/Text/'
import Button from '../Button'

class EmailForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      hasSent: false,
      error: null,
      inputValue: '',
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    const email = this.state.inputValue
    // console.log('input value', email)
    this.setState(() => ({ loading: true }))
    API.sendEmail(email)
      .then(res => {
        this.setState(() => ({ loading: false, inputValue: '', hasSent: true }))
      })
      .catch(e => {
        alert(e)
      })
  }

  onInputChange(e) {
    const value = e.target.value
    this.setState(() => ({ inputValue: value }))
  }

  render() {
    return (
      <div>
        <div className={classNames.Message}>
          <Text>
            I'm currently looking for work. Leave your email below to get in
            touch.
          </Text>
        </div>
        <form className={classNames.Form} onSubmit={this.onSubmit}>
          <TextInput
            name="Emails"
            placeholder="you@mail.co"
            color={this.props.textInputColor || '#fff'}
            border={this.props.textInputBorder || 'rgba(255, 255, 255, .8)'}
            onChange={this.onInputChange}
            value={this.state.inputValue}
          />
          <Button title="Go" secondary onClick={this.onSubmit} />
          {this.state.loading && <Text>Please wait...</Text>}
          {this.state.hasSent && <Text>Thanks! I'll be in touch.</Text>}
        </form>
      </div>
    )
  }
}

EmailForm.propTypes = {
  textInputBorder: PropTypes.string,
  textInputColor: PropTypes.string,
}

export default EmailForm
