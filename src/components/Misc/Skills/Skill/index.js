import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Skill.module.css'
import Text from '../../../Typography/Text'
import Icon from '../../../Icon'

const Skill = ({ img, title }) => (
  <div className={classNames.Skill}>
    <Icon src={img} alt={title + ' icon'} />
    <Text>{title}</Text>
  </div>
)

Skill.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Skill
