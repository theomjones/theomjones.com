import React from 'react'
import Link from 'gatsby-link'

import PostItem from '../PostItem/'
import classNames from './PostLoop.module.css'

export default ({ data }) => (
  <div className={classNames.PostLoop}>
    {data.allMarkdownRemark.edges.map(post => (
      <PostItem key={post.node.fields.slug} post={post.node} />
    ))}
  </div>
)
