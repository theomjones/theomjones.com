import React from 'react'

import Hero from '../components/Hero/'
import { Container } from '../components/Layout/'

import classNames from './PostTemplate.module.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Hero
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle || null}
        image={post.frontmatter.feature}
        hasHeader
      />
      <Container>
        <div
          className={classNames.PostTemplate}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
      <Hero withForm />
    </div>
  )
}

export const query = graphql`
  query PostInfo($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        feature
        date(formatString: "MMM DD YYYY")
      }
      timeToRead
      wordCount {
        words
      }
      html
    }
  }
`
