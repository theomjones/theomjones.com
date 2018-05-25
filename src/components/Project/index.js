import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Project.module.css'
import Link from 'gatsby-link'
import Tag from '../Tag/'
import { Text, Title } from '../Typography/'

const Project = ({ title, description, skills, url }) => (
  <div className={classNames.Project}>
    <div className={classNames.Head}>
      <Title h5 flat title={title} weight={600} size="34%" primary />
      <div className={classNames.Skills}>
        {skills.map(skill => <Tag key={skill} title={skill} />)}
      </div>
    </div>
    <div className={classNames.Body}>
      <Text>{description}</Text>
    </div>
    <div title={url} className={classNames.Link}>
      <Link to={url}>&#8627;</Link>
    </div>
  </div>
)

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
}

export default Project
