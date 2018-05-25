/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  let slug
  let type

  if (node.internal.mediaType) {
    if (node.internal.mediaType.match('image')) {
      slug = createFilePath({ node, getNode, basePath: 'images/pages' })
      type = 'image'
    }
  }
  if (node.internal.type === 'MarkdownRemark') {
    if (node.frontmatter.type == 'project') {
      slug = createFilePath({ node, getNode, basePath: 'projects/pages' })
      type = 'projects'
    } else {
      slug = createFilePath({ node, getNode, basePath: 'posts/pages' })
      type = 'posts'
    }

    createNodeField({
      node,
      name: 'slug',
      value: type + slug,
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
        images: allFile(
          filter: { internal: { mediaType: { regex: "/image/" } } }
        ) {
          edges {
            node {
              internal {
                mediaType
              }
            }
          }
        }
      }
    `).then(res => {
      res.data.images.edges.forEach(img => console.log(img))
      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug.match(/post/g)) {
          createPage({
            layout: 'post',
            path: node.fields.slug,
            component: path.resolve('./src/templates/post.js'),
            context: {
              slug: node.fields.slug,
            },
          })
        } else if (node.fields.slug.match(/project/g)) {
          createPage({
            layout: 'project',
            path: node.fields.slug,
            component: path.resolve('./src/templates/project.js'),
            context: {
              slug: node.fields.slug,
            },
          })
        }
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
