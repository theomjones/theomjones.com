import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Card.module.css'

const Card = ({ padding, children }) => (
  <div
    style={{ padding: typeof padding ? padding : '10px' }}
    className={classNames.Card}
  >
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.any.isRequired,
  padding: PropTypes.number,
}

export default Card
