import React from 'react'
import PropTypes from 'prop-types'

import classNames from './container.module.css'

const Container = props => (
  <div
    className={classNames.Container}
    style={{ padding: props.padding && '1.5rem 10px' }}
  >
    {props.children}
  </div>
)

Container.propTypes = {
  children: PropTypes.any.isRequired,
  padding: PropTypes.bool,
}

export default Container
