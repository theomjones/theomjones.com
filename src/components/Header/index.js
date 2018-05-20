import React from 'react'
import Link from 'gatsby-link'

import HeaderItem from '../HeaderItem/'

import classNames from './header.module.css'

import { Container } from '../Layout/'
import Grid from '../Layout/Components/Grid/'

import Icon from '../Icon/'

import GithubIcon from '../../img/icons/github.svg'
import BioPic from '../../img/bio.jpg'
import TwitterIcon from '../../img/icons/twitter.svg'

export default props => (
  <div className={classNames.Header}>
    <Container>
      <Grid>
        <div className={classNames.Items}>
          <HeaderItem title="Home" to="/" />
          <HeaderItem title="Blog" to="/blog/" />
        </div>
        <div className={classNames.Icons}>
          <Icon
            src={TwitterIcon}
            alt="Twitter icon"
            to="https://twitter.com/theomjones"
          />
          <Icon
            src={GithubIcon}
            alt="Github Icon"
            to="https://github.com/theomjones"
          />
          <Icon
            src={BioPic}
            alt="Bio Icon"
            round
            shadow
            to="https://www.linkedin.com/in/theomjones/"
          />
        </div>
      </Grid>
    </Container>
  </div>
)

export const query = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
