import React from 'react'
import Link from 'gatsby-link'

import PostItem from '../PostItem/'
import classNames from './PostLoop.module.css'
import TextInput from '../../Inputs/TextInput'
import Button from '../../Button'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      posts: props.data.posts.edges,
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.reversePosts = this.reversePosts.bind(this)
  }

  handleSearch(event) {
    const val = event.target.value
    this.setState(() => ({ searchString: val }))
  }

  reversePosts() {
    this.setState(prevState => ({ posts: prevState.posts.reverse() }))
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
            <div className={classNames.Filters}>
              <Button title="Sort" onClick={this.reversePosts} />
            </div>
          </div>
        )}
        {this.state.posts.map(post => {
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
