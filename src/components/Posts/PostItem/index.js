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
  console.log(frontmatter)
  return (
    <div className={classNames.PostItem}>
      <Link to={'/' + post.fields.slug}>
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
            <span className={classNames.Date}>{frontmatter.date}</span>
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
