import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header/'
import Container from '../components/Layout/Components/Container/index'

import 'prismjs/themes/prism-coy.css'

const Post = ({ children }) => (
  <div>
    <Header />
    {children()}
  </div>
)

Post.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Post
