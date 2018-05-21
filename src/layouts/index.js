import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/'
import './index.css'
import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: `I'm Theo, a web developer and UI designer based in London. I am currently looking for work.`,
        },
        {
          name: 'keywords',
          content:
            'web developer, web, software, javascript, react, vue, nodejs, london, web design, design, ui design, front-end developer.',
        },
      ]}
    />
    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
