import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Pill.module.css'
import Text from '../Typography/Text'

const Pill = ({ title }) => (
  <div className={classNames.Pill}>
    <Text>{title}</Text>
  </div>
)

Pill.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Pill
