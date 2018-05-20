import React from 'react'

import { Helmet } from 'react-helmet'
import Hero from '../components/Hero/'
import { Container } from '../components/Layout/'

import classNames from './PostTemplate.module.css'

export default ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.markdownRemark
  return (
    <div>
      <Helmet>
        <title>
          {post.frontmatter.title} &mdash; {siteTitle}
        </title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            post.frontmatter.description
              ? post.frontmatter.description
              : post.frontmatter.subtitle
          }
        />
      </Helmet>
      <Hero
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle ? post.frontmatter.subtitle : null}
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
        subtitle
        feature
        date(formatString: "MMM DD YYYY")
      }
      timeToRead
      wordCount {
        words
      }
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
