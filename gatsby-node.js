/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'posts/pages' })
    createNodeField({
      node,
      name: 'slug',
      value: 'posts' + slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(res => {
      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          layout: 'post',
          path: node.fields.slug,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    if (page.path !== '/') {
      page.layout = 'default'
      createPage(page)
    }
    resolve()
  })
}
