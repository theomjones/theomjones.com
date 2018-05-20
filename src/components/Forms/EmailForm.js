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
    this.setState(() => ({ loading: true }))
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify({
        'form-name': 'Emails',
        email: this.state.inputValue,
      }),
    })
    // API.sendEmail(this.state.inputValue)
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
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
        <form
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={classNames.Form}
          onSubmit={this.onSubmit}
        >
          <TextInput
            name="Emails"
            placeholder="you@mail.co"
            color={this.props.textInputColor || '#fff'}
            border={this.props.textInputBorder || 'rgba(255, 255, 255, .8)'}
            onChange={this.onInputChange}
          />
          <Button title="Go" secondary onClick={this.onSubmit} />
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
