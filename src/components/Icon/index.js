import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Icon.module.css'

/**
 *
 * @param {props} Object
 * @prop {src} String
 * @prop {alt} String
 * @prop {round} Bool
 * @prop {shadow} Bool
 * @prop {to} String
 */
const Icon = ({ src, alt, round, shadow, to, size }) => (
  <div
    className={classNames.Icon}
    title={to ? to : ''}
    onClick={() => {
      if (to) {
        window.open(to, '_blank')
      }
      return
    }}
    style={{
      height: size ? size + 'px' : null,
      width: size ? size + 'px' : null,
    }}
  >
    <img
      className={to && classNames.isLink}
      style={{
        borderRadius: round && '50%',
        boxShadow: shadow && '-1px 2px 2px rgba(0, 0, 0, 0.2)',
      }}
      src={src}
      alt={alt}
    />
  </div>
)

Icon.propTypes = {
  /** Src is string */
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  round: PropTypes.bool,
  shadow: PropTypes.bool,
  to: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default Icon
