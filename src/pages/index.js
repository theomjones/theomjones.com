import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero/'
import PostLoop from '../components/Posts/PostLoop'
import { Grid, Container, Col } from '../components/Layout/'

import { Text } from '../components/Typography'

import Section from '../components/Section'
import Project from '../components/Project'
import Github from '../components/Misc/Github'
import Skills from '../components/Misc/Skills'

const IndexPage = ({ data }) => (
  <div>
    <Hero
      title="I'm Theo"
      subtitle="A full stack JavaScript developer, based in London."
      withForm={true}
      hasHeader={true}
    />
    <Container padding>
      <Grid>
        <Col>
          <Section title="Bio" canCollapse={false}>
            <p>
              I've been building for the web professionally for over two years.
              My main love is JavaScript &amp; TypeScript but I've been working
              a lot with Go lateley. I like building practical, user-focused
              products and I like to think I have an eye for design.
            </p>
            <p>
              I'm currently writing TypeScript and Go, full
              time at{' '}
              <a
                style={{
                  color: 'rgb(235, 20, 127)',
                }}
                href="https://www.kittoffices.com/"
              >
                Kitt
              </a>
              .
            </p>
          </Section>
          <Section title="Projects" canCollapse={false}>
            {data.projects.edges
              .filter(p => p.node.frontmatter.date > 2017)
              .map(project => (
                <Project
                  key={project.node.frontmatter.url}
                  title={project.node.frontmatter.title}
                  skills={project.node.frontmatter.skills}
                  description={project.node.frontmatter.description}
                  url={project.node.fields.slug}
                  date={project.node.frontmatter.date}
                />
              ))}
            <Link
              style={{
                fontSize: '80%',
                textDecoration: 'underline',
              }}
              to="/projects"
            >
              View More
            </Link>
          </Section>
        </Col>
        <Col>
          <Github />
        </Col>
      </Grid>
      <Grid>
        <Col>
          <Section title="Skills">
            <Skills />
          </Section>
        </Col>
        <Col>
          <Section title="Latest">
            <PostLoop data={data} />
            <Text>
              <Link to="/blog/" style={{ float: 'right', fontSize: '80%' }}>
                View More
              </Link>
            </Text>
          </Section>
        </Col>
      </Grid>
    </Container>
  </div>
)

export default IndexPage

export const query = graphql`
  query GetIndexData {
    posts: allMarkdownRemark(
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
            date(formatString: "MMM DD YYYY")
            title
            feature
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            skills
            url
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`
