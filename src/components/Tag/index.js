import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Tag.module.css'

const Tag = ({ title }) => <div className={classNames.Tag}>{title}</div>

Tag.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Tag
