import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Grid.module.css'

const Grid = ({ children }) => <div className={classNames.Grid}>{children}</div>

Grid.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Grid
