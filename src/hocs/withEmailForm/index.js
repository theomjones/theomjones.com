import React from 'react'
import EmailForm from '../../components/Forms/EmailForm'
import Container from '../../components/Layout/Components/Container/'

const withEmailForm = WrappedComponent => props => (
  <div>
    <WrappedComponent {...props} />
    <Container>
      <EmailForm />
    </Container>
  </div>
)

export default withEmailForm
