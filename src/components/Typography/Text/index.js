import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Text.module.css'

const Text = ({ children, light, heavy, italic }) => {
  const classList = `${classNames.Para} ${light &&
    classNames['isLight']} ${heavy && classNames['isHeavy']} ${italic &&
    classNames['isItalic']}`
  return (
    <div className={classNames.Text}>
      <p className={classList}>{children}</p>
    </div>
  )
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  light: PropTypes.bool,
  heavy: PropTypes.bool,
  italic: PropTypes.bool,
}

export default Text
