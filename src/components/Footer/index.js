import React from 'react'

import Hero from '../Hero/'
import { Text } from '../Typography'

const Footer = props => (
  <footer>
    <Hero withForm>
      <Text>
        Built with React and <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
      </Text>
      <Text>&copy; Theo Messenger-Jones - {new Date().getFullYear()}</Text>
    </Hero>
  </footer>
)

export default Footer
