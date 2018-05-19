import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Button.module.css'

const Button = ({ title, onClick, primary, secondary }) => {
  const classes = `${classNames.Button} ${primary &&
    classNames['isPrimary']} ${secondary && classNames['isSecondary']}`

  return (
    <button className={classes} onClick={onClick}>
      <span>{title}</span>
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
