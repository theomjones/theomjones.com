import React from 'react'
import Link from 'gatsby-link'

import { Container } from '../components/Layout'
import PostLoop from '../components/Posts/PostLoop'
import Hero from '../components/Hero'

const SecondPage = ({ data }) => {
  return (
    <div>
      <Hero
        title="Blog"
        hasHeader
        subtitle="Notes about the web, development, and design."
      />
      <Container padding>
        <PostLoop data={data} search />
      </Container>
    </div>
  )
}

export default SecondPage

export const query = graphql`
  query GetPosts {
    posts: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          wordCount {
            words
          }
          frontmatter {
            date(fromNow: true)
            title
            feature
          }
        }
      }
    }
  }
`
