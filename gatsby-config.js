module.exports = {
  siteMetadata: {
    title: 'Theo MJ - Web Developer',
    author: 'Theo Messenger-Jones',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-copy-linked-files'],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {
                js: 'javascript',
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/img/favicon/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-remark-copy-linked-files'],
      },
    },
    // Google analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-114761965-2',
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  ],
}
