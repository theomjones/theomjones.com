import React from 'react'
import PropTypes from 'prop-types'

import classNames from './hero.module.css'
import Container from '../Layout/Components/Container/'
import EmailForm from '../Forms/EmailForm'

const Hero = ({ withForm = false, subtitle, title, hasHeader, image }) => (
  <div
    className={classNames.Hero}
    style={{
      paddingTop: hasHeader ? '3.5rem' : null,
      background: image
        ? `linear-gradient(126deg, rgba(32, 4, 133, .7), rgba(117, 14, 177, .7)), url("${image}")`
        : `rgba(0, 0, 0, 0)
    linear-gradient(126deg, rgb(32, 4, 133), rgb(117, 14, 177)) scroll 0%
    0%`,
    }}
  >
    <Container>
      <div>
        <h1 className={classNames.Title}>{title}</h1>
        {subtitle && <h2 className={classNames.Subtitle}>{subtitle}</h2>}
        {/* Put email form on it. */}
        {withForm && <EmailForm />}
      </div>
    </Container>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subititle: PropTypes.string,
  withForm: PropTypes.bool,
  hasHeader: PropTypes.bool,
}

export default Hero
