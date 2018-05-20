import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Title.module.css'

const Title = ({
  title,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  flat,
  weight,
  size,
  primary,
  secondary,
}) => {
  const classes = `${classNames.Title} ${primary &&
    classNames.primary} ${secondary && classNames.secondary}`
  return (
    <div className={classes} style={{ margin: flat && 'none' }}>
      {h1 && (
        <h1
          className={classNames.h1}
          style={{
            fontWeight: weight ? weight : null,
            fontSize: size ? size : null,
          }}
        >
          {title}
        </h1>
      )}
      {h2 && (
        <h2
          className={classNames.h2}
          style={{
            fontWeight: weight ? weight : null,
            fontSize: size ? size : null,
          }}
        >
          {title}
        </h2>
      )}
      {h3 && (
        <h3
          className={classNames.h3}
          style={{
            fontWeight: weight ? weight : null,
            fontSize: size ? size : null,
          }}
        >
          {title}
        </h3>
      )}
      {h4 && (
        <h4
          className={classNames.h4}
          style={{
            fontWeight: weight ? weight : null,
            fontSize: size ? size : null,
          }}
        >
          {title}
        </h4>
      )}
      {h5 && (
        <h5
          className={classNames.h5}
          style={{
            fontWeight: weight ? weight : null,
            fontSize: size ? size : null,
          }}
        >
          {title}
        </h5>
      )}
      {h6 && (
        <h6
          className={classNames.h6}
          style={{
            fontWeight: weight ? weight : null,
            fontSize: size ? size : null,
          }}
        >
          {title}
        </h6>
      )}
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  flat: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  weight: PropTypes.number,
  size: PropTypes.string,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
}

export default Title
