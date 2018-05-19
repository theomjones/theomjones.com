import React from 'react'
import Link from 'gatsby-link'

import classNames from './headerItem.module.css'

export default props => (
  <div className={classNames.HeaderItem}>
    <Link to={props.to}>{props.title}</Link>
  </div>
)
