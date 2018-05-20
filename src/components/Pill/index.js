import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Pill.module.css'

const Pill = ({ title }) => <div className={classNames.Pill}>{title}</div>

Pill.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Pill
