import React from 'react'
import PropTypes from 'prop-types'

import classNames from './container.module.css'

const Container = props => (
  <div className={classNames.Container}>{props.children}</div>
)

Container.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Container
