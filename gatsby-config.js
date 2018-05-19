module.exports = {
  siteMetadata: {
    title: 'Theo MJ - Web Developer',
    author: 'Theo Messenger-Jones',
  },
  plugins: [
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
  ],
}
