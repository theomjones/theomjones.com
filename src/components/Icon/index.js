import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Icon.module.css'

const Icon = ({ src, alt, round, shadow, to }) => (
  <div
    className={classNames.Icon}
    title={to ? to : ''}
    onClick={() => {
      if (to) {
        window.open(to, '_blank')
      }
      return
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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  round: PropTypes.bool,
  shadow: PropTypes.bool,
  to: PropTypes.string,
}

export default Icon
