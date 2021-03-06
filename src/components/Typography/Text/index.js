import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Text.module.css'

const Text = ({ children, light, heavy, italic, center }) => {
  const classList = `${classNames.Para} ${light &&
    classNames['isLight']} ${heavy && classNames['isHeavy']} ${italic &&
    classNames['isItalic']}`
  return (
    <div className={classNames.Text}>
      <p
        style={{ textAlign: center ? 'center' : 'left' }}
        className={classList}
      >
        {children}
      </p>
    </div>
  )
}

Text.propTypes = {
  children: PropTypes.any.isRequired,
  light: PropTypes.bool,
  heavy: PropTypes.bool,
  italic: PropTypes.bool,
}

export default Text
