import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero/'
import PostLoop from '../components/Posts/PostLoop'
import { Grid, Container, Col } from '../components/Layout/'

import Section from '../components/Section/'

const IndexPage = ({ data }) => (
  <div>
    <Hero
      title="I'm Theo"
      subtitle="A full-stack JavaScript developer based in London."
      withForm={true}
      hasHeader={true}
    />
    <Container>
      <Grid>
        <Col>
          <Section title="Projects">
            <p>Hello world</p>
            <Section title="2018">
              <ul>
                <li>Cool</li>
              </ul>
            </Section>
          </Section>
        </Col>
        <Col>
          <Section title="Latest">
            <PostLoop data={data} />
          </Section>
        </Col>
      </Grid>
    </Container>
  </div>
)

export default IndexPage

export const query = graphql`
  query GetPosts {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
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
