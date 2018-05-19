import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Post.module.css'
import Header from '../components/Header/'
import Container from '../components/Layout/Components/Container/index'

import '../prism-themes/theme.css'

const Post = ({ children }) => (
  <div className={classNames.Post}>
    <Header />
    {children()}
  </div>
)

Post.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Post
