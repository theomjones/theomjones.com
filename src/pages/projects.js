import React from 'react'
import Project from '../components/Project'
import Hero from '../components/Hero'
import Container from '../components/Layout/Components/Container'

export default ({ data }) => (
  <div>
    <Hero title="Projects" />
    <Container padding>
      {data.projects.edges.map(project => (
        <Project
          key={project.node.frontmatter.url}
          title={project.node.frontmatter.title}
          skills={project.node.frontmatter.skills}
          description={project.node.frontmatter.description}
          url={project.node.fields.slug}
        />
      ))}
    </Container>
  </div>
)

export const query = graphql`
  query getProjects {
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY")
            skills
            description
            subtitle
            appLinks {
              url
              icon
            }
          }
        }
      }
    }
  }
`
