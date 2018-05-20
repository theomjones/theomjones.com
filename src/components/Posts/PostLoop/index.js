import React from 'react'
import Link from 'gatsby-link'

import PostItem from '../PostItem/'
import classNames from './PostLoop.module.css'
import TextInput from '../../Inputs/TextInput'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(event) {
    const val = event.target.value
    this.setState(() => ({ searchString: val }))
  }

  render() {
    const { data } = this.props

    return (
      <div className={classNames.PostLoop}>
        {this.props.search && (
          <div className={classNames.SearchBar}>
            <TextInput
              autoFocus
              placeholder="Search..."
              onChange={this.handleSearch}
            />
          </div>
        )}
        {data.posts.edges.map(post => {
          return (
            post.node.frontmatter.title
              .toUpperCase()
              .match(this.state.searchString.toUpperCase()) && (
              <PostItem key={post.node.fields.slug} post={post.node} />
            )
          )
        })}
      </div>
    )
  }
}
