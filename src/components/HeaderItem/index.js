import React from 'react'
import Link from 'gatsby-link'

import classNames from './headerItem.module.css'

export default props => (
  <div className={classNames.HeaderItem}>
    <Link exact to={props.to} activeClassName={classNames.active}>
      {props.title}
    </Link>
  </div>
)
