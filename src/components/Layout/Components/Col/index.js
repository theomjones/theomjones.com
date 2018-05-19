import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Col.module.css'

const Col = ({ children }) => <div className={classNames.Col}>{children}</div>

Col.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Col
