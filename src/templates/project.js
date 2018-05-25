import React from 'react'

import { Helmet } from 'react-helmet'
import Hero from '../components/Hero/'
import { Container } from '../components/Layout/'
import { Text } from '../components/Typography'

import IOSIcon from '../img/icons/ios.svg'

import Pill from '../components/Pill'

import classNames from './PostTemplate.module.css'
import Icon from '../components/Icon/index'

export default ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const project = data.markdownRemark
  return (
    <div>
      <Helmet>
        <title>
          {project.frontmatter.title} &mdash; {siteTitle}
        </title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            project.frontmatter.description
              ? project.frontmatter.description
              : project.frontmatter.subtitle
          }
        />
      </Helmet>
      <Hero
        title={project.frontmatter.title}
        subtitle={
          project.frontmatter.subtitle ? project.frontmatter.subtitle : null
        }
        hasHeader
      >
        <div className={classNames.Info}>
          {project.frontmatter.skills.map(skill => <Pill title={skill} />)}
        </div>
        <div className={classNames.AppLinks}>
          {project.frontmatter.appLinks &&
            project.frontmatter.appLinks.map(link => (
              <Icon to={link.url} src={'/' + link.icon} />
            ))}
        </div>
      </Hero>
      <Container padding>
        <div
          className={classNames.PostTemplate}
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </Container>
      <Hero withForm />
    </div>
  )
}

export const query = graphql`
  query projectInfo($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        appLinks {
          icon
          url
        }
        subtitle
        skills
        date(formatString: "MMM DD YYYY")
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
