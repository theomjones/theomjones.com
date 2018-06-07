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
    this.onInputFocus = this.onInputFocus.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    const email = this.state.inputValue
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return this.setState({ error: 'Please provide a valid email.' })
    }
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

  onInputFocus(e) {
    this.setState({ error: null })
  }

  render() {
    return (
      <div>
        <div className={classNames.Message}>
          <Text>
            I'm free for freelance work until July 2nd. Leave your email below and I'll get in touch.
          </Text>
        </div>
        <form className={classNames.Form} onSubmit={this.onSubmit}>
          <TextInput
            name="Emails"
            placeholder="you@mail.co"
            color={this.props.textInputColor || '#fff'}
            border={this.props.textInputBorder || 'rgba(255, 255, 255, .8)'}
            onChange={this.onInputChange}
            onClick={this.onInputFocus}
            value={this.state.inputValue}
          />
          <div className={classNames.FormInfo}>
            <Button title="Go" secondary onClick={this.onSubmit} />
            <div className={classNames.FormResult}>
              {this.state.loading && <Text>Please wait...</Text>}
              {this.state.hasSent && <Text>Thanks! I'll be in touch.</Text>}
              {this.state.error && <Text>{this.state.error}</Text>}
            </div>
          </div>
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
