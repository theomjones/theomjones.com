import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header/'
import Container from '../components/Layout/Components/Container/index'

import '../prism-themes/theme.css'

const Project = ({ children }) => (
  <div>
    <Header />
    {children()}
  </div>
)

Project.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Project
