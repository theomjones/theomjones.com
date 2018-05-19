import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import classNames from './PostItem.module.css'

import Card from '../../Card/'

/**
 * PostItem can be nested only inside PostLoop
 */
const PostItem = ({ post }) => {
  const { frontmatter } = post
  const { fields } = post
  return (
    <div className={classNames.PostItem}>
      <Link to={post.fields.slug}>
        <Card padding={0}>
          <div
            className={classNames.Feature}
            style={{
              backgroundImage: frontmatter.feature
                ? `url(${post.frontmatter.feature})`
                : 'url(https://source.unsplash.com/daily?coding)',
            }}
          />
          <div className={classNames.Content}>
            <h3 className={classNames.Title}>{frontmatter.title}</h3>
          </div>
        </Card>
      </Link>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostItem
